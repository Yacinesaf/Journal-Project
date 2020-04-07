import { getEntries, createEntry, getEntriesCount, switchEntries, user } from '../services/apiEndpoints'

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
    dispatch({ type: 'ADD_ENTRY', payload: obj })
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
