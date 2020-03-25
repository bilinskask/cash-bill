import React from 'react'
import { Form } from 'react-bootstrap'

const options = [
  { value: 'seb', label: 'SEB' },
  { value: 'swed', label: 'SWEDBANK' },
  { value: 'Luminor', label: 'Luminor' }
]

const Dropdown = ({ changeHandler, inputKey, errors }) => (
  <Form.Group controlId='bankcode'>
    <Form.Label>Bank Name</Form.Label>
    <Form.Control
      as='select'
      onChange={event => changeHandler(inputKey, event)}
      isInvalid={errors.bankcode}
    >
      <option disabled selected>
        Select Bank
      </option>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Form.Control>
    <Form.Control.Feedback type='invalid'>
      {errors.bankcode}
    </Form.Control.Feedback>
  </Form.Group>
)

export default Dropdown
