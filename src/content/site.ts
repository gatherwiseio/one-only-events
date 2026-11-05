// All copy and data for the One & Only Events site.
// Copy is Sunny's own wording from oneandonly.events and her 2026 packages PDF
// (see content/current-site.md and content/reviews.md); only typos are fixed.

export type PageLink = { label: string; href: string; live: boolean };

export const business = {
  name: "One & Only Events",
  shortName: "One & Only",
  planner: "Sunny Cho",
  tagline: "Your Day, Your Story, Your Way.",
  place: "Hawaiʻi",
  instagram: "https://www.instagram.com/oneandonlyhawaii/",
  instagramHandle: "@oneandonlyhawaii",
  theKnot: "https://www.theknot.com/marketplace/one-and-only-honolulu-hi-2060112",
  weddingWire: "https://www.weddingwire.com/biz/one-only/7253d4d512d7ccef.html",
  copyrightYear: 2026,
};

// `live: false` pages keep their look but aren't clickable until they're built.
export const pages: PageLink[] = [
  { label: "About", href: "/about", live: false },
  { label: "Services", href: "/services", live: false },
  { label: "Portfolio", href: "/portfolio", live: false },
  { label: "Contact", href: "/contact", live: false },
];

export const contactPage: PageLink = pages[3];
export const servicesPage: PageLink = pages[1];
export const portfolioPage: PageLink = pages[2];
export const aboutPage: PageLink = pages[0];

export type Slide = { src: string; alt: string; focus?: "upper" };

export const hero = {
  label: "Hawaiʻi wedding planning & design",
  title: "Your day, your story, your\u00a0way",
  scrollCue: { label: "Scroll to see more", href: "#about" },
  slides: [
    {
      src: "/images/hero/couple-mokolii-lawn.jpg",
      alt: "A bride and groom walk hand in hand across a seaside lawn with Mokoliʻi in the distance",
    },
    {
      src: "/images/hero/oceanfront-floral-aisle.jpg",
      alt: "A ceremony aisle lined with bright florals and wooden chairs, facing the ocean",
    },
    {
      src: "/images/hero/mountain-lawn-ceremony.jpg",
      alt: "Rows of wooden ceremony chairs on a lawn beneath green mountains",
    },
    {
      src: "/images/hero/couple-palm-garden.jpg",
      alt: "A couple standing together in a garden lined with palm trees",
    },
    {
      src: "/images/hero/mokolii-ceremony-florals.jpg",
      alt: "A bride and groom touch foreheads during their ceremony, framed by tropical florals with Mokoliʻi behind them",
      focus: "upper",
    },
  ] satisfies Slide[],
};

export type AboutPhoto = { src: string; alt: string; speed: "a" | "b" | "c" | "none" };

export const about = {
  title: "Meet Sunny",
  label: "Founder of One\u00a0&\u00a0Only\u00a0Events",
  // Overlapping portrait mosaic: main portrait, then the two smaller tiles laid over it.
  photos: [
    {
      src: "/images/sunny/sunny-portrait.jpg",
      alt: "Sunny Cho, founder of One & Only Events, smiling with her arms crossed",
      speed: "a",
    },
    {
      src: "/images/sunny/sunny-light-painting-close.jpg",
      alt: "Sunny laughing as she snaps a photo on her phone beneath ribbons of light at a nighttime celebration",
      speed: "none",
    },
    {
      src: "/images/sunny/sunny-styling-table.jpg",
      alt: "Sunny smiling as she arranges florals on a reception table",
      speed: "b",
    },
  ] satisfies AboutPhoto[],
  // Rewritten 2026-11-05 from Sunny's own homepage copy: the intro ("Your Day, Your Story,
  // Your Way") and her four "Why Choose Us" points. No new facts added.
  lead: "Your wedding should feel like the two of you, not like someone else's Pinterest\u00a0board.",
  paragraphs: [
    "That belief is at the heart of One & Only Events. Sunny has lived in Tokyo, Seoul, London and now Hawaiʻi, and that wide view shapes how she plans. Different traditions, families and expectations all find their place, brought together with\u00a0care.",
    "She is also meticulous. A background in finance and accounting means your budget stays clear and your contracts get a careful read, while venue rules, island weather and guest travel are sorted long before they can become\u00a0problems.",
    "On the day, none of that work shows. What you feel is a celebration that is relaxed, joyful and entirely yours, and your guests leave talking about it. Again and again, they tell us it was the best wedding they've been\u00a0to.",
  ],
  link: { ...aboutPage, label: "More about Sunny" },
};

