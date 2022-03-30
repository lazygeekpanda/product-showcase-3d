import React, { useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const SCALE = 0.255

const Sword: React.FC<any> = ({}) => {
  const ref = React.useRef<THREE.Group>()
  const model: any = useLoader(GLTFLoader, require('assets/sword/Sword3.glb'))

  React.useEffect(() => {
    if (!ref.current) { return }

    // @ts-ignore
    ref.current.traverse((c: any) => {
      if (c.type === 'Mesh') {
        if (c.material.emissive.r !== 0) {
          // console.log(c)
          // c.material.emissive.set(0xffffff)
        }
      }
    })
  }, [])

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

    ref.current.traverse((c: any) => {
      if (c.type === 'Mesh') {
        if (c.material.emissive.r !== 0) {
          c.material.emissiveIntensity = Math.abs(
            Math.sin(clock.elapsedTime * 0.5)
          );
        }
      }
    })
    mixer.update(delta)
  })

  return (
    <>
      <group ref={ref} position={[0, 1, 0]} rotation={[-2, 0, -0.25]} scale={[SCALE, SCALE * 1.1, SCALE]}>
        <primitive object={model.scene} dispose={null} castShadow />
      </group>
    </>
  )
}

export default Sword
