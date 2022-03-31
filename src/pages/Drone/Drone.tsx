import React from 'react'
import Canvas from 'components/Canvas'
import { PresentationControls, Stats, Loader } from '@react-three/drei'

import Drone from 'components/Drone'
import Lights from 'components/Lights'
import Stars from 'components/Stars/Stars'

import useDocumentTitle from 'hooks/useDocumentTitle'
import { Link } from 'react-router-dom'

const DronePresentation: React.FC = () => {
  useDocumentTitle('Drone presentation')

  return (
    <div className="presentation__page">
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
          </div>
        </div>
      </div>
      <div className="credits">
        <div className="footer-navigation footer-navigation--previous"><Link to="/">Go to Home</Link></div>
        <div className="footer-navigation footer-navigation--next"><Link to="/tesla">Go to Tesla Demo</Link></div>
        <p>
          This work is based on
          <a
            href="https://sketchfab.com/3d-models/drone-ce248709dea64ec1844e8dd9b614f7c0"
            target="_blank"
            rel="noreferrer"
          >
            Drone Model
          </a>
          by
          <a
            href="https://sketchfab.com/kryik1023"
            target="_blank"
            rel="noreferrer"
          >
            Renafox / Sketchfab
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

export default DronePresentation
