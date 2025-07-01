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

type Skill = {
  name: string;
  logo: string;
  description?: string;
  noImage?: boolean;
};

const techSkills: Skill[] = [
  { name: "React", logo: REACTLOGO, description: "" },
  { name: "Node.js", logo: NODEJSLOGO },
  { name: "HTML5", logo: HtML5LOGO },
  { name: "CSS3", logo: CSS3LOGO },
  { name: "JavaScript", logo: JAVASCRIPTLOGO },
  { name: "TypeScript", logo: TYPESCRIPTLOGO },
  { name: "Python", logo: PYTHONLOGO },
  { name: "MySQL", logo: MYSQLLOGO },
  { name: "PostgreSQL", logo: POSTGRESQLLOGO },
  { name: "Java", logo: JAVALOGO, description: "(Desktop, Android)" },
  { name: "Swift", logo: SWIFTLOGO },
  { name: "C#", logo: CSHARPLOGO },
  { name: "PHP", logo: PHPLOGO },
  { name: "GraphQL", logo: GRAPHQLLOGO },
  { name: "RESTful APIs", logo: RESTFULLOGO },
  { name: "Express.js", logo: EXPRESSJSLOGO },
  { name: "TailwindCSS", logo: TAILWINDCSSLOGO },
  { name: "Vite", logo: VITELOGO },
  { name: "Storybook", logo: STORYBOOKLOGO },
  { name: "Jest", logo: JESTLOGO },
  { name: "RTL", logo: RTLLOGO },
  { name: "ShadCN", logo: SHADCNLOGO },
  { name: "Redux", logo: REDUXLOGO },
  { name: "Radix Primitives", logo: RADIXLOGO },
  { name: "ESLint", logo: ESLINTLOGO },
  { name: "Pytorch", logo: PYTORCHLOGO },
  { name: "TensorFLow", logo: TENSORFLOWLOGO },
  { name: "OpenCV", logo: OPENCVLOGO },
  { name: "Prisma", logo: PRISMALOGO },
  { name: "Flask", logo: FLASKLOGO },
  { name: "SQLAlchemy", logo: SQLALCHEMYLOGO },
  { name: "Pandas", logo: PANDASLOGO },
  { name: "NumPy", logo: NUMPYLOGO },
  { name: "Matplotlib", logo: MATPLOTLIBLOGO },
  { name: "Scikit-learn", logo: SCIKITLEARNLOGO },
  { name: "AWS", logo: S3LOGO, description: "S3" },
  { name: "Unity", logo: UNITYLOGO },
  { name: "Responsive Web Design", logo: RWDLOGO },
  { name: "Docker", logo: DOCKERLOGO },
  { name: "Git", logo: GITLOGO },
  { name: "Jira", logo: JIRALOGO },
  { name: "SVG", logo: SVGLOGO },
  { name: "JSON", logo: JSONLOGO },
  { name: "XML", logo: XMLLOGO },
  { name: "YAML", logo: YAMLLOGO },
  { name: "Markdown", logo: MARKDOWNLOGO },
];
const softSkills: Skill[] = [
  { name: "Critical Thinking", logo: "", description: "Solves problems with structured reasoning", noImage: true },
  { name: "Communication", logo: "", description: "Explains ideas clearly and concisely", noImage: true },
  { name: "Adaptability", logo: "", description: "Handles change with ease", noImage: true },
  { name: "Empathy", logo: "", description: "Understands people's needs and feelings", noImage: true },
  { name: "Team Collaboration", logo: "", description: "Works well across diverse teams", noImage: true },
  { name: "Proactivity", logo: "", description: "Anticipates needs and takes action", noImage: true },
];

const langSkills: Skill[] = [
  { name: "Spanish", logo: "", description: "Native", noImage: true },
  { name: "English", logo: "", description: "B2+ and improving", noImage: true },
  { name: "Dutch", logo: "", description: "Basic", noImage: true },
];

const archivedSkills: Skill[] = [
  { name: "C", logo: CLOGO, },
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
  softSkills,
  langSkills,
  archivedSkills,
  type Skill
};
