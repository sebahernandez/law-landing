# Design System Specification — Serrano Abogados

## Purpose

Defines the visual language, tokens, components, motion and responsive behavior of the
Serrano Abogados landing page. Source of truth: `design/landing-abogado.jpg`
(desktop mock, 2307px wide, rendered at ~1.6x of a 1440px viewport). Section crops live in
`design/crops/`. The site is built with Astro (static output) and Tailwind CSS v4; every
token below MUST be declared once in `src/styles/global.css` via `@theme` and consumed
through Tailwind utilities.

## Requirements

### Requirement: Color tokens

The system SHALL expose the following color tokens and SHALL NOT use ad-hoc hex values in
components.

#### Scenario: Color tokens reference
- **WHEN** implementing color tokens
- **THEN** the following reference values apply:

| Token              | Value     | Usage                                                  |
|--------------------|-----------|--------------------------------------------------------|
| `brand-900`        | `#0a2b24` | Footer background                                      |
| `brand-800`        | `#0f3d35` | Primary buttons, marquee, process section, card titles, eyebrows, icons |
| `brand-700`        | `#165046` | Primary button hover                                   |
| `gold-500`         | `#c4a86f` | Accent: marquee stars, process numbers, eyebrow on dark, rating stars |
| `cream-100`        | `#f3ede1` | Hero, testimonial cards, contact section               |
| `paper-50`         | `#f9f8f3` | Practice areas section, FAQ section                    |
| `white`            | `#ffffff` | About and testimonials sections, cards, form panel     |
| `ink-900`          | `#161a1b` | Headings                                               |
| `ink-600`          | `#5f5b52` | Body copy                                              |
| `ink-400`          | `#8c887e` | Input placeholders, captions                           |
| `line-200`         | `#e6e1d6` | Card borders, FAQ dividers, input borders              |
| `on-dark`          | `#ffffff` | Headings on dark                                       |
| `on-dark-muted`    | `#c9d3cf` | Body copy on dark                                      |
| `on-dark-line`     | `#2c5a50` | Dividers on dark (process steps, footer rule)          |

#### Scenario: Component colors come from tokens
- **WHEN** any component renders a color
- **THEN** it uses a Tailwind utility backed by one of the tokens above (e.g. `bg-brand-800`, `text-gold-500`)

#### Scenario: Text contrast
- **WHEN** body text renders on `cream-100`, `paper-50` or `white`
- **THEN** it uses `ink-600` or darker, meeting WCAG AA (≥ 4.5:1)

### Requirement: Typography

The system SHALL use two self-hosted variable fonts via Fontsource:

#### Scenario: Typography reference
- **WHEN** implementing typography
- **THEN** the following reference values apply:

- `font-serif`: **Lora Variable** — headings, logo, card titles, marquee, stats, FAQ questions, testimonial quotes (italic).
- `font-sans`: **Inter Variable** — navigation, body, labels, buttons, eyebrows.

Type scale (mobile → desktop, fluid with `clamp()` where noted):

| Role              | Family | Size                                  | Weight | Line height | Tracking |
|-------------------|--------|---------------------------------------|--------|-------------|----------|
| Display (hero h1) | serif  | `clamp(2.5rem, 5vw + 1rem, 3.75rem)`  | 400    | 1.1         | -0.01em  |
| H2 section        | serif  | `clamp(2rem, 3vw + 1rem, 2.75rem)`    | 400    | 1.15        | -0.01em  |
| H3 card/step      | serif  | `1.25rem`                             | 500–600| 1.3         | 0        |
| Marquee           | serif  | `clamp(1.25rem, 2vw, 1.875rem)`       | 400    | 1           | 0        |
| Stat number       | serif  | `clamp(2.25rem, 3vw, 3rem)`           | 400    | 1           | 0        |
| Quote             | serif italic | `1.125rem`                      | 400    | 1.6         | 0        |
| Eyebrow           | sans   | `0.75rem`                             | 600    | 1.4         | 0.2em, uppercase |
| Lead              | sans   | `1.125rem`                            | 400    | 1.65        | 0        |
| Body              | sans   | `1rem`                                | 400    | 1.65        | 0        |
| Small / caption   | sans   | `0.875rem`                            | 400    | 1.5         | 0        |

