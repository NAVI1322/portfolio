import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

export function AnimatedBackground() {
  // Generate random particles with direct color values
  const particles = useMemo(() => {
    const colors = {
      blue: '#00F5FF',
      purple: '#B537F2',
      pink: '#FF71CE'
    }
    return Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
      color: Math.random() > 0.6 ? colors.blue : Math.random() > 0.3 ? colors.purple : colors.pink
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-0 -left-4 w-96 h-96 rounded-full mix-blend-screen blur-3xl animate-blob"
        style={{ backgroundColor: 'rgba(0, 245, 255, 0.3)' }}
      />
      <motion.div 
        className="absolute top-0 -right-4 w-96 h-96 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-2000"
        style={{ backgroundColor: 'rgba(181, 55, 242, 0.3)' }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-4000"
        style={{ backgroundColor: 'rgba(255, 113, 206, 0.3)' }}
      />

      {/* Animated Lines */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px w-full"
            style={{ 
              top: `${25 * (i + 1)}%`,
              background: 'linear-gradient(to right, transparent, rgba(0, 245, 255, 0.5), transparent)'
            }}
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

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px 0 ${particle.color}`
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute size-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: 'rgba(0, 245, 255, 0.5)'
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