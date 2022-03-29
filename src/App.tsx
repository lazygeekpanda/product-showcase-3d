import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PresentationControls,
  ContactShadows,
} from "@react-three/drei";

import * as THREE from "three";

import Tesla from "components/Tesla";
import Drone from "components/Drone";
import Stars from 'components/Stars/Stars'

import Lights from 'components/Lights'

import "./App.css";

function App() {
  return (
    <div className="container">
      <Canvas camera={{ position: [0, 0, 4], fov: 75 }} shadows dpr={[1, 2]}>
        <Lights />

    <primitive object={new THREE.AxesHelper(1000)} />

        <PresentationControls
          global
          config={{ mass: 4, tension: 500 }}
          snap
          rotation={[0, -0.5, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <React.Suspense fallback={null}>
            {/* <Drone /> */}
            <Tesla />
          </React.Suspense>
        </PresentationControls>
        {/* <Stars />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.4, 0]}
          opacity={0.75}
          width={10}
          height={10}
          blur={2.6}
          far={2}
        /> */}
      </Canvas>
    </div>
  );
}

export default App