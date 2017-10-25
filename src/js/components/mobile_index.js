import React from 'react';
import ReactDOM from 'react-dom';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileInfoContainer from './mobile_infocontainer';
var MobileIndex = React.createClass({

        render (){

                return (

                  <div>
                          <MobileHeader/>
                          <MobileInfoContainer/>
                          <MobileFooter/>
                  </div>

                )

        }

})

export default MobileIndex;
