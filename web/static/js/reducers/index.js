import {combineReducers} from 'redux'
import menu from './menu'
import photoFrames from './photo_frames'
import portfolioItems from './portfolio_items'

const resurgensApp = combineReducers({
  menu,
  photoFrames,
  portfolioItems
})

export default resurgensApp
