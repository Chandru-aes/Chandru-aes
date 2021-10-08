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
	// Input,
	FormText,
	Col,
	FormFeedback
} from 'reactstrap';
import Input from '@material-ui/core/Input';
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
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }

 
 class MenurightsElement extends Component {
    state = {
		employeePayroll: null,
        activeIndex: 0,
        name: ''
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
        const columns = ["Buyer Code", "BuyDivCode", "DivName"];
        const data = [
            ["2","12","Master","Menu","Menu/master","Admin"],
            ["3","22","Master","Menu","Menu/master","Admin"],
            ["4","32","Master","Menu","Menu/master","Admin"],
            ["5","42","Master","Menu","Menu/master","Admin"],
            ["6","52","Master","Menu","Menu/master","Admin"],
            ["7","62","Master","Menu","Menu/master","Admin"],
            ["8","72","Master","Menu","Menu/master","Admin"],
            ["9","82","Master","Menu","Menu/master","Admin"],
            ["2","12","Master","Menu","Menu/master","Admin"],
            ["3","22","Master","Menu","Menu/master","Admin"],
            ["4","32","Master","Menu","Menu/master","Admin"],
            ["5","42","Master","Menu","Menu/master","Admin"],
            ["6","52","Master","Menu","Menu/master","Admin"],
            ["7","62","Master","Menu","Menu/master","Admin"],
            ["8","72","Master","Menu","Menu/master","Admin"],
            ["9","82","Master","Menu","Menu/master","Admin"]
        ];
        const options = {
            filterType: 'dropdown'
        };
        return (
            <div className="formelements-wrapper main-layout-class">
                {/* <PageTitleBar title={"Menu<IntlMessages id="sidebar.simpleform" />} match={this.props.match} /> */}
                 <PageTitleBar title="Menu" match={this.props.match} />
                <Accordion>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                        <div className="acc_title_font">
						    <Typography>Add Menu</Typography>
                        </div>
					</AccordionSummary>
					<AccordionDetails> 
                                  
                    <div className="col-sm-12 col-md-12 col-xl-12 p-0">
                    
                    <RctCollapsibleCard heading="">

 
                    <div className="w-50 float-right pr-0 but-tp">
								<Form> 
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={this.createNotification('success')}><span className="MuiButton-label">save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger  text-white btn-icon pull-right b-sm mr-10" tabindex="0" type="button" onClick={this.createNotification('warning')}><span className="MuiButton-label">Cancel <i className="zmdi zmdi-close"></i></span><span className="MuiTouchRipple-root"></span></button>
{/*                               
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={this.createNotification('error')}><span className="MuiButton-label">Report <i className="zmdi zmdi-file"></i></span><span className="MuiTouchRipple-root"></span></button>
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon pull-right b-md mr-10" tabindex="0" type="button" onClick={this.createNotification('warning')}><span className="MuiButton-label">Menu <i className="zmdi zmdi-menu"></i></span><span className="MuiTouchRipple-root"></span></button> */}
                               
                </Form>                               
							</div>


                            <div className="clearfix"></div>
					

                        <div className="row new-form">

                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="age-simple">Module</InputLabel>
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
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="age-simple">Menu Type</InputLabel>
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
 
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                               
                                <div className="form-group">
                                    
                                    <TextField id="menuname" fullWidth label="Menu Name" type="text" />
                                </div>
                                
                                </div>

                               
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="age-simple">Parent Menu ID</InputLabel>
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
                                
                        </div>


                        <div className="row new-form">

                            {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                
                                <FormControl disabled fullWidth>
                                    <InputLabel htmlFor="name-disabled">Menu URL</InputLabel>
                                    <Input id="name-disabled" value={this.state.name} onChange={this.handleChange} />
                                  
                                </FormControl>
                            
                            </div> */}
                            <div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">                              
                               <div className="form-group">                                   
                                   <TextField id="menudesc" fullWidth label="Menu Desc" type="text" />
                               </div>                               
                            </div> 
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">                              
                               <div className="form-group">                                   
                                   <TextField id="menuurl" fullWidth label="Menu URL" type="text" />
                               </div>                               
                            </div>

                            

                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">                              
                               <div className="form-group">                                   
                                   <TextField id="dispalyindex" fullWidth label="Display Index" type="text" />
                               </div>                               
                            </div> 

                            </div>

                            <div className="row new-form">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <FormControlLabel control={<Checkbox color="primary" value="active" />} label="Active" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <FormControlLabel control={<Checkbox color="primary" value="isparent" />} label="IsParent" />
                                    </div>
                                </div>

                            </div>
                            
						
         
            
                        {/* <AppBar position="static" color="default">
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
                        </AppBar> */}
                        
                    </RctCollapsibleCard>
                </div>
					</AccordionDetails>
				</Accordion>
               <br/>

                <div className="row ">   
                {/* d-tbl-sp  */}
                    <div className="col-sm-12 col-md-12 col-xl-12">
                    <RctCollapsibleCard heading="" fullBlock>
                        <Accordion>
                            <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                            <div className="acc_title_font">
                                <Typography>Menu</Typography>
                            </div>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div className="float-right tbl-filter-btn">
                                                <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="Search" data-testid="Search-iconButton" title="Search">
                            
                                    <span class="MuiIconButton-label">
                            
                            
                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                            
                                    </span>
                            
                                </button>
                            
                                <button class="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Download CSV-iconButton" aria-label="Download CSV" title="Download CSV">
                            
                            <span class="MuiIconButton-label">
                            
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path>
                                </svg></span>
                            
                            
                            
                            
                            </button>
                            <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="Print-iconButton" aria-label="Print">
                            
                                            <span class="MuiIconButton-label">
                            
                                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
                                                </svg></span></button>
                            
                                                <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="View Columns-iconButton" aria-label="View Columns">
                            
                            
                            
                                                    <span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>
                                            </svg></span></button>
                            
                                            <button class="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Filter Table"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                                            </svg></span></button>
                            </div>
                            <table className="table">
                                <thead className="thead-light">
                                    <th className="text-center w-10">Actions</th>
                                    <th className="text-center w-10">Menu ID</th>
                                    <th className="text-center w-10">ParentMenuID</th>
                                    <th className="w-10" >Menu Type</th>
                                    <th className="" >Menu Name</th>
                                    <th className="" >Menu URL</th>
                                    <th className="">Module</th>
                                </thead>
                                <tbody>
                                {data.map(n => {
                                    
										 return (
                                            <tr>
                                               
                                                <td className="text-center"><button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={this.createNotification('warning')}><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={this.createNotification('success')}><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                                </td>
                                                <td className="text-center"> {n[0]}</td>
                                                <td className="text-center">{n[1]}</td>
                                                <td>{n[2]}</td>
                                                <td>{n[3]}</td>
                                                <td>{n[4]}</td>
                                                <td>{n[5]}</td>
                                               
                                            </tr>
										 );
									 })}

                                
                                </tbody>
                            </table>
                            <div className="row tb-pro mt-10">
                                <div className="w-100">
                                    <div className="w-25 float-left">
                                        <div className="form-group">
                                            <div className="w-50 float-left text-center">
                                                <label for="exampleFormControlSelect1">Rows per page</label>
                                            </div>
                                            <div className="w-25 float-left">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>50</option>
                                                    <option>100</option>
                                                    <option>150</option>
                                                    <option>200</option>
                                                    <option>250</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-25 float-right">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-end">
                                                <li className="page-item ">
                                                {/* disabled */}
                                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">.&nbsp;&nbsp;.&nbsp;&nbsp;.</a></li>
                                                <li className="page-item"><a className="page-link" href="#">100</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            
                            
                                {/* <RctCollapsibleCard heading="" fullBlock> */}
                                {/* <MUIDataTable
                                    // title={"Category List"}
                                    data={data}
                                    columns={columns}
                                    options={options}
                                /> */}
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
 export default MenurightsElement;
 
 