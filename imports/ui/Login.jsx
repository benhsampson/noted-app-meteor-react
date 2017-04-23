import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value;

    this.props.loginWithPassword({ email }, password, (err) => {
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
          { this.state.error ? <p className="error">{ this.state.error }</p> : undefined }
          <form onSubmit={ this.onSubmit.bind(this) } noValidate className="boxed-view__form">
            <input type="email" name="email" ref="email" placeholder="email" />
            <input type="password" name="password" ref="password" placeholder="password" />
            <button className="button button--auth">login</button>
          </form>
          <p><Link to="/signup">don't have an account?</Link></p>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginWithPassword: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
}, Login);
