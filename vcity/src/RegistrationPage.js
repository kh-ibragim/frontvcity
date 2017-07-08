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
      age:'',
      sex: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this); 
  }

  getInitialState() {
    return {
      selectedOption: 'true'
    };
  }

handleSubmit(event) {
    socket.emit('users::create', {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        age: this.state.age,
        sex: this.state.selectedOption
    }, (error, message) => {
    
    console.log(message); 
    console.log(error);

    if (message)
    {
      alert("Successful registration");
    }
    else if(error.code==409)
    {
      alert("Email already exists")
    }
    
});
    event.preventDefault();
  }


handleOptionChange(changeEvent) {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}


render() {
      return (
  <div className="uk-section checkin-container">
    <div className="uk-container">

        <form onSubmit={this.handleSubmit}>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input id="icon_prefix" type="text" className="validate uk-input uk-form-width-large" placeholder="Name" pattern="[a-zA-Z0-9]+" required value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
              <label for="icon_prefix" data-error="Name должно содержать только символы из латинского алфавита и цифры"></label>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input id="password" type="password" required pattern="(?=.*\d)\w+.{6,30}" className="validate uk-input uk-form-width-large" placeholder="Password" required value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
              <label for="password" data-error="Пароль должен состоять минимально из 6 латинских символов и включать, по крайней мере одну букву и одну цифру"></label>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input id="email" type="email" className="validate uk-input uk-form-width-large" placeholder="Email" required value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
              <label for="email" data-error="Введите корректно свой email"></label>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
          <input id="age" type="number" min="16" max="120" className="validate uk-input uk-form-width-large" placeholder="Age" required value={this.state.age} onChange={e => this.setState({ age: e.target.value })}/>
          </div>
        </div>


        <div className="uk-margin">
          <div className="uk-form-controls">
      		<label><input className="uk-radio" type="radio" name="sex" value="true" checked={this.state.selectedOption === 'true'}  onChange={this.handleOptionChange}/>Man</label>
      		<label><input className="uk-radio" type="radio" name="sex" value="false" checked={this.state.selectedOption === 'false'} onChange={this.handleOptionChange}/>Female</label>
          </div>
        </div>

      <div className="uk-margin">
        <div className="uk-inline">
          <button className="uk-button uk-button-danger" type="submit"  value="Submit"> Submit
          </button>
        </div>
      </div>

      </form>

    </div>
</div>
      );
   }




}

class RegistrationPage extends Component {
  render() {
    return (
        <div>

            <Form />  
        </div>
    );
  }
}

var buttonStyle = {
  width: '100%',
};

export default RegistrationPage;