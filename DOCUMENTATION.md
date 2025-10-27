# PlanetCo Platform - Projekt Dokumentation

## 📋 Inhaltsverzeichnis

1. [Übersicht](#übersicht)
2. [Architektur](#architektur)
3. [Dateistruktur](#dateistruktur)
4. [Design System](#design-system)
5. [Komponenten](#komponenten)
6. [Workflow Guide](#workflow-guide)
7. [Deployment](#deployment)
8. [Verbesserungsvorschläge](#verbesserungsvorschläge)

---

## 📖 Übersicht

Eine professionelle, statische Portfolio-Website mit modularer Architektur, inspiriert vom Design von Apple und OpenAI.

### Technologie Stack
- **Frontend**: Vanilla JavaScript (ES6 Modules)
- **Styling**: Pure CSS (kein Framework)
- **Deployment**: GitHub Pages via GitHub Actions
- **Kein Build-Prozess**: Direkt im Browser lauffähig

### Design Prinzipien
- ✅ **Minimalistisch**: Klares, aufgeräumtes Interface
- ✅ **Monochrom**: Schwarz-Weiß-Grau Palette mit blauem Akzent
- ✅ **Typography-First**: Klare Hierarchie, lesbare Schrift
- ✅ **Funktional**: Jedes Element hat einen Zweck
- ✅ **Responsive**: Funktioniert auf allen Geräten

---

## 🏗️ Architektur

### Kernkonzept: **Separation of Concerns**

```
┌─────────────────────────────────────────┐
│           index.html (Entry)            │
│  - Lädt CSS Dateien                     │
│  - Lädt app.js als Module               │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│            app.js (Core)                │
│  - Initialisiert Navigation             │
│  - Lädt Pages                           │
│  - Globale Event Listener               │
└─────────────────────────────────────────┘
        ↓                    ↓
┌──────────────┐    ┌──────────────────┐
│  Components  │    │      Pages       │
│              │    │                  │
│  Navigation  │    │    HomePage      │
│  ProjectCard │    │                  │
└──────────────┘    └──────────────────┘
        ↓                    ↓
┌─────────────────────────────────────────┐
│              Data Layer                 │
│         (js/data/projects.js)           │
└─────────────────────────────────────────┘
```

### Datenfluss

```
Data (projects.js)
    → Component (ProjectCard)
    → Page (HomePage)
    → DOM (Browser)
```

---

## 📁 Dateistruktur

### Vollständige Struktur

```
platform.planetco/
│
├── index.html                      # Einstiegspunkt (25 Zeilen!)
├── README.md                       # Diese Dokumentation
├── CNAME                          # Custom Domain Config
├── .nojekyll                      # GitHub Pages Config
├── .gitignore                     # Git Ignore Rules
│
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions CI/CD
│
├── css/                           # Modulare Stylesheets
│   ├── design-system.css          # Design Tokens & Utilities
│   ├── navigation.css             # Navigation Styles
│   ├── hero.css                   # Hero Section Styles
│   ├── projects.css               # Projects Section Styles
│   └── footer.css                 # Footer Styles
│
├── js/                            # JavaScript Modules
│   ├── app.js                     # Main Application
│   │
│   ├── components/                # Wiederverwendbare Komponenten
│   │   ├── Navigation.js          # Navigation Component
│   │   └── ProjectCard.js         # Project Card Component
│   │
│   ├── pages/                     # Page Components
│   │   └── HomePage.js            # Home Page Logic
│   │
│   ├── data/                      # Daten Management
│   │   └── projects.js            # Projects Data
│   │
│   └── utils/                     # Hilfsfunktionen (reserviert)
│
└── assets/                        # Statische Assets
    ├── images/                    # Bilder (reserviert)
    └── icons/                     # Icons (reserviert)
```

### Zweck jeder Datei

| Datei | Zweck | Änderungshäufigkeit |
|-------|-------|-------------------|
| `index.html` | Entry Point, lädt Ressourcen | Selten |
| `css/design-system.css` | Globale Design Tokens | Bei Design-Änderungen |
| `css/navigation.css` | Navigation Styles | Selten |
| `css/hero.css` | Hero Section Styles | Selten |
| `css/projects.css` | Projects Grid Styles | Selten |
| `css/footer.css` | Footer Styles | Selten |
| `js/app.js` | Main App Logic | Bei neuen Pages |
| `js/components/Navigation.js` | Navigation Component | Selten |
| `js/components/ProjectCard.js` | Project Card Component | Selten |
| `js/pages/HomePage.js` | Home Page | Bei Content-Änderungen |
| `js/data/projects.js` | Projects Data | **Häufig** - neue Projekte |

---

## 🎨 Design System

### Datei: `css/design-system.css`

Alle Design-Entscheidungen sind hier zentral definiert:

#### Farben

```css
:root {
  --color-primary: #000000;      /* Schwarz für Text */
  --color-secondary: #86868b;    /* Grau für Secondary Text */
  --color-tertiary: #f5f5f7;     /* Helles Grau für Hintergründe */
  --color-white: #ffffff;        /* Weiß */
  --color-border: #d2d2d7;       /* Border Farbe */
  --color-accent: #0071e3;       /* Apple Blau für Links/CTAs */
}
```

**Warum diese Farben?**
- Monochrome Palette = Professionell & Elegant
- Hoher Kontrast = Bessere Lesbarkeit
- Blue Accent = Vertrauen & Action

#### Typography

```css
:root {
  --font-primary: -apple-system, BlinkMacSystemFont, "SF Pro Display", ...;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

**Warum diese Fonts?**
- System Fonts = Schnell, nativ, vertraut
- SF Pro Display = Apple's Design Language

#### Spacing Scale

```css
:root {
  --spacing-xs: 0.5rem;    /* 8px */
  --spacing-sm: 1rem;      /* 16px */
  --spacing-md: 2rem;      /* 32px */
  --spacing-lg: 4rem;      /* 64px */
  --spacing-xl: 6rem;      /* 96px */
  --spacing-2xl: 8rem;     /* 128px */
}
```

**Warum diese Scale?**
- Konsistente Abstände
- Visueller Rhythmus
- Einfach zu merken

#### Typography Classes

```css
.headline-large      /* 3-5.5rem - Hero Headlines */
.headline-medium     /* 2-3.5rem - Section Headlines */
.headline-small      /* 1.5-2rem - Card Titles */
.body-large          /* 1.25rem - Subheadlines */
.body-regular        /* 1rem - Body Text */
```

---

## 🧩 Komponenten

### Navigation Component

**Datei**: `js/components/Navigation.js`

```javascript
export class Navigation {
  constructor() { }
  init() { }              // Initialisierung
  render() { }            // DOM Erstellung
  attachEventListeners() // Event Handling
}
```

**Features**:
- Fixed Position beim Scrollen
- Smooth Scroll zu Sections
- Glassmorphism Effect
- Scroll Shadow Effect

**Wann ändern?**
- Neue Menu Items hinzufügen
- Navigation Verhalten ändern

---

### ProjectCard Component

**Datei**: `js/components/ProjectCard.js`

```javascript
export class ProjectCard {
  constructor(project) { }
  render() { }  // Rendert eine Project Card
}
```

**Props**:
```javascript
{
  id: 1,
  icon: '🤖',
  title: 'Project Title',
  description: 'Description...',
  tags: ['Tag1', 'Tag2'],
  link: '#'  // Optional
}
```

**Features**:
- Intersection Observer für Animations
- Hover Effects
- Responsive Layout

---

### HomePage Component

**Datei**: `js/pages/HomePage.js`

```javascript
export class HomePage {
  constructor() { }
  init() { }
  renderHero() { }      // Hero Section
  renderProjects() { }  // Projects Grid
  renderFooter() { }    // Footer
}
```

**Struktur**:
1. Hero mit CTA
2. Projects Grid (lädt aus data/projects.js)
3. Footer

---

## 🔄 Workflow Guide

### Häufige Aufgaben

#### 1. Neues Projekt hinzufügen ⭐ (Am häufigsten!)

**Datei**: `js/data/projects.js`

```javascript
export const projects = [
  // ... bestehende Projekte
  {
    id: 7,
    icon: '🎨',
    title: 'Mein Neues Projekt',
    description: 'Eine kurze Beschreibung des Projekts...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    link: 'https://projekt-url.com'  // Optional
  }
];
```

**Das war's!** 🎉 Die Seite aktualisiert sich automatisch.

---

#### 2. Design anpassen

**Farben ändern**: `css/design-system.css`

```css
:root {
  --color-accent: #ff6b6b;  /* Rot statt Blau */
}
```

**Schriftgröße ändern**: `css/design-system.css`

```css
.headline-large {
  font-size: clamp(4rem, 10vw, 7rem);  /* Größer! */
}
```

---

#### 3. Neue Seite hinzufügen

**Schritt 1**: Neue Page erstellen

```javascript
// js/pages/AboutPage.js
export class AboutPage {
  constructor() {
    this.init();
  }

  init() {
    this.renderContent();
  }

  renderContent() {
    const section = document.createElement('section');
    section.id = 'about';
    section.innerHTML = `
      <div class="container">
        <h2 class="headline-medium">About Us</h2>
        <p class="body-large">Content hier...</p>
      </div>
    `;
    document.getElementById('app').appendChild(section);
  }
}
```

**Schritt 2**: In `app.js` importieren

```javascript
import { AboutPage } from './pages/AboutPage.js';

// In init():
new AboutPage();
```

**Schritt 3**: CSS erstellen (optional)

```css
/* css/about.css */
.about-section {
  /* Styles... */
}
```

**Schritt 4**: In `index.html` laden

```html
<link rel="stylesheet" href="css/about.css">
```

---

#### 4. Navigation erweitern

**Datei**: `js/components/Navigation.js`

```javascript
nav.innerHTML = `
  <div class="nav__container">
    <a href="#home" class="nav__logo">PlanetCo</a>
    <ul class="nav__menu">
      <li><a href="#home" class="nav__link">Home</a></li>
      <li><a href="#projects" class="nav__link">Projects</a></li>
      <li><a href="#about" class="nav__link">About</a></li>
      <li><a href="#blog" class="nav__link">Blog</a></li> <!-- Neu! -->
      <li><a href="#contact" class="nav__link">Contact</a></li>
    </ul>
  </div>
`;
```

---

#### 5. Komponente wiederverwendbar machen

**Beispiel**: Button Component

```javascript
// js/components/Button.js
export class Button {
  constructor(text, style = 'primary', onClick) {
    this.text = text;
    this.style = style;
    this.onClick = onClick;
  }

  render() {
    const button = document.createElement('button');
    button.className = `btn btn-${this.style}`;
    button.textContent = this.text;
    button.addEventListener('click', this.onClick);
    return button;
  }
}

// Verwendung:
import { Button } from '../components/Button.js';
const btn = new Button('Click me', 'primary', () => alert('Clicked!'));
document.body.appendChild(btn.render());
```

---

## 🚀 Deployment

### Automatisches Deployment (empfohlen)

**Datei**: `.github/workflows/deploy.yml`

```yaml
on:
  push:
    branches:
      - main  # Bei Push auf main wird automatisch deployed
```

**Workflow**:
1. Code ändern
2. Committen: `git commit -m "Update"`
3. Pushen: `git push origin main`
4. GitHub Actions deployed automatisch!
5. Live auf https://platform.planetco.ai

**Status checken**:
- GitHub → Actions Tab
- Grüner Haken = Erfolgreich deployed!

---

### Lokale Entwicklung

**Option 1**: Live Server (VS Code Extension)
- Extension "Live Server" installieren
- Rechtsklick auf `index.html` → "Open with Live Server"
- Änderungen werden sofort angezeigt!

**Option 2**: Python Server
```bash
cd platform.planetco
python -m http.server 8000
# Öffne http://localhost:8000
```

**Option 3**: Node.js Server
```bash
npx serve
```

---

## 🎯 Verbesserungsvorschläge

### 1. **Router System** (Für Multi-Page Apps)

**Problem**: Aktuell nur eine Page (HomePage)

**Lösung**: Einfacher Router

```javascript
// js/utils/Router.js
export class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
  }

  register(path, PageClass) {
    this.routes[path] = PageClass;
  }

  navigate(path) {
    // Clear app
    document.getElementById('app').innerHTML = '';

    // Render new page
    const PageClass = this.routes[path];
    if (PageClass) {
      new PageClass();
    }
  }
}

// Verwendung in app.js:
const router = new Router();
router.register('/', HomePage);
router.register('/about', AboutPage);
router.register('/contact', ContactPage);

// Navigation
router.navigate('/about');
```

**Vorteile**:
- Einfach neue Pages hinzufügen
- URL-basierte Navigation
- Cleaner Code

---

### 2. **State Management** (Für komplexere Apps)

**Problem**: Daten sind über Dateien verteilt

**Lösung**: Zentraler Store

```javascript
// js/utils/Store.js
class Store {
  constructor() {
    this.state = {
      projects: [],
      currentPage: 'home',
      theme: 'light'
    };
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

export const store = new Store();

// Verwendung:
import { store } from './utils/Store.js';

// State lesen
const projects = store.getState().projects;

// State ändern
store.setState({ currentPage: 'about' });

// Auf Änderungen reagieren
store.subscribe((state) => {
  console.log('State changed:', state);
});
```

**Vorteile**:
- Zentrale Datenverwaltung
- Reaktive Updates
- Einfacher zu debuggen

---

### 3. **Component System** (Basis-Klasse)

**Problem**: Jede Component hat eigene Logik

**Lösung**: Basis Component Class

```javascript
// js/components/Component.js
export class Component {
  constructor() {
    this.element = null;
    this.state = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.update();
  }

  update() {
    // Re-render Component
    if (this.element && this.element.parentNode) {
      const newElement = this.render();
      this.element.parentNode.replaceChild(newElement, this.element);
      this.element = newElement;
    }
  }

  render() {
    // Override in child class
    return document.createElement('div');
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }
}

// Verwendung:
export class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    const div = document.createElement('div');
    div.innerHTML = `
      <p>Count: ${this.state.count}</p>
      <button id="increment">+</button>
    `;
    div.querySelector('#increment').addEventListener('click', () => {
      this.setState({ count: this.state.count + 1 });
    });
    return div;
  }
}
```

**Vorteile**:
- DRY (Don't Repeat Yourself)
- Konsistentes Component API
- Einfacher State Management

---

### 4. **API Integration**

**Problem**: Daten sind hardcoded in `projects.js`

**Lösung**: API Service

```javascript
// js/utils/api.js
export class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    if (!response.ok) throw new Error('API Error');
    return response.json();
  }

  async post(endpoint, data) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('API Error');
    return response.json();
  }
}

// Verwendung:
const api = new API('https://api.planetco.ai');

// Projects von API laden
const projects = await api.get('/projects');

// Neues Project erstellen
await api.post('/projects', {
  title: 'New Project',
  description: '...'
});
```

**Vorteile**:
- Dynamische Daten
- Einfach zu testen
- Skalierbar

---

### 5. **Build System** (Optional - nur bei Bedarf)

**Problem**: Manuelle CSS/JS Concatenation

**Lösung**: Vite oder Parcel

```bash
# Vite installieren
npm install -D vite

# vite.config.js
export default {
  base: '/',
  build: {
    outDir: 'dist'
  }
}

# package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**Vorteile**:
- Code Minification
- CSS Autoprefixing
- Hot Module Replacement
- Tree Shaking

**Nachteile**:
- Komplexer
- Braucht Node.js

---

### 6. **Testing** (Für Produktions-Apps)

**Lösung**: Vitest + Testing Library

```javascript
// tests/ProjectCard.test.js
import { describe, it, expect } from 'vitest';
import { ProjectCard } from '../js/components/ProjectCard.js';

describe('ProjectCard', () => {
  it('renders project title', () => {
    const project = {
      id: 1,
      title: 'Test Project',
      description: 'Test',
      tags: []
    };

    const card = new ProjectCard(project);
    const element = card.render();

    expect(element.querySelector('.project-card__title').textContent)
      .toBe('Test Project');
  });
});
```

**Vorteile**:
- Weniger Bugs
- Sicherer Refactoring
- Dokumentation durch Tests

---

### 7. **Accessibility** (A11y)

**Verbesserungen**:

```html
<!-- Bessere Navigation -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="#home" aria-current="page">Home</a></li>
  </ul>
</nav>

<!-- Skip Link -->
<a href="#main" class="skip-link">Skip to main content</a>

<!-- Semantic HTML -->
<main id="main">
  <article>
    <h1>Title</h1>
    <p>Content...</p>
  </article>
</main>

<!-- Focus Styles -->
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

---

### 8. **Performance Optimierung**

**Lazy Loading**:

```javascript
// Bilder lazy loaden
<img src="..." loading="lazy" alt="...">

// Intersection Observer für Components
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Component laden
      entry.target.classList.add('loaded');
      observer.unobserve(entry.target);
    }
  });
});
```

**CSS Optimization**:

```css
/* Critical CSS inline in <head> */
/* Rest der CSS in externen Files */

