import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggerTest } from '../../store/action';

const ReduxLogger = (props) => {
  const dispatch = useDispatch();
  const bool = useSelector((state) => state.profile.loggerTest);

  return (
    <div>
      <button type="button" onClick={() => dispatch(loggerTest(!bool))}>Click</button>
    </div>
  );
};

export default ReduxLogger;
