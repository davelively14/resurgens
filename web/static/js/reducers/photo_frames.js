var initialState = [
  {
    id: 1,
    image: '/images/about/three_gens.jpg',
    content: `this is the part that talks about me growing up, dad in GE, learning with QBasic, Visual Basic, C+ and other outdated languages.`,
    img_visible: false,
    content_visible: false
  },
  {
    id: 2,
    image: '/images/about/usma_jeb.jpg',
    content: `this is the part where I go to West Point, major in History (minor in Computer Science), and prep for a life in the Army.`,
    img_visible: false,
    content_visible: false
  },
  {
    id: 3,
    image: '/images/about/army_uh60.jpg',
    content: `this is the part where I'm in the Army, deploy a few times, and use a photo of me overseas in full battle rattle.`,
    img_visible: false,
    content_visible: false
  }
]

const processFrame = (state = {}, action) => {
  switch (action.type) {

    case 'SHOW_PHOTO':
      if (state.id != action.id) {
        return state
      }

      return Object.assign({}, state, {
        img_visible: true
      })

    case 'HIDE_PHOTO':
      if (state.id != action.id) {
        return state
      }

      return Object.assign({}, state, {
        img_visible: false
      })

    case 'SHOW_CONTENT':
      if (state.id != action.id) {
        return state
      }

      return Object.assign({}, state, {
        content_visible: true
      })

    case 'HIDE_CONTENT':
      if (state.id != action.id) {
        return state
      }

      return Object.assign({}, state, {
        content_visible: false
      })

    default:
      return state
  }
}

const photoFrames = (state = initialState, action) => {
  switch (action.type)  {

    case 'SHOW_PHOTO':
      return state.map(photo => processFrame(photo, action))

    case 'HIDE_PHOTO':
      return state.map(photo => processFrame(photo, action))

    case 'SHOW_CONTENT':
      return state.map(content => processFrame(content, action))

    case 'HIDE_CONTENT':
      return state.map(content => processFrame(content, action))

    default:
      return state
  }
}

export default photoFrames
