import React, { Component } from 'react'
import * as ACTION_TYPES from '../store/actions/actions.types'
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

class ReduxState extends Component {
  render() {
    return (
      <div>
        <button onClick={}>Get State</button>
        <button onClick={}>Dispatch Action 1</button>
        <button onClick={}>Dispatch Action 2</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxState)
