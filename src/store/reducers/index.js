import { combineReducers } from 'redux'
import authReducers from './authReducers.js'
import statusReducers from './statusReducers.js'
import userReducers from './userReducers.js'

const rootReducer = combineReducers({
  authReducers,
  statusReducers,
  userReducers
})

export default rootReducer
