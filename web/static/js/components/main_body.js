import React from 'react'
import About from './about'
import Portfolio from './portfolio'

const MainBody = React.createClass({
  render() {
    return (
      <div className="main" id="main">
        <div className="intro-block">
          <span className="intro-text">This is a placeholder for all of this, but what happens if we have to wrap this text. And then we wrap it again? Does it all work?</span>
        </div>
        <About />
        <Portfolio />
        <div className="intro-block">
          <span className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summus dolor plures dies manere non potest? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo.</span>
        </div>
      </div>
    )
  }
})

export default MainBody
