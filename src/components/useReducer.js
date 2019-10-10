import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const ReducerHook = () => {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <>
      Count:
      {' '}
      {state.count}
      <button type="button" onClick={() => setState({ type: 'increment' })}>+</button>
      <button type="button" onClick={() => setState({ type: 'decrement' })}>-</button>
    </>
  );
};

export default ReducerHook;
