import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Modal} from 'antd';
/*import createPlaneModal from './createPlaneModal';*/
var PCSideMenu = React.createClass({

    getInitialState(){

      return {
          visible:false
      }

    },
    /*展示创建计划弹框*/
      showcCreatePlane(){
        this.setState({

             visible: true

        })
      },
      /*隐藏创建计划弹框*/
      hideCreatePlane(){
        this.setState({
            visible: false,
        });
      },
      render(){
            return (
              <div>
                {/*BEGIN wrapper*/}
                    <nav id="sidebar" className="navbar-default navbar-static-side" style={{minHeight: '100%'}}>
                      <div className="sidebar-collapse menu-scroll">
                        <ul id="side-menu" className="nav">
                                <li className="active" >
                                      <a href="javascript:;" onClick={this.showcCreatePlane}>
                                          <i className="fa fa-edit">
                                                <div className="icon-bg bg-orange" />
                                          </i>
                                          <span className="menu-title">创建计划</span>
                                      </a>
                                </li>
                                <li>
                                      <a href="javascript:;" data-toggle="modal" data-target="#myModal">
                                        <i className="fa fa-list">
                                              <div className="icon-bg bg-pink" />
                                        </i>
                                         <span className="menu-title">计划列表</span>
                                       </a>
                                </li>
                                <li>
                                            <a href="#"><i className="fa fa-send-o fa-fw">
                                                  <div className="icon-bg bg-green" />
                                                </i><span className="menu-title">消息管理</span>
                                            </a>
                                </li>
                                <li>
                                            <a href="#"><i className="fa fa-edit fa-fw">
                                                <div className="icon-bg bg-violet" />
                                              </i>
                                              <span className="menu-title">提到我的</span>
                                           </a>
                                </li>
                        </ul>
                      </div>
                    </nav>
                {/*END SIDEBAR MENU*/}

                <Modal title="创建计划" visible={this.state.visible} onOk={this.hideCreatePlane}
                onCancel={this.hideCreatePlane} >
                      <div className="createMain">
                          <section>
                                <span className="type-system">计划名称</span>
                                <input type="text" name="" className="name form-control" placeholder="请输入计划名称" autofocus="true" accesskey="k"/>
                          </section>
                          <section className="template-short-list">
                                <span className="type-system">计划模板</span>
                                <div className="paln_wrapper clearfix">
                                    <ul className="fl">
                                            <li className="cover-item kanban-cover selected">
                                                   <div className="temp-img-box">
                                                      <img src="./src/images/modal1.png" alt="封面"/>
                                                   </div>
                                                  <span className="temp-name">工作计划</span>
                                                  <div className="select-box">
                                                        <i className="icon2-selected fa fa-check-square-o"></i>
                                                  </div>
                                                  <span className="temp-preview">预览</span>
                                            </li>

                                            <li className="cover-item kanban-cover">
                                                   <div className="temp-img-box">
                                                      <img src="./src/images/modal1.png" alt="封面"/>
                                                   </div>
                                                  <span className="temp-name">工作计划</span>
                                                  <div className="select-box">
                                                        <i className="icon2-selected"></i>
                                                  </div>
                                                  <span className="temp-preview">预览</span>
                                            </li>

                                            <li className="cover-item kanban-cover">
                                                   <div className="temp-img-box">
                                                      <img src="./src/images/modal1.png" alt="封面"/>
                                                   </div>
                                                  <span className="temp-name">工作计划</span>
                                                  <div className="select-box">
                                                        <i className="icon2-selected"></i>
                                                  </div>
                                                  <span className="temp-preview">预览</span>
                                            </li>
                                     </ul>
                                     <div className="show-more fl">
                                        <div className="more-box">more</div>
                                        <span className="type-caption">更多模板</span>
                                       </div>
                                </div>
                          </section>
                          <section>
                              <button type="button" className="btn" id="submitModal">创建计划</button>
                          </section>

                      </div>
              </Modal>

         </div>

            )

      }




})

export default PCSideMenu;
