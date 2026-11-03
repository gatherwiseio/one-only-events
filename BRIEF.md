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
- **Logo:** none yet (current site uses the text "One & Only" in a Cinzel-style serif)
- **Colors:** current site: near-black #1E1E1E, dusty blue-grey #95AEBA, white. Not necessarily kept.
- **Fonts:** current site: Cinzel, Poppins. Not necessarily kept.
- **Photos:** 13 portfolio images + hero + 4 portraits of Sunny (Kim Raaf) on the current site; links in `content/current-site.md`. Not downloaded yet.
- **Tone of voice:** warm, joyful, personal, a little playful ("laugh so hard your cheeks ache"); practical and reassuring about logistics
- **Tagline:** Your Day, Your Story, Your Way.
- **Location / service area:** Hawaiʻi, throughout the islands; local, mainland US and international couples
- **Inquiry / contact details:** inquiry form only; Instagram @oneandonlyhawaii. Email: none yet. Phone on The Knot: (808) 304-9751 (confirm before using).
- **Badges (WeddingWire):** Asian-owned, Woman-owned
- **Reviews:** The Knot 61 reviews, WeddingWire 33 (4.9). 2026 five-star reviews in `content/reviews.md`.

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
  - Link: olive-gold Montserrat 600 uppercase, underlined, no arrow ("View the portfolio", "Learn more")
- **Image treatment:** full-bleed photography in the hero, square corners everywhere, no frames or shadows, slow zoom in the hero, parallax in the mosaic. Bright natural Hawaiʻi photos mixed with black and white.
- **Motion:** CSS only (crossfade, scroll-driven parallax); everything off under `prefers-reduced-motion`.

## Assets needed
- ...
