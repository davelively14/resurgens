import {connect} from 'react-redux'
import PortfolioItem from '../components/portfolio_item'
import {showPortfolio, hidePortfolio} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showPortfolio: (id) => {
      dispatch(showPortfolio(id))
    },
    hidePortfolio: (id) => {
      dispatch(hidePortfolio(id))
    }
  }
}

const PortfolioItemContainer = connect(mapStateToProps, mapDispatchToProps)(PortfolioItem)

export default PortfolioItemContainer
