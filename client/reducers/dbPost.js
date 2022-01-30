import { POST_DATA_DB_SUCCESS } from '../actions/text'

function dbPost (state = {}, action) {
  switch (action.type) {
    case POST_DATA_DB_SUCCESS:
      console.log('reducer dbPost: ', action.dataObj)
      return action.dataObj
    default:
      return state
  }
}

export default dbPost
