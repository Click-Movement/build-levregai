# Handoff: LevReg.AI Website Redesign

## Overview
A full single-page marketing site redesign for **LevReg.AI** — a firm that installs an "AI workforce" inside operating businesses (founder: Nate Kennedy). The design is an **editorial-brutalist** layout: hairline rules, mono labels, a warm off-white background, a single cyan accent, oversized Inter display type, and an inverted (near-black) feature section. It covers nav, hero, marquee, story, services/method, process, embedded-specialist feature, proof/case studies, manifesto, FAQ, final CTA, and footer.

## About the Design Files
The files in this bundle are **design references created in HTML/CSS** — a working prototype showing the intended look, content, and behavior. They are **not** meant to be dropped into production verbatim.

Your task: **recreate this design inside LevReg.AI's existing website codebase**, using that codebase's established framework and conventions (React/Next, Astro, WordPress theme, plain HTML, etc.). If the repo has a component system, build these sections as components there. If the repo is plain static HTML/CSS, the files here can be adapted much more directly. Either way, treat `styles.css` as the source of truth for tokens, type scale, and spacing, and port it into the project's styling approach (CSS modules, Tailwind theme, SCSS, etc.).

## Fidelity
**High-fidelity.** Colors, typography, spacing, and layout are final and intentional. Reproduce them precisely. The only deliberately-unfinished spots are clearly-marked placeholders (see *Assets* and *Placeholders* below) that need real content.

## Files in this bundle
- **`index.html`** — Production-ready reference markup. Tweak/exploration scaffolding removed; the chosen design settings are baked into the `<body>` data attributes. **Start here.**
- **`styles.css`** — All styles and design tokens. The single source of truth. (Note: it also contains `data-palette` / `data-typepair` / `data-density` *variant* blocks used during exploration — see *Locked Settings*; you only need the active variant.)
- **`reference-prototype.html`** — The original interactive prototype, including the in-page "Tweaks" panel (React/Babel) used to explore palette/type/density variants. **For reference only — do not ship the Tweaks panel or its React/Babel `<script>` tags.**
- **`assets/logo-black-blue.png`** — Primary logo (dark wordmark, blue mark) for light backgrounds (nav, footer).
- **`assets/logo-white-blue.png`** — Reversed logo for dark backgrounds (e.g. the specialist feature section, if needed).

## Locked Settings (the final, chosen design)
The prototype exposed variants. The shipped design uses exactly these — already set on `<body>` in `index.html`:
- `data-palette="cyan-warm"` → warm off-white background (`#F6F2EB`), warm panel (`#EFE9DC`), cyan accent (`#0EA5E9`).
- `data-typepair="default"` → **Inter** for display + body, **JetBrains Mono** for labels. (Ignore the `editorial`/`brutalist` type variants.)
- `data-density="regular"` → standard section padding.
- `data-hero="split"` → two-column hero (headline left, stat rail right).

You can drop the unused `data-*` variant CSS blocks when porting if you want a leaner stylesheet. Keep the `cyan-warm` palette values.

---

## Design Tokens

### Colors
| Token | Value | Use |
|---|---|---|
| `--bg` | `#F6F2EB` | Page background (warm off-white — from the cyan-warm palette) |
| `--bg-deep` | `#FFFFFF` | Cards / modals |
| `--panel` | `#EFE9DC` | Surfaces / muted fills (warm) |
| `--fg` | `#0D1117` | Primary text / near-black ink |
| `--muted` | `#4B5563` | Secondary text |
| `--line` | `#E5E7EB` | Light borders |
| `--line-strong` | `#0D1117` | Hairlines, dividers, strong rules |
| `--accent` | `#0EA5E9` | Brand cyan — primary accent, CTAs, `<em>` highlights |
| `--accent-deep` | `#0284C7` | AA-safe link blue / hover |
| `--accent-2` | `#14B870` | Supporting green accent |
| `--accent-ink` | `#FFFFFF` | Text on accent fills |
| `--ok` | `#16A34A` | Success/status |

> Base (default) palette uses `--bg:#F9FAFB` and `--panel:#F3F4F6`; the **cyan-warm** palette overrides these to the warm values above. Ship the warm values.

### Typography
- **Display / Body:** `Inter` — weights 400, 500, 600, 700, 800. (`font-feature-settings: "ss01","cv11"`.)
- **Mono / labels:** `JetBrains Mono` — weights 400, 500, 600. Used for eyebrows, section numbers (`// 01 — …`), meta bars, stat labels, prices — uppercase, letter-spacing ~0.06–0.08em, ~11px.
- Google Fonts import (already in `<head>`): `Inter`, `Instrument Serif` (used only by the unused editorial variant — can be dropped), `JetBrains Mono`.
- Hero headline (`.headline`) is a large clamp-scaled Inter weight ~700/800; accented words wrapped in `<em>` render in `--accent` (cyan), upright (not italic) under the default type pair.

