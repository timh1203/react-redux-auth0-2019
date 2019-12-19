import { combineReducers } from 'redux'
import authReducers from './authReducers.js'
import statusReducers from './statusReducers.js'
import userReducers from './userReducers.js'

// Why we don't need Redux Thunk
// https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux

const rootReducer = combineReducers({
  authReducers,
  statusReducers,
  userReducers
})

export default rootReducer
