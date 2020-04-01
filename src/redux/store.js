import deliveryOptionsReducer from './reducer-deliverydetails'
import receiverReducer from './reducer-receiverdetails'
import commonDetailsReducer from './reducer-commondetails'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  deliveryDetails: deliveryOptionsReducer,
  receiverDetails: receiverReducer,
  commonDetails: commonDetailsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
