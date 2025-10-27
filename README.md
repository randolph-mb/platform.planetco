# PlanetCo Platform

Eine einfache "Hallo World" Seite für platform.planetco.ai

## Was ist das?

Eine statische HTML-Seite mit schöner Animation und modernem Design.

## Struktur

```
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions für automatisches Deployment
├── index.html            # Die Hauptseite
├── CNAME                 # Custom Domain Konfiguration
├── .nojekyll            # GitHub Pages Konfiguration
└── README.md            # Diese Datei
```

## Deployment

Die Seite wird automatisch über GitHub Actions auf GitHub Pages deployed, sobald Änderungen in den `main` Branch gepusht werden.

URL: https://platform.planetco.ai

## Lokale Entwicklung

Einfach `index.html` in einem Browser öffnen. Kein Build-Prozess oder Server nötig!

## Änderungen vornehmen

1. `index.html` bearbeiten
2. Änderungen committen
3. Pushen nach `main` Branch
4. GitHub Actions deployed automatisch

---

🤖 Erstellt mit [Claude Code](https://claude.com/claude-code)
