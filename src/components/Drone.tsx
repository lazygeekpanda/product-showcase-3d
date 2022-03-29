import React, { useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const SCALE=0.02;

function Drone() {
  const ref = React.useRef<THREE.Group>()
  const throttleRef = React.useRef<THREE.Mesh>()
  const obj: any = useLoader(FBXLoader, require("assets/drone/drone.FBX"));

  const props = useTexture({
    map: require('assets/drone/drone_d.png'),
    normalMap: require('assets/drone/drone_n.png'),
    displacementMap: require('assets/drone/drone_m.png'),
    roughnessMap: require('assets/drone/drone_r.png'),
    aoMap: require('assets/drone/drone_ao.png'),
    emissiveMap: require('assets/drone/drone_e.png')
  })

  const { boxGeometry, objectGeometry } = useMemo(() => {
    let boxGeometry;
    let objectGeometry;
    obj.traverse((c: any) => {
      if (c.ID === 567371520) {
        const _c = c;
        boxGeometry = _c.geometry;
      } else {
        const _c = c;
        objectGeometry = _c.geometry;
      }
    });
    return {
      boxGeometry,
      objectGeometry
    };
  }, [obj]);

  useFrame((state, delta) => {
    if (!ref.current || !throttleRef.current) return;

    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = Math.PI / 1.75 + Math.cos(t / 4) / 8
    ref.current.rotation.x = Math.sin(t / 4) / 8
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
  })

  return (
    <group
      ref={ref}
      position={[0, 0.75, 0]}
      scale={[SCALE, SCALE, SCALE]}
    >
      <mesh geometry={boxGeometry} scale={1}>
        <meshStandardMaterial {...props} />
      </mesh>
      <mesh geometry={objectGeometry} scale={1} ref={throttleRef}>
        <meshStandardMaterial {...props}  />
      </mesh>
    </group>
  );
}

export default Drone;
