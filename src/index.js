import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './common.css'
import './1-todos/index.css'
import TodosApp from './1-todos/App'

import './2-meetups/index.css'
import MeetupsApp from './2-meetups/App'

const Footer = React.lazy(() => import('./layout/Footer'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <h1>Learning React</h1>

      <TodosApp />

      <hr/>

      <BrowserRouter>
          <MeetupsApp />
      </BrowserRouter>

      <React.Suspense fallback="<div>…</div>">
          <Footer />
      </React.Suspense>

  </React.StrictMode>
)
