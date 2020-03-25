import React, { useState } from 'react'

import { Input } from '../../components/shared/Input/Input'
import Dropdown from '../../components/shared/Dropdown/Dropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { random } from 'faker'

export const Receiver = () => {
  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    bankcode: '',
    account: '',
    account2: ''
  })
  const [errors, setErrors] = useState({})
  //const [isFormValid, setIsFormValid] = useState()

  const inputChangeHandler = (formStateKey, event) =>
    setFormState({
      ...formState,
      [formStateKey]: event.target.value
    })

  const submitBankInfoHandler = async event => {
    event.preventDefault()
    validate()
    const finalData = {
      ...formState,
      transactionId: `MT${Date.now()}`,
      id: random.uuid()
    }
    try {
      const transactionSubmission = await axios.post(
        'http://localhost:4000/transactions',
        finalData
      )
      console.log(transactionSubmission)
    } catch (err) {
      console.log('order response failed with following message:', err)
    }
  }

  const validate = () => {
    const errors = {}
    if (!formState.name || formState.name.length < 3) {
      // setIsFormValid(false)
      errors.name = 'Name is mandatory'
    }
    if (!formState.surname || formState.surname.length < 3) {
      errors.surname = 'Surname is mandatory'
    }
    if (!formState.bankcode) {
      errors.bankcode = 'Bank is not selected'
    }
    if (!formState.account || formState.account.length !== 20) {
      errors.account = 'Account is mandatory and must be 20 characters'
    }
    if (!formState.account2 || formState.account !== formState.account2) {
      errors.account2 = 'Account numbers must match'
    }
    setErrors(errors)
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
      />
      <Input
        inputKey='surname'
        label='Surname'
        placeholder='Enter Surname'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.surname}
        errors={errors}
      />
      <Dropdown
        inputKey='bankcode'
        errors={errors}
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.bankcode}
      />
      <Input
        inputKey='account'
        label='Account'
        placeholder='Account Number'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.account}
        errors={errors}
      />
      <Input
        inputKey='account2'
        label='Re-enter account'
        placeholder='Re-enter Account Number'
        changeHandler={inputChangeHandler}
        isInvalid={!!errors.account2}
        errors={errors}
      />
      <Button variant='warning' type='submit'>
        Back
      </Button>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}
