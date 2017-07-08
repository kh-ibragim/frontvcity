import React, { Component } from 'react';

class Navigation extends Component {

   render() {
      return (
   <div>       
<nav className="uk-navbar-container" uk-navbar>
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active">Login<a href=""></a></li>
            <li className="uk-parent">Page<a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
</nav>
    </div>
      );
   }
}

export default Navigation;