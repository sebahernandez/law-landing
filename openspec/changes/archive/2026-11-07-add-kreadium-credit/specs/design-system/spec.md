# Spec Delta

## ADDED Requirements

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
