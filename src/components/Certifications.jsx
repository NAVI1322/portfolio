import { motion } from 'framer-motion'
import { Binary, Code2, Container } from 'lucide-react'
import { AnimatedBackground } from './magicui/animated-background'
import React from 'react'

const certifications = [
  {
    title: "DSA - C/C++",
    organization: "Bangalore Computers",
    description: "Comprehensive Data Structures and Algorithms program covering advanced programming concepts in C/C++.",
    icon: Binary,
    date: "2024",
    color: "from-neon.pink via-neon.cyan to-neon.purple",
    skills: ["Data Structures", "Algorithms", "C++", "Problem Solving"]
  },
  {
    title: "100xDevs Cohort 2.0",
    organization: "Harkirat Singh",
    description: "Intensive full-stack development program covering MERN stack, system design, and real-world projects.",
    icon: Code2,
    date: "2024",
    color: "from-neon.cyan via-neon.purple to-neon.pink",
    skills: ["MERN Stack", "System Design", "TypeScript", "DevOps"]
  },
  {
    title: "Docker Certification",
    organization: "Docker Inc.",
    description: "Professional certification in Docker containerization, orchestration, and deployment strategies.",
    icon: Container,
    date: "2024",
    color: "from-neon.purple via-neon.pink to-neon.cyan",
    skills: ["Containerization", "Docker", "Kubernetes", "CI/CD"]
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
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
                Certifications
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
                <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-neon.cyan" />
                <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-neon.pink" />
              </h2>
            </motion.div>
          </div>
          <p className="font-tech text-base text-neon.green/90 max-w-xl mx-auto mt-4">
            Professional certifications and technical qualifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-background/50 backdrop-blur-sm 
                transition-all duration-300 hover:border-neon.cyan/50 hover:shadow-lg hover:-translate-y-1">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                  bg-gradient-to-br ${cert.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-neon.cyan/10 to-neon.purple/10 
                      border border-neon.purple/20 shadow-lg shadow-neon.cyan/10
                      group-hover:shadow-neon.cyan/30 transition-all duration-300`}>
                      {React.createElement(cert.icon, {
                        className: "w-6 h-6 text-neon.cyan"
                      })}
                    </div>

                    <div className="flex-1">
                      <h3 className={`font-future text-lg bg-clip-text text-transparent bg-gradient-to-r ${cert.color} mb-1`}>
                        {cert.title}
                      </h3>
                      <p className="font-tech text-sm text-neon.cyan/60 mb-2">
                        {cert.organization}
                      </p>
                      <p className="font-cyber text-sm text-neon.cyan/80 mb-4">
                        {cert.description}
                      </p>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2.5 py-1 text-xs font-future rounded-full 
                              bg-neon.purple/10 border border-neon.purple/30
                              group-hover:border-neon.cyan/30 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Date Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="font-tech text-xs text-neon.cyan/60 px-2.5 py-1 rounded-full 
                          bg-neon.purple/10 border border-neon.purple/30">
                          {cert.date}
                        </span>
                      </div>
                    </div>
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