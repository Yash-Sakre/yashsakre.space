/**
 * Single source of truth for all portfolio content.
 * Edit the values here — every section reads from this file.
 */

export type BioSegment = { text: string; strong?: boolean };

export const profile = {
  name: "Yash Sakre",
  firstName: "Yash",
  role: "Frontend Software Engineer",
  company: "Intozi",
  location: "Gurugram, India",
  email: "yashsakre940@gmail.com",
  phone: "+91 9479182317",
  available: true,
  availableLabel: "Open to work",
  /** Monogram shown in the profile avatar. */
  initials: "YS",

  /**
   * Hero bio. `strong` segments render in the foreground color (everything
   * else is muted), so the eye lands on the tools.
   */
  bio: [
    {
      text: "I build fast, real-time interfaces for the web — from computer-vision automation dashboards to media-heavy, low-latency apps — and sweat the details people feel but rarely notice. Currently building with ",
    },
    { text: "React", strong: true },
    { text: ", " },
    { text: "Next.js", strong: true },
    { text: ", " },
    { text: "TypeScript", strong: true },
    { text: ", and " },
    { text: "Electron", strong: true },
    { text: "." },
  ] satisfies BioSegment[],

  tagline: "Frontend engineer building fast, production-grade interfaces for real-time products.",
  summary:
    "Frontend engineer with ~2 years of experience building performance-intensive, real-time web apps — WebSocket-driven systems, HLS/H.265 video streaming, build optimization, and reusable design systems.",
} as const;

export const socials = {
  github: "https://github.com/Yash-Sakre",
  linkedin: "https://www.linkedin.com/in/yash-sakre/",
  email: `mailto:${profile.email}`,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

/** Section ids observed by the navbar scroll-spy, in document order. */
export const sectionIds = ["home", "experience", "work", "packages", "contact"] as const;

/** Ordered tech stack — keys map to colored logos in `brand-icons.tsx`. */
export const techStack = [
  "typescript",
  "javascript",
  "html5",
  "css3",
  "python",
  "react",
  "nextjs",
  "redux",
  "tailwindcss",
  "sass",
  "framermotion",
  "electron",
  "webrtc",
  "nodejs",
  "postgresql",
  "mongodb",
  "prisma",
  "git",
  "docker",
  "nginx",
  "vitejs",
  "storybook",
  "vitest",
  "jest",
  "testinglibrary",
  "vercel",
] as const;

export type Highlight = {
  title: string;
  description: string;
  tags: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  location?: string;
  type?: string;
  summary: string;
  highlights: Highlight[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Intozi",
    role: "Software Developer (Frontend)",
    period: "Jan 2025 — Present",
    current: true,
    location: "Gurugram, India",
    type: "Full-time",
    summary:
      "Building real-time, media-heavy dashboards and visualization tooling that power a computer-vision automation platform — orchestrating cameras, services, and workflows from a single interface.",
    tech: ["React", "TypeScript", "Electron", "Redux", "Tailwind CSS", "Storybook", "Vite", "Docker", "Nginx"],
    highlights: [
      {
        title: "Real-time Automation Dashboard",
        description:
          "Built a node-based workflow orchestration dashboard in React Flow, backed by a WebSocket event layer that streams live execution state and camera switching — letting operators compose and run Docker-backed service pipelines visually, and cutting manual operational effort by 40%.",
        tags: ["React Flow", "WebSockets", "Docker"],
      },
      {
        title: "Cross-Platform Video Management System",
        description:
          "Building an Electron desktop client for video management with client-side H.265 (HEVC) decoding and HLS playback, sustaining 100 concurrent streams at under 2s time-to-first-frame.",
        tags: ["Electron", "H.265 / HLS", "Performance"],
      },
      {
        title: "Recording & Streaming Pipeline",
        description:
          "Shipped recording management and playback over an NGINX VOD streaming backend, covering seek, scrubbing, and export across multi-camera deployments.",
        tags: ["NGINX VOD", "HLS", "Media"],
      },
      {
        title: "Build & Bundle Optimization",
        description:
          "Cut initial bundle size by 80% with route-level code splitting and lazy loading, and migrated the codebase to Vite 8 (Rolldown) — making production builds about 7x faster, from ~70s to under 10s.",
        tags: ["Vite", "Rolldown", "Code Splitting"],
      },
      {
        title: "Design System & Component Library",
        description:
          "Established a Storybook-based design system of 40+ components with shared design tokens, variants, and documentation — adopted across 3 applications and cutting new-feature UI build time by about 30%.",
        tags: ["Storybook", "Design System", "Components"],
      },
    ],
  },
];

export type Project = {
  name: string;
  year: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  /** Screenshot shown in the hover preview; null → styled fallback. */
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Atlas",
    year: "2025",
    tagline: "Map a React codebase without running it.",
    description:
      "A static-analysis platform that maps a React codebase without executing it — auto-discovering components, hooks, utilities, stores, and routes across 1,300 files in 36 seconds. AST-based parsing builds dependency graphs and import maps, surfaces circular dependencies and dead code, and powers an interactive dashboard for finding your way around unfamiliar codebases.",
    tech: ["React", "TypeScript", "AST Analysis", "Vite", "Node.js"],
    github: "https://github.com/Yash-Sakre/atlas",
    live: "https://yash-sakre.github.io/atlas/",
    image: "/thumbnails/atlas.png",
  },
  {
    name: "brrt",
    year: "2024",
    tagline: "Type fast, measured to the millisecond.",
    description:
      "A typing trainer with real-time WPM, CPM, accuracy, and per-keystroke mistake tracking that holds sub-16ms keystroke-to-paint latency — one frame at 60fps — at 150+ WPM. Diff-based input evaluation and scoped re-renders repaint only the characters that change. Includes multiple typing modes, configurable test durations, and post-test analytics.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Yash-Sakre/brrt",
    live: "https://brrt-dun.vercel.app",
    image: "/thumbnails/brrt.png",
  },
];

