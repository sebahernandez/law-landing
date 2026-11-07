# Proposal

## Why

The site is built by Kreadium, and its authorship must be visible on every published version.
Today the footer shows only the client's copyright and the legal disclaimer, so nothing credits
the creator or links back to kreadium.cl.

## What Changes

- Add a permanent creator credit to the footer bottom bar: "Sitio creado por kreadium.cl", where
  "kreadium.cl" links to `https://kreadium.cl`.
- The credit is a persistent requirement of the design system: later redesigns or copy changes
  must keep it in the footer.
- The credit follows the existing footer styles (muted text on `brand-900`, visible focus, 44px
  touch target) and does not replace the copyright or the disclaimer.

Assumptions (minor, recorded here rather than asked):
- Credit copy is in Spanish to match the site: "Sitio creado por kreadium.cl".
- The link opens in a new tab with `rel="noopener"`, so visitors do not leave the client's site.

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `design-system`: adds a requirement for a permanent creator credit in the footer, linking to
  kreadium.cl.

## Impact

- `src/components/sections/Footer.astro`: renders the credit in the bottom bar.
- `src/data/content.ts`: holds the credit copy and URL with the rest of the footer data.
  `src/pages/index.astro` already spreads `content.footer` into `Footer`, so it needs no change.
- `openspec/specs/design-system/spec.md`: gains the creator credit requirement after archive.
- No new dependencies.
