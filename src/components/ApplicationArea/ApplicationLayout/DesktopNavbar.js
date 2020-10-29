import React from 'react';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  AlertOutlined,
  CodeOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import logoUrl from 'assets/icon.png';
import './DesktopNavbar.less';

function NavbarSection({ inlineCollapsed, children, ...properties }) {
  return (
    <Menu
      selectable={false}
      mode={inlineCollapsed ? 'inline' : 'vertical'}
      inlineCollapsed={inlineCollapsed}
      theme='dark'
      {...properties}
    >
      {children}
    </Menu>
  );
}

export default function DesktopNavbar() {
  return (
    <div className='desktop-navbar'>
      <NavbarSection inlineCollapsed className='desktop-navbar-logo'>
        <a href="/bi">
          <img src={logoUrl} alt='YM' />
        </a>
      </NavbarSection>

      <NavbarSection inlineCollapsed>
        <Menu.Item key='dashboards'>
          <Link to='/dashboards'>
            <DesktopOutlined />
            <span>Dashboards</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='queries'>
          <Link to='/queries'>
            <CodeOutlined />
            <span>Queries</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='alerts'>
          <Link to='/alerts'>
            <AlertOutlined />
            <span>Alerts</span>
          </Link>
        </Menu.Item>
      </NavbarSection>
      <NavbarSection inlineCollapsed className='desktop-navbar-spacer'>
        <Menu.Divider />
        <Menu.SubMenu
          key='create'
          popupClassName='desktop-navbar-submenu'
          title={(
            <>
              <span data-test='CreateButton'>
                <PlusOutlined />
                <span>Create</span>
              </span>
            </>
          )}
        />
      </NavbarSection>
      <Button className='desktop-navbar-collapse-button'>
        <MenuUnfoldOutlined />
      </Button>
    </div>
  );
}
