import React from 'react';
import * as Api from './containers/Api';
import EventsList from './containers/EventsList';
import User from './containers/User';
import './App.sass';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = React.createRef();
    this.eventsList = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  // handleCreateUserEvent = async (event) => {
  //   console.log('Create user event', this.user.current, event);
  //   await Api.UserEvents.create(this.user.current, event)
  //     .catch(({ message }) => {
  //       alert(message);
  //     });
  // }

  handleOnUserChange = (name, schedule) => {
    console.log('OnUserChange', name, schedule);
  }

  handleOnEventChange = (event, { scheduled, rating }) => {
    console.log('OnEventChange', scheduled, rating);
  }

  async fetchEvents() {
    await Api.Event
      .index()
      .then((events) => {
        if (this.eventsList.current) {
          this.eventsList.current.eventsInfo = events.sort((a, b) => a.begins - b.begins);
        }
      });
  }

  render() {
    return (
      <div className="App">
        <div className="main-header">
          <User ref={this.user} onChange={this.handleOnUserChange} />
          <h1>Events</h1>
        </div>
        <EventsList ref={this.eventsList} onChange={this.handleOnEventChanged} />
      </div>
    );
  }
}
