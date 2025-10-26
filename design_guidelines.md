# PlanetCo Platform Design Guidelines

## Design Approach
**Hybrid Approach**: Drawing inspiration from modern B2B SaaS platforms (Linear, Vercel, Stripe) with emphasis on clarity, tech-forward aesthetics, and product showcase excellence. Focus on information architecture and professional presentation.

## Typography System

**Font Stack**:
- Headlines: Inter (700, 600, 500) - clean, modern, tech-appropriate
- Body: Inter (400, 500) - optimal readability
- Code/Technical: JetBrains Mono (monospace elements)

**Hierarchy**:
- Hero Title: 4xl-6xl, font-bold, tracking-tight
- Section Headers: 3xl-4xl, font-semibold
- Product Names: 2xl-3xl, font-semibold
- Taglines: xl-2xl, font-medium
- Body Text: base-lg, font-normal
- Labels/Pills: xs-sm, font-medium, uppercase tracking-wide

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24

**Grid Structure**:
- Container: max-w-7xl mx-auto px-6 lg:px-8
- Product Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Section Padding: py-16 md:py-24 lg:py-32

**Breakpoints**:
- Mobile-first approach
- Key breaks at md (768px) and lg (1024px)

## Component Library

### Navigation
- Fixed header with backdrop blur effect
- Logo left, nav links center, CTA button right
- Mobile: hamburger menu with slide-out panel
- Height: 16 units with py-4
- Links: font-medium with subtle hover underline animation

### Hero Section
- Full-width background with subtle gradient mesh or abstract tech pattern
- Height: 85vh minimum
- Content: centered, max-w-4xl
- Headline + subheadline + CTA stack
- Include floating UI mockup or abstract visualization

### Product Cards
- Rounded-2xl border with subtle shadow
- Thumbnail: aspect-video with rounded-t-2xl
- Status pill: absolute top-4 right-4
- Content padding: p-6
- Hover: subtle lift (translate-y-1) + enhanced shadow
- Structure: thumbnail → pill → name → tagline → overview → capabilities list → CTA

### Status Pills
- Rounded-full px-4 py-1.5
- Alpha: soft orange/amber accent
- Private Beta: purple/indigo accent
- Live: green/emerald accent
- Font: text-xs font-semibold uppercase tracking-wide

### Product Detail Pages
- Hero banner: h-64 with product thumbnail background (darkened overlay)
- Content: two-column layout (lg:grid-cols-3)
  - Main: lg:col-span-2 (overview, capabilities, features)
  - Sidebar: lg:col-span-1 (CTA, status, metadata)
- Capabilities: grid with checkmark icons
- Rich sections: spacing of 12-16 between sections

### Modal
- Backdrop: bg-black/60 backdrop-blur-sm
- Panel: max-w-lg rounded-2xl with p-8
- Close button: top-4 right-4 with hover:rotate-90 transition
- Content: centered icon → title → message → button group
- Animation: scale and fade entrance

### Buttons
**Primary CTA**:
- Rounded-lg px-6 py-3
- Font-semibold text-base
- Gradient background with subtle animation
- When on images: backdrop-blur-md with semi-transparent background

**Secondary**:
- Rounded-lg px-6 py-3 border-2
- Hover: filled background transition

### Footer
- Three-column grid (lg:grid-cols-4)
- Sections: Products, Company, Resources, Legal
- Newsletter signup with inline form
- Social links as icon row
- Copyright + trust indicators
- Padding: py-16

## Category System
- Visual tags for Build/Ops/Analytics
- Small colored dot + label
- Filtering UI: pill-based toggle buttons

## Legal Pages
- Simple centered layout max-w-3xl
- Clear typography hierarchy
- Generous line-height (1.7)
- Section anchors for navigation
- Padding: py-20

## Images

**Hero Section**: 
- Full-width abstract tech visualization or floating product UI mockup
- Gradient overlay from edges for text readability
- Position: behind centered content

**Product Cards**:
- Thumbnail images showing product interface screenshots
- Aspect ratio: 16:9
- High-quality, modern UI previews

**Product Detail Hero**:
- Large banner background using product thumbnail
- Darkened overlay (40-50% opacity) for text contrast

## Animations
Use sparingly:
- Card hover lift: duration-300
- Modal entrance: scale-95 to scale-100
- Navigation backdrop blur on scroll
- Smooth page transitions
- NO scroll-triggered animations
- NO complex parallax effects

## Performance Optimizations
- Lazy load product thumbnails
- Optimize images to WebP format
- Minimize JavaScript bundle
- Use CSS transforms for animations (GPU-accelerated)
- Preload critical fonts
- Static generation where possible

## Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support (tab order, escape to close modal)
- Focus visible states with ring utility
- Sufficient contrast ratios (WCAG AA minimum)
- Alt text for all images
- Semantic HTML structure