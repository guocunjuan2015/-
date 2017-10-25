import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs,Form,Button,Input,Icon} from 'antd';
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
var PCLogin = React.createClass({

        render (){

                return (
                        <div className="loginBg">
                                <div className="containerWidth">
                                      <h4 className="loginTitle">注册藏书阁</h4>
                                      <div className="site_info">
                                              <div className="pcLogin" style={{paddingTop:'45px'}}>
                                                        <Form horizontal   onSubmit={this.handleSubmit}>
                                                            <FormItem>
                                                                <p><Input prefix={<Icon type="user" style={{ fontSize: 16}} />} placeholder="请输入您的手机号" /></p>
                                                            </FormItem>
                                                            <FormItem>
                                                                <p><Input prefix={<Icon type="lock" style={{fontSize: 16}} />} type="password" placeholder=" 需由6-20位数字、字母或符号组成" /></p>
                                                            </FormItem>
                                                            <FormItem>
                                                                <p><Input prefix={<Icon type="lock" style={{fontSize: 16}} />} type="password" placeholder="确认密码" /></p>
                                                            </FormItem>
                                                            <FormItem className="getCode">
                                                                <p><Input  type="text" placeholder="请输入短信验证码" /></p>
                                                                <span>获取验证码</span>
                                                            </FormItem>
                                                            <FormItem>
                                                                <p><Button type="primary"  htmlType="submit">立即注册</Button></p>
                                                            </FormItem>
                                                      </Form>

                                              </div>{/*pcLogin end */}
                                          <p className="isAccount">没有账号? <Link to={`/pcLogin`}>立即登录</Link></p>
                                      </div>{/*site_info end */}
                                </div>
                        </div>


                )

        }

})

export default PCLogin;
