import React from 'react';
import Header from './components/Header.js';
import './App.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
