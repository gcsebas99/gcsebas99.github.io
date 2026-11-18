import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import { useReveal } from "./hooks/use-reveal";
import { SiteHeader } from "./components/site-header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { About } from "./components/about";
import { Contact } from "./components/contact";

const App = () => {
  useReveal();

  return (
    <>
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent-strong focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
      </main>
      <Contact />
    </>
  );
};

export { App };
