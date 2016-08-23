import React from 'react'

const PhotoFrame = React.createClass({

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  },

  handleScroll() {
    var top = document.getElementById(this.props.showAfter).getBoundingClientRect().bottom
    var bottom = document.getElementById(this.props.hideBefore).getBoundingClientRect().top
    console.log("Show at <=0: " + top + "; Hide at <= 0: " + bottom);
    // When <= 0, photo frame appears, transition fade in
    // when > 0 or <= bottom of content block diappears (NEED TO PASS ID OF THAT ELEMENT)
  },

  render() {
    return (
      <div id={"photo-frame-" + this.props.id}>
        Just a little test
      </div>
    )
  }
})

export default PhotoFrame
