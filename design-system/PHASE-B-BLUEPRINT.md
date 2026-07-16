# Phase B Redesign Blueprint — miranmi.com

Status: APPROVED TO BUILD (owner go-ahead 2026-07; COO deferral lifted, only COSA feasibility bid live).
Supersedes any prior design-system doc. Companion: `MASTER.md` (ui-ux-pro-max output; its
"Waitlist/Coming Soon" pattern slot is DISCARDED — use the section map below instead).

## Direction
Light, conservative, document-first professional services. The buyer is a contracting
officer or prime who wants facts in five seconds. Kill the dark-SaaS register: no
glassmorphism, no icon-card grids, no particles, no mouse-follow glow, no em dashes,
no AI-purple anything.

## Tokens
- Background: near-white `#F8FAFC` body, white `#FFFFFF` panels; teal-tinted `#F0FDFA`
  reserved for alternate section bands only
- Ink: slate `#0F172A` headings, `#334155` body, `#64748B` muted (all ≥4.5:1 on bg)
- Brand accent: navy `#1E3A5F` (headers, rules, links); keep existing emerald ONLY as a
  small heritage accent (logo, eyebrow dots) so the brand still reads as Miranmi
- CTA: single high-contrast blue `#0369A1`, hover `#075985`; one primary CTA per page
- Typography (served webfonts, replacing Apple-only Avenir Next Condensed):
  - Display: Source Serif 4 (600) for h1/h2 — editorial authority (McKinsey pattern)
  - Body/UI: Source Sans 3 (400/600); Lexend acceptable alternate if serif is rejected
  - Numbers: `font-variant-numeric: tabular-nums` on all stats
- Rules/dividers: 1px `#E2E8F0` hairlines; radius 8px max; shadows subtle or none

## Section map (21st.dev survey, 2026-07 — all free community blocks, plain-CSS portable)
| Site section | Pattern | Source |
|---|---|---|
| Hero (all pages) | Type-led, centered, trust line "SBA-Certified SDVOSB · San Antonio, TX", one CTA | shadcnblocks hero115; hero45's hairline-divider feature row under home hero |
| Services/pillars (home, services) | Two-column checkmark list, NO cards: bold term + one line | twblocks feature-with-advantages |
| Proof strip (home, capabilities) | Left heading + arrow-bulleted figures list (reads like report key findings) | Tailark stats (@meschacirung) |
| Process (home, services) | Numbered 01/02/03 left rail with vertical connector; ship static (IntersectionObserver highlight optional) | Systaliko process-timeline (discard its dark-indigo skin) |
| Case study / rep. experience (government, capabilities) | Asymmetric text+image rows, long-form prose | shadcnblocks about-3 / casestudy-5 |
| Quotes (once consents signed) | Flat borderless pull-quotes, 2 static side-by-side, no carousel | twblocks testimonials |
| CTA (all pages) | Single muted rounded panel, left heading, secondary+primary buttons | shadcnblocks cta10 |
| Nav | Logo left, text links, button right, mobile sheet | shadcnblocks navbar1 |
| Footer | Brand+desc+social / 3 link columns / hairline / copyright+legal bar (current structure survives retheme) | shadcnblocks footer-7 |

## Keep / guardrails
- Intro logo animation STAYS (owner signature): trim to ≤2.5s, visible skip, play once
  per session (sessionStorage), already disabled under prefers-reduced-motion. Dark
  cinematic intro opening into the light site is intentional.
- Bilingual `data-i` span system, skip links, focus states, form labels, Formspree
  (meerrjly), all Phase A content and GC redlines (no "past performance", no named
  parties without consent, founder-attributed metrics until first closed contract).
- CTO condition: retheme via CSS tokens first (verify visual diff), THEN structural
  card→editorial edits one page at a time. Codes/identifiers stay centralized on
  /capabilities/ only.
- Verify every page at 375 / 768 / 1024 / 1440, both languages, before ship.
- Post-build: fsr-frontend + fsr-mobile-i18n + fsr-accessibility review pass.

## Execution order
1. styles.css: token block (colors/fonts), font `<link>` swap on all 9 pages
2. Light retheme of existing classes (nav, footer, cards-as-is, forms, legal pages)
3. Structural pass per page: home → capabilities → government → services → about → contact → legal
4. Intro trim + session-once
5. Review agents, fix, ship
