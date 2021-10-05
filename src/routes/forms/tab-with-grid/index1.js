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

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { NotificationContainer, NotificationManager } from 'react-notifications';



function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }

 
 class FormWithAccordionElement extends Component {
    state = {
		employeePayroll: null,
        activeIndex: 0
	}

    createNotification = (type) => {
        return () => {
           switch (type) {
              case 'info':
                 NotificationManager.info('Info message');
                 break;
              case 'success':
                 NotificationManager.success('Success message');
                 break;
              case 'warning':
                 NotificationManager.warning('Warning message');
                 break;
              case 'error':
                 NotificationManager.error('Error message');
                 break;
              default:
                 NotificationManager.success('Success message', 'Title here');
                 break;
           }
        };
     };

     handleChangeIndex(index) {
        this.setState({ activeIndex: index });
     }
  
     handleChange(event, value) {
        this.setState({ activeIndex: value });
     }
    componentDidMount() {
		this.getEmployeePayrolls();
	}

	// get employee payrols
	getEmployeePayrolls() {
		api.get('current_subscriptions')
			.then((response) => {
        console.log(response,'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
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
            <div className="formelements-wrapper main-layout-class">
                <PageTitleBar title={<IntlMessages id="sidebar.simpleform" />} match={this.props.match} />
                <Accordion>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
						<Typography>Add Category</Typography>
					</AccordionSummary>
					<AccordionDetails>
                                  
                    <div className="col-sm-12 col-md-12 col-xl-12">
                    
                    <RctCollapsibleCard heading="">


                    <div className="col-sm-3 col-md-3 col-xl-4 float-right pr-0">
								<Form> 
                  
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-warning  mb-10 text-white btn-icon pull-right b-sm mr-0" tabindex="0" type="button" onClick={this.createNotification('warning')}><span className="MuiButton-label">Warning <i className="zmdi zmdi-delete"></i></span><span className="MuiTouchRipple-root"></span></button>
                               
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 mb-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={this.createNotification('error')}><span className="MuiButton-label">Error <i className="zmdi zmdi-alert-circle"></i></span><span className="MuiTouchRipple-root"></span></button>
                              
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={this.createNotification('success')}><span className="MuiButton-label">save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                               
                </Form>                               
							</div>


                            <div className="clearfix"></div>
						<div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="skucode" fullWidth label="SKU Code" placeholder="SKU Code"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="Category" fullWidth label="Category" placeholder="Category"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Sub Category</InputLabel>
                    <Select value={this.state.age} onChange={this.handleChange}
                      inputProps={{ name: 'age', id: 'age-simple', }}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Product Name</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
						</div>

						<div className="row new-form mb-10">
							<div className="col-sm-6 col-md-6 col-xl-3">
							  <div className="form-group">
                    <TextField error id="error" fullWidth label="Error message will be displayed here" defaultValue="Hello World" />
                </div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="HSN Code" placeholder="HSN Code"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Selling Method</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>		
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Piece Quantity" placeholder="Piece Quantity"/>
								</div>
							</div>				
						</div>
         
            
                        <AppBar position="static" color="default">
                            <Tabs
                                value={this.state.activeIndex}
                                onChange={(e, value) => this.handleChange(e, value)}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                            >
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={'x'}
                            index={this.state.activeIndex}
                            onChangeIndex={(index) => this.handleChangeIndex(index)}>
                            <TabContainer>

                            
              <div className="clearfix"></div>
						<div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="skucode" fullWidth label="SKU Code" placeholder="SKU Code"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="Category" fullWidth label="Category" placeholder="Category"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Sub Category</InputLabel>
                    <Select value={this.state.age} onChange={this.handleChange}
                      inputProps={{ name: 'age', id: 'age-simple', }}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Product Name</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
						</div>

						<div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
							  <div className="form-group">
                    <TextField error id="error" fullWidth label="Error message will be displayed here" defaultValue="Hello World" />
                </div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="HSN Code" placeholder="HSN Code"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Selling Method</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>		
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Piece Quantity" placeholder="Piece Quantity"/>
								</div>
							</div>				
						</div>
            <div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Sales Price" placeholder="Sales Price"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="HSN Code" placeholder="HSN Code"/>
								</div>
							</div>
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Piece Quantity" placeholder="Piece Quantity"/>
								</div>
							</div>		
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Size</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>              		
						</div>
            <div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Colors</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Material Type</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">UOM</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>		
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Item Type</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>              		
						</div>
            
            <div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <TextField id="name" fullWidth label="Barcode" placeholder="Barcode"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Size</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <TextField id="name" fullWidth label="Barcode" placeholder="Barcode"/>
								</div>
							</div>		
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Size</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>              		
						</div>
            <div className="row new-form">
							<div className="col-sm-9 col-md-9 col-xl-8">
                <FormGroup row>
                  {/* <Label for="Email-5" sm={2}>Comments</Label> */}
                  {/* <Col sm={10}>
                    <textarea className="form-control" fullWidth label="Comments" placeholder="Comments" bsSize="lg"/>										
                  </Col> */}
                </FormGroup>
              </div>
             
            </div>

                            </TabContainer>
                            <TabContainer>
                                
                            <div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="skucode" fullWidth label="SKU Code" placeholder="SKU Code"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="Category" fullWidth label="Category" placeholder="Category"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Sub Category</InputLabel>
                    <Select value={this.state.age} onChange={this.handleChange}
                      inputProps={{ name: 'age', id: 'age-simple', }}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Product Name</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
						</div>

                            </TabContainer>
                            <TabContainer>
                                
                            <div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Sales Price" placeholder="Sales Price"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="HSN Code" placeholder="HSN Code"/>
								</div>
							</div>
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Piece Quantity" placeholder="Piece Quantity"/>
								</div>
							</div>		
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Size</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>              		
						</div>

                            </TabContainer>
                        </SwipeableViews>
                    </RctCollapsibleCard>
                </div>
					</AccordionDetails>
				</Accordion>
               <br/>

                <div className="row">   
                    <div className="col-sm-12 col-md-12 col-xl-12">
                    <RctCollapsibleCard heading="" fullBlock>
                        <Accordion>
                            <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                <Typography>Category List</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* <RctCollapsibleCard heading="" fullBlock> */}
                                <MUIDataTable
                                    // title={"Category List"}
                                    data={data}
                                    columns={columns}
                                    options={options}
                                />
                                {/* </RctCollapsibleCard> */}
                            </AccordionDetails>
                        </Accordion>
                        </RctCollapsibleCard>
					</div>
                </div>
            </div>
   );
 };
}
 export default FormWithAccordionElement;
 
 