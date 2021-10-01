/**
 * Forms Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import 'font-awesome/css/font-awesome.min.css';
// async components
import {
	AsyncFormElementsComponent,
	AsyncTextFieldComponent,
	AsyncSelectListComponent,
	AsyncTabFormsComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Forms = ({ match }) => (
	<div className="content-wrapper">
		<Helmet>
			<title>Ambattur Fashion India Private Limited(AFIPL)</title>
			<meta name="description" content="Ambattur Fashion India Private Limited(AFIPL)" />
		</Helmet>
		<Switch>
			<Redirect exact from={`${match.url}/`} to={`${match.url}/form-elements`} />
			<Route path={`${match.url}/form-elements`} component={AsyncFormElementsComponent} />
			<Route path={`${match.url}/text-field`} component={AsyncTextFieldComponent} />
			<Route path={`${match.url}/select-list`} component={AsyncSelectListComponent} />
			<Route path={`${match.url}/tabs`} component={AsyncTabFormsComponent} />
		</Switch>
	</div>
);

export default Forms;
