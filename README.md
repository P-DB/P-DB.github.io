# P-DB — Portfolio

Personal portfolio of **Patrizio Di Bartolomeo**, Frontend & UI Engineer based in Rome.

A single-page, brutalist site: thick black borders, hard blue shadows, a black hero with a glitching boxed logo, and a film-grain texture on the dark sections. Built to be fast, responsive and accessible.

## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite](https://vite.dev) for dev server and build
- Plain CSS (custom properties, container queries, no framework)
- [Oxlint](https://oxc.rs) for linting
- Fonts: [Archivo Black](https://fonts.google.com/specimen/Archivo+Black) and [Space Mono](https://fonts.google.com/specimen/Space+Mono)

## Getting started

Requires Node 20+.

```bash
npm install
npm run dev
```

| Script            | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the dev server at http://localhost:5173  |
| `npm run build`   | Type-check and build to `dist/`                |
| `npm run preview` | Serve the production build locally             |
| `npm run lint`    | Lint with Oxlint                               |

To test on a phone on the same Wi-Fi, expose the dev server to the network and open the printed `Network` URL:

```bash
npm run dev -- --host
```

## Editing content

All copy lives in [`src/data.ts`](src/data.ts), so you don't need to touch any components:

- **`profile`**: name, logo text, role, location, intro, bio, highlighted phrases (`bioHighlights`), years of experience, languages, email and footer links
- **`experiences`**: work history shown in the accordion; omit `end` for the current role
- **`skills`**: grouped skills grid
- **`awards`**: awards grid

## Project structure

```
src/
  App.tsx                    Page layout: header, hero, about, work, skills, awards, footer
  data.ts                    All site content
  index.css                  Design tokens and all styles, organised by section
  components/
    ExperienceItem.tsx       Accessible accordion row for a job
    GlitchFilter.tsx         SVG filter behind the hero logo's VHS distortion
public/
  favicon.svg                Terminal-cursor favicon
```

## Design notes

- **Palette**: black, white, electric blue `#1f4dff`, violet `#8b5cff` on dark areas, yellow `#f5f53c` on light areas, light grey bands. All defined as tokens at the top of `index.css`.
- **Hero glitch**: the logo and cursor combine a CSS colour split (violet/indigo) with an SVG displacement filter that tears in bursts every 4 seconds.
- **Film grain**: the hero and footer have a grain texture made of grey noise with violet and blue specks. It sits behind the content, so only the background is grainy.
- **Mobile performance**: the SVG filter and the grain are desktop-only. On touch devices they are expensive enough to make iOS Safari reload the tab, so phones get the lightweight CSS glitch only.

## Accessibility

- Semantic landmarks, a skip link, and a logical heading order (the `h1` is announced as the full name)
- The work history follows the WAI-ARIA accordion pattern (heading plus button, `aria-expanded`, `aria-controls`)
- Visible focus outlines on both light and dark sections
- Colour contrast checked against WCAG AA
- Every animation respects `prefers-reduced-motion`
- Decorative effects are hidden from assistive technology

## Deployment

`npm run build` outputs a static site in `dist/` that can be hosted anywhere: Vercel, Netlify, GitHub Pages or Cloudflare Pages. Once there's a domain, add `og:url` and `og:image` to `index.html` for rich link previews.

## License

© Patrizio Di Bartolomeo. All rights reserved.
