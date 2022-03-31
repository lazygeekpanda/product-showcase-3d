import React, { memo } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const SCALE = 0.35

const Sword: React.FC<{ color: string }> = ({ color }) => {
  const ref = React.useRef<THREE.Group>()
  const model: any = useLoader(GLTFLoader, require('assets/sword/Sword3.glb'))

  React.useEffect(() => {
    if (!ref.current) { return }

    ref.current.traverse((c: any) => {
      if (c.type === 'Mesh') {
        if (c.material.id === 37 || c.material.id === 39) {
          c.material.emissive.set(color)
        }
      }
    })
  }, [color])

  let mixer: THREE.AnimationMixer
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene)
    model.animations.forEach((clip: any) => {
      const action = mixer.clipAction(clip)
      action.play()
    })
  }

  useFrame(({ clock }, delta) => {
    if (!mixer || !ref || !ref.current) {
      return
    }

    const t = clock.getElapsedTime()
    ref.current.rotation.y = (Math.PI / 1.75 + Math.cos(t / 4) / 8) * 0.5
    ref.current.rotation.x = 2 * -1 + Math.sin(delta / 4) / 8
    ref.current.rotation.z = -1 + Math.sin(t * 1.5) / 10

    // Pulsation animation
    ref.current.traverse((c: any) => {
      if (c.type === 'Mesh') {
        if (c.material.id === 37 || c.material.id === 39) {
          c.material.emissiveIntensity = Math.abs(
            Math.sin(clock.elapsedTime * 0.5)
          );
        }
      }
    })

    // Animation mixer update
    mixer.update(delta)
  })

  return (

      <group ref={ref} position={[-0.5, 0, 0]} 
      // rotation={[-2, 0.75, -0.5]}
      scale={[SCALE, SCALE * 1.1, SCALE]}>
        <primitive object={model.scene} dispose={null} castShadow />
      </group>

  )
}

export default memo(Sword)
