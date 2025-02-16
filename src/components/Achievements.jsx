import { motion } from 'framer-motion'
import React from 'react'
import { Trophy, Star, Award, Target, Sparkles, Medal, Crown, Rocket, Heart, Code2, Users, Globe } from 'lucide-react'
import { AnimatedBackground } from './magicui/animated-background'

const achievements = [
  
  {
    title: "Hackville 2025 Winner",
    description: "Secured second place in Hackville 2025 for creating a cutting-edge tech solution that addressed real-world challenges.",
    icon: Medal,
    date: "2025",
    color: "from-neon.purple via-neon.pink to-neon.cyan",
    stats: "2nd Place",
    featured: true
  },
  {
    title: "NCT Hackathon Winner",
    description: "First place in NCT Hackathon for developing an innovative solution. Competed against talented teams from across the region.",
    icon: Trophy,
    date: "2024",
    color: "from-neon.cyan via-neon.purple to-neon.pink",
    stats: "2nd Place",
    featured: true
  },
  {
    title: "BramHack Participant",
    description: "Participated in BramHack, collaborating with diverse teams and developing innovative solutions under time constraints.",
    icon: Code2,
    date: "2024",
    color: "from-neon.pink via-neon.cyan to-neon.purple",
    stats: "Top 10 Teams"
  },
  {
    title: "Digital Transformation Volunteer",
    description: "Helped local businesses establish online presence through website development and digital strategy consulting.",
    icon: Heart,
    date: "2023-Present",
    color: "from-neon.cyan via-neon.purple to-neon.pink",
    stats: "2 Businesses Helped"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open-source projects, helping improve community-driven software.",
    icon: Globe,
    date: "2023-Present",
    color: "from-neon.purple via-neon.pink to-neon.cyan",
    stats: "10+ Contributions"
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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
                Achievements
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
            Celebrating victories and contributions in tech
          </p>
        </motion.div>

        {/* Featured Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.filter(a => a.featured).map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-xl border-2 border-neon.cyan/30 bg-background/50 backdrop-blur-sm 
                transition-all duration-300 hover:border-neon.cyan/50 hover:shadow-lg hover:-translate-y-1">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                  bg-gradient-to-br ${achievement.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br from-neon.cyan/10 to-neon.purple/10 
                      border border-neon.purple/20 shadow-lg shadow-neon.cyan/10
                      group-hover:shadow-neon.cyan/30 transition-all duration-300`}>
                      {React.createElement(achievement.icon, {
                        className: "w-8 h-8 text-neon.cyan"
                      })}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`font-future text-xl bg-clip-text text-transparent bg-gradient-to-r ${achievement.color}`}>
                          {achievement.title}
                        </h3>
                        <span className="font-tech text-sm text-neon.cyan/60">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="font-cyber text-sm text-neon.cyan/80 mb-4">
                        {achievement.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                        bg-neon.purple/10 border border-neon.purple/30
                        group-hover:border-neon.cyan/30 transition-all duration-300">
                        <Trophy className="w-4 h-4 text-neon.cyan" />
                        <span className="font-future text-sm text-neon.cyan">
                          {achievement.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.filter(a => !a.featured).map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-background/50 backdrop-blur-sm 
                transition-all duration-300 hover:border-neon.cyan/50 hover:shadow-lg hover:-translate-y-1">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                  bg-gradient-to-br ${achievement.color}`} />
                
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br from-neon.cyan/10 to-neon.purple/10 
                      border border-neon.purple/20 shadow-lg shadow-neon.cyan/10
                      group-hover:shadow-neon.cyan/30 transition-all duration-300`}>
                      {React.createElement(achievement.icon, {
                        className: "w-5 h-5 text-neon.cyan"
                      })}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-future text-base bg-clip-text text-transparent bg-gradient-to-r ${achievement.color}`}>
                          {achievement.title}
                        </h3>
                        <span className="font-tech text-xs text-neon.cyan/60">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="font-cyber text-xs text-neon.cyan/80 mb-3 line-clamp-2">
                        {achievement.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full 
                        bg-neon.purple/10 border border-neon.purple/30
                        group-hover:border-neon.cyan/30 transition-all duration-300">
                        <Sparkles className="w-3.5 h-3.5 text-neon.cyan" />
                        <span className="font-tech text-xs text-neon.cyan">
                          {achievement.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Trophy, label: "Hackathons Won", value: "2" },
            { icon: Heart, label: "Businesses Helped", value: "2" },
            { icon: Globe, label: "Open Source Contributions", value: "10+" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center p-4 rounded-xl border border-white/10 
                bg-background/50 backdrop-blur-sm hover:border-neon.cyan/30 transition-all duration-300">
                <div className="p-3 rounded-full bg-neon.purple/10 mb-3">
                  {React.createElement(stat.icon, {
                    className: "w-6 h-6 text-neon.cyan"
                  })}
                </div>
                <span className="font-future text-2xl text-neon.cyan mb-1">{stat.value}</span>
                <span className="font-tech text-sm text-neon.cyan/60">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}