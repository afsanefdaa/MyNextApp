import React from 'react';
import { Layout as AntLayout, Breadcrumb } from 'antd';
import { CustomSider, CustomHeader, CustomBreadcrumb } from '..';
import style from './style.module.scss';

const { Content } = AntLayout;

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
