import request from 'superagent'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  getDocs
} from 'firebase/firestore'

// const dbData = 'text/'

export function getTextOutput (input) {
  return request
  // whatever the route is set to be in routes
    .post('http://localhost:8000/text/outputtext/')
    .send({ input })
    .then(res => {
      console.log('text output api: ', res.body)
      return res.body.output
    })
}

export function getImageOutput (val) {
  console.log('api input image: ', val)
  return request
  // whatever the route is set to be in routes
    .post('http://localhost:8000/text/outputimage/')
    .send({ val })
    .then(res => {
      console.log('image ping: ', res.body)
      return res.body.output_url
    })
}

export async function postToFirebase (userInfo) {
  try {
    await addDoc(collection(getFirestore(), 'test_input'), {
      name: userInfo.name,
      truth1: userInfo.truth1,
      truth2: userInfo.truth2,
      lie: userInfo.lie,
      article: userInfo.article,
      profileImg: userInfo.profileIMG,
      timestamp: serverTimestamp()
    })
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error)
  }
}

// export async function getFirebase () {
//   const querySnapshot = getDocs(collection(getFirestore(), 'user_input'), orderBy('timestamp', 'desc'))
//   try {
//     const arrData = []
//     // console.log('arr', querySnapshot)
//     querySnapshot.forEach((doc) => {
//       arrData.push({ ...doc.data() })
//     })
//     console.log('arrData: ', arrData)
//     return arrData
//   } catch (error) {
//     console.error('Error getting message from Firebase Database', error)
//   }
// }

// export async function liveGetFirebase () {
//   try {
//     const ref = query(collection(getFirestore(), 'test_input'), orderBy('timestamp', 'desc'))
//     const arrData = []
//     onSnapshot(ref, function (snapshot) {
//       snapshot.docChanges().forEach(function (change) {
//         console.log('live data: ', change.doc.data())
//         arrData.push({ ...change.doc.data() })
//       })
//     })
//     console.log('arrData feedback: ', arrData)
//     return arrData
//   } catch (error) {
//     console.error('Error getting live data from Firebase Database', error)
//   }
// }
