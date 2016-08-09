import React from 'react'
import './Login.css'

class Login extends React.Component {
  render () {
    return (
      <div className="loginContainer" >
        <p>Login with your Facebook account</p>
        <div
          className="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-show-faces="false"
          data-auto-logout-link="false" >
        </div>
      </div>
    )
  }
}

export default Login
