import React, {PropTypes} from 'react'

const PhotoFrame = React.createClass({
  componentDidMount() {
    var record = this.props.state.photoFrames.find(obj => {
      return obj.id == this.props.id
    })
    document.addEventListener('scroll', this.handleScroll(record))
  },

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  },

  handleScroll(record) {
    var top = document.getElementById("photo-frame-" + this.props.id).getBoundingClientRect().top
    var windowHeight = window.innerHeight
    var photoVisible = 0.4
    var contentVisible = 0.2

    var photoInRange = (top - windowHeight < 1 - (photoVisible * windowHeight))
    var contentInRange = (top - windowHeight < 1 - (contentVisible * windowHeight))

    if (photoInRange && !record.img_visible) {
      this.props.showPhotoFrame(this.props.id)
    } else if (!photoInRange && record.img_visible) {
      this.props.hidePhotoFrame(this.props.id)
    }
  },

  renderImage() {
    // If this.props.state.img_visible
  },

  render() {

    // Finds the record in the state associated with the id passed by props
    var record = this.props.state.photoFrames.find(obj => {
      return obj.id == this.props.id
    })

    if (this.props.left === false) {
      return (
        <div id={"photo-frame-" + this.props.id} className="container grid">
          <div className="grid-item-md-span-8">
            <div className="photo-frame-content photo-frame-text text-left">
              {record.content}
            </div>
          </div>
          <div className="grid-item-md-span-4">
            <div className="photo-frame">
              <img src={record.image} className="photo" />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div id={"photo-frame-" + this.props.id} className="container grid">
          <div className="grid-item-md-span-4">
            <div className="photo-frame">
              <img src={record.image} className="photo" />
            </div>
          </div>
          <div className="grid-item-md-span-8">
            <div className="photo-frame-content photo-frame-text text-right">
              {record.content}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div id={"photo-frame-" + this.props.id} className="container grid">
        <div className="grid-item-md-span-4">
          <div className="photo-frame">
            <img src={record.image} className="photo" />
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

PhotoFrame.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.bool
}

export default PhotoFrame