#### Scenario: Fonts load without layout shift
- **WHEN** the page loads
- **THEN** fonts are bundled locally (no third-party font CDN) with `font-display: swap`

### Requirement: Layout and spacing

The system SHALL use a centered container `max-w-[1280px]` with horizontal padding
`px-5` (mobile), `px-8` (md), `px-10` (lg). Vertical section rhythm SHALL be
`py-20` (mobile) → `py-28` (lg). Radii: `rounded-md` (6px) for buttons, inputs and icon
tiles; `rounded-lg` (8px) for cards and the form panel. Shadows are not used; elevation is
expressed with `line-200` borders.

#### Scenario: No horizontal overflow
- **WHEN** the viewport is any width from 320px to 2560px
- **THEN** the document has no horizontal scrollbar (the marquee clips inside its own `overflow-hidden` band)

### Requirement: Breakpoints and responsive behavior

The system SHALL be mobile-first with Tailwind default breakpoints (`sm` 640, `md` 768,
`lg` 1024, `xl` 1280) and SHALL implement:

#### Scenario: Breakpoints and responsive behavior reference
- **WHEN** implementing breakpoints and responsive behavior
- **THEN** the following reference values apply:

| Section       | < md                                     | md – lg                               | ≥ lg (design)                         |
|---------------|------------------------------------------|---------------------------------------|---------------------------------------|
| Header        | Logo + hamburger; menu in full-width drawer with links and both CTAs | same as mobile         | Logo + inline nav left, CTAs right, overlaid on hero |
| Hero          | Image on top (aspect 4/5, max-h 70vh), copy below | Same stacked                  | 2 columns: copy ~58%, image ~42% full-height bleeding to right edge |
| About         | Stacked: heading/CTA, then text, stats  | Stacked                               | 2 columns (heading left, text + stats right) |
| Stats         | 3 columns, compact                      | 3 columns with vertical dividers      | same                                  |
| Practice cards| 1 column                                | 2 columns                             | 3 columns                             |
| Process steps | 1 column                                | 2 columns                             | 4 columns                             |
| Testimonials  | 1 column                                | 2 columns (3rd spans or wraps)        | 3 columns                             |
| FAQ           | Stacked                                 | Stacked                               | 2 columns (intro 5/12, accordion 7/12) |
| Contact       | Stacked: copy, then form                | Stacked                               | 2 columns (copy left, form ~42% right) |
| Footer        | Brand, then 3 link columns in 2-col grid | 4 columns                            | 4 columns; bottom bar split left/right |

#### Scenario: Mobile navigation
- **WHEN** the viewport is below `lg` and the user taps the menu button
- **THEN** a drawer opens with all nav links and CTAs, `aria-expanded` toggles, and `Escape` or a link click closes it

#### Scenario: Touch targets
- **WHEN** rendered on touch devices
- **THEN** every interactive element has a hit area of at least 44×44px

### Requirement: Components

The system SHALL provide these Astro components under `src/components/` (atomic
organization: `ui/` atoms, `sections/` organisms):

#### Scenario: Components reference
- **WHEN** implementing components
- **THEN** the following reference values apply:

- **Button** — variants:
  - `primary`: `bg-brand-800 text-white`, hover `bg-brand-700`, `rounded-md`, `px-6 py-3.5`, sans 500 15px.
  - `outline-light`: transparent, 1px white border, white text (secondary CTAs over dark or photo backgrounds).
  - `light`: white background, `text-brand-800`, leading phone icon (header phone).
  - `link`: no background, `text-brand-800` 500, trailing arrow `→` that shifts 4px on hover.
  - `block`: full-width primary (form submit).
