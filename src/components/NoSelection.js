import React from 'react';
import './NoSelection.css';

const NoSelection = ({user, dueDate}) => {
  return (
    <div className='NoSelection'>
      <p>{user.username} is on deck!</p>
      <p>New album coming {dueDate}</p>
    </div>
  )
}

export default NoSelection
