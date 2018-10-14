import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Home />
      </Router>       
    );
  }
}

export default App;
