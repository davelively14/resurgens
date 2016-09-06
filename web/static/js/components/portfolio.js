import React from 'react'
import PortfolioItemContainer from '../containers/portfolio_item_container'

const Portfolio = React.createClass({
  render() {
    return (
      <div>
        <div className="image-block-portfolio" id="portfolio">
          <span className="image-text">My Portfolio</span>
        </div>
        <PortfolioItemContainer id="1" />
        <PortfolioItemContainer id="2" />
        <PortfolioItemContainer id="3" />
      </div>
    )
  }
})

export default Portfolio
