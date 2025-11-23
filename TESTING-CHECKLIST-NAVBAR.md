# Mobile Navigation Testing Checklist

## Pre-Testing Setup

### Local Development Server
```bash
npm run dev
```
Open in browser: http://localhost:3000

### Test Devices
- [ ] iPhone SE (375×667)
- [ ] iPhone 12/13/14 (390×844)
- [ ] iPhone 14 Pro Max (428×926)
- [ ] Android Medium (360×800)
- [ ] Android Large (412×915)
- [ ] iPad Mini (768×1024)
- [ ] iPad Pro (1024×1366)

### Test Browsers
- [ ] Chrome (Desktop + Mobile)
- [ ] Safari (Desktop + iOS)
- [ ] Firefox (Desktop + Mobile)
- [ ] Edge (Desktop)

---

## Visual Variant Selection Test

**Location:** `src/components/Navbar.tsx` line 25

### Option A: Accent Bar (Default)
```tsx
const MENU_STYLE_VARIANT = 'accent-bar'
```

**Test on mobile device:**
- [ ] 5px blue left border visible
- [ ] Inset shadow creates depth
- [ ] Border color matches brand (`#3b82f6`)
- [ ] Works in light mode
- [ ] Works in dark mode
- [ ] No layout shift on open

**Screenshot:** Take photo in light + dark mode

---

### Option B: Refined Pill
```tsx
const MENU_STYLE_VARIANT = 'refined-pill'
```

**Test on mobile device:**
- [ ] Rounded corners visible (16px radius)
- [ ] Subtle 1px border present
- [ ] Soft glow/shadow visible
- [ ] Works in light mode
- [ ] Works in dark mode
- [ ] No layout shift on open

**Screenshot:** Take photo in light + dark mode

---

## Animation Tests

### Menu Panel Slide
- [ ] Slides from left edge (not right)
- [ ] Smooth 260ms animation
- [ ] No jank or stutter
- [ ] Reaches final position cleanly
- [ ] Runs at 60fps (check DevTools)

### Menu Items Stagger
- [ ] Items fade in with 30ms delay
- [ ] Slight left-to-right motion (8px)
- [ ] All items appear within 500ms total
- [ ] Stagger visible (not too fast)

### Press Microinteraction
- [ ] Scale to 0.98 on tap
- [ ] Returns to 1.0 after release
- [ ] Works on all menu items
- [ ] Feels responsive (no delay)

### Backdrop
- [ ] Fades in smoothly
- [ ] 6px blur visible (check Safari)
- [ ] 42% opacity (darker than before)
- [ ] No performance issues

---

## Interaction Tests

### Opening Menu
- [ ] Tap hamburger button - menu opens
- [ ] Hamburger changes to X icon
- [ ] First menu item auto-focused
- [ ] Backdrop appears with blur
- [ ] Body scroll locked (no scroll behind)

### Closing Menu
- [ ] Tap X button - menu closes
- [ ] Tap backdrop - menu closes
- [ ] Press Escape key - menu closes
- [ ] Navigate to page - menu closes
- [ ] Focus returns to hamburger button

### Navigation
- [ ] Tap Home - navigates, menu closes
- [ ] Tap Work - navigates, menu closes
- [ ] Tap About - navigates, menu closes
- [ ] Tap Music - navigates, menu closes
- [ ] Tap Animations - navigates, menu closes
- [ ] Tap Contact - navigates, menu closes
- [ ] Active page highlighted correctly

### Theme Toggle (Menu Footer)
- [ ] Toggle visible at bottom of menu
- [ ] Changes theme when clicked
- [ ] Icon updates (sun/moon)
- [ ] Menu remains open after toggle
- [ ] Theme persists after menu closes

---

## Keyboard Navigation Tests

### Focus Management
- [ ] Menu opens → first item focused
- [ ] Focus visible indicator clear
- [ ] Focus trapped within menu
- [ ] Tab cycles through items only
- [ ] Menu closes → focus returns to hamburger

### Arrow Keys
- [ ] ArrowDown → moves to next item
- [ ] ArrowDown on last → wraps to first
- [ ] ArrowUp → moves to previous item
- [ ] ArrowUp on first → wraps to last
- [ ] Prevents default scroll behavior

### Escape Key
- [ ] Press Escape → menu closes
- [ ] Focus returns to hamburger
- [ ] Works from any menu item

### Tab Key
- [ ] Tab moves through menu items
- [ ] Tab on last item → moves to theme toggle
- [ ] Tab on theme toggle → moves to close button
- [ ] Tab on close button → wraps to first item
- [ ] Does NOT tab to elements outside menu

---

## Accessibility Tests

### Screen Readers

#### VoiceOver (iOS)
- [ ] Announces "Main navigation menu"
- [ ] Reads menu item labels correctly
- [ ] Announces "button" for hamburger
- [ ] Announces "expanded" / "collapsed" state
- [ ] Theme toggle announced correctly
- [ ] Close button announced as "Close menu"

#### TalkBack (Android)
- [ ] Navigation announces correctly
- [ ] Swipe gestures work properly
- [ ] Double-tap activates items
- [ ] Menu dismissal announced

### ARIA Attributes
- [ ] Hamburger has `aria-expanded` (true/false)
- [ ] Menu panel has `aria-modal="true"`
- [ ] Menu container has `role="navigation"`
- [ ] Close button has `aria-label="Close menu"`
- [ ] Hamburger has descriptive `aria-label`

### Color Contrast (WCAG AA)
Check with browser DevTools or Contrast Checker:
- [ ] Menu item text: 4.5:1 ratio (light mode)
- [ ] Menu item text: 4.5:1 ratio (dark mode)
- [ ] Active item highlight: 3:1 ratio
- [ ] Theme toggle icon: 3:1 ratio
- [ ] Close button X: 3:1 ratio

