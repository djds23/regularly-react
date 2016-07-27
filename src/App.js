import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Post from './components/Post.js';
import More from './components/More.js';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { dueDates: [], fetchCount: 0 }
  }

  componentDidMount() {
    let from = moment()
    let to = moment().subtract(4, 'weeks')
    this.fetchFromCalendar(from, to)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>More Music Every Week</h2>
        </div>
        <div className="App-intro">
          {this.state.dueDates.map(payload => (
              <Post
                key={payload.id}
                user={payload.user}
                embeds={payload.embeds}
                dueDate={payload.dueDate}
                />
            )
          )}
          <More moreDueDates={this.moreDueDates.bind(this)} />
        </div>
      </div>
    );
  }

  moreDueDates() {
    let lastSelection = this.state.dueDates.slice(-1).pop();
    if (lastSelection == null) {
      return;
    } else {
      let from = moment(lastSelection.dueDate)
      let to = moment(lastSelection.dueDate).subtract(3, 'weeks')
      this.fetchFromCalendar(from, to)
    }
  }

  fetchFromCalendar(from, to) {
    this.props.calendar.fetch({
      from: from,
      to: to
    }).then((updatedCalendar) => {
      this.setState((previousState, currentProps) => {
        return {
          dueDates: updatedCalendar.collection()
        }
      })
    })
  }
}

export default App;
