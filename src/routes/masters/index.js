import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

import {
AsyncMastersComponent ,
   AsyncUDMasterComponent,
   AsyncUDMasterTypeComponent 
 } from 'Components/AsyncComponent/AsyncComponent';

  //console.log(match.url); 
  const Masters = ({ match }) => (
     
    <div className="content-wrapper">
        <Helmet>
           <title>Ambattur Fashion India Private Limited(AFIPL)</title>
           <meta name="description" content="Ambattur Fashion India Private Limited(AFIPL)" />
        </Helmet>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`} />
            <Route path={`${match.url}/ud-master-type`} component={AsyncUDMasterTypeComponent} />
            <Route path={`${match.url}/ud-master`} component={AsyncUDMasterComponent} />
        </Switch>
    </div>
);

export default Masters;