### Spacing / Layout
- `--gutter: clamp(20px, 4vw, 64px)` — horizontal page gutter.
- `--section-pad: clamp(72px, 9vw, 144px)` — vertical section rhythm (regular density).
- `--maxw: 1440px` — content max width (`.wrap` centers within this).
- Section heads use a two-column `.s-head` (label+title left, descriptive paragraph right).

### Other
- Borders: hairline `1px solid var(--line)` for light dividers; `1px solid var(--line-strong)` for emphatic rules.
- Buttons (`.btn`): rectangular, mono-ish uppercase labels; `.btn-primary` fills with `--accent`; `.btn-lg` larger padding. Minimal/no border radius (brutalist).
- Responsive breakpoints in `styles.css`: notably `max-width: 1024px` (nav collapses to burger + mobile drawer) and `max-width: 640px` (hero grid, hero-meta, logos collapse to single/2-col).

---

## Sections / Views (in document order)

> All copy below is the **exact text** in the design. Reproduce verbatim unless the client revises it.

1. **Nav (`header.nav`)** — Left: logo (`logo-black-blue.png`). Center: links *Method, Specialists, Proof, Approach, FAQ* (anchor to `#method`, `#operators`, `#proof`, `#manifesto`, `#faq`). Right: two CTAs — `Book an Audit` (ghost) and `FREE NEWSLETTER ↗` (primary). Below 1024px: links/CTAs hide, a 2-bar burger (`#nav-burger`) toggles `#mobile-menu` drawer (mobile CTAs: `BOOK A DISCOVERY CALL`, `FREE NEWSLETTER ↗`). Toggle logic is the small inline script at the bottom of `index.html`.

2. **Hero (`section.hero`, `data-screen-label="01 Hero"`)** — Eyebrow: dot + `CURRENTLY ACCEPTING NEW CLIENTS`. Two-column grid: **left** = H1 `Leverage AI properly and watch your profits soar.` ("Leverage" and "profits" in `<em>` → cyan), subhead paragraph, two CTAs (`BOOK A DISCOVERY CALL →` primary, `See the Method` ghost). **Right** = `.hero-rail` with three stats (Operating record `21 YRS`, Daily audience `M+`, Built first/sold second `→`). Below: **hero meta bar** — a 3-column grid (`1fr auto 1fr auto 1fr`) with hairline separators; the three text spans are **center-aligned** within their columns (`.hero-meta > span:not(.sep){ text-align:center }`): `Est. 21 yrs operating · founded by Nate Kennedy` | `Coverage US · CA · UK · AU` | `STATUS ● CURRENTLY ONBOARDING CLIENTS`.

3. **Marquee (`section.marquee`)** — Horizontally scrolling track of principles, each followed by a dot: *Install, don't experiment. / Fractional AI Specialist. / Built in our businesses first. / Outcomes over output. / Own your stack.* (duplicated for seamless loop via CSS animation on `.marquee-track`).

4. **Story (`02 Story`)** — `.s-head` (label `// 01 — Why us`, title `21 years of operating before helping you Leverage AI.`, right paragraph). Then `.story-grid`: left = pull-quote + byline (`Nate Kennedy · Founder, LevReg.AI`); right = `.bio-grid` 2×2 of stat cells (Operating 21yrs, Virtual CMO 10yrs, Media co. M+, AI installs In-house first).

5. **Method / Services (`#method`, `03 Method`)** — `.s-head` (`// 02 — Method`, `Three doors. One install path.`). `.services` = 3 cards (`.svc`, middle one `.svc featured`): **A · 01 / Audit** (`AI Audit`, From $1,500, 14 days), **B · 02 / Build** (`Development & Consulting`, Custom pricing, 60–90 days), **C · 03 / Operate** (`Fractional AI Specialist`, From $2,500/mo, month-to-month). Each card: number label, H3 (accented word), paragraph, bulleted `<ul>`, and a `.svc-foot` row (term + price).

6. **Process (`04 Process`)** — `.s-head` (`// 03 — Process`, `How the install actually works.`). `.process` = 4 steps with big numerals (`01`–`04`, the second digit in `<em>`/cyan): Audit (Wk 1–2), Install (Wk 3–10), Train (Wk 8–12), Operate (Ongoing).

