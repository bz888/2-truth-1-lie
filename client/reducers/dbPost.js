import { POST_DATA_DB_SUCCESS } from '../actions/text'

function dbPost (state = '', action) {
  switch (action.type) {
    case POST_DATA_DB_SUCCESS:
      console.log('reducer dbPost: ', action.postFunc)
      return action.postFunc
    default:
      return state
  }
}

export default dbPost
