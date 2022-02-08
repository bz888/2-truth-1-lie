import { getTextOutput, postToFirebase, getImageOutput } from '../api/api'
import { showError } from '../actions/error'

// deep api ping
export const TEXT_API_PENDING = 'TEXT_API_PENDING'
export const TEXT_API_SUCCESS = 'TEXT_API_SUCCESS'

export const IMG_API_PENDING = 'IMG_API_PENDING'
export const IMG_API_SUCCESS = 'IMG_API_SUCCESS'

// get data (objs) from DB
export const FETCH_DATA_DB_PENDING = 'FETCH_DATA_DB_PENDING'
export const FETCH_DATA_DB_SUCCESS = 'FETCH_DATA_DB_SUCCESS'

// post data to DB
export const POST_DATA_DB_PENDING = 'POST_DATA_DB_PENDING'
export const POST_DATA_DB_SUCCESS = 'POST_DATA_DB_SUCCESS'

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

export function imagePending () {
  return {
    type: IMG_API_PENDING
  }
}

export function imageSuccess (outputimage) {
  return {
    type: IMG_API_SUCCESS,
    outputimage
  }
}

// Should output generateAPIText
export function generateImage (inputImage) {
  return (dispatch) => {
    dispatch(imagePending())
    return getImageOutput(inputImage)
      .then((imgData) => {
        console.log('actions: ', imgData)
        dispatch(imageSuccess(imgData))
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
        dispatch(postDataSuccess('success!'))
        return null
      })
      .catch(err => {
        console.error(err)
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
