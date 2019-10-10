import React from 'react';
import { Button } from 'antd';
import HigherOrderComponent from '../hoc/withCounter';
/* eslint-disable */

const ClickCounter = (props) => {
  const { counter, incrementCount } = props;
  return (
    <Button onClick={incrementCount}>
      Click
      {' '}
      {counter}
      {' '}
Times on this Button
    </Button>
  );
};

export default HigherOrderComponent(ClickCounter);
