import React from 'react';
import PropTypes from 'prop-types';
import './Rating.sass';

const stars = { false: '\u2606', true: '\u2605' };

export default class Rating extends React.Component {
  handleRateClick = ({ target }) => {
    const { dataset: { rate } } = target;
    const { onChange } = this.props;
    if (onChange) onChange(+rate);
  }

  render() {
    const { value } = this.props;
    return (
      <div className="Rating">
        <button data-rate="1" type="button" onClick={this.handleRateClick}>{stars[value > 0]}</button>
        <button data-rate="2" type="button" onClick={this.handleRateClick}>{stars[value > 1]}</button>
        <button data-rate="3" type="button" onClick={this.handleRateClick}>{stars[value > 2]}</button>
        <button data-rate="4" type="button" onClick={this.handleRateClick}>{stars[value > 3]}</button>
        <button data-rate="5" type="button" onClick={this.handleRateClick}>{stars[value > 4]}</button>
      </div>
    );
  }
}

Rating.defaultProps = {
  value: null,
  onChange: null,
};

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};
