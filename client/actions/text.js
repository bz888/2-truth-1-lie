import { getTextOutput, postDbForm, getDataDB } from '../api/api'
import { showError } from '../actions/error'
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

async function postToFirebase (userInfo) {
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

// firebase GET function

function getFromFirebase () {
  const recentPostQuery = query((collection(getFirestore(), 'user_input'), orderBy('timestamp', 'desc'), limit(5)))
  onSnapshot(recentPostQuery, function (snapshot) {
    snapshot.docChanges().forEach(function(change) {
      if (change.type === 'removed') {
        delete
      }
    })
  })
}


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

export function fetchDataDB () {
  return (dispatch) => {
    dispatch(fetchDataPending())
    return getDataDB()
      .then(dataDB => {
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

export function postDataSuccess (dataObj) {
  return {
    type: POST_DATA_DB_SUCCESS,
    dataObj
  }
}

export function postDataDB (dataObj) {
  return (dispatch) => {
    dispatch(postDataPending())
    return postToFirebase(dataObj)
      .then((dataObj) => {
        console.log('actions postdb: ', dataObj)
        dispatch(postDataSuccess(dataObj))
        return null
      })
      .catch(err => {
        console.error(err)
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
