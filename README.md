# Portfolio

A modern frontend portfolio website built with React, Vite, and Tailwind CSS.

## Overview

This project is a personal portfolio template showcasing work, skills, experience, and contact information in a clean one-page layout. It includes animated sections, icon support, and a responsive design that works across desktop and mobile devices.

## What’s included

- Responsive portfolio sections for hero, about, skills, projects, experience, and contact
- Smooth scroll and animated entrance effects using `framer-motion`
- Icon set powered by `lucide-react`
- Theme-ready styling with Tailwind CSS
- Fast tooling with Vite for development and production builds

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app

Visit the URL shown in the terminal, usually `http://localhost:5173`.

## Build and preview

Build the production version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Customize this portfolio

- Update the project data in `src/data/portfolio.js`
- Change section text in `src/sections/*`
- Adjust styling in `src/styles/index.css`
- Add or remove portfolio items and experience entries

## Author

- Created by **Balaji Chaughule**

## GitHub Pages deployment

This project is now set up to deploy the frontend to GitHub Pages using GitHub Actions.

### How it deploys
- On every push to `main`, GitHub Actions builds the site with `npm run build`
- The static files are published to the `gh-pages` branch
- GitHub Pages serves the built site from `dist`

## License

This repo includes a custom proprietary license. See `LICENSE.md` for details.

> GitHub Pages deployment has been enabled and a new build has been triggered.
