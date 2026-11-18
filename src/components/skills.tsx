import { cn } from "../utils/class-names";
import { archivedSkills, languages, skillGroups, type SkillLevel } from "../data/skills";
import { Section } from "./ui";

const levelStyles: Record<SkillLevel, string> = {
  core: "border-accent/45 bg-accent/15 text-white",
  working: "border-line bg-surface-2 text-muted",
  familiar: "border-line/70 bg-transparent text-subtle",
};

const levelLabels: Record<SkillLevel, string> = {
  core: "Core — daily drivers",
  working: "Working — used in real projects",
  familiar: "Familiar",
};

const levelOrder: SkillLevel[] = ["core", "working", "familiar"];

const Skills = () => (
  <Section id="skills" index="03" title="Skills" intro="Grouped by area. Highlighted skills are the ones I use every day.">
    <div className="reveal mb-10 flex flex-wrap gap-x-6 gap-y-2">
      {levelOrder.map((lvl) => (
        <span key={lvl} className="inline-flex items-center gap-2 text-xs text-subtle">
          <span className={cn("inline-block w-3 h-3 rounded-sm border", levelStyles[lvl])} />
          {levelLabels[lvl]}
        </span>
      ))}
    </div>

    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      {skillGroups.map((group) => {
        const sorted = [...group.skills].sort((a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level));
        return (
          <div key={group.key} className="reveal">
            <h3 className="font-semibold text-fg">{group.label}</h3>
            <p className="mt-0.5 text-sm text-subtle">{group.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {sorted.map((s) => (
                <li
                  key={s.name}
                  className={cn("rounded-md border px-2.5 py-1.5 text-[13px] leading-none", levelStyles[s.level])}
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>

    <div className="reveal mt-14 grid gap-8 md:grid-cols-2 border-t border-line pt-10">
      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-subtle mb-4">Languages</h3>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {languages.map((l) => (
            <li key={l.name} className="text-sm">
              <span className="text-fg">{l.name}</span> <span className="text-subtle">· {l.level}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-subtle mb-4">Previously worked with</h3>
        <p className="text-sm text-subtle leading-relaxed">{archivedSkills.join(" · ")}</p>
      </div>
    </div>
  </Section>
);

export { Skills };
