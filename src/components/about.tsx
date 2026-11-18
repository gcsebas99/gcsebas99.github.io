import { interests } from "../data/profile";
import { Section } from "./ui";

const About = () => (
  <Section id="about" index="04" title="About">
    <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
      <div className="reveal space-y-5 text-muted leading-relaxed md:text-[17px]">
        <p>
          I've spent more than 15 years building web applications, starting at agencies and digital studios and
          then in long-term product roles at Edmodo and Snap! Mobile, where I led frontend architecture, mentored
          engineers and worked across the stack.
        </p>
        <p>
          After a postgraduate program in Machine Learning and AI, I've been focusing on agent systems: the loop,
          the tools, the permissions, the evals and the traces that turn an LLM into something a team can rely on.
        </p>
        <p>
          I care about craft: clean architecture, thoughtful UX, and code that holds up over time. I like working
          closely with product and design, and owning what I ship.
        </p>
      </div>

      <div className="reveal">
        <h3 className="font-mono text-xs uppercase tracking-widest text-subtle mb-5">Outside the day job</h3>
        <ul className="space-y-4">
          {interests.map((i) => (
            <li key={i.title} className="border-l-2 border-line pl-4 hover:border-accent transition-colors">
              <p className="text-sm font-medium text-fg">{i.title}</p>
              <p className="mt-0.5 text-sm text-subtle leading-relaxed">{i.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export { About };
