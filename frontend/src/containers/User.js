import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showErrorMessage } from '../components/ErrorMsg';
import * as Api from './Api';
import './User.sass';

import {
  setUser,
  setRating,
  linkEvent,
  unlinkEvent,
} from '../actions';

const mapStateToProps = ({
  name, events,
}) => ({
  name, events,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (name, events) => dispatch(setUser(name, events)),
  setRating: (linkId, rating) => dispatch(setRating(linkId, rating)),
  linkEvent: (link) => dispatch(linkEvent(link)),
  unlinkEvent: (linkId) => dispatch(unlinkEvent(linkId)),
});

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      login: true,
    };
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.scheduleMemo = null;
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.formVisible) this.nameInput.current.focus();

    const { name, onChange } = this.props;
    onChange(name, this.schedule);
  }

  get name() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.name;
  }

  get schedule() {
    const { events } = this.props;
    const schedule = {};
    if (!events) return schedule;

    // eslint-disable-next-line camelcase
    events.forEach(({ id, event_id, rating }) => { schedule[event_id] = { id, rating }; });
    return schedule;
  }

  hideForm = () => {
    this.setState({
      formVisible: false,
    });
  }

  handleLogClick = ({ target }) => {
    this.nameInput.current.value = '';
    this.emailInput.current.value = '';
    this.setState({
      formVisible: true,
      login: !!target.dataset.login,
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
        showErrorMessage(message);
        // alert(message);
      })
      .finally(this.hideForm);
  }

  // eslint-disable-next-line camelcase
  addEvent({ id, event_id, rating }) {
    const { linkEvent } = this.props;
    linkEvent({ id, event_id, rating });
  }

  removeEvent({ id }) {
    const { unlinkEvent } = this.props;
    unlinkEvent(id);
  }

  changeRating({ id, rating }) {
    const { setRating } = this.props;
    setRating(id, rating);
  }

  async doSignup() {
    const name = this.nameInput.current.value;
    const email = this.emailInput.current.value;
    return Api.User
      .create(name, email)
      .then(({ name }) => {
        const { setUser } = this.props;
        setUser(name);
      });
  }

  async doLogin() {
    const name = this.nameInput.current.value;
    return Api.User
      .findByName(name)
      .then(({ name, userevents }) => {
        const { setUser } = this.props;
        setUser(name, userevents);
      });
  }

  render() {
    const { login, formVisible } = this.state;
    return (
      <div className="User">
        <div className="name" style={this.name ? {} : { fontSize: '0.9rem', color: 'lightgrey' }}>
          {this.name ? `Welcome ${this.name}!` : 'Login to save your schedule  \u27A1'}
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

User.defaultProps = {
  name: null,
  events: null,
};

User.propTypes = {
  name: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
  linkEvent: PropTypes.func.isRequired,
  unlinkEvent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(User);
