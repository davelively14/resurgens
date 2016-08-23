var initialState = [
  {
    id: 1,
    visible: false
  },
  {
    id: 2,
    visible: false
  },
  {
    id: 3,
    visible: false
  }
]

const processFrame = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FRAME':
      return Object.assign({}, state, {
        id: action.id,
        visible: false
      })

    case 'SHOW_FRAME':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        visible: true
      })

    case 'HIDE_FRAME':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        visible: false
      })

    default:
      return state
  }
}

const photoFrames = (state = initialState, action) => {
  switch (action.type)  {
    case 'ADD_FRAME':
      return [
        ...state,
        processFrame(undefined, action)
      ]

    case 'SHOW_FRAME':
      return state.map(frame => processFrame(frame, action))

    case 'HIDE_FRAME':
      return state.map(frame => processFrame(frame, action))

    default:
      return state
  }
}

export default photoFrames
