import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Content extends Component {

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

class App extends Component {
  render() {
    return (
<div>
  <Content />   
  <div className="container">
    <div className="section checkin-container">
      <div className="row">

        <div className="input-field col s8 m8 l8 ">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" pattern="[a-zA-Z0-9]+" required />
          <label for="icon_prefix" data-error="Name должно содержать только символы из латинского алфавита и цифры">Name</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">https</i>
          <input id="password" type="password" required pattern="(?=.*\d)\w+.{6,30}" className="validate" required />
          <label for="password" data-error="Пароль должен состоять минимально из 6 латинских символов и включать, по крайней мере одну букву и одну цифру">Password</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">email</i>
          <input id="email" type="email" className="validate" required/>
          <label for="email" data-error="Введите корректно свой email">Email</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
         <i className="material-icons prefix">assessment</i>
          <input id="age" type="number" min="16" max="120" className="validate" required/>
          <label for="age" data-error="Введите корректно свой возраст">Age</label>
        </div>

        <div className="input-field col s8 m8 l8 ">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" required/>
          <label for="icon_telephone" data-error="Введите корректно свой номер">Telephone</label>
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

      </div>
    </div>
  </div>
</div>
    );
  }
}



export default App;