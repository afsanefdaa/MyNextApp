import React from 'react';
import { Divider } from 'antd';
import { ClickCounter, HoverCounter, Layout } from '../components';
import { withAuthSync } from '../hoc/withAuth';

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

HOC.Layout = Layout;
export default withAuthSync(HOC);
