import React from 'react'
import { Form } from 'react-bootstrap'

const Dropdown = ({
  changeHandler,
  inputKey,
  errors,
  options,
  label,
  isDisabled,
  isInvalid,
  value
}) => (
  <Form.Group controlId={inputKey}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      as='select'
      onChange={event => changeHandler(inputKey, event)}
      isInvalid={isInvalid}
      data-live-search='true'
      disabled={isDisabled}
    >
      <option disabled selected>
        Select...
      </option>
      {(options || []).map(option => (
        <option
          value={option.value}
          key={option.value}
          selected={option.value === value}
        >
          {option.label}
        </option>
      ))}
    </Form.Control>
    {errors && (
      <Form.Control.Feedback type='invalid'>
        {errors[inputKey]}
      </Form.Control.Feedback>
    )}
  </Form.Group>
)

export default Dropdown
