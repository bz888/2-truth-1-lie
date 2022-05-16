import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
// import firebase from 'firebase'
import { AuthProvider } from './context/AuthContext'
// import { getFirestore } from 'firebase/firestore'
// import firebase from 'firebase/firestore'

import { initializeApp } from '@firebase/app'
import { getFirebaseConfig } from './firebase-init/firebase-config'

initializeApp(getFirebaseConfig())

document.addEventListener('DOMContentLoaded', () => {
  render(
    // <AuthProvider>
      <Router>
        <App />
      </Router>,
      // {/* </AuthProvider>, */}
      document.getElementById('app')
  )
})

// const firebaseAppConfig = getFirebaseConfig()
// initializeApp(firebaseAppConfig)
