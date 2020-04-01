import * as actionTypes from './actionTypes'

const deliveryData = {
  receiveCountryIso: '',
  payInMethod: '',
  payOutMethod: '',
  sendAmount: 500,
  receiveAmount: 0,
  sendFee: 2,
  totalPrice: 0
}

export default (state = deliveryData, action) => {
  switch (action.type) {
    case actionTypes.SET_DELIVERY_DETAILS:
      return action.payload
    default:
      return state
  }
}
