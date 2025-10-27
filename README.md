# PlanetCo Platform

A professional, minimal portfolio website inspired by Apple and OpenAI design principles.

## 🎯 Features

- **Clean, Modular Architecture** - Professional folder structure for easy maintenance
- **Apple/OpenAI Design** - Minimalist, elegant UI with subtle animations
- **Component-Based** - Reusable JavaScript components
- **Easy to Extend** - Add new pages and projects with minimal code
- **Static & Fast** - No build process, pure HTML/CSS/JS
- **Responsive** - Works perfectly on all devices

## 📁 Project Structure

```
platform.planetco/
├── index.html                 # Entry point
├── css/
│   ├── design-system.css      # Core design tokens & utilities
│   ├── navigation.css         # Navigation component styles
│   ├── hero.css              # Hero section styles
│   ├── projects.css          # Projects section styles
│   └── footer.css            # Footer styles
├── js/
│   ├── app.js                # Main application
│   ├── components/
│   │   ├── Navigation.js     # Navigation component
│   │   └── ProjectCard.js    # Project card component
│   ├── pages/
│   │   └── HomePage.js       # Home page logic
│   ├── data/
│   │   └── projects.js       # Projects data
│   └── utils/                # Utility functions (if needed)
├── assets/
│   ├── images/               # Images
│   └── icons/                # Icons
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions for deployment
```

## 🚀 Adding New Content

### Add a New Project

Edit `js/data/projects.js`:

```javascript
{
  id: 7,
  icon: '🎨',
  title: 'Your Project',
  description: 'Project description...',
  tags: ['Tag1', 'Tag2'],
  link: '#'
}
```

### Add a New Page

1. Create a new file in `js/pages/` (e.g., `AboutPage.js`)
2. Import and initialize it in `js/app.js`
3. Add corresponding CSS in `css/`

### Modify Design

All design tokens are in `css/design-system.css`:
- Colors
- Typography
- Spacing
- Transitions

## 🎨 Design Philosophy

This design follows Apple and OpenAI principles:

- **Minimal** - Clean, uncluttered interface
- **Typography-First** - Clear hierarchy, readable text
- **Subtle Animations** - Smooth, purposeful motion
- **Whitespace** - Generous spacing for breathing room
- **Monochrome** - Black, white, and gray palette
- **Functional** - Every element serves a purpose

## 🛠️ Development

No build tools required! Just:

1. Edit files
2. Refresh browser
3. See changes instantly

## 📦 Deployment

Automatically deployed via GitHub Actions to GitHub Pages.

**URL:** https://platform.planetco.ai

### Manual Deployment

Simply push to `main` branch:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions will handle the rest.

## 📝 Customization Guide

### Change Colors

Edit `css/design-system.css`:

```css
:root {
  --color-primary: #000000;
  --color-accent: #0071e3;
  /* ... */
}
```

### Change Typography

Edit font variables in `css/design-system.css`:

```css
:root {
  --font-primary: -apple-system, BlinkMacSystemFont, ...;
}
```

### Add Sections

Create new section in `js/pages/HomePage.js`:

```javascript
renderNewSection() {
  const section = document.createElement('section');
  section.innerHTML = `...`;
  document.getElementById('app').appendChild(section);
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT

---

Built with ❤️ using [Claude Code](https://claude.com/claude-code)
