import React from 'react'

const Button = React.createClass({
  renderIcon() {
    if (this.props.icon) {
      return (
        <img src={this.props.icon} className="button-icon" />
      )
    } else {
      return undefined
    }
  },

  render() {
    return (
      <span className="button">
        <a href={this.props.link} target="_blank">{this.renderIcon()}{this.props.caption}</a>
      </span>
    )
  }
})

export default Button
