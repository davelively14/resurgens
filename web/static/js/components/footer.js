import React from 'react'
import ContactItem from './contact_item'

const Footer = React.createClass({
  render() {
    return (
      <div className="footer-block" id="footer">
        <div className="footer-text">I'd love to get your questions, comments, and feedback!</div>
        <br />
        <ContactItem
          imageSrc="/images/icons/icon_mail.png"
          link="mailto:dlively@resurgens.io?subject=Your%20website"
          text="Email Dave" />
        <ContactItem
          imageSrc="/images/icons/icon_git.png"
          link="https://github.com/davelively14"
          text="View Github" />
        <ContactItem
          imageSrc="/images/icons/icon_twitter.png"
          link="https://twitter.com/RealDaveLively"
          text="Twitter" />
        <ContactItem
          imageSrc="/images/icons/icon_li.png"
          link="https://www.linkedin.com/in/livelydave"
          text="View LinkedIn" />
      </div>
    )
  }
})

export default Footer
