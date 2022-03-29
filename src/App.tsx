import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PresentationControls,
  ContactShadows,
  Points,
  PointMaterial,
} from "@react-three/drei";
import Drone from "./Drone";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Canvas camera={{ position: [0, 0, 4], fov: 75 }} shadows dpr={[1, 2]}>
        <pointLight color="#fff" intensity={1} position={[10, 10, 10]} />
        <ambientLight
          color="#B8B3E9"
          intensity={1}
          position={[100, 100, 100]}
        />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={[512, 512]}
          castShadow
        />

        <PresentationControls
          global
          config={{ mass: 4, tension: 500 }}
          snap
          rotation={[0, -0.5, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <React.Suspense fallback={null}>
            <Drone />
          </React.Suspense>
        </PresentationControls>
        <Stars />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.4, 0]}
          opacity={0.75}
          width={10}
          height={10}
          blur={2.6}
          far={2}
        />
      </Canvas>
    </div>
  );
}

function Stars(props: any) {
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

export class Generator {
  seed: string | number = 0;

  constructor(seed: string | number) {
    this.init(seed);
  }

  init = (seed: number | string) => {
    this.seed = seed;
    this.value = lcgRandom(seed);
  };

  value = lcgRandom(this.seed);
}

function normalizeSeed(seed: number | string) {
  if (typeof seed === "number") {
    seed = Math.abs(seed);
  } else if (typeof seed === "string") {
    const string = seed;
    seed = 0;

    for (let i = 0; i < string.length; i++) {
      seed = (seed + (i + 1) * (string.charCodeAt(i) % 96)) % 2147483647;
    }
  }

  if (seed === 0) {
    seed = 311;
  }

  return seed;
}

const defaultGen = new Generator(Math.random());
const defaultSphere = {
  radius: 1,
  center: [0, 0, 0],
};
export function inSphere(buffer: any, sphere: any) {
  const { radius, center }: any = {
    ...defaultSphere,
    ...sphere,
  };
  const rng = defaultGen;
  for (let i = 0; i < buffer.length; i += 3) {
    const u = Math.pow(rng.value(), 1 / 3);

    let x = rng.value() * 2 - 1;
    let y = rng.value() * 2 - 1;
    let z = rng.value() * 2 - 1;

    const mag = Math.sqrt(x * x + y * y + z * z);

    x = (u * x) / mag;
    y = (u * y) / mag;
    z = (u * z) / mag;

    buffer[i] = x * radius + center[0];
    buffer[i + 1] = y * radius + center[1];
    buffer[i + 2] = z * radius + center[2];
  }

  return buffer;
}

function lcgRandom(seed: number | string) {
  let state = normalizeSeed(seed);

  return function () {
    const result = (state * 48271) % 2147483647;
    state = result;
    return result / 2147483647;
  };
}

export default App;
