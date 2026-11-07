# Proposal

## Why

The header scrolls out of view as soon as the visitor leaves the hero. On a long single-page
landing, that hides navigation and the primary contact actions ("Contáctanos" and the phone
number) exactly when visitors are deciding to get in touch. Keeping the header pinned at the top
on every viewport makes navigation and contact always one tap away.

## What Changes

- The header stays pinned to the top of the viewport while scrolling, on mobile, tablet and desktop.
- Desktop (≥ `xl`): at the top of the page the header keeps its current look (transparent, overlaid
  on the hero, white outline "Contáctanos" over the photo). Once the page scrolls, it switches to a
  solid "scrolled" state (cream background, bottom border) so links and CTAs stay legible over any
  section, and the outline CTA switches to a brand-colored outline.
- Mobile/tablet (< `xl`): the header keeps its solid cream background and gains a bottom border
  when scrolled. The menu drawer stays attached under the pinned header and scrolls internally if
  it is taller than the viewport.
- In-page anchor navigation (nav links, hero CTAs, footer links) lands each section's top below the
  pinned header instead of hidden under it.
- No visual change at the initial (unscrolled) state.

Assumption (recorded, not asked): the scrolled state uses existing tokens only (`cream-100`,
`line-200`, `brand-800`); no shrinking animation of the header height is introduced.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `design-system`: adds a requirement for header positioning and its scrolled state, plus anchor
  offset behavior. Existing requirements are unchanged.

## Impact

- `src/components/sections/Header.astro`: positioning, scrolled-state styles, drawer max height.
- `src/layouts/Layout.astro`: small script addition to toggle the scrolled state.
- `src/styles/global.css`: scroll padding for anchor offsets and reduced-motion handling.
- `src/components/ui/Button.astro` only if the outline variant needs a scrolled-state hook.
- No new dependencies. Static output unaffected.
