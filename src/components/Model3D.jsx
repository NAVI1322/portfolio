import React, { useRef, Suspense, useEffect, useState } from 'react'
import { useGLTF, OrbitControls, useAnimations } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ErrorBoundary } from 'react-error-boundary'
import { motion } from 'framer-motion'
import { Linkedin, Github, Music2Icon } from 'lucide-react'
import { useTheme } from 'next-themes'

// Add background music URL - replace with your actual music file path
const BACKGROUND_MUSIC_URL = '/sounds/background-music.mp3'
const MODEL_PATH = '/models/model (1).glb'

function Scene({ isAnimating }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <Model isAnimating={isAnimating} />
    </>
  )
}

const Model = React.memo(({ scale = 1.1, position = [0, -1, 0], isAnimating = false }) => {
  const group = useRef()
  const { scene, animations } = useGLTF(MODEL_PATH)
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (animations.length && mixer && actions) {
      mixer.stopAllAction()
      if (isAnimating) {
        const danceAction = actions[Object.keys(actions)[0]]
        if (danceAction) {
          danceAction.reset().play()
          danceAction.setEffectiveTimeScale(1.2)
        }
      }
    }
  }, [actions, animations, mixer, isAnimating])

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  )
})

Model.displayName = 'Model'

export function ModelCanvas() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

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

  return (
    <div className="w-full h-full relative hidden lg:block">
      <ErrorBoundary FallbackComponent={() => <div>Error loading 3D model</div>}>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Canvas
            style={{ background: 'transparent' }}
            camera={{
              position: [0, 0, 4],
              fov: 35
            }}
          >
            <Scene isAnimating={isAnimating} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </Suspense>
      </ErrorBoundary>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-4">
        <motion.a
          href="https://www.github.com/navi322"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border backdrop-blur-sm border-[#00F5FF]/20 bg-black/20 text-[#00F5FF] hover:border-[#00F5FF]/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/navneet7"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border backdrop-blur-sm border-[#00F5FF]/20 bg-black/20 text-[#00F5FF] hover:border-[#00F5FF]/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>
        <motion.button
          onClick={toggleMusic}
          className={`p-3 rounded-full border backdrop-blur-sm
            ${isMusicPlaying 
              ? 'border-[#FF71CE]/50 bg-black/40 text-[#FF71CE]' 
              : 'border-[#00F5FF]/20 bg-black/20 text-[#00F5FF]'
            }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Music2Icon className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  )
}

useGLTF.preload(MODEL_PATH) 