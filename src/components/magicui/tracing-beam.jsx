import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const TracingBeam = ({ children, className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const updateMousePosition = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        perspective: "1000px",
      }}
    >
      {isVisible && (
        <motion.div
          className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/40 to-primary/0"
          animate={{
            x: mousePosition.x,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 50,
              damping: 10,
              mass: 0.5,
            },
          }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />
      )}
      {children}
    </div>
  );
}; 