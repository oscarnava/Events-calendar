import React from 'react';
import './User.sass';
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

  componentDidUpdate() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.formVisible) this.nameInput.current.focus();
  }

  get name() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.state.name;
  }

  get schedule() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.state.events;
  }

  findEvent = (eventId) => {
    const { events } = this.state;
    if (!events) return null;

    // eslint-disable-next-line camelcase
    const { id } = events.find(({ event_id }) => eventId === event_id);
    return id;
  }

  hideForm = () => {
    this.setState({
      formVisible: false,
    });
  }

  handleLogClick = ({ target: { dataset: { login } } }) => {
    this.nameInput.current.value = 'Monstruo';
    this.emailInput.current.value = '';
    this.setState({
      formVisible: true,
      login,
    });
  }

  handleSubmitClick = () => {
    if (this.nameInput.current.value === '') {
      this.hideForm();
      return;
    }

    // eslint-disable-next-line react/destructuring-assignment
    (this.state.login ? this.doLogin() : this.doSignup())
      .catch(({ message }) => {
        alert(message);
      })
      .finally(this.hideForm);
  }

  async doSignup() {
    const name = this.nameInput.current.value;
    const email = this.emailInput.current.value;
    return Api.User
      .create(name, email)
      .then(({ name }) => {
        this.setState({ name, events: [] });
        this.props.onChange(name, []);
      });
  }

  async doLogin() {
    const name = this.nameInput.current.value;
    return Api.User
      .findByName(name)
      .then(({ name, userevents }) => {
        console.log(userevents);
        this.setState({ name, events: userevents });
        this.props.onChange(name, userevents);
      });
  }

  render() {
    const { login, formVisible } = this.state;
    return (
      <div className="User">
        <div className="name" style={this.name ? {} : { fontSize: '0.9rem', color: 'lightgrey' }}>
          {this.name ? `Welcome ${this.name}!` : 'Login to save your schedule  \u2933'}
        </div>
        <button type="button" className="login" data-login onClick={this.handleLogClick}>
          Login
        </button>
        <button type="button" className="signup" onClick={this.handleLogClick}>
          Signup
        </button>
        <div className="form" style={formVisible ? {} : { display: 'none' }}>
          <input type="input" className="name-in" ref={this.nameInput} placeholder="Name" />
          <input type="email" className="email-in" ref={this.emailInput} placeholder="email" style={login ? { display: 'none' } : {}} />
          <button type="button" className="submit" onClick={this.handleSubmitClick}>
            {login ? 'Log In' : 'Sign Up'}
          </button>
          <button type="button" className="cancel" onClick={this.hideForm}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
