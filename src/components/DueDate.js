import React from 'react'
import moment from 'moment'
import './DueDate.css'

const DueDate = ({ dueDate }) => {
  const formattedDate = moment(dueDate).format('ddd, MMM Do YYYY')
  return (
    <p className='DueDate'>Selected on {formattedDate}</p>
  )
}

export default DueDate
