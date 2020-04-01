import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from '../../components/shared/Dropdown/Dropdown'
import ReactButton from '../../components/shared/ReactButton/ReactButton'
import { Input } from '../../components/shared/Input/Input'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryDetailsAction } from '../../redux/actionCreators'
import { getDropdowns, getDeliveryDetails } from '../../redux/selectors'

export const DeliveryDetails = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const dropDownData = useSelector(getDropdowns)
  const deliveryDetails = useSelector(getDeliveryDetails)

  const [deliverySelection, setDeliverySelection] = useState(deliveryDetails)

  const exchangeRate = 1

  useEffect(() => {
    if (deliveryDetails) {
      setDeliverySelection(deliveryDetails)
    }
  }, [deliveryDetails])

  useEffect(() => {
    const multipliedAmount = exchangeRate * deliverySelection.sendAmount
    setDeliverySelection({
      ...deliverySelection,
      receiveAmount: multipliedAmount,
      totalPrice: multipliedAmount + deliverySelection.sendFee
    })
  }, [deliverySelection.sendAmount])

  const inputChangeHandler = (formStateKey, event) =>
    setDeliverySelection({
      ...deliverySelection,
      [formStateKey]: event.target.value
    })

  const formSubmitHandler = async event => {
    event.preventDefault()
    dispatch(setDeliveryDetailsAction(deliverySelection))
    history.push('./receiverdetails')
  }
  return (
    <>
      <Row>
        <Col>
          <Card style={{ width: '40rem' }}>
            <Card.Body>
              <Card.Title>Delivery Options</Card.Title>
              <Form onSubmit={formSubmitHandler}>
                <Dropdown
                  label='Receiving Countries'
                  inputKey='receiveCountryIso'
                  changeHandler={inputChangeHandler}
                  options={dropDownData.receiveCountries}
                  value={deliverySelection.receiveCountryIso}
                />
                <Dropdown
                  label='Pay Out Methods'
                  inputKey='payOutMethod'
                  changeHandler={inputChangeHandler}
                  options={dropDownData.payOutMethods}
                  isDisabled={!deliverySelection.receiveCountryIso}
                  value={deliverySelection.payOutMethod}
                />
                <Dropdown
                  label='Pay In Methods'
                  inputKey='payInMethod'
                  changeHandler={inputChangeHandler}
                  options={dropDownData.payInMethods}
                  isDisabled={!deliverySelection.payOutMethod}
                  value={deliverySelection.payInMethod}
                />
                <ReactButton
                  label='Cancel'
                  variant='danger'
                  onClick={() => history.push('./')}
                />
                <ReactButton
                  label='Next'
                  variant='success'
                  type='submit'
                  isDisabled={!deliverySelection.payInMethod}
                />
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Exhange:</Card.Title>
              <Input
                inputKey='sendAmount'
                label='You are sending:'
                placeholder='Enter Amount'
                changeHandler={inputChangeHandler}
                value={deliverySelection.sendAmount}
              />
              <Card.Text>
                Receiver Gets: {deliverySelection.receiveAmount}
              </Card.Text>
              <Card.Text>Sending Fee: {deliverySelection.sendFee} Є</Card.Text>
              <Card.Text>
                Total Cost: {deliverySelection.totalPrice} Є
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
