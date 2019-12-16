import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMsg.sass';

let singleton = null;

class ErrorMsg extends React.Component {
  constructor(props) {
    super(props);
    singleton = singleton || this;
    this.state = {
      message: props.message || '',
      visible: !!props.visible,
    };
  }

  handleClose = () => {
    this.setState({ visible: false });
  }

  render() {
    const { message, visible } = this.state;

    return (
      <div className={`ErrorMsg ${visible ? '' : 'hidden'}`}>
        <button className="closeBtn" type="button" onClick={this.handleClose}>{'\u274C'}</button>
        <div className="message">
          {message}
        </div>
      </div>
    );
  }
}

const showErrorMessage = (message) => {
  if (!singleton) return;

  singleton.setState({ message, visible: true });
  // setInterval(() => {
  //   singleton.setState({ visible: false });
  // }, 10000);
};

ErrorMsg.defaultProps = {
  message: '',
};

ErrorMsg.propTypes = {
  message: PropTypes.string,
};

export { ErrorMsg, showErrorMessage };
