import REACTLOGO from "../assets/skills/react.webp";
import NODEJSLOGO from "../assets/skills/node-js.png";
import HtML5LOGO from "../assets/skills/html5.png";
import CSS3LOGO from "../assets/skills/css3.png";
import JAVASCRIPTLOGO from "../assets/skills/javascript.png";
import TYPESCRIPTLOGO from "../assets/skills/typescript.png";
import PYTHONLOGO from "../assets/skills/python.png";
import MYSQLLOGO from "../assets/skills/mysql.png";
import POSTGRESQLLOGO from "../assets/skills/postgresql.png";
import JAVALOGO from "../assets/skills/java.png";
import SWIFTLOGO from "../assets/skills/swift.png";
import CSHARPLOGO from "../assets/skills/csharp.png";
import PHPLOGO from "../assets/skills/php.png";
import GRAPHQLLOGO from "../assets/skills/graphql.webp";
import RESTFULLOGO from "../assets/skills/restful.png";
import EXPRESSJSLOGO from "../assets/skills/expressjs.png";
import TAILWINDCSSLOGO from "../assets/skills/tailwindcss.png";
import VITELOGO from "../assets/skills/vite.png";
import STORYBOOKLOGO from "../assets/skills/storybook.png";
import JESTLOGO from "../assets/skills/jest.png";
import RTLLOGO from "../assets/skills/rtl.png";
import SHADCNLOGO from "../assets/skills/shadcn.png";
import REDUXLOGO from "../assets/skills/redux.png";
import RADIXLOGO from "../assets/skills/radix.png";
import ESLINTLOGO from "../assets/skills/eslint.png";
import PYTORCHLOGO from "../assets/skills/pytorch.png";
import TENSORFLOWLOGO from "../assets/skills/tensorflow.png";
import OPENCVLOGO from "../assets/skills/opencv.png";
import PRISMALOGO from "../assets/skills/prisma.png";
import FLASKLOGO from "../assets/skills/flask.png";
import SQLALCHEMYLOGO from "../assets/skills/sqlalchemy.png";
import PANDASLOGO from "../assets/skills/pandas.png";
import NUMPYLOGO from "../assets/skills/numpy.png";
import MATPLOTLIBLOGO from "../assets/skills/matplotlib.png";
import SCIKITLEARNLOGO from "../assets/skills/scikitlearn.png";
import S3LOGO from "../assets/skills/s3.webp";
import UNITYLOGO from "../assets/skills/unity.png";
import RWDLOGO from "../assets/skills/rwd.png";
import DOCKERLOGO from "../assets/skills/docker.png";
import GITLOGO from "../assets/skills/git.png";
import JIRALOGO from "../assets/skills/jira.png";
import SVGLOGO from "../assets/skills/svg.png";
import JSONLOGO from "../assets/skills/json.png";
import XMLLOGO from "../assets/skills/xml.png";
import YAMLLOGO from "../assets/skills/yaml.png";
import MARKDOWNLOGO from "../assets/skills/markdown.png";
import CLOGO from "../assets/skills/c.png";
import CPLUSPLUSLOGO from "../assets/skills/cplusplus.png";
import ASSEMBLYLOGO from "../assets/skills/assembly.png";
import LARAVELLOGO from "../assets/skills/laravel.png";
import CYPRESSLOGO from "../assets/skills/cypress.webp";
import FBAPILOGO from "../assets/skills/fbapi.png";
import GMAPILOGO from "../assets/skills/gmapi.png";
import JQUERYLOGO from "../assets/skills/jquery.png";
import BOOTSTRAPLOGO from "../assets/skills/bootstrap.png";
import BACKBONELOGO from "../assets/skills/backbone.png";

type SkillCategory = 'frontend' | 'backend' | 'ai' | 'database' | 'tools' | 'other' | 'formats';
type SkillProficiency = 'expert' | 'proficient' | 'familiar';

type Skill = {
  name: string;
  logo: string;
  description?: string;
  noImage?: boolean;
  category?: SkillCategory;
  proficiency?: SkillProficiency;
};

