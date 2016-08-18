// var React = require('react').default
// var ReactDOM = require('react-dom')
// var Menu = require('./components/menu').default

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import resurgensApp from './reducers/index.js'
import MenuContainer from './containers/menu_container'

let store = createStore(resurgensApp)

render(
  <Provider store={store}>
    <MenuContainer />
  </Provider>,
  document.getElementById("react")
)
