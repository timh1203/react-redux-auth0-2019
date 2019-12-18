import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'

import Header from './Header'
import Auth0 from '../containers/Auth0'
import ReactRouter1 from '../functional/ReactRouter1'
import history from './history'

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Auth0} />
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
