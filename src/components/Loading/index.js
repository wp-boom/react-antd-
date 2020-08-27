import React, { Component } from 'react'
import { Spin, Alert } from 'antd'

export default class Loading extends Component {
  render() {
    return (
      <div className="example">
        <Spin tip="Loading..." size="large">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </div>
    )
  }
}