/* Reduce Repaints */
.element {
  will-change: transform;
  transform: translateZ(0); /* GPU Acceleration */
}
```

---

### 9. **Development Tools**

**Empfohlene VS Code Extensions**:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",      // Code Formatting
    "dbaeumer.vscode-eslint",      // Linting
    "ritwickdey.liveserver",       // Live Reload
    "formulahendry.auto-rename-tag", // HTML Tags
    "zignd.html-css-class-completion" // CSS Autocomplete
  ]
}
```

**Prettier Config** (`.prettierrc`):

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

### 10. **Content Management**

**Problem**: Content ist im Code

**Lösung**: JSON Data Files

```javascript
// data/content.json
{
  "hero": {
    "title": "Building the future of AI",
    "subtitle": "We create innovative AI solutions...",
    "cta": {
      "primary": "View Projects",
      "secondary": "Get in Touch"
    }
  },
  "about": {
    "title": "About Us",
    "description": "..."
  }
}

// Laden in App
const content = await fetch('data/content.json').then(r => r.json());
```

**Vorteile**:
- Einfacher Content zu ändern
- Mehrsprachigkeit möglich
- Trennung von Code und Content

---

## 📊 Zusammenfassung

### ✅ Was funktioniert perfekt

1. **Saubere Architektur** - Modular, erweiterbar
2. **Design System** - Zentrale Tokens
3. **Komponenten** - Wiederverwendbar
4. **Deployment** - Automatisch via GitHub Actions
5. **Kein Build** - Direkt im Browser lauffähig

