# Ekion — Company Website

A single-page marketing site for **Ekion**, a (fictional) EV charging & energy solutions
company. Built with **Vite + React**. All content is placeholder/dummy data.

## Develop locally

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Content lives in [`src/data.js`](src/data.js) — edit that to change copy, stats,
services, and team. Styles are in [`src/index.css`](src/index.css).

## Deploy to GitHub Pages (free hosting)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds the site and publishes it to GitHub Pages on every push to `main`.

**One-time setup after you push:**

1. Create a repo on GitHub and push this project to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push (or re-run the workflow). The site publishes to
   `https://<your-username>.github.io/<repo-name>/`.

The Vite `base` is set to `./` (relative), so it works from a project subpath or a
custom domain without changes.
