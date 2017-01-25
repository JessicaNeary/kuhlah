const INITIAL_STATE = {
  color: '',
  gettingNewColor: false,
  errorMessage: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'UPDATE_COLOR':
      newState.color = action.color
      newState.gettingNewColor = false
      return newState

    case 'REQUESTING_COLOR':
      newState.color = ''
      newState.gettingNewColor = true
      newState.errorMessage = null
      return newState

    case 'COLOR_POSTED':
      newState.color = action.color
      return newState

    case 'FAILED_COLOR_REQ':
      newState.gettingNewColor = false
      newState.errorMessage = action.message
      return newState

    case 'FAILED_COLOR_POST':
      newState.errorMessage = action.message
      return newState

    default:
      return state
  }
}

export default reducer
