import React, { Component } from 'react'

class Auth0 extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.auth.login()}>Login</button>
        <button onClick={() => this.props.auth.logout()}>Logout</button>
      </div>
    )
  }
}

export default Auth0
