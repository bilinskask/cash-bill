import * as actionTypes from './actionTypes'

export const setDeliveryDetailsAction = payload => ({
  type: actionTypes.SET_DELIVERY_DETAILS,
  payload
})

export const setReceiverDetailsAction = payload => ({
  type: actionTypes.SET_RECEIVER_DETAILS,
  payload
})

export const getDropdownDataAction = payload => ({
  type: actionTypes.GET_DROPDOWN_DATA,
  payload
})
