import AIIMAGE from "../assets/interests/ai.png";
import UXIMAGE from "../assets/interests/ux.png";
import SIMIMAGE from "../assets/interests/sim.png";
import GAMINGIMAGE from "../assets/interests/gaming.png";
import LANGIMAGE from "../assets/interests/lang.png";

type Interest = {
  key: string;
  title: string;
  description: string;
  bg: string;
  image: string;
};

const interests: Interest[] = [
  {
    key: "ai",
    title: "Artificial Intelligence",
    description:
      "One of my key areas of interest is artificial intelligence, particularly its ability to expand our perception of work, creativity, and collaboration. I believe AI is not just a tool for automation — it's a lens through which we can better understand ourselves, enhance our capabilities, and reimagine how we approach problem-solving. I'm also fascinated by the technical and philosophical boundaries of AI, especially questions around artificial conscience, emergent behavior, and the ethics of delegation in decision-making.",
    bg: "bg-gradient-to-br from-indigo-950 to-purple-600",
    image: AIIMAGE,
  },
  {
    key: "ux",
    title: "User Experience",
    description:
      "Another central interest is user experience — not just from a design perspective, but as a continuous process of discovery, empathy, and refinement. I enjoy analyzing how people interact with products, identifying points of friction, and translating those insights into thoughtful improvements. Whether it's simplifying a user flow, improving accessibility, or aligning features with real user needs, UX work keeps me grounded in the human side of software development.",
    bg: "bg-gradient-to-br from-blue-950 to-sky-600",
    image: UXIMAGE,
  },
  {
    key: "sim",
    title: "Simulations",
    description:
      "I'm also passionate about simulations, especially their role in enhancing decision-making. Simulations offer a unique way to model complexity, predict outcomes, and test hypotheses in controlled environments. Whether in business, science, or education, I see simulations as a powerful bridge between data and intuition — a way to explore possibilities and make smarter, more informed choices.",
    bg: "bg-gradient-to-br from-purple-800 to-pink-600",
    image: SIMIMAGE,
  },
  {
    key: "gaming",
    title: "Gaming",
    description:
      "Outside of work, gaming has always been more than just a pastime for me. I'm drawn to how games balance challenge and reward, and how they create flow, motivation, and emotional resonance. I'm especially interested in the psychology of gaming and how game mechanics can be applied to learning, engagement, or even therapy. This perspective often shapes how I approach user engagement and product design, blending entertainment principles into practical applications.",
    bg: "bg-gradient-to-br from-green-950 to-lime-700",
    image: GAMINGIMAGE,
  },
  {
    key: "lang",
    title: "Languages",
    description:
      "Finally, I'm an avid fan of learning languages and brain training activities. I enjoy the challenge of decoding grammar systems, expanding vocabulary, and switching between cognitive modes. These practices keep me mentally agile and fuel my interest in learning as a lifelong process. They also influence my approach to interface clarity, localization, and the cognitive load of digital experiences — all key elements in designing inclusive and effective software.",
    bg: "bg-gradient-to-br from-emerald-950 to-teal-700",
    image: LANGIMAGE,
  },
];

export {
  interests,
  type Interest
};