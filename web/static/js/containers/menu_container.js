import {connect} from 'react-redux'
import Menu from '../components/menu'
import {makeSticky, makeUnsticky} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    sticky: state.menu.sticky,
    menuContent: state.menu.menuContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeSticky: () => {
      dispatch(makeSticky())
    },
    makeUnsticky: () => {
      dispatch(makeUnsticky())
    }
  }
}


const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer
