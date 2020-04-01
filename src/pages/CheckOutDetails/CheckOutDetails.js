import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ReactButton from '../../components/shared/ReactButton/ReactButton'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { random } from 'faker'

export const CheckOutDetails = () => {
  const history = useHistory()
  const deliveryDetails = useSelector(state => state.deliveryDetails)
  const receiverDetails = useSelector(state => state.receiverDetails)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [transaction, setTransaction] = useState({})

  const finishTransactionHandler = async event => {
    event.preventDefault()
    try {
      const transactionDetails = {
        sender: {
          name: 'Kestutis',
          surname: 'Bilinskas'
        },
        receiver: {
          name: receiverDetails.name,
          surname: receiverDetails.surname,
          receiveCountry: deliveryDetails.receiveCountryIso,
          deliveryType: deliveryDetails.payOutMethod,
          bank: receiverDetails.bankcode,
          account: receiverDetails.account,
          amount: deliveryDetails.totalPrice
        },
        id: random.uuid(),
        trackingNumber: `CH${Date.now()}`
      }
      const finishedTransaction = await axios.post(
        'http://localhost:4000/transactions',
        transactionDetails
      )
      setIsSubmitted(true)
      setTransaction(finishedTransaction.data)
      console.log(finishedTransaction.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Row>
        <Col>
          {isSubmitted ? (
            <Card>
              <Card.Body>
                <Card.Title>Transaction Sent</Card.Title>
                <Card.Text>
                  Tracking number: {transaction.trackingNumber}
                </Card.Text>
                <ReactButton
                  label='Send Again'
                  variant='primary'
                  onClick={() => history.push('./deliverydetails')}
                />
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Body>
                <Card.Title>Transaction Details:</Card.Title>
                <Card.Text>
                  Receiver: {receiverDetails.name} {receiverDetails.surname}
                </Card.Text>
                <Card.Text>Amount: {deliveryDetails.totalPrice} EUR</Card.Text>
                <Card.Text>
                  Receiving Bank: {deliveryDetails.bankcode}
                </Card.Text>
                <Form onSubmit={finishTransactionHandler}>
                  <ReactButton
                    label='Back'
                    variant='danger'
                    onClick={() => history.push('./payoutdetails')}
                  />
                  <ReactButton label='Finish' variant='success' type='submit' />
                </Form>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </>
  )
}
