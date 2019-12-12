/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './EventsList.sass';
import * as Api from './Api';
import Event from '../components/Event';

export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
    };
    this.fetchEvents();
  }

  async fetchEvents() {
    await Api.Event
      .index()
      .then((events) => {
        this.setState({ events });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <div className="events-list">
        { events ? events.map((event) => (
          <Event
            key={event.id}
            info={event}
            extended
          />
        )) : 'Loading...'}
      </div>
    );
  }
}