7. **Specialist feature (`#operators`, `05 Specialist`)** — **Inverted / dark section** (`.operator`). Left: label `// 04 — Embedded specialists`, H2 `A specialist on your team. Not a Slack channel and a prayer.`, paragraph, two CTAs (primary `Embed a Specialist →` on `--accent`; ghost `How they're trained` with white text/translucent border). Right: `.op-id-card` — a styled "specialist ID card" with a seal (`AI / Specialist / Lv. III`), rows (Specialist `M. Alvarez`, Cert ID `LV-RG-0247`, Specialty, Embedded, Cadence) and a small bar-chart (`.op-id-bars`, last bar highlighted `#0EA5E9`). Use `logo-white-blue.png` here if a logo is needed.

8. **Proof (`#proof`, `06 Proof`)** — `.s-head` (`// 05 — In production`, `Installed inside companies that ship.`). `.logos` = 6 text "logo" cells (Education Co., Media Group, DTC Brand, Health Network, B2B SaaS, Pro Services) — **placeholders for real client logos**. `.cases` = 3 case cards, each with an image placeholder (`.img` with `.tag` + `.ph` "// install screenshot"), H4 result headline, and a `.meta` row (metric + context). **Placeholder images need real screenshots.**

9. **Manifesto (`#manifesto`, `07 Manifesto`)** — `.manifesto-grid`: left label `// 06 — Manifesto`, right = two paragraphs of brand POV.

10. **FAQ (`#faq`, `08 FAQ`)** — `.s-head` (`// 07 — Questions`, `You probably want to know.`). `.faq` = native `<details>/<summary>` accordion, 5 items (first `open`), each summary has a `+` `.icon`. Questions/answers are final copy (see `index.html`).

11. **Final CTA (`#contact`, `09 CTA`)** — `.cta-final` band: label `// 08 — Next step`, H2 `Stop researching. Start leveraging.`, row of CTAs (`BOOK A DISCOVERY CALL →`, `MESSAGE NATE DIRECTLY` → `mailto:nate@levreg.ai`) + availability tag `CURRENTLY ACCEPTING NEW AUDITS`.

12. **Footer (`footer`)** — 4-column `.foot-grid`: brand blurb + logo, then **Method / Company / Talk** link columns (contact `team@levregai.com`, `nate@levreg.ai`). `.foot-bottom`: `© 2026 LevReg.AI · All rights reserved` and `v 2.0 · Built in production`.

---

## Interactions & Behavior
- **Mobile nav drawer:** burger toggles `.open` on `#mobile-menu`, manages `aria-expanded`/`aria-hidden`, closes on link tap and on resize > 1024px. (Inline script in `index.html`.)
- **Marquee:** continuous CSS keyframe scroll on `.marquee-track`; the items are duplicated so the loop is seamless. (Consider pausing on `prefers-reduced-motion`.)
- **FAQ:** native `<details>` open/close; first item open by default. `.icon` `+` can rotate/swap to `–` on `[open]` via CSS.
- **Buttons/links:** hover states defined in `styles.css` (accent fills/inversions). Anchor links smooth-scroll to in-page section IDs.
- **No JS framework required** for the production site — the only behavior is the mobile menu and native `<details>`. Everything else is HTML + CSS.

## Things to wire up (currently static placeholders)
- **Real CTAs/links:** `#audit`, `#contact` currently scroll in-page. Hook up to the real booking/discovery-call flow, newsletter signup, and contact form/email.
- **Client logos:** the 6 `.logo-cell` text labels → replace with real client logos (or keep as category labels if NDA).
- **Case-study images:** 3 `.case .img` placeholders (`// install screenshot`) → real screenshots/imagery.
- **Specialist ID card** data is illustrative sample content — confirm whether it stays as an illustrative device or uses real data.
- **Email/handles:** footer shows both `team@levregai.com` and `nate@levreg.ai` — confirm the canonical address.

## Assets
- `assets/logo-black-blue.png` — primary logo, light backgrounds.
- `assets/logo-white-blue.png` — reversed logo, dark backgrounds.
- Fonts via Google Fonts CDN (Inter, JetBrains Mono). Self-host if the project prefers.
- All other "imagery" in the design is intentional placeholder (see above) — no real photography is bundled.

## How to use this with Claude Code
1. Commit this folder into the LevReg.AI website repo (e.g. `/design/levregai-redesign/`).
2. Ask Claude Code to: *"Recreate the design in `design/levregai-redesign/index.html` + `styles.css` using this repo's existing framework and conventions. Port the design tokens from `styles.css`, build each section as a component, and keep all copy verbatim. Use `index.html` (not `reference-prototype.html`) as the source — ignore the Tweaks panel."*
3. Point it at the *Things to wire up* list to connect real links, logos, and images.
