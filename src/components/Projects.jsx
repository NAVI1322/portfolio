import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react'
import { AnimatedBackground } from './magicui/animated-background'

const projects = [
  {
    title: 'Task Forge',
    description: 'A smart task management application powered by AI to help prioritize and organize tasks efficiently and AI generated TODO wiht resources with daily and weekly updates and also chat bot.',
    image: '/photos/AI_todo.webp',
    technologies: ['AI-Agent','React', 'OpenAI API', 'Node.js', 'MongoDB','Express','shadcn','tailwind','javascript','nodemailer','stripe'],
    github: 'https://github.com/NAVI1322/AI_todo.git',
    live: 'https://taskforge.navixdev.com',
    color: 'from-neon.cyan via-neon.purple to-neon.pink',
    shadowColor: 'shadow-neon.cyan/20',
    featured: true
  },
  {
    title: 'Tenki Weather App',
    description: 'Real-time weather application with beautiful anime style visualizations and accurate forecasts.',
    image: '/photos/Tenki.webp',
    technologies: ['React', 'Weather API', 'TailwindCSS', 'Framer Motion','javascript','framer-motion'],
    github: 'https://github.com/NAVI1322/Tenki_weather_app_updated.git',
    live: 'https://tenki.navixdev.com',
    color: 'from-neon.purple via-neon.pink to-neon.cyan',
    shadowColor: 'shadow-neon.purple/20',
    featured: true
  },
  {
    title: 'FastFreeze Hvac Services',
    description: 'Modern Hvac platform focusing on Hvac services.',
    image: '/photos/FastFreeze.webp',
    technologies: ["react","tailwind","shadcn","javascript","framer-motion"],
    github: 'https://github.com/NAVI1322/FFRS.git',
    live: 'https://fastfreezehvac.ca',
    color: 'from-neon.purple via-neon.pink to-neon.cyan',
    shadowColor: 'shadow-neon.purple/20',
    featured: true
  },
  {
    title: 'AllFitHub Fitness Platform',
    description: 'An inclusive fitness platform offering personalized workout consultations, custom meal planning, and expert-crafted training programs. Features AI-powered progress tracking and direct communication with certified trainers.',
    image: '/photos/AllFithub.webp',
    technologies: ['React', 'Node.js','prisma','postgres','shadcn','tailwind','javascript','OpenAI','Ninja'],
    github: 'https://github.com/NAVI1322/AllFitHub.git',
    live: 'https://afh.navixdev.com/',
    color: 'from-neon.pink via-neon.cyan to-neon.purple',
    shadowColor: 'shadow-neon.pink/20'
  },
  {
    title: 'URL Shortener Linky',
    description: 'Fast and reliable URL shortening service with analytics and custom alias support.',
    image: '/photos/url_shortner.webp',
    technologies: ['React', 'Express','Nodejs','Prisma','postgres','shadcn','tailwind','javascript'],
    github: 'https://github.com/NAVI1322/url_shortner.git',
    live: 'https://linky.navixdev.com',
    color: 'from-neon.cyan via-neon.purple to-neon.pink',
    shadowColor: 'shadow-neon.cyan/20'
  }
]

