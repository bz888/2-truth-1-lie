import { combineReducers } from 'redux'

import dbGet from './dbGet'
import dbPost from './dbPost'
import apiOutput from './apiOutput'
import loading from './loading'

export default combineReducers({
  dbGet,
  dbPost,
  apiOutput,
  loading
})
