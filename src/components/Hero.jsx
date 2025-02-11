import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ModelCanvas } from './Model3D'
import { Code2, GraduationCap, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon.purple/20 via-background to-neon.cyan/20">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon.purple/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon.cyan/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon.purple/10 border border-neon.purple/20 text-neon.purple"
            >
              <Code2 className="w-4 h-4" />
              <span className="font-cyber text-sm">Self-taught Developer</span>
              <GraduationCap className="w-4 h-4" />
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="hero-title">
                Navneet Sharma
              </h1>
              <p className="hero-subtitle">
                Frontend Developer & UI/UX Designer
              </p>
            </div>

            {/* Tagline */}
            <p className="hero-description">
              "Crafting digital experiences with code and creativity"
            </p>

            {/* Description */}
            <p className="font-cyber text-sm text-neon.cyan/80">
              Building immersive web experiences that combine clean code with stunning design. 
              Transforming ideas into interactive realities, one pixel at a time.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
                className="font-future group relative overflow-hidden bg-neon.purple/20 hover:bg-neon.purple/30 border border-neon.purple/30 text-neon.purple hover:border-neon.purple/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-neon.purple/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
                className="font-tech group relative overflow-hidden border-neon.cyan/30 text-neon.cyan hover:border-neon.cyan/50"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-neon.cyan/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[500px] w-full order-first lg:order-last"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon.purple/10 to-neon.cyan/10 rounded-3xl blur-3xl opacity-30" />
            <div className="absolute inset-0 bg-background/30 rounded-3xl backdrop-blur-sm" />
            
            {/* 3D Model */}
            <div className="relative h-full w-full">
              <ModelCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 