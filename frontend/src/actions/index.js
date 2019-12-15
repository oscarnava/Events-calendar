export const SET_USER = 'SET_USER';

export const setUser = (name, events) => ({
  type: SET_USER,
  name,
  events,
});
