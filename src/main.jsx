import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthenticationContextProvider } from './components/services/authentication/authentication.context.jsx'

import './index.css'

import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </React.StrictMode>
)
