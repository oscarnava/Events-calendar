import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './App';
import './index.sass';

const store = createStore(
  reducer,
  {
    formVisible: false,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
