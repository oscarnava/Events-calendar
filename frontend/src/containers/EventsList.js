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
    this.eventNodes = {};
  }

  componentDidUpdate() {
    console.log('children', this.eventNodes);
  }

  set eventsInfo(events) {
    this.setState({ events });
  }

  updateEvent(id, { scheduled, rating }) {
    this.eventNodes[id].current.updateState({ scheduled, rating });
  }

  render() {
    const { onChange } = this.props;
    const { events } = this.state;

    return (
      <div className="events-list">
        { events ? events.map((event) => {
          const { id } = event;
          this.eventNodes[id] = this.eventNodes[id] || React.createRef();
          return (
            <Event
              key={id}
              ref={this.eventNodes[id]}
              info={event}
              onChange={onChange}
            />
          );
        }) : 'Loading...'}
      </div>
    );
  }
}
