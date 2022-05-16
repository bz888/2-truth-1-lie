import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
// import firebase from 'firebase'
import { initializeApp } from '@firebase/app'
import { getFirebaseConfig } from './firebase-init/firebase-config'
import { AuthProvider } from './context/AuthContext'
// import firebase from 'firebase/firestore'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>,
    document.getElementById('app')
  )
})

const firebaseAppConfig = getFirebaseConfig()
initializeApp(firebaseAppConfig)
