import RocketIcon from "@mui/icons-material/Rocket";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const RocketLoader = () => {
  const controls = useAnimation();
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 8,
      },
    });

    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [controls]);

  const orbitRadius = 50;

  const radians = (angle * Math.PI) / 180;
  const x = orbitRadius * Math.cos(radians);
  const y = orbitRadius * Math.sin(radians);

  return (
    <div className="flex rounded-full items-center h-[200px] w-[200px] justify-center bg-black/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(100)].map((_, i) => {
          const angle = Math.random() * 2 * Math.PI;
          const distance = 100 + Math.random() * 50;
          const delay = Math.random() * 3;

          const startX = Math.cos(angle) * distance + 100;
          const startY = Math.sin(angle) * distance + 100;

          return (
            <motion.div
              key={i}
              initial={{ x: startX, y: startY, opacity: 1 }}
              animate={{ x: 100, y: 100, opacity: 0, scale: 0.2 }}
              transition={{
                repeat: Infinity,
                duration: 3 + Math.random() * 2,
                delay,
                ease: "easeIn",
              }}
              style={{
                width: 2,
                height: 2,
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
              }}
            />
          );
        })}
      </div>

      <div className="absolute w-[90px] h-[90px] rounded-full bg-black opacity-70 blur-2xl z-0" />

      <motion.div
        className="relative w-[50px] h-[50px] rounded-full bg-black z-10"
        style={{
          filter:
            "drop-shadow(0 0 15px rgba(255,255,255,0.1)) contrast(1.2) saturate(1.5)",
          animation: "lightWarp 4s ease-in-out infinite",
        }}
      >
        <style>{`
          @keyframes lightWarp {
            0%, 100% {
              filter: drop-shadow(0 0 15px rgba(255,255,255,0.1)) contrast(1.2) saturate(1.5) hue-rotate(0deg);
            }
            50% {
              filter: drop-shadow(0 0 20px rgba(255,255,255,0.3)) contrast(1.5) saturate(2) hue-rotate(10deg);
            }
          }
        `}</style>
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 "
        style={{
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${
            angle + 90
          }deg)`,
        }}
      >
        <div className="relative w-[40px] h-[60px]">
          <div className="absolute top-[-20%] left- transform -translate-x-[90%] rotate-90">
            <div className="w-[10px] h-[30px] bg-yellow-900 opacity-80 rounded-full mt-[-8px] animate-flame-slow blur-sm"></div>
            <div className="w-[10px] h-[30px] bg-yellow-300 opacity-60 rounded-full mt-[-4px] animate-flame-slow blur-sm"></div>
          </div>

          <RocketIcon className="text-white w-[40px] h-[40px] rotate-90" />
        </div>
      </motion.div>
    </div>
  );
};
