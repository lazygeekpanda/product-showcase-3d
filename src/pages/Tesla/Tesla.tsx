import React, { useState } from 'react'
import Canvas from 'components/Canvas'
import {
  PresentationControls,
  Stats,
  Loader,
  SpotLight,
} from '@react-three/drei'

import Bloom from 'components/Effects/Bloom'

import Tesla from 'components/Tesla'
import Configurator from './Configurator'

import useDocumentTitle from 'hooks/useDocumentTitle'
import { Link } from 'react-router-dom'

const TeslaPresentation: React.FC = () => {
  useDocumentTitle('Tesla presentation')

  const [rimsColor, setRimsColor] = useState<string>('#253C78')
  const [bodyColor, setBodyColor] = useState<string>('#280003')
  const [chromeColor, setChromeColor] = useState<string>('#fff')

  const update = (type: string, value: string) => {
    switch (type) {
      case 'rims':
        setRimsColor(value)
        break
      case 'body':
        setBodyColor(value)
        break
      case 'chrome':
        setChromeColor(value)
        break
    }
  }

  return (
    <div className="presentation__page">
      <div className="presentation__item presentation__tesla">
        <div className="presentation__item-wrapper">
          <Canvas>
            <Bloom>
              <PresentationControls
                global
                config={{ mass: 10, tension: 50 }}
                snap
                rotation={[0, -0.25, 0]}
                // Vertical
                polar={[0, Math.PI / 50]}
                // Horizontal
                azimuth={[-Math.PI, Math.PI]}
              >
                <Tesla
                  rimsColor={rimsColor}
                  bodyColor={bodyColor}
                  chromeColor={chromeColor}
                />
              </PresentationControls>

              <SpotLight
                penumbra={1}
                position={[3, -4, 3]}
                intensity={25}
                angle={1}
                color="#5158BB"
                castShadow={false}
                radiusTop={5}
                decay={1}
              />
              <SpotLight
                penumbra={0.5}
                position={[-2, 0, 4]}
                intensity={10}
                distance={1}
                angle={1}
                color="orange"
                opacity={0.005}
              />
              <SpotLight
                penumbra={0.75}
                position={[-3, 3, 3]}
                intensity={0.25}
                angle={0.5}
                color="#af1b3f"
                opacity={0.15}
              />
              <ambientLight intensity={0.75} />
            </Bloom>
            <Stats />
          </Canvas>
          <Loader />

          <div className="presentation__details presentation__details--top">
            <h1>Tesla</h1>
          </div>
        </div>
        <Configurator
          rimsColor={rimsColor}
          bodyColor={bodyColor}
          chromeColor={chromeColor}
          onChange={update}
        />
      </div>
      <div className="credits">
        <div className="footer-navigation footer-navigation--previous">
          <Link to="/drone">Go to Drone Demo</Link>
        </div>
        <div className="footer-navigation footer-navigation--next">
          <Link to="/sword">Go to Sword Demo</Link>
        </div>
        <p>
          This work is based on
          <a
            href="https://sketchfab.com/3d-models/tesla-model-s-1360e3cf7323487eaba8ce94279229b6"
            target="_blank"
            rel="noreferrer"
          >
            Tesla Model S
          </a>
          by
          <a
            href="https://sketchfab.com/OneSteven"
            target="_blank"
            rel="noreferrer"
          >
            iSteven / Sketchfab
          </a>
          licensed under
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC Attribution
          </a>
        </p>
      </div>
    </div>
  )
}

export default TeslaPresentation
