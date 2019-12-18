import React, { Component } from 'react'
import Auth from '../auth/auth'

const auth = new Auth()

export default class Auth0 extends Component {
  render() {
    return (
      <div>
        <button onClick={() => auth.login()}>Login</button>
        <button onClick={() => auth.logout()}>Logout</button>
      </div>
    )
  }
}
