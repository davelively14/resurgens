import React from 'react'

const PhotoFrame = React.createClass({

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  },

  handleScroll() {
    var top = document.getElementById(this.props.prevElem).getBoundingClientRect().bottom
    console.log(top);
    // When <= 0, photo frame appears, transition fade in
    // when > 0 or <= bottom of content block diappears (NEED TO PASS ID OF THAT ELEMENT)
  },

  render() {
    return (
      <div>
        Just a little test
      </div>
    )
  }
})

export default PhotoFrame
