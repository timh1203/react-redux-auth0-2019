import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={{ padding: '5px' }}>
          home
        </Link>
        <Link to="/reactrouter1" style={{ padding: '5px' }}>
          reactrouter1
        </Link>
        <Link to="/reactrouter2" style={{ padding: '5px' }}>
          reactrouter2
        </Link>
        <Link to="/reactrouter3" style={{ padding: '5px' }}>
          reactrouter3
        </Link>
      </div>
    )
  }
}

export default Header
