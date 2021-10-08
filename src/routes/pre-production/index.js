/**
 * Tables Routes
 */
 import React from 'react';
 import { Redirect, Route, Switch } from 'react-router-dom';
 import { Helmet } from "react-helmet";
 // async components
 import {
     AsyncForecastComponent,
     AsyncForecastlistComponent,
     AsyncForecastAddComponent,
     AsyncStyleAddComponent
 } from 'Components/AsyncComponent/AsyncComponent';
 
 //console.log(match.url); 
 const Productions = ({ match }) => (
     
     <div className="content-wrapper">
         <Helmet>
         <title>Ambattur Fashion India Private Limited(AFIPL)</title>
                     <meta name="description" content="Ambattur Fashion India Private Limited(AFIPL)" />
         </Helmet>
         <Switch>
             <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`} />
             <Route path={`${match.url}/forecasting`} component={AsyncForecastlistComponent} />
             <Route path={`${match.url}/add-forecasting`} component={AsyncForecastAddComponent} />
             <Route path={`${match.url}/style-creation`} component={AsyncStyleAddComponent} />
         </Switch>
     </div>
 );
 
 export default Productions;
 