import React from 'react';
import * as Api from './containers/Api';
import EventsList from './containers/EventsList';
import User from './containers/User';
import { showErrorMessage, ErrorMsg } from './components/ErrorMsg';
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

  addEventToUser = (event) => Api.UserEvents.create(this.user.current, event)
    .then((data) => {
      this.user.current.addEvent(data);
    })
    .catch(({ message }) => {
      showErrorMessage(message);
    })

  removeEventFromUser = (event) => {
    const { schedule } = this.user.current;

    return Api.UserEvents.delete(schedule[event.id].id)
      .then((data) => {
        this.user.current.removeEvent(data);
      })
      .catch(({ message }) => {
        showErrorMessage(message);
      });
  }

  setEventRating = (event, rating) => {
    const { schedule } = this.user.current;

    return Api.UserEvents.update(schedule[event.id].id, rating)
      .then((data) => {
        this.user.current.changeRating(data);
      })
      .catch(({ message }) => {
        showErrorMessage(message);
      });
  }

  handleOnUserChange = () => {
    const { schedule, name } = this.user.current;
    const eventsList = this.eventsList.current;

    this.eventsInfo.forEach(({ id }) => {
      const sched = schedule[id];
      eventsList.updateEvent(id, {
        scheduled: !!sched,
        rating: sched ? sched.rating : null,
        logged: !!name,
      });
    });
  }

  handleOnEventChange = (event, { scheduled, rating }) => {
    const { name } = this.user.current;
    if (name) {
      if (scheduled !== undefined) {
        return scheduled ? this.addEventToUser(event) : this.removeEventFromUser(event);
      }
      if (rating !== undefined) {
        return this.setEventRating(event, rating);
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
        <ErrorMsg />
      </div>
    );
  }
}
