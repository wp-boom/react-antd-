import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
import { Router, Route, hashHistory/* , Redirect */ } from 'react-router'

export default class ContentMain extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={global.Hotel} />
        <Route path="/hotel" component={global.Hotel} />
        <Route path="/order" component={global.Order} />
      </Router>
    )
  }
}
