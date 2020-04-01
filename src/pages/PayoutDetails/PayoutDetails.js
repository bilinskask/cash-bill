import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Input } from '../../components/shared/Input/Input'
import { useHistory } from 'react-router'
import ReactButton from '../../components/shared/ReactButton/ReactButton'

export const PayoutDetails = () => {
  const history = useHistory()
  const [cardDetails, setCardDetails] = useState({
    ccDetails: '',
    cvvNumber: '',
    expiryDate: ''
  })
  const [errors, setErrors] = useState([])

  const inputChangeHandler = (cardDetailsKey, event) =>
    setCardDetails({
      ...cardDetails,
      [cardDetailsKey]: event.target.value
    })

  const validate = () => {
    let isPayoutDetailsValid = true
    const errors = {}
    if (!cardDetails.ccDetails || cardDetails.ccDetails.length !== 16) {
      isPayoutDetailsValid = false
      errors.ccDetails = 'Credit Card Must be 16 Digits'
    }
    if (!cardDetails.cvvNumber || !/^[0-9]{3}$/.test(cardDetails.cvvNumber)) {
      isPayoutDetailsValid = false
      errors.cvvNumber = 'CVV must be 3 Digits'
    }
    if (
      !cardDetails.expiryDate ||
      !/^[0-1]{1}[0-9]{1}\/[0-9]{2}$/.test(cardDetails.expiryDate)
    ) {
      isPayoutDetailsValid = false
      errors.expiryDate = 'Wrong Expiry Date is in Wrong Format'
    }
    setErrors(errors)
    return isPayoutDetailsValid
  }

  const submitPayoutDetailsHandler = event => {
    event.preventDefault()
    if (validate()) {
      history.push('./checkoutdetails')
    }
  }

  return (
    <Form onSubmit={submitPayoutDetailsHandler}>
      <Input
        inputKey='ccDetails'
        label='Credit Card Details'
        placeholder='Credit Card Number'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.ccDetails}
        errors={errors}
      />
      <Input
        inputKey='cvvNumber'
        label='CVV Number'
        placeholder='CVV'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.cvvNumber}
        errors={errors}
      />
      <Input
        inputKey='expiryDate'
        label='Expire Date'
        placeholder='MM/YY'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.expiryDate}
        errors={errors}
      />
      <ReactButton
        variant='warning'
        type='submit'
        onClick={() => history.push('./receiverdetails')}
        label='Back'
      />
      <ReactButton variant='success' type='submit' label='Next' />
    </Form>
  )
}
