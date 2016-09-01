import React, {PropTypes} from 'react'
import Button from './button'

const PortfolioItem = React.createClass({
  render() {
    var record = this.props.state.portfolioItems.find(obj => {
      return obj.id == this.props.id
    })

    return (
      <div className="content-block">
        <h3>{record.title}</h3>
        <p>{record.description}</p>
        <Button link={record.example_link} caption="Example" />
        <Button link={record.git_link} caption="View on Github" />
      </div>
    )
  }
})

export default PortfolioItem
