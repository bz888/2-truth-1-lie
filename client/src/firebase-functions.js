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
  serverTimestamp
} from 'firebase/firestore'
const moment = require('moment')

async function postToFirebase (userInfo) {
  try {
    await addDoc(collection(getFirestore(), 'user_info'), {
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

module.exports = {
  postToFirebase: async (userInfo) => {
    try {
      await addDoc(collection(getFirestore(), 'user_info'), {
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
}
