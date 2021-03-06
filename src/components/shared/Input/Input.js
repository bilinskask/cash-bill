import React from 'react'
import Form from 'react-bootstrap/Form'

export const Input = ({
  label,
  type,
  inputKey,
  placeholder,
  value,
  errors,
  changeHandler,
  isInvalid
}) => {
  return (
    <Form.Group controlId={inputKey}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={event => changeHandler(inputKey, event)}
        isInvalid={isInvalid}
      />
      {isInvalid && (
        <Form.Control.Feedback type='invalid'>
          {errors[inputKey]}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}
