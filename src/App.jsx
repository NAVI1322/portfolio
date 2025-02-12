import { motion, useScroll } from 'framer-motion'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnerToaster } from 'sonner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
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
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Certifications />
          <Contact />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>

      <Toaster />
      <SonnerToaster position="top-right" richColors />
    </div>
  )
}
