import axios from 'axios';
import { SET_PROFILE_DATA } from './constants';

export const setProfileData = (username) => (dispatch) => {
  const url = `https://api.github.com/users/${username}`;
  axios.get(url).then((res) => {
    if (res.status === 200 && res.data) {
      console.log(res.data, 'res.data');
      return dispatch({ type: SET_PROFILE_DATA, data: res.data });
    }
  });
};
