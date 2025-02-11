import { motion } from 'framer-motion'
import React from 'react'
import { Trophy, Star, Award, Target, Sparkles } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Best Developer Award',
    description: 'Recognized for outstanding contributions to web development',
    year: '2023',
    stats: '100+ Projects Delivered',
    color: 'from-[#00F5FF] to-[#B537F2]',
    hoverColor: 'group-hover:from-[#00F5FF] group-hover:to-[#B537F2]',
    shadowColor: 'shadow-[#00F5FF]/20',
    glowColor: '[#00F5FF]'
  },
  {
    icon: Star,
    title: 'Top Performer',
    description: 'Consistently delivered high-quality projects ahead of schedule',
    year: '2022',
    stats: '95% Success Rate',
    color: 'from-[#B537F2] to-[#FF71CE]',
    hoverColor: 'group-hover:from-[#B537F2] group-hover:to-[#FF71CE]',
    shadowColor: 'shadow-[#B537F2]/20',
    glowColor: '[#B537F2]'
  },
  {
    icon: Award,
    title: 'Innovation Excellence',
    description: 'Led the development of groundbreaking features and technologies',
    year: '2022',
    stats: '15+ Innovations',
    color: 'from-[#FF71CE] to-[#00F5FF]',
    hoverColor: 'group-hover:from-[#FF71CE] group-hover:to-[#00F5FF]',
    shadowColor: 'shadow-[#FF71CE]/20',
    glowColor: '[#FF71CE]'
  },
  {
    icon: Target,
    title: 'Project Success',
    description: 'Achieved 100% client satisfaction rate across all projects',
    year: '2021',
    stats: '50+ Happy Clients',
    color: 'from-[#00F5FF] to-[#B537F2]',
    hoverColor: 'group-hover:from-[#00F5FF] group-hover:to-[#B537F2]',
    shadowColor: 'shadow-[#00F5FF]/20',
    glowColor: '[#00F5FF]'
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-neon.purple/5 to-background" />
      </div>

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
                {/* Decorative elements */}
                <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-neon.cyan" />
                <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-neon.pink" />
              </h2>
            </motion.div>
          </div>
          <p className="font-tech text-base text-neon.green/90 max-w-xl mx-auto mt-4">
            Milestones and recognition throughout my journey
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Achievement Card */}
              <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm 
                border border-white/5 transition-all duration-500 
                hover:border-[#00F5FF]/30 hover:shadow-lg hover:shadow-[#00F5FF]/10"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 
                  bg-gradient-to-br ${achievement.color}`} />
                
                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className={`relative flex-none p-3 rounded-xl 
                        bg-gradient-to-br ${achievement.color} ${achievement.hoverColor} 
                        bg-opacity-10 border border-white/10
                        transition-all duration-500 ease-out shadow-sm ${achievement.shadowColor}`}
                    >
                      {React.createElement(achievement.icon, {
                        className: `w-6 h-6 text-${achievement.glowColor} relative z-10`
                      })}
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 
                        bg-gradient-to-br ${achievement.color} blur-xl`} />
                    </motion.div>

                    <div className="flex-1">
                      {/* Title and Year */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-xl font-future bg-clip-text text-transparent bg-gradient-to-r ${achievement.color} ${achievement.hoverColor}`}>
                          {achievement.title}
                        </h3>
                        <span className={`text-sm px-3 py-1 rounded-full 
                          bg-gradient-to-r ${achievement.color} ${achievement.hoverColor} 
                          text-white font-future shadow-lg group-hover:shadow-xl 
                          transition-all duration-500`}
                        >
                          {achievement.year}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-cyber text-sm text-neon.cyan/60 group-hover:text-neon.cyan/80 transition-colors duration-500 mb-4">
                        {achievement.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-2 text-sm font-future">
                        <Sparkles className={`w-4 h-4 text-${achievement.glowColor}`} />
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${achievement.color}`}>
                          {achievement.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] 
                    bg-gradient-to-r ${achievement.color} ${achievement.hoverColor} 
                    opacity-0 group-hover:opacity-100 transition-all duration-500`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}