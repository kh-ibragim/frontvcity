import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './App';
import registerServiceWorker from './registerServiceWorker';
import NotFound from './NotFound'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'
import MycityPage from './MycityPage'
import Admin from './Admin'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render(<Router history={browserHistory}>
    
    <Route path='/' component={App}>
      <Route path='admin' component={Admin} />
      <Route path='login' component={LoginPage} />
      <Route path='registration' component={RegistrationPage} />
      <Route path='mycity' component={MycityPage} />
    </Route>
    {/* для всех остальных роутов: показывай NotFound */}
    <Route path='*' component={NotFound} />
  </Router>, 

document.getElementById('root'));
