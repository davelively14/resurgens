import {connect} from 'react-redux'
import PhotoFrame from '../components/photo_frame'
import {hideFrame, showFrame} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showFrame: (id) => {
      dispatch(showFrame(id))
    },
    hideFrame: (id) => {
      dispatch(hideFrame(id))
    }
  }
}

const PhotoFrameContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoFrame)

export default PhotoFrameContainer
