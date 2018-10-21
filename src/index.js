import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
    render() {
      return (
        <div>  
          <nav>
              <ul className="nav">
                  <li>Home</li>
                  <li>Projects</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>    
        </div>
      );
    }
  }

ReactDOM.render(
    <App />,
    document.getElementById('app')
  );