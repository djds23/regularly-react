import React from 'react';
import './DueDate.css';

const DueDate = ({ dueDate }) => {
  return (
    <p className='DueDate'>Selected on {dueDate}</p>
  )
}

export default DueDate
