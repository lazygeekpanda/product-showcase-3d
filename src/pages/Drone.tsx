import React from 'react'
import Canvas from 'components/Canvas'
import { PresentationControls, Stats, Loader } from '@react-three/drei'

import Drone from 'components/Drone'
import Lights from 'components/Lights'
import Stars from 'components/Stars/Stars'

const DronePresentation: React.FC = () => {
  return (
    <div className="presentation__item presentation__drone">
      <div className="presentation__item-wrapper">
        <Canvas>
          <PresentationControls
            global={false}
            config={{ mass: 4, tension: 500 }}
            snap
            rotation={[0, -0.5, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <color attach="background" args={['#D17B88']} />
            <React.Suspense fallback={null}>
              <Drone />
            </React.Suspense>
          </PresentationControls>
          <Stars />
          <Lights />
          <Stats />
        </Canvas>
        <Loader />

        <div className="presentation__details">
          <h1>Drone</h1>
          <p>
            <a
              href="https://sketchfab.com/3d-models/drone-ce248709dea64ec1844e8dd9b614f7c0"
              target="_blank"
              rel="noreferrer"
            >
              Drone Model
            </a>
          </p>
        </div>
      </div>
      <div className="config-container">Configurator</div>
    </div>
  )
}

export default DronePresentation
