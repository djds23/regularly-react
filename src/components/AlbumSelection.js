import React from 'react';
import './AlbumSelection.css';
import Album from './Album.js';
import Artist from './Artist.js';
import DueDate from './DueDate.js';
import UserDetail from './UserDetail.js';
import ServiceEmbed from './ServiceEmbed.js';

class AlbumSelection extends React.Component {
  renderServiceName() {
    return this.props.embeds.map(embed => (
        <ServiceEmbed
          key={embed.id}
          serviceName={embed.serviceName}
          embed={embed.embed}
        />
      )
    )
  }

  render() {
    return (
      <div>
        <UserDetail user={this.props.user} />
        <DueDate dueDate={this.props.dueDate} />
        <div className="SelectionBox">
          <Artist artist={this.props.artist} />
          <Album album={this.props.album} />
          {this.renderServiceName()}
        </div>
      </div>
    )
  }
}

export default AlbumSelection
