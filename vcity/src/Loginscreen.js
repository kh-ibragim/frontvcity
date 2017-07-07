import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  render() {
    return (
      
      <div>
        {this.state.loginscreen}
        <div className="uk-section uk-section-overlap checkin-container">
            <div className="uk-container">
              <div className="uk-margin">
                <div className="uk-inline">
                  <button className="uk-button uk-button-secondary uk-width-1-1" label={this.state.buttonLabel} primary={true}  onClick={(event) => this.handleClick(event)}>
                        {this.state.buttonLabel}
                  </button>
                </div>
              </div>

            </div>
          </div>
      </div>
    );
  }
handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }

}

var buttonStyle = {
  width: '66%',
};


export default Loginscreen;