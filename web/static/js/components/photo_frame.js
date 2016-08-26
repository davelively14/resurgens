import React from 'react'

const PhotoFrame = React.createClass({

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  },

  handleScroll() {
    var top = document.getElementById("photo-frame-" + this.props.id).getBoundingClientRect().top
    var windowHeight = window.innerHeight

    var inRange = (top - windowHeight < 1 - (0.4 * windowHeight))

    console.log(inRange);
    // When <= 0, photo frame appears, transition fade in
    // when > 0 or <= bottom of content block diappears (NEED TO PASS ID OF THAT ELEMENT)
  },

  render() {

    // Finds the record in the state associated with the id passed by props
    var record = this.props.state.photoFrames.find(obj => {
      return obj.id == this.props.id
    })

    return (
      <div id={"photo-frame-" + this.props.id} className="container grid">
        <div className="grid-item-md-span-4">
          <div className="photo-frame">
            Just a little test
          </div>
        </div>
        <div className="grid-item-md-span-8">
          <div className="photo-frame-content photo-frame-text">
            {record.content}
          </div>
        </div>
      </div>
    )
  }
})

export default PhotoFrame
