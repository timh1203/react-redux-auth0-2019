// PACKAGE IMPORTS
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  state = {
    nums: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]
  }

  render() {
    return (
      <div>
        <Link to="/" style={{ padding: '5px' }}>
          Home
        </Link>
        <Link to="/protected" style={{ padding: '5px' }}>
          Protected Page
        </Link>
        {this.props.isAuthenticated
          ? <button onClick={() => this.props.auth.logout()}>Logout</button>
          : <button onClick={() => this.props.auth.login()}>Login</button>
        }
        {this.state.nums.map(num =>
          <Link key={num.id} to={{ pathname: '/reactrouter/' + num.id }} style={{ padding: '5px' }}>
            Reactrouter {num.id}
          </Link>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducers.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
