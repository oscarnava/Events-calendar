import React from 'react';

const SERVER = 'http://localhost:3000';

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
      return data.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/) ? new Date(data) : data;

    default:
      return data;
  }
};

const request = (params) => {
  const { method = 'GET', path = '', ...values } = params;
  const opts = {
    method,
    headers: new Headers({ Accept: 'application/json' }),
    mode: 'cors',
    cache: 'default',
  };
  const resp = fetch(URL(path, values), opts)
    .then((response) => response.json())
    .then(parseDates);

  return resp;
};

const Event = {
  all: () => request({ method: 'GET', path: 'events' }),
};

const User = {
  findByName: (name) => request({ method: 'GET', users: name }),
};

export {
  SERVER,
  URL,
  Event,
  User,
};
