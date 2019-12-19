// PACKAGE IMPORTS
import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router'
import { connect } from 'react-redux'

// LOCAL IMPORTS
import Header from './Header'
import Auth0 from '../containers/Auth0'
import Profile from '../containers/Profile'
import ReactRouter1 from '../functional/ReactRouter1'
import Callback from '../auth/Callback'
import Authcheck from '../auth/Authcheck'
import Protected from '../auth/Protected'
import Redirected from '../auth/Redirected'
import history from './history'
import auth0 from '../auth/auth'
import * as ACTIONS from '../store/actions/actions'

// Creates new auth object
const auth = new auth0()

// After login, a hash returns from the server, this function processes the authorization
// by visiting /callback path (built-in with auth0)
// upon success, it returns the <Callback /> component
const handleAuth = (props) => {
  if (props.location.hash) {
    auth.handleAuth()
  }
}

const ProtectedRoute = ({ component: Component, auth }) => (
  <Route render={props => auth.isAuthenticated() === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{ pathname: "/redirect" }} />
  }
  />
)

class Routes extends Component {
  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.login_success()
      auth.getProfile()
      setTimeout(() => { this.props.add_profile(auth.userProfile) }, 2000)
    }
    else {
      this.props.login_failure()
      this.props.remove_profile()
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header auth={auth} />
            <Switch>
              <Route exact path="/" render={(props) => <Auth0 {...props} auth={auth} />} />
              <Route exact path="/authcheck" render={(props) => <Authcheck {...props} auth={auth} />} />
              <Route path="/callback" render={(props) => { handleAuth(props); return <Callback /> }} />
              <ProtectedRoute path="/protected" auth={auth} component={Protected} />
              <ProtectedRoute path="/profile" auth={auth} component={Profile} />
              <Route path="/redirect" component={Redirected} />
              <Route path="/reactrouter/:id" render={(props) => <ReactRouter1 {...props} />} />
              {/* <Route path="/reactrouter2" component={ReactRouter2} />
              <Route path="/reactrouter3" component={ReactRouter3} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
    remove_profile: () => dispatch(ACTIONS.remove_profile()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Routes)
