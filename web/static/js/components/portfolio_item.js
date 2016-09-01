import React, {PropTypes} from 'react'

const PortfolioItem = React.createClass({
  render() {
    var record = this.props.state.portfolioItems.find(obj => {
      return obj.id == this.props.id
    })

    return (
      <div className="content-block">
        <h3>{record.title}</h3>
        <p>{record.description}</p>
      </div>
    )
  }
})

export default PortfolioItem
