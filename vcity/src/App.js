import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Loginscreen from './Loginscreen'
import { Link } from 'react-router'
injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>App</h1>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/registration'>Registration</Link></li>
        </ul>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}


export default App;