import React from 'react'
import PhotoFrameContainer from '../containers/photo_frame_container'

const About = React.createClass({
  render() {
    return (
      <div>
        <div className="image-block-about" id="about" ref="about">
          <span className="image-text">About Me</span>
        </div>
        <PhotoFrameContainer id="1" />
        <PhotoFrameContainer id="2" left={false} />
        <PhotoFrameContainer id="3" />
      </div>
    )
  }
})

export default About
