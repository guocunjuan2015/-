import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'antd';//走马灯效果

var MobileInfoContainer = React.createClass({



        render (){
          const settings = {
              dots:true,
              infinite:true,
              speed:500,
              slidesToShow:1,
              autoplay:true
          };
            return (
                <div>
                      <div className="container">

                            <div className="carousel">
                                <Carousel {...settings}>
                                        <div className="carousel1"></div>
                                        <div className="carousel1"></div>
                                        <div className="carousel1"></div>
                                        <div className="carousel1"></div>
                                </Carousel>

                            </div>
                      </div>
                </div>

            )



        }
})
export default MobileInfoContainer;
