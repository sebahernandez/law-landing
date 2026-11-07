# Spec Delta

## ADDED Requirements

### Requirement: Legal dialogs

The site SHALL present "Política de privacidad", "Términos de uso" and "Aviso legal" as modal
dialogs on the landing page, not as separate pages. Each footer "Legal" link SHALL open its
matching dialog. Each dialog SHALL show its document title as a heading, the document body and
a close control.

#### Scenario: Opening a legal dialog from the footer
- **WHEN** a visitor activates "Política de privacidad", "Términos de uso" or "Aviso legal" in the footer
- **THEN** the matching dialog opens over the page with its title and body, and the page stays at its scroll position

#### Scenario: Closing a legal dialog
- **WHEN** a visitor activates the close control, presses `Escape` or clicks the backdrop outside the dialog panel
- **THEN** the dialog closes and the page is shown at the same scroll position as before

#### Scenario: Long content
- **WHEN** the document body is taller than the dialog panel
- **THEN** the body scrolls inside the panel while the title and close control stay visible

#### Scenario: Responsive panel
- **WHEN** a dialog is open on a viewport from 320px upward
- **THEN** the panel fits inside the viewport with at least a 16px gutter on each side and causes no horizontal scroll

### Requirement: Legal dialog accessibility

Legal dialogs SHALL be modal for assistive technologies and keyboard users: focus moves into the
dialog when it opens, stays inside while it is open, and returns to the element that opened it
when it closes. The page behind SHALL NOT scroll while a dialog is open.

#### Scenario: Focus management
- **WHEN** a keyboard user opens a legal dialog and later closes it
- **THEN** focus moves into the dialog on open, Tab cycles only through the dialog's controls, and focus returns to the footer link on close

#### Scenario: Accessible name and controls
- **WHEN** a screen reader user opens a legal dialog
- **THEN** the dialog is announced as a modal dialog named by its title, and the close control has the accessible name "Cerrar"

#### Scenario: Background scroll lock
- **WHEN** a legal dialog is open and the visitor scrolls or swipes
- **THEN** only the dialog content scrolls, not the page behind it

#### Scenario: Visual standards
- **WHEN** a legal dialog renders
- **THEN** it uses design-system tokens (white panel, `ink-900` headings, `ink-600` body, dimmed `brand-900` backdrop), the close control has a 44×44px hit area, and all text meets WCAG AA contrast

#### Scenario: Reduced motion
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** dialogs open and close without animated transitions

### Requirement: Legal dialog deep links

Each legal dialog SHALL have a stable URL fragment: `#politica-de-privacidad`,
`#terminos-de-uso` and `#aviso-legal`. Loading the page with one of these fragments SHALL open
the matching dialog.

#### Scenario: Shared link opens the dialog
- **WHEN** a visitor loads `/abogados/#terminos-de-uso`
- **THEN** the page loads with the "Términos de uso" dialog open

#### Scenario: Closing clears the fragment
- **WHEN** a visitor closes a dialog that was opened by link or fragment
- **THEN** the fragment is removed from the URL without adding a history entry or scrolling the page

### Requirement: Legal content without JavaScript

When JavaScript is unavailable, each footer "Legal" link SHALL still reveal its document's
content on the page, readable and styled with design-system tokens.

#### Scenario: No-JS fallback
- **WHEN** JavaScript is disabled and a visitor activates a footer "Legal" link
- **THEN** the page navigates to the document's fragment and shows its title and full body inline, legible on any viewport from 320px

### Requirement: Legal content

The legal documents SHALL be written in Spanish for an independent lawyer practicing in Chile.
They are provisional copy and SHALL be reviewed by the client before publication.

#### Scenario: Document topics
- **WHEN** the legal dialogs render
- **THEN** "Política de privacidad" covers data controller, data collected through the contact form, purpose, legal basis (Ley 19.628), retention, rights and contact; "Términos de uso" covers acceptance, informational purpose, no attorney-client relationship, intellectual property, liability and governing law; "Aviso legal" covers site owner identification, professional practice, advertising of legal services, no guarantee of results and the creator credit

#### Scenario: Contact details are consistent
- **WHEN** a legal document mentions the owner's contact details
- **THEN** it uses the same email, phone and address shown in the contact section

## MODIFIED Requirements

### Requirement: Static rendering

The site SHALL build to static HTML (`output: 'static'`), with JavaScript limited to the
mobile menu, sticky header state, scroll reveals, counters and legal dialogs (inline `<script>`
processed by Astro). The contact form SHALL be markup-only (no backend) with native validation
(`required`).

#### Scenario: Build output
- **WHEN** `npm run build` runs
- **THEN** `dist/index.html` is generated with no client framework runtime
