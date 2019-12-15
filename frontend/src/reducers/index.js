import {
  SET_USER,
} from '../actions';

const reducer = (state = {
  name: null,
  events: null,
}, {
  type,
  name,
  events,
}) => {
  switch (type) {
    case SET_USER:
      return { ...state, name, events };

    default:
      return state;
  }
};

export default reducer;
