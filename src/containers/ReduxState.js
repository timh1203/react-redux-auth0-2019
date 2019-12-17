import React, { Component } from 'react'
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

class ReduxState extends Component {
  render() {
    const name = 'Joe Black'

    return (
      <div>
        <button onClick={() => console.log(this.props.state)}>Get State</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button>
        <button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2</button>
        <button onClick={() => this.props.action_creator3(name)}>Dispatch Action Creator 3</button>
        {this.props.stateUserText ? (
          <h1>{this.props.stateUserText}</h1>
        ) : null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state,
    stateprop1: state.statusReducers.stateprop1,
    stateUserText: state.userReducers.user_text,
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

export default connect(mapStateToProps, mapDispatchToProps)(ReduxState)
