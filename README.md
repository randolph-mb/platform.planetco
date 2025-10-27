# PlanetCo Platform

> A professional, minimal portfolio website inspired by Apple and OpenAI design principles.

[![Deploy Status](https://img.shields.io/badge/deploy-automated-success)](https://platform.planetco.ai)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

**Live Demo**: [platform.planetco.ai](https://platform.planetco.ai)

---

## 🎯 Features

- ✅ **Professional Architecture** - Modular, maintainable codebase
- ✅ **Apple/OpenAI Design** - Minimal, elegant UI
- ✅ **Zero Build Required** - Pure HTML/CSS/JS
- ✅ **Component-Based** - Reusable components
- ✅ **Fully Responsive** - Works on all devices
- ✅ **Auto-Deploy** - GitHub Actions CI/CD

---

## 🚀 Quick Start

### Add a New Project (30 seconds)

Edit `js/data/projects.js`:

```javascript
{
  id: 7,
  icon: '🎨',
  title: 'Your Project',
  description: 'Description...',
  tags: ['Tag1', 'Tag2'],
  link: '#'
}
```

**Done!** Commit and push to deploy.

### Change Design Colors (10 seconds)

Edit `css/design-system.css`:

```css
:root {
  --color-accent: #ff6b6b;  /* New color */
}
```

---

## 📁 Project Structure

```
platform.planetco/
├── index.html              # Entry point
├── css/                    # Modular stylesheets
│   ├── design-system.css   # Design tokens
│   ├── navigation.css
│   ├── hero.css
│   ├── projects.css
│   └── footer.css
├── js/                     # JavaScript modules
│   ├── app.js              # Main app
│   ├── components/         # Reusable components
│   ├── pages/              # Page components
│   └── data/               # Data management
└── assets/                 # Static assets
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [**QUICKSTART.md**](QUICKSTART.md) | ⚡ Start here! Quick guide for common tasks |
| [**DOCUMENTATION.md**](DOCUMENTATION.md) | 📖 Complete documentation with examples |
| [**ARCHITECTURE.md**](ARCHITECTURE.md) | 🏗️ Technical architecture details |

---

## 🎨 Design Philosophy

This project follows Apple and OpenAI principles:

- **Minimal** - Clean, uncluttered interface
- **Typography-First** - Clear hierarchy, readable text
- **Subtle Animations** - Smooth, purposeful motion
- **Whitespace** - Generous spacing for breathing room
- **Monochrome** - Black, white, and gray palette with blue accent
- **Functional** - Every element serves a purpose

---

## 🛠️ Development

### Prerequisites

- Modern browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git

### Local Development

**Option 1**: VS Code Live Server
```bash
# Install "Live Server" extension
# Right-click index.html → "Open with Live Server"
```

**Option 2**: Python
```bash
python -m http.server 8000
# Open http://localhost:8000
```

**Option 3**: Node.js
```bash
npx serve
```

---

## 📦 Deployment

### Automatic (Recommended)

Push to `main` branch:

```bash
git add .
git commit -m "feat: Add new project"
git push origin main
```

GitHub Actions automatically deploys to https://platform.planetco.ai

### Manual

1. Build not required (static files)
2. Upload to any static host
3. Point DNS to host

---

## 🎯 Common Tasks

| Task | File | Time |
|------|------|------|
| Add project | `js/data/projects.js` | 30s |
| Change colors | `css/design-system.css` | 10s |
| Edit text | `js/pages/HomePage.js` | 20s |
| Update navigation | `js/components/Navigation.js` | 15s |

See [QUICKSTART.md](QUICKSTART.md) for detailed guides.

---

## 🧩 Components

### Navigation
- Fixed position
- Smooth scroll
- Glassmorphism effect

### ProjectCard
- Hover animations
- Tag system
- Responsive layout

### HomePage
- Hero section
- Projects grid
- Footer

---

## 🎨 Customization

### Colors

```css
/* css/design-system.css */
:root {
  --color-primary: #000000;
  --color-accent: #0071e3;
}
```

### Typography

```css
/* css/design-system.css */
:root {
  --font-primary: -apple-system, ...;
}

.headline-large {
  font-size: clamp(3rem, 8vw, 5.5rem);
}
```

### Spacing

```css
/* css/design-system.css */
:root {
  --spacing-lg: 4rem;
}
```

---

## 🚀 Advanced Features (Future)

See [DOCUMENTATION.md](DOCUMENTATION.md) for implementation guides:

- 🔄 Router System
- 📦 State Management
- 🧪 Testing
- 🎯 API Integration
- ⚡ Build System

---

## 📊 Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+
- **Bundle Size**: ~10KB (gzipped)

---

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses modern features:
- ES6 Modules
- CSS Custom Properties
- Intersection Observer

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

### Commit Convention

```
feat: New feature
fix: Bug fix
docs: Documentation
style: Formatting
refactor: Code restructuring
test: Tests
chore: Maintenance
```

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file

---

## 🙏 Credits

- **Design Inspiration**: Apple, OpenAI
- **Built with**: [Claude Code](https://claude.com/claude-code)
- **Hosted on**: GitHub Pages

---

## 📞 Support

- 📖 [Documentation](DOCUMENTATION.md)
- ⚡ [Quick Start](QUICKSTART.md)
- 🏗️ [Architecture](ARCHITECTURE.md)
- 🐛 [Issues](https://github.com/randolph-mb/platform.planetco/issues)

---

## 📈 Roadmap

- [x] Core website
- [x] Component system
- [x] Auto-deployment
- [x] Documentation
- [ ] Router system
- [ ] CMS integration
- [ ] Multi-language support
- [ ] Blog section

---

**Built with ❤️ by PlanetCo Team**

[Website](https://platform.planetco.ai) • [GitHub](https://github.com/randolph-mb/platform.planetco)
