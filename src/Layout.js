import React from 'react'
import { IndexLink } from 'react-router'
import Header from './components/Header.js'
import './App.css'

class Layout extends React.Component {
  componentDidMount () {
    window.fbAsyncInit = () => {
      FB.init({
        appId      : '1081772241909189',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.7'
      })

      FB.getLoginStatus((response) => {
        this.statusChangeCallback(response);
      })
    }

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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
