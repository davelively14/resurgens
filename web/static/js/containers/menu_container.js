import {connect} from 'react-redux'
import Menu from '../components/menu'

const mapStateToProps = (state) => {
  return {
    sticky: state.menu.sticky
  }
}

const MenuContainer = connect(mapStateToProps)(Menu)

export default MenuContainer
