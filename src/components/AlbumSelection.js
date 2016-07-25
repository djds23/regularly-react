import React from 'react';
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
