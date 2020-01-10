import React, { useState } from 'react';
import axios from 'axios';
import { login } from '../hoc/withAuth';

function Login() {
  const [userData, setUserData] = useState({ username: '', error: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    setUserData({ ...userData, error: '' });

    const { username } = userData;
    const url = `https://api.github.com/users/${username}`;
    axios.get(url).then((res) => {
      if (res.status === 200) {
        login({ token: res.data.login });
      }
    });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="username">GitHub username</label>

        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={(event) => setUserData(
            { ...userData, username: event.target.value },
          )}
        />

        <button type="submit">Login</button>

        {userData.error && (
          <p className="error">
            Error:
            {userData.error}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
