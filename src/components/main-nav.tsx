import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SEBAS from "../assets/sebas.jpg";
import { Home, ShieldUser, Award, Send, BriefcaseBusiness, Rocket } from "lucide-react";
import { cn } from "../utils/class-names";

type MainNavProps = {
  setHome: (isHome:boolean) => void;
  setExperience: (exp:number) => void;
};

const MainNav: React.FC<MainNavProps> = ({ setHome, setExperience }) => {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animatingSelection, setAnimatingSelection] = useState<number>(-1);
  const iconSize = isHome ? 40 : 32;
  const navItems = [
    { label: "Information", icon: <ShieldUser size={iconSize}/> },
    { label: "Interests", icon: <Rocket size={iconSize} /> },
    { label: "Portfolio", icon: <BriefcaseBusiness size={iconSize} /> },
    { label: "Skills", icon: <Send size={iconSize} /> },
    { label: "Experience", icon: <Award size={iconSize} /> },
  ];

  useEffect(() => {
    setHome(isHome);
  }, [isHome]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset animation flag after 700ms (a bit longer than 600ms)
  useEffect(() => {
    if (!isAnimating) return;

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 700); // matches or exceeds animation duration

    return () => clearTimeout(timeout);
  }, [isAnimating]);

  useEffect(() => {
    if (animatingSelection === -1) return;
    const timeout = setTimeout(() => {
      setAnimatingSelection(-1);
    }, 300);
    return () => clearTimeout(timeout);
  }, [animatingSelection]);

  const backHome = () => {
    setIsAnimating(true);
    setIsHome(true);
  };

  const menuItemClick = (index:number) => {
    setAnimatingSelection(index);
    if (isHome) {
      setTimeout(() => {
        setIsAnimating(true);
      }, 400);
      setTimeout(() => {
        setIsHome(false);
      }, 500);
    }
    setExperience(index);
    //load content
  };

  return (
    <div className={cn(
      "absolute z-30 flex flex-col items-center justify-center h-dvh transition-width duration-[1000ms]",
      isHome ? "w-full" : "w-14 sm:w-16 md:w-20 justify-start pt-4",
      !isHome && !isAnimating ? "bg-black/45 shadow-2xl" : "",
    )}>
      <div
        className={cn(
          "flex flex-col items-center justify-center pb-14 transition-opacity duration-500",
          !isAnimating ? "opacity-100" : "opacity-0",
          !isHome ? "hidden" : ""
        )}
      >
        <img
          src={SEBAS}
          alt="Sebastián G"
          className="w-32 h-32 rounded-full shadow-lg ring-white/70 ring-2 border-4 border-transparent mb-4 select-none"
        />
        <h1 className="text-2xl font-bold text-white uppercase">
          Sebastián Gamboa
        </h1>
        <h2 className="text-sm font-medium text-white">
          Software Analyst ● Full Stack Engineer
        </h2>
      </div>

      <button
        onClick={backHome}
        className={cn(
          "flex items-center justify-center hover:bg-black/25 text-white rounded-lg shadow mb-4",
          "transition-all duration-300",
          "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16",
          !isAnimating ? "opacity-100" : "opacity-0",
          !isHome ? "" : "hidden",
          "cursor-pointer hover:bg-white/10",
        )}
        title="Home"
      >
        <Home size={24}/>
      </button>

      <motion.div
        layout
        animate={{
          width: isHome ? [64, 524, 624] : [624, 524, 64],
          height: isHome ? 144 : 384,
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
            ease: 'easeInOut',
          },
        }}
        className={cn(
          "flex gap-4 justify-center",
          "scale-60 sm:scale-75 md:scale-none md:-translate-y-0",
          isHome ? "flex-row" : "flex-col",
          isHome ? "-translate-y-8 sm:-translate-y-6" : "-translate-y-20 sm:-translate-y-12",
        )}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={index}
            layout
            className={cn(
              "relative cursor-pointer",
              "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900",
              "text-gray-200 text-xl font-bold rounded-lg shadow-xl border-2",
              "flex flex-col items-center justify-center",
              isHome ? "w-28 h-36" : "w-16 h-16",
              isAnimating || animatingSelection !== -1 ? "border-transparent" : "border-slate-700",
              "hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 transition-colors duration-500",
              index === 0 ? "menu-opt-effect-1" : "",
              index === 1 ? "menu-opt-effect-2" : "",
              index === 2 ? "menu-opt-effect-3" : "",
              index === 3 ? "menu-opt-effect-4" : "",
              index === 4 ? "menu-opt-effect-5" : "",
              animatingSelection === index ? "menu-opt-effect" : "",
            )}
            onClick={() => menuItemClick(index)}
            title={item.label}
          >
            <div className={cn("transition-all", isAnimating ? "duration-75 opacity-0" : "duration-300 opacity-100")}>{item.icon}</div>
            <span
              className={`
                mt-2 font-normal text-sm sm:text-base transition-all duration-300
                ${!isAnimating ? "opacity-100" : "opacity-0"}
                ${!isHome ? "hidden" : ""}
              `}
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


