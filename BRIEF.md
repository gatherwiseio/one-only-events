# One & Only Events — project brief

## Status
- [x] Phase 1: Repo, local folder, Vercel project
- [x] Phase 2: Brief (scope, inspiration, brand)
- [x] Phase 3: Homepage direction chosen
- [ ] Phase 4: All scoped pages live

## Project
- **Planner:** Sunny Cho
- **Website name:** One & Only Events
- **Slug:** one-only-events
- **Repo:** https://github.com/gatherwiseio/one-only-events
- **Vercel project:** one-only-events (gatherwiseio team)
- **Live URL:** https://one-only-events.vercel.app
- **Custom domain:** none yet
- **Current website:** https://www.oneandonly.events/ (Wix). Content pulled into `content/current-site.md`.

## Scope
Building now: **Coming soon page** and **Homepage**. Other pages are scoped but built later, one at a time.

### Coming soon (`/coming-soon`, building now)
- A separate page at **/coming-soon**, not the homepage. The index (`/`) is the real homepage being built now.
- Message along the lines of "Something beautiful is coming", with the date **November 2026** (when Sunny's current Wix site expires).
- To be shown to Sunny later; how it's used on her domain is decided then.

### Home (building now)
Helps prospective clients understand who Sunny is, what she does, what she offers, and why to work with her.
- Hero
- About Sunny / One & Only Events
- Recent weddings
- Service packages
- How it works / planning process
- Testimonials: 2026 five-star reviews from The Knot and WeddingWire, in `content/reviews.md`
- Call to action

### Services (later)
- More detail on each package, with what's included taken directly from the 2026 packages PDF: https://www.oneandonly.events/_files/ugd/934ca0_ace479df4bca4ef0a323dac03a4d6427.pdf (copied into `content/current-site.md`)

### Portfolio / Gallery (later)
- Up to 30 recent photos in a Pinterest-style (masonry) layout
- Click any photo to enlarge it and browse the gallery in a modal

### About (later)
- Sunny, her background, and how she started One & Only Events
- Certifications or awards, if any

### Contact (later)
- Inquiry form
- Email address and/or phone number

**Out of scope / later:**
- Services, Portfolio, About and Contact pages (scoped above, built after the homepage)

## Inspiration
### https://www.dearblancevents.com
- **Take:** the overall look and feel (Sunny wants something similar)
- **Observed:**
  - Pixieset site. Full-screen photo hero slideshow with a soft white wash, the name "DEAR BLANC" top left and a spaced-out uppercase nav (Services · Our Process · Real Weddings · Contact Us) in white over the photo.
  - Type: Montserrat for all headings, Light 300, uppercase, wide tracking (~0.1em; h1 ~33px, h2 ~23px, h3 ~20px); nav and buttons Montserrat 500, 12px, ~0.22em tracking. Body text in Lora serif, 16px with a very airy 32px line height.
  - Color: warm cream/ivory grounds (#FFFEF9, #F6F4EB), soft charcoal text (#373737, #3B3629), and one muted olive-gold accent (#A8986D) used as square-cornered filled buttons ("LEARN MORE", "SEE MORE", "LET'S CHAT").
  - Layout: calm and airy, lots of space. Services is a centered text column flanked by two portrait photos. Real Weddings is a scattered, staggered photo collage of different sizes. "Meet your planner" pairs text with two offset photos (one black and white). Ends with a full-width photo band and "READY TO BEGIN? / LET'S CHAT".
  - Photography: bright, natural, Hawaiʻi oceanfront and garden settings, colorful florals, mixed with black-and-white candids.

## Brand
- **Logo:** "ONE & ONLY" serif wordmark in green #3D6B1F (supplied by Stephanie on 2026-11-05; original PNG in `public/images/brand/wordmark-original.png`). Rebuilt as a vector: `public/images/brand/wordmark.svg` (7.5 KB, single path, even-odd fill).
  - Letters: outlines from **Forum** (SIL OFL), each fitted to the matching letter's box in the original (E stretched 13% wider, L 8%, others under 5%).
  - Ampersand: no open font matched, so it's traced from the original with potrace at 6× and checked by overlay.
  - Used as a CSS mask (`.wordmark` in globals.css) so one file serves every color: white on photos, brand green `--color-brand` on cream, `on-panel` in the footer.
  - Also found: a round badge logo (pink rainbow arch, "EST. 2022") in her old gallery, `public/images/brand/logo-original.png`, not used.
  - Favicon: not made yet (the wordmark is too wide for a 16px icon).
- **Colors:** current site: near-black #1E1E1E, dusty blue-grey #95AEBA, white. Not necessarily kept.
- **Fonts:** current site: Cinzel, Poppins. Not necessarily kept.
- **Photos:** 13 portfolio images + hero + 4 portraits of Sunny (Kim Raaf) on the current site; links in `content/current-site.md`. Not downloaded yet.
- **Tone of voice:** warm, joyful, personal, a little playful ("laugh so hard your cheeks ache"); practical and reassuring about logistics
- **Tagline:** Your Day, Your Story, Your Way.
- **Location / service area:** Hawaiʻi, throughout the islands; local, mainland US and international couples
- **Inquiry / contact details:** inquiry form only; Instagram @oneandonlyhawaii. Email: none yet. Phone on The Knot: (808) 304-9751 (confirm before using).
- **Badges (WeddingWire):** Asian-owned, Woman-owned
- **Reviews:** The Knot 61 reviews, WeddingWire 33 (4.9). 2026 five-star reviews in `content/reviews.md`.

## Motion
- **Level:** Subtle, plus a dark gallery section (being tried on branch `experiment/scroll-motion`)
- **Notes:** Liked: smooth scrolling, gallery parallax ("moving pictures"), near-black Recent weddings background. Disliked: pinned scroll assembly, photos popping in, animated section titles.

## Homepage directions
- **Sections compared:** Hero · Recent weddings · Service packages
- **Claude Design canvas:** https://claude.ai/artifact/XmyW1DffVUPNQr2XSzTyiq
- **Round 1:** A Quiet Editorial / B Island Romance / C Modern Gallery. **A chosen** (B and C removed from the canvas).
  - A: cream #FFFEF9 / #F6F4EB, light uppercase Montserrat with wide tracking, Lora body at 2× line height, olive-gold #6E5F36, square buttons.
- **Round 2 feedback on A:**
  - Hero: a background photo slideshow like Dear Blanc's, not big centered text and a button. Still needs a clear "this is a wedding planner" signal and quick ways to jump down to sections.
  - Recent weddings: a mosaic gallery with parallax or scroll animation.
  - Packages: not Dear Blanc's center-text layout. Three clear standard columns so the differences are easy to see, a quick way to see what's included (expand or pop-up), and a link to the Services page.
- **Round 2 variations:**
  - **A1:** full-bleed slideshow, text and controls bottom-left, a jump-link bar along the bottom; three-column masonry where the middle column moves faster on scroll; package cards that expand in place to show every inclusion.
  - **A2:** split hero (cream panel with an "Explore" jump list, slideshow with progress bars on the right); bento grid with scroll reveals and inner zoom, plus a slowly drifting photo ribbon; a side-by-side comparison table of all 16 inclusions.
  - **A3:** framed slideshow inset on cream with a caption, prev/next and "Scroll to explore" bar under it; an overlapping editorial mosaic with three parallax speeds; three columns with a "What's included" pop-up.
- **Round 3:** A4 combines A3's hero (made full-bleed like A, nav over the slideshow), A3's mosaic and A1's package cards. **A4 chosen.**

## Chosen direction
- **Direction:** A4 · Quiet Editorial mix (artboard `A4.dc.html` on https://claude.ai/artifact/XmyW1DffVUPNQr2XSzTyiq)
  - **Hero:** full-bleed crossfading photo slideshow (6s per slide, slow 1.1 → 1 zoom), from the very top of the page with the white nav over it. Small text block bottom-left: label "Hawaiʻi wedding planning & design", title "Your day, your story, your way", link "Meet Sunny". A thin strip along the bottom: photo caption and "n / 5" on the left, previous / pause / next in the middle, "Scroll to explore ↓" on the right. Pauses for reduced motion.
  - **Recent weddings:** centered section heading + intro, then an overlapping 12-column editorial mosaic (7 photos, varied aspect ratios and offsets) with three parallax speeds (±30, ±90, ±160px) driven by CSS scroll-driven animation; 2 columns on phones, no offsets. Link "View the portfolio".
  - **Service packages:** three equal cards on the sand band: name, price, description, "best for" line (italic), 3 highlights with gold dots, "+ See all N inclusions" expands the card in place, "Learn more" link to `/services#<id>`. Pricing note, then primary "Plan with Sunny" and link "Compare all services".
- **Colors:**
  - `surface` #FFFEF9 (cream page background)
  - `surface-alt` #F6F4EB (sand band)
  - `ink` #373737 (text)
  - `ink-muted` #55524A (secondary text)
  - `accent` #6E5F36 (olive-gold: links, labels, prices, dots, buttons; 5.7:1 on sand, 6:1 on cream)
  - `accent-deep` #4F4426 (hover)
  - `accent-soft` #A8986D (decorative only, never text)
  - `line` #E4DFD0 (hairlines inside cards)
  - On photos: white text over a dark gradient
- **Heading font:** Montserrat 300 (titles), 400 (card titles), 500 (labels, nav, buttons), 600 (links). Uppercase, tracked 0.10–0.28em.
- **Body font:** Lora 400 and 400 italic ("best for" lines only)
- **Type scale:** display/hero 26–38px (clamp), section title 26–34px, card title 18px, body 16px at line-height 1.85–2.0, small body 15px, label/nav/button 12px
- **Spacing feel:** very airy. Sections 88–150px vertical padding, content max 1200px, 20–64px side gutters.
- **Buttons / links:**
  - Primary: filled olive-gold, white uppercase 12px Montserrat 500, square corners, 48px tall, one per section at most ("Plan with Sunny")
  - Secondary: 1px olive-gold outline, square corners, 44px tall ("+ See all inclusions")
  - Link: olive-gold Montserrat 600 uppercase, thin underline, no arrow ("View the portfolio", "Learn more"). Hover/focus: a 2px pink line runs along the underline from left to right (`.link-sweep`; gold sweep on pink links; no animation with reduced motion).
- **Image treatment:** full-bleed photography in the hero, square corners everywhere, no frames or shadows, slow zoom in the hero, parallax in the mosaic. Bright natural Hawaiʻi photos mixed with black and white.
- **Motion:** CSS only (crossfade, scroll-driven parallax); everything off under `prefers-reduced-motion`.
- **Hero, revised 2026-11-05:** no caption strip, controls or "Meet Sunny". Label and title sit low on the left, with a thin animated line (scroll cue) running down their left side, exactly their height, lined up with the logo's left edge; it jumps to About. The slideshow has no visible pause button (Stephanie's call); it stops for visitors who prefer reduced motion.
- **Header:** clear with white type over the hero and scrolls away with it; once the hero has fully left the screen it slides back in from the top, pinned, cream (95%, slight blur) with a hairline and black (`ink`) logo and nav.
- **Pink:** `--color-pink` #E85FA3 (Stephanie, 2026-11-05), used for the "More about Sunny" link (hover `--color-pink-deep` #C2387F); the Meet Sunny label is back to gold. Contrast on cream is 3.15:1, under the 4.5:1 guideline for small text; #C2387F would pass at 4.99:1.
- **Meet Sunny copy:** rewritten twice on 2026-11-05 from Sunny's homepage intro and her four "Why Choose Us" points, with no new facts; second pass for smoother flow.
- **Meet Sunny photos:** overlapping mosaic (`.about-mosaic` in globals.css), top-aligned with the text: the portrait as the main tile, the night light-painting shot (cropped close on her face, no parallax) top right, its top fixed level with the top of the "Meet Sunny" capitals and the Wix crop of her styling a table bottom right, with cream borders and the same parallax as Recent weddings. Stacks above the text below 1024px.
- **Primary color:** brand pink `--color-primary` #C2387F (hover #A32B69) for every primary button, with white text at 5:1. Gold stays for links, labels and prices.
- **Label gold:** section label lines and step numbers use `--color-accent-label` #9A844C (2026-11-05, lighter so it reads as gold next to black: 3.3:1 against ink, 3.6:1 on cream). Links, prices and buttons keep the deeper `accent` #6E5F36 for readability.
- **Motion (merged into `main` 2026-11-05):** Lenis smooth scrolling site-wide (pauses while a pop-up or the phone menu is open). Recent weddings stays on sand (`surface-alt`); the dark switch was removed 2026-11-05 at Stephanie's request; reduced motion and no-JS get the dark version. Photos sit in place with gentle parallax: frames drift 15/40/70px on desktop, photos drift 3–7% inside their frames (GSAP ScrollTrigger). No title animations, no pop-in reveals.
- **Service packages layouts (round 2, 2026-11-05):** Claude Design canvas https://claude.ai/artifact/S6r2QMNQ5t1AERfJ2iX69H with four layouts: A Selector (list + one detail panel), B Index rows, C Image cards (name and price on the photo), D Split (photos left, stacked list right). Photos now match her site: Partial = candlelit tablescape, Day of = bridal shoes flat lay; Full Planning = beach embrace (in-love couple, not in the hero). Label: "As much or as little help as you need". Process has no photo now; `weddings/bubble-send-off.jpg` is unused.
- **How it works (was Our planning process), 2026-11-05:** title "How it works", label "Our planning process", no photo. Four stops on one rail that runs from the first circle's center to the last's, never past them: from 1024px, four centered columns with "Step N" above each icon and the title and description below; under 1024px a vertical rail with text beside the icons. Step titles stay within 2 lines (step 3 is "We bring it all together"). Section padding is the smaller `section-sm` token (64–96px). All steps show from the start, upcoming ones muted (`--color-ink-faint` #6F6A5F, 4.9:1). When the timeline reaches 70% of the screen, the pink line travels to each stop, lights it, then waits a reading pace (270 words/min of that step's title + description, about 4.5–5.5s), with 1s of travel between stops; full sequence about 23s. Confetti when step 4 lights (canvas-confetti, brand colors), then the line runs to the end and a Replay link appears at the right. Reduced motion: all stops lit, no confetti, no replay. Step copy rewritten from Sunny's for clarity, 17–19 words each.
- **Service packages, rebuilt 2026-11-05 (C cards, Stephanie's pick):** white cards with a hairline (`border-line`, `bg-card`), no shadows, cream section. Clean 4:3 photo (no text on it), then a gold audience line ("We plan it all" / "Help where you need it" / "You plan, we run the day"), name (500 weight), "Starting at" price, a short description, a full-width pink outline Learn more, and a light-gold underlined "What's included" link that opens the pop-up. Pop-up: Montserrat throughout, X close, friendly audience line, full list, pricing note, filled pink Learn more.
- **Service packages, simplified 2026-11-05:** fewer type styles per card, three levels: name (Montserrat, uppercase), "Starting at" price (gold), then the audience line as a short Lora semibold lead into the muted description. The card's Learn more button is gone; a centered "What's included" link opens the pop-up, which keeps the filled pink Learn more.
- **How it works, 2026-11-05 (later):** title and label centered; step label, icon and title centered, descriptions left-aligned. Steps 2 and 3 are "Build the foundation" and "Bring it all together". Replay always restarts from an empty line (it used to run backward from step 4).
- **Footer, 2026-11-05:** one thin white stripe (`bg-card`, no divider), same width as the header: "© 2026 One & Only Events" on the left, an Instagram icon on the right linking to @oneandonlyhawaii. Nav, review links and the tagline were removed from the footer.
- **Titles:** section, hero and coming-soon titles at 400 weight (were 300); card and step titles at 500 (were 400).
- **Language:** American English everywhere (e.g. "decor", not "décor").
- **Hero overlay:** lightened on 2026-11-05 from 42% top / 70% bottom to 25% top / 45% bottom.
- **Tokens in code:** all in `src/app/globals.css` `@theme`: colors (`surface`, `surface-alt`, `ink`, `ink-muted`, `accent`, `accent-deep`, `accent-soft`, `line`, `on-photo`, `on-photo-muted`, `panel`, `on-panel`, `on-panel-muted`, `accent-on-dark`, `photo-fallback`), fonts (`display` Montserrat, `body` Lora), type (`text-hero`, `text-title`, `text-card-title`, `text-quote`, `text-body`, `text-body-sm`, `text-price`, `text-label`, `text-wordmark`, `text-display-xl`), spacing (`section`, `gutter`, `group`, `tap`, `button`), widths (`max-w-content` 1200, `max-w-wide` 1240, `max-w-copy` 600, `max-w-hero-copy` 560), breakpoint `xs` 380px, motion (`ease-soft`, `animate-hero-zoom`). Layout variables in `:root`: `--hero-h`, parallax distances, photo scrims. Copy and data in `src/content/site.ts`.
  - Gotcha: don't name a spacing token `block` (Tailwind v4 reads `inline-block` as `inline-size: var(--spacing-block)`).

## Assets needed
- **Favicon:** decide on a mark for the browser tab (e.g. the ampersand alone, or the old round badge).
- **Photographer credits** for every photo (only Kim Raaf, for Sunny's portraits, is known).
- **Inquiry destination:** the Contact page isn't built yet, so "Plan with Sunny" / "Start your inquiry" aren't clickable. Decide where inquiries go until then (email, her current form, a new form).
- **Email and phone** for the Contact page (The Knot lists (808) 304-9751; confirm).

## Homepage photos
Downloaded originals stay outside the repo; optimized copies in `public/images/`:
- Hero slideshow: `hero/couple-mokolii-lawn`, `hero/oceanfront-floral-aisle`, `hero/mountain-lawn-ceremony`, `hero/couple-palm-garden`, `hero/mokolii-ceremony-florals` (2026-11-05: replaced the dance-floor kiss, then the reception tent, with a ceremony moment that shows her planning; 1290px wide, so a little soft on large screens; cropped with `.focus-upper` to keep faces in the wide frame)
- About mosaic: `sunny/sunny-portrait`, `sunny/sunny-light-painting-close`, `sunny/sunny-styling-table` (Kim Raaf portraits).  Unused now: `sunny/sunny-at-work`.
- Recent weddings mosaic: `weddings/oceanfront-ceremony-chairs`, `couple-florals-kiss`, `couple-palms-lawn`, `painted-floral-cake`, `archway-ceremony`, `black-white-carry`, `palm-grove-procession`
- Call to action: `weddings/lei-ceremony`.
- **Phones and small screens, 2026-11-05:**
  - **Header and menu:** the menu button is a plain hamburger icon (no border, no "Menu" text). The open menu's top bar has the same padding and button size as the page header, so the logo and button don't move. Its logo is ink black, and the close button is a plain X. The links sit closer to the top, with a divider above About.
  - **Left alignment:** below 768px, section titles and other centered text are left-aligned (headings, Recent weddings intro and link, the CTA, review links). "What's included" stays centered.
  - **How it works:** on phones, the rail stops at step 4's circle. This is done in CSS: the last step paints the section background over the rail below its circle. Replay is centered.
  - **Hero:** the scroll cue beam is pink (`--color-pink`).
  - **Local previews:** the Next.js dev badge is turned off (`devIndicators: false`).
- **Link hover and packages, 2026-11-05 (later):**
  - **Link hover:** the color sweep was disliked and is replaced. On hover or focus, a short soft-edged beam in the link's own color now shoots along the underline once, left to right (`.link-beam`, 0.8s; none with reduced motion). There's no color change.
  - **Package cards:** the audience lines ("We plan it all" and so on) are removed. The card order is photo, name, price, description, the full-width pink outline Learn more, then a centered "What's included".
  - **Pop-up:** it no longer has a Learn more button and ends with the pricing note.
- **How it works, FAQs, CTA and hero, 2026-11-05 (later):**
  - **How it works:** titles are one word (Connect, Plan, Create, Celebrate), so they never wrap. The descriptions were rewritten so all four wrap to the same number of lines, checked at 320, 375, 430, 768, 1024, 1150, 1280 and 1440. Replay is centered on phones and tablets and right-aligned from 1024px.
  - **FAQs (new, below Kind words):** "FAQs" title and a short intro on the left, with four questions on the right (half width from 1024px). Each answer opens and closes in place (native `<details>`, with a slide animation where supported). The answers are rewritten from her current site to be shorter and warmer, and pricing uses the 2026 PDF numbers.
  - **CTA:** about two-thirds of the old height (487px vs about 680px at 1440). It uses a scenic photo of the tent reception under palms at dusk from her site (`cta/tent-reception-palms.jpg`; small guests, no faces). The text sits on a solid cream panel at the left, never on the photo; on phones the photo is above the panel. New copy: "Let's plan your one & only day" / "Tell us about the two of you and the celebration you're dreaming of. We'll take it from there, together."
  - **Hero:** `mokolii-ceremony-florals.jpg` was a social media screenshot with a "1/10" counter and a Likes heart baked in. It's removed and replaced with the couple at a string-lit bar trailer at dusk (`hero/bar-cart-string-lights.jpg`, from her site).
- **FAQs, CTA and reviews content, 2026-11-05 (later):**
  - **FAQs:** the intro line is removed. The label reads "Answers to what couples ask us most". The split is 40/60 from 1024px, and the questions are in sentence case (Montserrat, normal tracking).
  - **Section labels** now use balanced line breaks everywhere.
  - **CTA:** no box and no text on a photo. It's two halves: text on cream on the left, aligned to the content column, and on the right a photo of a round floral arch at the end of a palm-lined aisle framing Mokoliʻi (`cta/arch-mokolii-palms.jpg`, from her The Knot gallery, no people). On phones the photo sits above the text. It's 480px tall on desktop. The tent photo is removed.
  - **Kind words:** now has six five-star 2026 reviews from `content/reviews.md`. Natasha P., Elysha F. and Monique F. were added; none were needed from 2025. The "Read reviews on The Knot / WeddingWire" links are removed. A layout redesign is in progress in Claude Design.
- **Kind words layouts canvas (2026-11-05):** https://claude.ai/artifact/9YZNhAkayM5aH7WKoSyP2g, with four options using the same six verbatim excerpts: A Editorial feature (one large lead quote with five short ones in a hairline grid), B One at a time (name list plus one big quote with arrows, interactive), C Quote wall (masonry of white cards with gold stars), D Blush band (pink-tinted band with a swipeable row of cream cards). Awaiting a pick.
- **Kind words, built 2026-11-05 (based on canvas B, without the name list):**
  - **Card:** one full review at a time on a white card, max width 52rem, centered in the section, text left-aligned. Every 2026 five-star review in `content/reviews.md` appears in full with no cuts, seven in all, newest first.
  - **Top row:** five filled Phosphor stars (`@phosphor-icons/react`, MIT) in gold, with a "01 / 07" counter and pink outline previous/next arrows. They sit at the top so the arrows don't move as the card height changes; on narrow phones they wrap under the stars. Swipe works on touch screens, and each new review fades in (no fade with reduced motion).
  - **Label:** "From couples who planned with us".
- **Layout pass, 2026-11-05 (later):**
  - **Less blocky:** every section now sits on the same cream except Recent weddings, which stays the one beige band (as asked earlier). How it works and FAQs moved off beige.
  - **One content width:** the header, footer, hero text, weddings mosaic and sections all share the 75rem content column (header and footer narrowed to match).
  - **CTA:** the arch photo is full width, with the text on it at the left of the content column. From 768px a light left-side gradient (`--scrim-side`) sits behind the text only; on phones the photo is evenly dimmed. There's no box.
  - **Kind words:**
    - The source (The Knot) is no longer shown, just the name and month.
    - Light typo and punctuation fixes, keeping each reviewer's voice.
    - New order: Samantha, Talia, Kelly, Monique, Natasha, Elysha, Caroline.
    - The card can be dragged with a mouse or swiped.
    - Compact nav dots sit below the card (24px apart). Choosing one smoothly scrolls the card's top to just under the header (`scrollToElement` in SmoothScroll), at every width.
- **CTA and How it works, 2026-11-05 (later):**
  - **CTA photo framing:** the photo is framed low (`object-position: 50% 85%`), so the arch and Mokoliʻi show instead of the palm tops.
  - **Gradient and text:** the side gradient is lighter (50% → 30% → clear by 60%). The text column is narrower (`max-w-md`), so it stops before the arch, and the label is white so it stays readable (average contrast about 7:1 against the photo).
  - **How it works:** once the sequence has started, it pauses wherever it is while the timeline is off screen and resumes when it's back, so the confetti never fires out of sight.
- **Kind words and CTA, 2026-11-05 (later):**
  - **Kind words** is on the same beige as Recent weddings (`bg-surface-alt`).
  - **CTA label:** "Weddings throughout the islands" is light gold again.
  - **CTA gradient:** the side gradient is a little darker behind the text (62% → 42% → clear by 62%). Measured contrast: title and body about 8.7:1, gold label 4.7:1.
  - **CTA photo:** it runs 12% wider than the section from the left edge, so the arch and Mokoliʻi sit about 55% across, centered in the open part of the photo.
- **Audit versions (step 6), 2026-11-05:**
  - **Chose V5** (all of V1–V5) without its pull quote:
    - V1: label gold `#7e6c3e` passes 4.5:1, the hero loads its first photo alone, AVIF/WebP images. Mobile performance 70 → about 90, accessibility 96 → 100, phone LCP 6.1s → 3.6s.
    - V2: curly apostrophes, no tap zoom delay, no desktop rubber-banding, brand name kept from auto-translate.
    - V3: themed text cursor and scrollbar; hero loops pause off screen.
    - V4: deeper hero gradient (the first slide's label reaches about 4.5:1), Contact as an outline button in the header (white over the hero, pink once pinned), larger package prices.
    - V5: larger section titles, a gold line across package cards on hover, a fill sweep on buttons.
  - **Kept by request:** the hero slideshow has no pause control.
  - **Also fixed:** the weddings label keeps each "·" with the word before it, so no line starts with a dot.
- **Favicon, 2026-11-05 (as provided):** Stephanie supplied the full circular badge (`public/images/brand/logo-badge.png`, 1254px, transparent inside the ring). The favicon is that badge at its original 1254px, with only the inside of the ring filled white (found by flood-filling the outside from the edges, so the white follows the ring exactly and never spills past it) and the outside left transparent: `src/app/icon.png`. The iPhone home-screen icon `src/app/apple-icon.png` is the same badge on a white square, also 1254px. This replaced an earlier simplified arches-only favicon.
- **CTA, 2026-11-05 (later):** the title "Let's plan your one & only day" stays on 2 lines from 320 to 1440 wide. The text column is 34rem from 1024px, and the title steps down to 24px under 380px. The section is shorter (padding 56px on phones, 80px from 768px): 465px tall at 1440, down from 586. The photo runs 18% wider than the section, so the arch starts just past the text at 1440 (about 58% across).
