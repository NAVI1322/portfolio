import { motion, useScroll } from 'framer-motion'
import { Suspense, lazy, useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnerToaster } from 'sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LoadingScreen from '@/components/LoadingScreen'
import LoadingSpinner from '@/components/LoadingSpinner'
import AnimatedCursor from "react-animated-cursor"

// Lazy load non-critical components
const Skills = lazy(() => import('@/components/Skills'))
const Experience = lazy(() => import('@/components/Experience'))
const Projects = lazy(() => import('@/components/Projects'))
const Achievements = lazy(() => import('@/components/Achievements'))
const Certifications = lazy(() => import('@/components/Certifications'))
const Contact = lazy(() => import('@/components/Contact'))
const Footer = lazy(() => import('@/components/Footer'))

export default function App() {
  const { scrollYProgress } = useScroll()
  const [isLoading, setIsLoading] = useState(true)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // 1024px is the 'lg' breakpoint
    }

    // Initial check
    checkScreenSize()

    // Add resize listener
    window.addEventListener('resize', checkScreenSize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <TooltipProvider>
      {isLargeScreen && (
        <AnimatedCursor 
          innerSize={8}
          outerSize={8}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.custom',
              options: {
                innerSize: 12,
                outerSize: 12,
                color: '255, 255, 255',
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5
              }
            }
          ]}
        />
      )}
      <div className={`min-h-screen w-full bg-background text-foreground antialiased transition-colors duration-300 ${!isLargeScreen ? 'cursor-default' : 'cursor-none'}`}>
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
          style={{ scaleX: scrollYProgress }}
        />
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-start w-full pt-16">
          <div className="w-full">
            <Hero />
          </div>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
              <Experience />
              <Projects />
              <Achievements />
              <Certifications />
              <Contact />
            </Suspense>
          </div>
          <div className="w-full">
            <Suspense fallback={<LoadingSpinner />}>
              <Footer />
            </Suspense>
          </div>
        </main>

        <Toaster />
        <SonnerToaster position="top-right" richColors />
      </div>
    </TooltipProvider>
  )
}
