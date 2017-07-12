import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import configureStore from './store/configureStore'

injectTapEventPlugin();
// const store = configureStore();
class App extends Component {

    log(nextState, replace) {
    const login = window.localStorage.getItem('rr_login')
    if (login === 'no_login') {
      replace('/login')
    }
  }

  render() {
    // <Provider store={store}></Provider>
    return (
      <div>
        {/* добавили вывод потомков */}
         {this.props.children} 
      </div>
    )
  }
}


export default App;