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
      <div>
        <nav className="uk-navbar-container" uk-navbar>
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><Link to='/login'>Login</Link></li>
            <li className="uk-parent"><Link to='/registration'>Registration</Link></li>
            <li><a href=""></a></li>
        </ul>
    </div>
</nav>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}


export default App;