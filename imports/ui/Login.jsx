import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = e.target.email.value.trim();
    let password = e.target.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({ error: 'Unable to login. Check email and password.' });
      } else {
        this.setState({ error: '' });
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>login</h1>
          { this.state.error ? <p>{ this.state.error }</p> : undefined }
          <form onSubmit={ this.onSubmit.bind(this) } noValidate className="boxed-view__form">
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button className="button button--auth">login</button>
          </form>
          <p><Link to="/signup">don't have an account?</Link></p>
        </div>
      </div>
    );
  }
}