### 🎯 Nächste Schritte (Priorität)

1. **Sofort**: Mehr Projekte hinzufügen (data/projects.js)
2. **Bald**: Router System implementieren (für neue Pages)
3. **Später**: API Integration (für dynamische Daten)
4. **Optional**: Build System (nur bei Komplexität)

### 💡 Best Practices

1. **Commit Messages**: Klar und beschreibend
2. **Code Style**: Konsistent bleiben
3. **Testing**: Lokal testen vor Push
4. **Documentation**: Code kommentieren wo nötig
5. **Performance**: Bilder optimieren, Code minimieren

---

## 🤝 Contributing

### Workflow

1. Feature Branch erstellen
   ```bash
   git checkout -b feature/neue-funktion
   ```

2. Änderungen machen
   ```bash
   # Code editieren...
   ```

3. Committen
   ```bash
   git add .
   git commit -m "feat: Neue Funktion hinzugefügt"
   ```

4. Pushen
   ```bash
   git push origin feature/neue-funktion
   ```

5. Pull Request erstellen auf GitHub

---

## 📞 Support

Bei Fragen oder Problemen:
1. README.md lesen
2. Code Kommentare checken
3. GitHub Issues erstellen

---

**Letzte Aktualisierung**: 2024-10-27
**Version**: 1.0.0
**Autor**: PlanetCo Team
**Built with**: ❤️ and [Claude Code](https://claude.com/claude-code)
