import React from 'react';
import {Layout as AntLayout, Menu} from 'antd';
const { Header } = AntLayout;
import style from './style.module.scss';

const CustomHeader = () => {
  return(
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
  )
};

export default CustomHeader;
