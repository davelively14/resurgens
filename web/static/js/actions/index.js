export const makeSticky = () => {
  return {
    type: 'MAKE_STICKY'
  }
}

export const makeUnsticky = () => {
  return {
    type: 'MAKE_UNSTICKY'
  }
}

export const showFrame = (id) => {
  return {
    type: 'SHOW_FRAME',
    id
  }
}

export const hideFrame = (id) => {
  return {
    type: 'HIDE_FRAME',
    id
  }
}
