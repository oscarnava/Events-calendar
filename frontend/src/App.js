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
    this.eventsInfo = null;
  }

  componentDidMount() {
    this.fetchEvents();
  }

  addEventToUser = (event) => {
    console.log('Create user event', this.user.current, event);
    return Api.UserEvents.create(this.user.current, event)
      .then((data) => {
        this.user.current.addEvent(data);
      })
      .catch(({ message }) => {
        alert(message);
      });
  }

  removeEventFromUser = (event) => {
    const { schedule } = this.user.current;

    console.log('Remove user event', event, schedule[event.id]);
    return Api.UserEvents.delete(schedule[event.id].id)
      .then((data) => {
        this.user.current.removeEvent(data);
      })
      .catch(({ message }) => {
        alert(message);
      });
  }

  handleOnUserChange = (name, links) => {
    const { schedule } = this.user.current;
    console.log('OnUserChange', name, links, schedule);

    const eventsList = this.eventsList.current;
    this.eventsInfo.forEach(({ id }) => {
      const sched = schedule[id];
      const state = sched ? { scheduled: true, rating: sched.rating } : { scheduled: null, rating: null };
      eventsList.updateEvent(id, state);
    });
  }

  handleOnEventChange = (event, { scheduled, rating }) => {
    console.log('OnEventChange', scheduled, rating);

    const { name } = this.user.current;
    if (name) {
      if (scheduled !== undefined) {
        return scheduled ? this.addEventToUser(event) : this.removeEventFromUser(event);
      }
    }

    return null;
  }

  async fetchEvents() {
    await Api.Event
      .index()
      .then((events) => {
        if (this.eventsList.current) {
          this.eventsInfo = events.sort((a, b) => a.begins - b.begins);
          this.eventsList.current.eventsInfo = this.eventsInfo;
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
        <EventsList ref={this.eventsList} onChange={this.handleOnEventChange} />
      </div>
    );
  }
}
