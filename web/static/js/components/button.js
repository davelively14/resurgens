import React from 'react'

const Button = React.createClass({
  render() {
    return (
      <span className="button">
        <a href={this.props.link} target="_blank">{this.props.caption}</a>
      </span>
    )
  }
})

export default Button
