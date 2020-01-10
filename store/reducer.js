import { SET_PROFILE_DATA } from './constants';

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return { user: { name: 'yes' } };
    default:
      return state;
  }
};
