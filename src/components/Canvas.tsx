import * as React from 'react'
import * as THREE from 'three'
import { Canvas as R3FCanvas } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'

const Canvas: React.FC = ({ children }) => (
  <R3FCanvas
    camera={{ position: [0, 0, 4], fov: 75 }}
    dpr={[1, 2]}
    shadows
    onCreated={({ gl }) => {
      gl.toneMapping = THREE.NoToneMapping
    }}
  >
    {children}
    <ContactShadows
      rotation-x={Math.PI / 2}
      position={[0, -1.4, 0]}
      opacity={0.75}
      width={14}
      height={14}
      blur={2.6}
      far={2}
    />
  </R3FCanvas>
)

export default Canvas
