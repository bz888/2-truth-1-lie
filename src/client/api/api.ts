import request from 'superagent'
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from 'firebase/firestore'
import { Auth, signOut } from 'firebase/auth'
import { NavigateFunction } from 'react-router-dom'

// deep ai image
export function getImageOutput (val: string) {
  return request
    .post('/api/v1/outputimage/')
    .send({ val })
    .then(res => {
      return res.body.output_url
    })
    .catch((err) => {
      console.log(err)
    })
}

interface userInfoType {
  name: string,
  truth1: string,
  truth2: string,
  lie: string,
  article: string,
  profileImg: string,
}
// posting to firebase
export async function postToFirebase (userInfo: userInfoType, auth: Auth, navigate: NavigateFunction) {
  try {
    await addDoc(collection(getFirestore(), 'db_prod'), {
      name: userInfo.name,
      truth1: userInfo.truth1,
      truth2: userInfo.truth2,
      lie: userInfo.lie,
      article: userInfo.article,
      profileImg: userInfo.profileImg,
      timestamp: serverTimestamp()
    }).then(() => {
      navigate('/submitted')
      return null
    }).then(() => {
      signOut(auth)
      return null
    })
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error)
  }
}

// new api TextCortext
export async function getOutputBlogTextCortext (input: string) {
  return request
    .post('/api/v1/test/')
    .send({ input: input })
    .then(res => {
      return res.body.ai_results[0].generated_text
    })
}

// reCAPTCHA response
export async function validateHuman (token: string) {
  return request
    .post('/api/v1/validatehuman')
    .send({ response: token })
    .then(res => {
      return res.body.success
    })
}
