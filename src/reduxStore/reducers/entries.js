const initialState = {
  entriesList: [],
  fetchingEntries: true,
}

export default function(state= initialState, action) {
  switch(action.type) {
    default: return state

    case 'SET_FETCHING_ENTRIES':
      return {...state, fetchingEntries: action.payload}

    case 'SET_ENTRIES':
      return {...state, entriesList: action.payload}
    case 'ADD_ENTRY' : 
      return {...state, entriesList : [...state.entriesList, action.payload]}
  }
}