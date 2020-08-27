import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MenuItem from 'antd/lib/menu/MenuItem'
import CustomMenu from '../Menu'
import ContentMain from '../ContentMain'
import '../../style/layout.less'

const { Header, Content, Sider } = Layout

export default class gloabalLayout extends Component {
  constructor() {
    super()
    this.state = {
      name: '首页',
    }
  }

  componentDidMount() {
    console.info('渲染')
  }

  render() {
    return (
      <div className="layout">
        <BrowserRouter>
          <Layout>
            <Header>
              <div className="logo" />
              {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu> */}
            </Header>
            {/* 导航栏 */}
            <Layout>
              <Sider width={200} className="site-layout-background">
                <CustomMenu />
              </Sider>
              <Layout style={{ padding: '24px 24px' }}>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    border: '1px solid #333',
                  }}
                >
                  <ContentMain />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    )
  }
}
