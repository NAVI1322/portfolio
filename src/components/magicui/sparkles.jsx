import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const SparklesCore = ({
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  className,
  id,
}) => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      setDimensions({
        width: container.offsetWidth,
        height: container.offsetHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const particleCount = Math.floor((dimensions.width * dimensions.height) / 20000) * particleDensity;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }

    setParticles(newParticles);
  }, [dimensions, minSize, maxSize, particleDensity]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background,
        overflow: "hidden",
      }}
      id={id}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          style={{
            position: "absolute",
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            backgroundColor: particleColor,
          }}
        />
      ))}
    </div>
  );
}; 