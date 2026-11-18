import type { ReactNode } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "../utils/class-names";
import type { ProjectLink } from "../data/portfolio";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, index, title, intro, children, className }: SectionProps) => (
  <section id={id} className={cn("py-20 md:py-28 border-t border-line", className)}>
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <header className="reveal mb-10 md:mb-14 max-w-2xl">
        <p className="font-mono text-xs text-accent mb-3">
          {index} <span className="text-subtle">/</span> {id}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-fg">{title}</h2>
        {intro && <p className="mt-4 text-muted leading-relaxed">{intro}</p>}
      </header>
      {children}
    </div>
  </section>
);

const Tag = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center font-mono text-[11px] leading-none px-2 py-1.5 rounded",
      "border border-line bg-surface-2 text-muted",
      className,
    )}
  >
    {children}
  </span>
);

const ExternalLink = ({ link }: { link: ProjectLink }) => (
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-fg transition-colors"
  >
    {link.kind === "github" ? <Github size={15} /> : null}
    {link.label}
    <ArrowUpRight
      size={14}
      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </a>
);

export { Section, Tag, ExternalLink };
