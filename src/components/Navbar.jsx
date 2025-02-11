import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Menu, X, ChevronRight } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state with smoother transition
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position with offset
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
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (!element) return

    // Close mobile menu if open
    setIsMobileMenuOpen(false)

    // Calculate offset based on viewport width (mobile vs desktop)
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
          {/* Logo with Animation */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="nav-logo flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-cyber font-bold text-3xl text-neon.cyan"
            >
              Navi
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="font-cyber font-bold text-3xl text-neon.purple relative"
            >
              X
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon.cyan via-neon.purple to-neon.pink opacity-0 blur-xl"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-cyber font-bold text-3xl text-neon.pink"
            >
              dev
            </motion.div>
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

            {/* Resume Button */}
            <motion.a
              href="/path-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full overflow-hidden font-future bg-gradient-to-r from-neon.cyan/10 to-neon.purple/10 text-neon.cyan hover:from-neon.cyan/20 hover:to-neon.purple/20 border border-neon.cyan/20 hover:border-neon.cyan/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon.cyan/20 to-neon.purple/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              className="p-2 rounded-full bg-neon.purple/10 hover:bg-neon.purple/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-neon.cyan" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-neon.purple" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/10"
          >
            <motion.div 
              className="max-w-7xl mx-auto py-4 px-4 space-y-1"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
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
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: -20, opacity: 0 }
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-neon.cyan' : ''}`} />
                    </span>
                  </motion.a>
                )
              })}
              <motion.a
                href="/path-to-your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-4 rounded-lg font-future text-sm text-neon.purple bg-neon.purple/10 hover:bg-neon.purple/20 transition-colors duration-200"
                variants={{
                  open: { x: 0, opacity: 1 },
                  closed: { x: -20, opacity: 0 }
                }}
                whileHover={{ x: 5 }}
              >
                <span className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 