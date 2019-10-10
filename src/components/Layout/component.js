import React from 'react';
import { Layout as AntLayout } from 'antd';
import { CustomSider, CustomHeader, CustomBreadcrumb } from '..';
import style from './style.module.scss';

const { Content } = AntLayout;
/* eslint-disable */

const Layout = (props) => {
  const { children } = props;
  return (
    <AntLayout>
      <CustomHeader />
      <AntLayout>
        <CustomSider />
        <AntLayout className={style.layout}>
          <CustomBreadcrumb />
          <Content className={style.content}>
            {children}
          </Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
