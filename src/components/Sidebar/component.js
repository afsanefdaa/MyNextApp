import React from 'react';
import {Icon, Layout as AntLayout, Menu} from 'antd';
import style from './style.module.scss';
import { Link } from '..';


const { SubMenu } = Menu;
const { Sider } = AntLayout;

const CustomSider = () => {
  return(
    <Sider className={style.sidebar} width={200}>
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu
          key="hooks"
          title={
            <span>
                <Icon type="pushpin" />
                React Hooks
            </span>
          }
        >
          <Menu.Item key="useState"><Link href="/hooks/[hook]" as="/hooks/useState">useState</Link></Menu.Item>
          <Menu.Item key="useEffect"><Link href="/hooks/[hook]" as="/hooks/useEffect">useEffect</Link></Menu.Item>
          <Menu.Item key="useContext"><Link href="/hooks/[hook]" as="/hooks/useContext">useContext</Link></Menu.Item>
          <Menu.Item key="useMemo"><Link href="/hooks/[hook]" as="/hooks/useMemo">useMemo</Link></Menu.Item>
          <Menu.Item key="useReducer"><Link href="/hooks/[hook]" as="/hooks/useReducer">useReducer</Link></Menu.Item>
          <Menu.Item key="useCustomHook"><Link href="/hooks/[hook]" as="/hooks/useCustomHook">useCustomHook</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="test"
          title={
            <span>
                <Icon type="bug" />
                Test
            </span>
          }
        >
          <Menu.Item key="cypress"><Link href="/test/[type]" as="/test/cypress">Cypress</Link></Menu.Item>
          <Menu.Item key="jest"><Link href="/test/[type]" as="/test/jest">Jest</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="websocket"
          title={
            <span>
                <Icon type="cloud-sync" />
                Web Socket
            </span>
          }
        >
          <Menu.Item key="chat"><Link href="/chat" as="/chat">Chat</Link></Menu.Item>
        </SubMenu>
        <SubMenu
          key="antd"
          title={
            <span>
                <Icon type="ant-design" />
                Ant Design
            </span>
          }
        >
          <Menu.Item key="tableSearch"><Link href="/antd/[segment]" as="/antd/tableSearch">Table Header Search</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
};

export default CustomSider;
