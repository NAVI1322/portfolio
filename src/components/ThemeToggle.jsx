import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`relative w-10 h-10 rounded-full transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-neon.purple/10 hover:bg-neon.purple/20 hover:shadow-[0_0_15px_rgba(181,55,242,0.3)]' 
          : 'bg-neon.cyan/10 hover:bg-neon.cyan/20 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]'
      }`}
    >
      <div className="relative w-full h-full">
        {/* Sun */}
        <motion.div
          initial={{ scale: theme === 'dark' ? 1 : 0 }}
          animate={{ scale: theme === 'dark' ? 0 : 1, opacity: theme === 'dark' ? 0 : 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-neon.cyan" />
          {/* Sun rays */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1 h-1 bg-neon.cyan/50 rounded-full shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-8px)`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Moon */}
        <motion.div
          initial={{ scale: theme === 'dark' ? 0 : 1 }}
          animate={{ scale: theme === 'dark' ? 1 : 0, opacity: theme === 'dark' ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-neon.purple" />
          {/* Stars */}
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1 h-1 bg-neon.purple rounded-full shadow-[0_0_10px_rgba(181,55,242,0.5)]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Button>
  )
} 