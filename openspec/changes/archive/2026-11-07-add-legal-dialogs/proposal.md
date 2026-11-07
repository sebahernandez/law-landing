# Proposal

## Why

The footer's "Legal" column links to "Política de privacidad", "Términos de uso" and "Aviso legal",
but all three point to `#` and lead nowhere. A law firm's site needs this information available,
and the site is a single static page, so the content should open in place as modal dialogs
instead of separate internal pages.

## What Changes

- Add three modal dialogs: "Política de privacidad", "Términos de uso" and "Aviso legal", each
  with a title, structured body copy and a close control.
- The three footer "Legal" links open their dialog instead of pointing to `#`.
- Each dialog has a shareable URL fragment (`#politica-de-privacidad`, `#terminos-de-uso`,
  `#aviso-legal`). Loading the page with one of them opens that dialog.
- Dialogs are accessible: focus moves into the dialog and returns to the trigger, `Escape`
  and the backdrop close it, the page behind does not scroll, and they work at 320px.
- Without JavaScript, the link still shows the content inline on the page.
- The design-system rule that limits JavaScript to specific features is updated to include
  the legal dialogs.
- **Provisional copy**: the legal text is a reasonable Spanish draft for a Chilean independent
  lawyer (personal data under Ley 19.628, professional secrecy, no attorney-client relationship
  from site use). It must be reviewed by the client before publication, like the other
  provisional copy on the site.

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `design-system`: adds requirements for the legal dialogs (behavior, accessibility, deep links,
  no-JS fallback, content), and modifies "Static rendering" to allow the dialog script.

## Impact

- New `src/components/ui/LegalDialog.astro` (dialog shell) and a section that renders the three
  dialogs from data.
- `src/data/content.ts`: legal copy for the three documents; footer "Legal" link `href`s change
  from `#` to the dialog fragments.
- `src/pages/index.astro`: renders the dialogs after the footer.
- `src/layouts/Layout.astro`: extends the existing inline script to open and close dialogs and
  handle fragments.
- `src/styles/global.css`: backdrop, entrance motion, scroll lock and the no-JS fallback.
- No new dependencies.
