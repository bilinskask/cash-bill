import * as actionTypes from './actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_DROPDOWN_DATA:
      return action.payload
    default:
      return state
  }
}
