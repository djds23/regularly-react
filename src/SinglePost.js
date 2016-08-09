import React from 'react'
import 'whatwg-fetch'

import AlbumSelection from './components/AlbumSelection.js'

class SinglePost extends React.Component {
  constructor (props) {
    super(props)
    this.state = null
  }

  componentDidMount () {
    this.fetchAlbumSelection()
  }

  render () {
    let view
    if (this.state == null) {
      view = this.renderLoading()
    } else {
      view = this.renderAlbumSelection()
    }
    return view
  }

  renderLoading () {
    return (
      <p>Loading...</p>
    )
  }

  renderAlbumSelection () {
    return (
      <AlbumSelection
        user={this.state.user}
        embeds={this.state.embeds}
        dueDate={this.state.dueDate}
        album={this.state.album}
        artist={this.state.artist}
      />
    )
  }

  fetchAlbumSelection () {
    return fetch(this.postRequest()).then((response) => {
      response.json().then((json) => {
        this.setState(json)
      })
    })
  }

  postRequest () {
    return new Request(`/api/v1/posts/${this.props.routeParams.postId}`)
  }

}

export default SinglePost
