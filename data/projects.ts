export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  status: string;
  // Drives the status dot colour.
  tone: "live" | "off" | "neutral";
  blurb: string;
  detail: string;
  // Wide banner for the card header and square mark for the title row.
  banner: string;
  logo: string;
  stack: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "chrono",
    name: "Chrono",
    status: "Shipped",
    tone: "live",
    blurb: "Privacy-preserving age verification that never learns who you are.",
    detail:
      "Issues signed age-band credentials without storing names, birthdates, or ID images. Six REST endpoints cover registration, authentication, scoped token issuance, field-level access control, and instant revocation, with JWT auth and bcrypt hashing. Built in a 24-hour window at HackFax x PatriotHacks 2026, where it took 2nd place in both the Cybersecurity and Gemini API tracks.",
    banner: "/banners/chrono.png",
    logo: "/logos/chrono.png",
    stack: ["Gemini API", "REST", "JWT", "bcrypt"],
    links: [
      { label: "Demo video", href: "https://youtu.be/LrlDqlTHArs?si=Sjg-xAHzzHDY5Ica" },
      { label: "Source", href: "https://github.com/brisolt/chrono-age-verification" },
    ],
  },
  {
    slug: "ngoit-ai",
    name: "Ngoit",
    status: "Off-Air",
    tone: "off",
    blurb: "E-commerce platform serving 1,000+ users, rebuilt end to end.",
    detail:
      "Modular React front end over a Supabase and PostgreSQL data layer supporting the full customer purchase lifecycle, with the foundation for Stripe payment processing and documented handoff for the team. No longer live.",
    banner: "/banners/ngoit.png",
    logo: "/logos/ngoit.png",
    stack: ["React", "Node.js", "Supabase", "PostgreSQL", "Stripe API"],
    links: [{ label: "Source", href: "https://github.com/brisolt/ngoit-ai" }],
  },
];
