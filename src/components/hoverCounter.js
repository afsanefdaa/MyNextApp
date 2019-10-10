import React from 'react';
import HigherOrderComponent from '../hoc/withCounter';
/* eslint-disable */

const HoverCounter = (props) => {
  const { counter, incrementCount } = props;
  return (
    <h1 onMouseOver={incrementCount}>
Hover
      {counter}
      {' '}
times on this piece of code!
    </h1>
  );
};

export default HigherOrderComponent(HoverCounter);
