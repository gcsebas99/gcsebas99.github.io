import OPSPILOT_IMAGE from "../assets/portfolio/opspilot.jpg";
import DIFFWISE_IMAGE from "../assets/portfolio/diffwise.jpg";
import SYUZHET_IMAGE from "../assets/portfolio/syuzhet.png";
import UI_SPEC_MCP_IMAGE from "../assets/portfolio/ui-spec-mcp.jpg";

type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "demo";
};

type FeaturedProject = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  period: string;
  /** Screenshot; when missing, a styled placeholder is rendered. */
  image?: string;
  links: ProjectLink[];
  /** Shown instead of a repo link when the code isn't public. */
  note?: string;
};

type OtherProject = {
  name: string;
  description: string;
  stack: string[];
  period: string;
  links: ProjectLink[];
};

const featuredProjects: FeaturedProject[] = [
  {
    name: "OpsPilot",
    tagline: "Incident-triage agent built to make harness engineering visible",
    description:
      "An alert arrives, the agent investigates a sandboxed e-commerce stack (metrics, logs, deploys, config), finds the root cause and proposes a fix. Destructive actions wait for human approval. Every step is traced, approvals go to a tamper-evident audit log, and evals measure how reliably it gets there.",
    highlights: [
      "Two agent loops, hand-written and LangGraph, that send identical model requests",
      "Permissions, guardrails, prompt-injection cases and human-in-the-loop approvals",
      "Eval suite with trajectory, outcome, budget and LLM-judge graders, gated in CI",
      "Record/replay model client, so the public demo runs for $0 with no API key",
    ],
    stack: ["Python", "Claude API", "LangGraph", "FastAPI", "MongoDB", "Pydantic", "Render"],
    period: "2026",
    image: OPSPILOT_IMAGE,
    links: [
      { label: "Live demo", href: "https://opspilot-e8ce.onrender.com", kind: "demo" },
      { label: "GitHub", href: "https://github.com/gcsebas99/opspilot", kind: "github" },
    ],
  },
  {
    name: "Diffwise",
    tagline: "AI agent that reviews pull requests against repo-defined rules",
    description:
      "Teams keep review rules in people's heads. Diffwise reads them from a .review-rules.yaml in the repo, reviews each PR with inline comments and a summary, and computes the verdict in code, so a blocking finding fails the check and branch protection can stop the merge.",
    highlights: [
      "One core engine shipped three ways: local CLI, GitHub Action and GitHub App",
      "Each rule is checked by code or by the model; the model never decides the verdict",
      "54/54 eval trials passed, at about $0.0006 per model review",
      "Hardened against prompt injection from PR content",
    ],
    stack: ["TypeScript", "Node.js", "Claude API", "GitHub Actions", "GitHub Apps", "Hono", "Zod", "Vitest"],
    period: "2026",
    image: DIFFWISE_IMAGE,
    links: [
      { label: "Demo PRs", href: "https://github.com/gcsebas99/diffwise-demo/pulls", kind: "demo" },
      { label: "GitHub", href: "https://github.com/gcsebas99/diffwise", kind: "github" },
    ],
  },
  {
    name: "Syuzhet",
    tagline: "Narrative design and lore management for RPG and narrative games",
    description:
      "A tool for designing, writing and simulating game stories before any engine code is written. It combines a structured story editor, a lore system and an interactive simulator for testing branching paths and progression logic. Each project lives in its own GitHub repository, so stories are versioned and collaborative.",
    highlights: [
      "Edit Mode for locations, characters, chapters, actions, catalogs and lore",
      "Play Mode that simulates the story and validates progression conditions",
      "\"Magic Notebook\": write prose freely and let AI extract the structure",
      "pnpm monorepo with shared models, a condition engine and a design system",
    ],
    stack: ["TypeScript", "React", "Fastify", "WebSockets", "Zustand", "Zod", "Claude API", "pnpm"],
    period: "2025 – 2026",
    image: SYUZHET_IMAGE,
    links: [],
    note: "Private repository",
  },
  {
    name: "Web UI Component Spec — MCP Server",
    tagline: "Gives AI coding assistants a behavioral reference for UI components",
    description:
      "An MCP server that exposes the Web UI Component Specification to coding agents: component specs, test scenarios, accessibility requirements and a step-by-step build guide for web UI component libraries.",
    highlights: [
      "Spec-driven development: agents build against explicit behavior, not guesses",
      "Accessibility requirements and test scenarios included for each component",
    ],
    stack: ["Python", "MCP", "Spec-driven development", "Accessibility"],
    period: "2026",
    image: UI_SPEC_MCP_IMAGE,
    links: [
      { label: "GitHub", href: "https://github.com/gcsebas99/web-ui-component-spec-mcp", kind: "github" },
    ],
  },
];

const otherProjects: OtherProject[] = [
  {
    name: "Emotion analytics for advertising",
    description:
      "Final master's project: an app shows an ad, records the viewer's facial expressions, and an emotion model turns them into reaction data for marketers.",
    stack: ["React", "Flask", "TensorFlow", "PyTorch", "OpenCV", "MediaPipe"],
    period: "2024 – 2025",
    links: [{ label: "GitHub", href: "https://github.com/gcsebas99/tfm-api-v2", kind: "github" }],
  },
  {
    name: "RPN Calculator",
    description:
      "Terminal-style reverse Polish notation calculator with multiple visual themes, built for a job application.",
    stack: ["React", "Sass"],
    period: "2022",
    links: [
      { label: "Live", href: "https://gcsebas99.github.io/rpn-ex/", kind: "demo" },
      { label: "GitHub", href: "https://github.com/gcsebas99/rpn-ex", kind: "github" },
    ],
  },
  {
    name: "This portfolio",
    description: "Single-page portfolio, deployed to GitHub Pages by a GitHub Actions workflow.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    period: "2026",
    links: [{ label: "GitHub", href: "https://github.com/gcsebas99/gcsebas99.github.io", kind: "github" }],
  },
];

export { featuredProjects, otherProjects, type FeaturedProject, type OtherProject, type ProjectLink };
