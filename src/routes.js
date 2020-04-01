import { ReceiverDetails } from './pages/ReceiverDetails/ReceiverDetails'
import { DeliveryDetails } from './pages/DeliveryDetails/DeliveryDetails'
import { PayoutDetails } from './pages/PayoutDetails/PayoutDetails'
import { CheckOutDetails } from './pages/CheckOutDetails/CheckOutDetails'
import { MainPage } from './pages/MainPage/MainPage'

export const routes = [
  { isExact: true, component: MainPage, path: '/' },
  { isExact: true, component: ReceiverDetails, path: '/receiverdetails' },
  { isExact: true, component: DeliveryDetails, path: '/deliverydetails' },
  { isExact: true, component: PayoutDetails, path: '/payoutdetails' },
  { isExact: true, component: CheckOutDetails, path: '/checkoutdetails' }
]
