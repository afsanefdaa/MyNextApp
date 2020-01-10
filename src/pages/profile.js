import React, { useEffect } from 'react';
import { withAuthSync, logout } from '../hoc/withAuth';
import { Layout } from '../components';

const Profile = () => (
  <>
    <h1>profile</h1>
    <button type="button" onClick={() => logout()}>logout</button>
    {/* <img src={avatarUrl} alt="Avatar" /> */}
    {/* <h1>{name}</h1> */}
    {/* <p className="lead">{login}</p> */}
    {/* <p>{bio}</p> */}
  </>
);

Profile.Layout = Layout;
export default withAuthSync(Profile);
