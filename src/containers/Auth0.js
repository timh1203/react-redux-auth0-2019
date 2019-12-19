import React, { Component } from 'react'
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

class Auth0 extends Component {
  render() {
    return (
      <div>
        Auth0 Page
        <button onClick={() => console.log(this.props.profile)}>Get Profile</button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    profile: state.authReducers.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (payload) => dispatch(ACTIONS.user_input(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth0)
