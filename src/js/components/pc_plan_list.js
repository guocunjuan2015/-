import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs,Form,Button,Input,Icon,Link} from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
var PCPlanList = React.createClass({

        render (){

                return (

                  <div>
                      <PCHeader/>
                      <PCFooter/>
                  </div>

                )

        }

})

export default PCPlanList;
