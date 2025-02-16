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

  useEffect(() => {
    // Simulate loading time and resources loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show loading screen for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    
    <TooltipProvider>
       <AnimatedCursor innerSize={10}
      outerSize={10}
      color='193, 11, 110'
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
        '.link'
      ]} />
      <div className="min-h-screen w-full bg-background text-foreground antialiased transition-colors duration-300">
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
