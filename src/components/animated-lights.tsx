import { useMemo } from "react";

const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min

const orbColors = [
  "shadow-[0_0_80px_40px_rgba(99,102,241,0.07)]",
  "shadow-[0_0_80px_40px_rgba(6,182,212,0.05)]",
  "shadow-[0_0_80px_40px_rgba(167,139,250,0.06)]",
];

const generateLights = (count: number) =>
  Array.from({ length: count }, (_, i) => {
    const baseLeft = (i / count) * 100
    const jitter = getRandomValue(-8, 8)
    return {
      id: i,
      left: `${baseLeft + jitter}%`,
      scale: getRandomValue(1.5, 3.5),
      duration: getRandomValue(14, 22),
      delay: getRandomValue(0, 8),
      colorClass: orbColors[i % orbColors.length],
    }
  })

const AnimatedLights = () => {
  const lightCount = useMemo(() => {
    if (window.innerWidth >= 1024) return 5
    if (window.innerWidth >= 640) return 4
    return 3
  }, [])

  const lights = useMemo(() => generateLights(lightCount), [lightCount])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {lights.map(({ id, left, scale, duration, delay, colorClass }) => (
        <div
          key={id}
          className={`absolute top-[100vh] w-1 h-1 rounded-full opacity-0 animate-floatUp ${colorClass}`}
          style={{
            left,
            transform: `scale(${scale})`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export {
  AnimatedLights
};
