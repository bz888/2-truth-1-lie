import { IMG_API_SUCCESS } from '../actions/text'

function imgOutput (state = '', action) {
  switch (action.type) {
    case IMG_API_SUCCESS:
      console.log('reducer apiOutputIMG: ', action)
      return action.outputimage
    default:
      return state
  }
}

export default imgOutput
