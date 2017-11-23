import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';

var SysInfos = React.createClass({
      getInitialState(){

        return {
            modal1Visible: false,
            modal2Visible: false,

        }

      },

      render(){

            return (
              <div className="newList table-responsive">
                  <table className="table table-hover">
                      <thead>
                          <tr>
                            <th>消息标题</th>
                            <th>内容</th>
                            <th>时间</th>
                           </tr>
                      </thead>
                      <tbody>
                            <tr>
                                  <td><i className="fa fa-folder-open"></i>单独的表单控件会被自动赋予一些全局样式</td>
                                  <td><div>单独的表单控件会被自动赋予一些全局样式单独的表单控件会被自动赋予一些全局样式</div></td>
                                  <td>2017-09-01 09:50:15</td>
                            </tr>
                            <tr>
                                  <td><i className="fa fa-envelope-o"></i>单独的表单控件会被自动赋予一些全局样式</td>
                                  <td><div>单独的表单控件会被自动赋予一些全局样式单独的表单控件会被自动赋予一些全局样式</div></td>
                                  <td>2017-09-01 09:50:15</td>
                            </tr>
                            <tr>
                                  <td><i className="fa fa-folder-open"></i>单独的表单控件会被自动赋予一些全局样式</td>
                                  <td><div>单独的表单控件会被自动赋予一些全局样式单独的表单控件会被自动赋予一些全局样式</div></td>
                                  <td>2017-09-01 09:50:15</td>
                            </tr>
                      </tbody>
                  </table>
              </div>

            )

      }




})

export default SysInfos;
