/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
// async components
import {
    AsyncBasicTableComponent,
    AsyncDataTableComponent,
    AsyncResponsiveTableComponent,
    AsyncFixedColumnTableComponent,
    AsyncInlineTableComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Pages = ({ match }) => (
    <div className="content-wrapper">
        <Helmet>
        <title>Ambattur Fashion India Private Limited(AFIPL)</title>
					<meta name="description" content="Ambattur Fashion India Private Limited(AFIPL)" />
        </Helmet>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`} />
            <Route path={`${match.url}/basic`} component={AsyncBasicTableComponent} />
            <Route path={`${match.url}/data-table`} component={AsyncDataTableComponent} />
            <Route path={`${match.url}/responsive`} component={AsyncResponsiveTableComponent} />
            <Route path={`${match.url}/fixed-columns`} component={AsyncFixedColumnTableComponent} />
            <Route path={`${match.url}/inline-edit`} component={AsyncInlineTableComponent} />
        </Switch>
    </div>
);

export default Pages;
