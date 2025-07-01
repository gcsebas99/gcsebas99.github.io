import { useEffect, useState } from "react";
import type { Interest } from "../data/interests";
import { cn } from "../utils/class-names";
import { useWindowSize } from "../hooks/use-window-size";

type InterestsCardStripProps = {
  interests: Interest[];
};

const InterestsCardStrip: React.FC<InterestsCardStripProps> = ({ interests }) => {
  const { isScreenSizeSmallerThan, windowSize } = useWindowSize();
  const isMobile = isScreenSizeSmallerThan("md");
  const [expandedInterest, setExpandedInterest] = useState<string | null>(null);
  const [extraHeight, setExtraHeight] = useState<number | null>(null);
  const isAnyCardExpanded = expandedInterest !== null;
  const itemsCount = interests.length;

  useEffect(() => {
    if(windowSize.width < 440) {
      setExtraHeight(630);
    } else if (windowSize.width < 540) {
      setExtraHeight(530);
    } else if (windowSize.width < 640) {
      setExtraHeight(480);
    } else {
      setExtraHeight(null);
    }
  }, [windowSize]);

  return (
    <div className="flex flex-col w-full gap-y-4">
      <div
        className={cn(
          "w-full",
          "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 overflow-x-auto"
        )}
      >
        {interests.map((item) => {
          const isActive = expandedInterest === item.key;
          return (
            <div
              key={item.key}
              onClick={() => isMobile && setExpandedInterest(isActive ? null : item.key)}
              onMouseEnter={() => !isMobile && setExpandedInterest(item.key)}
              onMouseLeave={() => !isMobile && setExpandedInterest(null)}
              className={cn(
                "relative p-6 rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between",
                item.bg,
                "text-left",
                "transition-all duration-500 ease-in-out",
                itemsCount === 3 ? (isAnyCardExpanded ? (isActive ? "w-[70%]" : "w-[14%]") : "w-1/3") : "",
                itemsCount === 2 ? (isAnyCardExpanded ? (isActive ? "w-[80%]" : "w-[18%]") : "w-1/2") : "",
                itemsCount === 5 ? (isActive ? (extraHeight === 630 ? "h-[630px]" : (extraHeight === 530 ? "h-[530px]" : "h-[480px]")) + " sm:h-[440px]" : "h-32") : "",
                isMobile ? "min-h-30" : "h-[65vh]",
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className={cn(
                  isMobile ? "w-[220px] sm:w-[250px] h-[220px] sm:h-[250px]" : "w-[400px] h-[400px]",
                  "pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover",
                  "transition-opacity duration-500 ease-in-out",
                  isActive ? "opacity-30" : "opacity-100"
                )}
              />
              {extraHeight && extraHeight >= 530 ?
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/0" />
              : null}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-black/80 to-black/0",
                  "transition-opacity duration-500 ease-in-out",
                  isAnyCardExpanded && !isActive ? "opacity-100" : "opacity-0"
                )}
              />
              <h2
                className={cn(
                "z-30 font-bold text-lg sm:text-xl whitespace-nowrap origin-left",
                "transition-transform duration-500 ease-in-out",
                isAnyCardExpanded && !isActive && !isMobile ? "rotate-90" : "",
                )}
              >
                {item.title}
              </h2>
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-black/10 via-black/40 to-black/10",
                  "transition-opacity duration-500 ease-in-out",
                  isActive ? "opacity-100" : "opacity-0",
                  "flex items-center justify-center p-4"
                )}
              >
                <p
                  className={cn(
                    "select-none italic text-base sm:text-lg leading-7 lg:leading-9 px-2 sm:px-8",
                    "transition-opacity duration-500 ease-in-out",
                    isActive ? "opacity-100 delay-500" : "opacity-0",
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export {
  InterestsCardStrip,
};
