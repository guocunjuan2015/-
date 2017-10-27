import React from 'react';
import ReactDOM from 'react-dom';
var MyNews = React.createClass({
      render(){
            return (

                <div className="newsSlide">
                        <i className="fa fa-envelope fa-fw fl"></i>
                        <p className="fl newsNum">你有2条站内消息</p>
                        <i className="fr fa fa-commenting" aria-hidden="true"></i>
                </div>
            )

      }

})

export default MyNews;
