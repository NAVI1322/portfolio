import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, Code2, Sparkles } from 'lucide-react'
import React from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',
    color: 'from-neon.cyan to-neon.purple'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
    color: 'from-neon.purple to-neon.pink'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    color: 'from-neon.pink to-neon.cyan'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:your@email.com',
    color: 'from-neon.cyan to-neon.purple'
  }
]

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-primary/[0.02]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-neon.purple/20 to-neon.cyan/20 opacity-[0.15] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-neon.cyan" />
              <span className="font-hero text-2xl bg-clip-text text-transparent bg-gradient-to-r from-neon.cyan via-neon.purple to-neon.pink">
                NaviXdev
              </span>
              <Sparkles className="w-6 h-6 text-neon.pink" />
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-neon.cyan/20 to-neon.purple/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`relative p-3 rounded-full bg-gradient-to-r ${social.color} bg-opacity-10 border border-neon.purple/20 backdrop-blur-sm group-hover:border-neon.cyan/50 transition-all duration-300`}>
                  {React.createElement(social.icon, {
                    className: "w-5 h-5 text-white group-hover:text-white transition-colors"
                  })}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-cyber text-sm text-neon.cyan/60 hover:text-neon.cyan transition-colors duration-300"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="font-tech text-sm text-neon.green/60 mb-2">
              Crafted with passion using React & Framer Motion
            </p>
            <p className="font-cyber text-sm text-neon.cyan/60">
              © {new Date().getFullYear()} NaviXdev. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 