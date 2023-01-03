import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './common.css'
import './1-todos/index.css'
import TodosApp from './1-todos/App'

import './2-meetups/index.css'
import MeetupsApp from './2-meetups/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <h1>Learning React</h1>

      <TodosApp />

      <BrowserRouter>
          <MeetupsApp />
      </BrowserRouter>

  </React.StrictMode>
)
