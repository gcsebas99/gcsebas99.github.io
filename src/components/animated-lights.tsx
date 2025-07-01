import { useMemo } from "react";

const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min

const generateLights = (count: number) =>
  Array.from({ length: count }, (_, i) => {
    const baseLeft = (i / count) * 100
    const jitter = getRandomValue(-10, 10)
    return {
      id: i,
      left: `${baseLeft + jitter}%`,
      scale: getRandomValue(0.5, 2.5),
      duration: getRandomValue(9, 14),
      delay: getRandomValue(0, 5),
    }
  })

const AnimatedLights = () => {
  // Tailwind's responsive classes don't help inside JS, so we determine the count based on screen size with a media query hook.
  const lightCount = useMemo(() => {
    if (window.innerWidth >= 1024) return 11
    if (window.innerWidth >= 640) return 9
    return 7
  }, [])

  const lights = useMemo(() => generateLights(lightCount), [lightCount])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 backdrop-blur-none">
      {lights.map(({ id, left, scale, duration, delay }) => (
        <div
          key={id}
          className="absolute top-[100vh] bottom-0 left-0 right-0 w-0 bg-white opacity-0 shadow-[0_0_20px_2px_#e9f1f1] animate-floatUp"
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
