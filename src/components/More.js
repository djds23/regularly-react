import React from 'react';
import './More.css';

class More extends React.Component {
  render() {
    return (
      <div className='MoreButton' onClick={this.handleClick.bind(this)}>
        <p className='MoreButtonText' >
          More
        </p>
      </div>
    )
  }

  handleClick(event) {
    event.preventDefault()
    this.props.moreDueDates()
  }
}

export default More
