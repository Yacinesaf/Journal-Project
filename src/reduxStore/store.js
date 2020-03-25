import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const intialState = {}
const middlewares = [thunk]

const store = createStore(rootReducer, intialState, applyMiddleware(...middlewares))


export default store
