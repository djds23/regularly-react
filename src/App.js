import React, { Component } from 'react';
import './App.css';
import AlbumSelection from './components/AlbumSelection.js';


class App extends Component {
  data () {
    return [
      {
        id: 1,
        dueDate: "2016-07-11T00:00:00.000Z",
        user: {
          username: 'dean.rex'
        },
        album: {
          name: 'Slanted & Enchanted',
          id: 1,
        },
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
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>More Music Every Week</h2>
        </div>
        <div className="App-intro">
          {this.data().map(payload => (
              <AlbumSelection
                key={payload.id}
                user={payload.user}
                album={payload.album}
                artist={payload.artist}
                embeds={payload.embeds}
                dueDate={payload.dueDate}
                />
            )
          )}
        </div>
      </div>
    );
  }
}

export default App;
