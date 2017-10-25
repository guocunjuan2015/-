import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs,Form,Button,Input,Icon} from 'antd';
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
var PCForgetPassword = React.createClass({

        render (){

                return (
                        <div className="loginBg">
                                <div className="containerWidth">
                                      <h4 className="loginTitle">忘记密码</h4>
                                      <div className="site_info">
                                              <div className="pcLogin" style={{paddingTop:'45px'}}>
                                                        <Form horizontal   onSubmit={this.handleSubmit}>
                                                            <FormItem>
                                                                <p><Input prefix={<Icon type="user" style={{ fontSize: 16}} />} placeholder="请输入您的手机号" /></p>
                                                            </FormItem>

                                                            <FormItem className="getCode">
                                                                <p><Input  type="text" placeholder="请输入短信验证码" /></p>
                                                                <span>获取验证码</span>
                                                            </FormItem>
                                                            <FormItem>
                                                                <p><Button type="primary"  htmlType="submit">下一步</Button></p>
                                                            </FormItem>
                                                      </Form>

                                              </div>{/*pcLogin end */}
                                      </div>{/*site_info end */}
                                </div>
                        </div>


                )

        }

})

export default PCForgetPassword;
