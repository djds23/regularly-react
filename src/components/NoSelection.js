import React from 'react'
import moment from 'moment'
import './NoSelection.css'

const NoSelection = ({user, dueDate}) => {
  const formattedDate = moment(dueDate).format('ddd, MMM Do YYYY')
  return (
    <div className='NoSelection'>
      <p>{user.username} is on deck!</p>
      <p>New album coming {formattedDate}</p>
    </div>
  )
}

export default NoSelection
