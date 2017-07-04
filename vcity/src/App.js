import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class Navi extends Component {

   render() {
      return (
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
      );
   }
}


class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      password:'',
      email:'',
      age:''
    }
  }
   render() {
      return (
  <div className="container">
    <div className="section checkin-container">
      <div className="row">

        <div className="input-field col s8 m8 l8 ">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" pattern="[a-zA-Z0-9]+" required onChange = {(event,newValue) => this.setState({first_name:newValue})} />
          <label for="icon_prefix" data-error="Name должно содержать только символы из латинского алфавита и цифры">Name</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">https</i>
          <input id="password" type="password" required pattern="(?=.*\d)\w+.{6,30}" className="validate" required onChange = {(event,newValue) => this.setState({password:newValue})}/>
          <label for="password" data-error="Пароль должен состоять минимально из 6 латинских символов и включать, по крайней мере одну букву и одну цифру">Password</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" required onChange = {(event,newValue) => this.setState({email:newValue})}/>
          <label for="email" data-error="Введите корректно свой email">Email</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">assessment</i>
          <input id="age" type="number" min="16" max="120" className="validate" required onChange = {(event,newValue) => this.setState({age:newValue})}/>
          <label for="age" data-error="Введите корректно свой возраст">Age</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
          <i className="material-icons prefix">receipt</i>
    		<select multiple className="icons">
      			<option value="" disabled selected>Choose your interest</option>
      			<option value="film" data-icon="images/film.png" className="circle">Film</option>
      			<option value="book" data-icon="images/book.png" className="circle">Book</option>
      			<option value="music" data-icon="images/music.png" className="circle">Music</option>
      			<option value="sport" data-icon="images/sport.png" className="circle">Sport</option>
      			<option value="photo" data-icon="images/photo.png" className="circle">Photo</option>
    		</select>
        </div>


        <div className="input-field col s8 m8 l8">
          <i className="material-icons prefix">supervisor_account</i>
      		<input name="group1" type="radio" checked id="man" />
      			<label for="man">Man</label>
      		<input name="group1" type="radio" id="female" />
      			<label for="female">Female</label><br/><br/>
        </div>

        <div className="input-field col s8 m8 l8">
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(event) => this.handleClick(event)}> Submit
            <i className="material-icons right">send</i>
          </button>
        </div>

      </div>
    </div>
  </div>
      );
   }

   handleClick(event){
    var apiBaseUrl = "http://localhost:4000/users/";
    console.log("values",this.state.name,this.state.password,this.state.email,this.state.age);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "name": this.state.name,
    "password":this.state.password,
    "email":this.state.email,
    "age":this.state.age
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }


}

class App extends Component {
  render() {
    return (
<div>
  <Navi />
  <Form />   

</div>
    );
  }
}



export default App;