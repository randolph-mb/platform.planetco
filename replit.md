# PlanetCo Platform

## Overview
A modern product showcase platform for PlanetCo's AI-powered development tools. The platform features a responsive design, product filtering, detailed product pages, and smart modal interactions for products in development.

## Architecture

### Frontend (React + TypeScript)
- **Framework**: React with Wouter for routing
- **Styling**: Tailwind CSS with Shadcn UI components
- **State Management**: TanStack Query for server state
- **Key Features**:
  - Responsive product grid with category filtering
  - Dynamic product detail pages
  - Modal for unavailable products
  - Mobile-responsive navigation with hamburger menu
  - Legal pages (Impressum, Datenschutz)

### Backend (Express + TypeScript)
- **Storage**: In-memory storage for product data
- **API Endpoints**:
  - `GET /api/products` - Fetch all products
  - `GET /api/products/:id` - Fetch product by ID

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ProductCard.tsx     # Product card with hover effects
│   │   ├── Header.tsx          # Responsive navigation header
│   │   ├── Footer.tsx          # Site footer with links
│   │   └── ProductModal.tsx    # "Coming Soon" modal
│   ├── pages/
│   │   ├── Home.tsx            # Homepage with product grid
│   │   ├── ProductDetail.tsx   # Product detail page
│   │   ├── Impressum.tsx       # Legal impressum
│   │   └── Datenschutz.tsx     # Privacy policy
│   ├── App.tsx                 # Route configuration
│   └── index.css               # Global styles and utilities

server/
├── storage.ts                  # In-memory data storage
└── routes.ts                   # API route handlers

shared/
└── schema.ts                   # TypeScript types and Zod schemas
```

## Products

### PlanetCo Studio
- **Status**: Alpha
- **Category**: Build
- **Description**: Visual builder for AI workflows, from prototype to production
- **Capabilities**: Drag-and-drop pipelines, Secrets & keys vault, One-click deploy

### PlanetCo Console
- **Status**: Private Beta
- **Category**: Ops
- **Description**: Unified control of your AI stack
- **Capabilities**: Env configs, Zero-downtime rollouts, Role-based access

### PlanetCo Insights
- **Status**: Live
- **Category**: Analytics
- **Description**: Real-time metrics & alerts for AI workflows
- **Capabilities**: Latency breakdowns, Error tracing, Alert routing
- **URL**: https://insights.planetco.ai

## Key Features

### Category Filtering
- Filter products by category (Build, Ops, Analytics)
- Interactive badge UI with hover effects
- Maintains state during navigation

### Product Cards
- Hover animations with image zoom
- Status pills with color coding (Alpha, Private Beta, Live)
- Category indicators with color-coded dots
- Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)

### Product Detail Pages
- Hero banner with product thumbnail
- Sidebar with CTA and metadata
- Key capabilities grid with checkmarks
- Smart "Use Product" button:
  - Opens external URL for live products
  - Shows "Coming Soon" modal for products in development

### Design System
- **Colors**: Professional blue and purple gradient accents
- **Typography**: Inter font family with carefully tuned hierarchy
- **Spacing**: Consistent 8px grid system
- **Components**: Shadcn UI with custom hover/active states
- **Interactions**: Subtle elevations on hover, smooth transitions

## Running the Project

```bash
npm run dev
```

The application will start on port 5000 with both frontend and backend.

## Performance Optimizations
- Lazy-loaded images
- Optimized TanStack Query caching
- Minimal JavaScript bundle
- CSS-based animations (GPU-accelerated)
- Static generation ready

## Future Enhancements
- Cookie consent banner and Google Analytics
- Subdomain routing (studio.planetco.ai, etc.)
- Admin dashboard for content management
- Product comparison feature
- Newsletter signup and waitlist functionality

## Recent Changes
- **2025-10-26**: Initial implementation with all MVP features
  - Created product schema and TypeScript types
  - Generated product thumbnail images
  - Built all frontend components and pages
  - Implemented backend API with in-memory storage
  - Added responsive navigation and mobile menu
  - Integrated smart modal for unavailable products
  - Created legal pages (Impressum, Datenschutz)
  - Fixed nested interactive elements (Button/Link)
  - Comprehensive end-to-end testing completed
