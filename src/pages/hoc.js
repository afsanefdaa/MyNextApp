import React from 'react';
import {ClickCounter, HoverCounter } from '../components';
import { Divider } from "antd";

const HOC = () => {
  return (
    <>
      <p>
        an HOC component transforms a component into another component.
      </p>
      <Divider />
      <ClickCounter />
      <Divider />
      <HoverCounter />
     </>
  )
};

export default HOC;
