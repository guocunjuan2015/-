import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs,Form,Button,Input,Icon,Checkbox} from 'antd';
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
var PCLogin = React.createClass({

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
        componentDidMount() {

          this.props.form.validateFields();
        },
        render (){
                const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
                const userNameError = isFieldTouched('userName') && getFieldError('userName');
                const passwordError = isFieldTouched('password') && getFieldError('password');
                //登录切换
                const isChangeWays = this.state.isCodeVisibility ?
                /*登录展示区域start*/
                  <div className= "loginZone">
                        <div className="poptip">
                              扫码登录
                              <span></span>
                        </div>
                        <Form  horizontal style={{paddingTop:'60px'}}    /*onSubmit={this.handleSubmit}*/>

                            <FormItem  validateStatus={userNameError ? 'error' : ''}
                                 help={userNameError || ''}
                               >
                                 {getFieldDecorator('userName', {
                                   rules: [{ required: true, message: '请输入您的用户名!' }],
                                 })(
                                   <p><Input prefix={<Icon type="user" style={{ fontSize: 16}} />} placeholder="请输入您的用户名" /></p>
                                 )}
                               </FormItem>

                               <FormItem  validateStatus={passwordError ? 'error' : ''}
                                       help={passwordError || ''}
                                     >
                                       {getFieldDecorator('password', {
                                         rules: [{ required: true, message: '请输入您的密码!' }],
                                       })(
                                         <p><Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" /></p>
                                       )}
                                </FormItem>

                                <FormItem>
                                          <p>
                                             <Input prefix={<Icon type="lock" style={{ fontSize: 16}} />} placeholder="请输入6-16位密码" />
                                          </p>

                                 </FormItem>

                            <FormItem>
                            <p className="forgetPassword">
                                {
                                  getFieldDecorator('remember',{valuePropName :'checked',initialValue : true})(
                                       <Checkbox style={{color:'#fff'}}>记住登录状态 </Checkbox>
                                  )}
                                <Link to={`/forgetPassword`} style={{color:'#fff'}}>
                                  忘记密码
                                </Link>
                            </p>
                            <p><Button type="primary"  disabled={hasErrors(getFieldsError())}  htmlType="submit">登录</Button></p>
                            </FormItem>
                      </Form>
                  </div>
                  /*登录展示区域end*/
                  :
                  /*二维码展示区域start*/
                  <div className= "codeZone">
                      <div className="poptip">
                            密码登录
                            <span></span>
                      </div>
                      <div className="scanCode">
                            <img src="./src/images/code.jpg" alt="/" />
                      </div>
                      <p className="quickLogin">使用微信免注册快速登录</p>
                  </div>
                  /*二维码展示区域end*/
                return (
                        <div className="loginBg">
                                <div className="containerWidth">
                                      <h4 className="loginTitle">登录藏书阁</h4>
                                      <div className="site_info">
                                              <div className="pcLogin">
                                                        <span className="changeWaysLogin" onClick={this.changeWays}></span>
                                                        {isChangeWays}
                                              </div>{/*pcLogin end */}
                                          <p className="isAccount">没有账号? <Link to={`/pcRegister`}>立即注册</Link></p>
                                      </div>{/*site_info end */}
                                </div>
                        </div>


                )

        }

})

export default PCLogin = Form.create({})(PCLogin);
