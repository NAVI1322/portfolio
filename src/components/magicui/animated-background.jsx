import { motion } from 'framer-motion'
import React from 'react'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-synthwave-blue/30 rounded-full mix-blend-screen blur-3xl animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-synthwave-purple/30 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-synthwave-pink/30 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-4000" />

      {/* Animated Lines */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-synthwave-blue/50 to-transparent w-full"
            style={{ top: `${25 * (i + 1)}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-1 bg-synthwave-blue/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none" />
    </div>
  )
} 