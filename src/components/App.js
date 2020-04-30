import React, { Component } from 'react';
import SignUpForm from './SingUp/SignUpForm';

export default class App extends Component {
  state = {
    login: '',
  };

  handleSignUp = credentials => {
    console.log(credentials);
    this.setState({ login: credentials.login });
  };

  render() {
    return (
      <div>
        <p>Login {this.state.login}</p>
        <SignUpForm onSignUp={this.handleSignUp} />
      </div>
    );
  }
}