- **Eyebrow** — uppercase tracked label; `text-brand-800` on light, `text-gold-500` on dark.
- **SectionHeading** — eyebrow + serif H2 (+ optional lead), alignment `left | center`.
- **IconTile** — 48px square, 1px `brand-800` border, `rounded-md`, 22px stroke icon (1.5px) in `brand-800`.
- **PracticeCard** — white, 1px `line-200` border, `rounded-lg`, `p-8`; IconTile top-left, `↗` arrow top-right, serif H3 in `brand-800`, body in `ink-600`. Hover: border `brand-800/40`, lifts `-translate-y-1`, arrow moves `+2px,-2px`.
- **Stat** — serif number in `brand-800` + caption; separated by 1px `line-200` vertical dividers.
- **ProcessStep** — top 1px `on-dark-line` border, number (serif, `gold-500`), serif H3 white, body `on-dark-muted`.
- **TestimonialCard** — `bg-cream-100`, `rounded-lg`, `p-10`; 5 outline stars in `gold-500`, italic serif quote, name (sans 600 `ink-900`), case type caption (`ink-600`).
- **Accordion (FAQ)** — native `<details>/<summary>`; serif question 1.125rem 500, `+` icon that rotates to `−` when open; answer `ink-600`; 1px `line-200` bottom divider. First item open by default.
- **ContactItem** — 20px stroke icon in `brand-800` + text `ink-900`.
- **FormField** — label (sans 500 14px `ink-900`), input `h-12`, 1px `line-200` border, `rounded-md`, white bg, placeholder `ink-400`, focus ring `brand-800`. Select shows chevron; textarea min-h 128px.
- **Logo** — scale-of-justice icon + "Serrano Abogados" in serif 500; `brand-800` on light, white on dark.
- **ImagePlaceholder** — neutral placeholder block (see Requirement: Image placeholders).

Icons SHALL be inline SVG (Lucide-style, stroke 1.5): users, shield, gavel, handshake/heart, file-text, message-circle, phone, mail, map-pin, clock, arrow-right, arrow-up-right, plus, minus, star, menu, x, chevron-down, scale.

#### Scenario: Components are presentational
- **WHEN** a section renders a component
- **THEN** the component receives its copy via props, and page copy lives in `src/data/content.ts`

### Requirement: Image placeholders

