import { SET_PROFILE_DATA, SET_LOGGER_TEST } from './constants';

const initialState = {
  user: {},
  loggerTest: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return { ...state, user: { name: 'yes' } };
    case SET_LOGGER_TEST:
      return { ...state, loggerTest: action.data };
    default:
      return state;
  }
};
