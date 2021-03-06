import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import { initializeApp } from 'firebase/app'
import { getFirebaseConfig } from './src/firebase-config'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  )
})

const firebaseAppConfig = getFirebaseConfig()
initializeApp(firebaseAppConfig)
