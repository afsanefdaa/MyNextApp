import React, { useContext } from 'react';


const user = React.createContext(
  {
    name: 'Afsane',
    last: 'Fadaei',
  },
);
const notifications = React.createContext([{ count: 1 }, { count: 2 }]);

const ContextHook = () => {
  const uservar = useContext(user);
  const notificationsvar = useContext(notifications);

  return (
    <>
      Welcome back,
      {' '}
      {uservar.name}
      {' '}
      {uservar.last}
!
      You have
      {' '}
      {notificationsvar.length}
      {' '}
notifications.
    </>
  );
};

export default ContextHook;
