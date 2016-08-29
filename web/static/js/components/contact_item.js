import React, {PropTypes} from 'react'

const ContactItem = React.createClass({
  render() {
    return (
      <span>
        <a href={this.props.link} target="_blank">
          <img src={this.props.imageSrc} alt={this.props.text + " icon"} className="contact-icon zoom" />
          <span className="contact-icon-label zoom">{this.props.text}</span>
        </a>
      </span>
    )
  }
})

ContactItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default ContactItem