export default function Projects() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
  
  // Initialize with first 2 projects on left and last 3 on right
  const [leftProjects] = useState(projects.slice(0, 2)) // Changed to 2 projects
  const [rightProjects] = useState(projects.slice(2)) // Changed to get remaining 3 projects

  // Auto-slide for left side projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % leftProjects.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [leftProjects.length])

  // Function to handle project navigation
  const handleProjectNavigation = (newIndex) => {
    if (newIndex >= 0 && newIndex < leftProjects.length) {
      setActiveFeatureIndex(newIndex)
    }
  }

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
          {/* Left Side Featured Projects */}
          <motion.div className="relative lg:row-span-2">
            <div className="h-full relative overflow-hidden rounded-xl border border-white/10 bg-background/50 backdrop-blur-sm 
              transition-all duration-300 hover:border-neon.cyan/50 hover:shadow-lg">
              
              <AnimatePresence mode="wait">
                {leftProjects[activeFeatureIndex] && (
                  <motion.div
                    key={activeFeatureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex flex-col h-full"
                  >
                    {/* Image Container */}
                    <div 
                      className="relative aspect-video w-full overflow-hidden rounded-t-xl project-image-container cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add any image click handling here if needed
                      }}
                    >
                      <img
                        src={leftProjects[activeFeatureIndex].image}
                        alt={leftProjects[activeFeatureIndex].title}
                        className="absolute inset-0 w-full h-full object-cover object-center transform-gpu transition-all duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
                    </div>

                    {/* Content */}
                    <div className="p-8" onClick={e => e.stopPropagation()}>
                      {/* Title with Animated Underline */}
                      <div className="relative inline-block mb-4">
                        <h3 className={`font-future text-2xl bg-clip-text text-transparent bg-gradient-to-r ${leftProjects[activeFeatureIndex].color}`}>
                          {leftProjects[activeFeatureIndex].title}
                        </h3>
                        <div className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r ${leftProjects[activeFeatureIndex].color}`} />
                      </div>

                      {/* Description */}
                      <p className="font-cyber text-base text-neon.cyan/80 mb-6">
                        {leftProjects[activeFeatureIndex].description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {leftProjects[activeFeatureIndex].technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`px-4 py-1.5 rounded-full text-sm font-future
                              bg-gradient-to-r ${leftProjects[activeFeatureIndex].color} bg-opacity-10
                              border border-white/10 hover:border-neon.cyan/30
                              text-white shadow-lg ${leftProjects[activeFeatureIndex].shadowColor}
                              transition-all duration-300`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex gap-4 mt-2">
                          <a
                            href={leftProjects[activeFeatureIndex].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(leftProjects[activeFeatureIndex].github, '_blank');
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-future text-neon.purple hover:text-neon.cyan bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                          >
                            <Github className="w-4 h-4" />
                            <span className="whitespace-nowrap">View Code</span>
                          </a>
                          <a
                            href={leftProjects[activeFeatureIndex].live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(leftProjects[activeFeatureIndex].live, '_blank');
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-future text-neon.cyan hover:text-neon.purple bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                            <span className="whitespace-nowrap">Live Demo</span>
                          </a>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-2">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectNavigation(activeFeatureIndex - 1);
                            }}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon.cyan/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronLeft className="w-5 h-5 text-neon.cyan" />
                          </motion.button>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectNavigation(activeFeatureIndex + 1);
                            }}
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
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {leftProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleProjectNavigation(index)}
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

          {/* Right Side Projects */}
          <div className="grid grid-cols-1 gap-6">
            {rightProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-background/50 backdrop-blur-sm 
                  transition-all duration-300 hover:border-neon.cyan/50 hover:shadow-lg hover:-translate-y-1">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                    bg-gradient-to-br ${project.color}`} />
                  
                  {/* Content */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 p-4">
                    {/* Image Thumbnail */}
                    <div className="relative aspect-video w-full sm:w-72 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center transform-gpu transition-all duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/50" />
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 min-w-0 w-full">
                      <h3 className={`font-future text-base bg-clip-text text-transparent bg-gradient-to-r ${project.color} mb-2`}>
                        {project.title}
                      </h3>

                      <p className="font-cyber text-xs text-neon.cyan/80 mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-2 py-0.5 rounded-full text-xs font-future
                              bg-gradient-to-r ${project.color} bg-opacity-10
                              border border-white/10 hover:border-neon.cyan/30
                              text-white/80 shadow-lg ${project.shadowColor}
                              transition-all duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 mt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.github, '_blank');
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-future text-neon.purple hover:text-neon.cyan bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer z-10"
                        >
                          <Github className="w-4 h-4" />
                          <span className="whitespace-nowrap">View Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.live, '_blank');
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-future text-neon.cyan hover:text-neon.purple bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer z-10"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                          <span className="whitespace-nowrap">Live Demo</span>
                        </a>
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