import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'

import Header from './containers/Header'
import ContainerState1 from './containers/ContainerState1'
import ReactRouter1 from './functional/ReactRouter1'
import ReactRouter2 from './functional/ReactRouter2'
import ReactRouter3 from './functional/ReactRouter3'
import history from './utils/history'

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={ContainerState1} />
              <Route path="/reactrouter1" component={ReactRouter1} />
              <Route path="/reactrouter2" component={ReactRouter2} />
              <Route path="/reactrouter3" component={ReactRouter3} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Routes
