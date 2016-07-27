import React from 'react';

class More extends React.Component {
  render() {
    return (
      <button onClick={this.handleClick.bind(this)} />
    )
  }

  handleClick(event) {
    event.preventDefault()
    this.props.moreDueDates()
  }
}

export default More
