# content-site

Static site for the Home Espresso India project. Astro + GitHub Pages.

Articles live under `src/pages/`. Each `.md` file uses front matter and
a layout (`src/layouts/Article.astro`). Build and deploy are handled by
the GitHub Action in `.github/workflows/deploy.yml` on every push to
`main`.

Live URL pattern: `https://yios823.github.io/content-site/<slug>/`.

## Local dev

```
npm install
npm run dev
```

## Affiliate disclosure

All pages on this site contain Amazon India affiliate links
(`tag=weareodd-21`). The disclosure block at the top of each article
is mandatory.
