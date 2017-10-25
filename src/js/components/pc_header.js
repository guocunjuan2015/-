import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col,Menu} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
var PCHeader = React.createClass({

      render(){

          return (

                  <header className="pc_header fixedNav">
                      <div className="pc_top">
                          <div className="pc_logo">
                                <img  src="./src/images/logo.png" alt="logo"/>
                          </div>
                          <div className="pc_menu">
                              <Menu mode="horizontal">
                                  <Menu.Item key="Top">
                                      <Link to="/">首页</Link>
                                  </Menu.Item>
                                  <Menu.Item key="pcCreatePlan">
                                    <Link to={`/pcCreatePlan`}>
                                      创建计划
                                    </Link>
                                  </Menu.Item>
                                  <Menu.Item key="aboutUs">
                                    <Link to={`/pcCreatePlan`}>
                                      计划列表
                                    </Link>
                                  </Menu.Item>
                                  <Menu.Item key="register">
                                      <Link to={`/pcRegister`}>
                                          创建账户
                                      </Link>
                                  </Menu.Item>
                                  <Menu.Item key="login">
                                      <Link to={`/pcLogin`}>
                                            登录
                                      </Link>
                                  </Menu.Item>
                              </Menu>
                           </div>
                        </div>
                  </header>


          )


      }

})
export default PCHeader;
