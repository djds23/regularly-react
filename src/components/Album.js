import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <p>{this.props.album.name}</p>
    )
  }
}

export default Album
