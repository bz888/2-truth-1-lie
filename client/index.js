import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { Provider } from 'react-redux'
// import reducers from './reducers'
import App from './components/App'
import { initializeApp } from 'firebase/app'
import { getFirebaseConfig } from './src/firebase-config'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(
//   applyMiddleware(thunkMiddleware)
// ))

document.addEventListener('DOMContentLoaded', () => {
  render(
    // <Provider store={store}>
    <Router>
      <App />
    </Router>,
    // </Provider>,
    document.getElementById('app')
  )
})

const firebaseAppConfig = getFirebaseConfig()
initializeApp(firebaseAppConfig)
