# Tasks

## 1. Legal content

- [x] 1.1 Create `src/data/legal.ts` exporting a `LegalDocument` type (`id`, `title`, `updated`, `sections: { heading: string; paragraphs: string[] }[]`) and the three documents with ids `politica-de-privacidad`, `terminos-de-uso` and `aviso-legal`. Write provisional Spanish copy covering the topics in the "Document topics" scenario, add a header comment that marks it as provisional pending the client's legal review, and import email, phone, address and brand from `content.ts` instead of repeating them. Verify: `npm run build` (Node 24 via fnm) passes, and `rg` finds no hard-coded email or phone in `legal.ts`.
- [x] 1.2 In `src/data/content.ts`, change the footer "Legal" link `href`s from `#` to `#politica-de-privacidad`, `#terminos-de-uso` and `#aviso-legal`. Verify: the built `dist/index.html` contains the three fragment `href`s in the footer.

## 2. Dialog markup and styles

- [x] 2.1 Create `src/components/ui/LegalDialog.astro`, which renders `<dialog id={doc.id} aria-labelledby={titleId} data-legal-dialog>` with an inner panel: a header containing the `h2` title and a close `<button aria-label="Cerrar">` with the `x` icon (44×44px), and a scrollable body with the "Última actualización" date and the sections (`h3` and paragraphs). Use design-system tokens. Verify: `dist/index.html` contains three `<dialog` elements with matching `aria-labelledby` ids.
- [x] 2.2 Render the three dialogs in `src/pages/index.astro` after `<Footer>`. Verify: the build passes, and the dialogs are present but not visible on page load.
- [x] 2.3 In `src/styles/global.css`, add the dialog sizing (`min(42rem, 100vw - 2rem)` × `100dvh - 2rem`), `::backdrop` in `brand-900`/60, the `@starting-style` entrance and exit transitions, `html:has(dialog[open]:modal) { overflow: hidden }`, the reduced-motion override, and the no-JS rule `html:not(.js) dialog:target` that shows the dialog as a static inline section. Verify: with JavaScript disabled, navigating to `#aviso-legal` shows the document inline and legible at 320px and 1440px.

## 3. Behavior

- [x] 3.1 Extend the inline script in `src/layouts/Layout.astro`: a delegated click handler opens a `[data-legal-dialog]` whose id matches a clicked link's fragment (`preventDefault`, `showModal()`, `history.replaceState` with the fragment); open the dialog on load and on `hashchange` when the fragment matches; close on close-button click and on backdrop click (`event.target === dialog`); on `close`, restore the URL to `pathname + search` with `replaceState`. Verify: clicking each footer link opens its dialog and leaves `scrollY` unchanged; `Escape`, the button and a backdrop click all close it; loading `/abogados/#terminos-de-uso` opens that dialog; the URL has no fragment after closing.

## 4. Verification

- [x] 4.1 Check accessibility with Playwright: after opening, `document.activeElement` is inside the dialog; Tab cycles only within it; after `Escape`, focus is back on the footer link; the dialog's role is `dialog` and its accessible name equals the title; the close button box is at least 44×44px; and `document.documentElement.scrollTop` does not change while scrolling with the dialog open. Verify: all checks pass at 1440px and 390px.
- [x] 4.2 Capture screenshots of one open dialog at 1440px, 390px and 320px (long body scrolled halfway), and confirm with reduced motion that `transitionProperty` resolves to `none`. Verify: the panel fits with a 16px or larger gutter, the header stays visible while the body scrolls, and there is no horizontal overflow.
- [x] 4.3 Run `npm run build` and `npx openspec validate add-legal-dialogs --strict`. Verify: both succeed.

## Workflow follow-up

- Have the client (the lawyer) review and approve the provisional legal copy in `src/data/legal.ts` before publishing.
- Archive the change with `/opsx:archive` after implementation is verified, so the legal dialog requirements merge into `openspec/specs/design-system/spec.md`.
