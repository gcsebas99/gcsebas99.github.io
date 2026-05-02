import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/class-names";
import UCR from "../assets/experience/ucr.webp";
import OBS from "../assets/experience/obs.png";
import LINKEDIN from "../assets/linkedin.png";
import WHATSAPP from "../assets/whatsapp.png";
import SNAP from "../assets/experience/snap.jpeg";
import EDMODO from "../assets/experience/edmodo.webp";
import JD from "../assets/experience/jd.jpeg";
import POSSIBLE from "../assets/experience/possible.jpg";
import BOSZ from "../assets/experience/bosz.png";
import { Brain, Code, Github, Heart, Link, Mail, MapPinned, MessageCircle, RefreshCw, Users, Zap } from "lucide-react";
import { archivedSkills, langSkills, softSkills, techSkills, techSkillCategories, type Skill, type SkillProficiency } from "../data/skills";
import { portfolio, type Project } from "../data/portfolio";
import { interests} from "../data/interests";
import { InterestsCardStrip } from "./interests-card-strip";
import { useWindowSize } from "../hooks/use-window-size";
import SEBAS from "../assets/sebas.jpg";

type PagesProps = {
  show: boolean;
  page: number;
};

const transition = { duration: 0.4, ease: "easeInOut" };

const proficiencyStyles: Record<SkillProficiency, string> = {
  expert: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  proficient: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  familiar: "bg-slate-600/30 text-slate-400 border-slate-500/25",
};

const softSkillIcons: Record<string, React.ReactNode> = {
  "Critical Thinking": <Brain size={22} />,
  "Communication": <MessageCircle size={22} />,
  "Adaptability": <RefreshCw size={22} />,
  "Empathy": <Heart size={22} />,
  "Team Collaboration": <Users size={22} />,
  "Proactivity": <Zap size={22} />,
};

