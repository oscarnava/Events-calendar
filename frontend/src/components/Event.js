/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import format from 'date-format';
import './Event.sass';

const DATE_FORMAT = 'dd/MM/yyyy at hh:mm';
const DAY_IN_MILIS = 86400000;

const trimHours = (dateTime) => new Date(Math.floor(dateTime / DAY_IN_MILIS) * DAY_IN_MILIS);

// const { id, title, description, begins, ends, category }
export default class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extended: !!props.extended,
      scheduled: false,
      rating: null,
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
    // console.log(this.props.info.title, this.beginDay, this.endDay);
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
      await action.then((param) => {
        console.log('Action', param);
        this.setState({ scheduled: !scheduled });
      });
    }
  }

  updateState(newState) {
    const { scheduled, rating } = newState;
    this.setState({ scheduled, rating });
  }

  formattedSchedule() {
    if (this.isSingleDay) {
      const { info: { begins, ends } } = this.props;
      if (begins % DAY_IN_MILIS === ends % DAY_IN_MILIS) { // Extract the hours part
        return `On ${format('dd/MM/yyyy', this.beginDay)}, at ${format('hh:mm', begins)}`;
      }

      return `On ${format('dd/MM/yyyy', this.beginDay)}, from ${format('hh:mm', begins)} to ${format('hh:mm', ends)}`;
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

    const { extended, scheduled, rating } = this.state;

    return (
      <div className="Event">
        <div className="time-line" />
        <div className="schedule">{this.formattedSchedule()}</div>
        <div className="rating">{rating}</div>
        <div className="title">{title}</div>
        <div className="description" style={extended ? {} : { display: 'none' }}>{extended ? description : ''}</div>
        <div className="category">{category}</div>
        <button type="button" className={`btn ${scheduled ? 'scheduled' : 'add'}`} onClick={this.handleLinkBtnClick}>
          <span>{scheduled ? '- schedule' : '+ schedule'}</span>
        </button>
        <button type="button" className="more" onClick={this.handleShowMore}>
          { extended ? 'Show less' : 'Show more' }
        </button>
      </div>
    );
  }
}
