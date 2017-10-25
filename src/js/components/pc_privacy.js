import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
var PCPrivacy = React.createClass({

      render(){


            return (

                  <div>
                      <PCHeader/>
                          <div className="containerWidth aboutUs">
                                <img  src="./src/images/abuot_bout.jpg" alt="隐私声明"/>
                                                <h3 style={{marginTop:"0"}}>1、我们会收集什么信息？</h3>
                                                <p>
                                                      自愿选择服务或提供信息的情况下收集您的私人信息
                                                </p>
                                                <h3>2、我们如何使用收集的信息？</h3>
                                                <p>
                                                      服务或提供信息的情况下收集您的私人信息
                                                </p>
                                                <h3>3、信息的披露</h3>
                                                <p>
                                                      服务或提供信息的情况下收集您的私人信息
                                                </p>

                              </div>
                      <PCFooter/>
                  </div>



            )




      }




})

export default PCPrivacy;
