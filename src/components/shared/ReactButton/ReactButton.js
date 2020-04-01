import React from 'react'
import Button from 'react-bootstrap/Button'
//BButton

export const ReactButton = ({ variant, type, isDisabled, label, onClick }) => {
  return (
    <Button
      variant={variant}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default ReactButton
