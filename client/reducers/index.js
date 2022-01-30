import { combineReducers } from 'redux'

import dbGet from './dbGet'
import dbPost from './dbPost'
import apiOutput from './apiOutput'

export default combineReducers({
  dbGet,
  dbPost,
  apiOutput
})
