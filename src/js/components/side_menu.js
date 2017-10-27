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

              </Modal>

         </div>

            )

      }




})

export default PCSideMenu;
