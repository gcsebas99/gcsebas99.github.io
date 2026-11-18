import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/class-names";
import { useActiveSection } from "../hooks/use-reveal";
import { profile } from "../data/profile";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
const sectionIds = navItems.map((n) => n.id);

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const onActive = useCallback((id: string) => setActive(id), []);
  useActiveSection(sectionIds, onActive);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-bg/85 backdrop-blur-md border-b border-line" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-fg" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-8 h-8 rounded-md border border-accent-line bg-accent-soft font-mono text-xs font-semibold text-accent">
            SG
          </span>
          <span className="text-sm font-medium tracking-tight hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm transition-colors",
                active === item.id ? "text-fg bg-surface-2" : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-muted hover:text-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-5 pb-4 pt-2" aria-label="Main mobile">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "block py-2.5 text-base",
                active === item.id ? "text-fg" : "text-muted",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export { SiteHeader };
