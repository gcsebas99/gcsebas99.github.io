/**
 * core     — daily drivers, deep experience
 * working  — used in real projects, comfortable
 * familiar — used before, would ramp up quickly
 */
type SkillLevel = "core" | "working" | "familiar";

type Skill = { name: string; level: SkillLevel };

type SkillGroup = {
  key: string;
  label: string;
  description: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    key: "ai",
    label: "AI & Agents",
    description: "Agent harnesses, LLM integration, evaluation and classic ML",
    skills: [
      { name: "AI agent harnesses", level: "working" },
      { name: "Claude API / Anthropic SDK", level: "working" },
      { name: "LLM evals", level: "working" },
      { name: "Prompt & context engineering", level: "working" },
      { name: "MCP", level: "working" },
      { name: "LangGraph", level: "working" },
      { name: "n8n", level: "working" },
      { name: "PyTorch", level: "familiar" },
      { name: "TensorFlow", level: "familiar" },
      { name: "scikit-learn", level: "familiar" },
      { name: "OpenCV", level: "familiar" },
      { name: "Pandas · NumPy", level: "familiar" },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    description: "UI architecture, styling and browser-side logic",
    skills: [
      { name: "React", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "JavaScript", level: "core" },
      { name: "HTML & CSS", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "Responsive design", level: "core" },
      { name: "Next.js", level: "working" },
      { name: "Redux", level: "working" },
      { name: "Zustand", level: "working" },
      { name: "shadcn/ui", level: "working" },
      { name: "Radix", level: "working" },
      { name: "Storybook", level: "working" },
      { name: "Accessibility", level: "working" },
    ],
  },
  {
    key: "backend",
    label: "Backend & APIs",
    description: "Services, APIs, validation and data access",
    skills: [
      { name: "Node.js", level: "core" },
      { name: "GraphQL", level: "core" },
      { name: "REST APIs", level: "core" },
      { name: "Express", level: "core" },
      { name: "Python", level: "working" },
      { name: "FastAPI", level: "working" },
      { name: "Fastify", level: "working" },
      { name: "Hono", level: "working" },
      { name: "Zod", level: "working" },
      { name: "Pydantic", level: "working" },
      { name: "Prisma", level: "working" },
      { name: "Flask", level: "working" },
      { name: "SQLAlchemy", level: "working" },
      { name: "WebSockets", level: "working" },
      { name: "PHP", level: "familiar" },
    ],
  },
  {
    key: "data",
    label: "Databases",
    description: "Relational and document stores",
    skills: [
      { name: "MySQL", level: "core" },
      { name: "PostgreSQL", level: "working" },
      { name: "MongoDB", level: "working" },
    ],
  },
  {
    key: "tooling",
    label: "Tooling & Delivery",
    description: "Testing, CI/CD, build tooling and deployment",
    skills: [
      { name: "Git", level: "core" },
      { name: "GitHub Actions", level: "working" },
      { name: "GitHub Apps & webhooks", level: "working" },
      { name: "Docker", level: "working" },
      { name: "Vite", level: "working" },
      { name: "Vitest", level: "working" },
      { name: "Jest", level: "working" },
      { name: "React Testing Library", level: "working" },
      { name: "pnpm monorepos", level: "working" },
      { name: "ESLint · Biome", level: "working" },
      { name: "Render", level: "working" },
      { name: "Jira", level: "working" },
      { name: "AWS S3", level: "familiar" },
    ],
  },
  {
    key: "other",
    label: "Other languages",
    description: "Used in specific contexts or platforms",
    skills: [
      { name: "Java", level: "working" },
      { name: "C#", level: "familiar" },
      { name: "Swift", level: "familiar" },
      { name: "Unity", level: "familiar" },
    ],
  },
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Professional (B2+)" },
];

const archivedSkills = [
  "C",
  "C++",
  "Assembly",
  "Laravel",
  "Cypress",
  "jQuery",
  "Bootstrap",
  "Backbone.js",
  "Facebook API",
  "Google Maps API",
];

export { skillGroups, languages, archivedSkills, type Skill, type SkillGroup, type SkillLevel };
