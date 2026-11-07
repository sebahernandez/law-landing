# Tasks

## 1. Sticky positioning

- [x] 1.1 In `src/components/sections/Header.astro`, replace `relative xl:absolute xl:inset-x-0 xl:top-0` with `group sticky top-0 z-50 xl:-mb-[100px]`, add `border-b border-transparent`, and keep the default background solid `bg-cream-100`. Verify: at scroll 0 the desktop (1440px) hero screenshot matches the current one, and on mobile the header stays at the top after scrolling.
- [x] 1.2 Make the transparent desktop look apply only under `html.js` (e.g. `[.js_&]:xl:bg-transparent`) so the no-JS default stays solid. Verify: with JavaScript disabled, the header is solid cream and legible over the about, practice areas and process sections.
- [x] 1.3 Confirm that no ancestor of the header has `overflow: hidden`/`clip` that would break sticky behavior (check `Layout.astro` `body`/wrappers). Verify: the header stays pinned through the footer on desktop and mobile.

## 2. Scrolled state

- [x] 2.1 In `src/layouts/Layout.astro`, add a 1px top sentinel and extend the existing inline script with an IntersectionObserver that toggles `data-scrolled` on the header. Verify: in DevTools the attribute appears after scrolling about 1px and disappears at scroll 0.
- [x] 2.2 Add scrolled styles on the header: `data-scrolled:bg-cream-100 data-scrolled:border-line-200`, plus `transition-[background-color,border-color] duration-200 motion-reduce:transition-none`. Verify: the header is solid with a bottom border when scrolled at 1440px and 390px, with no 1px layout shift.
- [x] 2.3 On the "Contáctanos" desktop CTA, add `group-data-scrolled:border-brand-800 group-data-scrolled:text-brand-800` and a matching hover override, without changing `Button.astro`. Verify: the CTA is legible when the header is over light sections and still renders as the white outline over the photo at scroll 0.

## 3. Anchor offsets and mobile drawer

- [x] 3.1 In `src/styles/global.css`, add `scroll-padding-top: 5rem` on `html`, and `6.25rem` at the `xl` breakpoint. Verify: clicking "Proceso", "Contacto" and the hero CTAs lands with the eyebrow and heading fully visible below the header, on mobile and desktop.
- [x] 3.2 Give the mobile drawer `max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain`. Verify: opening the menu mid-page shows it right below the header, and on a short landscape viewport (e.g. 740×360) all links and CTAs are reachable by scrolling the drawer.

## 4. Verification

- [x] 4.1 Run `npm run build` (Node 24 via fnm). Verify: the build completes with no errors.
- [x] 4.2 Capture screenshots at 1440px (scroll 0 and mid-page over the process section) and 390px/320px (via iframe, mid-page). Verify: the header is pinned and legible in each, there is no horizontal overflow, and the scroll-0 desktop view is unchanged.
- [x] 4.3 Check reduced motion (`--force-prefers-reduced-motion`) and keyboard navigation (Tab through header links, open and close the menu with Escape). Verify: no state transitions animate, and focus order and focus rings are intact.
- [x] 4.4 Run `npx openspec validate add-sticky-header --strict`. Verify: the change validates.

## Workflow follow-up

- Archive the change with `/opsx:archive` after implementation is verified, so the delta merges into `openspec/specs/design-system/spec.md`.
