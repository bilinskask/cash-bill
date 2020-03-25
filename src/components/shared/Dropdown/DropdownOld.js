import React from 'react'
import Select from 'react-select'
import classes from './Dropdown.module.css'

const options = [
  { value: 'sebb', label: 'SEB' },
  { value: 'swed', label: 'SWEDBANK' },
  { value: 'lumi', label: 'Luminor' }
]

const Dropdown = () => (
  <Select className={classes.dropdownContainer} options={options} name='asds' />
)

export default Dropdown
