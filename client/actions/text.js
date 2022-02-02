import { getTextOutput, postToFirebase, getFirebase, liveGetFirebase } from '../api/api'
import { showError } from '../actions/error'
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   setDoc,
//   updateDoc,
//   doc,
//   serverTimestamp
// } from 'firebase/firestore'
// const moment = require('moment')

// deep api ping
export const TEXT_API_PENDING = 'TEXT_API_PENDING'
export const TEXT_API_SUCCESS = 'TEXT_API_SUCCESS'

// get data (objs) from DB
export const FETCH_DATA_DB_PENDING = 'FETCH_DATA_DB_PENDING'
export const FETCH_DATA_DB_SUCCESS = 'FETCH_DATA_DB_SUCCESS'

// post data to DB
export const POST_DATA_DB_PENDING = 'POST_DATA_DB_PENDING'
export const POST_DATA_DB_SUCCESS = 'POST_DATA_DB_SUCCESS'

// firebase POST function (can't figure out how to export async func from module.exports??)

// deep api
export function textPending () {
  return {
    type: TEXT_API_PENDING
  }
}

export function textSuccess (outputText) {
  return {
    type: TEXT_API_SUCCESS,
    outputText
  }
}

// Should output generateAPIText
export function generateText (inputText) {
  return (dispatch) => {
    dispatch(textPending())
    return getTextOutput(inputText)
      .then((APIoutput) => {
        dispatch(textSuccess(APIoutput))
        return null
      })
      .catch(err => {
        console.error(err)
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

// GET from db
export function fetchDataPending () {
  return {
    type: FETCH_DATA_DB_PENDING
  }
}

export function fetchDataSuccess (data) {
  return {
    type: FETCH_DATA_DB_SUCCESS,
    data
  }
}

// export function fetchDataDB () {
//   return (dispatch) => {
//     dispatch(fetchDataPending())
//     return getFirebase()
//       .then(dataDB => {
//         console.log(dataDB)
//         dispatch(fetchDataSuccess(dataDB))
//         return null
//       })
//       .catch(err => {
//         console.error(err)
//         const errMessage = err.response?.text || err.message
//         dispatch(showError(errMessage))
//       })
//   }
// }
export function fetchDataDB () {
  return (dispatch) => {
    dispatch(fetchDataPending())
    return liveGetFirebase()
      .then(dataDB => {
        console.log(dataDB)
        dispatch(fetchDataSuccess(dataDB))
        return null
      })
      .catch(err => {
        console.error(err)
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}

// POST to db
export function postDataPending () {
  return {
    type: POST_DATA_DB_PENDING
  }
}

export function postDataSuccess (msg) {
  return {
    type: POST_DATA_DB_SUCCESS,
    postFunc: msg
  }
}

export function postDataDB (dataObj) {
  return (dispatch) => {
    dispatch(postDataPending())
    return postToFirebase(dataObj)
      .then(() => {
        // console.log('actions postdb: ', dataObj)
        const timePost = new Date()
        dispatch(postDataSuccess('success posting to db: ' + timePost))
        return null
      })
      .catch(err => {
        console.error(err)
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