export type MosaicPhoto = { src: string; alt: string; ratio: string; speed: "a" | "b" | "c" };

export const weddings = {
  title: "Recent weddings",
  label: "Resorts · Private estates · Gardens · Oceanfront",
  intro:
    "Every celebration begins with a different story. Our role is to bring that vision to life while making sure the experience remains organized, cohesive, and enjoyable.",
  link: { ...portfolioPage, label: "View the portfolio" },
  photos: [
    { src: "/images/weddings/oceanfront-ceremony-chairs.jpg", alt: "An oceanfront ceremony set with gold chairs under the palms", ratio: "aspect-16/10", speed: "a" },
    { src: "/images/weddings/couple-florals-kiss.jpg", alt: "A groom kisses his bride, who holds a bright bouquet", ratio: "aspect-4/5", speed: "c" },
    { src: "/images/weddings/couple-palms-lawn.jpg", alt: "A couple on a palm-lined lawn by the sea", ratio: "aspect-3/4", speed: "b" },
    { src: "/images/weddings/painted-floral-cake.jpg", alt: "A white wedding cake painted with colorful flowers", ratio: "aspect-square", speed: "a" },
    { src: "/images/weddings/archway-ceremony.jpg", alt: "A couple marrying beneath an archway framed with florals", ratio: "aspect-3/4", speed: "c" },
    { src: "/images/weddings/black-white-carry.jpg", alt: "Black-and-white photo of a groom carrying his laughing bride", ratio: "aspect-4/3", speed: "b" },
    { src: "/images/weddings/palm-grove-procession.jpg", alt: "Guests in colorful outfits gathering in a palm grove", ratio: "aspect-21/9", speed: "a" },
  ] satisfies MosaicPhoto[],
};

export type Package = {
  id: string;
  name: string;
  price: string;
  description: string;
  bestFor: string;
  priceDetail?: string;
  image: { src: string; alt: string };
  inclusions: string[];
};

const dayOfInclusions = [
  "Setup and teardown of light personal décor",
  "A detailed, easy-to-follow wedding day timeline",
  "Rehearsal coordination (up to 1 hour)",
  "Full wedding day oversight — setup, timeline flow, vendor coordination, and handling any unexpected moments",
  "Professional judgment calls as needed to keep everything running smoothly",
];

export const packages = {
  title: "Service packages",
  label: "Planning shaped around your day",
  // Shown at the foot of each package's "What's included" pop-up
  note: "Investments are based on celebrations with up to 100 guests and a single location for both ceremony and reception. Pricing is tailored to your venue, guest count, and level of planning support.",
  includedLabel: "What's included",
  learnMoreLabel: "Learn more",
  items: [
    {
      id: "full-planning",
      name: "Full Planning",
      price: "Starting at $7,500",
      description: "From your first idea to your last dance, we handle it all. You bring the vision — we bring it to life.",
      bestFor: "Best for couples who want a true done-for-you experience",
      image: {
        src: "/images/packages/full-planning-tablescape.jpg",
        alt: "A reception table set with hand-painted taper candles and glass hurricanes beside a rattan peacock chair",
      },
      inclusions: [
        "Getting to know your vision, priorities, and overall wedding goals",
        "Thoughtful budget guidance with clear cost breakdowns",
        "Trusted vendor recommendations aligned with your style and budget",
        "Main point of contact for all vendors throughout planning",
        "Step-by-step guidance leading up to the wedding",
        "A detailed, easy-to-follow wedding day timeline",
        "Floor plan development and rental guidance",
        "Setup and teardown of light personal décor",
        "Support with hotel room blocks and guest transportation",
        "Rehearsal coordination (up to 1 hour)",
        "Full wedding day oversight — setup, timeline flow, vendor coordination, and handling any unexpected moments",
        "Professional judgment calls as needed to keep everything running smoothly",
      ],
    },
    {
      id: "partial-planning",
      name: "Partial Planning",
      price: "Starting at $6,000",
      description: "Some pieces are in place, others need a hand. We step in wherever you need us most — vendors, design, timeline, and more.",
      bestFor: "Best for couples who want support filling in the gaps",
      image: {
        src: "/images/packages/partial-planning-hanging-florals.jpg",
        alt: "Strands of hanging florals and greenery suspended over a lawn",
      },
      inclusions: [
        "Immediate planning support — no waiting period",
        "Curated vendor recommendations tailored to your needs",
        "Planning tools and worksheets to keep everything organized",
        "Review of vendor contracts, invoices, floor plans, and rental orders",
        ...dayOfInclusions,
      ],
    },
    {
      id: "day-of-coordination",
      name: "Day of Coordination",
      price: "Starting at $2,500",
      priceDetail: "Indoor events from $2,500 · outdoor events from $4,500",
      description: "You've planned the wedding — we make sure it runs without a hitch. Think of us as your day's behind-the-scenes crew.",
      bestFor: "Best for couples who've done the planning and just want to enjoy the day",
      image: {
        src: "/images/packages/day-of-bubble-exit.jpg",
        alt: "A newlywed couple kisses as guests send them off with bubbles",
      },
      inclusions: [
        "Planning support beginning about two months before the wedding",
        "Review of vendor contracts, invoices, floor plans, and orders",
        ...dayOfInclusions,
      ],
    },
  ] satisfies Package[],
};

