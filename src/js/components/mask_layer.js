import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Upload,Modal,Icon,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
var MaskLayer = React.createClass({
      getInitialState(){
          return {
            previewVisible: false,
            previewImage: '',
            fileList: [{
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
            tabPosition: 'left'

          }
      },
      handleCancel (){

        this.setState({ previewVisible: false })
      },
      handleChange({ fileList }){
          this.setState({ fileList })
      },
      render(){
            const { previewVisible, previewImage, fileList } = this.state;
            const uploadButton = (
              <div>
              添加头像

              </div>
            );
            return (
              <div className="mask-layers">
                {/*创建计划弹框START*/}
                    <div className="modal fade" id="creatPlanLayer" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog creatPlanLayer" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                              <h4 className="modal-title">创建计划</h4>
                            </div>
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
                                               <div className="show-more fl" data-toggle="modal" data-target="#createModal">
                                                  <div className="more-box">more</div>
                                                  <span className="type-caption">更多模板</span>
                                               </div>
                                          </div>
                                    </section>
                                    <section>
                                        <button type="button" className="btn" id="submitModal">创建计划</button>
                                    </section>

                              </div>

                          </div>
                        </div>
                    </div>
                    {/*创建模板弹框strat*/}
                      <div className="modal fade" id="createModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog createModal" role="document">
                              <div className="modal-content">
                                      <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                        <h4 className="modal-title">创建模板</h4>
                                      </div>
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
                              </div>
                            </div>
                      </div>
                    {/*创建模板弹框end*/}
                    {/*邀请好友 start*/}
                    <div className="modal fade" id="inviteFriends" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                          <div className="modal-dialog inviteFriends" role="document">
                            <div className="modal-content">
                                    <div className="modal-header">
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                      <h4 className="modal-title">邀请好友</h4>
                                    </div>
                                    <div className="invite-body">
                                        <div className="address-desc">您的专属邀请链接：</div>
                                                <div className="invite-address-box">
                                                    <input id="invite-address" className="form-control" readonly="" value="https://xxx.com/"/>
                                                    <span id="invite-copy-link">
                                                          复制
                                                    </span>
                                                </div>
                                                <div className="qrcode-container clearfix">
                                                    <div id="invite-qrcode" className="fl invite-qrcode">
                                                        <img src="/src/images/code.jpg"/>
                                                    </div>
                                                    <div className="fl qrcode-desc">
                                                        您的专属邀请二维码
                                                        <div>手机扫一扫</div>
                                                    </div>
                                              </div>
                                        </div>
                            </div>
                          </div>
                    </div>
                    {/*邀请好友 end*/}
                    {/*账户设置START*/}
                    <div className="modal fade" id="accountSet" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog accountSet" role="document">
                          <div className="modal-content">
                                <div className="accountSet-body clearfix">
                                      <div className="fl accountSet-l">
                                          <h4 className="appLeftHeader">个人设置</h4>
                                          <div className="leftWarp">
                                              <ul>
                                                    <li><i className="fa fa-user"></i>基本信息</li>
                                                    <li><i className="fa fa-lock"></i>账号密码</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="fl accountSet-r">

                                            <div className="basicInfoDetail">
                                                 <ul>
                                                    <li className="clearfix">
                                                       <span className="leftSpan myAvatar">头像</span>
                                                       <div className="rightContent">
                                                          <Upload action="//jsonplaceholder.typicode.com/posts/"
                                                             listType="picture-card"
                                                             fileList={fileList}
                                                             onPreview={this.handlePreview}
                                                             onChange={this.handleChange}
                                                           >
                                                             {fileList.length >= 3 ? null : uploadButton}
                                                           </Upload>
                                                           <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                             <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                           </Modal>
                                                        </div>
                                                    </li>
                                                      <li className="clearfix">
                                                       <span className="leftSpan">姓名</span>
                                                       <div className="realName rightContent">
                                                       <input className="form-control" type="text"/>
                                                      </div>
                                                    </li>
                                                    <li className="clearfix">

                                                        <button type="button" className="btn  btn-primary"  id="saveAvater">保存</button>
                                                    </li>

                                                 </ul>
                                            </div>

                                      </div>
                                 </div>
                          </div>
                        </div>
                      </div>
                    {/*账户设置END*/}
               </div>
             )

      }




})

export default MaskLayer;
