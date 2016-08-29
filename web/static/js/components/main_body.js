import React from 'react'
import About from './about'
import Portfolio from './portfolio'
import Skills from './skills'

const MainBody = React.createClass({
  render() {
    return (
      <div className="main" id="main">
        <div className="intro-block">
          <span className="intro-text">So that subtitle is a bit dramatic. I'm not introducing anything as revolutionary as an improved wheel, but I did implement this site without the aid of Bootstrap, jQuery, or any other library of eye candy goodness. Just Phoenix and Elixir on the backend, ReactJS and Redux on the front, where every component is my own design. Why? So I can learn.</span>
        </div>
        <Portfolio />
        <About />
        <Skills />
      </div>
    )
  }
})

export default MainBody
