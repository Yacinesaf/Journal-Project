import { combineReducers } from 'redux'
import entries from './entries'
import user from './user'
import snackbar from './snackbar'
export default combineReducers({
  entries,
  user,
  snackbar
})