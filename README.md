# PlanetCo Platform

AI-powered tools for modern development. A pure Vite + React application showcasing PlanetCo's suite of developer tools.

## Features

- **Agent Builder**: Build intelligent AI agents with ease
- **Deployment Manager**: Deploy AI models with confidence
- **Analytics Dashboard**: Gain insights into AI performance
- **Prompt Studio**: Craft and test prompts efficiently (Private Beta)
- **Model Optimizer**: Optimize AI models for production (Alpha)
- **Workflow Designer**: Design complex AI workflows visually

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Routing**: Wouter
- **UI Components**: Radix UI + Tailwind CSS
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check
```

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to the `main` branch to trigger deployment

The site will be available at: https://platform.planetco.ai

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Deploy the contents of dist/ to your hosting provider
```

## Project Structure

```
├── public/              # Static assets
│   ├── attached_assets/ # Product images
│   ├── CNAME           # Custom domain configuration
│   └── .nojekyll       # GitHub Pages configuration
├── src/
│   ├── components/     # React components
│   ├── data/          # Mock data
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   └── types/         # TypeScript type definitions
├── .github/
│   └── workflows/     # GitHub Actions workflows
└── vite.config.ts     # Vite configuration
```

## Configuration

### Custom Domain

The project is configured for the custom domain `platform.planetco.ai`. The CNAME file in the `public/` directory ensures the custom domain is preserved after each deployment.

### Base Path

The Vite configuration uses `base: "/"` for custom domain deployment. If deploying to a GitHub Pages repository path (e.g., `username.github.io/repo`), update `vite.config.ts`:

```typescript
export default defineConfig({
  base: "/repo-name/",
  // ...
});
```

## License

MIT

---

Built with [Claude Code](https://claude.com/claude-code)
