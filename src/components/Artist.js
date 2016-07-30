import React from 'react';
import './Artist.css';

class Artist extends React.Component {
  render() {
    return (
      <p className='ArtistText'>{this.props.artist.name}</p>
    )
  }
}


export default Artist
