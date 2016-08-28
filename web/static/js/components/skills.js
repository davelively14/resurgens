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
          <SkillItem
            imageSrc="/images/icons/icon_css3.png"
            link=""
            text="CSS" />
          <SkillItem
            imageSrc="/images/icons/icon_html.png"
            link=""
            text="HTML" />
          <SkillItem
            imageSrc="/images/icons/icon_php.png"
            link="http://php.net/"
            text="PHP" />
          <SkillItem
            imageSrc="/images/icons/icon_js.png"
            link="https://www.javascript.com/"
            text="JavaScript" />
          <SkillItem
            imageSrc="/images/icons/icon_git.png"
            link="https://github.com/davelively14"
            text="My Github" />
          <SkillItem
            imageSrc="/images/icons/icon_li.png"
            link="https://www.linkedin.com/in/livelydave"
            text="LinkedIn" />
          <SkillItem
            imageSrc="/images/icons/icon_mail.png"
            link="mailto:info@resurgens.io"
            text="Email" />
        </div>
      </div>
    )
  }
})

export default Skills
