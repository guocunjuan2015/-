import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,browserHistory} from 'react-router';
import {Button} from 'antd';
import PCIndex from './components/pc_index';
import PCLogin from './components/pc_login';
import PCRegister from './components/pc_register';
import PCUserCenter from './components/pc_userCenter';
import PCCreatePlan  from './components/pc_create_plan';
import PCPlanList  from './components/pc_plan_list';
import ForgetPassword from './components/pc_forgetPassword';
import MobileIndex from './components/mobile_index';
import PCAboutUs from './components/pc_aboutUs';
import PCPrivacy from './components/pc_privacy';
import MediaQuery from 'react-responsive';//react自适应

import 'antd/dist/antd.css';

var Root = React.createClass ({

      render(){

              return (
              <div>
                    <MediaQuery query='(min-device-width: 1224px)'>
                        <Router history={hashHistory}>
                                <Route path="/" component={PCIndex} ></Route>
                                <Route path="/pcLogin" component={PCLogin}></Route>
                                <Route path="/pcRegister" component={PCRegister}></Route>
                                <Route path="/pcCreatePlan" component={PCCreatePlan}></Route>
                                <Route path="/pcPlanList" component={PCPlanList}></Route>
                                <Route path="/pusercenter" component={PCUserCenter}></Route>
                                <Route path="/forgetPassword" component={ForgetPassword}></Route>
                                <Route path="/pc_aboutUs" component={PCAboutUs}></Route>
                                <Route path="/pc_privacy" component={PCPrivacy}></Route>
                        </Router>
                    </MediaQuery>

                  <MediaQuery query='(max-device-width: 1224px)'>
                        <Router history={hashHistory}>
                              <Route path="/" component={MobileIndex}></Route>

                        </Router>
                    </MediaQuery>
                </div>

            )



      }
})

ReactDOM.render(<Root/>,document.getElementById('mainContainer'));
export default Root;
