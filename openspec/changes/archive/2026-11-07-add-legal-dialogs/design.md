# Design

## Context

- The footer renders its three link columns generically from `footer.columns` in
  `src/data/content.ts`. The "Legal" links currently use `href: '#'`.
- All client behavior lives in one inline `<script>` in `src/layouts/Layout.astro` (mobile menu,
  sticky header, reveals, counters). The project hides enhanced states only under `html.js`, so
  content stays usable without JavaScript.
- The sticky header uses `z-50`. The site is static with `base: '/abogados'`.
- Motivation is in proposal.md; required behavior is in the delta spec.

## Goals / Non-Goals

**Goals:**
- Use the platform's modal semantics rather than a hand-built overlay.
- Keep legal copy as data, separate from markup, so the client's review only touches one file.
- Keep the change additive to the existing script and styles.

**Non-Goals:**
- A generic modal system for other content.
- Separate static pages for the legal documents.
- A cookie banner or consent management. The site sets no cookies today.

## Decisions

### 1. Native `<dialog>` opened with `showModal()`

Each document is a `<dialog id="…">` element. `showModal()` places it in the top layer, above the
`z-50` sticky header, makes the rest of the page inert, traps focus, closes on `Escape`, and
returns focus to the previously focused element when it closes. This covers the accessibility
requirement without custom focus-trap code.

- *Alternative: a `div` overlay with `role="dialog"` and a hand-written focus trap.* More code,
  and it is easy to get inertness and focus return wrong. Rejected.
- *Alternative: the Invoker Commands API (`commandfor`/`command="show-modal"`) without JS.* It
  only works on `<button>`. The footer links must stay links so the no-JS fallback and shareable
  fragments keep working. Rejected for now.

### 2. Links keep fragment `href`s; the script intercepts them

The footer links become `href="#politica-de-privacidad"`, `#terminos-de-uso` and `#aviso-legal`.
One delegated click listener checks whether a clicked link's fragment matches a legal dialog's
id. If it does, the listener prevents the default jump, calls `showModal()`, and writes the
fragment with `history.replaceState`. On load, and on `hashchange`, a matching fragment opens its
dialog. On `close`, `replaceState` restores `pathname + search`, so there is no extra history
entry and no scroll jump.

Matching by fragment, not by a footer-specific attribute, means any future in-page link to these
fragments (for example from the contact form disclaimer) opens the dialog with no extra wiring.

### 3. No-JS fallback with `:target`

A closed `<dialog>` is `display: none`. Under `html:not(.js)`, the rule `dialog:target` displays
the dialog as a static, inline block, styled like a page section. Without JavaScript, clicking
a footer link navigates to the fragment and shows the document inline. With JavaScript, the
rule never matches because `html.js` is present.

### 4. Backdrop click closes the dialog

The `<dialog>` has no padding, and an inner panel holds all the content. A click whose target is
the `<dialog>` element itself is a backdrop click, so the dialog closes. This works in every
browser that supports `<dialog>`, unlike `closedby="any"`, which does not yet have full support.

### 5. Layout: fixed header and scrolling body

The panel is a flex column: a header with the `h2` title and a 44×44px close button, then a body
with `overflow-y: auto`. The dialog's maximum size is `min(42rem, 100vw - 2rem)` wide and
`100dvh - 2rem` tall, which gives the 16px gutter at 320px. The title gets an id referenced by
`aria-labelledby`, and the close button has `aria-label="Cerrar"`.

### 6. Scroll lock via `:has()`

`html:has(dialog[open]:modal) { overflow: hidden; }` stops the page behind from scrolling. This
needs no JavaScript bookkeeping, and the rule disappears when the dialog closes.

### 7. Motion with `@starting-style`

The panel fades in and moves up 8px over 200ms. `::backdrop` fades from transparent to
`brand-900` at 60% opacity. `@starting-style` animates the entrance. The exit animates
`overlay` and `display` with `allow-discrete`. Under `prefers-reduced-motion: reduce` all
transitions are `none`. Browsers without `@starting-style` simply open without animation.

### 8. Content in `src/data/legal.ts`

The three documents live in a new data file, each with `id`, `title`, `updated` and
`sections: { heading, paragraphs[] }[]`. They reuse `contact` details and `brand` from
`content.ts`, so contact data stays consistent. A `LegalDialog.astro` atom renders one document,
and `index.astro` renders all three after `<Footer>`.

- *Alternative: put them in `content.ts`.* That file is already long, and legal copy has a
  different review owner (the client's legal review). Rejected.

## Risks / Trade-offs

- [The draft legal text is not legal advice] → Mark it as provisional in the proposal and in a
  code comment, and leave the client's review as a workflow follow-up before publishing.
- [The scroll lock removes the scrollbar, which can shift the layout by the scrollbar width on
  desktop browsers with classic scrollbars] → This is accepted. The modal covers the page and
  the shift is not visible behind the backdrop.
- [`replaceState` on open means that the Back button does not close the dialog] → This is
  accepted. Closing with `Escape`, the button or the backdrop is the expected pattern, and it
  avoids history pollution.
- [The no-JS fallback shows the dialog where it sits in the DOM, after the footer] → This is
  acceptable: the fragment navigation scrolls to it, and it is styled as a readable section.

## Migration Plan

This is an additive frontend change. To roll back, revert the commit. The footer links fall back
to fragments that lead nowhere, which is no worse than today's `#`.
