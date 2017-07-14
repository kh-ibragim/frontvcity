import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/UserActions'

const io = require('socket.io-client');
const socket = io('http://localhost:3030');





export class LoginPage extends Component {
constructor(props){
  super(props);
    this.state = {email: '', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReg = this.handleReg.bind(this);
    window.localStorage.setItem('rr_login', 'no_login');
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
        window.localStorage.setItem('rr_login', data);
        browserHistory.push('/mycity');
    }
    else{
        alert("Incorrect Email or password ");
        window.localStorage.setItem('rr_login', 'no_login');
        browserHistory.push('/login');
    }


});
    event.preventDefault();
    this.props.actions.login({name: event.target.elements[0].value});
  }

 handleReg(event) { 
        browserHistory.push('/registration');
        event.preventDefault();
  }

render() {
    return (  
      <div className="tm">

        <div className="uk-section  uk-section-large checkin-container">
            <div className="uk-container">
                    <form onSubmit={this.handleSubmit}>

                    <div className="uk-margin">
                        <div className="uk-inline full uk-form-password">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <input id="icon_prefix" type="text" required className="validate uk-input uk-form-width-large full radius" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline full">
                            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input id="password" type="password" required className="validate uk-input uk-form-width-large full radius" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
                        </div>
                    </div>
            
                    <div className="uk-margin">
                        <div className="full">
                        <button className="uk-button uk-button-primary uk-button-large full wave radius" type="submit"  value="Submit">Submit
  		                </button>
                      </div>
                       </div>

                  </form>
                    <form onSubmit={this.handleReg}>
                    <div className="uk-margin">
                        <div className="full">
                        <button className="uk-button uk-button-muted uk-button-large full wave radius"  type="submit" >Registration</button>
                      </div>
                       </div>
                    </form>
         </div>
        </div>  
      </div>
    );
  }
  

}


function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
//export default LoginPage