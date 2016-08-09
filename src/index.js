import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Layout from './Layout'
import SinglePost from './SinglePost'
import Login from './Login'
import './index.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={App} />
      <Route path='posts/:postId' component={SinglePost} />
      <Route path='login' component={Login} />
    </Route>
  </Router>
  ),
  document.getElementById('root')
)