The system SHALL render image placeholders instead of real photos. The hero portrait
placeholder SHALL be an element with a subtle tonal gradient (`from-[#cfc6b4] to-[#a89f8c]`),
a centered person/photo icon and an accessible label ("Retrato del abogado — imagen
pendiente"). Placeholders SHALL keep the final aspect ratio so swapping in an `<Image>`
causes no layout change.

#### Scenario: Placeholder replaced later
- **WHEN** the real photo is added
- **THEN** only the placeholder component is swapped for Astro `<Image>` with the same dimensions

### Requirement: Motion

The system SHALL implement these animations with CSS (and a tiny vanilla
IntersectionObserver script for reveals); no animation library is required.

#### Scenario: Motion reference
- **WHEN** implementing motion
- **THEN** the following reference values apply:

1. **Marquee** — the practice-areas band scrolls infinitely right-to-left at ~40s per loop, items separated by a gold `✱`; content duplicated for a seamless loop; pauses on hover.
2. **Reveal on scroll** — elements with `data-reveal` fade in and translate from `16px` to `0` over 700ms `cubic-bezier(.2,.7,.2,1)`; siblings staggered by 80ms via `--delay`.
3. **Hero entrance** — eyebrow, heading, lead and CTAs reveal in sequence on load; the image placeholder fades/scales from 1.04 to 1.
4. **Stat counters** — numbers count up from 0 to their value (15+, 600+, 92%) when first visible.
5. **Hover micro-interactions** — buttons (color 200ms), link arrow shift, card lift, accordion icon rotation (200ms).
6. **Accordion** — answer content animates height/opacity when opening (`interpolate-size` / grid-rows technique, with graceful fallback).

#### Scenario: Reduced motion
- **WHEN** the user has `prefers-reduced-motion: reduce`
- **THEN** the marquee stops, reveals render immediately visible, and counters show their final value

#### Scenario: No-JS fallback
- **WHEN** JavaScript is disabled
- **THEN** all content is visible (reveal hidden states only apply when `html.js` is present)

### Requirement: Static rendering

The site SHALL build to static HTML (`output: 'static'`), with JavaScript limited to the
mobile menu, sticky header state, scroll reveals, counters and legal dialogs (inline `<script>`
processed by Astro). The contact form SHALL be markup-only (no backend) with native validation
(`required`).

#### Scenario: Build output
- **WHEN** `npm run build` runs
- **THEN** `dist/index.html` is generated with no client framework runtime

### Requirement: Page structure and copy

The page SHALL render the sections below in order, using the exact Spanish copy shown
(copy is content, not code, and MUST NOT be translated or paraphrased). The document
language is `es`.

#### Scenario: Header
- **WHEN** the Header section renders
- **THEN** it displays exactly this copy:
  - Logo: "Serrano Abogados"
  - Nav: "Inicio", "Especialidades", "Sobre mí", "Proceso", "Contacto"
  - CTAs: "Contáctanos" (primary: `brand-800` background, white text), "+56 9 1234 5678" (light, phone icon)

#### Scenario: Hero (`bg-cream-100`)
- **WHEN** the Hero section renders
- **THEN** it displays exactly this copy:
  - Eyebrow: "Abogado independiente · Familia, penal y civil"
  - H1: "Tu versión de los hechos merece una defensa sólida"
  - Lead: "Representación legal personal y directa en asuntos de familia, defensa penal y demandas civiles. Un solo abogado, comprometido con tu caso desde la primera reunión hasta la sentencia final."
  - CTAs: "Agenda una consulta gratuita" (primary → #contacto), "Ver especialidades" (link → #areas)

#### Scenario: Marquee (`bg-brand-800`, white serif, gold stars)
- **WHEN** the Marquee section renders
- **THEN** it displays exactly this copy:
  - Items: "Derecho de familia", "Defensa penal", "Litigios civiles", "Divorcio y custodia", "Daños y perjuicios", "Disputas contractuales"

#### Scenario: About (`id="sobre-mi"`, `bg-white`)
- **WHEN** the About section renders
- **THEN** it displays exactly this copy:
  - Eyebrow: "Sobre el estudio"
  - H2: "Asesoría legal clara, sin sorpresas ocultas"
  - CTA: "Conoce al abogado"
  - P1: "Soy abogado independiente con más de quince años de experiencia en tribunales. Llevo cada caso personalmente: sin asociados junior, sin derivaciones, sin sorpresas. Cuando llamas, hablas con el abogado que realmente estará a tu lado en la audiencia."
  - P2: "Mi práctica se centra en derecho de familia, defensa penal y demandas civiles. Explico cada paso en lenguaje claro, te doy probabilidades honestas y fijo honorarios transparentes desde el inicio, para que tomes decisiones con confianza en un momento difícil."
  - Stats: "15+" "Años de ejercicio" · "600+" "Casos atendidos" · "92%" "Resultados favorables"

#### Scenario: Practice areas (`id="areas"`, `bg-paper-50`, centered heading)
- **WHEN** the Practice areas section renders
- **THEN** it displays exactly this copy:
  - Eyebrow: "Somos especialistas en"
  - H2: "Orientación especializada cuando lo que está en juego es personal"
  - Lead: "Tres áreas principales, un abogado que las conoce a fondo."
  - Cards:
    1. users — "Derecho de familia" — "Divorcio, cuidado personal y régimen de visitas, pensión de alimentos, adopción y medidas de protección por violencia intrafamiliar."
    2. shield — "Defensa penal" — "Delitos y faltas, conducción en estado de ebriedad, drogas, lesiones y robo. Defensa desde la detención hasta el juicio y la apelación."
    3. gavel — "Demandas civiles" — "Incumplimiento de contrato, cobro de deudas, conflictos de propiedad, indemnización por daños y disputas entre arrendador y arrendatario."
    4. handshake — "Mediación y acuerdos" — "Acuerdos negociados, capitulaciones matrimoniales y convenios de separación que evitan juicios costosos."
    5. file-text — "Representación judicial" — "Representación completa en audiencias y juicios, además de redacción de documentos y presentaciones ante tribunales."
    6. message-circle — "Asesoría legal" — "Orientación clara sobre tus opciones antes de actuar. Conoce tus derechos y tus posibilidades reales."

#### Scenario: Process (`id="proceso"`, `bg-brand-800`)
- **WHEN** the Process section renders
- **THEN** it displays exactly this copy:
  - Eyebrow (gold): "Cómo trabajamos"
  - H2 (white): "Un camino claro desde la primera llamada hasta la resolución"
  - Side text: "Siempre sabrás qué viene después, cuánto cuesta y qué esperar. Sin jerga legal ni semanas de espera por una respuesta."
  - Steps:
  - "01" "Consulta gratuita" — "Revisamos tu situación en una llamada o reunión de 30 minutos y te decimos con honestidad si tienes un caso."
  - "02" "Estrategia y honorarios" — "Recibes un plan escrito, un cronograma y un honorario fijo o claramente estimado antes de iniciar cualquier trabajo."
  - "03" "Preparación" — "Reúno pruebas, presento escritos y negocio con la contraparte, manteniéndote informado cada semana."
  - "04" "Audiencia y resolución" — "Te represento en tribunales o mediación y sigo luchando hasta que el asunto quede cerrado."

#### Scenario: Testimonials (`id="testimonios"`, `bg-white`)
- **WHEN** the Testimonials section renders
- **THEN** it displays exactly this copy:
  - Eyebrow: "Historias de clientes"
  - H2: "Personas que recuperaron el control de su vida"
  - Cards:
  - "“Consiguió el cuidado personal de mis hijos en un caso que todos daban por perdido. Me explicó cada paso y nunca me hizo sentir como un número.”" — "Mariana R." — "Familia · Custodia"
  - "“Los cargos se retiraron antes del juicio. Encontró irregularidades en la detención que otros dos abogados pasaron por alto. Le debo mi carrera.”" — "David L." — "Defensa penal"
  - "“Un contratista se llevó mi anticipo y desapareció. En cuatro meses tenía sentencia y mi dinero de vuelta. Honorarios claros, sin sorpresas.”" — "Elena & Marcos T." — "Demanda civil · Contrato"

#### Scenario: FAQ (`id="faq"`, `bg-paper-50`)
- **WHEN** the FAQ section renders
- **THEN** it displays exactly this copy:
  - Eyebrow: "Preguntas frecuentes"
  - H2: "Respuestas antes de que preguntes"
  - Intro: "¿Aún tienes dudas? La primera consulta es gratuita y sin compromiso."
  - Items:
  - "¿Cuánto cuesta la primera consulta?" — "Nada. Los primeros 30 minutos son gratuitos, de forma presencial, por teléfono o videollamada." (open by default)
  - "¿Cómo se cobran los servicios?" — answer not shown in the mock; placeholder: "Trabajo con honorarios fijos o claramente estimados, acordados por escrito antes de iniciar cualquier gestión."
  - "¿Atiendes casos urgentes como detenciones o medidas de protección?" — placeholder: "Sí. Las urgencias se atienden 24/7 y respondo el mismo día."
  - "¿Llevarás mi caso personalmente?" — placeholder: "Sí. Llevo cada caso personalmente, desde la primera reunión hasta la sentencia final."

#### Scenario: Contact (`id="contacto"`, `bg-cream-100`)
- **WHEN** the Contact section renders
- **THEN** it displays exactly this copy:
  - Eyebrow: "Consulta gratuita"
  - H2: "Cuéntame qué pasó. Yo te diré qué podemos hacer."
  - Lead: "Respuesta el mismo día para asuntos urgentes. Tu información es confidencial y está protegida por el secreto profesional."
  - Items: phone "+56 9 1234 5678" · mail "contacto@serranoabogados.cl" · map-pin "Av. Tribunales 412, Oficina 210" · clock "Lunes a viernes, 9:00 a 18:00 · Urgencias 24/7"
  - Form panel title: "Solicita tu consulta gratuita"
  - Fields: "Nombre completo" (placeholder "Juan Pérez"), "Teléfono o correo" ("+56 9 0000 0000"), "Tipo de asunto" (select, placeholder "Familia · Penal · Demanda civil"; options Familia, Penal, Demanda civil), "Describe brevemente tu situación" (textarea, "¿Qué pasó y cuándo?")
  - Submit: "Enviar solicitud"
  - Disclaimer: "El envío de este formulario no constituye una relación abogado-cliente."

#### Scenario: Footer (`bg-brand-900`)
- **WHEN** the Footer section renders
- **THEN** it displays exactly this copy:
  - Brand: logo + "Abogado independiente en derecho de familia, defensa penal y litigios civiles. Habilitado para ejercer ante todos los tribunales del país."
  - "Especialidades": "Derecho de familia", "Defensa penal", "Demandas civiles", "Mediación"
  - "Estudio": "Sobre mí", "Proceso", "Testimonios", "Contacto"
  - "Legal": "Política de privacidad", "Términos de uso", "Aviso legal"
  - Bottom bar: "© 2026 Serrano Abogados. Todos los derechos reservados." · "Publicidad de servicios legales. Resultados anteriores no garantizan un resultado similar."

### Requirement: Accessibility and SEO

The page SHALL use semantic landmarks (`header`, `nav`, `main`, `section` with
`aria-labelledby`, `footer`), one `h1`, visible focus styles (`focus-visible:ring-2
ring-brand-800 ring-offset-2`), labeled form controls, a skip link, and a meta title and
description in Spanish.

#### Scenario: Keyboard navigation
- **WHEN** a keyboard user tabs through the page
- **THEN** every interactive element shows a visible focus indicator in logical order

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

### Requirement: Creator credit

The footer SHALL always show a credit naming kreadium.cl as the site's creator, linked to
`https://kreadium.cl`. The credit is permanent: redesigns, copy updates and new sections SHALL
keep it in the footer. It is shown in addition to the copyright and the disclaimer, never in
place of either.

#### Scenario: Credit copy and link
- **WHEN** the footer renders
- **THEN** its bottom bar shows "Sitio creado por kreadium.cl", and "kreadium.cl" is a link to `https://kreadium.cl`

#### Scenario: Visible on every viewport
- **WHEN** the page is viewed at any width from 320px upward
- **THEN** the credit is visible in the footer without horizontal overflow

#### Scenario: Link stays on the client's site
- **WHEN** a visitor activates the kreadium.cl link
- **THEN** kreadium.cl opens in a new tab, the link has `rel="noopener"`, and the client's site stays open

#### Scenario: Accessible link
- **WHEN** a keyboard or touch user reaches the credit link
- **THEN** it shows the visible focus indicator, has a hit area of at least 44×44px, and its text meets WCAG AA contrast on `brand-900`

#### Scenario: Credit survives later changes
- **WHEN** any later change modifies the footer or its copy
- **THEN** the creator credit is still present with the same copy and link, unless a change explicitly modifies this requirement

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
