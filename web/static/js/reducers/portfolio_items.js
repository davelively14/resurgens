var initialState = [
  {
    id: 1,
    image: 'tbd',
    title: 'Locorum',
    description: `Created this website to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summus dolor plures dies manere non potest? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Totum autem id externum est, et quod externum, id in casu est. Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Ille enim occurrentia nescio quae comminiscebatur;`,
    git_link: `https://github.com/davelively14/locorum`,
    example_link: `https://boiling-beach-47326.herokuapp.com/`,
    example_text: `website`,
    visible: false
  },
  {
    id: 2,
    image: 'tbd',
    title: 'BitPress',
    description: `Used for ATL-Love to Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summus dolor plures dies manere non potest? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Totum autem id externum est, et quod externum, id in casu est. Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Ille enim occurrentia nescio quae comminiscebatur;`,
    git_link: `https://github.com/davelively14/BITPress`,
    example_link: `http://www.love-atl.com/`,
    example_text: `website`,
    visible: false
  },
]

const processItem = (state = {}, action) => {
  switch (action.type) {

    case 'SHOW_PORTFOLIO':
      if (state.id != action.id) {
        return state
      }

      return Object.assign({}, state, {
        visible: true
      })

    case 'HIDE_PORTFOLIO':
      if (state.id != action.id) {
        return state
      }

      return Object.assign({}, state, {
        visible: false
      })

    default:
      return state
  }
}

const portfolioItems = (state = initialState, action) => {
  switch (action.type) {

    case 'SHOW_PORTFOLIO':
      return state.map(portfolio => processItem(portfolio, action))

    case 'HIDE_PORTFOLIO':
      return state.map(portfolio => processItem(portfolio, action))

    default:
      return state
  }
}

export default portfolioItems
