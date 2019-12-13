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
  }

  componentDidMount() {
    this.fetchEvents();
  }

  async fetchEvents() {
    await Api.Event
      .index()
      .then((events) => {
        events.sort((a, b) => a.begins - b.begins);
        this.setState({ events });
      });
  }

  render() {
    const { events } = this.state;
    const { schedule = [], onCreateUserEvent } = this.props;

    return (
      <div className="events-list">
        { events ? events.map((event) => (
          <Event
            key={event.id}
            info={event}
            scheduled={schedule.includes(event.id)}
            onLinkBtnClick={onCreateUserEvent}
          />
        )) : 'Loading...'}
      </div>
    );
  }
}
