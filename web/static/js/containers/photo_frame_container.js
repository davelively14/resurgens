import {connect} from 'react-redux'
import PhotoFrame from '../components/photo_frame'
import {hidePhotoFrame, showPhotoFrame} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showPhotoFrame: (id) => {
      dispatch(showPhotoFrame(id))
    },
    hidePhotoFrame: (id) => {
      dispatch(hidePhotoFrame(id))
    }
  }
}

const PhotoFrameContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoFrame)

export default PhotoFrameContainer
