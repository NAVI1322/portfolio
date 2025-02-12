import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Building2, ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveIndex((prevIndex) => (prevIndex + newDirection + experiences.length) % experiences.length);
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-neon.cyan/20 via-neon.purple/20 to-neon.pink/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
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
                My Journey
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
              </h2>
            </motion.div>
          </div>
          <p className="font-tech text-base text-neon.green/90 max-w-xl mx-auto mt-4">
            A timeline of my professional growth and achievements
          </p>
        </motion.div>

        {/* Experience Carousel */}
        <div className="relative h-[600px] perspective-1000">
          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/30 backdrop-blur-sm border border-neon.cyan/20 text-neon.cyan hover:bg-background/50 hover:border-neon.cyan/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/30 backdrop-blur-sm border border-neon.cyan/20 text-neon.cyan hover:bg-background/50 hover:border-neon.cyan/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Experience Cards */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full max-w-3xl mx-auto">
                <div className="relative group">
                  {/* Card Background with 3D effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon.cyan/20 via-neon.purple/20 to-neon.pink/20 rounded-2xl transform -rotate-6 transition-transform duration-300 group-hover:rotate-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-neon.cyan/20 via-neon.purple/20 to-neon.pink/20 rounded-2xl transform rotate-3 transition-transform duration-300 group-hover:rotate-0" />
                  
                  {/* Card Content */}
                  <motion.div
                    className="relative bg-background/40 backdrop-blur-lg rounded-xl p-8 border border-neon.purple/20 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing Corner Effects */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-neon.cyan via-neon.purple to-neon.pink opacity-30 blur-3xl transform rotate-45" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-neon.pink via-neon.purple to-neon.cyan opacity-30 blur-3xl transform -rotate-45" />

                    {/* Header */}
                    <div className="relative mb-8">
                      <div className="flex items-center gap-6">
                        {/* Enhanced Logo Container */}
                        <div className="relative">
                          <motion.div
                            className="absolute -inset-4 bg-gradient-to-r from-neon.cyan via-neon.purple to-neon.pink opacity-40 blur-lg rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360],
                              opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${experiences[activeIndex].color} p-[2px] transform group-hover:rotate-12 transition-all duration-500 hover:scale-110`}>
                            <div className="relative w-full h-full rounded-[14px] bg-background overflow-hidden">
                              {/* Animated Border */}
                              <motion.div
                                className="absolute inset-0"
                                animate={{
                                  background: [
                                    `linear-gradient(0deg, transparent 0%, ${experiences[activeIndex].color.split(' ')[1]} 100%)`,
                                    `linear-gradient(360deg, transparent 0%, ${experiences[activeIndex].color.split(' ')[1]} 100%)`
                                  ],
                                  opacity: [0.1, 0.3, 0.1]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              
                              {/* Icon Container */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                  className="text-4xl transform"
                                  animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, 0, -5, 0]
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  {experiences[activeIndex].icon}
                                </motion.div>
                              </div>

                              {/* Shine Effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                                animate={{
                                  x: ['-200%', '200%']
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  repeatDelay: 1
                                }}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  transform: 'skewX(-20deg)'
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className={`text-2xl font-future bg-clip-text text-transparent bg-gradient-to-r ${experiences[activeIndex].color} mb-2`}>
                            {experiences[activeIndex].title}
                          </h3>
                          <p className="font-cyber text-lg text-neon.cyan/60">
                            {experiences[activeIndex].company}
                          </p>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex flex-wrap items-center gap-6 mt-4 text-base font-cyber text-neon.cyan/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>{experiences[activeIndex].duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowUpRight className="w-5 h-5" />
                          <span>{experiences[activeIndex].location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 mb-8">
                      {experiences[activeIndex].description.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <Sparkles className="w-5 h-5 text-neon.cyan flex-shrink-0 mt-1" />
                          <p className="font-cyber text-base text-neon.cyan/80">{item}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                      {experiences[activeIndex].skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className={`px-4 py-2 rounded-full text-sm font-cyber
                            bg-gradient-to-r ${experiences[activeIndex].color} bg-opacity-10
                            border border-neon.cyan/20 text-white/90
                            group-hover:border-neon.cyan/50 group-hover:bg-opacity-20
                            transition-all duration-300`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            {experiences.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-neon.cyan scale-125' 
                    : 'bg-neon.cyan/30 hover:bg-neon.cyan/50'
                }`}
                onClick={() => {
                  const newDirection = index > activeIndex ? 1 : -1;
                  setDirection(newDirection);
                  setActiveIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 