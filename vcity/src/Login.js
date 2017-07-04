import React, { Component } from 'react';
import axios from 'axios';
import UploadScreen from './UploadScreen';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (  
      <div>
        <div className="container">
            <div className="section checkin-container">
                <div className="row">
                    
                    <div className="input-field col s8 m8 l8 ">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" required onChange = {(event,newValue) => this.setState({username:newValue})} />
                        <label for="icon_prefix" >Name</label>
                    </div>

                    <div className="input-field col s8 m8 l8 ">
                        <i className="material-icons prefix">https</i>
                        <input id="password" type="password" className="validate" required onChange = {(event,newValue) => this.setState({password:newValue})}/>
                        <label for="password" >Password</label>
                    </div>
            
                    <div className="input-field col s8 m8 l8">
                        <button className="btn waves-effect waves-light" type="submit" name="action" style={buttonStyle}  onClick={(event) => this.handleClick(event)}>Submit
    		            <i className="material-icons right">send</i>
  		            </button>
  		        
                  </div>
            </div>  
         </div>
        </div>  
      </div>
    );
  }
  
  handleClick(event){
    var apiBaseUrl = "http://localhost:4000/users/";
    var self = this;
    var payload={
        "email":this.state.username,
        "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
            console.log("Login successfull");
            var uploadScreen=[];
            uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
            self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
        else if(response.data.code == 204){
            console.log("Username password do not match");
            alert("username password do not match")
        }
        else{
            console.log("Username does not exists");
            alert("Username does not exist");
        }
    })
    .catch(function (error) {
        console.log(error);
    });
 }
}

var buttonStyle = {
  width: '100%',
};

export default Login;