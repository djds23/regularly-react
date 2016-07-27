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
    this.props.calendar.fetch({
      from: moment(),
      to: moment().subtract(4, 'weeks')
    }).then((updatedCalendar) => {
      this.setState((previousState, currentProps) => {
        return {
          dueDates: updatedCalendar.collection()
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>More Music Every Week</h2>
        </div>
        <div className="App-intro">
          {this.availableDueDates().map(payload => (
              <Post
                key={payload.id}
                user={payload.user}
                embeds={payload.embeds}
                dueDate={payload.dueDate}
                />
            )
          )}
          <More moreDueDates={this.moreDueDates} />
        </div>
      </div>
    );
  }

  moreDueDates() {
    let lastSelection = this.state[-1];
    if (lastSelection == null) {
      return;
    } {
      let to = moment(lastSelection.dueDate).subtract(3, 'weeks').format()
    }
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
