import React from 'react';
import * as Api from './containers/Api';
import EventsList from './containers/EventsList';
import User from './containers/User';
import './App.sass';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = React.createRef();
  }

  handleCreateUserEvent = async (event) => {
    console.log('Create user event', this.user.current, event);
    await Api.UserEvents.create(this.user.current, event)
      .catch(({ message }) => {
        alert(message);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="main-header">
          <User ref={this.user} />
          <h1>Events</h1>
        </div>
        <EventsList onCreateUserEvent={this.handleCreateUserEvent} />
      </div>
    );
  }
}
