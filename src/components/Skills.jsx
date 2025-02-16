import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import {
  Code2,
  Palette,
  Database,
  Globe,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
  Box,
  Layout,
  Terminal,
  Component
} from 'lucide-react'
import { OrbitingCircles } from './magicui/orbiting-circles'
import { AnimatedBackground } from './magicui/animated-background'
import { 
  SiReact, 
  SiVuedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiHtml5,
  SiDotnet, 
  SiFigma, 
  SiSketch, 
  SiNodedotjs, 
  SiPython,
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiFirebase, 
  SiTypescript,
  SiJavascript, 
  SiBootstrap, 
  SiMui,
  SiFramer, 
  SiThreedotjs,
  SiDocker, 
  SiAmazonaws, 
  SiGit, 
  SiGitlab, 
  SiBitbucket,
  SiExpress, 
  SiSocketdotio,
  SiCss3
} from 'react-icons/si'

// Technology to Icon mapping
const techIcons = {
  'React': SiReact,
  'Vue': SiVuedotjs,
  'Next.js': SiNextdotjs,
  'TailwindCSS': SiTailwindcss,
  'React Native': SiReact,
  'Html': SiHtml5,
  'CSS3': SiCss3,
  'ASP.NET': SiDotnet,
  'Figma': SiFigma,
  'Sketch': SiSketch,
  'Node.js': SiNodedotjs,
  'Python': SiPython,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Firebase': SiFirebase,
  'express': SiExpress,
  'sockets': SiSocketdotio,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Bootstrap': SiBootstrap,
  'Material UI': SiMui,
  'shadcn': Component,
  'framer motion': SiFramer,
  'three.js': SiThreedotjs,
  'Docker': SiDocker,
  'AWS': SiAmazonaws,
  'Git': SiGit,
  'Gitlab': SiGitlab,
  'Bitbucket': SiBitbucket,
  'System Design': Layers,
  'Design Patterns': Code2,
  'API Design': Globe,
  'Microservices': Database,
  'Prototyping': Layout
}

