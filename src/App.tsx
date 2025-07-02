import "@fontsource/inter/400.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/400-italic.css";
import "./App.css"
import { AnimatedLights } from "./components/animated-lights";
import { MainNav } from "./components/main-nav";
import { LampBackground } from "./components/lamp-background";
import { useState } from "react";
import { Pages } from "./components/pages";

const App = () => {
  const [isHome, setIsHome] = useState<boolean>(true);
  const [selectedExperience, setSelectedExperience] = useState<number>(0);

  return (
    <>
      {/* animated backgrounds */}
      <AnimatedLights />
      <LampBackground show={!isHome} colorExp={selectedExperience} />
      {/* main content */}
      <div className="flex flex-col relative w-full h-dvh backdrop-opacity-100">
        <Pages show={!isHome} page={selectedExperience} />
        <MainNav
          setHome={(isHome) => setIsHome(isHome)}
          setExperience={(experience) => setSelectedExperience(experience)}
        />
      </div>
    </>

  )
};

export {
  App
};
