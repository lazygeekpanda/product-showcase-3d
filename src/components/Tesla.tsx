import React, { memo } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const SCALE = 0.7

const Tesla: React.FC<any> = ({ rimsColor, bodyColor, chromeColor }) => {
  const ref = React.useRef<THREE.Group>()
  const obj: any = useLoader(GLTFLoader, require('assets/tesla/tesla.glb'))

  React.useEffect(() => {
    if (!ref.current) {
      return
    }

    ref.current.traverse((c: any) => {
      if (c.type === 'Mesh') {
        if (c.userData.name.indexOf('wheel') !== -1) {
          c.material.color.set(rimsColor)
        } else if (c.userData.name.indexOf('bod') !== -1) {
          c.material.color.set(bodyColor)
        } else if (c.userData.name.indexOf('chr') !== -1) {
          c.material.color.set(chromeColor)
        } else if (c.userData.name.indexOf('emit') !== -1) {
          c.material.emissive.set('#0693E3')
          c.material.color.set('#7BDCB5')
          c.material.eissiveIntensity = 10
        }
      }
    })
  }, [rimsColor, bodyColor, chromeColor])

  useFrame(({ clock, mouse }, delta) => {
    if (!ref.current) return

    const t = clock.getElapsedTime()
    ref.current.rotation.y = -0.5 + Math.PI / 0.5 + Math.cos(t / 2) / 8

    // Pulsation animation for lights
    ref.current.traverse((c: any) => {
      if (c.type === 'Mesh') {
        if (c.userData.name.indexOf('emit') !== -1) {
          c.material.emissiveIntensity = Math.abs(
            Math.sin(clock.elapsedTime * 0.5)
          )
        }
      }
    })
  })

  return (
    <group
      ref={ref}
      position={[0.75, -1, 0]}
      rotation={[0, -0.5, 0]}
      scale={[SCALE, SCALE, SCALE]}
    >
      <primitive object={obj.scene} castShadow />
    </group>
  )
}

export default memo(Tesla)
