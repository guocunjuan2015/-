import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs,Form,Button,Input,Icon,Link} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
var PCCreatePlan = React.createClass({

        render (){

                return (

                    <div>
                        <PCHeader/>
                        <PCFooter/>
                    </div>

                )

        }

})

export default PCCreatePlan;
