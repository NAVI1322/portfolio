import { motion } from 'framer-motion'
import { Medal, ExternalLink, Calendar, Sparkles } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    date: 'Dec 2023',
    credentialId: 'AWS-123456',
    link: 'https://aws.amazon.com',
    skills: ['Cloud Architecture', 'AWS Services', 'Security'],
    color: 'from-neon.cyan/20 to-neon.purple/20',
    hoverColor: 'group-hover:from-neon.cyan/30 group-hover:to-neon.purple/30',
    shadowColor: 'shadow-neon.cyan/20'
  },
  {
    title: 'Meta Frontend Developer',
    organization: 'Meta',
    date: 'Oct 2023',
    credentialId: 'META-789012',
    link: 'https://meta.com',
    skills: ['React', 'JavaScript', 'Web Development'],
    color: 'from-neon.purple/20 to-neon.pink/20',
    hoverColor: 'group-hover:from-neon.purple/30 group-hover:to-neon.pink/30',
    shadowColor: 'shadow-neon.purple/20'
  },
  {
    title: 'Google Cloud Professional',
    organization: 'Google',
    date: 'Aug 2023',
    credentialId: 'GCP-345678',
    link: 'https://cloud.google.com',
    skills: ['Cloud Computing', 'DevOps', 'Kubernetes'],
    color: 'from-neon.pink/20 to-neon.cyan/20',
    hoverColor: 'group-hover:from-neon.pink/30 group-hover:to-neon.cyan/30',
    shadowColor: 'shadow-neon.pink/20'
  },
  {
    title: 'Advanced React & GraphQL',
    organization: 'Wes Bos',
    date: 'Jul 2023',
    credentialId: 'WB-901234',
    link: 'https://reactcourse.com',
    skills: ['React', 'GraphQL', 'Node.js'],
    color: 'from-neon.cyan/20 to-neon.purple/20',
    hoverColor: 'group-hover:from-neon.cyan/30 group-hover:to-neon.purple/30',
    shadowColor: 'shadow-neon.cyan/20'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
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
                Certifications
                <div className="absolute inset-0 bg-[#00F5FF] opacity-10 blur-lg -z-10" />
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#00F5FF]"
                  style={{
                    boxShadow: '0 0 20px rgba(0,245,255,0.3)'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                {/* Decorative elements */}
                <div className="absolute -left-4 -top-4 w-8 h-8 border-t-2 border-l-2 border-[#00F5FF]/30" />
                <div className="absolute -right-4 -bottom-4 w-8 h-8 border-b-2 border-r-2 border-[#00F5FF]/30" />
              </h2>
            </motion.div>
          </div>
          <p className="font-tech text-base text-[#00F5FF]/50 max-w-xl mx-auto mt-4">
            Professional certifications and achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Certificate Card */}
              <div className="relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm 
                border border-white/10 transition-all duration-500 
                hover:border-neon.cyan/30 hover:shadow-lg hover:shadow-neon.cyan/10"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
                  bg-gradient-to-br ${cert.color}`} />
                
                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className={`relative flex-none p-3 rounded-xl 
                        bg-gradient-to-br ${cert.color} ${cert.hoverColor} 
                        bg-opacity-10 border border-neon.cyan/20
                        transition-all duration-500 ease-out ${cert.shadowColor}`}
                    >
                      <Medal className="w-6 h-6 text-neon.cyan group-hover:text-white transition-colors duration-300" />
                    </motion.div>

                    <div className="flex-1">
                      {/* Title and Organization */}
                      <div className="space-y-1">
                        <h3 className="text-xl font-future text-neon.cyan group-hover:text-white transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <p className="font-cyber text-sm text-neon.cyan/60">
                          {cert.organization}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="flex items-center gap-4 mt-4 text-sm">
                        <div className="flex items-center gap-1 text-neon.cyan/60">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-neon.cyan/60">
                          <Sparkles className="w-4 h-4" />
                          <span>{cert.credentialId}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {cert.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-3 py-1 rounded-full text-xs font-cyber
                              bg-black/20 border border-neon.cyan/20
                              group-hover:border-neon.cyan/30 group-hover:bg-neon.cyan/5
                              text-neon.cyan/70 group-hover:text-neon.cyan
                              transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Verify Link */}
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-future 
                          text-neon.cyan/60 hover:text-neon.cyan transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Verify Certificate
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] 
                    bg-gradient-to-r from-transparent via-neon.cyan/30 to-transparent
                    opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 