import {combineReducers} from 'redux'
import menu from './menu'
import photoFrames from './photo_frames'

const resurgensApp = combineReducers({
  menu,
  photoFrames
})

export default resurgensApp
