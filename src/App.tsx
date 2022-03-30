import React from 'react'

import './App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom'

import routes from 'routes'

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="container">
        <React.Suspense fallback="Loading Page">
          <Routes>
            <Route />
            {routes.map((route) => (
              <Route key={route.name} path={route.path} element={<route.component />} />
            ))}
            </Routes>
        </React.Suspense>
      </div>
    </HashRouter>
  )
}

export default App
