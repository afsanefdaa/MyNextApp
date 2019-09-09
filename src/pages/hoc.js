import React from 'react';
import { Divider } from 'antd';
import { ClickCounter, HoverCounter } from '../components';

const HOC = () => (
  <>
    <p>
        an HOC component transforms a component into another component.
    </p>
    <Divider />
    <ClickCounter />
    <Divider />
    <HoverCounter />
  </>
);

export default HOC;
