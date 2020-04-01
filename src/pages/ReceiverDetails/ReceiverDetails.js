import React, { useState, useEffect } from 'react'

import { Input } from '../../components/shared/Input/Input'
import Dropdown from '../../components/shared/Dropdown/Dropdown'
import ReactButton from '../../components/shared/ReactButton/ReactButton'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setReceiverDetailsAction } from '../../redux/actionCreators'
import { getDropdowns } from '../../redux/selectors'
import { getReceiverDetails } from '../../redux/selectors'

export const ReceiverDetails = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const dropDownData = useSelector(getDropdowns)
  const receiverDetails = useSelector(getReceiverDetails)

  const [formState, setFormState] = useState(receiverDetails)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (receiverDetails) {
      setFormState(receiverDetails)
    }
  }, [receiverDetails])

  const inputChangeHandler = (formStateKey, event) =>
    setFormState({
      ...formState,
      [formStateKey]: event.target.value
    })

  const submitBankInfoHandler = async event => {
    event.preventDefault()
    if (validate()) {
      dispatch(setReceiverDetailsAction(formState))
      history.push('./payoutdetails')
    }
  }

  const validate = () => {
    const errors = {}
    let isReceiverDetailsValid = true
    if (!formState.name || formState.name.length < 3) {
      isReceiverDetailsValid = false
      errors.name = 'Name is mandatory'
    }
    if (!formState.surname || formState.surname.length < 3) {
      isReceiverDetailsValid = false
      errors.surname = 'Surname is mandatory'
    }
    if (!formState.bankcode) {
      isReceiverDetailsValid = false
      errors.bankcode = 'Bank is not selected'
    }
    if (!formState.account || formState.account.length !== 20) {
      isReceiverDetailsValid = false
      errors.account = 'Account is mandatory and must be 20 characters'
    }
    if (!formState.account2 || formState.account !== formState.account2) {
      isReceiverDetailsValid = false
      errors.account2 = 'Account numbers must match'
    }
    setErrors(errors)
    return isReceiverDetailsValid
  }
  return (
    <Form onSubmit={submitBankInfoHandler}>
      <Input
        inputKey='name'
        label='Name'
        placeholder='Enter Name'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.name}
        errors={errors}
        value={formState.name}
      />
      <Input
        inputKey='surname'
        label='Surname'
        placeholder='Enter Surname'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.surname}
        errors={errors}
        value={formState.surname}
      />
      <Dropdown
        label='Bank List'
        inputKey='bankcode'
        errors={errors}
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.bankcode}
        options={dropDownData.receivingBanks}
        value={formState.bankcode}
      />
      <Input
        inputKey='account'
        label='Account'
        placeholder='Account Number'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.account}
        errors={errors}
        value={formState.account}
      />
      <Input
        inputKey='account2'
        label='Re-enter account'
        placeholder='Re-enter Account Number'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.account2}
        errors={errors}
        value={formState.account2}
      />
      <ReactButton
        variant='warning'
        type='submit'
        onClick={() => history.push('./deliverydetails')}
        label='Back'
      />
      <ReactButton variant='success' type='submit' label='Next' />
    </Form>
  )
}
