# Design

## Context

- `Header.astro` uses two positioning modes. Below `xl` it is `relative`, in normal flow, 80px tall on
  `cream-100`. At `xl` and up it is `xl:absolute xl:inset-x-0 xl:top-0` and transparent, 100px tall,
  overlaid on the hero. The hero's copy column compensates with `xl:pt-40`.
- The "Contáctanos" CTA uses the `outline-light` Button variant (white border and text), which is
  only legible over the photo.
- The mobile drawer is `absolute top-full` inside the header and toggled by the script in
  `Layout.astro`, which already guards behavior behind `html.js`.
- `global.css` sets `scroll-behavior: smooth` on `html`, and turns it off under reduced motion.
- The site is static with `base: '/abogados'`. The script stays vanilla and inline.

## Goals / Non-Goals

**Goals:**
- One positioning approach for all breakpoints that keeps the desktop overlay at scroll 0.
- A scrolled state driven by one attribute, styled with Tailwind data variants.
- Correct anchor offsets without JavaScript.

**Non-Goals:**
- Hide-on-scroll-down / show-on-scroll-up behavior.
- Shrinking the header height or the logo on scroll.
- Highlighting the active section in the navigation (scroll spy).

## Decisions

### 1. `position: sticky` everywhere, with a negative bottom margin on desktop

The header becomes `sticky top-0 z-50` at all widths. On `xl` it also gets `xl:-mb-[100px]` (its own
height) and a transparent background, so the hero still starts underneath it and the overlay at
scroll 0 is pixel-identical. Remove the `xl:absolute` positioning.

- *Alternative: `position: fixed` plus a spacer or padding on `<main>`.* This needs a spacer on
  mobile and duplicates the header height in two places. Rejected.
- *Alternative: keep `absolute` on desktop and switch to `fixed` with JavaScript after scrolling.*
  This causes a jump at the switch point and fails without JavaScript. Rejected.

Sticky works without JavaScript, so the "No JavaScript" scenario holds. The only extra
requirement is legibility, covered in decision 3.

### 2. Scrolled state via `data-scrolled` and an IntersectionObserver sentinel

Add a 1px sentinel element at the very top of `<body>`. An IntersectionObserver in the existing
`Layout.astro` script sets `data-scrolled` on the header when the sentinel leaves the viewport, and
removes it when the sentinel returns. Styles use Tailwind v4 variants: `data-scrolled:bg-cream-100`,
`data-scrolled:border-line-200`, and `group-data-scrolled:` on children for the CTA swap.

- *Alternative: a `scroll` listener throttled with `requestAnimationFrame`.* It works, but it runs on
  every scroll frame. The observer fires only on the state change. Rejected.

### 3. Legibility without JavaScript

The scrolled background is added by JavaScript. Without it, the transparent desktop header would
float over light sections, where the white outline CTA is invisible. Mitigation: the transparent
desktop styles apply only under `html.js` (`[.js_&]:xl:bg-transparent`). The no-JS default is the
solid scrolled look. This follows the existing convention that the reveal hidden states only
apply under `html.js`.

### 4. CTA swap through the header group, not a new Button variant

The header gets the `group` class. The "Contáctanos" button keeps `outline-light` and receives
override classes. This keeps `Button.astro` unchanged and the change local to the header.

*Superseded:* the CTA was later changed to the solid `primary` variant (`brand-800` background, white
text) in every state, so no scroll-dependent swap is needed. Original note: the brand outline is the default, set with important modifiers
(`border-brand-800! text-brand-800!`). The white outline applies only under
`.js .group:not([data-scrolled])`. Inverting the default this way makes the CTA legible without
JavaScript, mirroring decision 3. The same important-modifier fix is applied to the phone CTA in
the mobile drawer. That CTA had a pre-existing class conflict: its overrides tied in specificity
with the variant's `text-white` and lost, which left it white on cream.

- *Alternative: a new `outline-adaptive` variant in Button.* It is reusable but premature for a
  single use. Rejected.

### 5. Anchor offset via `scroll-padding-top` on `html`

Add `scroll-padding-top` in `global.css`, equal to the header's rendered height including its
1px bottom border: `81px` on mobile and `101px` at `xl`. The desktop negative margin is also
`-mb-[101px]`, and the drawer max height uses `100dvh - 81px`. This applies to every in-page anchor, with or without JavaScript.

- *Alternative: `scroll-margin-top` on each section.* That means repeating it on ten components.
  Rejected.

### 6. Drawer height

Give the drawer `max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain`, so it scrolls
internally on short viewports. Because the header is sticky, `top-full` always anchors the drawer
below the visible header.

### 7. Transitions

Add `transition-[background-color,border-color] duration-200` on the header and the CTA, plus
`motion-reduce:transition-none`. Keep a `border-b border-transparent` at rest, so adding the border
color causes no 1px layout shift.

## Risks / Trade-offs

- [The sticky header covers part of the hero image on mobile when the user scrolls slightly] →
  This is expected sticky behavior. The header height is unchanged.
- [A `z-50` header could sit under future overlays, such as modals] → No overlays exist today.
  Document `z-50` as the header layer.
- [`overflow: hidden` on an ancestor breaks `position: sticky`] → The header is a direct child of
  `<body>`. During apply, verify that no wrapper adds overflow.
- [In the scrolled state over the dark process section, the cream header creates a strong
  contrast band] → This is an accepted visual. It keeps CTAs legible, as the spec requires.

## Migration Plan

This is a self-contained frontend change. To roll back, revert the commit. No data or
configuration migration is needed.
