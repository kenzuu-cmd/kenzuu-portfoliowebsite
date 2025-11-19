import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  website: z.string().optional(),
})

// In-memory rate limiting
// WARNING: This is a simple in-memory store that will reset on server restart
// For production, consider using Redis, database, or external rate limiting service
type RateLimitData = {
  count: number
  resetTime: number
}

const rateLimitStore = new Map<string, RateLimitData>()
const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 minutes in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 5

function getRateLimitKey(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    '127.0.0.1'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const data = rateLimitStore.get(ip)

  if (!data) {
    // First request from this IP
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  if (now > data.resetTime) {
    // Window has expired, reset
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  if (data.count >= RATE_LIMIT_MAX_REQUESTS) {
    // Rate limit exceeded
    return true
  }

  // Increment count
  data.count++
  rateLimitStore.set(ip, data)
  return false
}

// Cleanup expired entries periodically
// In production, consider using a proper cleanup mechanism
setInterval(() => {
  const now = Date.now()
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now > data.resetTime) {
      rateLimitStore.delete(ip)
    }
  }
}, 5 * 60 * 1000) // Cleanup every 5 minutes

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientIp = getRateLimitKey(request)
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { 
          error: 'Too many requests', 
          message: 'Please wait before sending another message.' 
        },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Check honeypot field - if filled, it's likely spam
    if (validatedData.website && validatedData.website.trim() !== '') {
      // Silently return success to not let bots know they were detected
      return NextResponse.json({ success: true })
    }

    // Log the contact form submission (replace with email service later)
    console.log('Contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
      ip: clientIp,
    })

    // TODO: Send email notification
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   subject: `New contact from ${validatedData.name}`,
    //   body: validatedData.message,
    //   replyTo: validatedData.email
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
