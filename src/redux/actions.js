import axios from 'axios'
import { getDropdownDataAction } from './actionCreators'

export const dropdownRetieval = () => async dispatch => {
  const retrievedDropDowns = await axios.get(
    'http://localhost:4000/dropdowndata'
  )
  dispatch(getDropdownDataAction(retrievedDropDowns.data))
}
