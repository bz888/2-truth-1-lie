import request from 'superagent'
import {
  getFirestore,
  collection,
  addDoc
} from 'firebase/firestore'
const moment = require('moment')

// const dbData = 'text/'

export function getTextOutput (input) {
  return request
  // whatever the route is set to be in routes
    .post('http://localhost:8000/text/outputtext/')
  // what is the data shape?
    .send({ input })
    .then(res => {
      return res.body.output
    })
}

export async function postToFirebase (userInfo) {
  try {
    await addDoc(collection(getFirestore(), 'user_input'), {
      name: userInfo.name,
      truth1: userInfo.truth1,
      truth2: userInfo.truth2,
      lie: userInfo.lie,
      article: userInfo.article,
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error)
  }
}

// async function postToFirebase (userInfo) {
//   try {
//     await addDoc(collection(getFirestore(), 'user_input'), {
//       name: userInfo.name,
//       truth1: userInfo.truth1,
//       truth2: userInfo.truth2,
//       lie: userInfo.lie,
//       article: userInfo.article,
//       timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
//     })
//   } catch (error) {
//     console.error('Error writing new message to Firebase Database', error)
//   }
// }
// export function postDbForm (inputObj) {
//   return request
//     .post(dbData + 'input')
//     .send(inputObj)
//     .then(res => {
//       console.log('api postdb: ', res.statusText)
//       return res.statusCode
//     })
//     .catch(err => {
//       console.log('oops you dumb and messed up', err.message)
//     })
// }

// export function getDataDB () {
//   return request
//     .get(dbData + 'data')
//     .then(res => res.body)
// }