const techSkills: Skill[] = [
  // Frontend
  { name: "React", logo: REACTLOGO, category: "frontend", proficiency: "expert" },
  { name: "TypeScript", logo: TYPESCRIPTLOGO, category: "frontend", proficiency: "expert" },
  { name: "JavaScript", logo: JAVASCRIPTLOGO, category: "frontend", proficiency: "expert" },
  { name: "HTML5", logo: HtML5LOGO, category: "frontend", proficiency: "expert" },
  { name: "CSS3", logo: CSS3LOGO, category: "frontend", proficiency: "expert" },
  { name: "TailwindCSS", logo: TAILWINDCSSLOGO, category: "frontend", proficiency: "expert" },
  { name: "Responsive Web Design", logo: RWDLOGO, category: "frontend", proficiency: "expert" },
  { name: "Redux", logo: REDUXLOGO, category: "frontend", proficiency: "proficient" },
  { name: "ShadCN", logo: SHADCNLOGO, category: "frontend", proficiency: "proficient" },
  { name: "Radix Primitives", logo: RADIXLOGO, category: "frontend", proficiency: "proficient" },
  { name: "SVG", logo: SVGLOGO, category: "frontend", proficiency: "proficient" },

  // Backend & APIs
  { name: "Node.js", logo: NODEJSLOGO, category: "backend", proficiency: "expert" },
  { name: "GraphQL", logo: GRAPHQLLOGO, category: "backend", proficiency: "expert" },
  { name: "RESTful APIs", logo: RESTFULLOGO, category: "backend", proficiency: "expert" },
  { name: "Express.js", logo: EXPRESSJSLOGO, category: "backend", proficiency: "expert" },
  { name: "Prisma", logo: PRISMALOGO, category: "backend", proficiency: "proficient" },
  { name: "Flask", logo: FLASKLOGO, category: "backend", proficiency: "proficient" },
  { name: "SQLAlchemy", logo: SQLALCHEMYLOGO, category: "backend", proficiency: "proficient" },
  { name: "PHP", logo: PHPLOGO, category: "backend", proficiency: "familiar" },

  // AI & Data Science
  { name: "Python", logo: PYTHONLOGO, category: "ai", proficiency: "proficient" },
  { name: "PyTorch", logo: PYTORCHLOGO, category: "ai", proficiency: "familiar" },
  { name: "TensorFlow", logo: TENSORFLOWLOGO, category: "ai", proficiency: "familiar" },
  { name: "OpenCV", logo: OPENCVLOGO, category: "ai", proficiency: "familiar" },
  { name: "Scikit-learn", logo: SCIKITLEARNLOGO, category: "ai", proficiency: "familiar" },
  { name: "Pandas", logo: PANDASLOGO, category: "ai", proficiency: "familiar" },
  { name: "NumPy", logo: NUMPYLOGO, category: "ai", proficiency: "familiar" },
  { name: "Matplotlib", logo: MATPLOTLIBLOGO, category: "ai", proficiency: "familiar" },

  // Databases
  { name: "MySQL", logo: MYSQLLOGO, category: "database", proficiency: "expert" },
  { name: "PostgreSQL", logo: POSTGRESQLLOGO, category: "database", proficiency: "proficient" },

  // DevOps & Tools
  { name: "Git", logo: GITLOGO, category: "tools", proficiency: "expert" },
  { name: "Docker", logo: DOCKERLOGO, category: "tools", proficiency: "proficient" },
  { name: "Vite", logo: VITELOGO, category: "tools", proficiency: "proficient" },
  { name: "Jest", logo: JESTLOGO, category: "tools", proficiency: "proficient" },
  { name: "RTL", logo: RTLLOGO, description: "React Testing Library", category: "tools", proficiency: "proficient" },
  { name: "Storybook", logo: STORYBOOKLOGO, category: "tools", proficiency: "proficient" },
  { name: "ESLint", logo: ESLINTLOGO, category: "tools", proficiency: "proficient" },
  { name: "Jira", logo: JIRALOGO, category: "tools", proficiency: "proficient" },
  { name: "AWS S3", logo: S3LOGO, category: "tools", proficiency: "familiar" },

  // Other languages & environments
  { name: "Java", logo: JAVALOGO, description: "Desktop · Android", category: "other", proficiency: "proficient" },
  { name: "C#", logo: CSHARPLOGO, category: "other", proficiency: "familiar" },
  { name: "Swift", logo: SWIFTLOGO, category: "other", proficiency: "familiar" },
  { name: "Unity", logo: UNITYLOGO, category: "other", proficiency: "familiar" },

  // Formats & standards (rendered as a compact list)
  { name: "JSON", logo: JSONLOGO, category: "formats", proficiency: "expert" },
  { name: "Markdown", logo: MARKDOWNLOGO, category: "formats", proficiency: "expert" },
  { name: "YAML", logo: YAMLLOGO, category: "formats", proficiency: "proficient" },
  { name: "XML", logo: XMLLOGO, category: "formats", proficiency: "proficient" },
];

const techSkillCategories: { key: SkillCategory; label: string; description: string }[] = [
  { key: "frontend", label: "Frontend", description: "UI architecture, styling, and browser-side logic" },
  { key: "backend", label: "Backend & APIs", description: "Server-side development, APIs, and data layers" },
  { key: "ai", label: "AI & Data Science", description: "Machine learning, computer vision, and data analysis" },
  { key: "database", label: "Databases", description: "Relational databases and query languages" },
  { key: "tools", label: "DevOps & Tooling", description: "Build tools, testing, CI/CD, and workflow" },
  { key: "other", label: "Other Languages", description: "Languages used in specific contexts or platforms" },
];

const softSkills: Skill[] = [
  { name: "Critical Thinking", logo: "", description: "Structures problems before reaching for solutions", noImage: true },
  { name: "Communication", logo: "", description: "Explains technical concepts clearly to any audience", noImage: true },
  { name: "Adaptability", logo: "", description: "Picks up new stacks and contexts quickly", noImage: true },
  { name: "Empathy", logo: "", description: "Considers people's needs in every technical decision", noImage: true },
  { name: "Team Collaboration", logo: "", description: "Works well across engineering, design, and product", noImage: true },
  { name: "Proactivity", logo: "", description: "Anticipates problems and takes initiative", noImage: true },
];

const langSkills: Skill[] = [
  { name: "Spanish", logo: "", description: "Native", noImage: true },
  { name: "English", logo: "", description: "B2+ · actively improving", noImage: true },
  { name: "Dutch", logo: "", description: "Basic", noImage: true },
];

const archivedSkills: Skill[] = [
  { name: "C", logo: CLOGO },
  { name: "C++", logo: CPLUSPLUSLOGO },
  { name: "Assembly language", logo: ASSEMBLYLOGO },
  { name: "Laravel", logo: LARAVELLOGO },
  { name: "Cypress", logo: CYPRESSLOGO },
  { name: "FB API", logo: FBAPILOGO },
  { name: "Google Maps API", logo: GMAPILOGO },
  { name: "jQuery", logo: JQUERYLOGO },
  { name: "Bootstrap", logo: BOOTSTRAPLOGO },
  { name: "Backbone.js", logo: BACKBONELOGO },
];

export {
  techSkills,
  techSkillCategories,
  softSkills,
  langSkills,
  archivedSkills,
  type Skill,
  type SkillProficiency,
  type SkillCategory,
};
