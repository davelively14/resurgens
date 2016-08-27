import React, {PropTypes} from 'react'

const PhotoFrame = React.createClass({
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  },

  handleScroll() {
    var record = this.props.state.photoFrames.find(obj => {
      return obj.id == this.props.id
    })

    var top = document.getElementById("photo-frame-" + this.props.id).getBoundingClientRect().top
    var windowHeight = window.innerHeight
    var photoVisible = 0.6
    var contentVisible = 0.5

    var photoInRange = (top - windowHeight < 1 - (photoVisible * windowHeight))
    var contentInRange = (top - windowHeight < 1 - (contentVisible * windowHeight))

    if (photoInRange && !record.img_visible) {
      this.props.showPhoto(this.props.id)
    } else if (!photoInRange && record.img_visible) {
      this.props.hidePhoto(this.props.id)
    }

    if (contentInRange && !record.content_visible) {
      this.props.showContent(this.props.id)
    } else if (!contentInRange && record.content_visible) {
      this.props.hideContent(this.props.id)
    }
  },

  renderImage(record) {

    var animationStyle = {
      animation: 'fadein 2s ease-in-out, zoomin 3s forwards'
    }

    if (record.img_visible) {
      return (
        <div className="grid-item-md-span-4">
          <div className="photo-frame">
            <img src={record.image} className="photo" style={animationStyle} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="grid-item-md-span-4">
          <div className="photo-frame">

          </div>
        </div>
      )
    }

  },

  renderContent(record) {
    console.log(record.content_visible);

    var animationStyle = {
      animation: 'fadein 2s'
    }

    if (record.content_visible) {
      return (
        <div className="grid-item-md-span-8">
          <div className="photo-frame-content photo-frame-text text-left" style={animationStyle}>
            {record.content}
          </div>
        </div>
      )
    } else {
      return (
        <div className="grid-item-md-span-8">
          <div className="photo-frame-content photo-frame-text text-left">

          </div>
        </div>
      )
    }
  },

  render() {
    // Finds the record in the state associated with the id passed by props
    var record = this.props.state.photoFrames.find(obj => {
      return obj.id == this.props.id
    })

    if (this.props.left === false) {
      return (
        <div id={"photo-frame-" + this.props.id} className="container grid">
          {this.renderContent(record)}
          {this.renderImage(record)}
        </div>
      )
    } else {
      return (
        <div id={"photo-frame-" + this.props.id} className="container grid">
          {this.renderImage(record)}
          {this.renderContent(record)}
        </div>
      )
    }
  }
})

PhotoFrame.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.bool
}

export default PhotoFrame
