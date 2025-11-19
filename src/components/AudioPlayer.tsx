'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Repeat1,
} from 'lucide-react'
import { Track } from '@/lib/tracks'

type RepeatMode = 'none' | 'all' | 'one'

interface AudioPlayerProps {
  tracks: Track[]
}

export function AudioPlayer({ tracks }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [repeatMode, setRepeatMode] = useState<RepeatMode>('none')
  const [isLoaded, setIsLoaded] = useState(false)

  const currentTrack = tracks[currentTrackIndex]

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
      setIsLoaded(true)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleEnded = () => {
    if (repeatMode === 'one') {
      handlePlay()
    } else if (repeatMode === 'all' || currentTrackIndex < tracks.length - 1) {
      handleNext()
    } else {
      setIsPlaying(false)
    }
  }

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Error playing audio:', error)
      }
    }
  }

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  const handleNext = () => {
    const nextIndex =
      currentTrackIndex < tracks.length - 1 ? currentTrackIndex + 1 : 0
    setCurrentTrackIndex(nextIndex)
  }

  const handlePrevious = () => {
    const prevIndex =
      currentTrackIndex > 0 ? currentTrackIndex - 1 : tracks.length - 1
    setCurrentTrackIndex(prevIndex)
  }

  const handleSeek = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value
      setCurrentTime(value)
    }
  }

  const handleRepeatToggle = () => {
    setRepeatMode((prev) => {
      if (prev === 'none') return 'all'
      if (prev === 'all') return 'one'
      return 'none'
    })
  }

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index)
  }

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      switch (event.code) {
        case 'Space':
          event.preventDefault()
          handlePlayPause()
          break
        case 'ArrowLeft':
          event.preventDefault()
          handleSeek(Math.max(0, currentTime - 5))
          break
        case 'ArrowRight':
          event.preventDefault()
          handleSeek(Math.min(duration, currentTime + 5))
          break
      }
    },
    [currentTime, duration, handlePlayPause]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [handleKeydown])

  useEffect(() => {
    setIsPlaying(false)
    setCurrentTime(0)
    setIsLoaded(false)
  }, [currentTrackIndex])

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
      <audio
        ref={audioRef}
        src={currentTrack?.src}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Playlist */}
      <div className="max-h-48 overflow-y-auto border-b border-neutral-200 dark:border-neutral-700">
        {tracks.map((track, index) => (
          <button
            key={track.id}
            onClick={() => handleTrackSelect(index)}
            className={`w-full text-left p-4 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors ${
              index === currentTrackIndex
                ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300'
                : 'text-neutral-700 dark:text-neutral-300'
            }`}
            aria-label={`Play ${track.title} by ${track.artist}`}
          >
            <div className="font-medium">{track.title}</div>
            <div className="text-sm opacity-75">{track.artist}</div>
          </button>
        ))}
      </div>

      {/* Current Track Info */}
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
          {currentTrack?.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {currentTrack?.artist}
        </p>
      </div>

      {/* Controls */}
      <div className="p-4">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-neutral-500 w-10">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 relative">
              <div className="h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full">
                <div
                  className="h-full bg-brand-500 rounded-full transition-all duration-100"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={(e) => handleSeek(Number(e.target.value))}
                className="absolute inset-0 w-full h-1 opacity-0 cursor-pointer"
                role="slider"
                aria-label="Seek position"
                aria-valuemin={0}
                aria-valuemax={duration}
                aria-valuenow={currentTime}
                aria-valuetext={`${formatTime(currentTime)} of ${formatTime(
                  duration
                )}`}
                disabled={!isLoaded}
              />
            </div>
            <span className="text-xs text-neutral-500 w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handleRepeatToggle}
            className={`p-2 rounded-full transition-colors ${
              repeatMode !== 'none'
                ? 'text-brand-600 hover:bg-brand-100 dark:hover:bg-brand-900/20'
                : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }`}
            aria-label={`Repeat mode: ${repeatMode}`}
          >
            {repeatMode === 'one' ? (
              <Repeat1 className="w-5 h-5" />
            ) : (
              <Repeat className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={handlePrevious}
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Previous track"
          >
            <SkipBack className="w-5 h-5" />
          </button>

          <button
            onClick={handlePlayPause}
            className="p-3 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            disabled={!isLoaded}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Next track"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="mt-4 text-xs text-neutral-500 text-center">
          Space: Play/Pause • ← →: Seek ±5s
        </div>
      </div>
    </div>
  )
}
