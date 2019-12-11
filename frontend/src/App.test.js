import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as Api from './containers/Api';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('API services', () => {
  expect(Api.URL()).toEqual(`${Api.SERVER}/`);
  expect(Api.URL('users')).toEqual(`${Api.SERVER}/users`);
  expect(Api.URL('userevents', { events: 3, users: 2 })).toEqual(`${Api.SERVER}/events/3/users/2/userevents`);
});

test('Event services', async () => {
  // console.log('===================================================================');

  const events = await Api.Event.all();
  // console.log('events', events);

  expect(events).toBeDefined();

  events.forEach((event) => {
    expect(event).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        description: expect.any(String),
        begins: expect.any(Date),
        ends: expect.any(Date),
        category: expect.any(String),
      }),
    );
  });
});

test('User services', async () => {
  const user = await Api.User.findByName('tester');

  console.log('User', user);
  expect(user).toBeDefined();
});
