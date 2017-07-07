import React, { Component } from 'react';

class Navigation extends Component {

   render() {
      return (
   <div>       
<nav className="uk-navbar-container uk-margin" uk-navbar>
    <div className="uk-navbar-center">
        <a className="uk-navbar-item uk-logo" href="#">VCity</a>
      </div>
</nav>
    </div>
      );
   }
}

export default Navigation;