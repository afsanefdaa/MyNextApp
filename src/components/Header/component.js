import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import style from './style.module.scss';

const { Header } = AntLayout;

const CustomHeader = () => (
  <Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['home']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="home">Home</Menu.Item>
    </Menu>
  </Header>
);

export default CustomHeader;
