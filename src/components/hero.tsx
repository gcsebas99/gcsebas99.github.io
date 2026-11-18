import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import SEBAS from "../assets/sebas.jpg";

const stats = [
  { value: "15+", label: "years building software" },
  { value: "6 yrs", label: "at Edmodo, incl. tech lead" },
  { value: "PG", label: "in Machine Learning & AI" },
];

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
    <div
      className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-accent-strong/15 blur-[120px] pointer-events-none"
      aria-hidden
    />

    <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        <div className="reveal">
          <img
            src={SEBAS}
            alt={`Portrait of ${profile.name}`}
            className="md:hidden w-20 h-20 rounded-full object-cover ring-1 ring-line-strong mb-6"
          />
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-muted mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            {profile.availability}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-fg leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm md:text-base text-accent">
            {profile.role} <span className="text-subtle">·</span> AI agent systems
          </p>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
            I build web products end to end with React and TypeScript, backed by Node.js, GraphQL and
            Python. Lately I've been building the harnesses around LLM agents: tools, permissions, evals
            and observability, so a team can trust what the agent does.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent-strong px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-strong/90 transition-colors"
            >
              View projects <ArrowDown size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm font-medium text-fg hover:bg-surface-2 transition-colors"
            >
              <Mail size={15} /> Get in touch
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-md text-muted hover:text-fg hover:bg-surface-2 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-md text-muted hover:text-fg hover:bg-surface-2 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-subtle">
            <MapPin size={14} /> {profile.location} · Remote
          </p>
        </div>

        <div className="reveal hidden md:block">
          <div className="relative w-64 lg:w-72">
            <div className="absolute -inset-3 rounded-2xl border border-line" aria-hidden />
            <img
              src={SEBAS}
              alt={`Portrait of ${profile.name}`}
              className="relative w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-line-strong grayscale-[15%]"
            />
          </div>
        </div>
      </div>

      <ul className="reveal mt-16 md:mt-20 grid grid-cols-3 max-w-2xl border-t border-line pt-6 gap-4">
        {stats.map((s) => (
          <li key={s.label}>
            <p className="text-2xl md:text-3xl font-semibold text-fg tracking-tight">{s.value}</p>
            <p className="mt-1 text-xs md:text-sm text-subtle leading-snug">{s.label}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export { Hero };
