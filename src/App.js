import React, { Component } from 'react';
import './App.css';
import AlbumSelection from './components/AlbumSelection.js';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { dueDates: [], fetchCount: 0 }
  }

  componentDidMount() {
    this.setState({ dueDates: [], fetchCount: 0 })
    this.fetchInitialState()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>More Music Every Week</h2>
        </div>
        <div className="App-intro">
          {this.availableDueDates().map(payload => (
              <AlbumSelection
                key={payload.id}
                user={payload.user}
                embeds={payload.embeds}
                dueDate={payload.dueDate}
                />
            )
          )}
        </div>
      </div>
    );
  }

  fetchInitialState() {
    let request = new Request('/api/v1/calendar')
    let response = fetch(request).then((response) => {
      return response.json().then((json) => {
        return this.setState((previousState, currentProps) => {
          return {
            dueDates: json.dueDates,
            fetchCount: previousState.fetchCount + 1
          }
        })
      })
    })
    return response
  }

  availableDueDates() {
    let dueDates = []

    if (this.state == null) {
      dueDates = []
    } else {
      dueDates = this.state.dueDates
    }

    return dueDates
  }


}

export default App;
