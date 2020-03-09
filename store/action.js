import axios from 'axios';
import { SET_PROFILE_DATA, SET_LOGGER_TEST } from './constants';

export const setProfileData = (username) => (dispatch) => {
  const url = `https://api.github.com/users/${username}`;
  axios.get(url).then((res) => {
    if (res.status === 200 && res.data) {
      return dispatch({ type: SET_PROFILE_DATA, data: res.data });
    }
  });
};


export const loggerTest = (data) => (dispatch) => dispatch({ type: SET_LOGGER_TEST, data });
