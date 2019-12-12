import React from 'react';
import EventsList from './containers/EventsList';
import './App.sass';

function App() {
  return (
    <div className="App">
      <h1>Events</h1>
      <EventsList />
    </div>
  );
}

export default App;
