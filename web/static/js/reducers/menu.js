var initialState = {
  sticky: false
}

const menu = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_STICKY':
      return Object.assign({}, state, {
        sticky: true
      })

    case 'MAKE_UNSTICKY':
      return Object.assign({}, state, {
        sticky: false
      })

    default:
      return state
  }
}

export default menu
