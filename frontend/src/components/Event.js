/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Event.sass';

// const { id, title, description, begins, ends, category }
export default class Event extends React.Component {
  render() {
    const {
      info: {
        title,
        description,
        // begins, ends, category
      },
    } = this.props;

    return (
      <div className="Event">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    );
  }
}
