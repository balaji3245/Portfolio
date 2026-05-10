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

## Admin GitHub storage

The `/admin` page can save portfolio content to a JSON file in GitHub through the Vercel serverless API at `api/portfolio-content.js`.

Add these environment variables in Vercel:

- `PORTFOLIO_ADMIN_PASSWORD` - password used in the admin panel
- `GITHUB_CONTENT_TOKEN` - GitHub personal access token with repo content write access
- `GITHUB_CONTENT_REPO` - optional, defaults to `balaji3245/Portfolio`
- `GITHUB_CONTENT_BRANCH` - optional, defaults to `main`
- `GITHUB_CONTENT_PATH` - optional, defaults to `portfolio-content.json`

After saving from `/admin`, the API commits `portfolio-content.json` to GitHub. The public site reads that JSON at runtime, so the same content can appear across devices.

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
