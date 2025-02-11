import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { ResumeButton } from './ui/resume-button'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

// Debounce helper
const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleScroll = useCallback(debounce(() => {
    setIsScrolled(window.scrollY > 20)

    const sections = navItems.map(item => item.href.substring(1))
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (!element) return false
      const rect = element.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom >= 100
    })
    if (currentSection) {
      setActiveSection(currentSection)
    }
  }, 100), [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (!element) return

    setIsMobileMenuOpen(false)
    const offset = window.innerWidth >= 768 ? 80 : 60
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`nav-container ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="nav-logo flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-cyber font-bold text-3xl text-neon.cyan">Navi</span>
            <span className="font-cyber font-bold text-3xl text-neon.purple">X</span>
            <span className="font-cyber font-bold text-3xl text-neon.pink">dev</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-neon.cyan/10 to-neon.purple/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              )
            })}
            <ResumeButton variant="nav" />
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full bg-neon.purple/10 hover:bg-neon.purple/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neon.cyan" />
              ) : (
                <Menu className="w-6 h-6 text-neon.purple" />
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/10"
          >
            <div className="max-w-7xl mx-auto py-4 px-4 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-2 px-4 rounded-lg font-future text-sm ${
                      isActive 
                        ? 'text-neon.cyan bg-neon.cyan/10' 
                        : 'text-foreground hover:text-neon.cyan hover:bg-neon.cyan/5'
                    } transition-colors duration-200`}
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-neon.cyan' : ''}`} />
                    </span>
                  </motion.a>
                )
              })}
              <ResumeButton className="w-full justify-between" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 