import React, { Component } from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import CustomMenu from '../Menu'
import ContentMain from '../ContentMain'
import ContomHeader from './header'
import '../../style/layout.less'

const { Header, Content, Sider } = Layout

export default class gloabalLayout extends Component {
  constructor() {
    super()
    this.state = {
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
              <ContomHeader />
            </Header>
            <Layout>
              {/* 导航栏 */}
              <Sider width={142} className="site-layout-background">
                <CustomMenu />
              </Sider>
              <Layout style={{ padding: '24px 24px' }}>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    border: '1px solid #dfe4ea',
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
