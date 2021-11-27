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
     AsyncStyleAddComponent,
     AsyncStyleEditComponent, 
     AsyncStyleListComponent,
     AsyncSinglewindowComponent,
     AsyncRequestGridOverallComponent,	
	AsyncRequestGridStyleComponent,
    AsyncRequeststatusComponent,
    AsyncProductionRequestComponent,
    AsyncProductivityGridComponent,
    AsyncItemmasterGridComponent,
    AsyncItemCreatinComponent,
    AsyncSinglewindowEditComponent,
    AsyncPdtamasterComponent,
	AsyncPdbuyertaComponent,
	AsyncPdinternaltaComponent

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
             <Route path={`${match.url}/style/:styleid`} component={AsyncStyleEditComponent} />
             <Route path={`${match.url}/style-list`} component={AsyncStyleListComponent} />
             <Route path={`${match.url}/single-window/:swid`} component={AsyncSinglewindowComponent} />
             <Route path={`${match.url}/single-window`} component={AsyncSinglewindowComponent} />
             <Route path={`${match.url}/request-grid`} component={AsyncRequestGridOverallComponent} />	
             <Route path={`${match.url}/request-style-list/:styleno`} component={AsyncRequestGridStyleComponent} />
             <Route path={`${match.url}/request-style-list`} component={AsyncRequestGridStyleComponent} />
             <Route path={`${match.url}/request-status`} component={AsyncRequeststatusComponent} />
             <Route path={`${match.url}/production-request`} component={AsyncProductionRequestComponent} />
             <Route path={`${match.url}/productivity-grid`} component={AsyncProductivityGridComponent} />	
             <Route path={`${match.url}/itemmaster-grid`} component={AsyncItemmasterGridComponent} />	
             <Route path={`${match.url}/item-creation`} component={AsyncItemCreatinComponent} />
             <Route path={`${match.url}/singlewindow/:swid`} component={AsyncSinglewindowEditComponent} />
             <Route path={`${match.url}/pd-ta-master`} component={AsyncPdtamasterComponent} />
             <Route path={`${match.url}/pd-buyer-ta`} component={AsyncPdbuyertaComponent} />
             <Route path={`${match.url}/pd-internal-ta`} component={AsyncPdinternaltaComponent} />
         </Switch>
     </div>
 );
 
 export default Productions;
 