import {
  SET_USER,
  SET_RATING,
  LINK_EVENT,
  UNLINK_EVENT,
} from '../actions';

const reducer = (state = {
  name: null,
  events: null,
}, {
  type,
  name,
  userEvents,
  linkId,
  link,
  rating,
}) => {
  switch (type) {
    case SET_USER:
      return { ...state, name, events: userEvents };

    case SET_RATING:
      return { ...state, events: state.events.map((e) => (e.id === linkId ? { ...e, rating } : e)) };

    case LINK_EVENT:
      return { ...state, events: [...state.events, link] };

    case UNLINK_EVENT:
      return { ...state, events: state.events.filter((e) => e.id !== linkId) };

    default:
      return state;
  }
};

export default reducer;
