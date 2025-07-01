import PORTFOLIOIMAGE from "../assets/portfolio/portfolio.jpg";
import RPNCALCIMAGE from "../assets/portfolio/rpncalc.jpg";
import TFMIMAGE from "../assets/portfolio/tfm.jpg";
import COMINGSOONIMAGE from "../assets/portfolio/coming-soon.jpg";

type Project = {
  name: string;
  image: string;
  description: string;
  details?: {name: string; description: string}[];
  github?: string;
  website?: string;
};

const portfolio: Project[] = [
  {
    name: "Portfolio Page",
    image: PORTFOLIOIMAGE,
    description: "A personal site showcasing career highlights, skills, and projects in a clean, animated UI.",
    details: [
      {
        name: "Tech",
        description: "React, TypeScript, TailwindCSS, Vite, Framer Motion"
      },
      {
        name: "Date",
        description: "June 2025"
      },
    ],
    github: "https://github.com/gcsebas99/gcsebas99.github.io",
  },
  {
    name: "RPN Calculator",
    image: RPNCALCIMAGE,
    description: "Terminal-style calculator built for a job application. Supports reverse polish notation and multiple visual themes.",
    details: [
      {
        name: "Tech",
        description: "React, Sass"
      },
      {
        name: "Date",
        description: "June 2022"
      },
    ],
    github: "https://github.com/gcsebas99/rpn-ex",
    website: "https://gcsebas99.github.io/rpn-ex/",
  },
  {
    name: "TFM – Final Master's Project",
    image: TFMIMAGE,
    description: "Collaborative academic project combining emotion detection and marketing analytics. A custom app shows users an ad and records their facial expressions. An AI model processes emotion data, helping marketers understand user reactions.",
    details: [
      {
        name: "Frontend",
        description: "React, TypeScript, Tailwind, Radix, Vite, Framer Motion"
      },
      {
        name: "Backend",
        description: "Flask, SQLAlchemy, TensorFlow, PyTorch, Mediapipe, OpenCV, Keras, Scikit-learn, Pandas, Matplotlib"
      },
      {
        name: "Date",
        description: "2024 - 2025"
      },
    ],
    github: "https://github.com/gcsebas99/tfm-api-v2",
  },
  {
    name: "Product Stock Checker (In Progress)",
    image: COMINGSOONIMAGE,
    description: "Internal tool for a small family-run café. Lets staff review and update inventory item by item, then generates a downloadable PDF report with stock levels and alerts.",
    details: [
      {
        name: "Tech",
        description: "React (planned), TailwindCSS (planned)"
      },
      {
        name: "Date",
        description: "Ongoing"
      },
    ],
  },
];

export {
  portfolio,
  type Project
};
