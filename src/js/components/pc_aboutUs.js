import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
var PCAboutUs = React.createClass({

      render(){


            return (

                  <div>
                      <PCHeader/>
                          <div className="containerWidth aboutUsZone">
                                <img style={{paddingTop:'80px',paddingBottom:'40px'}} src="./src/images/abuot_bout.jpg" alt="关于我们"/>
                                        {  /*<div className="aboutUs_l">
                                                <ul>
                                                    <li>关于我们</li>
                                                    <li>隐私声明</li>
                                                </ul>
                                          </div>*/}

                                                <h3 style={{marginTop:"0"}}>1、公司简介：</h3>
                                                <p>
                                                      自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您自愿选择服务或提供信息的情况下收集您的
                                                      自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的
                                                      自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的自愿选择服务或提供信息的情况下收集您的的私人信息
                                                </p>
                                                <h3>2、产品简介：</h3>
                                                <p>
                                                      服务或提供信息的情况下收集您的私人信息
                                                </p>
                                                <h3>3、联系方式：</h3>
                                                <p>
                                                      服务或提供信息的情况下收集您的私人信息
                                                </p>

                              </div>
                      <PCFooter/>
                  </div>



            )




      }




})

export default PCAboutUs;
