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

export const showPhoto = (id) => {
  return {
    type: 'SHOW_PHOTO',
    id
  }
}

export const hidePhoto = (id) => {
  return {
    type: 'HIDE_PHOTO',
    id
  }
}

export const showContent = (id) => {
  return {
    type: 'SHOW_CONTENT',
    id
  }
}

export const hideContent = (id) => {
  return {
    type: 'HIDE_CONTENT',
    id
  }
}
