import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumDueDate from './models/AlbumDueDate.js';


class App extends Component {
  render() {
    debugger;

    let a = new AlbumDueDate()
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {a.fetchData()}
        </p>
      </div>
    );
  }
}

export default App;
