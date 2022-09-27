import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles } from './styles/styles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> <GlobalStyles />
  </React.StrictMode>
)
