import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Nav from './Nav.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Nav}/>
        {/* <Route exact path='/' component={Home}/> */}
        </Switch>
      </Router>       
    );
  }
}

export default App;
