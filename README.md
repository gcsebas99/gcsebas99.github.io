# Portfolio Page

Live at: **https://gcsebas99.github.io/**

Personal portfolio for Sebastián Gamboa, a full-stack engineer: selected projects, experience, skills and contact, on a single scrolling page.

## Tech

- **React 19 + TypeScript**
- **Tailwind CSS v4**: design tokens live in `src/index.css` (`@theme`)
- **Vite**
- **Inter Variable + JetBrains Mono** via Fontsource (self-hosted)
- **GitHub Pages**, deployed by `.github/workflows/deploy.yml` on every push to `main`

## Editing content

All content lives in `src/data/`:

| File | Contents |
|---|---|
| `profile.ts` | Name, role, availability, contact links, interests |
| `portfolio.ts` | Featured projects and "other work" |
| `experience.ts` | Jobs and education |
| `skills.ts` | Skill groups (`core` / `working` / `familiar`), languages, archived skills |

Project screenshots go in `src/assets/portfolio/` (16:10, ~1600×1000). A featured project with no `image` renders a placeholder.

## Development

Requires Node 22 (`nvm use`).

```bash
npm install
npm run dev       # local dev server
npm run lint
npm run build     # type-check + production build into dist/
```
