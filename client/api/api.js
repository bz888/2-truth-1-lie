import request from 'superagent'
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from 'firebase/firestore'
import { signOut } from 'firebase/auth'

// deep ai image
export function getImageOutput (val) {
  // console.log('api input image: ', val)
  return request
    .post('/api/v1/outputimage/')
    .send({ val })
    .then(res => {
      console.log('image ping: ', res.body)
      return res.body.output_url
    })
}

// posting to firebase
export async function postToFirebase (userInfo, auth) {
  // console.log('api userInfo: ', userInfo)
  try {
    await addDoc(collection(getFirestore(), 'test_read'), {
      name: userInfo.name,
      truth1: userInfo.truth1,
      truth2: userInfo.truth2,
      lie: userInfo.lie,
      article: userInfo.article,
      profileImg: userInfo.profileImg,
      timestamp: serverTimestamp()
    }).then(() => {
      signOut(auth)
      return null
    })
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error)
  }
}

// new api TextCortext
export async function getOutputBlogTextCortext (input) {
  return request
    .post('/api/v1/test/')
    .send({ input: input })
    .then(res => {
      console.log('textCortex output api: ', res.body)
      return res.body.ai_results[0].generated_text
    })
}
