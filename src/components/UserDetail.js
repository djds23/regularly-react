import React from 'react'

class UserDetail extends React.Component {
  render() {
    return (
      <p>Chosen By: {this.props.user.username}</p>
    )
  }
}

export default UserDetail