### Touch Targets (WCAG 2.1 Level AAA)
- [ ] Hamburger button: 44×44px minimum
- [ ] Menu items: 44px height minimum
- [ ] Close button: 44×44px minimum
- [ ] Theme toggle: 44×44px minimum

---

## Responsive Tests

### Small Mobile (320px - 374px)
- [ ] Menu width scales to 85vw
- [ ] No horizontal overflow
- [ ] Text doesn't wrap awkwardly
- [ ] Touch targets still 44px

### Medium Mobile (375px - 428px)
- [ ] Menu width 320px fixed
- [ ] Comfortable spacing
- [ ] All items visible without scroll

### Large Mobile / Small Tablet (429px - 767px)
- [ ] Menu still appears (hamburger visible)
- [ ] Width remains 320px
- [ ] Visual variant renders correctly

### Desktop (768px+)
- [ ] Hamburger menu hidden
- [ ] Horizontal navigation visible
- [ ] No mobile menu code running

---

## Performance Tests

### Chrome DevTools Performance
1. Open DevTools → Performance tab
2. Start recording
3. Open/close menu 3 times
4. Stop recording

**Check:**
- [ ] Animation runs at 60fps
- [ ] No long tasks (>50ms)
- [ ] Layout shift score: 0
- [ ] No memory leaks

### Lighthouse Mobile Audit
```bash
# Or use Chrome DevTools Lighthouse tab
```

**Target Scores:**
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 90+
- [ ] SEO: 95+

**Specific Checks:**
- [ ] No blocking resources
- [ ] Proper touch targets
- [ ] Sufficient color contrast
- [ ] ARIA attributes valid

---

## Edge Cases & Stress Tests

### Rapid Interactions
- [ ] Open/close rapidly (5x fast) - no glitches
- [ ] Mash hamburger button - no state bugs
- [ ] Switch theme during animation - no flicker

### Long Content
- [ ] Add 20 menu items (test overflow)
- [ ] Scroll within menu works
- [ ] Focus visible when scrolled

### Network Conditions
- [ ] Slow 3G - menu still responsive
- [ ] Offline - menu functions normally
- [ ] No external dependencies blocking

### Multi-Touch
- [ ] Two-finger tap - single action only
- [ ] Pinch zoom - menu scales correctly
- [ ] Touch during animation - no crash

---

## Cross-Browser Compatibility

### Safari (iOS)
- [ ] Backdrop blur works (-webkit-backdrop-filter)
- [ ] Touch events fire correctly
- [ ] No scrolling issues
- [ ] Animations smooth

### Chrome Mobile
- [ ] All animations work
- [ ] Focus trap works
- [ ] Keyboard (if connected) works

### Firefox Mobile
- [ ] Backdrop blur fallback works
- [ ] Animations render correctly
- [ ] Touch targets accurate

### Samsung Internet
- [ ] Menu renders properly
- [ ] Animations work
- [ ] Theme toggle works

---

## Regression Tests

### Previous Features Still Work
- [ ] Desktop navigation unchanged
- [ ] Theme toggle (desktop) works
- [ ] Active page highlighting works
- [ ] Logo click navigates home
- [ ] All pages load correctly

### Mobile Breakpoint
- [ ] Hamburger appears at <768px
- [ ] Horizontal nav appears at ≥768px
- [ ] Smooth transition between breakpoints

---

## Documentation Tests

### Code Comments
- [ ] MENU_STYLE_VARIANT has usage comment
- [ ] Complex logic has explanations
- [ ] Accessibility notes present

### README/Docs
- [ ] NAVBAR-IMPROVEMENTS.md accurate
- [ ] MOBILE-UX-IMPROVEMENTS.md updated
- [ ] Testing checklist complete

---

## Final Visual QA

### Screenshots Needed
**Before/After Comparison:**
- [ ] iPhone 12 - Menu closed
- [ ] iPhone 12 - Menu open (Accent Bar)
- [ ] iPhone 12 - Menu open (Refined Pill)
- [ ] iPad Mini - Menu open
- [ ] Desktop - Horizontal nav

**Light + Dark Mode:**
- [ ] Menu open - Light mode
- [ ] Menu open - Dark mode
- [ ] Active item highlight - both modes

### Video/GIF Recording
- [ ] Record 5s clip: Open → Navigate → Close
- [ ] Show press microinteraction
- [ ] Show arrow key navigation
- [ ] Show theme toggle in action

---

## Sign-Off Checklist

### Developer QA
- [x] TypeScript compiles with no errors
- [x] ESLint passes with no warnings
- [x] No console errors in browser
- [x] Code committed and pushed
- [ ] Documentation complete

### Device Testing
- [ ] Tested on real iPhone
- [ ] Tested on real Android
- [ ] Tested on real iPad
- [ ] All interactions work correctly

### Accessibility Audit
- [ ] Screen reader tested
- [ ] Keyboard navigation verified
- [ ] Color contrast checked
- [ ] Touch targets verified

### Performance Verified
- [ ] Lighthouse score >90
- [ ] Animation at 60fps
- [ ] No layout shift
- [ ] Fast load time

### Ready for PR
- [ ] All tests passing
- [ ] Screenshots captured
- [ ] Video/GIF recorded
- [ ] Documentation updated
- [ ] Visual variant chosen (or both provided)

---

## Notes & Issues

**Date Tested:** _________________

**Tested By:** _________________

**Visual Variant Selected:** 
- [ ] Option A: Accent Bar
- [ ] Option B: Refined Pill

**Issues Found:**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**Additional Notes:**
_______________________________________________
_______________________________________________
_______________________________________________

---

**Next Action:** Create GitHub PR with comprehensive description and test results.
