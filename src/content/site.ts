// All copy and data for the One & Only Events site.
// Copy is Sunny’s own wording from oneandonly.events and her 2026 packages PDF
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

// `live: false` pages keep their look but aren’t clickable until they’re built.
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
      src: "/images/hero/bar-cart-string-lights.jpg",
      alt: "A bride and groom share a drink at a string-lit vintage bar trailer at dusk",
    },
  ] as Slide[],
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
  // Rewritten 2026-11-05 from Sunny’s own homepage copy: the intro ("Your Day, Your Story,
  // Your Way") and her four "Why Choose Us" points. No new facts added.
  lead: "Your wedding should feel like the two of you, not like someone else’s Pinterest\u00a0board.",
  paragraphs: [
    "That belief is at the heart of One & Only Events. Sunny has lived in Tokyo, Seoul, London and now Hawaiʻi, and that wide view shapes how she plans. Different traditions, families and expectations all find their place, brought together with\u00a0care.",
    "She is also meticulous. A background in finance and accounting means your budget stays clear and your contracts get a careful read, while venue rules, island weather and guest travel are sorted long before they can become\u00a0problems.",
    "On the day, none of that work shows. What you feel is a celebration that is relaxed, joyful and entirely yours, and your guests leave talking about it. Again and again, they tell us it was the best wedding they’ve been\u00a0to.",
  ],
  link: { ...aboutPage, label: "More about Sunny" },
};

export type MosaicPhoto = { src: string; alt: string; ratio: string; speed: "a" | "b" | "c" };

export const weddings = {
  title: "Recent weddings",
  label: "Resorts\u00a0· Private estates\u00a0· Gardens\u00a0· Oceanfront",
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
  /** A few words on who it suits, shown above the name */
  description: string;
  bestFor: string;
  priceDetail?: string;
  image: { src: string; alt: string };
  inclusions: string[];
};

const dayOfInclusions = [
  "Setup and teardown of light personal decor",
  "A detailed, easy-to-follow wedding day timeline",
  "Rehearsal coordination (up to 1 hour)",
  "Full wedding day oversight — setup, timeline flow, vendor coordination, and handling any unexpected moments",
  "Professional judgment calls as needed to keep everything running smoothly",
];

