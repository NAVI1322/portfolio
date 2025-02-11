import { useRef, Suspense, useEffect, useState } from 'react'
import { useGLTF, OrbitControls, useAnimations } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { ErrorBoundary } from 'react-error-boundary'
import { motion } from 'framer-motion'
import { Linkedin, Github, Music2Icon } from 'lucide-react'
import { useTheme } from 'next-themes'

// Add background music URL - replace with your actual music file path
const BACKGROUND_MUSIC_URL = '/sounds/background-music.mp3'

function Model({ scale = 1.1, position = [0, -1, 0], isAnimating = false }) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/model.glb')
  const { actions, mixer } = useAnimations(animations, group)
  const [isMouseMoving, setIsMouseMoving] = useState(false)
  const prevMouseX = useRef(0)

  // Handle animation changes
  useEffect(() => {
    if (animations.length) {
      mixer.stopAllAction()
      
      if (isAnimating) {
        // Play dance animation
        const danceAction = actions[Object.keys(actions)[0]]
        if (danceAction) {
          danceAction.reset().play()
          danceAction.setEffectiveTimeScale(1.2)
        }
      }
    }
  }, [actions, animations, mixer, isAnimating])

  // Add smooth rotation based on mouse movement and auto-rotation when still
  useFrame((state) => {
    if (group.current) {
      const mouseX = (state.mouse.x * Math.PI) / 10

      // Check if mouse is moving
      if (Math.abs(mouseX - prevMouseX.current) > 0.001) {
        setIsMouseMoving(true)
        prevMouseX.current = mouseX
      } else {
        setIsMouseMoving(false)
      }

      // Apply rotation based on mouse movement or auto-rotate
      if (isMouseMoving) {
        // Mouse-controlled rotation
        group.current.rotation.y += (mouseX - group.current.rotation.y) * 0.1
      } else {
        // Auto-rotation when still
        group.current.rotation.y += 0.005
      }

      // Apply floating animation
      if (isAnimating) {
        group.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      } else {
        group.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05
      }
    }
  })

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  )
}

function Fallback() {
  return null
}

export function ModelCanvas() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const controlsRef = useRef()

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio(BACKGROUND_MUSIC_URL)
    audioRef.current.loop = true
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Handle music toggle
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
    setIsAnimating(!isAnimating)
  }

  // Add event listener for passive wheel events
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
    }

    const options = { passive: true }
    document.addEventListener('wheel', handleWheel, options)
    return () => document.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="w-full h-full relative">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={null}>
          <Canvas
            camera={{ 
              position: [0, 0, 4],
              fov: 35,
              near: 0.1,
              far: 1000
            }}
            eventPrefix="client"
            eventSource={document.documentElement}
          >
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1.2}
              castShadow
            />
            {/* Theme-colored spotlights */}
            <spotLight
              position={[-5, 10, -5]}
              intensity={0.8}
              angle={0.3}
              penumbra={1}
              color={isDark ? '#4f46e5' : '#3b82f6'}
              distance={20}
            />
            <spotLight
              position={[5, 10, 5]}
              intensity={0.8}
              angle={0.3}
              penumbra={1}
              color={isDark ? '#7c3aed' : '#6366f1'}
              distance={20}
            />
            {/* Additional rim light */}
            <pointLight
              position={[0, -5, -5]}
              intensity={0.4}
              color={isDark ? '#8b5cf6' : '#6366f1'}
            />
            <Model isAnimating={isAnimating} />
            <OrbitControls 
              ref={controlsRef}
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableRotate={true}
              enableDamping={true}
              dampingFactor={0.05}
              rotateSpeed={0.5}
              enableY={false}
              makeDefault
              domElement={document.documentElement}
              eventsTarget={document.documentElement}
              listenToKeyEvents={window}
            />
          </Canvas>
        </Suspense>
      </ErrorBoundary>

      {/* Floating Buttons with enhanced styling */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-4">
        {/* LinkedIn Button with Tooltip */}
        <motion.div className="relative group">
          <motion.a
            href="https://www.linkedin/in/navneet7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-[#00F5FF]/20 bg-black/20 backdrop-blur-sm
              text-[#00F5FF] hover:border-[#00F5FF]/50 hover:text-white
              transition-all duration-300 flex items-center justify-center
              hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 
            rounded-lg border border-[#00F5FF]/20 bg-black/80 backdrop-blur-sm
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            pointer-events-none whitespace-nowrap">
            <span className="text-[#00F5FF] text-sm font-cyber">Yes, the 3D model looks like me! Connect on LinkedIn</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 
              w-2 h-2 bg-black/80 border-t border-r border-[#00F5FF]/20"></div>
          </div>
        </motion.div>

        {/* GitHub Button with Tooltip */}
        <motion.div className="relative group">
          <motion.a
            href="https://www.github.com/navi1322"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-[#B537F2]/20 bg-black/20 backdrop-blur-sm
              text-[#B537F2] hover:border-[#B537F2]/50 hover:text-white
              transition-all duration-300 flex items-center justify-center
              hover:shadow-[0_0_15px_rgba(181,55,242,0.3)]"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 
            rounded-lg border border-[#B537F2]/20 bg-black/80 backdrop-blur-sm
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            pointer-events-none whitespace-nowrap">
            <span className="text-[#B537F2] text-sm font-cyber">Check out my projects!</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 
              w-2 h-2 bg-black/80 border-t border-r border-[#B537F2]/20"></div>
          </div>
        </motion.div>

        {/* Music Button with Animation and Status */}
        <motion.div className="relative group">
          <motion.button
            onClick={toggleMusic}
            className={`relative p-3 rounded-full border backdrop-blur-sm
              transition-all duration-300 flex items-center justify-center
              ${isMusicPlaying 
                ? 'border-[#FF71CE]/50 bg-black/40 text-[#FF71CE] hover:shadow-[0_0_15px_rgba(255,113,206,0.3)]' 
                : 'border-[#00F5FF]/20 bg-black/20 text-[#00F5FF] hover:border-[#00F5FF]/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]'
              }`}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: isMusicPlaying ? [0, -4, 0] : 0
            }}
            transition={{
              duration: 1,
              repeat: isMusicPlaying ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <Music2Icon className="w-5 h-5" />
            {isMusicPlaying && (
              <div className="absolute -right-1 -top-1">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#FF71CE]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            )}
          </motion.button>
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 
            rounded-lg border border-[#00F5FF]/20 bg-black/80 backdrop-blur-sm
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            pointer-events-none whitespace-nowrap">
            <span className="text-[#00F5FF] text-sm font-cyber">
              {isMusicPlaying ? 'Stop the groove!' : 'Make me dance!'}
            </span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 
              w-2 h-2 bg-black/80 border-t border-r border-[#00F5FF]/20"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

useGLTF.preload('/models/model.glb') 