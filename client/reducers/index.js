import { combineReducers } from 'redux'

import dbGet from './dbGet'
import dbPost from './dbPost'
import apiOutput from './apiOutput'
import loading from './loading'
import imgOutput from './imgOutput'

export default combineReducers({
  dbGet,
  dbPost,
  apiOutput,
  loading,
  imgOutput
})
