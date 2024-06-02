import { useEffect } from "react";
import Button from "./button";

const ParallaxEffect: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document
        .querySelectorAll<HTMLImageElement>(".parallaxWrap img")
        .forEach((shift) => {
          const position = parseFloat(shift.getAttribute("data-value") || "0");
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;

          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="parallaxWrap">
      <img src="/1planet.svg" data-value="-15" alt="parallax layer" />
      <img src="/2planet.svg" data-value="5" alt="parallax layer" />
      <img src="/3planet.svg" data-value="30" alt="parallax layer" />
      <img src="/4planet.svg" data-value="-5" alt="parallax layer" />
      <img src="/5planet.svg" data-value="15" alt="parallax layer" />
      <div>
        <h1 className="text-white mb-5">This is Page two.</h1>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
};

export default ParallaxEffect;
