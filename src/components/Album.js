import React from 'react'
import Artist from './Artist.js'
import ServiceEmbed from './ServiceEmbed.js'

class Album extends React.Component {
  renderServiceName() {
    return this.props.embeds.map(embed => (
        <ServiceEmbed
          key={this.props.embed.id}
          serviceName={this.props.embed.serviceName}
          embed={this.props.emebed.embed}
        />
      )
    )
  }

  render() {
    return (
      <div>
        <Artist key={this.props.artist.id} name={this.props.artist.name} />
        <p>{this.props.album}</p>
      </div>
    )
  }
}

export default Album
