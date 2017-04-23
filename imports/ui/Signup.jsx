import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

export class Signup extends Component {
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

    if (password.length < 6) {
      return this.setState({error: 'Password must be at least 6 characters long'});
    }

    this.props.createUser({ email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>sign up</h1>
          { this.state.error ? <p className="error">{ this.state.error }</p> : undefined }
          <form onSubmit={ this.onSubmit.bind(this) } noValidate className="boxed-view__form">
            <input type="email" name="email" ref="email" placeholder="email" />
            <input type="password" name="password" ref="password" placeholder="password" />
            <button className="button button--auth">create account</button>
          </form>
          <p><Link to="/">have an account?</Link></p>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  createUser: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    createUser: Accounts.createUser
  };
}, Signup);
