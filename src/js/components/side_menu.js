import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Link} from 'react-router';
/*import MaskLayer from './mask_layer';*/
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
                                      <a href="javascript:;" onClick={() => this.showcCreatePlane(true)}>
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

                  <Modal title="创建计划" class="creatPlanLayer" visible={this.state.modal1Visible} onOk={() => this.showcCreatePlane(false)}
                  onCancel={() => this.showcCreatePlane(false)} >
                        <div className="createMain">
                            <section>
                                  <span className="type-system">计划名称</span>
                                  <input type="text" name="" className="name form-control" placeholder="请输入计划名称" autofocus="true" accesskey="k"/>
                            </section>
                            <section className="template-short-list">
                                  <span className="type-system">计划模板</span>
                                  <div className="paln_wrapper clearfix">
                                      <ul className="fl plan_template">
                                              <li className="cover-item selected" ref="selected" onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave}>
                                                     <div className="temp-img-box">
                                                        <img src="./src/images/modal1.png" alt="封面"/>
                                                     </div>
                                                    <span className="temp-name">工作计划</span>
                                                    <div className="select-box">
                                                          <i className="icon2-selected fa fa-check-square-o"></i>
                                                    </div>
                                                    <span className="temp-preview">预览</span>
                                              </li>
                                              <li className="cover-item" ref="selected" onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave}>
                                                     <div className="temp-img-box">
                                                        <img src="./src/images/modal1.png" alt="封面"/>
                                                     </div>
                                                    <span className="temp-name">工作计划</span>
                                                    <div className="select-box">
                                                          <i className="icon2-selected fa fa-check-square-o"></i>
                                                    </div>
                                                    <span className="temp-preview">预览</span>
                                              </li>
                                              <li className="cover-item" ref="selected" onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave}>
                                                     <div className="temp-img-box">
                                                        <img src="./src/images/modal1.png" alt="封面"/>
                                                     </div>
                                                    <span className="temp-name">工作计划</span>
                                                    <div className="select-box">
                                                          <i className="icon2-selected fa fa-check-square-o"></i>
                                                    </div>
                                                    <span className="temp-preview">预览</span>
                                              </li>

                                       </ul>
                                       <div className="show-more fl" onClick={() => this.handleMoreModel(true)}>
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

                <Modal title="计划模板" visible={this.state.modal2Visible} onOk={() => this.handleMoreModel(false)}
                onCancel={() => this.handleMoreModel(false)} >
                        <div className="template-pannel">
                              <ul className="clearfix">
                                  <li>
                                      <Link to={`/board`}>
                                        <div className="wrapper set">
                                            <i className="fa fa-plus-circle"></i>
                                         </div>
                                         <span className="temp-name">创建模板</span>
                                      </Link>
                                  </li>

                              </ul>
                        </div>
              </Modal>

             </div>


          )

      }

})

export default PCSideMenu;
