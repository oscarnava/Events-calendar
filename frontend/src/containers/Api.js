import React from 'react';

const SERVER = 'http://localhost:3000';
const DATE_TIME_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/;

const URL = (path = '', values = {}) => {
  const vals = Object.keys(values).map((key) => `/${key}/${values[key]}`).join('');
  return `${SERVER}${vals}/${path}`;
};

const parseDates = (data) => {
  switch (typeof data) {
    case 'object': {
      Object.keys(data).forEach((key) => { data[key] = parseDates(data[key]); });
      return data;
    }

    case 'string':
      return data.match(DATE_TIME_REGEX) ? new Date(data) : data;

    default:
      return data;
  }
};

const request = (params) => {
  const { method = 'GET', path = '', body = null, ...values } = params;

  const opts = {
    method,
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }),
    body: body && JSON.stringify(body),
    mode: 'cors',
    cache: 'default',
  };

  return fetch(URL(path, values), opts)
    .then((response) => response.json())
    .then((data) => {
      if (data.status !== 'ok') {
        throw Error(data.status);
      }
      return data.payload;
    })
    .then(parseDates);
};

const Event = {
  index: () => request({ path: 'events' }),
};

const User = {
  create: (name, email) => request({ method: 'POST', path: 'users',body: { name, email } }),
  findByName: (name) => request({ users: name }),
};

const UserEvents = {
  create: (user, event) => request({ method: 'POST', path: 'userevents', events: event.id, users: user.id }),
  update: (userEvent, rating) => request({ method: 'PUT', userevents: userEvent, body: { rating } }),
  delete: (userEvent) => request({ method: 'DELETE', userevents: userEvent }),
}

export {
  SERVER,
  URL,
  Event,
  User,
  UserEvents,
};
