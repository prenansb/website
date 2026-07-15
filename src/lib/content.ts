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
  { label: "Email", handle: "prenansb@gmail.com", href: "mailto:prenansb@gmail.com" },
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
    period: "2025 — 2026",
    description:
      "Full-stack design engineer at an AI-native commerce platform powering 140+ restaurant brands. Owned native menu & fulfillment UX, shipped iOS Live Activities end-to-end, and built greenfield merchant-portal modules.",
    href: "https://getopen.com/",
  },
  {
    company: "Afya",
    role: "Senior Software Engineer",
    period: "2025",
    description:
      "Senior frontend engineer on iClinic, Brazil's leading cloud-based medical software. Drove the migration of legacy Django + React codebases to Next.js and built design-system components adopted across 4 product teams.",
    href: "https://iclinic.com.br/",
  },
  {
    company: "Betscale",
    role: "Software Engineer & Co-founder",
    period: "2024 — 2025",
    description:
      "Co-founded a bet-tracking SaaS for League of Legends e-Sports. Built the animated landing page, a Fastify + PostgreSQL backend with Clerk auth and Stripe billing, and a local-first dashboard with PowerSync.",
    href: "https://www.betscale.app/",
  },
  {
    company: "FTeam",
    role: "Software Engineer",
    period: "2023 — 2024",
    description:
      "Refactored the back-office front end from CRA to TypeScript + Vite, modernized state management with TanStack Query, and built a Clean-Architecture NestJS service for document approval flows.",
  },
  {
    company: "Octane Studio",
    role: "Software Engineer",
    period: "2021 — 2023",
    description:
      "Built web products and landing pages for clients with Next.js, Radix UI, and React Query — including a real-estate platform for North Alabama integrated with Bridge Interactive and Google Maps.",
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
