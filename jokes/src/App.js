import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home'
import Jokes from './components/Jokes'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path='/login' component = {Login} />
        <Route path='/register' component = {Register} />
        <Route path='/jokes' component = {Jokes} />
      </Switch>
    );
  }
}

export default App;
