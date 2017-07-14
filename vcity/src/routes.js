import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import NotFound from './components/NotFound'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import MycityPage from './components/MycityPage'
import EditPage from './components/MycityPage/EditPage'
import Profile from './components/MycityPage/Profile'
import Admin from './components/Admin'
import Geolocation from './components/Maps/Geolocation'

import { Router, Route, browserHistory } from 'react-router'

export const routes = (
  <div>
<Router history={browserHistory}>    
    <Route path='/' component={App}>
      <Route path='admin' component={Admin} />
      <Route path='login' component={LoginPage} />
      <Route path='registration' component={RegistrationPage} />
      <Route path='edit' component={EditPage} onEnter={MycityPage.onEnter}/>
      <Route path='profile' component={Profile} />
      <Route path='geolocation' component={Geolocation} />
      <Route path='mycity' component={MycityPage} onEnter={MycityPage.onEnter}/>
    </Route>
    {/* для всех остальных роутов: показывай NotFound */}
    <Route path='*' component={NotFound} />
  </Router> 

  </div>
)