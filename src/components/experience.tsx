import { ArrowUpRight } from "lucide-react";
import { education, jobs, type Job } from "../data/experience";
import { Section, Tag } from "./ui";

/** Roles are listed newest first; span from the oldest start to the newest end. */
const overallPeriod = (job: Job) => {
  const start = job.roles[job.roles.length - 1].period.split(" – ")[0];
  const end = job.roles[0].period.split(" – ")[1];
  return `${start} – ${end}`;
};

const Logo = ({ src, alt }: { src?: string; alt: string }) =>
  src ? (
    <img src={src} alt="" aria-hidden className="w-10 h-10 rounded-md object-contain bg-white/95 p-1 shrink-0" title={alt} />
  ) : (
    <div className="w-10 h-10 rounded-md border border-line bg-surface-2 shrink-0 grid place-items-center font-mono text-xs text-subtle">
      {alt.charAt(0)}
    </div>
  );

const OrgName = ({ name, url }: { name: string; url?: string }) =>
  url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 hover:text-accent transition-colors"
    >
      {name}
      <ArrowUpRight size={14} className="text-subtle group-hover:text-accent" />
    </a>
  ) : (
    <span>{name}</span>
  );

const Experience = () => (
  <Section id="experience" index="02" title="Experience" intro="15+ years across agencies, digital studios and long-term product teams.">
    <ol className="relative">
      {jobs.map((job) => (
        <li
          key={job.company}
          className="reveal grid md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-8 border-b border-line last:border-b-0 first:pt-0"
        >
          <p className="font-mono text-xs text-subtle md:pt-3">{overallPeriod(job)}</p>
          <div className="flex gap-4">
            <Logo src={job.logo} alt={job.company} />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-fg leading-tight">
                <OrgName name={job.company} url={job.url} />
              </h3>
              <ul className="mt-1.5 space-y-0.5">
                {job.roles.map((r) => (
                  <li key={r.title} className="text-sm text-muted">
                    {r.title}
                    {job.roles.length > 1 && (
                      <span className="block sm:inline font-mono text-xs text-subtle">
                        <span className="hidden sm:inline"> · </span>
                        {r.period}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted leading-relaxed max-w-3xl">{job.description}</p>
              {job.stack && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>

    <h3 className="reveal mt-16 mb-6 font-mono text-xs uppercase tracking-widest text-subtle">Education</h3>
    <div className="grid gap-4 md:grid-cols-2">
      {education.map((e) => (
        <div key={e.institution} className="reveal flex gap-4 rounded-lg border border-line bg-surface/60 p-5">
          <Logo src={e.logo} alt={e.institution} />
          <div>
            <p className="font-mono text-xs text-subtle">{e.period}</p>
            <h4 className="mt-1 font-semibold text-fg leading-snug">{e.degree}</h4>
            <p className="mt-1 text-sm text-muted">
              <OrgName name={e.institution} url={e.url} />
            </p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export { Experience };
