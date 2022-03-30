import React, { useState } from 'react'
import Canvas from 'components/Canvas'
import {
  PresentationControls,
  Stats,
  Loader,
  SpotLight,
} from '@react-three/drei'

import Tesla from 'components/Tesla'
import Configurator from './Configurator'

const TeslaPresentation: React.FC = () => {
  const [rimsColor, setRimsColor] = useState<string>('#253C78')
  const [bodyColor, setBodyColor] = useState<string>('#280003')
  const [grillColor, setGrillColor] = useState<string>('#000')
  const [chromeColor, setChromeColor] = useState<string>('#fff')

  const update = (type: string, value: string) => {
    switch (type) {
      case 'rims':
        setRimsColor(value)
        break
      case 'body':
        setBodyColor(value)
        break
      case 'grill':
        setGrillColor(value)
        break
      case 'chrome':
        setChromeColor(value)
        break
    }
  }

  return (
    <div className="presentation__item presentation__tesla">
      <div className="presentation__item-wrapper">
        <Canvas>
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
            <Tesla rimsColor={rimsColor} bodyColor={bodyColor} grillColor={grillColor} chromeColor={chromeColor} />
          </PresentationControls>

          <SpotLight
            penumbra={0.5}
            position={[3, -4, 4]}
            intensity={10}
            distance={5}
            angle={0.75}
            color="#fff"
            castShadow={false}
            decay={1}
          />

          <SpotLight
            penumbra={1}
            position={[4, -3, 0]}
            intensity={25}
            angle={1}
            color="#5158BB"
            castShadow={false}
            radiusTop={5}
            decay={1}
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
          <SpotLight
            penumbra={0.1}
            distance={5}
            position={[4, 3, 3]}
            intensity={1}
            angle={0.5}
            color="#f5f5f5"
            castShadow={false}
          />
          <SpotLight
            penumbra={0.25}
            // depthBuffer={256}
            position={[0, -50, 0]}
            intensity={1}
            angle={0.5}
            color="#6FFFE9"
            castShadow
          />
          <ambientLight
            intensity={0.25}
            color="#fff"
            position={[100, 100, 100]}
          />
          <Stats />
        </Canvas>
        <Loader />

        <div className="presentation__details presentation__details--top">
          <h1>Tesla</h1>
          <p>
            <a
              href="https://sketchfab.com/3d-models/tesla-model-s-1360e3cf7323487eaba8ce94279229b6"
              target="_blank"
              rel="noreferrer"
            >
              Tesla Model
            </a>
          </p>
        </div>
      </div>
      <Configurator
        rimsColor={rimsColor}
        bodyColor={bodyColor}
        grillColor={grillColor}
        chromeColor={chromeColor}
        onChange={update}
      />
    </div>
  )
}

export default TeslaPresentation
