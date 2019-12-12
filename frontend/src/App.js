import React from 'react';
import EventsList from './containers/EventsList';
import User from './containers/User';
import './App.sass';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.user = <User />;
  }

  render() {
    return (
      <div className="App">
        {this.user}
        <h1>Events</h1>
        <EventsList />
      </div>
    );
  }
}
