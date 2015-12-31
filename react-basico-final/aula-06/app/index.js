'use strict';

import React from 'react';

import { render } from 'react-dom'

import { Router, Route } from 'react-router'

import App from './app'
import About from './about'
import User from './user'
import Users from './users'
class te extends React.Component {
  render(){
    return <div>asdfafa
    </div>
  }
}
render((<Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={te}/>
    </Route>
  </Router>)
, document.body)
