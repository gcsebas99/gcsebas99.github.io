import React, { useEffect, useRef } from "react";
import { cn } from "../utils/class-names";
import FOREST from "../assets/forest.avif";

type LampBackgroundProps = {
  show: boolean;
  colorExp: number;
};

const colors = [
  "rgba(8, 20, 50, 0.92)",
  "rgba(15, 8, 38, 0.92)",
  "rgba(5, 22, 35, 0.92)",
  "rgba(5, 28, 18, 0.92)",
  "rgba(35, 20, 5, 0.92)"
];

const LampBackground: React.FC<LampBackgroundProps> = ({ show, colorExp = 0 }) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const selectedColor = colors[colorExp] ?? colors[0];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (gradientRef.current) {
        const { clientX, clientY } = event;
        gradientRef.current.style.backgroundImage = `radial-gradient(at ${clientX}px ${clientY}px, ${selectedColor} 0, #050814 70%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [selectedColor]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-0 transition-opacity duration-700 ease-in-out pointer-events-none",
        show ? "opacity-100" : "opacity-0",
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${FOREST})`,
          height: "100dvh",
        }}
      />
      <div
        ref={gradientRef}
        className="absolute inset-0 w-full"
        style={{
          height: "100dvh",
          backgroundImage: `radial-gradient(at 300px 300px, ${selectedColor} 0, #050814 70%)`,
        }}
      />
    </div>
  );
};

export {
  LampBackground
};
