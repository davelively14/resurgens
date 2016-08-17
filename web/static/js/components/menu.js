import React from 'react'
import {makeSticky, makeUnsticky} from '../actions'

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
      dispatch(makeSticky())
      console.log("Made sticky");
    } else if (menuTop >= 0 && this.props.sticky) {
      dispatch(makeUnsticky())
      console.log("Made unsticky");
    }
  },

  renderMenu(menuClass) {
    return (
      <div className={menuClass + " grid"} ref="menu">
        <div className="grid__item grid__item--xs-span-3">

        </div>
        <div className="grid__item grid__item--xs-span-9">
          <a href="#" className="menu-item">Portfolio</a>
          <a href="#" className="menu-item">About</a>
          <a href="#" className="menu-item">Home</a>
        </div>
      </div>
    )
  },

  menu() {
    var cont_pos = document.getElementById("menu_container").getBoundingClientRect().top

    if (cont_pos < 0) {
      console.log(cont_pos);
      console.log(this.renderMenu("menu menu-stick"));
      return (this.renderMenu("menu menu-stick"))
    } else {
      console.log(cont_pos);
      console.log(this.renderMenu("menu"));
      return (this.renderMenu("menu"))
    }
  },

  render() {
    return(
      <div className="menu-container" id="menu_container">
        {this.menu()}
      </div>
    )
  }
})

export default Menu
