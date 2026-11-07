# Tasks

## 1. Credit data and rendering

- [x] 1.1 In `src/data/content.ts`, add `credit: { prefix: 'Sitio creado por', label: 'kreadium.cl', href: 'https://kreadium.cl' }` to the `footer` object. Verify: `npm run build` (Node 24 via fnm) passes type checks, since `index.astro` spreads `content.footer` into `Footer`.
- [x] 1.2 In `src/components/sections/Footer.astro`, add a typed `credit` prop and render it as a third item in the bottom bar after the disclaimer: the prefix as text, then an `<a>` with `href={credit.href}`, `target="_blank"`, `rel="noopener"`, styled `text-white underline-offset-4 hover:underline inline-flex min-h-11 items-center`. Verify: the built `dist/index.html` contains `Sitio creado por` followed by `<a href="https://kreadium.cl" target="_blank" rel="noopener"`.
- [x] 1.3 Adjust the bottom bar layout so the three items wrap cleanly: stacked below `lg`, and at `lg` copyright on the left with disclaimer and credit on the right (or a wrapping row), with no horizontal overflow. Verify: screenshots at 1440px, 768px, 390px and 320px show the credit visible, legible and with no horizontal scroll (`scrollWidth <= innerWidth`).

## 2. Verification

- [x] 2.1 Check accessibility: Tab to the credit link and confirm the gold focus ring from `.on-dark :focus-visible`, a hit area of at least 44px tall, and `#ffffff` text on `brand-900` (AA). Verify: Playwright reports the link's bounding box height ≥ 44 and a visible outline when focused.
- [x] 2.2 Run `npx openspec validate add-kreadium-credit --strict`. Verify: the change validates.

## Workflow follow-up

- Archive the change with `/opsx:archive` after implementation is verified, so the creator credit requirement merges into `openspec/specs/design-system/spec.md`.
