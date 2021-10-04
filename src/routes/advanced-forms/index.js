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

 import MUIDataTable from "mui-datatables";
 
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

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

 
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
        const columns = ["Category Name", "Description", "Location", "Code", "Amount"];
        const data = [
            ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
            ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
            ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
            ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
            ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
            ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
            ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
            ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
            ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
            ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
            ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
            ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
            ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
            ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
            ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
            ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
            ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
            ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
            ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
            ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
            ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
            ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
            ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
            ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
            ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
            ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
            ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
            ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
            ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
            ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
        ];
        const options = {
            filterType: 'dropdown'
        };
        return (
            <div className="formelements-wrapper">
                <PageTitleBar title={<IntlMessages id="sidebar.simpleform" />} match={this.props.match} />
                <Accordion>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
						<Typography>Add Category</Typography>
					</AccordionSummary>
					<AccordionDetails>
                                  
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
                            {/* <div className="col-sm-6 col-md-6 col-xl-4">
								<Form>                                                            
                                <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                                    <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Reset <i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>                     
                                </div>
                                <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                                    <div className="form-group">
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Save <i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>
                                    </div>                       
                                </div>    
                                </Form>                               
							</div>											 */}
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="row m-btop">                                                            
                                <div className="col-sm-6 col-md-6 col-xl-6">      
                                <div className="form-group">               
                                    <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 mb-10 text-white btn-icon col-12" tabindex="0" type="button"><span class="MuiButton-label">Reset <i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>                     
                                </div></div>
                                <div className="col-sm-6 col-md-6 col-xl-6">                     
                                    <div className="form-group">
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon col-12" tabindex="0" type="button"><span class="MuiButton-label">Save <i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>
                                    </div>                       
                                </div>    
                                      </div>                       
							</div>	
						</div>
                    </RctCollapsibleCard>
                </div>
					</AccordionDetails>
				</Accordion>
               <br/>

                <div className="row">   
                <div className="col-sm-12 col-md-12 col-xl-12">
                    <RctCollapsibleCard heading="" fullBlock>
					 <MUIDataTable
						 title={"Category List"}
						 data={data}
						 columns={columns}
						 options={options}
					 />
				    </RctCollapsibleCard>

					</div>
            </div>
            </div>
   );
 };
}
 export default AdvanceFormElement;
 
 