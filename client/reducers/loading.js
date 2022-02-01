import { SHOW_ERROR } from '../actions/error'
import { POST_DATA_DB_SUCCESS, POST_DATA_DB_PENDING, TEXT_API_PENDING, TEXT_API_SUCCESS, FETCH_DATA_DB_PENDING, FETCH_DATA_DB_SUCCESS } from '../actions/text'

function loading (state = false, action) {
  switch (action.type) {
    case TEXT_API_PENDING:
      return true
    case TEXT_API_SUCCESS:
      return false

    case FETCH_DATA_DB_PENDING:
      return true
    case FETCH_DATA_DB_SUCCESS:
      return false

    case POST_DATA_DB_PENDING:
      return true
    case POST_DATA_DB_SUCCESS:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default loading
