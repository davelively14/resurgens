import React, {PropTypes} from 'react'
import Button from './button'

const PortfolioItem = React.createClass({
  render() {
    var record = this.props.state.portfolioItems.find(obj => {
      return obj.id == this.props.id
    })

    return (
      <div className="grid container">
        <div className="grid-item-md-span-4">
          <div className="portfolio-item-content">
            <h2>Image goes here</h2>
          </div>
        </div>
        <div className="grid-item-md-span-8 content-block">
          <h3>{record.title}</h3>
          <p>{record.description}</p>
          <Button link={record.example_link} caption="example" />
          <Button link={record.git_link} caption="github" icon="/images/icons/icon_git.png" />
        </div>
      </div>
    )
  }
})

export default PortfolioItem
