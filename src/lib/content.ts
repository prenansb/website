export const profile = {
  name: "Pedro Renan",
  role: "Software & Design Engineer",
  location: "Fortaleza, Brazil",
  email: "prenansb@gmail.com",
  tagline:
    "I build animation-rich, production-grade interfaces — and the backends behind them.",
  bio: [
    "Software engineer with 5+ years of experience, focused on front-end and design engineering with a strong full-stack foundation. Most of my time goes into React, React Native, and Node.js.",
  ],
  bioOpen: {
    before:
      "I care about how software feels to use, not just what it does — the small stuff most teams skip. Lately I've been shipping across web, native mobile, and backend at ",
    label: "Open",
    href: "https://getopen.com/",
    after: ".",
  },
} as const;

export const socials = [
  { label: "GitHub", handle: "@prenansb", href: "https://github.com/prenansb" },
  { label: "X", handle: "@prenansb", href: "https://x.com/prenansb" },
  {
    label: "LinkedIn",
    handle: "pedro-renan",
    href: "https://www.linkedin.com/in/pedro-renan",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  href?: string;
};

export const experience: Experience[] = [
  {
    company: "Open",
    role: "Design Engineer",
    period: "2025 — Current",
    description:
      "An AI-native commerce platform powering 140+ restaurant brands processing 2,000+ orders a day. Owned the native menu and fulfillment experience end to end, shipped real-time order tracking with live courier info, built the gift card purchase and wallet system, and stood up three merchant-portal modules from scratch — plus onboarding, account settings, and analytics used across the product.",
    href: "https://getopen.com/",
  },
  {
    company: "Afya",
    role: "Senior Software Engineer",
    period: "2025",
    description:
      "Brazil's leading cloud-based medical software company. Joined the team migrating iClinic off a decade-old Django monolith and an aging React app onto a modern stack, built foundational design-system components adopted by four product teams, and introduced feature flags so the migration could roll out gradually and safely.",
    href: "https://iclinic.com.br/",
  },
  {
    company: "Betscale",
    role: "Software Engineer & Co-founder",
    period: "2024 — Current",
    description:
      "Co-founded a bet-tracking platform for esports, helping bettors move from casual to professional with fast onboarding and clear analytics. Built the product from the ground up — landing page, backend, and payments — including a local-first dashboard that keeps working offline and syncs in real time once back online.",
    href: "https://www.betscale.app/",
  },
  {
    company: "FTeam",
    role: "Software Engineer",
    period: "2023 — 2024",
    description:
      "Modernized the back office of an internal platform, improving its performance and day-to-day developer experience. Also stood up a new backend project from scratch, following Clean Architecture and using Google Cloud Storage for file uploads, to support a document-approval feature — run alongside the older Python backend I maintained.",
  },
  {
    company: "Octane Studio",
    role: "Software Engineer",
    period: "2021 — 2023",
    description:
      "A digital agency building web products for clients. Built a real-estate platform for buying and renting property in Alabama, delivered numerous marketing landing pages, and worked closely with clients on planning and expectations across daily stand-ups and estimation.",
  },
];

export type Project = {
  name: string;
  blurb: string;
  href: string;
  year: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "BetScale",
    blurb:
      "A smart bet-tracking platform for League of Legends e-Sports, helping bettors evolve from casual to professional with fast registration, analytics, and full history.",
    href: "https://www.betscale.app/",
    year: "2025",
    stack: ["Next.js", "Motion", "Fastify", "PostgreSQL", "Stripe"],
  },
  {
    name: "Becca Travis Real Estate",
    blurb:
      "A real-estate platform for buying, selling, and valuing homes in North Alabama, serving one of the region's top-producing agents.",
    href: "https://beccatravis.com/",
    year: "2023",
    stack: ["Next.js", "Radix UI", "React Query", "Google Maps"],
  },
];
