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
import { Github, Link, Mail, MapPinned } from "lucide-react";
import { archivedSkills, langSkills, softSkills, techSkills, type Skill } from "../data/skills";
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

const Pages: React.FC<PagesProps> = ({ show, page = 0 }) => {
  const { isScreenSizeSmallerThan } = useWindowSize();
  const isMobile = isScreenSizeSmallerThan("md");

  // Track previous page to determine direction
  const prevPageRef = useRef(page);
  const direction = page > prevPageRef.current ? 1 : -1;
  prevPageRef.current = page;

  // Page animation variants depending on layout (x for mobile, y for desktop)
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
      <header className={cn("w-full h-16 md:h-20 flex items-end justify-start border-gray-300 border-b-2")}>
        <h1 className="text-lg md:text-xl font-bold mb-2">Information</h1>
      </header>
      <div className="flex-1 overflow-y-auto py-8 px-2">
        <div className="flex flex-col md:flex-row gap-6 bg-black/30 py-8 px-6 rounded-xl shadow-lg border border-gray-600/50">
          <div className="basis-1/5 flex flex-col items-center justify-start">
            <div className="w-28 sm:w-36 md:w-full h-auto aspect-square mb-4 animate-[slide-down-fade_0.5s_ease-out_forwards]" style={{ animationDelay: '50ms' }}>
              <img
                src={SEBAS}
                alt="Sebastián G"
                className="object-cover rounded-lg shadow-lg ring-white/70 ring-1 border-4 border-transparent"
              />
            </div>
          </div>
          <div className="basis-4/5 flex flex-col text-base text-left text-gray-300 the-copy">
            {[
              <p className="font-bold text-xl text-center md:text-left">Sebastián Gamboa</p>,
              <p className="text-lg text-gray-300 text-center md:text-left pb-8">Software Analyst ● Full Stack Engineer</p>,
              <p className="text-base text-gray-300 md:max-w-[90%] pb-8">
                A versatile and creative developer with knowledge in mobile platforms and expertise in web development. Excels learning new technologies and easy-adapt to different programming languages. Known for sharing ideas to improve projects and following workflow to ensure quality in every task and project. Always eager to learn and explore new technologies.
              </p>,
              <p className="pb-4"><MapPinned className="inline-block mr-3" /><span>Alajuela, Costa Rica</span></p>,
              <p className="pb-4"><Mail className="inline-block mr-3" /><a href="mailto:gcsebas99@gmail.com" className="text-blue-400 hover:text-blue-500 hover:underline">gcsebas99@gmail.com</a></p>,
              <p className="pb-4"><img src={WHATSAPP} alt="WhatsApp" className="w-5 h-5 inline-block mr-3" /><a href="https://wa.me/50687307617" className="text-green-400 hover:text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">+506 8730-7617</a></p>,
              <p><img src={LINKEDIN} alt="LinkedIn" className="w-5 h-5 inline-block mr-3" /><a href="https://www.linkedin.com/in/sebastiangc/" className="text-blue-400 hover:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>,
            ].map((child, i) => (
              <div
                key={i}
                className="opacity-0 animate-[slide-down-fade_0.5s_ease-out_forwards]"
                style={{
                  animationDelay: `${(i + 1) * 75}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

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
      <header className={cn("w-full h-16 md:h-20 flex items-end justify-start border-gray-300 border-b-2")}>
        <h1 className="text-lg md:text-xl font-bold mb-2">Experience</h1>
      </header>
      <div className={cn("flex-1 overflow-y-auto py-4")}>
        <h2 className="text-base md:text-lg font-medium mb-2 mt-4">Higher Education</h2>
        <div className="flex flex-col gap-y-4">
          {/* OBS */}
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start text-center md:text-left p-4 bg-black/20 rounded-md border-gray-100/20 border">
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={OBS}
                alt="OBS Business School"
                className="max-w-20 md:max-w-28 rounded-md"
              />
            </div>
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h3 className="text-sm md:text-base font-semibold">Postgraduate Program in Machine Learning and Artificial Intelligence</h3>
              <p className="text-sm font-medium">OBS Business School <a href="https://www.obsbusiness.school/en/" target="_blank" className="text-blue-400 hover:text-blue-700"><Link className="inline-block w-4" /></a></p>
              <p className="text-sm font-medium">2024 - 2025</p>
            </div>
          </div>
          {/* UCR */}
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start text-center md:text-left p-4 bg-black/20 rounded-md border-gray-100/20 border">
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={UCR}
                alt="University of Costa Rica"
                className="max-w-20 md:max-w-28 rounded-md"
              />
            </div>
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h3 className="text-sm md:text-base font-semibold">Bachelor's Degree in Computer Science</h3>
              <p className="text-sm font-medium">University of Costa Rica - Computer Science School <a href="https://www.ucr.ac.cr/" target="_blank" className="text-blue-400 hover:text-blue-700"><Link className="inline-block w-4" /></a></p>
              <p className="text-sm font-medium">2006 - 2011</p>
            </div>
          </div>
        </div>
        <h2 className="text-base md:text-lg font-medium mb-2 mt-4">Work History</h2>
        <div className="flex flex-col gap-y-4">
          {/* Snap */}
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start text-center md:text-left p-4">
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={SNAP}
                alt="Snap Inc."
                className="max-w-20 md:max-w-28 rounded-md"
              />
            </div>
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h3 className="text-sm md:text-base font-semibold">Snap! Mobile, Inc. <a href="https://www.snapraise.com/" target="_blank" className="text-blue-400 hover:text-blue-700"><Link className="inline-block w-4" /></a> <a href="https://www.linkedin.com/company/snapmobile/posts/?feedView=all" target="_blank" className="text-blue-400 hover:text-blue-700"><img src={LINKEDIN} alt="LinkedIn" className="w-6 inline-block" /></a></h3>
              <p className="text-sm font-medium w-full text-left">May 2022 - Present • FullStack Engineer (contractor)</p>
              <p className="text-xs font-medium w-full text-left">As a full stack engineer my role is focused on building new applications as part of the new Snap! Raise ecosystem. In this project I've been responsible for building frontend experiences in React and creating services using Node and GraphQL. Other activities I've been doing at Snap! Mobile includes data migration between two different platforms by means of migration scripts (rails) and MySQL databases; and meeting with several members of the engineering and product team to gather information required to build the experiences and services.</p>
            </div>
          </div>
          {/* Edmodo */}
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start text-center md:text-left p-4">
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={EDMODO}
                alt="Edmodo"
                className="max-w-20 md:max-w-28 rounded-md"
              />
            </div>
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h3 className="text-sm md:text-base font-semibold">Edmodo Inc. <a href="https://en.wikipedia.org/wiki/Edmodo" target="_blank" className="text-blue-400 hover:text-blue-700"><Link className="inline-block w-4" /></a> <a href="https://www.linkedin.com/company/edmodo/" target="_blank" className="text-blue-400 hover:text-blue-700"><img src={LINKEDIN} alt="LinkedIn" className="w-6 inline-block" /></a></h3>
              <p className="text-sm font-medium w-full text-left">Jun 2020 - May 2022 • Software Engineer - Tech Lead (contractor)</p>
              <p className="text-xs font-medium w-full text-left">Some of my responsibilities as tech lead are, defining and maintaining a technology stack for a new project the company is building, evaluating new tools that developers propose, and defining strategies to implement new features. Other tasks I do from time to time are interview new candidates and help new hires with their onboarding process. In this time my team has been able to create a solid frontend technology stack using ReactJs and NextJs and as a tech lead I've noticed that an important part of my day is invested on improving my team’s relations and technical growth, my role on that is to help other team members and try to facilitate resources and strategies to optimize our workflow.</p>
              <p className="text-sm font-medium w-full text-left">Jun 2016 - Jun 2020 • Software Engineer (contractor)</p>
              <p className="text-xs font-medium w-full text-left">As a software engineer in Edmodo I was responsible for implementing new features for the teacher, student and admin portals. In most cases I was responsible for analyzing requirements and designs, providing estimates, developing frontend components and providing tests. I was also in charge of fixing bugs for issues that came up during the development process as well as issues reported by users in which case a fast resolution is crucial. Other tasks were related to code standardization, features revamping, project estimation and documentation.</p>
            </div>
          </div>
          {/* JD */}
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start text-center md:text-left p-4">
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={JD}
                alt="Janeiro Digital."
                className="max-w-20 md:max-w-28 rounded-md"
              />
            </div>
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h3 className="text-sm md:text-base font-semibold">Janeiro Digital. <a href="https://www.janeirodigital.com/" target="_blank" className="text-blue-400 hover:text-blue-700"><Link className="inline-block w-4" /></a></h3>
              <p className="text-sm font-medium w-full text-left">Apr 2015 - Apr 2016 • Senior Software Engineer</p>
            </div>
          </div>
          {/* POSSIBLE */}
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start text-center md:text-left p-4">
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={POSSIBLE}
                alt="POSSIBLE"
                className="max-w-20 md:max-w-28 rounded-md"
              />
            </div>
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h3 className="text-sm md:text-base font-semibold">POSSIBLE (currently known as VML) <a href="https://www.vml.com/" target="_blank" className="text-blue-400 hover:text-blue-700"><Link className="inline-block w-4" /></a></h3>
              <p className="text-sm font-medium w-full text-left">Apr 2013 - Apr 2015 • Senior Software Developer</p>
            </div>
          </div>
          {/* Bosz */}
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start text-center md:text-left p-4">
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={BOSZ}
                alt="BoszDigital"
                className="max-w-20 md:max-w-28 rounded-md"
              />
            </div>
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h3 className="text-sm md:text-base font-semibold">BoszDigital S.A. (currently known as Publicis Production) <a href="https://www.prodigious.com/" target="_blank" className="text-blue-400 hover:text-blue-700"><Link className="inline-block w-4" /></a></h3>
              <p className="text-sm font-medium w-full text-left">May 2012 - Apr 2013 • Creative Engineer, Tech</p>
            </div>
          </div>
          {/* Sweneno */}
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-start text-center md:text-left p-4">
            <div className="w-20 md:w-28 h-20 flex justify-center">
            </div>
            <div className="w-full flex flex-col gap-1 items-center md:items-start">
              <h3 className="text-sm md:text-base font-semibold">Sweneno S.A. (defunct)</h3>
              <p className="text-sm font-medium w-full text-left">Feb 2010 - Apr 2012 • Junior Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderSkillGrid = (skills: Skill[]) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="aspect-[3/4] min-w-32 p-4 bg-black/80 rounded-md border border-gray-100/20 transform hover:scale-[1.03] transition duration-300 flex flex-col items-center justify-between"
          >
            <div className="flex-1 flex flex-col items-center justify-center">
              {!skill.noImage ?
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-24 h-24 sm:w-20 sm:h-20 object-contain mb-2"
                />
              : null}
              <h3 className="text-center text-white text-sm font-semibold">
                {skill.name}
              </h3>
            </div>
            <div className="min-h-[1.5rem] text-xs text-center text-gray-300">
              {skill.description || <>&nbsp;</>}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSkillsPage = () => (
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
      <header className={cn("w-full h-16 md:h-20 flex items-end justify-start border-gray-300 border-b-2")}>
        <h1 className="text-lg md:text-xl font-bold mb-2">Skills</h1>
      </header>
      <div className={cn("flex-1 overflow-y-auto py-4")}>
        <h2 className="text-base md:text-lg font-medium mb-2 mt-4">Tech Stack</h2>
        {renderSkillGrid(techSkills)}
        <h2 className="text-base md:text-lg font-medium mb-2 mt-4">Soft skills</h2>
        {renderSkillGrid(softSkills)}
        <h2 className="text-base md:text-lg font-medium mb-2 mt-4">Languages</h2>
        {renderSkillGrid(langSkills)}
        <h2 className="text-base md:text-lg font-medium mb-2 mt-4">Archived Knowledge</h2>
        {renderSkillGrid(archivedSkills)}
      </div>
    </motion.div>
  );

  const renderPortfolioProject = (project:Project, direction:"ltr"|"rtl", index:number) => {
    return (
      <div key={index} className={cn("flex flex-col gap-4 gap-x-6 pb-16 md:pb-20", direction === "rtl" ? "md:flex-row-reverse" : "md:flex-row")}>
        <div className={cn("md:basis-1/3 flex justify-center md:block")}>
          <img
            src={project.image}
            alt={project.name}
            className="w-2/3 sm:w-3/5 md:w-full h-auto rounded-lg shadow-lg ring-gray-600 ring border-2 border-transparent"
          />
        </div>
        <div className="md:basis-2/3">
          <h3 className={cn("text-center text-lg font-semibold mb-2", direction === "rtl" ? "md:text-right" : "md:text-left")}>
            {project.name}
          </h3>
          <p className={cn("text-center text-sm text-gray-300 pb-2", direction === "rtl" ? "md:text-right" : "md:text-left")}>
            {project.description}
          </p>
          {project.details && project.details.length > 0 && (
            <ul className={cn("text-center text-sm text-gray-300", direction === "rtl" ? "md:text-right" : "md:text-left")}>
              {project.details.map((detail, index) => (
                <li key={index} className="mb-1">
                  <strong className="font-semibold">{detail.name}:</strong> {detail.description}
                </li>
              ))}
            </ul>
          )}
          {project.github && (
            <p className={cn("text-center text-sm text-gray-300 pb-2", direction === "rtl" ? "md:text-right" : "md:text-left")}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 hover:underline">
                <Github className="inline-block w-4" /> GitHub Repository
              </a>
            </p>
          )}
          {project.website && (
            <p className={cn("text-center text-sm text-gray-300 pb-2", direction === "rtl" ? "md:text-right" : "md:text-left")}>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 hover:underline">
                <Link className="inline-block w-4" /> Website
              </a>
            </p>
          )}
          <div className="w-2/5 h-0 mx-auto border-double border-white/25 border-b pt-6 md:hidden"></div>
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
      <header className={cn("w-full h-16 md:h-20 flex items-end justify-start border-gray-300 border-b-2")}>
        <h1 className="text-lg md:text-xl font-bold mb-2">Portfolio</h1>
      </header>
      <div className={cn("flex-1 overflow-y-auto py-8 px-2")}>
        {portfolio.map((project, index) => renderPortfolioProject(project, index % 2 === 0 ? "ltr" : "rtl", index))}
      </div>
    </motion.div>
  );

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
      <header className={cn("w-full h-16 md:h-20 flex items-end justify-start border-gray-300 border-b-2")}>
        <h1 className="text-lg md:text-xl font-bold mb-2">Interests</h1>
      </header>
      <div className={cn("flex-1 overflow-y-auto py-4")}>
        <p className="italic select-none text-base sm:text-lg leading-7 sm:leading-9 text-center px-2 sm:px-12 lg:px-16 py-12">My professional journey has been deeply shaped by a strong curiosity for how technology intersects with human behavior, learning, and decision-making.</p>
        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth">
          {renderInterestsCards()}
        </div>
        <p className="italic select-none text-base sm:text-lg leading-7 sm:leading-9 text-center px-2 sm:px-12 lg:px-16 pt-16 pb-20">Together, these interests help me stay curious, motivated, and always eager to improve — both as a developer and as someone who believes that technology should empower people to do more, think deeper, and live better.</p>
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
    renderInterestsPage(),
    renderPortfolioPage(),
    renderSkillsPage(),
    renderExperiencePage(),
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
