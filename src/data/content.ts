export type PortfolioItem = {
  // title: string;
  niche: string;
  ctr: string;
  image: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    // title: "I Survived 100 Days in Minecraft",
    niche: "Gaming",
    ctr: "+12.4% CTR",
    image: "/images/thumb-1.jpg",
  },
  {
    // title: "I Was WRONG About This Phone",
    niche: "Tech",
    ctr: "+9.8% CTR",
    image: "/images/thumb-2.jpg",
  },
  {
    // title: "How I Make $10K/Month Online",
    niche: "Finance",
    ctr: "+14.2% CTR",
    image: "/images/thumb-3.jpg",
  },
  {
    // title: "My 90-Day Body Transformation",
    niche: "Fitness",
    ctr: "+11.6% CTR",
    image: "/images/thumb-4.jpg",
  },
  {
    // title: "I Made the World's Largest Burger",
    niche: "Food",
    ctr: "+18.9% CTR",
    image: "/images/thumb-5.jpg",
  },
  {
    // title: "48 Hours Alone in Tokyo",
    niche: "Travel",
    ctr: "+8.7% CTR",
    image: "/images/thumb-6.jpg",
  },
  {
    // title: "48 Hours Alone in Tokyo",
    niche: "Travel",
    ctr: "+8.7% CTR",
    image: "/images/thumb-7.png",
  },
  {
    // title: "48 Hours Alone in Tokyo",
    niche: "Travel",
    ctr: "+8.7% CTR",
    image: "/images/thumb-8.jpg",
  },
  {
    // title: "48 Hours Alone in Tokyo",
    niche: "Travel",
    ctr: "+8.7% CTR",
    image: "/images/thumb-9.jpg",
  },
  {
    // title: "48 Hours Alone in Tokyo",
    niche: "Travel",
    ctr: "+8.7% CTR",
    image: "/images/thumb-10.jpg",
  },
  {
    // title: "48 Hours Alone in Tokyo",
    niche: "Travel",
    ctr: "+8.7% CTR",
    image: "/images/thumb-11.jpg",
  },
];

export type Service = {
  icon: "thumbnails" | "redesigns" | "direction";
  number: string;
  title: string;
  description: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    icon: "thumbnails",
    number: "01",
    title: "YouTube Thumbnails",
    description:
      "Scroll-stopping thumbnails designed around attention, curiosity and strong visual hierarchy — built for browse, suggested and search.",
    points: ["Concept-first design", "Mobile & TV safe", "A/B test ready"],
  },
  {
    icon: "redesigns",
    number: "02",
    title: "Thumbnail Redesigns",
    description:
      "I take existing thumbnails and rebuild them into stronger, clearer, more clickable visuals — without losing your channel's identity.",
    points: ["Free CTR audit", "Unlimited revisions", "24–48h delivery"],
  },
  {
    icon: "direction",
    number: "03",
    title: "Creative Direction",
    description:
      "An ongoing partnership: concept systems, title–thumbnail alignment and a consistent look across your entire catalog.",
    points: ["Monthly bundles", "Channel branding", "Trend research"],
  },
];

export const STATS = [
  { value: "150+", label: "Thumbnails delivered" },
  { value: "20+", label: "Creators partnered" },
  { value: "2.4×", label: "Average CTR lift" },
  { value: "48h", label: "Standard turnaround" },
];

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const PRICING: PricingTier[] = [
  {
    name: "Single Thumbnail",
    price: "$35",
    period: "per thumbnail",
    description:
      "Perfect for testing the waters or a single upload that needs to perform.",
    features: [
      "1 custom thumbnail",
      "2 initial concepts",
      "Unlimited revisions",
      "48-hour delivery",
      "Source file included",
    ],
    cta: "Order One",
  },
  {
    name: "Monthly Pack",
    price: "$250",
    period: "per month",
    description:
      "For creators uploading weekly who need consistent, reliable packaging.",
    features: [
      "8 thumbnails per month",
      "24–48 hour delivery",
      "2 initial concepts each",
      "Unlimited revisions",
      "A/B test-ready variants",
      "Priority support",
    ],
    cta: "Start Monthly Pack",
    popular: true,
  },
{
  name: "Custom Partnership",
  price: "Custom",
  period: "pricing",
  description:
    "A fully tailored thumbnail package built around your channel, content, goals, and upload schedule.",
  features: [
    "Custom number of thumbnails",
    "Priority turnaround",
    "Title + thumbnail strategy",
    "Unlimited revisions",
    "Custom channel style system",
    "Performance-based creative optimization",
    "CTR-focused thumbnail concepts",
    "Direct communication & feedback",
  ],
  cta: "Build My Package",
},
];
