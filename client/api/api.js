import request from 'superagent'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs
} from 'firebase/firestore'
import { getFirebaseConfig } from '../src/firebase-config'
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

export async function getFirebase () {
  try {
    const arrData = []
    const querySnapshot = await getDocs(collection(getFirestore(), 'user_input'))
    // console.log('arr', querySnapshot)
    querySnapshot.forEach((doc) => {
      // console.log(doc.data())
      arrData.push(doc.data())
    })
    return arrData
  } catch (error) {
    console.error('Error getting message from Firebase Database', error)
  }
}

export function liveGetFirebase () {
  const dataQuery = query(collection(getFirebase(), 'user_input'), orderBy('timestamp', 'desc'))
  onSnapshot(dataQuery, function (snapshot) {
    console.log('liveGet: ', snapshot.docChanges())
    snapshot.docChanges()
  })
}

// export function getFirebase () {
//   const dataRef = query(
//     collection(getFirestore(), 'user_input'),
//     orderBy('timestamp', 'desc'),
//     limit(30))

//   onSnapshot(dataRef, function (snapshot) {
//     snapshot.docChanges()
//   })
//   // const query = dataRef.
//   console.log('query from getFirebase: ', dataRef)
//   // return dataRef
// }

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
