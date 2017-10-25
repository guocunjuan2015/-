import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCInfoContainer from './pc_infocontainer';
import { BackTop ,Menu } from 'antd';
import {Link} from 'react-router';
/*require('../jquery/index');*/
var PCIndex = React.createClass({

        render (){

            return (

                <div>
                        <header className="pc_header" id="menuHeader">
                            <div className="pc_top">
                                <div className="pc_logo">
                                        <Link to="/"><img  src="./src/images/logo.png" alt="logo"/></Link>
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
                                        <Menu.Item key="pcPlanList">
                                          <Link to={`/pcPlanList`}>
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
                                        <Menu.Item key="pcUserCenter">
                                            <Link to={`/pusercenter`}>
                                                  用户中心
                                            </Link>
                                        </Menu.Item>
                                    </Menu>
                                 </div>
                              </div>
                        </header>
                        <PCInfoContainer/>
                        <PCFooter/>
                        <BackTop/>

                </div>

            )



        }
})
export default PCIndex;
