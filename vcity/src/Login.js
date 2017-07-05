import React, { Component } from 'react';
import axios from 'axios';
import UploadScreen from './UploadScreen';
import Navigation from './Navigation';

const io = require('socket.io-client');
const socket = io('http://localhost:3030');

class Login extends Component {
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
});
    event.preventDefault();
  }

render() {
    return (  
      <div>
          <Navigation />
        <div className="container">
            <div className="section checkin-container">
                <div className="row">

                    <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s8 m8 l8 ">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                        <label for="icon_prefix" >email</label>
                    </div>

                    <div className="input-field col s8 m8 l8 ">
                        <i className="material-icons prefix">https</i>
                        <input id="password" type="password" className="validate" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
                        <label for="password" >Password</label>
                    </div>
            
                    <div className="input-field col s8 m8 l8">
                        <button className="btn waves-effect waves-light" type="submit" style={buttonStyle} value="Submit">Submit
    		            <i className="material-icons right">send</i>
  		            </button>
                  </div>
                  </form>

            </div>  
         </div>
        </div>  
      </div>
    );
  }
  

}

var buttonStyle = {
  width: '100%',
};

export default Login;