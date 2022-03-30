import React, { useMemo, useState } from 'react'

import { Link } from 'react-router-dom'

interface Presentation {
  id: number
  name: string
  preview: string
  url: string
}

const Main: React.FC = () => {
  const [hovered, setHovered] = useState(0)
  const presentations: Presentation[] = useMemo(
    () => [
      {
        id: 1,
        name: 'Drone',
        preview: 'drone.png',
        url: '/drone',
      },
      {
        id: 2,
        name: 'Tesla',
        preview: 'tesla.png',
        url: '/tesla',
      },
      {
        id: 3,
        name: 'Sword',
        preview: 'sword.png',
        url: '/sword',
      },
    ],
    []
  )
  return (
    <div className="selector-wrapper">
      <div><h2>Choose model</h2></div>
     <div> {presentations.map((presentation) => (
        <Link
          key={presentation.id}
          to={presentation.url}
          className={
            [
              "presentation",
              hovered === presentation.id ? "presentation--hovered" : "",
              hovered !== 0 ? "presentation--blurred" : "",
            ].join(' ')
          }
          onMouseEnter={() => setHovered(presentation.id)}
          onMouseLeave={() => setHovered(0)}
        >
          <span>{presentation.name}</span>
          <img
            src={require(`assets/previews/${presentation.preview}`)}
            alt={presentation.name}
          />
        </Link>
      ))}</div>
    </div>
  )
}

export default Main
