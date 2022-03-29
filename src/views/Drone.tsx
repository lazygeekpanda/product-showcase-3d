import React from "react";
import Canvas from "components/Canvas";
import {
  PresentationControls
} from "@react-three/drei";

import Drone from "components/Drone";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Canvas>
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
      </Canvas>
    </div>
  );
}

export default App