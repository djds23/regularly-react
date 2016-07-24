import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './components/Album.js';


class App extends Component {
  data () {
    return {
      album: 'Slanted & Enchanted',
      artist: {
        id: 1,
        name: 'Pavement'
      },
      embeds: [
        {
          id: 1,
          serviceName: 'spotify',
          embed: '<iframe src=\"https://embed.spotify.com/?uri=spotify%3Aalbum%3A2zeCJvQRgrZu1vDSXwabRl\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\"></iframe>'
        }
      ]
    }
  }

  render() {
    let data = this.data()
    let album = data.album
    let artist = data.artist
    let embeds = data.embeds
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Album album={album} artist={artist} embeds={embeds} />
        </p>
      </div>
    );
  }
}

export default App;
