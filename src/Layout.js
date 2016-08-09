import React from 'react';
import { IndexLink } from 'react-router';
import Header from './components/Header.js';
import './App.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <IndexLink className='noUnderline' to='/'>
          <Header />
        </IndexLink>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
