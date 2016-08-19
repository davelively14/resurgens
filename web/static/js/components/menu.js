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

  renderMenuItems(ref, name) {
    return (
      <a href={"#" + ref} className="menu-item" key={ref}>{name}</a>
    )
  },

  renderMenu(menuClass) {
    var menuContent = this.props.menuContent
    return (
      <div className={menuClass} ref="menu" id="menu">
        {menuContent.map(item => {
          return(this.renderMenuItems(item.ref, item.name))
        })}
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
