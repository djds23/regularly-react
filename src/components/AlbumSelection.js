import React from 'react';
import Album from './Album.js';
import Artist from './Artist.js';
import DueDate from './DueDate.js';
import UserDetail from './UserDetail.js';
import ServiceEmbed from './ServiceEmbed.js';

class AlbumSelection extends React.Component {
  renderServiceEmbed() {
    return this.props.embeds.map(embed => (
        <ServiceEmbed
          key={embed.id}
          serviceName={embed.serviceName}
          embed={embed.embed}
        />
      )
    )
  }

  renderServiceName() {
    return (
      <div>
        <div className="HideOnDesktop">
          <Album album={this.props.album} />
          <Artist artist={this.props.artist} />
        </div>
        <div className="HideOnMobile">
          {this.renderServiceEmbed()}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.renderServiceName()}
        </div>
        <UserDetail user={this.props.user} />
        <DueDate dueDate={this.props.dueDate} />
      </div>
    )
  }
}

export default AlbumSelection
