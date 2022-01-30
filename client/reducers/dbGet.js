import { FETCH_DATA_DB_SUCCESS } from '../actions/text'

function dbGet (state = [{
  name: '',
  truth1: '',
  truth2: '',
  lie: '',
  article: ''
}], action) {
  switch (action.type) {
    // expect array of objects from db
    case FETCH_DATA_DB_SUCCESS:
      console.log('reducers dbData: ', action.data)
      return action.data
    default:
      return state
  }
}

export default dbGet
