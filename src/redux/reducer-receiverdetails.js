import * as actionTypes from './actionTypes'

const receiverData = {
  name: '',
  surname: '',
  bankcode: '',
  account: '',
  account2: ''
}

export default (state = receiverData, action) => {
  switch (action.type) {
    case actionTypes.SET_RECEIVER_DETAILS:
      return action.payload
    default:
      return state
  }
}
