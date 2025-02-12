import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from './button'
import { useToast } from './use-toast'

export function ResumeButton({ className, variant = 'default' }) {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      const response = await fetch('/resume.pdf')
      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Resume not available",
          description: "Please check back later."
        })
        return
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Navneet_Sharma_Resume.pdf'
      link.click()
      
      // Cleanup
      window.URL.revokeObjectURL(url)
      toast({
        title: "Success!",
        description: "Resume downloaded successfully!"
      })
    } catch (error) {
      console.error('Error downloading resume:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error downloading resume. Please try again later."
      })
    }
  }

  if (variant === 'nav') {
    return (
      <motion.button
        onClick={handleDownload}
        className="relative ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full 
          bg-gradient-to-r from-neon.cyan/10 to-neon.purple/10 
          text-neon.cyan hover:from-neon.cyan/20 hover:to-neon.purple/20 
          border border-neon.cyan/20 hover:border-neon.cyan/40 
          font-future transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-4 h-4" />
        Resume
      </motion.button>
    )
  }

  return (
    <Button
      onClick={handleDownload}
      className={className}
    >
      <span className="flex items-center gap-2">
        <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        Download Resume
      </span>
    </Button>
  )
} 