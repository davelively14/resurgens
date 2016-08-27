import {connect} from 'react-redux'
import PhotoFrame from '../components/photo_frame'
import {hidePhoto, showPhoto, hideContent, showContent} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showPhoto: (id) => {
      dispatch(showPhoto(id))
    },
    hidePhoto: (id) => {
      dispatch(hidePhoto(id))
    },
    showContent: (id) => {
      dispatch(showContent(id))
    },
    hideContent: (id) => {
      dispatch(hideContent(id))
    }
  }
}

const PhotoFrameContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoFrame)

export default PhotoFrameContainer
