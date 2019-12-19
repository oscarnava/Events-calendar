/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './EventsList.sass';
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
  }

  /**
   * @param {Array} events
   */
  set eventsInfo(events) {
    this.setState({ events });
  }

  updateEvent(id, { scheduled, rating, logged }) {
    this.eventNodes[id].current.updateState({ scheduled, rating, logged });
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

EventsList.propTypes = {
  onChange: PropTypes.func.isRequired,
};
