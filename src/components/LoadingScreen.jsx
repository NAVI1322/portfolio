import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon.purple/20 to-neon.cyan/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated logo or loading indicator */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 border-4 border-neon.cyan rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
              rotate: 360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 w-16 h-16 border-4 border-neon.purple rounded-full"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [1, 0.5, 1],
              rotate: -360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <motion.h2
            className="font-future text-2xl text-white/90 mb-2"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading Experience
          </motion.h2>
          <p className="font-tech text-sm text-white/60">
            🚧 Website Under Construction
          </p>
        </div>
      </div>
    </motion.div>
  )
} 