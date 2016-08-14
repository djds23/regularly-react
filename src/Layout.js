import React from 'react'
import { IndexLink } from 'react-router'
import Header from './components/Header.js'
import Auth from './utils/Auth.js'
import './App.css'

class Layout extends React.Component {
  componentDidMount () {
    this.auth = new Auth()
    this.auth.initialize()
  }

  render () {
    return (
      <div className='App'>
        <IndexLink className='noUnderline' to='/'>
          <Header />
        </IndexLink>
        <div className='App-intro'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
