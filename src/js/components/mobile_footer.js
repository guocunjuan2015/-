import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
var MobileFooter = React.createClass({


  render(){

        return (


              <div>
                  <footer>
                      <ul>
                            <li><Link to={`/pc_aboutUs`}>关于我们 </Link></li>
                            <li>合作伙伴 </li>
                            <li></li>
                      </ul>
                      <p>  &copy;&nbsp;2017 藏书阁版权所有;</p>
                  </footer>


              </div>



        )





  }



})

export default MobileFooter;
