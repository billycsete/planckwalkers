# Planckwalkers

The website for Planckwalkers, a small guild of friendly folks leveling together on a PvE Alliance
server in WoW Forever. It shows the group's leveling plan: which dungeons we run on which dates, and
where everyone on the roster is along the way.

**Live site:** [planckwalkers.com](https://planckwalkers.com/)

Built with Vite, React, TypeScript, Tailwind CSS, daisyUI and Lucide icons.

## Develop

```sh
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # type-check and build to dist/
npm run lint     # lint with oxlint
npm run preview  # serve the built site locally
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`), served at planckwalkers.com. In the repo's
Settings → Pages, set Source to "GitHub Actions" once.

## Layout

One page:

- **Hero** (`src/sections/Hero.tsx`): the logo, a short intro, and a button that opens the
  Forever Together Plan dialog (`src/components/PlanModal.tsx`).
- **Leveling timeline** (`src/sections/Timeline.tsx`, `#timeline`): the dungeon checkpoints by
  date, with each roster member's progress.

## Content

The roster and plan live in `src/data/roster.ts` and `src/data/plan.ts`. Their written versions
are in `docs/content/`, so update both when something changes.
