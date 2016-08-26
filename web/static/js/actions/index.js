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

export const showPhotoFrame = (id) => {
  return {
    type: 'SHOW_FRAME',
    id
  }
}

export const hidePhotoFrame = (id) => {
  return {
    type: 'HIDE_FRAME',
    id
  }
}
