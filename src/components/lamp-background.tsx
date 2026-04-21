import React from "react";
import FOREST from "../assets/forest.avif";

const overlayColor = "rgba(8, 20, 50, 0.92)";

const LampBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${FOREST})`,
          height: "100dvh",
        }}
      />
      <div
        className="absolute inset-0 w-full"
        style={{
          height: "100dvh",
          backgroundImage: `radial-gradient(at 300px 300px, ${overlayColor} 0, #050814 70%)`,
        }}
      />
    </div>
  );
};

export {
  LampBackground
};
