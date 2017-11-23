import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCSideMenu from './side_menu';
import {Tooltip,Avatar , Menu, Dropdown, Icon,Modal} from 'antd';
var PCUserNav = React.createClass({

      getInitialState(){

          return {

              isClosed : false,
              isVisibileFriends : false,
              isVisibile : false,
              isVisibileAccountSet :false

          }

      },
      handleMenuToggle(){ //点击导航显示隐藏左侧边栏

          this.setState({

            isClosed: !this.state.isClosed
          })

          if(this.state.isClosed == false){
              $("#sidebar").addClass('is-open');

          } else {
            $("#sidebar").removeClass('is-open');

          }

      },
      //邀请好友弹框
      handleFriends(isVisibileFriends){

          this.setState({

            isVisibileFriends

          })

      },
      //账户设置
      handleAccountSet(isVisibileAccountSet){

          this.setState({

            isVisibileAccountSet

          })

      },
      render(){
            const noticeTip =
            <div className="noticeTip">
                <i className="fa fa-exclamation-circle"></i>
                <p>您当前还没有消息提醒</p>
                <p className="noticep">
                    <Link to={`/sysInfos`}>
                          全部消息
                    </Link>
                </p>
            </div>;
            const userList = (
                  <Menu className="userList">
                    <Menu.Item>
                      <a  rel="noopener noreferrer">我的任务</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a  rel="noopener noreferrer" onClick={()=>this.handleAccountSet(true)}>账号设置</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a  rel="noopener noreferrer" onClick={()=>this.handleFriends(true)}>邀请好友</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a  rel="noopener noreferrer">退出登录</a>
                    </Menu.Item>
                  </Menu>
            );
            return (
              <div className="demo1">
                  {/*网页自动加载进度条START*/}
                    <div className="pace  pace-inactive">
                      <div className="pace-progress" data-progress-text="100%" data-progress={99} style={{width: '100%'}}>
                        <div className="pace-progress-inner" />
                      </div>
                        <div className="pace-activity" />
                    </div>
                    {/*网页自动加载进度条END*/}
                    {/*BEGIN page-header-topbar*/}
                      <div className="page-header-topbar">
                            <span className="logo-text">Collection Books</span>
                            <a id="menu-toggle" href="javascript:;" className="hidden-xs">
                                  <i onClick={this.handleMenuToggle} className="fa fa-bars" />
                            </a>
                            <div className="fr navbar-account">
                                  <ul>
                                      <li>
                                          <Tooltip placement="bottom" title={noticeTip}>
                                            <i className="fa fa-envelope fa-fw"></i>
                                          </Tooltip>
                                      </li>
                                      <li>
                                          <Avatar className="fl avatar" icon="user" />
                                          <Dropdown overlay={userList}>
                                              <a className="fl dropdownList ant-dropdown-link" href="javascript:;">
                                                 username <Icon type="down" />
                                              </a>
                                          </Dropdown>
                                      </li>
                                      {/*<li>
                                            <i className="fa fa fa-cog"></i>
                                      </li>*/
                                      }
                                  </ul>
                            </div>
                      </div>
                    {/*END page-header-topbar*/}
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
                    {/*账户设置*/}
                    <Modal title="账户设置" style={{width:'320px'}} visible={this.state.isVisibileAccountSet} onOk={() => this.handleAccountSet(false)}
                      onCancel={() => this.handleAccountSet(false)}>
                          <div className="accountSet-body">

                           </div>
                    </Modal>

               </div>
            )

      }

})

export default PCUserNav;
