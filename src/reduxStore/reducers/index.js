import { combineReducers } from 'redux'
import entries from './entries'
import user from './user'

export default combineReducers({
  entries,
  user
})