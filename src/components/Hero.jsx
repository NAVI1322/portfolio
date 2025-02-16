import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { Button } from '@/components/ui/button'
import { Code2, GraduationCap, ArrowRight } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'
import { ModelCanvas } from './Model3D'

// Lazy load heavy components
const SparklesCore = lazy(() => import('./magicui/sparkles').then(mod => ({ default: mod.SparklesCore })))

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background with simplified gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon.purple/20 to-neon.cyan/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Mobile Background Animation - Lazy loaded */}
      <div className="absolute inset-0 lg:hidden">
        <Suspense fallback={null}>
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50} // Reduced density
            className="w-full h-full"
            particleColor="#00F5FF"
          />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 mb-4 backdrop-blur-sm"
              >
                <Code2 className="w-4 h-4" />
                <div className="flex items-center gap-1 overflow-hidden">
                  <motion.span
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-cyber text-sm text-neon.cyan"
                  >
                    Navi
                  </motion.span>
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="font-cyber text-sm text-neon.purple"
                  >
                    X
                  </motion.span>
                  <motion.span
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="font-cyber text-sm text-neon.pink"
                  >
                    dev
                  </motion.span>
                </div>
                <GraduationCap className="w-4 h-4" />
              </motion.div>

              <div>
                <h1 className="font-future text-5xl sm:text-6xl lg:text-7xl tracking-tight overflow-hidden">
                  <motion.span 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white/90 inline-block"
                  >
                    Hi, I'm{" "}
                  </motion.span>
                  <motion.span 
                    className="relative inline-flex"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/90">
                      Navneet Sharma
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-lg"
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.span>
                </h1>
              </div>

              <div className="space-y-4 mt-6">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-tech text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="inline-block"
                  >
                    A Full Stack Web Developer passionate about crafting elegant digital experiences
                  </motion.span>
                </motion.p>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="font-tech text-base sm:text-lg text-white/60 max-w-2xl mx-auto lg:mx-0 relative"
                >
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute -left-2 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon.cyan/20 to-transparent"
                  />
                  Combining decentralized technologies with modern web development, while building AI agents to automate and enhance digital processes
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-future group bg-neon.purple/20 hover:bg-neon.purple/30 border border-neon.purple/30 text-neon.purple relative overflow-hidden"
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-neon.purple/0 via-neon.purple/20 to-neon.purple/0"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-tech border-neon.cyan/30 text-neon.cyan hover:border-neon.cyan/50 relative overflow-hidden"
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-neon.cyan/0 via-neon.cyan/20 to-neon.cyan/0"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 1.5
                    }}
                  />
                  <span className="relative z-10">Contact Me</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Model */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative lg:h-[500px] w-full order-first lg:order-last"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon.purple/10 to-neon.cyan/10 rounded-3xl blur-3xl opacity-30" />
            <div className="relative h-full w-full">
              <ModelCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 