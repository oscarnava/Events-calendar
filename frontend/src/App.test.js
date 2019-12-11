import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as Api from './containers/Api';

const randomName = () => `User${Math.floor(1e6 * Math.random())}`;
const randomEmail = () => `${randomName()}@testing.com`;

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
  const events = await Api.Event.index();

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
  const userName = randomName();
  await expect(Api.User.findByName(userName))
    .rejects
    .toThrow('User not found');

   await expect(Api.User.create(userName,randomEmail()))
    .resolves
    .toMatchObject({ name: userName });
});


test('User events services', async () => {
  const user = await Api.User.create(randomName(), randomEmail());
  const events = await Api.Event.index();

  const promise = Api.UserEvents.create(user, events[0])
  await expect(promise)
    .resolves
    .toMatchObject({ user_id: user.id, event_id: events[0].id, rating: null });

  const ue = await promise
  delete ue.updated_at

  await expect(Api.UserEvents.update(ue.id, 5))
    .resolves
    .toMatchObject({ id: ue.id, rating: 5 });

  await expect(Api.UserEvents.update(ue.id, 9))
    .rejects
    .toThrow('Rating should go from 1 to 5');

  ue.rating = 5
  await expect(Api.UserEvents.delete(ue.id))
    .resolves
    .toMatchObject(ue);

});
