import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render () {
    return (
      <div className="home-container">
        <div className="col-1">
          <div className="box-1">box-1</div>
        </div>
        <div className="col-1">
          <div className="box-2">box-2</div>
        </div>
        <div className="box-3">box-3</div>
      </div>    
    );
  }
}

export default Home;
