import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
var MyNews = React.createClass({
      render(){
            return (

                <div className="newsSlide">
                        <i className="fa fa-envelope fa-fw fl"></i>
                        <p className="fl newsNum"><Link to={`/sysInfos`}>你有2条站内消息</Link></p>
                        <i className="fr fa fa-commenting" aria-hidden="true"></i>
                </div>
            )

      }

})

export default MyNews;
