# Architecture Overview

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Browser (Client)                   │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌────────────┐  ┌────────────┐  ┌──────────────┐ │
│  │ index.html │→ │ CSS Layers │→ │ JS Modules   │ │
│  └────────────┘  └────────────┘  └──────────────┘ │
│                                                      │
│  ┌───────────────────────────────────────────────┐ │
│  │            Component Architecture              │ │
│  │                                                │ │
│  │  ┌──────────┐  ┌──────────┐  ┌───────────┐  │ │
│  │  │Navigation│  │ProjectCard│  │HomePage   │  │ │
│  │  └──────────┘  └──────────┘  └───────────┘  │ │
│  │                      ↓                         │ │
│  │              ┌──────────────┐                 │ │
│  │              │ Data Layer   │                 │ │
│  │              │ (projects.js)│                 │ │
│  │              └──────────────┘                 │ │
│  └───────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

## 📦 Module System

### ES6 Modules

```javascript
// Export
export class Navigation { }
export const projects = [ ];

// Import
import { Navigation } from './components/Navigation.js';
import { projects } from './data/projects.js';
```

**Vorteile**:
- Native Browser Support
- Kein Bundler nötig
- Tree-shaking möglich
- Klare Dependencies

## 🎨 CSS Architecture

### Layer System

```css
1. design-system.css  ← Foundation (Tokens, Utilities)
2. navigation.css     ← Component Specific
3. hero.css          ← Section Specific
4. projects.css      ← Section Specific
5. footer.css        ← Component Specific
```

**CSS Cascade**:
```
Design Tokens (CSS Variables)
    ↓
Base Styles
    ↓
Component Styles
    ↓
Utility Classes
```

## 🔄 Data Flow

### Simple Unidirectional Flow

```
Data Source (projects.js)
    ↓
Component Class (ProjectCard)
    ↓
render() Method
    ↓
DOM Element
    ↓
Browser Renders
```

### Example

```javascript
// 1. Data
const project = { title: 'AI Builder', ... };

// 2. Component
const card = new ProjectCard(project);

// 3. Render
const element = card.render();

// 4. Mount to DOM
document.querySelector('.grid').appendChild(element);
```

## 🧩 Component Pattern

### Base Pattern

```javascript
export class ComponentName {
  constructor(props) {
    this.props = props;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = `...`;
    this.attachEvents(element);
    return element;
  }

  attachEvents(element) {
    // Event listeners
  }
}
```

### Usage

```javascript
import { ComponentName } from './components/ComponentName.js';

const component = new ComponentName(props);
const element = component.render();
document.body.appendChild(element);
```

## 🚀 Rendering Strategy

### Server-Side (GitHub Pages)

```
Git Push → GitHub Actions → Static Files → GitHub Pages
```

### Client-Side

```
1. Browser requests index.html
2. Loads CSS (parallel)
3. Loads JS modules (parallel)
4. Executes app.js
5. Components render to DOM
6. Intersection Observers trigger animations
```

## 📊 Performance Considerations

### Critical Rendering Path

```
HTML Parse
    ↓
CSS Parse (non-blocking via media="print")
    ↓
JS Parse & Execute (type="module" = deferred)
    ↓
DOM Construction
    ↓
Styles Application
    ↓
Layout
    ↓
Paint
```

### Optimization Techniques

1. **CSS**
   - Minimal CSS files
   - No unused rules
   - Critical CSS inline (optional)

2. **JavaScript**
   - ES6 Modules (native)
   - No external libraries
   - Lazy component rendering

3. **Images**
   - Reserved for assets folder
   - Use `loading="lazy"`
   - Optimize before upload

## 🔐 Security

### Content Security Policy (Recommended)

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self';
               style-src 'self' 'unsafe-inline';">
```

### Best Practices

- No `eval()`
- No `innerHTML` with user input
- Sanitize any external data
- Use HTTPS (automatic with GitHub Pages)

## 🌐 Browser Support

### Target Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features Used

- ES6 Modules (all modern browsers)
- CSS Custom Properties (all modern browsers)
- Intersection Observer (all modern browsers)
- Async/Await (all modern browsers)

### Fallbacks

Not needed for target audience (developers), but could add:

```javascript
// Check module support
if ('noModule' in HTMLScriptElement.prototype) {
  // Modern browsers
} else {
  // Load fallback
}
```

## 📱 Responsive Strategy

### Mobile-First Approach

```css
/* Base (Mobile) */
.element {
  font-size: 1rem;
}

/* Tablet+ */
@media (min-width: 768px) {
  .element {
    font-size: 1.125rem;
  }
}

/* Desktop+ */
@media (min-width: 1024px) {
  .element {
    font-size: 1.25rem;
  }
}
```

### Fluid Typography

```css
.headline-large {
  font-size: clamp(3rem, 8vw, 5.5rem);
}
```

**Explanation**:
- Minimum: 3rem (48px)
- Preferred: 8vw (8% of viewport width)
- Maximum: 5.5rem (88px)

## 🧪 Testing Strategy (Future)

### Unit Tests

```javascript
// Component logic
test('ProjectCard renders title', () => {
  const card = new ProjectCard({ title: 'Test' });
  const element = card.render();
  expect(element.textContent).toContain('Test');
});
```

### Integration Tests

```javascript
// Page rendering
test('HomePage renders all sections', () => {
  const page = new HomePage();
  expect(document.querySelector('.hero')).toBeTruthy();
  expect(document.querySelector('.projects')).toBeTruthy();
});
```

### E2E Tests (Playwright/Cypress)

```javascript
test('user can navigate to project', async () => {
  await page.goto('/');
  await page.click('.project-card');
  expect(page.url()).toContain('/project/');
});
```

## 🔄 State Management (Future Enhancement)

### Simple Store Pattern

```javascript
class Store {
  constructor() {
    this.state = {};
    this.listeners = [];
  }

  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }
}

export const store = new Store();
```

## 📈 Scalability

### Current Limitations

- Single page (HomePage)
- Static data (projects.js)
- No routing
- No state management

### Scaling Path

```
Current → Router → State → API → Build System
(Now)    (10+ pages) (Complex) (Dynamic) (Large team)
```

### When to Scale

1. **Add Router**: 5+ pages
2. **Add State**: Complex interactions
3. **Add API**: Dynamic content
4. **Add Build**: 50+ components, TypeScript needs

## 🎯 Design Decisions

### Why Vanilla JavaScript?

1. **No Dependencies** - Faster, simpler
2. **Better Learning** - Understand fundamentals
3. **More Control** - No framework magic
4. **Smaller Bundle** - Faster load times

### Why No Framework?

Current complexity doesn't justify framework overhead:

- React: ~40KB gzipped
- Vue: ~20KB gzipped
- **Current**: ~5KB total

### When to Add Framework?

- Complex state management needed
- Real-time features required
- Team prefers framework workflow
- 100+ components

## 📚 Further Reading

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [web.dev](https://web.dev/)
- [JavaScript.info](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)

---

**Last Updated**: 2024-10-27
**Version**: 1.0.0
