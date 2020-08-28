import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../../style/header.less'

export default class Header extends Component {
  render() {
    return (
      <header id="navbar">
        <div id="navbar-container" className="boxed">
          <Row className="row">
            <Col span={20}>
              <div className="navbar-brand" onClick={this.logoClick}>
                <span className="brand-title">
                  <span className="brand-text">
                    <span className="logo" />
                    点喜酒店系统
                  </span>
                </span>
              </div>
            </Col>
            <Col span={4} className="col">
              <div className="right">
                <ul>
                  <li>
                    <a>管理员</a>
                  </li>
                  <li>
                    <a>退出</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </header>
    )
  }
}
