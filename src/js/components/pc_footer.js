import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
var PCFooter = React.createClass({

        render(){

              return (
                  <div className="container-bottom">
                        <footer className="clear">
                            <ul >
                                  <li><Link to={`/pc_aboutUs`}>关于我们 </Link></li>
                                  <li><Link to={`/pc_privacy`}>合作伙伴 </Link> </li>
                                  <li><Link to={`/pc_privacy`}>隐私声明 </Link></li>
                            </ul>
                            <p>  &copy;&nbsp;2017 藏书阁版权所有;</p>
                        </footer>
                   </div>

              )

        }

})

export default PCFooter;
