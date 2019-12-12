import React from 'react';
import './EventsList.sass';
import * as Api from './Api';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      formVisible: false,
      login: true,
      events: null,
    };
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
  }

  get name() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.state.name;
  }

  get events() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.state.events;
  }

  handleLogClick = ({ target: { dataset: { login } } }) => {
    this.nameInput.current.value = '';
    this.emailInput.current.value = '';
    this.setState({
      formVisible: true,
      login,
    });
  }

  handleSubmitClick = () => {
    // eslint-disable-next-line react/destructuring-assignment
    (this.state.login ? this.doLogin() : this.doSignup())
      .catch(({ message }) => {
        alert(message);
      });

    this.setState({
      formVisible: false,
    });
  }

  async doSignup() {
    const name = this.nameInput.current.value;
    const email = this.emailInput.current.value;
    return Api.User
      .create(name, email)
      .then(({ name }) => {
        this.setState({ name, events: [] });
      });
  }

  async doLogin() {
    const name = this.nameInput.current.value;
    return Api.User
      .findByName(name)
      .then(({ name, userevents }) => {
        this.setState({ name, events: userevents });
      });
  }

  render() {
    const { login, formVisible } = this.state;
    return (
      <div className="User">
        <div className="name" style={this.name ? {} : { display: 'none' }}>{this.name}</div>
        <button type="button" className="login" data-login onClick={this.handleLogClick}>
          Login
        </button>
        <button type="button" className="signup" onClick={this.handleLogClick}>
          Signup
        </button>
        <div className="form" style={formVisible ? {} : { display: 'none' }}>
          <input type="input" ref={this.nameInput} placeholder="Name" />
          <input type="email" ref={this.emailInput} placeholder="email" style={login ? { display: 'none' } : {}} />
          <button type="button" onClick={this.handleSubmitClick}>{login ? 'Log In' : 'Sign Up'}</button>
        </div>
      </div>
    );
  }
}
