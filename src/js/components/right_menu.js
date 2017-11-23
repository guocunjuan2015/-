import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Modal,Card} from 'antd';
/*import createPlaneModal from './createPlaneModal';*/
var PCRightMenu = React.createClass({

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
              <div className="container-right">
                  <Card style={{ width: '100%' }}>
                        <div>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                  </Card>
              </div>

            )

      }




})

export default PCRightMenu;
