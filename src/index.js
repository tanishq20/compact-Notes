import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from './provider/Provider'
import { makeServer } from './server'

// Call make Server
makeServer()
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
