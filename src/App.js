import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CategoryList from './pages/CategoryList'
import PhotoList from './pages/PhotoList'
import PhotoDetail from './pages/PhotoDetail'

// import ErrorPage404 from './pages/ErrorPage404'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />
            <Route exact path="/:category/:index" component={PhotoDetail} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
