import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
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
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    )
  }
}


export default App;