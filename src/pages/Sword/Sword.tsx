import React, { useState } from 'react'
import Canvas from 'components/Canvas'
import {
  PresentationControls,
  Stats,
  Loader,
  SpotLight,
} from '@react-three/drei'

import Sword from 'components/Sword'

import Bloom from 'components/Effects/Bloom'

import useDocumentTitle from 'hooks/useDocumentTitle'
import { Link } from 'react-router-dom'

import { GithubPicker } from 'react-color'

const SwordPresentation: React.FC = () => {
  useDocumentTitle('Sword presentation')

  const [color, setColor] = useState('#ff5500')

  return (
    <div className="presentation__page">
      <div className="presentation__item presentation__sword">
        <div className="presentation__item-wrapper">
          <Canvas>
            <Bloom>
              <PresentationControls
                global={false}
                config={{ mass: 4, tension: 500 }}
                snap
                rotation={[0, -0.5, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                <React.Suspense fallback={null}>
                  <Sword color={color} />
                </React.Suspense>
              </PresentationControls>

              <SpotLight
                penumbra={0.5}
                position={[3, -3, 0]}
                intensity={1}
                angle={0.5}
                color="#5158BB"
                castShadow={false}
                radiusTop={5}
                distance={10}
              />
              <SpotLight
                penumbra={0.1}
                distance={10}
                position={[-4, 3, 3]}
                intensity={0.75}
                angle={0.75}
                color="#fff"
                castShadow={false}
                opacity={0.01}
              />
              <ambientLight intensity={10} />
            </Bloom>
            <Stats />
          </Canvas>
          <Loader />

          <div className="presentation__details">
            <h1>Sword</h1>
          </div>
        </div>
        <div className="config-container config-container__sword">
          <GithubPicker
            triangle="hide"
            colors={[
              '#ff5500',
              '#05ffff',
              '#B80000',
              '#A40E4C',
              '#FCCB00',
              '#008B02',
              '#004DCF',
              '#5300EB',
              '#AFFC41',
              '#EDAF97',
            ]}
            color={color}
            onChangeComplete={(color: any) => {
              setColor(color.hex)
            }}
          />
        </div>
      </div>
      <div className="credits">
        <div className="footer-navigation footer-navigation--previous">
          <Link to="/tesla">Go to Tesla Demo</Link>
        </div>
        <div className="footer-navigation footer-navigation--next">
          <Link to="/">Go to Home</Link>
        </div>
        <p>
          This work is based on
          <a
            href="https://sketchfab.com/3d-models/neon-blade-sword-e3caffae38ff43aea3476cea700b6a00"
            target="_blank"
            rel="noreferrer"
          >
            Sword Model
          </a>
          by
          <a
            href="https://sketchfab.com/Wawann"
            target="_blank"
            rel="noreferrer"
          >
            Wawann / Sketchfab
          </a>
          licensed under
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
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

export default SwordPresentation
