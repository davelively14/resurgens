import React from 'react'
import SkillItem from './skill_item'

const Skills = React.createClass({
  render() {
    return (
      <div>
        <div className="image-block-skills" id="skills">
          <span className="image-text">My Mad Skills</span>
        </div>
        <div className="skill-block">
          <SkillItem
            imageSrc="/images/icons/icon_elixir.png"
            link="http://elixir-lang.org/"
            text="Elixir / Phoenix" />
          <SkillItem
            imageSrc="/images/icons/icon_react.png"
            link="https://facebook.github.io/react/"
            text="React / Redux" />
          <SkillItem
            imageSrc="/images/icons/icon_rails.png"
            link="http://rubyonrails.org/"
            text="Ruby on Rails" />
        </div>
      </div>
    )
  }
})

export default Skills
