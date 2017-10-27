import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCSideMenu from './side_menu';
import PCUserNav from './user_nav';
import MyNews from './myNews';
var PCUserCenter = React.createClass({

      render(){


            return (

                  <div>
                      <PCUserNav/>
                      <PCSideMenu/>
                      <MyNews/>

                  </div>



            )




      }




})

export default PCUserCenter;
