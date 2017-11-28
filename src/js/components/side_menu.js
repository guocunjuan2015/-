import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Link} from 'react-router';
import MaskLayer from './mask_layer';
import {Modal} from 'antd';

var PCSideMenu = React.createClass({
      getInitialState(){
        return {
          modal1Visible: false,
          modal2Visible: false,
          templates : '',
          isShow: true
        }

      },
      //个人中心创建计划模板点击效果
      onmouseenter(event){

          this.setState({

              isShow:!this.state.isShow

          })
          var $this = $(".paln_wrapper li");
          if(this.state.isShow == false){

              console.log(this.refs.selected);
              console.log("111");
              $this.addClass('selected');

          } else {
              console.log("222");

              $this.removeClass('selected');

          }


      },
      /*展示创建计划弹框*/
      showcCreatePlane(modal1Visible){

          this.setState({

               modal1Visible

          })
      },
      //更多模板
      handleMoreModel(modal2Visible){

          this.setState({

                  modal2Visible

          })
      },

      render(){
            /*
            const  {templates} = this.state.templates;
            const templatesList = templates.length
        			? templates.map((newsItem, index) => (
                <li key={index} className="cover-item">
                       <div className="temp-img-box">
                          <img src="./src/images/modal1.png" alt="封面"/>
                       </div>
                      <span className="temp-name">工作计划</span>
                      <div className="select-box">
                            <i className="icon2-selected fa fa-check-square-o"></i>
                      </div>
                      <span className="temp-preview">预览</span>
                </li>

        			))
        			: '没有加载到任何新闻';*/
            return (
              <div>
                {/*BEGIN wrapper*/}
                    <nav id="sidebar" className="navbar-default navbar-static-side" style={{minHeight: '100%'}}>
                      <div className="sidebar-collapse menu-scroll">
                        <ul id="side-menu" className="nav">
                                <li className="active">
                                      <a href="javascript:;" data-toggle="modal" data-target="#creatPlanLayer">
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
                  <MaskLayer/>
            
             </div>


          )

      }

})

export default PCSideMenu;
