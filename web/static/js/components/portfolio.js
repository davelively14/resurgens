import React from 'react'
import PortfolioItemContainer from '../containers/portfolio_item_container'

const Portfolio = React.createClass({
  render() {
    return (
      <div>
        <div className="image-block-portfolio" id="portfolio">
          <span className="image-text">My Portfolio</span>
        </div>
        <PortfolioItemContainer />
        <PortfolioItemContainer />
      </div>
    )
  }
})

export default Portfolio
