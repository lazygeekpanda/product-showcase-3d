import React, { useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";

const SCALE = 0.7;

function Tesla() {
  const ref = React.useRef<THREE.Group>();
  const lightRef = React.useRef<THREE.PointLight>();
  const obj: any = useLoader(GLTFLoader, require("assets/tesla/tesla.glb"));

  useFrame((state, delta) => {
    if (!ref.current || !lightRef.current) return;

    const t = state.clock.getElapsedTime();
    // ref.current.rotation.y = Math.PI / 1.75 + Math.cos(t / 4)
    // ref.current.rotation.x = Math.sin(t / 4) / 8
    lightRef.current.position.x = state.mouse.x * 10;
    lightRef.current.position.z = 5 + -state.mouse.y;
    // ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
  });

  return (
    <>
      <pointLight ref={lightRef} intensity={10} color="#B8B3E9" position={[0, 7, 0]} />
      <mesh rotation-x={-Math.PI / 2 + 0.25} rotation-y={-0.1} position={[0, -0.68, 0]} receiveShadow>
        <boxBufferGeometry args={[5, 8]} />
        <meshStandardMaterial color="#B8B3E9" />
      </mesh>
      <group
        ref={ref}
        // position={[0, 0.75, 0]}
        rotation={[0.25, 0, 0.1]}
        scale={[SCALE, SCALE, SCALE]}
      >
        <primitive object={obj.scene} castShadow />
      </group>
    </>
  );
}

export default Tesla;
