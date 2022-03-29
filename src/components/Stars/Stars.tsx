import React from 'react'
import { useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
} from "@react-three/drei";

import { inSphere } from './utils'

const Stars = (props: any) => {
  const ref = React.useRef<any>();
  const [sphere] = React.useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    if (!ref || !ref.current) {
      return;
    }
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y += delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]} scale={[10, 10, 10]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default Stars;