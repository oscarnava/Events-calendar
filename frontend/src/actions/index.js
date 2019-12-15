export const SET_USER = 'SET_USER';
export const LINK_EVENT = 'LINK_EVENT';
export const UNLINK_EVENT = 'UNLINK_EVENT';

export const setUser = (name, userEvents) => ({
  type: SET_USER,
  name,
  userEvents,
});

export const linkEvent = (link) => ({
  type: LINK_EVENT,
  link,
});

export const unlinkEvent = (linkId) => ({
  type: UNLINK_EVENT,
  linkId,
});
