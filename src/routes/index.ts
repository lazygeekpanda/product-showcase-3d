import { lazy } from 'react'

const routes = [
  {
    path: '/',
    name: 'main',
    component: lazy(() => import('pages/Main')),
  },
  {
    path: '/drone',
    name: 'drone',
    component: lazy(() => import('pages/Drone/Drone')),
  },
  {
    path: '/tesla',
    name: 'tesla',
    component: lazy(() => import('pages/Tesla/Tesla')),
  },
  {
    path: '/sword',
    name: 'sword',
    component: lazy(() => import('pages/Sword/Sword')),
  }
]

export default routes