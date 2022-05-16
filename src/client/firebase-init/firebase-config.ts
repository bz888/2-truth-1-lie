const config = {
  apiKey: 'AIzaSyAkjEhMWYONgoO6RRcf7AJO7_7LNcgCByU',
  authDomain: 'truth-1-lie-prod.firebaseapp.com',
  projectId: 'truth-1-lie-prod',
  storageBucket: 'truth-1-lie-prod.appspot.com',
  messagingSenderId: '957435355400',
  appId: '1:957435355400:web:dc95005c554bd85b9b0cbd',
  measurementId: 'G-NJXEJ5YVFT'
}

export function getFirebaseConfig () {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js')
  } else {
    console.log(config)
    return config
  }
}
