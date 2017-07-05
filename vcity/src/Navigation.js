import React, { Component } from 'react';

class Navigation extends Component {

   render() {
      return (
   <div>       
    <nav className="black" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo">VCity</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Регистрация</a></li>
          </ul>
          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    </nav>
    </div>
      );
   }
}

export default Navigation;