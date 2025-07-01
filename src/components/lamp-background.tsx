import React, { useEffect, useRef } from "react";
import { cn } from "../utils/class-names";
import FOREST from "../assets/forest.avif";

type LampBackgroundProps = {
  show: boolean;
  colorExp: number;
};

const colors = [
  "rgba(3, 36, 43, 0.90)",
  "rgba(20, 6, 28, 0.90)",
  "rgba(53, 18, 35, 0.90)",
  "rgba(15, 43, 33, 0.90)",
  "rgba(61, 44, 22, 0.90)"
];

const LampBackground: React.FC<LampBackgroundProps> = ({ show, colorExp = 0 }) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const selectedColor = colors[colorExp] ?? colors[0];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (gradientRef.current) {
        const { clientX, clientY } = event;
        gradientRef.current.style.backgroundImage = `radial-gradient(at ${clientX}px ${clientY}px, ${selectedColor} 0, #0e0f1a 70%)`;
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
          backgroundImage: `radial-gradient(at 300px 300px, ${selectedColor} 0, #0e0f1a 70%)`,
        }}
      />
    </div>
  );
};

export {
  LampBackground
};
