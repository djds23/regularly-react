import React from 'react';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Album from './Album.js';
import Artist from './Artist.js';
import ServiceEmbed from './ServiceEmbed.js';
import './ToggleAlbumView.css';

class ToggleAlbumView extends React.Component {

  renderServiceEmbed() {
    const embedId = (embed) => `${embed.id}-${this.props.album}-toggleable`
    const embedGroup = () => this.props.embeds.map(embed => (
      <TransitionGroup
        key={embedId(embed)}
        transitionName="fade"
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={3000}
        >
          <ServiceEmbed
            serviceName={embed.serviceName}
            embed={embed.embed}
          />
      </TransitionGroup>
      )
    )

    return this.props.showEmbed ? embedGroup() : null
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} >
        <a>
          <Album album={this.props.album} />
          <Artist artist={this.props.artist} />
        </a>
        {this.renderServiceEmbed()}
      </div>
    )
  }

  handleClick(event) {
    event.preventDefault()
    this.props.toggleEmbed()
  }


}

export default ToggleAlbumView;
