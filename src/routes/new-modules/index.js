import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
// intl messages
import IntlMessages from 'Util/IntlMessages';
 
//class NewList extends React.Component {
export default class NewList1 extends Component {
   render() {
      return (
         <div className="blank-wrapper">
           <Helmet>
              <title>name page</title>
              <meta name="description" content="Reactify Blank Page" />
           </Helmet>
          <PageTitleBar title={<IntlMessages id="NewList" />} match={this.props.match} />
        </div>
      );
   }
}