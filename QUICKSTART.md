# Quick Start Guide

## ⚡ Schnellstart (1 Minute)

### Schritt 1: Projekt öffnen

```bash
cd platform.planetco
```

### Schritt 2: Datei bearbeiten

Die häufigsten Änderungen:

```bash
# Neues Projekt hinzufügen
vim js/data/projects.js

# Design ändern
vim css/design-system.css
```

### Schritt 3: Lokal testen

**Option A**: Live Server (VS Code)
- Rechtsklick auf `index.html`
- "Open with Live Server"

**Option B**: Python
```bash
python -m http.server 8000
# http://localhost:8000
```

### Schritt 4: Deployen

```bash
git add .
git commit -m "feat: Neues Projekt hinzugefügt"
git push origin main
```

✅ **Fertig!** GitHub Actions deployed automatisch.

---

## 📝 Häufige Aufgaben

### 1. Neues Projekt hinzufügen ⭐

**Datei**: `js/data/projects.js`

```javascript
{
  id: 7,
  icon: '🎨',
  title: 'Mein Projekt',
  description: 'Eine kurze Beschreibung...',
  tags: ['Tech1', 'Tech2'],
  link: 'https://projekt.com'  // optional
}
```

**Zeit**: 30 Sekunden

---

### 2. Farben ändern 🎨

**Datei**: `css/design-system.css`

```css
:root {
  --color-accent: #ff6b6b;  /* Neue Farbe */
}
```

**Zeit**: 10 Sekunden

---

### 3. Text ändern 📝

**Datei**: `js/pages/HomePage.js`

Suche nach:
```javascript
<h1 class="headline-large">Building the future of AI</h1>
```

Ändere zu:
```javascript
<h1 class="headline-large">Dein neuer Text</h1>
```

**Zeit**: 20 Sekunden

---

### 4. Navigation erweitern 🧭

**Datei**: `js/components/Navigation.js`

Zeile ~10-16, füge hinzu:
```html
<li><a href="#blog" class="nav__link">Blog</a></li>
```

**Zeit**: 15 Sekunden

---

## 🗂️ Datei-Cheatsheet

| Änderung | Datei | Zeit |
|----------|-------|------|
| Projekt hinzufügen | `js/data/projects.js` | 30s |
| Farbe ändern | `css/design-system.css` | 10s |
| Text ändern | `js/pages/HomePage.js` | 20s |
| Navigation | `js/components/Navigation.js` | 15s |
| Font ändern | `css/design-system.css` | 30s |
| Spacing | `css/design-system.css` | 20s |

---

## 🚨 Troubleshooting

### Problem: Änderungen nicht sichtbar

**Lösung**:
1. Hard Refresh: `Ctrl + Shift + R` (Windows) oder `Cmd + Shift + R` (Mac)
2. Cache leeren
3. Browser DevTools → Network Tab → "Disable cache"

---

### Problem: JavaScript Error

**Lösung**:
1. Browser Console öffnen: `F12`
2. Fehler lesen (Zeile und Datei)
3. Syntax prüfen (fehlende Kommas, Klammern)

**Häufige Fehler**:
```javascript
// ❌ Falsch - fehlendes Komma
{
  id: 1
  title: 'Test'
}

// ✅ Richtig
{
  id: 1,
  title: 'Test'
}
```

---

### Problem: CSS nicht geladen

**Lösung**:
1. Pfad prüfen in `index.html`:
```html
<link rel="stylesheet" href="css/design-system.css">
```

2. Datei existiert prüfen:
```bash
ls css/design-system.css
```

---

### Problem: Module nicht gefunden

**Fehler**: `Failed to load module script`

**Lösung**:
1. Dateipfad prüfen (case-sensitive!)
2. `.js` Extension muss vorhanden sein
3. Server nutzen (nicht `file://`)

---

## 🎯 Best Practices

### DO ✅

- Committen nach jeder Änderung
- Beschreibende Commit Messages
- Lokal testen vor Push
- Code kommentieren
- Konsistenter Code Style

### DON'T ❌

- Direkt auf `main` pushen ohne Test
- Große Änderungen ohne Backup
- Unkommentierter komplexer Code
- Inkonsistente Namensgebung

---

## 📋 Commit Message Guide

### Format

```
type: kurze Beschreibung

Längere Beschreibung (optional)
```

### Types

- `feat`: Neue Funktion
- `fix`: Bug Fix
- `docs`: Dokumentation
- `style`: Formatierung
- `refactor`: Code Umstrukturierung
- `test`: Tests
- `chore`: Maintenance

### Beispiele

```bash
git commit -m "feat: Neues Projekt hinzugefügt"
git commit -m "fix: Navigation auf Mobile"
git commit -m "docs: README aktualisiert"
git commit -m "style: Code formatiert"
```

---

## 🔗 Links

- [Vollständige Dokumentation](DOCUMENTATION.md)
- [Architecture Guide](ARCHITECTURE.md)
- [GitHub Repository](https://github.com/randolph-mb/platform.planetco)
- [Live Site](https://platform.planetco.ai)

---

## 💡 Tipps

### VS Code Shortcuts

- `Ctrl + P`: Datei öffnen (schnell!)
- `Ctrl + Shift + F`: Projekt-weite Suche
- `Ctrl + D`: Nächstes Vorkommen auswählen
- `Alt + Up/Down`: Zeile verschieben
- `Ctrl + /`: Kommentar toggle

### Git Shortcuts

```bash
# Status
git status

# Alle Änderungen stagen
git add .

# Commit mit Message
git commit -m "message"

# Push
git push

# Letzten Commit rückgängig (lokal)
git reset --soft HEAD~1

# Änderungen verwerfen
git checkout -- file.js
```

### Browser DevTools

- `F12`: DevTools öffnen
- `Ctrl + Shift + C`: Element Inspector
- `Ctrl + Shift + I`: Console
- `Ctrl + Shift + M`: Mobile View
- `F5`: Reload
- `Ctrl + Shift + R`: Hard Reload

---

## 🎓 Learning Resources

### Anfänger

1. [MDN: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
2. [MDN: CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS)
3. [JavaScript.info](https://javascript.info/)

### Fortgeschritten

1. [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
2. [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
3. [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**Viel Erfolg! 🚀**

Bei Fragen: GitHub Issues erstellen