const Pages: React.FC<PagesProps> = ({ show, page = 0 }) => {
  const { isScreenSizeSmallerThan } = useWindowSize();
  const isMobile = isScreenSizeSmallerThan("md");

  const prevPageRef = useRef(page);
  const direction = page > prevPageRef.current ? 1 : -1;
  prevPageRef.current = page;

  const getVariants = (isMobile: boolean) => ({
    initial: (dir: number) =>
      isMobile
        ? { x: dir > 0 ? "100%" : "-100%", opacity: 0 }
        : { y: dir > 0 ? "100%" : "-100%", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: (dir: number) =>
      isMobile
        ? { x: dir > 0 ? "-100%" : "100%", opacity: 0 }
        : { y: dir > 0 ? "-100%" : "100%", opacity: 0 },
  });

  // ─── Information ──────────────────────────────────────────────────────────

  const renderInformationPage = () => (
    <motion.div
      key={"page-0"}
      custom={direction}
      variants={getVariants(isMobile)}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className="absolute inset-0 flex flex-col text-gray-100"
    >
      <header className="w-full h-16 md:h-20 flex items-end justify-start border-white/15 border-b">
        <h1 className="text-lg md:text-xl font-semibold mb-2 tracking-wide">Information</h1>
      </header>
      <div className="flex-1 overflow-y-auto py-6 px-2">
        <div className="flex flex-col md:flex-row gap-6 bg-white/5 backdrop-blur-sm py-8 px-6 rounded-lg border border-white/10">

          {/* Photo */}
          <div className="flex flex-col items-center md:items-start basis-[22%] shrink-0">
            <div
              className="w-28 sm:w-36 md:w-full h-auto aspect-square mb-4 opacity-0 animate-[slide-down-fade_0.5s_ease-out_forwards]"
              style={{ animationDelay: "50ms", animationFillMode: "forwards" }}
            >
              <img
                src={SEBAS}
                alt="Sebastián G"
                className="w-full h-full object-cover rounded-md shadow-lg ring-1 ring-white/20"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            {[
              // Name & title
              <div>
                <p className="font-bold text-xl text-center md:text-left text-white">Sebastián Gamboa</p>
                <p className="text-sm text-blue-300/80 text-center md:text-left tracking-wider uppercase mt-0.5">Full Stack Engineer · Software Analyst</p>
              </div>,

              // Highlights strip
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {[
                  { label: "15+ yrs experience", cls: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
                  { label: "Frontend-focused", cls: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
                  { label: "ML · AI", cls: "bg-violet-500/10 text-violet-300 border-violet-500/20" },
                  { label: "Remote · Costa Rica", cls: "bg-slate-500/10 text-slate-300 border-slate-500/20" },
                ].map(({ label, cls }) => (
                  <span key={label} className={cn("px-3 py-1 rounded-full text-xs border font-medium", cls)}>{label}</span>
                ))}
              </div>,

              // Bio
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Full-stack engineer with 15+ years of professional experience building web applications — from agency and startup environments to long-term product roles. Currently contributing to Snap! Mobile's next-generation fundraising platform while finishing a Postgraduate Program in Machine Learning and Artificial Intelligence.
              </p>,
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                I specialize in React and modern frontend ecosystems, with solid backend experience across Node.js, GraphQL, and relational databases. I care about craft: clean architecture, thoughtful UX, and code that holds up over time. I enjoy working across the stack, collaborating with product and design teams, and taking ownership of what I build.
              </p>,

              // Contact
              <div className="flex flex-col gap-2.5 pt-1 text-sm text-gray-300">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPinned size={16} className="text-blue-400 shrink-0" />
                  <span>Alajuela, Costa Rica</span>
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail size={16} className="text-blue-400 shrink-0" />
                  <a href="mailto:gcsebas99@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline">gcsebas99@gmail.com</a>
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <img src={WHATSAPP} alt="WhatsApp" className="w-4 h-4 shrink-0" />
                  <a href="https://wa.me/50687307617" className="text-green-400 hover:text-green-300 hover:underline" target="_blank" rel="noopener noreferrer">+506 8730-7617</a>
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <img src={LINKEDIN} alt="LinkedIn" className="w-4 h-4 shrink-0" />
                  <a href="https://www.linkedin.com/in/sebastiangc/" className="text-blue-400 hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/sebastiangc</a>
                </p>
              </div>,
            ].map((child, i) => (
              <div
                key={i}
                className="opacity-0 animate-[slide-down-fade_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${(i + 1) * 80}ms`, animationFillMode: "forwards" }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  // ─── Experience ───────────────────────────────────────────────────────────

  const renderExperiencePage = () => (
    <motion.div
      key={"page-1"}
      custom={direction}
      variants={getVariants(isMobile)}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className="absolute inset-0 flex flex-col text-gray-100"
    >
      <header className="w-full h-16 md:h-20 flex items-end justify-start border-white/15 border-b">
        <h1 className="text-lg md:text-xl font-semibold mb-2 tracking-wide">Experience</h1>
      </header>
      <div className="flex-1 overflow-y-auto py-4 pb-10">

        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-300/70 mb-3 mt-4">Higher Education</h2>
        <div className="flex flex-col md:pl-5 md:border-l md:border-white/10 md:ml-2 gap-y-1">
          {renderEduEntry(OBS, "OBS Business School", "https://www.obsbusiness.school/en/", "Postgraduate Program in Machine Learning and Artificial Intelligence", "2024 – 2025")}
          {renderEduEntry(UCR, "University of Costa Rica", "https://www.ucr.ac.cr/", "Bachelor's Degree in Computer Science", "2006 – 2011")}
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-300/70 mb-3 mt-8">Work History</h2>
        <div className="flex flex-col md:pl-5 md:border-l md:border-white/10 md:ml-2 gap-y-1">
          {renderWorkEntry(
            SNAP, "Snap! Mobile, Inc.", "https://www.snapraise.com/",
            [{ role: "Full Stack Engineer (contractor)", period: "May 2022 – Present" }],
            "Building new web applications as part of Snap! Raise's next-generation fundraising ecosystem. Responsible for React-based frontend experiences, Node/GraphQL services, and data migrations between platforms (Rails, MySQL). Works closely with engineering and product teams to shape requirements and deliver polished solutions."
          )}
          {renderWorkEntry(
            EDMODO, "Edmodo Inc.", "https://en.wikipedia.org/wiki/Edmodo",
            [
              { role: "Software Engineer · Tech Lead (contractor)", period: "Jun 2020 – May 2022" },
              { role: "Software Engineer (contractor)", period: "Jun 2016 – Jun 2020" },
            ],
            "Six years at one of the world's largest education platforms. As Tech Lead, defined and maintained the frontend stack (React, Next.js), evaluated new tooling, mentored engineers, and helped grow both technical quality and team cohesion. As a Software Engineer, owned feature delivery across teacher, student, and admin portals — from analysis and estimation through development, testing, and production support."
          )}
          {renderWorkEntry(
            JD, "Janeiro Digital", "https://www.janeirodigital.com/",
            [{ role: "Senior Software Engineer", period: "Apr 2015 – Apr 2016" }],
            "Delivered full-stack web application features for digital product clients. Contributed across the stack — from REST API integrations to building and refining frontend interfaces."
          )}
          {renderWorkEntry(
            POSSIBLE, "POSSIBLE (now VML)", "https://www.vml.com/",
            [{ role: "Senior Software Developer", period: "Apr 2013 – Apr 2015" }],
            "Built interactive campaigns and rich web applications for major international brands at a leading global digital advertising agency. Focused on frontend development, animations, and cross-browser compatibility."
          )}
          {renderWorkEntry(
            BOSZ, "BoszDigital (now Publicis Production)", "https://www.prodigious.com/",
            [{ role: "Creative Engineer, Tech", period: "May 2012 – Apr 2013" }],
            "Developed rich media advertising and interactive web experiences at a digital production studio. Combined creative direction with technical execution to deliver marketing campaigns for global clients."
          )}
          {renderWorkEntry(
            null, "Sweneno S.A. (defunct)", null,
            [{ role: "Junior Web Developer", period: "Feb 2010 – Apr 2012" }],
            "First professional role. Developed websites and web applications for local clients, building foundational skills in frontend and server-side development."
          )}
        </div>
      </div>
    </motion.div>
  );

  const renderEduEntry = (
    logo: string, org: string, url: string,
    degree: string, period: string
  ) => (
    <div className="relative flex flex-col md:flex-row gap-y-3 md:gap-x-4 items-center md:items-start text-center md:text-left p-4 rounded-lg hover:bg-white/5 transition-colors duration-200">
      <div className="hidden md:block absolute -left-[calc(1.25rem+1px)] top-6 w-2.5 h-2.5 rounded-full bg-blue-500/70 ring-2 ring-blue-500/20 ml-[-4px]" />
      <div className="shrink-0 flex justify-center">
        <img src={logo} alt={org} className="w-14 md:w-16 rounded-md object-contain" />
      </div>
      <div className="flex flex-col gap-0.5 items-center md:items-start">
        <h3 className="text-sm md:text-base font-semibold text-white">{degree}</h3>
        <p className="text-sm text-gray-300">
          {org}
          <a href={url} target="_blank" rel="noopener noreferrer" className="ml-1.5 text-blue-400 hover:text-blue-300 inline-block align-middle">
            <Link size={12} className="inline" />
          </a>
        </p>
        <p className="text-xs text-gray-500">{period}</p>
      </div>
    </div>
  );

  const renderWorkEntry = (
    logo: string | null, company: string, url: string | null,
    roles: { role: string; period: string }[],
    description: string
  ) => (
    <div className="relative flex flex-col md:flex-row gap-y-3 md:gap-x-4 items-start text-center md:text-left p-4 rounded-lg hover:bg-white/5 transition-colors duration-200">
      <div className="hidden md:block absolute -left-[calc(1.25rem+1px)] top-6 w-2.5 h-2.5 rounded-full bg-white/20 ring-2 ring-white/10 ml-[-4px]" />
      {logo ? (
        <div className="w-full md:w-auto shrink-0 flex justify-center">
          <img src={logo} alt={company} className="max-w-14 md:max-w-16 rounded-md object-contain" />
        </div>
      ) : (
        <div className="hidden md:block w-16 shrink-0" />
      )}
      <div className="flex-1 flex flex-col gap-1 items-center md:items-start">
        <h3 className="text-sm md:text-base font-semibold text-white">
          {company}
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="ml-1.5 text-blue-400 hover:text-blue-300 inline-block align-middle">
              <Link size={12} className="inline" />
            </a>
          )}
        </h3>
        {roles.map(({ role, period }, i) => (
          <p key={i} className="text-xs text-gray-400">
            <span className="text-gray-300">{role}</span> · {period}
          </p>
        ))}
        <p className="text-xs text-gray-400 leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  );

  // ─── Skills ───────────────────────────────────────────────────────────────

  const renderProficiencyBadge = (proficiency?: SkillProficiency) => {
    if (!proficiency) return null;
    return (
      <span className={cn("text-[9px] px-1.5 py-0.5 rounded border font-medium leading-none", proficiencyStyles[proficiency])}>
        {proficiency.charAt(0).toUpperCase() + proficiency.slice(1)}
      </span>
    );
  };

  const renderTechSkillCard = (skill: Skill, index: number) => (
    <div
      key={index}
      className="relative flex flex-col items-center gap-2 p-3 py-7 md:py-4 bg-black/40 rounded-lg border border-white/10 hover:border-white/20 hover:bg-black/60 transition-all duration-300"
    >
      <div className="absolute top-1.5 right-1.5">
        {renderProficiencyBadge(skill.proficiency)}
      </div>
      <img src={skill.logo} alt={skill.name} className="w-9 h-9 object-contain mt-1" />
      <p className="text-center text-white text-[11px] font-medium leading-tight">{skill.name}</p>
      {skill.description && (
        <p className="text-[10px] text-gray-500 text-center leading-tight">{skill.description}</p>
      )}
    </div>
  );

  const renderSkillsPage = () => {
    const formatSkills = techSkills.filter(s => s.category === "formats");

    return (
      <motion.div
        key={"page-2"}
        custom={direction}
        variants={getVariants(isMobile)}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        className="absolute inset-0 flex flex-col text-gray-100"
      >
        <header className="w-full h-16 md:h-20 flex items-end justify-start border-white/15 border-b">
          <h1 className="text-lg md:text-xl font-semibold mb-2 tracking-wide">Skills</h1>
        </header>
        <div className="flex-1 overflow-y-auto pt-4 pb-10">

          {/* Proficiency legend */}
          <div className="flex flex-wrap gap-3 mb-6 mt-2">
            {(["expert", "proficient", "familiar"] as SkillProficiency[]).map(p => (
              <span key={p} className={cn("text-xs px-2.5 py-1 rounded border font-medium", proficiencyStyles[p])}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </span>
            ))}
          </div>

          {/* Tech skill categories */}
          {techSkillCategories.map(({ key, label, description }) => {
            const skills = techSkills.filter(s => s.category === key);
            if (!skills.length) return null;
            return (
              <div key={key} className="mb-7">
                <div className="mb-2">
                  <h2 className="text-sm font-semibold text-white/90">{label}</h2>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                  {skills.map((skill, i) => renderTechSkillCard(skill, i))}
                </div>
              </div>
            );
          })}

          {/* Formats */}
          {formatSkills.length > 0 && (
            <div className="mb-7">
              <h2 className="text-sm font-semibold text-white/90 mb-1">Formats & Standards</h2>
              <div className="flex flex-wrap gap-2">
                {formatSkills.map((s, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 bg-black/40 rounded-md border border-white/10 text-xs text-gray-300">
                    <img src={s.logo} alt={s.name} className="w-4 h-4 object-contain" />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Soft skills */}
          <div className="mb-7">
            <h2 className="text-sm font-semibold text-white/90 mb-1">Soft Skills</h2>
            <p className="text-xs text-gray-500 mb-3">The non-technical side of building good software</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {softSkills.map((skill, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-black/40 rounded-lg border border-white/10">
                  <div className="text-blue-400/70 mt-0.5 shrink-0">
                    {softSkillIcons[skill.name] ?? <Code size={22} />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{skill.name}</p>
                    {skill.description && <p className="text-xs text-gray-400 leading-snug mt-0.5">{skill.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-7">
            <h2 className="text-sm font-semibold text-white/90 mb-3">Languages</h2>
            <div className="flex flex-wrap gap-3">
              {langSkills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center gap-1 px-5 py-3 bg-black/40 rounded-lg border border-white/10 min-w-[90px]">
                  <p className="text-sm font-medium text-white">{skill.name}</p>
                  <p className="text-xs text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Archived */}
          <div className="mb-7">
            <h2 className="text-sm font-semibold text-white/90 mb-1">Archived Knowledge</h2>
            <p className="text-xs text-gray-500 mb-3">Technologies I've worked with but no longer use actively</p>
            <div className="flex flex-wrap gap-2">
              {archivedSkills.map((s, i) => (
                <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 bg-black/30 rounded-md border border-white/8 text-xs text-gray-500">
                  <img src={s.logo} alt={s.name} className="w-4 h-4 object-contain opacity-60" />
                  {s.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    );
  };

  // ─── Portfolio ─────────────────────────────────────────────────────────────

  const getProjectTags = (project: Project): string[] => {
    const techDetail = project.details?.find(d =>
      ["tech", "frontend", "backend"].includes(d.name.toLowerCase())
    );
    if (!techDetail) return [];
    return techDetail.description.split(",").map(t => t.trim()).filter(Boolean);
  };

  const renderPortfolioCard = (project: Project, index: number) => {
    const tags = getProjectTags(project);
    const otherDetails = project.details?.filter(d =>
      !["tech", "frontend", "backend"].includes(d.name.toLowerCase())
    ) ?? [];

    return (
      <div
        key={index}
        className="flex flex-col bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 hover:bg-white/8 transition-all duration-300 group"
      >
        <div className="overflow-hidden aspect-[16/10] bg-black/30">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="text-base font-semibold text-white">{project.name}</h3>
          <p className="text-sm text-gray-300 leading-relaxed flex-1">{project.description}</p>

          {/* Tech tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-300 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Other details (Date, etc.) */}
          {otherDetails.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {otherDetails.map((d, i) => (
                <p key={i} className="text-xs text-gray-500">
                  <span className="text-gray-400">{d.name}:</span> {d.description}
                </p>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-4 pt-1">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                <Github size={13} /> GitHub
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                <Link size={13} /> Live site
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderPortfolioPage = () => (
    <motion.div
      key={"page-3"}
      custom={direction}
      variants={getVariants(isMobile)}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className="absolute inset-0 flex flex-col text-gray-100"
    >
      <header className="w-full h-16 md:h-20 flex items-end justify-start border-white/15 border-b">
        <h1 className="text-lg md:text-xl font-semibold mb-2 tracking-wide">Portfolio</h1>
      </header>
      <div className="flex-1 overflow-y-auto py-6 px-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolio.map((project, index) => renderPortfolioCard(project, index))}
        </div>
      </div>
    </motion.div>
  );

  // ─── Interests ─────────────────────────────────────────────────────────────

  const renderInterestsPage = () => (
    <motion.div
      key={"page-4"}
      custom={direction}
      variants={getVariants(isMobile)}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className="absolute inset-0 flex flex-col text-gray-100"
    >
      <header className="w-full h-16 md:h-20 flex items-end justify-start border-white/15 border-b">
        <h1 className="text-lg md:text-xl font-semibold mb-2 tracking-wide">Interests</h1>
      </header>
      <div className="flex-1 overflow-y-auto py-4">
        <p className="italic select-none text-base sm:text-lg leading-7 sm:leading-9 text-center px-2 sm:px-12 lg:px-16 py-10 text-gray-300/80">
          My professional journey has been shaped by a deep curiosity for how technology intersects with human behavior, learning, and decision-making.
        </p>
        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth">
          {renderInterestsCards()}
        </div>
        <p className="italic select-none text-base sm:text-lg leading-7 sm:leading-9 text-center px-2 sm:px-12 lg:px-16 pt-12 pb-20 text-gray-300/80">
          These interests keep me curious, motivated, and always improving — both as a developer and as someone who believes technology should empower people to do more, think deeper, and live better.
        </p>
      </div>
    </motion.div>
  );

  const renderInterestsCards = () => {
    const interests3 = interests.slice(0, 3);
    const interests2 = interests.slice(3);
    return (
      <div className="flex flex-col w-full gap-y-4">
        {isMobile ?
          <InterestsCardStrip interests={interests} />
        :
          <>
            <InterestsCardStrip interests={interests3} />
            <InterestsCardStrip interests={interests2} />
          </>
        }
      </div>
    );
  };

  const pages = [
    renderInformationPage(),
    renderSkillsPage(),
    renderPortfolioPage(),
    renderExperiencePage(),
    renderInterestsPage(),
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="pages-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="absolute top-0 z-20 h-[100dvh] w-full flex justify-center"
        >
          <div
            className={cn(
              "relative h-full w-full max-w-[1024px]",
              "ml-[64px] mr-[8px]",
              "sm:ml-[86px] sm:mr-[16px]",
              "md:ml-[96px] md:mr-[16px]",
              "xl:mx-auto",
              "overflow-hidden"
            )}
          >
            <AnimatePresence mode="wait" custom={direction}>
              {pages[page]}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Pages };
