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
 
 class AdvanceFormElement extends Component {
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
            <div className="formelements-wrapper">
                <PageTitleBar title={<IntlMessages id="sidebar.simpleform" />} match={this.props.match} />
                 <div className="row">                
                    <div className="col-sm-12 col-md-12 col-xl-12">
                    <RctCollapsibleCard heading="Add Category">
                    <div className="row">
							<div className="col-sm-6 col-md-6 col-xl-4">
                                <div className="form-group">
                                    <TextField id="Category Name" fullWidth label="Category Name" value=''  placeholder="Category Name"/>
                                </div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-4">
								<div className="form-group">
								<TextField id="name" fullWidth label="Category Description" placeholder="Category Description"/>
								</div>
							</div>	
                            <div className="col-sm-6 col-md-6 col-xl-4">
								<Form>
                                                            
                                <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                                    <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Reset <i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>                     
                                </div>
                                <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                                    <div className="form-group">
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Save <i class="zmdi zmdi-mail-send"></i></span><span class="MuiTouchRipple-root"></span></button>
                                    </div>                       
                                </div>    
                                </Form>                               
							</div>											
						</div>
                    </RctCollapsibleCard>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-xl-12">
                    <RctCollapsibleCard heading="Category List">
                        <div className="row">
                        <div className="table-responsive">
						    <Table>
                                <TableHead>
                                    <TableRow hover>
                                        <TableCell>Category Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <Fragment>
                                    {employeePayroll && employeePayroll.map((employee, key) => (
                                            <TableRow hover key={key}>
                                                <TableCell>
                                                    <Media>
                                                        {/* <Media left>
                                                            <Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />
                                                        </Media> */}
                                                        <Media body><h5 className="m-0 pt-15">{employee.employeeName}</h5></Media>
                                                    </Media>
                                                </TableCell>
                                                <TableCell>{employee.designation}</TableCell>
                                                {/* <TableCell>${employee.salary}</TableCell> */}
                                                {employee.status === 1 ?
                                                    <TableCell><Badge color="success">Done</Badge></TableCell>
                                                    : <TableCell><Badge color="warning">Done</Badge></TableCell>
                                                }
                                                <TableCell>
                                                    <IconButton className="text-success" aria-label="Delete"><i className="zmdi zmdi-check-all"></i></IconButton>
                                                    <IconButton className="text-danger" aria-label="Add an alarm"><i className="zmdi zmdi-close"></i></IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </Fragment>
                                </TableBody>
                            </Table>
                            </div>
                            </div>
                    </RctCollapsibleCard>
					</div>
            </div>
   );
 };
}
 export default AdvanceFormElement;
 
 