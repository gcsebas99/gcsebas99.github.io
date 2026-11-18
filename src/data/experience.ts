import SNAP from "../assets/experience/snap.jpeg";
import EDMODO from "../assets/experience/edmodo.webp";
import JD from "../assets/experience/jd.jpeg";
import POSSIBLE from "../assets/experience/possible.jpg";
import BOSZ from "../assets/experience/bosz.png";
import UCR from "../assets/experience/ucr.webp";
import OBS from "../assets/experience/obs.png";

type Role = { title: string; period: string };

type Job = {
  company: string;
  url?: string;
  logo?: string;
  roles: Role[];
  description: string;
  stack?: string[];
};

type Education = {
  institution: string;
  url: string;
  logo: string;
  degree: string;
  period: string;
};

const jobs: Job[] = [
  {
    company: "Snap! Mobile, Inc.",
    url: "https://www.snapraise.com/",
    logo: SNAP,
    roles: [{ title: "Full Stack Engineer (contractor)", period: "May 2022 – Jun 2026" }],
    description:
      "Built new web applications for Snap! Raise's next-generation fundraising ecosystem: React frontends, Node.js and GraphQL services, and data migrations between platforms (Rails, MySQL). Worked closely with engineering and product to shape requirements and deliver polished solutions.",
    stack: ["React", "TypeScript", "Node.js", "GraphQL", "MySQL"],
  },
  {
    company: "Edmodo Inc.",
    url: "https://en.wikipedia.org/wiki/Edmodo",
    logo: EDMODO,
    roles: [
      { title: "Software Engineer · Tech Lead (contractor)", period: "Jun 2020 – May 2022" },
      { title: "Software Engineer (contractor)", period: "Jun 2016 – Jun 2020" },
    ],
    description:
      "Six years at one of the world's largest education platforms. As Tech Lead, defined and maintained the frontend stack (React, Next.js), evaluated new tooling, mentored engineers, and raised both technical quality and team cohesion. As a Software Engineer, owned feature delivery across the teacher, student and admin portals, from analysis and estimation through development, testing and production support.",
    stack: ["React", "Next.js", "JavaScript", "Jest"],
  },
  {
    company: "Janeiro Digital",
    url: "https://www.janeirodigital.com/",
    logo: JD,
    roles: [{ title: "Senior Software Engineer", period: "Apr 2015 – Apr 2016" }],
    description:
      "Delivered full-stack features for digital product clients, from REST API integrations to building and refining frontend interfaces.",
  },
  {
    company: "POSSIBLE (now VML)",
    url: "https://www.vml.com/",
    logo: POSSIBLE,
    roles: [{ title: "Senior Software Developer", period: "Apr 2013 – Apr 2015" }],
    description:
      "Built interactive campaigns and rich web applications for major international brands at a global digital agency, focused on frontend development, animation and cross-browser compatibility.",
  },
  {
    company: "BoszDigital (now Publicis Production)",
    url: "https://www.prodigious.com/",
    logo: BOSZ,
    roles: [{ title: "Creative Engineer, Tech", period: "May 2012 – Apr 2013" }],
    description:
      "Developed rich-media advertising and interactive web experiences for global clients, combining creative direction with technical execution.",
  },
  {
    company: "Sweneno S.A.",
    roles: [{ title: "Junior Web Developer", period: "Feb 2010 – Apr 2012" }],
    description:
      "First professional role: websites and web applications for local clients, building a foundation in frontend and server-side development.",
  },
];

const education: Education[] = [
  {
    institution: "OBS Business School",
    url: "https://www.obsbusiness.school/en/",
    logo: OBS,
    degree: "Postgraduate Program in Machine Learning and Artificial Intelligence",
    period: "2024 – 2025",
  },
  {
    institution: "University of Costa Rica",
    url: "https://www.ucr.ac.cr/",
    logo: UCR,
    degree: "Bachelor's Degree in Computer Science",
    period: "2006 – 2011",
  },
];

export { jobs, education, type Job, type Education };
