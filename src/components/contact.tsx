import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "../data/profile";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "in/sebastiangc", href: profile.links.linkedin, icon: Linkedin },
  { label: "GitHub", value: "gcsebas99", href: profile.links.github, icon: Github },
  { label: "WhatsApp", value: profile.whatsappLabel, href: profile.links.whatsapp, icon: MessageCircle },
];

const Contact = () => (
  <footer id="contact" className="relative border-t border-line overflow-hidden">
    <div
      className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent-strong/10 blur-[120px] pointer-events-none"
      aria-hidden
    />
    <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28">
      <div className="reveal max-w-2xl">
        <p className="font-mono text-xs text-accent mb-3">
          05 <span className="text-subtle">/</span> contact
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-fg">Let's build something.</h2>
        <p className="mt-5 text-muted leading-relaxed md:text-lg">
          I'm open to new opportunities: full-stack, frontend-leaning, or AI/agent engineering roles, remote from
          Costa Rica. The fastest way to reach me is email.
        </p>
      </div>

      <ul className="reveal mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map(({ label, value, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-line bg-surface/60 p-4 hover:border-accent-line hover:bg-surface-2 transition-colors"
            >
              <Icon size={18} className="text-accent shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-subtle">{label}</span>
                <span className="block text-sm text-fg truncate">{value}</span>
              </span>
              <ArrowUpRight size={15} className="text-subtle group-hover:text-accent transition-colors" />
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-20 pt-6 border-t border-line flex flex-col sm:flex-row gap-2 justify-between text-xs text-subtle">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono">React · TypeScript · Tailwind CSS · Vite</p>
      </div>
    </div>
  </footer>
);

export { Contact };
