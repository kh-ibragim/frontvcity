import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
import Navigation from './Navigation';

const io = require('socket.io-client');
const socket = io('http://localhost:3030');

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

handleSubmit(event) {
    socket.emit('users', {
        strategy: 'local',
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        age: this.state.age
    }, function(message, data) {
    console.log(message); 
    console.log(data); 
});
    event.preventDefault();
  }

   render() {
      return (
  <div className="container">
    <div className="section checkin-container">
      <div className="row">

        <form onSubmit={this.handleSubmit}>
        <div className="input-field col s8 m8 l8 ">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" pattern="[a-zA-Z0-9]+" required value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
          <label for="icon_prefix" data-error="Name должно содержать только символы из латинского алфавита и цифры">Name</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">https</i>
          <input id="password" type="password" required pattern="(?=.*\d)\w+.{6,30}" className="validate" required value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
          <label for="password" data-error="Пароль должен состоять минимально из 6 латинских символов и включать, по крайней мере одну букву и одну цифру">Password</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" required value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
          <label for="email" data-error="Введите корректно свой email">Email</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">assessment</i>
          <input id="age" type="number" min="16" max="120" className="validate" requiredvalue={this.state.age} onChange={e => this.setState({ age: e.target.value })}/>
          <label for="age" data-error="Введите корректно свой возраст">Age</label>
        </div>

    {/*    <div className="input-field col s8 m8 l8 "> 
          <i className="material-icons prefix">receipt</i>
    		<select multiple className="icons">
      			<option value="" disabled selected>Choose your interest</option>
      			<option value="film" data-icon="images/film.png" className="circle">Film</option>
      			<option value="book" data-icon="images/book.png" className="circle">Book</option>
      			<option value="music" data-icon="images/music.png" className="circle">Music</option>
      			<option value="sport" data-icon="images/sport.png" className="circle">Sport</option>
      			<option value="photo" data-icon="images/photo.png" className="circle">Photo</option>
    		</select>
        </div>*/}

        {/* 
        <div className="input-field col s8 m8 l8">
          <i className="material-icons prefix">supervisor_account</i>
      		<input name="group1" type="radio" checked id="man" />
      			<label for="man">Man</label>
      		<input name="group1" type="radio" id="female" />
      			<label for="female">Female</label><br/><br/>
        </div>*/}

        <div className="input-field col s8 m8 l8">
          <button className="btn waves-effect waves-light" type="submit" style={buttonStyle} value="Submit"> Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
      </div>
    </div>
  </div>
      );
   }




}

class Register extends Component {
  render() {
    return (
        <div>
            <Navigation />
            <Form />  
        </div>
    );
  }
}

var buttonStyle = {
  width: '100%',
};

export default Register;