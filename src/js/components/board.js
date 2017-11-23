import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from 'antd';

var Board = React.createClass({
      getInitialState(){

        return {
            modal1Visible: false,
            modal2Visible: false,
            templates : '',
            isShow: true,
            isAddCard:false
        }

      },
      //添加模板
      handleAddCard(){

          this.setState({

                isAddCard: !this.state.isAddCard

          })

          if(this.state.isAddCard == false){

            $(".addCard-container").show(500);
            $(".addCard-ul").hide(500);
          }


      },
      //取消自定义模板
      cancelAddCard(){

          $(".addCard-container").hide(500);
            $(".addCard-ul").show(500);

      },
      render(){

            return (
              <div className="kanban-template-manage">
                  <div className="template-header">
                        <h5>自定义模板</h5>
                  </div>
                  <div className="template-body">
                        <div className="addCard" onClick={this.handleAddCard}>
                                <ul className="addCard-ul">
                                <li><i className="fa fa-plus-circle"></i><span>新建卡片</span></li>
                              </ul>
                              <div className="addCard-container">
                                <input type="text" className="form-control" placeholder="卡片名称"/>
                                <span className="btn">创建</span>
                                <span className="btn btn-primary cancel" onClick={this.cancelAddCard}>取消</span>
                              </div>
                        </div>
                    </div>
              </div>

            )

      }




})

export default Board;
