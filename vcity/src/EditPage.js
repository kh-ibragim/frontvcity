import React, { Component } from 'react'
import { Link } from 'react-router'


export default class EditProfile extends Component {


  render() {
    return (
  <div className="uk-section checkin-container">
    <div className="uk-container">


        <div class="photo-upload" uk-form-custom>
            
            <input type="file"  />
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input id="icon_prefix" type="text" className="validate uk-input uk-form-width-large" placeholder="Name" pattern="[a-zA-Z0-9]+" />
              <label for="icon_prefix" data-error="Name должно содержать только символы из латинского алфавита и цифры"></label>
          </div>
        </div>



        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input id="email" type="email" className="validate uk-input uk-form-width-large" placeholder="Email"  />
              <label for="email" data-error="Введите корректно свой email"></label>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
          <input id="age" type="number" min="16" max="120" className="validate uk-input uk-form-width-large" placeholder="Age" />
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input id="interests" type="interests" className="validate uk-input uk-form-width-large" placeholder="Interests"  pattern="[a-zA-Z0-9]+"  />
          </div>
        </div>


        <div className="uk-margin">
          <div className="uk-form-controls">
      		<label><input className="uk-radio" type="radio" name="sex" value="true" />Man </label>
      		<label><input className="uk-radio" type="radio" name="sex" value="false"  />Female</label>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input id="old-password" type="password" pattern="(?=.*\d)\w+.{6,30}" className="validate uk-input uk-form-width-large" placeholder="Old password" />
              <label for="old-password" data-error="Пароль должен состоять минимально из 6 латинских символов и включать, по крайней мере одну букву и одну цифру"></label>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input id="new-password" type="password" pattern="(?=.*\d)\w+.{6,30}" className="validate uk-input uk-form-width-large" placeholder="New password" />
              <label for="new-password" data-error="Пароль должен состоять минимально из 6 латинских символов и включать, по крайней мере одну букву и одну цифру"></label>
          </div>
        </div>

      <div className="uk-margin">
        <div className="uk-inline">
          <button className="uk-button uk-button-danger" type="edit" value="Edit" disabled> Edit
          </button>
        </div>
      </div>

    

    </div>
</div>
    )
  }
}