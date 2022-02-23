const config = {
  apiKey: 'AIzaSyC6QVqzLwzpMRvXuQjXMdq3kptUg0bBn9U',
  authDomain: 'two-truth-1-lie-dev.firebaseapp.com',
  projectId: 'two-truth-1-lie-dev',
  storageBucket: 'two-truth-1-lie-dev.appspot.com',
  messagingSenderId: '37145454012',
  appId: '1:37145454012:web:6bc2d609d3c861537077b9',
  measurementId: 'G-3JJTBKMZ6D'
}

export function getFirebaseConfig () {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js')
  } else {
    return config
  }
}
