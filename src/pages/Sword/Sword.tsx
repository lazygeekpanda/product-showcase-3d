import React from 'react'
import Canvas from 'components/Canvas'
import { PresentationControls, Stats, Loader,  SpotLight } from '@react-three/drei'

import Sword from 'components/Sword'

const SwordPresentation: React.FC = () => {
  return (
    <div className="presentation__item presentation__sword">
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
            <React.Suspense fallback={null}>
              <Sword />
            </React.Suspense>
          </PresentationControls>

          <SpotLight
            penumbra={0.5}
            position={[3, -3, 0]}
            intensity={25}
            angle={0.5}
            color="#5158BB"
            castShadow={false}
            radiusTop={5}
            // decay={1}
            distance={10}
          />
          <SpotLight
            penumbra={0.1}
            distance={20}
            position={[-4, 3, 3]}
            intensity={1}
            angle={0.75}
            color="#fff"
            castShadow={false}
          />
          <Stats />
        </Canvas>
        <Loader />

        <div className="presentation__details">
          <h1>Sword</h1>
          <p>
            <a
              href="https://sketchfab.com/3d-models/neon-blade-sword-e3caffae38ff43aea3476cea700b6a00"
              target="_blank"
              rel="noreferrer"
            >
              Sword Model
            </a>
          </p>
        </div>
      </div>
      <div className="config-container">Configurator</div>
    </div>
  )
}

export default SwordPresentation
