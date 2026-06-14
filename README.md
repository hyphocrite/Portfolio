# John Philip S. Paller — Portfolio

A clean, single-page portfolio built with **Vite**, **Tailwind CSS**, and **GSAP** — matcha/sage light mode with an optional dark terminal theme.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (Vite will print the exact URL).

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Edit content

Update **`src/data.js`** to change projects, social links, skills, and terminal lines — no layout changes needed.

## Project structure

```
/
├── index.html
├── src/
│   ├── main.js       # animations, theme, rendering
│   ├── data.js       # projects + social links
│   └── style.css     # Tailwind entry + theme tokens
├── public/assets/
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## GitHub Pages deployment

1. Push this repo to GitHub at [hyphocrite/portfolio](https://github.com/hyphocrite/portfolio).
2. `base` in **`vite.config.js`** is set to `/portfolio/` for GitHub Pages.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` automatically.

Your site will be live at `https://hyphocrite.github.io/portfolio/`.

## Tech

- Vite + vanilla HTML/CSS/JS
- Tailwind CSS (PostCSS, not CDN)
- GSAP ScrollTrigger for scroll animations
- Theme persisted in `localStorage`

---

Designed & built by John Philip S. Paller
