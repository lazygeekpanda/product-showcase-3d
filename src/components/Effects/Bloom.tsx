import React, { useRef, useMemo, useEffect } from 'react'

import * as THREE from 'three'
import { extend, useFrame, useThree, Object3DNode } from '@react-three/fiber'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ EffectComposer, RenderPass, UnrealBloomPass })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>
    }
  }
}

const Bloom: React.FC = ({ children }) => {
  const { gl, camera, size } = useThree()
  const ref = useRef()
  const composer = useRef<EffectComposer>()
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  )

  useEffect(() => {
    if (!ref.current || !composer.current) return

    ref.current && composer.current.setSize(size.width, size.height)
  }, [ref, size])

  useFrame(() => {
    if (!ref.current || !composer.current) return

    ref.current && composer.current.render()
  }, 1)

  return (
    <>
      <scene ref={ref} background={new THREE.Color('#000007')}>
        {children}
      </scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={ref.current} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[aspect, 1, 0.5, 0]} />
      </effectComposer>
    </>
  )
}

export default Bloom
