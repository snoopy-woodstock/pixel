import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render () {
        return (
            <div>
                <head>
                    <title>Bonjure</title>
                </head>     
                <nav>
                    <ul>
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

export default Nav;