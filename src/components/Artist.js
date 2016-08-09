import React from 'react'
import './Artist.css'

class Artist extends React.Component {
  render () {
    return (
      <p className='ArtistText'>
        <span className='Attribution'>By&nbsp;</span>
        {this.props.artist.name}
      </p>
    )
  }
}


export default Artist
