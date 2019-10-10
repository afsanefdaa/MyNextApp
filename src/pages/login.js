import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { login } from '../hoc/withAuth';

function Login() {
  const [userData, setUserData] = useState({ username: '', error: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    setUserData({ ...userData, error: '' });

    const { username } = userData;
    const url = '/api/login';

    try {
      const response = await fetch(url, {
        method: 'POST',

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      if (response.status === 200) {
        const { token } = await response.json();
        await login({ token });
      } else {
        // https://github.com/developit/unfetch#caveats
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    } catch (error) {
      const { response } = error;
      setUserData(
        { ...userData, error: response ? response.statusText : error.message },
      );
    }
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
