import request from 'superagent'
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from 'firebase/firestore'

// deep ai text
export function getTextOutput (input) {
  return request
    .post('http://localhost:8000/text/outputtext/')
    .send({ input })
    .then(res => {
      console.log('text output api: ', res.body)
      return res.body.output
    })
}

// deep ai image
export function getImageOutput (val) {
  console.log('api input image: ', val)
  return request
    .post('http://localhost:8000/text/outputimage/')
    .send({ val })
    .then(res => {
      console.log('image ping: ', res.body)
      return res.body.output_url
    })
}

// posting to firebase
export async function postToFirebase (userInfo) {
  console.log('api userInfo: ', userInfo)
  try {
    await addDoc(collection(getFirestore(), 'test_read'), {
      name: userInfo.name,
      truth1: userInfo.truth1,
      truth2: userInfo.truth2,
      lie: userInfo.lie,
      article: userInfo.article,
      profileImg: userInfo.profileImg,
      timestamp: serverTimestamp()
    })
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error)
  }
}
