/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import format from 'date-format';
import './Event.sass';

const DATE_FORMAT = 'dd/MM/yy at hh:mm';
const DAY_IN_MILIS = 86400000;

const trimHours = (dateTime) => new Date(Math.floor(dateTime / DAY_IN_MILIS) * DAY_IN_MILIS);

// const { id, title, description, begins, ends, category }
export default class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extended: !!props.extended,
    };
  }

  get beginDay() {
    // eslint-disable-next-line react/destructuring-assignment
    return trimHours(this.props.info.begins);
  }

  get endDay() {
    // eslint-disable-next-line react/destructuring-assignment
    return trimHours(this.props.info.ends);
  }

  get isSingleDay() {
    console.log(this.props.info.title, this.beginDay, this.endDay);
    return Math.floor(this.beginDay) === Math.floor(this.endDay);
  }

  formattedSchedule() {
    if (this.isSingleDay) {
      const { info: { begins, ends } } = this.props;
      return `On ${format('dd/MM/yy', this.beginDay)}, from ${format('hh:mm', begins)} to ${format('hh:mm', ends)}`;
    }
    const { info: { begins, ends } } = this.props;
    return `From ${format(DATE_FORMAT, begins)} to ${format(DATE_FORMAT, ends)}`;
  }

  render() {
    const {
      info: {
        title,
        description,
        category,
      },
    } = this.props;

    const { extended } = this.state;

    return (
      <div className="Event">
        <div className="time-line" />
        <div className="schedule">{this.formattedSchedule()}</div>
        <div className="title">{title}</div>
        <div className="description" style={extended ? {} : { display: 'none' }}>{extended ? description : ''}</div>
        <div className="category">{category}</div>
        <button className="btn-add">Add to schedule</button>
      </div>
    );
  }
}
