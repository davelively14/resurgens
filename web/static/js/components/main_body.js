import React from 'react'
import About from './about'
import Portfolio from './portfolio'
import Skills from './skills'

const MainBody = React.createClass({
  render() {
    return (
      <div className="main" id="main">
        <div className="intro-block">
          <span className="intro-text">This is a placeholder for all of this, but what happens if we have to wrap this text. And then we wrap it again? Does it all work?</span>
        </div>
        <Portfolio />
        <About />
        <Skills />
      </div>
    )
  }
})

export default MainBody
