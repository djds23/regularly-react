import React from 'react'
import './UserDetail.css'

class UserDetail extends React.Component {
  render () {
    return (
      <span className='UserDetail'>Chosen By: {this.props.user.username}</span>
    )
  }
}

export default UserDetail
