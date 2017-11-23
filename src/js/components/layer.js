import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';

var Layer = React.createClass({
      getInitialState(){

        return {
            isVisibileFriends : false
        }

      },
      //邀请好友弹框
      handleFriends(isVisibileFriends){

          this.setState({

            isVisibileFriends

          })

      },
      render(){

            return (
              <div>
                    <Modal title="邀请好友" visible={this.state.isVisibileFriends} onOk={() => this.handleFriends(false)}
                      onCancel={() => this.handleFriends(false)}>
                      <div className="invite-body">
                          <div className="address-desc">您的专属邀请链接：</div>
                                  <div className="invite-address-box">
                                      <input id="invite-address" className="form-control" readonly="" value="https://mubu.com/inv/439807"/>
                                      <span id="invite-copy-link">
                                            复制
                                      </span>
                                  </div>
                                  <div className="qrcode-container clearfix">
                                      <div id="invite-qrcode" className="fl invite-qrcode">
                                          <img src="/src/images/code.jpg"/>
                                      </div>
                                      <div className="fl qrcode-desc">
                                          您的专属邀请二维码
                                          <div>手机扫一扫</div>
                                      </div>
                                </div>
                          </div>
                    </Modal>
              </div>

            )

      }




})

export default Layer;
