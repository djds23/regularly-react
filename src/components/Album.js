import React from 'react';
import './Album.css';

class Album extends React.Component {
  render() {
    return (
      <p className='AlbumText'>{this.props.album.name}</p>
    )
  }
}

export default Album
