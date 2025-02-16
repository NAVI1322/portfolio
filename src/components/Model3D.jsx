import React, { useRef, Suspense, useEffect, useState } from 'react'
import { useGLTF, OrbitControls, useAnimations, Stage, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ErrorBoundary } from 'react-error-boundary'
import { motion } from 'framer-motion'
import { Linkedin, Github, Music2Icon } from 'lucide-react'
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

const MODEL_PATH = '/models/model (1).glb'

function Scene({ isAnimating }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1.5} 
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.001}
      />
      <directionalLight
        position={[-3, 3, -3]}
        intensity={0.5}
      />
      <directionalLight
        position={[0, 3, -5]}
        intensity={0.4}
        color="#00F5FF"
      />
      <directionalLight
        position={[-5, 0, 0]}
        intensity={0.3}
        color="#FF71CE"
      />
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1.2, 0]} 
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <Model isAnimating={isAnimating} />
    </>
  )
}

const Model = React.memo(({ scale = 1.9, position = [0, -0.9, 0], isAnimating = false }) => {
  const group = useRef()
  const { scene, animations } = useGLTF(MODEL_PATH)
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

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
  }, [actions, animations, mixer, isAnimating, scene])

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  )
})

Model.displayName = 'Model'

export function ModelCanvas() {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className="w-full h-[600px] relative hidden lg:block">
      <div className="absolute inset-0 bg-gradient-to-br from-neon.purple/20 to-neon.cyan/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <ErrorBoundary FallbackComponent={() => <div>Error loading 3D model</div>}>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Canvas
            shadows="soft"
            dpr={[1, 2]}
            camera={{ 
              fov: 45, 
              position: [0, 0, 8],
              near: 0.1,
              far: 100
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'transparent'
            }}
          >
            <PresentationControls
              speed={1.5}
              global
              zoom={0.7}
              polar={[-0.1, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
              config={{ mass: 2, tension: 400 }}
            >
              <Stage 
                environment={null} 
                intensity={0.5} 
                adjustCamera={false}
                shadows="contact"
                preset="rembrandt"
                center
              >
                <Scene isAnimating={isAnimating} />
              </Stage>
            </PresentationControls>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </Suspense>
      </ErrorBoundary>

      <div className="absolute bottom-4 right-4 flex flex-col gap-4">
        <TooltipRoot>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-tech text-sm">Check out my GitHub projects</p>
          </TooltipContent>
        </TooltipRoot>
        <TooltipRoot>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-tech text-sm">Connect with me on LinkedIn</p>
          </TooltipContent>
        </TooltipRoot>
        <TooltipRoot>
          <TooltipTrigger asChild>
            <motion.button
              onClick={() => setIsAnimating(!isAnimating)}
              className={`p-3 rounded-full border backdrop-blur-sm
                ${isAnimating 
                  ? 'border-[#FF71CE]/50 bg-black/40 text-[#FF71CE]' 
                  : 'border-[#00F5FF]/20 bg-black/20 text-[#00F5FF]'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Music2Icon className="w-5 h-5" />
            </motion.button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-tech text-sm">{isAnimating ? 'Stop dancing' : 'Make me dance!'}</p>
          </TooltipContent>
        </TooltipRoot>
      </div>
    </div>
  )
}

useGLTF.preload(MODEL_PATH) 