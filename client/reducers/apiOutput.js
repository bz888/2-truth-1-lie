import { TEXT_API_SUCCESS } from '../actions/text'

function apiOutput (state = '', action) {
  switch (action.type) {
    case TEXT_API_SUCCESS:
      console.log('reducer apiOutput: ', action.outputText)
      return action.outputText
    default:
      return state
  }
}

export default apiOutput
