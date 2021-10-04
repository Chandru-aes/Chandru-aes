/**
 * Simple Line Icons
 */
 import React, { Component, Fragment } from 'react';
 import api from 'Api';
 import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col,
	FormFeedback
} from 'reactstrap';

import { Media, Badge } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 import TextField from '@material-ui/core/TextField';
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 import 'font-awesome/css/font-awesome.min.css';
 
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 import { Carousel } from 'react-responsive-carousel';
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'font-awesome/css/font-awesome.min.css';
import FormattedInputs from '../customized-form/formated-input';

 
 class CustomizedFormElement extends Component {
    state = {
		employeePayroll: null
	}

    componentDidMount() {
		this.getEmployeePayrolls();
	}

	// get employee payrols
	getEmployeePayrolls() {
		api.get('employeePayrols.js')
			.then((response) => {
				this.setState({ employeePayroll: response.data });
			})
			.catch(error => {
				// error handling
			})
	}
    render() {
        const { employeePayroll } = this.state;
		const { match } = this.props;
        return (
            <div className="formelements-wrapper main-layout-class">
                <PageTitleBar title={<IntlMessages id="simpleform" />} match={this.props.match} />
                 <div className="row">                
                    <div className="col-sm-12 col-md-12 col-xl-12">
                    <RctCollapsibleCard heading="">
                        <FormattedInputs />
                    </RctCollapsibleCard>
                    </div>
                </div>               
            </div>
   );
 };
}
 export default CustomizedFormElement;
 
 