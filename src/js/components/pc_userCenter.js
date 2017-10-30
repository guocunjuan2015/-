import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCUserNav from './user_nav';
import PCSideMenu from './side_menu';
import PCRightMenu from './right_menu';
import MyNews from './myNews';
var PCUserCenter = React.createClass({

      render(){


            return (

                  <div>
                      <PCUserNav/>
                      <PCSideMenu/>
                      <PCRightMenu/>
                      <MyNews/>

                  </div>



            )




      }




})

export default PCUserCenter;
