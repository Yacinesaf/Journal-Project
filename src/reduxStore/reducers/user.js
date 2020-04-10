const initialState = {
  id: null,
  email: ''

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_USER':
      return action.payload
    case 'LOGIN':
      return action.payload
  }
}