import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
import { Router, browserHistory } from 'react-router'
import { routes } from './routes'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

