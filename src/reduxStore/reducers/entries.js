const initialState = {
  entries: [],
  fetchingEntries: true
}

export default function(state= initialState, action) {
  switch(action.type) {
    default: return state

    case 'SET_FETCHING_ENTRIES':
      return {...state, fetchingEntries: action.payload}

    case 'SET_ENTRIES':
      return {...state, entries: action.payload}
  }
}