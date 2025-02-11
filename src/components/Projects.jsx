import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code2, Sparkles, ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react'
import { AnimatedBackground } from './magicui/animated-background'

const projects = [
  {
    title: 'Modern E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com',
    color: 'from-neon.cyan via-neon.purple to-neon.pink',
    shadowColor: 'shadow-neon.cyan/20',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website with 3D animations, interactive UI, and responsive design.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'Three.js', 'Framer Motion', 'TailwindCSS'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://portfolio-demo.com',
    color: 'from-neon.purple via-neon.pink to-neon.cyan',
    shadowColor: 'shadow-neon.purple/20',
    featured: true
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered task prioritization and scheduling.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/ai-tasks',
    live: 'https://ai-tasks-demo.com',
    color: 'from-neon.purple via-neon.pink to-neon.cyan',
    shadowColor: 'shadow-neon.purple/20'
  },
  {
    title: 'Real-time Chat App',
    description: 'Feature-rich chat application with video calls, file sharing, and end-to-end encryption.',
    image: '/projects/chatapp.jpg',
    technologies: ['React', 'WebRTC', 'Socket.io', 'Firebase'],
    github: 'https://github.com/yourusername/chat-app',
    live: 'https://chat-app-demo.com',
    color: 'from-neon.pink via-neon.cyan to-neon.purple',
    shadowColor: 'shadow-neon.pink/20'
  },
  {
    title: 'Real-time Chat App',
    description: 'Feature-rich chat application with video calls, file sharing, and end-to-end encryption.',
    image: '/projects/chatapp.jpg',
    technologies: ['React', 'WebRTC', 'Socket.io', 'Firebase'],
    github: 'https://github.com/yourusername/chat-app',
    live: 'https://chat-app-demo.com',
    color: 'from-neon.pink via-neon.cyan to-neon.purple',
    shadowColor: 'shadow-neon.pink/20'
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <motion.div
              className="relative inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-neon.cyan via-neon.purple to-neon.pink opacity-30 blur-xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h2 className="font-future text-4xl md:text-5xl px-8 py-4 text-white relative z-10">
                My Projects
                <div className="absolute inset-0 bg-gradient-to-r from-neon.cyan via-neon.purple to-neon.pink opacity-50 blur-lg -z-10" />
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-neon.cyan via-neon.purple to-neon.pink"
                  style={{
                    boxShadow: '0 0 20px rgba(0,245,255,0.5), 0 0 30px rgba(181,55,242,0.5), 0 0 40px rgba(255,113,206,0.5)'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                {/* Decorative elements */}
                <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-neon.cyan" />
                <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-neon.pink" />
              </h2>
            </motion.div>
          </div>
          <p className="font-tech text-base text-neon.green/90 max-w-xl mx-auto mt-4">
            Showcasing my latest work and innovative solutions
          </p>
        </motion.div>

        {/* Enhanced Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Projects Card (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:row-span-2"
          >
            <div className="h-full relative overflow-hidden rounded-xl border border-white/10 bg-background/50 backdrop-blur-sm 
              transition-all duration-300 hover:border-neon.cyan/50 hover:shadow-lg">
              
              {/* Featured Project Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeatureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-black/50" />
                    <img
                      src={featuredProjects[activeFeatureIndex].image}
                      alt={featuredProjects[activeFeatureIndex].title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Title with Animated Underline */}
                    <div className="relative inline-block mb-4">
                      <h3 className={`font-future text-2xl bg-clip-text text-transparent bg-gradient-to-r ${featuredProjects[activeFeatureIndex].color}`}>
                        {featuredProjects[activeFeatureIndex].title}
                      </h3>
                      <div className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r ${featuredProjects[activeFeatureIndex].color}`} />
                    </div>

                    {/* Description */}
                    <p className="font-cyber text-base text-neon.cyan/80 mb-6">
                      {featuredProjects[activeFeatureIndex].description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {featuredProjects[activeFeatureIndex].technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className={`px-4 py-1.5 rounded-full text-sm font-future
                            bg-gradient-to-r ${featuredProjects[activeFeatureIndex].color} bg-opacity-10
                            border border-white/10 hover:border-neon.cyan/30
                            text-white shadow-lg ${featuredProjects[activeFeatureIndex].shadowColor}
                            transition-all duration-300`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6">
                        <motion.a
                          href={featuredProjects[activeFeatureIndex].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-base font-future text-neon.purple hover:text-neon.cyan transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Github className="w-5 h-5" />
                          View Code
                        </motion.a>
                        <motion.a
                          href={featuredProjects[activeFeatureIndex].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-base font-future text-neon.cyan hover:text-neon.purple transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                          Live Demo
                        </motion.a>
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex gap-2">
                        <motion.button
                          onClick={() => setActiveFeatureIndex(prev => (prev === 0 ? featuredProjects.length - 1 : prev - 1))}
                          className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon.cyan/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronLeft className="w-5 h-5 text-neon.cyan" />
                        </motion.button>
                        <motion.button
                          onClick={() => setActiveFeatureIndex(prev => (prev === featuredProjects.length - 1 ? 0 : prev + 1))}
                          className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon.cyan/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronRight className="w-5 h-5 text-neon.cyan" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeatureIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeFeatureIndex 
                        ? 'bg-neon.cyan w-6' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regular Projects (Right Side) */}
          <div className="grid grid-cols-1 gap-6">
            {regularProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-background/50 backdrop-blur-sm 
                  transition-all duration-300 hover:border-neon.cyan/50 hover:shadow-lg hover:-translate-y-1">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                    bg-gradient-to-br ${project.color}`} />
                  
                  {/* Content */}
                  <div className="flex items-start gap-4 p-6">
                    {/* Image Thumbnail */}
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
                    </div>

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className={`font-future text-lg bg-clip-text text-transparent bg-gradient-to-r ${project.color} mb-2`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-cyber text-sm text-neon.cyan/80 mb-4">
                        {project.description}
                      </p>

                      {/* Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-future text-neon.purple hover:text-neon.cyan transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-future text-neon.cyan hover:text-neon.purple transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                          Demo
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 