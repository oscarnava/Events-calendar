import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-format';
import Rating from './Rating';
import './Event.sass';

const DATE_FORMAT = 'dd/MM/yyyy at hh:mm';
const DAY_IN_MILIS = 86400000;

const trimHours = (dateTime) => new Date(Math.floor(dateTime / DAY_IN_MILIS) * DAY_IN_MILIS);
const trimDays = (dateTime) => Math.floor(dateTime % DAY_IN_MILIS);

// const { id, title, description, begins, ends, category }
export default class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extended: !!props.extended,
      rating: props.rating || null,
      scheduled: !!props.scheduled,
      logged: false,
    };
  }

  get id() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.info.id;
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
    return Math.floor(this.beginDay) === Math.floor(this.endDay);
  }

  handleShowMore = () => {
    const { extended } = this.state;
    this.setState({ extended: !extended });
  }

  handleLinkBtnClick = async () => {
    const { scheduled } = this.state;

    // eslint-disable-next-line react/destructuring-assignment
    const action = this.props.onChange(this, { scheduled: !scheduled });
    if (action) {
      await action.then(() => {
        this.setState({ scheduled: !scheduled });
      });
    }
  }

  handleRatingClick = (rating) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onChange(this, { rating });
  }

  updateState(newState) {
    const { scheduled, rating, logged } = newState;
    this.setState({ scheduled, rating, logged });
  }

  formattedSchedule() {
    if (this.isSingleDay) {
      const { info: { begins, ends } } = this.props;
      if (trimDays(begins) === trimDays(ends)) { // Extract the hours part
        return `${this.beginDay.toDateString()}, at ${format('hh:mm', begins)}`;
      }

      return `${this.beginDay.toDateString()}, from ${format('hh:mm', begins)} to ${format('hh:mm', ends)}`;
    }

    const { info: { begins, ends } } = this.props;
    if (trimDays(begins) || trimDays(ends)) { // Extract the hours part
      return `From ${begins.toDateString()} to ${ends.toDateString()}`;
    }

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

    const {
      extended, scheduled, rating, logged,
    } = this.state;

    return (
      <div className="Event">
        <div className="time-line" />
        <div className="schedule">{this.formattedSchedule()}</div>
        <div className="title">{title}</div>
        <div className="description" style={extended ? {} : { display: 'none' }}>{extended ? description : ''}</div>
        <div className="category">{category}</div>
        <button type="button" className={`btn ${scheduled ? 'scheduled' : 'add'}`} style={logged ? {} : { display: 'none' }} onClick={this.handleLinkBtnClick}>
          <span>{scheduled ? '- schedule' : '+ schedule'}</span>
        </button>
        <button type="button" className="more" onClick={this.handleShowMore}>
          { extended ? 'Show less' : 'Show more' }
        </button>
        <div className="rating" style={logged && scheduled ? {} : { display: 'none' }}>
          <Rating value={rating} onChange={this.handleRatingClick} />
        </div>
      </div>
    );
  }
}

Event.defaultProps = {
  extended: false,
  rating: null,
  scheduled: false,
};

Event.propTypes = {
  info: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    begins: PropTypes.instanceOf(Date),
    ends: PropTypes.instanceOf(Date),
    category: PropTypes.string,
  }).isRequired,
  extended: PropTypes.bool,
  rating: PropTypes.number,
  scheduled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
