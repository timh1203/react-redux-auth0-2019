// PACKAGE IMPORTS
import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'

// LOCAL IMPORTS
import Header from './Header'
import Auth0 from '../containers/Auth0'
import ReactRouter1 from '../functional/ReactRouter1'
import Callback from '../auth/Callback'
import Authcheck from '../auth/Authcheck'
import history from './history'
import auth0 from '../auth/auth'

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

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" render={(props) => <Auth0 {...props} auth={auth} />} />
              <Route exact path="/authcheck" render={(props) => <Authcheck {...props} auth={auth} />} />
              <Route path="/callback" render={(props) => { handleAuth(props); return <Callback />}} />
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

export default Routes
