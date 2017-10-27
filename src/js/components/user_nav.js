import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCSideMenu from './side_menu';
import {Tooltip,Avatar , Menu, Dropdown, Icon} from 'antd';
var PCUserNav = React.createClass({

      render(){
            const noticeTip = <p>暂时没有通知</p>;
            const userList = (
                  <Menu>
                    <Menu.Item>
                      <a  rel="noopener noreferrer">我的任务</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a  rel="noopener noreferrer">个人设置</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a  rel="noopener noreferrer">退出登录</a>
                    </Menu.Item>
                  </Menu>
            );
            return (
              <div>
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
                                  <i className="fa fa-bars" />
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
                                      <li>
                                            <i className="fa fa fa-cog"></i>
                                      </li>
                                  </ul>
                            </div>
                      </div>
                    {/*END page-header-topbar*/}

               </div>
            )

      }

})

export default PCUserNav;
