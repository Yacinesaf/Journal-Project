const initialState = {
  show: false,
  message : null
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SHOW_SNACKBAR':
      return {...state, show: action.payload}
    case 'SET_MESSAGE':
      return {...state, message: action.payload}
  }
}