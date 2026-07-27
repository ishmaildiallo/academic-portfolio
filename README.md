# Mohamed Bella Jalloh — Academic Portfolio

Personal academic website: research, publications, teaching, and writing.

Built with React 18, TypeScript, Vite, Tailwind CSS, and react-router. Body and
heading text use the system Georgia serif stack; the masthead blackletter is a
locally subset, self-hosted font. Deployed on Vercel.

## Develop

```
npm install
npm run dev
```

## Build & preview

```
npm run build
npm run preview
```

Deploys are static: `vite build` outputs to `dist/`, which Vercel serves with
the SPA rewrite and cache headers configured in `vercel.json`.

## Content

Page content lives in `data/*.ts` (publications, blog posts, research projects,
teaching, personal info), re-exported through `constants.ts`. Blog posts support
embedded HTML; Tailwind scans `data/` too, so classes used inside post HTML are
included in the build.
