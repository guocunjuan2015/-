import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel,Tabs,Form,Button,Input,Icon,Checkbox} from 'antd';
import {Link} from 'react-router';//走马灯效果
import PCHeader from './pc_header';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
var PCInfoContainer = React.createClass({

        getInitialState(){
              return {

                  isCodeVisibility: true
              }
        },
        changeWays(e){

            this.setState({
                  isCodeVisibility:!this.state.isCodeVisibility
            })
        },
        render (){
            const {getFieldDecorator} = this.props.form;
            //登录切换
            const isChangeWays = this.state.isCodeVisibility ?
            /*登录展示区域start*/
              <div className= "loginZone">
                    {/*<div className="poptip">
                          扫码登录
                          <span></span>
                    </div>*/}
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
              </div>
              /*登录展示区域end*/
              :
              /*二维码展示区域start*/
              <div className= "codeZone">
                  {/*<div className="poptip">
                        密码登录
                        <span></span>
                  </div>*/}
                  <div className="scanCode">
                        <img src="./src/images/code.jpg" alt="/" />
                  </div>
                  <p className="quickLogin" style={{paddingTop:'70px',color:'#888'}}>使用微信免注册快速登录</p>
              </div>
              /*二维码展示区域end*/
            return (
              <div id="fullPageContainer">
                  <div className="section section1">
                    <div className="containerWidth fristFullPage">
                          <div className="intro-container_l">
                                <h2 className="intro-title">
                                      你生活的小助手
                                 </h2>
                                 <p className="desc">
                                        你可以在藏书阁中创建计划，管理工作任务，让你的生活变得简单。
                                </p>
                          </div>
                          <div className="intro-container_r">
                                <span className="changeWayHome" onClick={this.changeWays}></span>
                                {isChangeWays}
                          </div>
                    </div>
                    <i className="fa fa-angle-double-down down" aria-hidden="true" ></i>
                  </div>
                  <div className="section section2 containerWidth">
                      <img className="fl planImage am-slider-title am-scrollspy-init" data-am-scrollspy="{animation: 'slide-left', delay: 120}"  src="./src/images/feature-1.png" alt="logo"/>
                        <div className="features-info fl am-slider-title am-scrollspy-init" data-am-scrollspy="{animation: 'slide-right', delay: 110}">
                            <h3 >计划管理</h3>
                            <p>一目了然所有人的进度，激励自己前进；</p>
                        </div>

                  </div>
                  <div className="section section3 containerWidth">
                    <div className="features-info fl feature-2 am-slider-title am-scrollspy-init" data-am-scrollspy="{animation: 'slide-left', delay: 130}">
                        <h3>强大的提醒功能</h3>
                        <p>强大的提醒功能，帮你不再拖延</p>
                    </div>
                      <img className="fl planImage am-slider-title am-scrollspy-init" data-am-scrollspy="{animation: 'slide-right', delay: 120}" src="./src/images/feature-2.png" alt="logo"/>
                  </div>
                  <div className="clear"></div>
              </div>

            )

        }
})
export default PCInfoContainer = Form.create({})(PCInfoContainer);
