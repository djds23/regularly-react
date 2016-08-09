import React from 'react'
import DueDate from './DueDate.js'
import UserDetail from './UserDetail.js'
import ServiceEmbed from './ServiceEmbed.js'
import ToggleAlbumView from './ToggleAlbumView.js'
import './AlbumSelection.css'

class AlbumSelection extends React.Component {
  constructor () {
    super()
    this.state = { showEmbed: false }
  }

  renderServiceEmbed () {
    const embedId = (embed) => `${embed.id}-${this.props.album}`
    return this.props.embeds.map(embed => (
        <ServiceEmbed
          key={embedId(embed)}
          serviceName={embed.serviceName}
          embed={embed.embed}
        />
      )
    )
  }

  /**
   * It may not be the best idea to always render both
   * the accordion view and the full desktop view.
   */
  renderAlbumView () {
    return (
      <div>
        <div className='HideOnDesktop'>
          <ToggleAlbumView
            embeds={this.props.embeds}
            album={this.props.album}
            artist={this.props.artist}
            showEmbed={this.state.showEmbed}
            toggleEmbed={this.toggleEmbed.bind(this)}
          />
        </div>
        <div className='HideOnMobile'>
          {this.renderServiceEmbed()}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className='AlbumSelection'>
        <div>
          {this.renderAlbumView()}
        </div>
        <UserDetail user={this.props.user} />
        <DueDate dueDate={this.props.dueDate} />
      </div>
    )
  }

  toggleEmbed () {
    this.setState((previousState, currentProps) => {
      return {
        showEmbed: !previousState.showEmbed
      }
    })
  }
}

export default AlbumSelection
