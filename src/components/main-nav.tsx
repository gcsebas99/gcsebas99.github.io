import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SEBAS from "../assets/sebas.jpg";
import { Home, Contact, Sparkles, FolderOpen, Code2, Briefcase } from "lucide-react";
import { cn } from "../utils/class-names";

type MainNavProps = {
  setHome: (isHome: boolean) => void;
  setExperience: (exp: number) => void;
};

const MainNav: React.FC<MainNavProps> = ({ setHome, setExperience }) => {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animatingSelection, setAnimatingSelection] = useState<number>(-1);

  const iconSize = isHome ? 16 : 26;

  const navItems = [
    { label: "Information", icon: <Contact size={iconSize} /> },
    { label: "Skills",       icon: <Code2 size={iconSize} /> },
    { label: "Portfolio",    icon: <FolderOpen size={iconSize} /> },
    { label: "Experience",   icon: <Briefcase size={iconSize} /> },
    { label: "Interests",    icon: <Sparkles size={iconSize} /> },
  ];

  useEffect(() => {
    setHome(isHome);
  }, [isHome]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isAnimating) return;
    const timeout = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  useEffect(() => {
    if (animatingSelection === -1) return;
    const timeout = setTimeout(() => setAnimatingSelection(-1), 400);
    return () => clearTimeout(timeout);
  }, [animatingSelection]);

  const backHome = () => {
    setIsAnimating(true);
    setIsHome(true);
  };

  const menuItemClick = (index: number) => {
    setAnimatingSelection(index);
    if (isHome) {
      setTimeout(() => setIsAnimating(true), 400);
      setTimeout(() => setIsHome(false), 500);
    }
    setExperience(index);
  };

  return (
    <div
      className={cn(
        "absolute z-30 flex flex-col items-center justify-center h-dvh transition-width duration-[1000ms]",
        isHome ? "w-full" : "w-14 sm:w-16 md:w-20 justify-start pt-4",
        !isHome && !isAnimating ? "bg-black/45 shadow-2xl" : "",
      )}
    >
      {/* Home: photo + name header */}
      <div
        className={cn(
          "flex items-center gap-5 mb-10 transition-opacity duration-500 px-4",
          !isAnimating ? "opacity-100" : "opacity-0",
          !isHome ? "hidden" : "",
        )}
      >
        <img
          src={SEBAS}
          alt="Sebastián G"
          className="w-16 h-16 rounded-full ring-1 ring-white/30 select-none shrink-0"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">
            Sebastián Gamboa
          </h1>
          <p className="text-[10px] sm:text-[11px] text-blue-300/60 uppercase tracking-[0.22em] mt-2">
            Full Stack Engineer · Software Analyst
          </p>
        </div>
      </div>

      {/* Sidebar: home button */}
      <button
        onClick={backHome}
        className={cn(
          "flex items-center justify-center text-white/60 hover:text-white rounded-md mb-3",
          "transition-all duration-300",
          "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
          !isAnimating ? "opacity-100" : "opacity-0",
          !isHome ? "" : "hidden",
          "cursor-pointer hover:bg-white/10",
        )}
        title="Home"
      >
        <Home size={20} />
      </button>

      {/* Nav items container */}
      <motion.div
        layout
        animate={{
          width: isHome ? [64, 280, 340] : [340, 280, 64],
          height: isHome ? 370 : 332,
        }}
        transition={{
          layout: {
            delay: 0.1,
            type: "spring",
            stiffness: 80,
            damping: 25,
            mass: 4.0,
          },
          width: {
            duration: 0.6,
            times: [0, 0.1, 0.15, 0.3, 1],
            ease: "easeInOut",
          },
          height: {
            duration: 0.6,
            ease: "easeInOut",
          },
        }}
        className={cn(
          "flex flex-col justify-center overflow-hidden",
          "gap-2.5",
          isHome ? "" : "scale-60 sm:scale-75 md:scale-none md:-translate-y-0",
          isHome ? "" : "-translate-y-16 sm:-translate-y-12",
        )}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={index}
            layout
            className={cn(
              "relative cursor-pointer w-full rounded-md",
              "text-gray-300 hover:text-white",
              isHome
                ? "h-[66px] flex flex-row items-center justify-center gap-3.5 px-4"
                : "h-[60px] flex flex-col items-center justify-center",
              "bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-200",
              "overflow-hidden isolate",
              "menu-opt-effect-1",
              animatingSelection === index ? "menu-opt-effect" : "",
            )}
            onClick={() => menuItemClick(index)}
            title={item.label}
          >
            <div
              className={cn(
                "shrink-0 transition-all",
                isAnimating ? "duration-75 opacity-0" : "duration-300 opacity-100",
              )}
            >
              {item.icon}
            </div>
            <span
              className={cn(
                "text-[15px] tracking-wide font-light transition-all duration-300",
                isAnimating ? "opacity-0" : "opacity-100",
                !isHome ? "hidden" : "",
              )}
            >
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export {
  MainNav,
};
