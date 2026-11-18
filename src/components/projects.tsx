import { Check, Lock } from "lucide-react";
import { cn } from "../utils/class-names";
import { featuredProjects, otherProjects, type FeaturedProject } from "../data/portfolio";
import { ExternalLink, Section, Tag } from "./ui";

const ProjectImage = ({ project }: { project: FeaturedProject }) => (
  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface-2">
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
      />
    ) : (
      <div className="absolute inset-0 grid place-items-center">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
        <p className="relative font-mono text-sm text-subtle">{project.name}</p>
      </div>
    )}
  </div>
);

const FeaturedCard = ({ project, index }: { project: FeaturedProject; index: number }) => {
  const flipped = index % 2 === 1;
  return (
    <article
      className={cn(
        "reveal group grid gap-6 md:gap-10 lg:grid-cols-[1.15fr_1fr] items-start",
        "rounded-xl border border-line bg-surface/60 p-4 sm:p-6 md:p-8",
        "hover:border-line-strong transition-colors",
      )}
    >
      <div className={cn("lg:sticky lg:top-24", flipped && "lg:order-2")}>
        <ProjectImage project={project} />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-3 font-mono text-xs text-subtle">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.period}</span>
          {project.note && (
            <span className="inline-flex items-center gap-1">
              <Lock size={11} /> {project.note}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">{project.name}</h3>
        <p className="mt-1.5 text-accent/90 text-[15px]">{project.tagline}</p>
        <p className="mt-4 text-sm md:text-[15px] text-muted leading-relaxed">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-muted leading-snug">
              <Check size={15} className="text-accent shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-5">
            {project.links.map((l) => (
              <ExternalLink key={l.href} link={l} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => (
  <Section
    id="projects"
    index="01"
    title="Selected work"
    intro="Recent projects, mostly about making AI agents dependable: clear loops, explicit permissions, and evals that show how reliable they really are."
  >
    <div className="flex flex-col gap-6 md:gap-8">
      {featuredProjects.map((p, i) => (
        <FeaturedCard key={p.name} project={p} index={i} />
      ))}
    </div>

    <h3 className="reveal mt-20 mb-6 font-mono text-xs uppercase tracking-widest text-subtle">Other work</h3>
    <div className="grid gap-4 md:grid-cols-3">
      {otherProjects.map((p) => (
        <article
          key={p.name}
          className="reveal flex flex-col rounded-lg border border-line bg-surface/60 p-5 hover:border-line-strong transition-colors"
        >
          <p className="font-mono text-xs text-subtle">{p.period}</p>
          <h4 className="mt-2 font-semibold text-fg">{p.name}</h4>
          <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {p.links.map((l) => (
              <ExternalLink key={l.href} link={l} />
            ))}
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export { Projects };