export type Package = {
  /** Package name exactly as published on npm. */
  name: string;
  description: string;
  github?: string;
};

/**
 * Published npm packages. Version and download counts are fetched live from
 * the npm registry (see `lib/npm.ts`), so only static details live here.
 */
export const packages: Package[] = [
  {
    name: "hls-to-mp4",
    description:
      "Download an HLS stream — or any time range of it — as a single MP4, entirely in the browser. Segments are fetched in parallel and remuxed with ffmpeg.wasm, so nothing is uploaded or re-encoded. Handles MPEG-TS and fMP4, wall-clock ranges, and AES-128, and ships with a React hook.",
    github: "https://github.com/Yash-Sakre/hls-to-mp4",
  },
];

export type Credential = {
  title: string;
  detail: string;
  meta: string;
};

export const education: Credential = {
  title: "B.Tech, Computer Science & Engineering",
  detail: "Bhilai Institute of Technology, Durg",
  meta: "2020 — 2024 · CGPA 9.08",
};

export const achievements: Credential[] = [
  {
    title: "Winner — Kavach 2023",
    detail: "National-level hackathon organized by the Government of India — top team out of 1,000+ participants.",
    meta: "National Hackathon",
  },
  {
    title: "Finalist — Smart India Hackathon 2022",
    detail: "Selected for the DRDO problem statement.",
    meta: "SIH 2022",
  },
];

/** "Get in Touch" methods, in display order. */
export const contactMethods = [
  {
    key: "email",
    title: "Email me",
    subtitle: "Quick questions & work",
    href: socials.email,
    external: false,
  },
  {
    key: "linkedin",
    title: "Connect on LinkedIn",
    subtitle: "Let's network",
    href: socials.linkedin,
    external: true,
  },
  {
    key: "github",
    title: "Browse my code",
    subtitle: "Projects & open source",
    href: socials.github,
    external: true,
  },
] as const;

export const availability = {
  replies: "Replies within 24 hours",
  openTo: "Open to full-time & freelance",
} as const;