const skills = [
  {
    title: 'Frontend Development',
    icon: Code2,
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Vue', icon: SiVuedotjs },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'React Native', icon: SiReact },
      { name: 'Html', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'ASP.NET', icon: SiDotnet }
    ],
    orbitIcons: ['⚛️', '🎨', '📱', '⚡','⚛️', '🎨', '📱', '⚡'],
    color: 'from-neon.cyan to-neon.purple',
    description: 'Building beautiful and responsive user interfaces with modern frameworks and libraries.'
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    technologies: [
      { name: 'Figma', icon: SiFigma },
      { name: 'Sketch', icon: SiSketch },
      { name: 'Prototyping', icon: Layout }
    ],
    orbitIcons: ['🎨', '✨', '🎯', '🔍'],
    color: 'from-neon.purple to-neon.pink',
    description: 'Creating intuitive and engaging user experiences with attention to detail and user research.'
  },
  {
    title: 'Backend Development',
    icon: Database,
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Python', icon: SiPython },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'express', icon: SiExpress },
      { name: 'sockets', icon: SiSocketdotio }
    ],
    orbitIcons: ['🚀', '🔧', '🗄️', '⚙️'],
    color: 'from-neon.pink to-neon.cyan',
    description: 'Developing robust server-side applications with scalable architectures and efficient databases.'
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    technologies: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Vue', icon: SiVuedotjs },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TailwindCSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Material UI', icon: SiMui },
      { name: 'shadcn', icon: Component },
      { name: 'framer motion', icon: SiFramer },
      { name: 'three.js', icon: SiThreedotjs }
    ],
    orbitIcons: ['🌐', '💻', '⚡', '📱'],
    color: 'from-neon.cyan to-neon.purple',
    description: 'Mastering core web technologies and modern development practices for optimal performance.'
  },
  {
    title: 'DevOps',
    icon: Cpu,
    technologies: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: SiAmazonaws },
      { name: 'Git', icon: SiGit },
      { name: 'Gitlab', icon: SiGitlab },
      { name: 'Bitbucket', icon: SiBitbucket }
    ],
    orbitIcons: ['🐳', '☁️', '🔄', '📦'],
    color: 'from-neon.purple to-neon.pink',
    description: 'Implementing automated deployment pipelines and managing cloud infrastructure efficiently.'
  },
  {
    title: 'Software Architecture',
    icon: Layers,
    technologies: [
      { name: 'System Design', icon: Layers },
      { name: 'Design Patterns', icon: Code2 },
      { name: 'API Design', icon: Globe },
      { name: 'Microservices', icon: Database }
    ],
    orbitIcons: ['🏗️', '📐', '🔌', '🎯'],
    color: 'from-neon.pink to-neon.cyan',
    description: 'Designing scalable and maintainable software systems with modern architectural patterns.'
  }
]

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // Start with first skill selected

  // Auto-rotate skills every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((current) => (current + 1) % skills.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
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
                My Skills
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
            Combining technical expertise with creative design to build amazing experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-6">
          {/* Skills List */}
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ease-out
                  ${selectedIndex === index 
                    ? 'bg-background/60 border-2 border-neon.cyan/30 shadow-lg shadow-neon.cyan/20' 
                    : 'bg-background/30 border border-neon.purple/20 hover:border-neon.cyan/30 hover:shadow-lg hover:shadow-neon.purple/10'
                  } backdrop-blur-sm`}
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br from-neon.cyan/20 to-neon.purple/20 
                    border border-neon.purple/30 shadow-md shadow-neon.cyan/10
                    ${selectedIndex === index ? 'shadow-lg shadow-neon.cyan/30' : ''}`}>
                    {React.createElement(skill.icon, {
                      className: "w-5 h-5 text-neon.cyan"
                    })}
                  </div>
                  <span className="font-cyber text-base text-neon.cyan/90">{skill.title}</span>
                  <ChevronRight 
                    className={`w-4 h-4 ml-auto transition-all duration-300 ease-out
                    ${selectedIndex === index 
                      ? 'rotate-90 text-neon.cyan' 
                      : 'text-neon.cyan/50 group-hover:text-neon.cyan/70'
                    }`} 
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Skill Details */}
          <div className="relative min-h-[400px] rounded-2xl border border-neon.purple/30 p-6 overflow-hidden">
            <div className="absolute inset-0 bg-background/60 backdrop-blur-md" />
            
            <AnimatePresence mode="wait">
              {selectedIndex !== null && (
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br from-neon.cyan/10 to-neon.purple/10 
                          border border-neon.purple/20 shadow-lg shadow-neon.cyan/10`}>
                          {React.createElement(skills[selectedIndex].icon, {
                            className: "w-6 h-6 text-neon.cyan"
                          })}
                        </div>
                        <div>
                          <h3 className="text-xl font-future bg-clip-text text-transparent bg-gradient-to-r from-neon.cyan to-neon.purple mb-2">
                            {skills[selectedIndex].title}
                          </h3>
                          <p className="font-cyber text-sm text-neon.cyan/70">
                            {skills[selectedIndex].description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-1 flex items-center justify-center my-8">
                      <div className="relative w-[220px] h-[220px]">
                        {/* Center Icon */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                          <motion.div
                            className="p-4 rounded-full bg-background/80 backdrop-blur-sm 
                              border-2 border-neon.cyan/50 shadow-lg"
                            animate={{ 
                              boxShadow: ['0 0 20px rgba(0,245,255,0.2)', '0 0 30px rgba(0,245,255,0.4)', '0 0 20px rgba(0,245,255,0.2)']
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {React.createElement(skills[selectedIndex].icon, {
                              className: "w-8 h-8 text-neon.cyan"
                            })}
                          </motion.div>
                        </div>

                        {/* Orbiting Icons */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <OrbitingCircles 
                            radius={85}
                            duration={15}
                            iconSize={36}
                            path={true}
                          >
                            {skills[selectedIndex].technologies.map((tech, techIndex) => (
                              <div key={techIndex} className="relative group">
                                <motion.div 
                                  className="flex items-center justify-center w-9 h-9 
                                    bg-background/80 rounded-full backdrop-blur-sm 
                                    border border-neon.purple/30
                                    hover:border-neon.cyan/50 hover:scale-110
                                    transition-all duration-300"
                                  whileHover={{ scale: 1.2 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                  {React.createElement(tech.icon, {
                                    className: "w-5 h-5 text-neon.cyan"
                                  })}
                                </motion.div>
                                {/* Tooltip */}
                                <div className="absolute opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-200 pointer-events-none 
                                  bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg 
                                  border border-neon.cyan/20 -top-10 left-1/2 
                                  -translate-x-1/2 whitespace-nowrap z-30"
                                >
                                  <span className="font-tech text-xs text-white">
                                    {tech.name}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </OrbitingCircles>
                        </div>
                      </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="mt-8">
                      <div className="flex flex-wrap gap-3 justify-center">
                        {skills[selectedIndex].technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-cyber
                              bg-background/40 border border-white/5
                              text-white/80 hover:text-neon.cyan
                              hover:border-neon.cyan/30 hover:bg-background/60
                              transition-all duration-300"
                          >
                            {React.createElement(tech.icon, {
                              className: "w-4 h-4"
                            })}
                            <span>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedIndex === null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative h-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 text-white/40 animate-pulse" />
                    <p className="font-cyber text-base text-white/60">Select a skill to see details</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
} 