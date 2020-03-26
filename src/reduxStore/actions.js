import { getEntries } from '../services/apiEndpoints'

export const fetchEntries = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_ENTRIES', payload: true });
  getEntries().then(res => {
    dispatch({ type: 'SET_ENTRIES', payload: res })
    dispatch({ type: 'SET_FETCHING_ENTRIES', payload: false });
  })
}