export const process = {
  title: "Our planning process",
  label: "How it works",
  image: {
    src: "/images/weddings/bridal-shoes-details.jpg",
    alt: "Bridal shoes and wedding stationery laid out on the wedding morning",
  },
  steps: [
    { title: "We get to know you", body: "We begin with your story, priorities, preferences, concerns, and vision for the celebration." },
    { title: "We build the foundation", body: "We establish the budget, planning priorities, vendor needs, overall direction, and next steps." },
    { title: "We bring everything together", body: "We guide decisions, track details, review logistics, communicate with vendors, and create a clear wedding-day plan." },
    { title: "You celebrate", body: "On the wedding day, our team manages the setup, vendors, timeline, transitions, and unexpected moments so you can be fully present." },
  ],
};

export type Review = { quote: string; name: string; source: string; date: string };

export const reviews = {
  title: "Kind words",
  label: "Five-star reviews from 2026",
  items: [
    {
      quote:
        "I truly never thought I'd be able to say my wedding day went perfectly, but it honestly did, and Sunny was the biggest reason why. … People constantly asked me, “Are you stressed?” My answer was always the same: “No, because we have Sunny.”",
      name: "Samantha S.",
      source: "The Knot",
      date: "August 2026",
    },
    {
      quote:
        "On the morning of our big day, the large Kona Low storm came in and closed down our venue. What could have been a disaster turned into the most magical day. Within a handful of hours, Sunny planned a whole new wedding at a safer venue that turned into a perfect fit!",
      name: "Talia S.",
      source: "The Knot and WeddingWire",
      date: "April 2026",
    },
    {
      quote:
        "Working with Sunny literally felt like I was planning a party with a friend. … She was like a ninja in the background getting everything done and running the whole show so smoothly.",
      name: "Kelly V.",
      source: "The Knot",
      date: "July 2026",
    },
  ] satisfies Review[],
  links: [
    { label: "Read reviews on The Knot", href: business.theKnot },
    { label: "Read reviews on WeddingWire", href: business.weddingWire },
  ],
};

export const cta = {
  title: "Start planning your One & Only event",
  label: "Weddings throughout the islands",
  body: "Let's dream big, get creative, and build a celebration that's completely, unmistakably yours. Together.",
  image: {
    src: "/images/weddings/lei-ceremony.jpg",
    alt: "A smiling couple wearing lei during their ceremony",
  },
  primary: { ...contactPage, label: "Start your inquiry" },
};

export const comingSoon = {
  label: "One & Only Events · Hawaiʻi wedding planning & design",
  title: "Something beautiful is coming",
  date: "November 2026",
  body: "Our new website is almost ready. In the meantime, say hello on Instagram.",
  image: {
    src: "/images/hero/couple-mokolii-lawn.jpg",
    alt: "A bride and groom walk hand in hand across a seaside lawn with Mokoliʻi in the distance",
  },
};

export const seo = {
  title: "One & Only Events | Hawaiʻi Wedding Planner",
  description:
    "One & Only Events plans and designs unforgettable Hawaiʻi weddings, each one as one-of-a-kind as the couple behind it. Full planning, partial planning and day-of coordination.",
};
