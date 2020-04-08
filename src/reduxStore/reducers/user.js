const initialState = {
  id: null

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_USER':
      return {...state, id: action.payload}
  }
}