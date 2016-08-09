import React from 'react'

class Login extends React.Component {
  render () {
    return (
      <div>
        <form method='post'>
          <label> Username
            <input type='text' />
          </label>
          <label> Password
            <input type='password' />
          </label>
          <button type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default Login
