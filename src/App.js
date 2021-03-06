import React, { Component } from 'react'
import moment from 'moment'
import './App.css'

import Post from './components/Post.js'
import More from './components/More.js'
import Calendar from './collections/Calendar.js'
import AlbumDueDate from './models/AlbumDueDate.js'

class App extends Component {

  constructor (props) {
    super(props)

    this.calendar = new Calendar({
      endpoint: '/api/v1/calendar',
      model: AlbumDueDate,
      format: (json) => json.dueDates
    })
    this.state = { dueDates: [], fetchCount: 0 }
  }

  componentDidMount () {
    let from = moment().add(1, 'week')
    let to = moment().subtract(4, 'weeks')
    this.fetchFromCalendar(from, to)
  }

  render () {
    return (
      <div>
        {this.renderPostsOrLoading()}
        <More moreDueDates={this.moreDueDates.bind(this)} />
      </div>
    )
  }

  renderPostsOrLoading () {
    let view;
    if (this.state.fetchCount === 0 && this.state.dueDates.length === 0) {
      view = (
        <p>Loading ...</p>
      )
    } else if (this.state.fetchCount > 0 && this.state.dueDates.length === 0) {
      view =(
        <p>No Albums!</p>
      )
    } else {
      view = this.state.dueDates.map(payload => (
        <Post
          key={payload.id}
          selectionId={payload.id}
          user={payload.user}
          embeds={payload.embeds}
          artist={payload.artist}
          album={payload.album}
          dueDate={payload.dueDate}
          />
        )
      )
    }
    return view
  }

  moreDueDates () {
    let lastSelection = this.state.dueDates.slice(-1).pop()
    if (lastSelection == null) {
      return
    } else {
      let from = moment(lastSelection.dueDate)
      let to = moment(lastSelection.dueDate).subtract(3, 'weeks')
      this.fetchFromCalendar(from, to)
    }
  }

  fetchFromCalendar (from, to) {
    this.calendar.fetch({
      from: from,
      to: to
    }).then((updatedCalendar) => {
      this.setState((previousState, currentProps) => {
        return {
          dueDates: updatedCalendar.collection(),
          fetchCount: previousState.fetchCount + 1
        }
      })
    })
  }
}

export default App
