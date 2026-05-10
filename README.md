# Portfolio

A cinematic one-page BrandX landing page built with Vite, HTML, CSS, and JavaScript.

## Overview

This project is a responsive frontend website with animated sections, interactive service cards, a custom cursor, a FAQ accordion, and production-ready static output for Vercel.

## Tech Stack

- Vite
- HTML
- CSS
- JavaScript
- Phosphor Icons CDN

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

Vercel is configured to:

- run `npm run build`
- publish the `dist` output directory
- rewrite unknown routes to `index.html` for single-page navigation support

GitHub Actions runs `npm ci` and `npm run build` on pushes and pull requests to `main`.

## Main Files

- `index.html` - page markup
- `style.css` - full responsive styling
- `script.js` - animations and interactions
- `vercel.json` - Vercel deployment settings
- `.github/workflows/ci.yml` - GitHub build check

## License

See `LICENSE.md` for license details.
