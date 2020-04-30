import React, { Component } from 'react';
import { validateAll } from 'indicative/validator';

const rules = {
  login: 'required|string',
  email: 'required|string',
  password: 'required|string|min:6',
};

const messages = {
  'login.required': 'Please choose a unique username for your account',
  'email.required': 'Enter valid email',
  'email.email': 'Email is invalid',
  'password.required': 'Enter a valid password',
  'password.min': 'Password must be at least 6 characters long',
};

export default class SignUpForm extends Component {
  Gender = {
    MALE: 'male',
    FEMALE: 'female',
  };

  state = {
    login: '',
    email: '',
    password: '',
    agreed: false,
    gender: null,
    age: '',
    errors: null,
  };

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password } = this.state;
    validateAll({ login, email, password }, rules, messages)
      .then(data => {
        console.log('submit!');

        this.props.onSignUp({ ...data });

        this.reset();
      })
      .catch(errors => {
        const formattedErrors = {};
        errors.forEach(error => {
          formattedErrors[error.field] = error.message;
        });
        console.log(formattedErrors);
        this.setState({
          errors: formattedErrors,
        });
      });

    // console.log('submit!');

    // this.props.onSignUp({ ...this.state });

    // this.reset();
  };

  //   handleChecked = () => {
  //     this.setState(prevState => ({
  //       agreed: !prevState.agreed,
  //     }));
  //   };

  reset = () => {
    this.setState({
      login: '',
      email: '',
      password: '',
      agreed: false,
      gender: null,
      age: '',
    });
  };

  render() {
    const { login, email, password, agreed, gender, age, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Login
          <input
            type="text"
            value={login}
            onChange={this.handleChange}
            name="login"
          />
          {errors && <span>{errors.login}</span>}
        </label>
        <br />
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={this.handleChange}
            name="email"
          />
          {errors && <span>{errors.email}</span>}
        </label>
        <br />
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={this.handleChange}
            name="password"
          />
          {errors && <span>{errors.password}</span>}
        </label>
        <br />
        <label>
          Agreed to terms?
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
            name="agreed"
          />
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === this.Gender.MALE}
              name="gender"
              value={this.Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === this.Gender.FEMALE}
              name="gender"
              value={this.Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}
