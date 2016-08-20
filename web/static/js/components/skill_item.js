import React, {PropTypes} from 'react'

const SkillItem = React.createClass({
  render() {
    return (
      <span>
        <a href={this.props.link} target="_blank">
          <img src={this.props.imageSrc} alt={this.props.text + " icon"} className="skill-icon zoom"/>
        </a>
        <br />
        <span className="skill-icon-label">{this.props.text}</span>
      </span>
    )
  }
})

SkillItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default SkillItem
