import React, { Component } from 'react';
import axios from 'axios';
import UploadScreen from './UploadScreen';
import Navigation from './Navigation';

const io = require('socket.io-client');
const socket = io('http://localhost:3030');

class LoginPage extends Component {
constructor(props){
  super(props);
    this.state = {email: '', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
 }

handleSubmit(event) {
    socket.emit('authenticate', {
        strategy: 'local',
        email: this.state.email,
        password: this.state.password
    }, function(message, data) {
    console.log(message); 
    console.log(data); 
    if(data){
        alert("Login successfull");
    }
    else{
        alert("Incorrect Email or password ");
    }


});
    event.preventDefault();
  }

render() {
    return (  
      <div>
          <Navigation />
        <div className="uk-section checkin-container">
            <div className="uk-container">
                    <form onSubmit={this.handleSubmit}>

                    <div className="uk-margin">
                        <div className="uk-inline uk-form-password">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <input id="icon_prefix" type="text" className="validate uk-input uk-form-width-large" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input id="password" type="password" className="validate uk-input uk-form-width-large" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
                        </div>
                    </div>
            
                    <div className="uk-margin">
                        <div className="uk-inline">
                        <button className="uk-button uk-button-danger" type="submit" style={buttonStyle} value="Submit">Submit
  		                </button>
                      </div>
                       </div>
                  </form>
         </div>
        </div>  
      </div>
    );
  }
  

}

var buttonStyle = {
  width: '100%',
};

export default LoginPage;