import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { Menu } from 'antd'
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'

export default class CustomMenu extends Component {
  handleClickMenu = (e) => hashHistory.push(`/${e.key}`)

  render() {
    return (
      <Menu
        onClick={this.handleClickMenu}
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="hotel">酒店管理</Menu.Item>
        <Menu.Item key="order">订单管理</Menu.Item>
      </Menu>
    )
  }
}
