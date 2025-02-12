import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, Mail, MessageSquare, User, Sparkles } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create email content
      const emailSubject = formData.subject
      const emailBody = `
From: ${formData.name}

${formData.message}
      `
      
      // Create mailto link with encoded content
      const mailtoLink = `mailto:navneet.sharmaxdev@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      
      // Open default email client
      window.location.href = mailtoLink

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
        duration: 5000,
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-neon.purple/5 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
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
                Get in Touch
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
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        {/* Enhanced Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Animated Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon.cyan via-neon.purple to-neon.pink rounded-lg opacity-75 blur group-hover:opacity-100 animate-tilt transition duration-1000 group-hover:duration-200" />
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-background/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 space-y-6"
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label className="font-future text-sm text-neon.cyan/80" htmlFor="name">
                  Your Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="font-cyber pl-10 bg-white/5 border-white/10 focus:border-neon.cyan/50 placeholder:text-white/20"
                    placeholder="John Doe"
                    required
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neon.cyan/60" />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="font-future text-sm text-neon.cyan/80" htmlFor="subject">
                  Subject
                </label>
                <div className="relative">
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="font-cyber pl-10 bg-white/5 border-white/10 focus:border-neon.cyan/50 placeholder:text-white/20"
                    placeholder="What's this about?"
                    required
                  />
                  <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neon.cyan/60" />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="font-future text-sm text-neon.cyan/80" htmlFor="message">
                  Message
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="font-cyber min-h-[150px] bg-white/5 border-white/10 focus:border-neon.cyan/50 placeholder:text-white/20"
                    placeholder="Tell me about your project..."
                    required
                  />
                  <Sparkles className="absolute right-3 top-3 w-4 h-4 text-neon.cyan/30" />
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 font-future relative overflow-hidden group bg-gradient-to-r from-neon.cyan/20 via-neon.purple/20 to-neon.pink/20 hover:from-neon.cyan/30 hover:via-neon.purple/30 hover:to-neon.pink/30 border border-white/10 hover:border-neon.cyan/50 text-white transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-4 h-4" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon.cyan/20 via-neon.purple/20 to-neon.pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 