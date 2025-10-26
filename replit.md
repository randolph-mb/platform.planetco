# PlanetCo Platform

## Overview

PlanetCo Platform is a B2B SaaS web application showcasing AI-powered development tools. The platform presents three main products (Studio, Console, and Insights) through a modern, tech-forward marketing website. Built as a full-stack TypeScript application, it features a React frontend with shadcn/ui components and an Express backend with in-memory data storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (replaces heavier alternatives like React Router)

**UI Component System**
- shadcn/ui component library (New York style variant) providing pre-built, accessible React components
- Radix UI primitives for unstyled, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Design system follows modern B2B SaaS aesthetics (Linear, Vercel, Stripe inspired) with emphasis on clarity and tech-forward presentation

**State Management**
- TanStack Query (React Query) for server state management, data fetching, and caching
- React hooks for local component state
- No global state management library needed due to application simplicity

**Styling Approach**
- Custom CSS variables for theme colors supporting light/dark modes
- Tailwind configuration with extended color palette and custom spacing
- Component variants using class-variance-authority for consistent styling patterns
- Hover/active states implemented through CSS utility classes (hover-elevate, active-elevate-2)

### Backend Architecture

**Server Framework**
- Express.js running on Node.js with TypeScript
- ESM module system for modern JavaScript features
- Custom middleware for request logging and JSON parsing

**API Design**
- RESTful API endpoints following simple CRUD patterns
- Product endpoints: `GET /api/products` (list all) and `GET /api/products/:id` (single product)
- JSON responses with appropriate error handling

**Data Layer**
- In-memory storage implementation (MemStorage class) - no database persistence
- Storage abstracted behind IStorage interface for potential future database integration
- Initial product data seeded on application startup
- Data schema validation using Zod for type safety

**Development Environment**
- Vite middleware integration in development for seamless frontend/backend development
- Express serves Vite dev server in development, static files in production
- Custom error logging with formatted timestamps

### Data Storage Solutions

**Current Implementation**
- In-memory Map-based storage (volatile, resets on restart)
- No database required for current functionality
- Product data structure includes: id, name, tagline, status, category, url, learn path, thumbnail, pill label, overview, and capabilities array

**Database Preparation**
- Drizzle ORM configured for PostgreSQL (drizzle.config.ts present)
- Schema definition location: `shared/schema.ts`
- Migration system ready but not active
- Neon serverless driver included for future PostgreSQL connection
- Note: Application can function without database; Drizzle/Postgres setup exists for potential future persistence needs

**Data Validation**
- Zod schemas define product types and API response shapes
- Type inference ensures TypeScript types match runtime validation
- Shared schema definitions between frontend and backend (`shared/schema.ts`)

### External Dependencies

**UI Component Libraries**
- @radix-ui/* packages: Accessible, unstyled component primitives (accordion, dialog, dropdown, etc.)
- shadcn/ui: Pre-styled component layer built on Radix UI
- lucide-react: Icon library for consistent iconography
- cmdk: Command palette component
- embla-carousel-react: Touch-friendly carousel component

**Form & Validation**
- @hookform/resolvers: React Hook Form integration with validation libraries
- zod: Runtime type validation and schema definition
- drizzle-zod: Generate Zod schemas from Drizzle database schemas

**Styling & Utilities**
- tailwindcss: Utility-first CSS framework
- class-variance-authority: Type-safe variant styling
- clsx & tailwind-merge: Conditional class name utilities
- date-fns: Date formatting and manipulation

**State Management & Data Fetching**
- @tanstack/react-query: Server state management and caching

**Database & ORM** (configured but not actively used)
- drizzle-orm: TypeScript ORM for SQL databases
- @neondatabase/serverless: Neon PostgreSQL serverless driver
- drizzle-kit: Database migration tools

**Development Tools**
- @replit/vite-plugin-*: Replit-specific development enhancements
- tsx: TypeScript execution for Node.js
- esbuild: Fast JavaScript bundler for production builds
- vite: Frontend build tool and dev server

**Fonts** (loaded via Google Fonts CDN)
- Inter: Primary font for headlines and body text
- JetBrains Mono/Geist Mono/Fira Code: Monospace fonts for technical/code elements
- DM Sans: Alternative sans-serif option
- Architects Daughter: Decorative/accent font

**Session Management**
- connect-pg-simple: PostgreSQL session store (configured but not actively used)