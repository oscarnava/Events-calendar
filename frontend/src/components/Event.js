/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import format from 'date-format';
import './Event.sass';

const DATE_FORMAT = 'dd/MM/yy at hh:mm';
const DAY_IN_MILIS = 86400000;

const formatSchedule = (begins, ends) => {
  const beginDay = Math.floor(begins / DAY_IN_MILIS);
  const endDay = Math.floor(ends / DAY_IN_MILIS);
  if (beginDay === endDay) {
    return `On ${format('dd/MM/yy', new Date(beginDay * DAY_IN_MILIS))}, from ${format('hh:mm', begins)} to ${format('hh:mm', ends)}`;
  }
  return `From ${format(DATE_FORMAT, begins)} to ${format(DATE_FORMAT, ends)}`;
};

// const { id, title, description, begins, ends, category }
export default class Event extends React.Component {
  render() {
    const {
      info: {
        title,
        description,
        begins,
        ends,
        category,
      },
    } = this.props;

    return (
      <div className="Event">
        <div className="time-line" />
        <div className="schedule">{formatSchedule(begins, ends)}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="category">{category}</div>
      </div>
    );
  }
}