export const packages = {
  title: "Service packages",
  label: "As much or as little help as you need",
  // Shown at the foot of each package’s "What’s included" pop-up
  note: "Investments are based on celebrations with up to 100 guests and a single location for both ceremony and reception. Pricing is tailored to your venue, guest count, and level of planning support.",
  includedLabel: "What’s included",
  learnMoreLabel: "Learn more",
  items: [
    {
      id: "full-planning",
      name: "Full Planning",
      price: "Starting at $7,500",
      description: "From your first idea to your last dance, we plan it all. You share the vision, and we bring it to life.",
      bestFor: "For couples who would love us to take care of everything.",
      image: {
        src: "/images/packages/full-planning-beach-embrace.jpg",
        alt: "A newlywed couple in lei embrace on the beach at sunset, Diamond Head behind them",
      },
      inclusions: [
        "Getting to know your vision, priorities, and overall wedding goals",
        "Thoughtful budget guidance with clear cost breakdowns",
        "Trusted vendor recommendations aligned with your style and budget",
        "Main point of contact for all vendors throughout planning",
        "Step-by-step guidance leading up to the wedding",
        "A detailed, easy-to-follow wedding day timeline",
        "Floor plan development and rental guidance",
        "Setup and teardown of light personal decor",
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
      description: "Some pieces are already in place. We step in where you need us most, from vendors and design to your timeline.",
      bestFor: "For couples who have started planning and want a hand with the rest.",
      image: {
        src: "/images/packages/partial-planning-tablescape.jpg",
        alt: "A reception table set with hand-painted taper candles and glass hurricanes beside a rattan peacock chair",
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
      description: "You’ve done the planning. We make sure your wedding day runs smoothly, working behind the scenes so you can enjoy it.",
      bestFor: "For couples who have planned it all and want to relax on the day.",
      image: {
        src: "/images/packages/day-of-bridal-details.jpg",
        alt: "Bridal shoes and wedding stationery laid out on the wedding morning",
      },
      inclusions: [
        "Planning support beginning about two months before the wedding",
        "Review of vendor contracts, invoices, floor plans, and orders",
        ...dayOfInclusions,
      ],
    },
  ] satisfies Package[],
};

export type ProcessStep = { title: string; body: string; icon: "talk" | "plan" | "together" | "celebrate" };

// Rewritten 2026-11-05 from Sunny’s four steps for clarity and even length (17–19 words each);
// same meaning, nothing added.
export const process = {
  title: "How it works",
  label: "Our planning process",
  replayLabel: "Replay",
  steps: [
    { icon: "talk", title: "Connect", body: "Share your story, what you picture and what matters most to you both." },
    { icon: "plan", title: "Plan", body: "We build the foundation together: your budget, priorities and vendors." },
    { icon: "together", title: "Create", body: "We guide each choice and bring it all together into one clear plan." },
    { icon: "celebrate", title: "Celebrate", body: "On the day, we handle every detail so you can be fully present." },
  ] satisfies ProcessStep[],
};

export type Review = { quote: string; name: string; source: string; date: string };

export const reviews = {
  title: "Kind words",
  label: "From couples who planned with us",
  starsLabel: "Rated 5 out of 5 stars",
  previousLabel: "Previous review",
  nextLabel: "Next review",
  dotLabel: "Show review",
  // Ordered for the business: the most complete and memorable stories first, then variety.
  items: [
    {
      quote:
        "If you’re reading this… stop searching and book Sunny before her calendar fills up. I truly never thought I’d be able to say my wedding day went perfectly, but it honestly did, and Sunny was the biggest reason why. From the very first day of planning all the way through our wedding day, people constantly asked me, “Are you stressed?” My answer was always the same: “No, because we have Sunny.” She somehow made wedding planning feel fun, exciting, organized, and genuinely stress-free. She listened to everything we wanted while also sharing thoughtful suggestions and advice based on her years of experience. I never felt like she was trying to take over our vision. Instead, she made it even better than we imagined. We flew our family and friends thousands of miles to Hawaii, and putting together a destination wedding felt like such a huge responsibility. Somehow, Sunny made every single person feel taken care of. Our guests are still talking about how seamless, beautiful, and incredibly organized everything was. From her amazing vendor recommendations and incredible communication to the thoughtful little details that most people would never even notice, Sunny thought of everything. She has the kindest heart, an incredible eye for detail, and somehow manages to make wedding magic happen while making it all look effortless. I can honestly say I was able to be fully present on my wedding day because I never once had to worry about what was happening behind the scenes. I knew Sunny had it handled, and she absolutely did. Sunny isn’t just a wedding planner. She’s a problem solver, a calming presence, a hype woman, a magic maker, and someone who genuinely cares about making your day everything you’ve dreamed of. Thank you, Sunny, for giving us the most perfect day of our lives. We will be forever grateful.",
      name: "Samantha S.",
      source: "The Knot",
      date: "August 2026",
    },
    {
      quote:
        "Sunny makes the impossible possible, and pulls it all off with a smile and amazing energy! Building up to the day, she toured several venues with us, explaining their pros and cons. She also had a wide selection of vendors to help us hone in on exactly the vision we wanted. She found us a bakery that could do a very niche flavor that we wanted (pandan and lilikoi!), vendors that could make the most beautiful flower arrangements for a great price, and a videographer. All of that makes Sunny an amazing planner, but that hardly scratches the surface on how wonderful she was. On the morning of our big day, the large Kona Low storm came in and closed down our venue. What could have been a disaster turned into the most magical day. Within a handful of hours, Sunny planned a whole new wedding at a safer venue that turned into a perfect fit! Not only that, she worked with all of our vendors to safely get all staff and guests to and from the venue. A TRUE MIRACLE WORKER! She saved our day in so many ways and we couldn’t be happier we chose her to plan our wedding.",
      name: "Talia S.",
      source: "The Knot and WeddingWire",
      date: "April 2026",
    },
    {
      quote:
        "Sunny made setting up my dream destination wedding an absolute breeze. I always assumed wedding planning was going to be stressful, but working with Sunny literally felt like I was planning a party with a friend. She’s so friendly and so straightforward. Talking to her was always like a breath of fresh air and she made this whole process so much fun. There wasn’t a moment working with her where I felt any sort of stress. She was so sweet, so real, and would direct me in the right direction for any questions I had. Not only was working with her a blast, but the wedding turned out better than I could have imagined. She was like a ninja in the background getting everything done and running the whole show so smoothly. The whole wedding was so perfectly paced; there was never an awkward moment. It all felt so intimate and made with love. Thank you again, Sunny! I had so much fun planning with you, I’m sad that it’s over. Miss you and take care!",
      name: "Kelly V.",
      source: "The Knot",
      date: "July 2026",
    },
    {
      quote:
        "Oh, where do I begin? From the very beginning, I remember feeling drawn to Sunny because of how well our conversation flowed. She was authentic, professional, and genuinely invested in making our day perfect. The way she pitched herself in our initial consultation was exactly what she delivered. Sunny listened closely to our vision, provided top-notch vendor recommendations, and helped us stay within our budget without ever sacrificing quality or experience. One of the things we appreciated the most about Sunny was how much she cared. Not only about the wedding, but for us as a couple. If she sensed I was overwhelmed, she’d check in. She was always kind, attentive, and a source of support. Planning a destination wedding can be overwhelming, but Sunny made the entire process seamless. From the catamaran cruise recommendation to our farewell brunch, Sunny helped us curate a trip of a lifetime. I can wholeheartedly say, picking Sunny to be our full-service wedding planner was the absolute best decision! She truly made our wedding iconic and our guests still rave about it.",
      name: "Monique F.",
      source: "The Knot",
      date: "April 2026",
    },
    {
      quote:
        "Sunny is AMAZING!! She was a pleasure to work with! We were planning from long distance and she handled everything so well. She kept me from being a “bridezilla.” Although we were on a 6-hour time difference (East Coast vs. Hawaii), she definitely made it work. Communication was prompt, and she managed emails, calls and FaceTime when needed… She brought all of the visions to life (without us seeing). She will definitely take all the stress away from any bride and groom. Highly recommended.",
      name: "Natasha P.",
      source: "The Knot",
      date: "May 2026",
    },
    {
      quote:
        "Sunny was absolutely wonderful! As a couple with full-time jobs, we knew we needed someone who was on top of things and able to keep us on track—she did exactly that over the 1.5 years we worked with her. She had plenty of vendor recommendations and offered great advice on everything. Our wedding day was PERFECT, and all of our guests shared how much fun they had. We would highly recommend Sunny to any future brides!",
      name: "Elysha F.",
      source: "The Knot",
      date: "April 2026",
    },
    {
      quote:
        "Sunny was excellent! She provided great recommendations while helping us keep our budget in mind. She was also integral in making sure the day of the wedding ran smoothly. We truly couldn’t have pulled it off without her! She’s the best!",
      name: "Caroline T.",
      source: "The Knot",
      date: "August 2026",
    },
  ] satisfies Review[],
};

export const faq = {
  title: "FAQs",
  label: "Answers to what couples ask us most",
  items: [
    {
      question: "How much does a wedding planner in Hawaiʻi cost?",
      answer:
        "Full planning starts at $7,500, partial planning at $6,000 and day-of coordination at $2,500. Your quote depends on your guest count, venue and how much help you’d like.",
    },
    {
      question: "Do you plan destination weddings?",
      answer:
        "All the time. Many of our couples live on the mainland or abroad. We handle the island side, from vendors to hotel room blocks and guest shuttles, so you can plan from anywhere.",
    },
    {
      question: "What’s the difference between planning and coordination?",
      answer:
        "Planning starts early, with your budget, vendors, contracts and design. Coordination is for couples who’ve planned it themselves: we step in about two months out and run the day.",
    },
    {
      question: "Do you plan multicultural weddings?",
      answer:
        "Yes, and we love them. Sunny has called Japan, Korea, London and now Hawaiʻi home, so blending traditions, languages and families feels natural to us.",
    },
  ],
};

export const cta = {
  title: "Let’s plan your one\u00a0& only day",
  label: "Weddings throughout the islands",
  body: "Tell us about the two of you and the celebration you’re dreaming of. We’ll take it from there, together.",
  image: {
    src: "/images/cta/arch-mokolii-palms.jpg",
    alt: "A round floral arch at the end of a palm-lined ceremony aisle, framing Mokoliʻi and the ocean",
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
