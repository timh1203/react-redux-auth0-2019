// PACKAGE IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  RenderProfile = (props) => (
    < div >
      <h1>{props.profile.profile.nickname}</h1>
      <img src={props.profile.profile.picture} alt="Profile" />
      <h4>{props.profile.profile.email}</h4>
      <h5>{props.profile.profile.name}</h5>
      <h5>Email Verified: {props.profile.profile.email_verified ? <p>Yes</p> : <p>No</p>}</h5>
    </div>
  )

  render() {
    return (
      <div>
        <this.RenderProfile profile={this.props.profile} />
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
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
