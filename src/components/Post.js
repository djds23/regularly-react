import React from 'react'
import NoSelection from './NoSelection.js'
import AlbumSelection from './AlbumSelection.js'

class Post extends React.Component {

  render () {
    let renderMethod
    if (this.props.embeds.length === 0) {
      renderMethod = () => this.renderNoSelection()
    } else {
      renderMethod = () => this.renderAlbumSelection()
    }
    return renderMethod()
  }

  renderAlbumSelection () {
    return (
      <AlbumSelection
        selectionId={this.props.selectionId}
        user={this.props.user}
        embeds={this.props.embeds}
        dueDate={this.props.dueDate}
        album={this.props.album}
        artist={this.props.artist}
      />
    )
  }

  renderNoSelection () {
    return (
      <NoSelection
        user={this.props.user}
        dueDate={this.props.dueDate}
      />
    )
  }
}

export default Post
