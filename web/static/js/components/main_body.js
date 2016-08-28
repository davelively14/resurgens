import React from 'react'
import About from './about'
import Portfolio from './portfolio'
import Skills from './skills'

const MainBody = React.createClass({
  render() {
    return (
      <div className="main" id="main">
        <div className="intro-block">
          <span className="intro-text">Welcome to my personal website. In the interest of showcasing my abilities, I created this from scratch - no bootstrap, no foundation, not even jQuery. Instead, I used two amazing frameworks: Phoenix and Elixir for the backend, ReacJS and Redux for the frontend.</span>
        </div>
        <Portfolio />
        <About />
        <Skills />
      </div>
    )
  }
})

export default MainBody
