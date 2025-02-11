import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Building2, ArrowUpRight, Sparkles, FileDown } from 'lucide-react'
import { SparklesCore } from './magicui/sparkles'
import React, { useState } from 'react'
import { AnimatedBackground } from './magicui/animated-background'

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    duration: 'Jan 2023 - Present',
    location: 'San Francisco, CA',
    description: [
      'Led the development of a next-generation web application using React and Next.js',
      'Implemented advanced animations and micro-interactions to enhance user experience',
      'Mentored junior developers and conducted code reviews to maintain high code quality'
    ],
    color: 'from-neon.cyan to-neon.purple',
    icon: '💻',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    duration: 'Mar 2021 - Dec 2022',
    location: 'New York, NY',
    description: [
      'Developed and maintained multiple client projects using modern web technologies',
      'Optimized application performance resulting in 40% faster load times',
      'Collaborated with design team to implement pixel-perfect UI components'
    ],
    color: 'from-neon.purple to-neon.pink',
    icon: '🚀',
    skills: ['Node.js', 'React', 'MongoDB', 'AWS']
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    duration: 'Jun 2019 - Feb 2021',
    location: 'Austin, TX',
    description: [
      'Built responsive websites and web applications for various clients',
      'Implemented modern UI/UX designs using React and TailwindCSS',
      'Worked closely with backend team to integrate RESTful APIs'
    ],
    color: 'from-neon.pink to-neon.cyan',
    icon: '🎨',
    skills: ['React', 'CSS', 'JavaScript', 'REST APIs']
  }
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Animation variants for better organization and reuse
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: index => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const expandVariants = {
    closed: { 
      height: 0, 
      opacity: 0,
      transition: {
        height: {
          duration: 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        opacity: {
          duration: 0.1
        }
      }
    },
    open: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: {
          duration: 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        opacity: {
          duration: 0.2,
          delay: 0.05
        }
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                My Experience
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
            Building digital experiences and growing through challenges
          </p>
        </motion.div>

        {/* Enhanced Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mb-16"
        >
          <motion.a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Background with improved gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon.cyan/20 via-neon.purple/20 to-neon.pink/20 backdrop-blur-sm border border-white/10" />
            
            {/* Inner background with better contrast */}
            <div className="absolute inset-[1px] bg-background/80 rounded-xl z-0" />
            
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-neon.cyan/30 via-neon.purple/30 to-neon.pink/30 blur-xl" />
            </div>

            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon.cyan/10 via-neon.purple/10 to-neon.pink/10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Content with improved animation */}
            <span className="relative z-10 font-future text-white flex items-center gap-2">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FileDown className="w-5 h-5 text-neon.cyan" />
              </motion.div>
              <span className="relative">
                Download Resume
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-neon.cyan via-neon.purple to-neon.pink transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </span>
          </motion.a>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-2xl mx-auto px-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "50px" }}
              className="mb-12 last:mb-0"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
            >
              <div className="relative group cursor-pointer">
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div 
                    className="absolute left-8 top-20 w-px h-[calc(100%+3rem)] bg-gradient-to-b from-neon.cyan/20 to-transparent"
                  />
                )}

                <div className="relative flex gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`relative flex-none w-16 h-16 rounded-xl bg-gradient-to-br ${experience.color} p-[2px] shadow-2xl`}
                  >
                    <div className="w-full h-full rounded-[10px] bg-background/90 backdrop-blur-xl flex items-center justify-center text-2xl">
                      {experience.icon}
                    </div>
                    {/* Glow effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        scale: hoveredIndex === index ? 1.2 : 0.8
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute -inset-2 bg-gradient-to-br from-neon.cyan/50 to-neon.purple/20 rounded-xl blur-xl"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-neon.purple/10 transition-all duration-200 
                        ${hoveredIndex === index ? 'shadow-lg border-neon.cyan/20' : ''}`}
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <h3 className={`font-hero text-xl text-glow shadow-neon.cyan bg-clip-text text-transparent bg-gradient-to-r ${experience.color}`}>
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-future text-neon.cyan/60">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>

                      {/* Company & Location */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-future text-neon.purple/60">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ArrowUpRight className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description with updated animations */}
                      <AnimatePresence mode="wait">
                        {selectedIndex === index && (
                          <motion.div
                            variants={expandVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2 mb-4">
                              {experience.description.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    duration: 0.2,
                                    delay: i * 0.05,
                                    ease: [0.22, 1, 0.36, 1]
                                  }}
                                  className="flex items-start gap-2 text-sm font-cyber text-neon.cyan/60"
                                >
                                  <Sparkles className="w-4 h-4 flex-none mt-1" />
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                            
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                              {experience.skills.map((skill, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ 
                                    duration: 0.2,
                                    delay: i * 0.05,
                                    ease: [0.22, 1, 0.36, 1]
                                  }}
                                  className={`font-tech text-xs px-2 py-1 rounded-full bg-gradient-to-r ${experience.color} text-white shadow-lg`}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Click to expand hint */}
                      {selectedIndex !== index && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: hoveredIndex === index ? 1 : 0,
                            y: hoveredIndex === index ? 0 : 5
                          }}
                          transition={{ duration: 0.2 }}
                          className="font-cyber text-sm text-neon.cyan/60 mt-2"
                        >
                          Click to see more details
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 