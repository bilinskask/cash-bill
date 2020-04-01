import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Img from '../../images/euros.jpg'
import ReactButton from '../../components/shared/ReactButton/ReactButton'
import { useHistory } from 'react-router'

export const MainPage = () => {
  const history = useHistory()
  return (
    <>
      {/* <Image src={Img} fluid /> */}
      <Jumbotron>
        <h1>Send Money to Baltic Countries!</h1>
        <p>
          <ReactButton
            variant='primary'
            label='Send Money'
            onClick={() => history.push('/deliverydetails')}
          />
        </p>
        <Image src={Img} fluid />
      </Jumbotron>
    </>
  )
}
