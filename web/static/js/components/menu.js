import React from 'react'

const Menu = React.createClass({

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  },

  handleScroll() {
    var menuTop = document.getElementById("menu_container").getBoundingClientRect().top

    if (menuTop < 0 && !this.props.sticky) {
      this.props.makeSticky()
    } else if (menuTop >= 0 && this.props.sticky) {
      this.props.makeUnsticky()
    }
  },

  renderMenu(menuClass) {
    return (
      <div className={menuClass} ref="menu" id="menu">
        <a href="#" className="menu-item">Portfolio</a>
        <a href="#" className="menu-item">About</a>
        <a href="#" className="menu-item">Home</a>
      </div>
    )
  },

  menu() {
    if (this.props.sticky) {
      return (this.renderMenu("menu menu-sticky"))
    } else {
      return (this.renderMenu("menu"))
    }
  },

  render() {
    return(
      <div className="menu-wrapper" id="menu_container">
        {this.menu()}
      </div>
    )
  }
})

export default Menu
