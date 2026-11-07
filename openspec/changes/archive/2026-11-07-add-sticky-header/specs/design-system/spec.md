# Spec Delta

## ADDED Requirements

### Requirement: Sticky header

The header SHALL remain pinned to the top of the viewport while the page scrolls, on every
viewport width from 320px upward. Pinning SHALL NOT change the header's appearance at the initial,
unscrolled position, and SHALL NOT cause layout shift or horizontal overflow.

#### Scenario: Header stays visible while scrolling on desktop
- **WHEN** a visitor on a viewport ≥ 1280px scrolls to any section of the page
- **THEN** the header (logo, navigation links, "Contáctanos" and phone CTAs) remains fully visible at the top of the viewport

#### Scenario: Header stays visible while scrolling on mobile
- **WHEN** a visitor on a viewport < 1280px scrolls to any section of the page
- **THEN** the header (logo and menu button) remains fully visible at the top of the viewport

#### Scenario: Initial state is unchanged on desktop
- **WHEN** the page is at scroll position 0 on a viewport ≥ 1280px
- **THEN** the header is transparent and overlaid on the hero, with the solid `brand-800` "Contáctanos" CTA over the photo column

#### Scenario: Header stays above page content
- **WHEN** the pinned header overlaps any section, card, image or animated element
- **THEN** the header renders above that content and remains interactive

### Requirement: Header scrolled state

Once the page has scrolled away from the top, the header SHALL switch to a solid scrolled state
that keeps all its text and controls legible over any section background, and SHALL return to
its initial state when the visitor scrolls back to the top.

#### Scenario: Desktop header becomes solid after scrolling
- **WHEN** the page is scrolled past the top on a viewport ≥ 1280px
- **THEN** the header shows a `cream-100` background with a `line-200` bottom border, and the "Contáctanos" CTA keeps its solid `brand-800` background with white text

#### Scenario: Mobile header shows separation after scrolling
- **WHEN** the page is scrolled past the top on a viewport < 1280px
- **THEN** the header keeps its `cream-100` background and shows a `line-200` bottom border

#### Scenario: Returning to the top restores the initial state
- **WHEN** the visitor scrolls back to scroll position 0
- **THEN** the header returns to its initial appearance

#### Scenario: Legibility over dark sections
- **WHEN** the pinned header is over the process section or the footer (dark backgrounds)
- **THEN** logo, links and CTAs keep at least WCAG AA contrast against the header background

#### Scenario: Reduced motion
- **WHEN** the visitor has `prefers-reduced-motion: reduce`
- **THEN** the switch between initial and scrolled states happens without animated transitions

#### Scenario: No JavaScript
- **WHEN** JavaScript is disabled
- **THEN** the header still stays pinned and legible over all sections

### Requirement: Anchor offset under the sticky header

In-page anchor navigation SHALL position the target section's top edge directly below the pinned
header, so section headings are never hidden behind it.

#### Scenario: Navigating to a section from the header
- **WHEN** a visitor activates a navigation link such as "Proceso" or "Contacto"
- **THEN** the page scrolls so the target section's eyebrow and heading are fully visible below the header

#### Scenario: Navigating from the hero or footer
- **WHEN** a visitor activates "Agenda una consulta gratuita", "Ver especialidades" or a footer link
- **THEN** the target section's top is visible below the header

### Requirement: Mobile menu under the sticky header

The mobile menu drawer SHALL open directly beneath the pinned header at any scroll position and
SHALL remain fully usable when its content is taller than the viewport.

#### Scenario: Opening the menu mid-page
- **WHEN** a visitor on a viewport < 1280px opens the menu after scrolling down
- **THEN** the drawer appears immediately below the pinned header, not at the top of the document

#### Scenario: Drawer taller than the viewport
- **WHEN** the drawer content exceeds the available viewport height (e.g. a landscape phone)
- **THEN** the drawer scrolls internally and every link and CTA can be reached
