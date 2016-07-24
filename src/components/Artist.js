import React from 'react'

class Artist extends React.Component {
  render() {
    return (
      <p>{this.props.artist.name}</p>
    )
  }
}


export default Artist
