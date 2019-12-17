import { combineReducers } from 'redux'
import statusReducers from './statusReducers.js'
import userReducers from './userReducers.js'

const rootReducer = combineReducers({
  statusReducers,
  userReducers
})

export default rootReducer
