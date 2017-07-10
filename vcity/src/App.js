import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import { Link } from 'react-router'
injectTapEventPlugin();

class App extends Component {

    log(nextState, replace) {
    const login = window.localStorage.getItem('rr_login')
    if (login === 'no_login') {
      replace('/login')
    }
  }

  render() {
    return (
      <div>
        <nav className="uk-navbar-container" uk-navbar>
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><Link to='/login'>Login</Link></li>
            <li className="uk-parent"><Link to='/registration'>Registration</Link></li>
            <li className="uk-parent"><Link to='/edit'>Edit Profile</Link></li>
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