import { getEntries, createEntry, getEntriesCount, switchEntries, createUser, login } from '../services/apiEndpoints'

export const fetchEntries = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_ENTRIES', payload: true });
  getEntries().then(res => {
    dispatch({ type: 'SET_ENTRIES', payload: res.entries })
    dispatch({ type: 'SET_BOUNDRYDOCS', payload: res.docs })
    dispatch({ type: 'SET_FETCHING_ENTRIES', payload: false });
  })
}

export const addEntry = (entry) => dispatch => {
  return createEntry(entry).then(function (obj) {
    getEntries().then(res => {
      dispatch({ type: 'SET_ENTRIES', payload: res.entries })
      dispatch({ type: 'SET_BOUNDRYDOCS', payload: res.docs })
      dispatch({ type: 'SET_FETCHING_ENTRIES', payload: false });
    })
  })
}

export const entriesTotalCount = () => dispatch => {
  getEntriesCount().then(res => {
    dispatch({ type: 'SET_TOTAL_COUNT', payload: res })
  })
}

export const changingEntries = (docs, direction) => dispatch => {
  dispatch({ type: 'SET_FETCHING_ENTRIES', payload: true });
  switchEntries(docs, direction).then(res => {
    dispatch({ type: 'SET_ENTRIES', payload: res.entries })
    dispatch({ type: 'SET_BOUNDRYDOCS', payload: res.docs })
    dispatch({ type: 'SET_FETCHING_ENTRIES', payload: false });
  })
}

export const setUser = (email, password) => dispatch => {
  return createUser(email, password).then(res => {
    dispatch({ type: 'SET_USER', payload: res })
  })
}

export const loginAction = (email, password) => dispatch => {
  return login(email, password).then(res => {
    dispatch({ type: 'LOGIN', payload: res })
  })
}

export const showSnackbar = (message, color) => dispatch => {
  dispatch({ type: 'SHOW_SNACKBAR', payload: { show: true, message, color } });
}

export const hideSnackbar = () => dispatch => {
  dispatch({ type: 'HIDE_SNACKBAR' })
}
