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
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
 
// import OutlinedInput from '@mui/material/OutlinedInput';

// import ListItemText from '@mui/material/ListItemText';


function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }


//  const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

 
 class UserbuyerrightsElement extends Component {
    state = {
		employeePayroll: null,
        activeIndex: 0,
        userlevel:''
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

     handleChangeradio = (event) => {
        this.setState({ userlevel:  event.currentTarget.value });        
       
     }

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

        // const [personName, setPersonName] = React.useState([]);

        // const handleChange = (event) => {
        //     const {
        //     target: { value },
        //     } = event;
        //     setPersonName(
        //     // On autofill we get a the stringified value.
        //     typeof value === 'string' ? value.split(',') : value,
        //     );
        // };
        
        const { employeePayroll } = this.state;
		const { match } = this.props;
        const columns = ["Buyer Code", "BuyDivCode", "DivName"];
        const data = [
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"],
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"],
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"],
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"],
            ["BASIC","BASIC","BASICS"],
            ["BASIC","BASIC","BASICS"],
            ["BASIC","BASIC","BASICS"],
            ["BASSP","BASSP","BASS PRO"],
            ["BASSP","BASSP","BASS PRO"],
            ["BASSP","BASSP","BASS PRO"],
            ["BASSP","BASSP","BASS PRO"],
            ["BASSP","BASSP","BASS PRO"],
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"],
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"],
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"], 
            ["BASIC","BASIC","BASICS"],
            ["BASIC","BASIC","BASICS"],
            ["BASIC","BASIC","BASICS"],
            ["BASIC","BASIC","BASICS"],    
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"],
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"],   
            ["BASIC","BASIC","BASICS"],
            ["BASIC","BASIC","BASICS"],
            ["BASIC","BASIC","BASICS"],   
            ["BASSP","BASSP","BASS PRO"],
            ["BASSP","BASSP","BASS PRO"],
            ["BASSP","BASSP","BASS PRO"],
            ["BASSP","BASSP","BASS PRO"],
            ["BASSP","BASSP","BASS PRO"],
            ["AT","ATLOS","ANN TAYOLR LOFT OUTLET STORES"]
        ];
        const options = {
            filterType: 'dropdown'
        };
        return (
            <div className="formelements-wrapper main-layout-class">
                {/* <PageTitleBar title={"User Buyer Rights<IntlMessages id="sidebar.simpleform" />} match={this.props.match} /> */}
                 <PageTitleBar title="User Buyer Rights" match={this.props.match} />
                <Accordion>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                        <div className="acc_title_font">
						    <Typography>User Buyer Rights</Typography>
                        </div>
					</AccordionSummary>
					<AccordionDetails> 
                                  
                    <div className="col-sm-12 col-md-12 col-xl-12 p-0">
                    
                    <RctCollapsibleCard heading="">

 
                    <div className="col-sm-3 col-md-3 col-xl-4 float-right pr-0 but-tp">
                   
                    
								<Form> 
                  
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-warning  mb-10 text-white btn-icon pull-right b-sm mr-0" tabindex="0" type="button" onClick={this.createNotification('warning')}><span className="MuiButton-label">Warning <i className="zmdi zmdi-delete"></i></span><span className="MuiTouchRipple-root"></span></button>
                               
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 mb-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={this.createNotification('error')}><span className="MuiButton-label">Error <i className="zmdi zmdi-alert-circle"></i></span><span className="MuiTouchRipple-root"></span></button>
                              
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={this.createNotification('success')}><span className="MuiButton-label">save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                               
                </Form>                               
							</div>


                            <div className="clearfix"></div>
						<div className="row new-form">
                            <div className="col-lg-5 col-md-3 col-sm-6 col-xs-12 p-0 mt-15">
                                <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <InputLabel htmlFor="age-simple" className="pl-15 pt-10">User Level :</InputLabel>
                            </div>
                                
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
                                <RadioGroup row aria-label="anchorReference" name="anchorReference">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <FormControlLabel color="primary" value="singleuser" control={<Radio onChange={this.handleChangeradio} />} label="Single User" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <FormControlLabel color="primary" value="copyuser" control={<Radio  onChange={this.handleChangeradio} />} label="Copy User" />
                                    </div>
                                </RadioGroup>

                                </div>
                                {/* <select className="selectpicker" data-show-subtext="true" data-live-search="true">
                        <option data-subtext="Rep California">Tom Foolery</option>
                        <option data-subtext="Sen California">Bill Gordon</option>
                        <option data-subtext="Sen Massacusetts">Elizabeth Warren</option>
                        <option data-subtext="Rep Alabama">Mario Flores</option>
                        <option data-subtext="Rep Alaska">Don Young</option>
                        <option data-subtext="Rep California" disabled="disabled">Marvin Martinez</option>
                    </select> */}



                                
                            </div>
                            </div>
							
					
                            {/* <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                                <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                    </MenuItem>
                                ))} 
                                </Select>
                            </FormControl> */}


                            {(() => {
                           
                             if (this.state.userlevel == 'copyuser') {
                            return (
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">                                        
                                                <select className="form-control select2">
                                                    <option>From User</option> 
                                                    <option>User 1</option> 
                                                    <option>Test User</option> 
                                                    <option>Admin</option> 
                                                    <option>User 2</option> 
                                                    <option>User 3</option> 
                                                </select> 
                                            </div>
                                        </div>


                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">                                        
                                                <select className="form-control select2">
                                                    <option>To User</option> 
                                                    <option>User 1</option> 
                                                    <option>Test User</option> 
                                                    <option>Admin</option> 
                                                    <option>User 2</option> 
                                                    <option>User 3</option> 
                                                </select> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            } 
                             if (this.state.userlevel == 'singleuser') { 
                            return (
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">                                        
                                        <select className="form-control select2">
                                            <option>User ID</option> 
                                            <option>Test User</option> 
                                            <option>Test User1</option> 
                                            <option>Admin</option> 
                                            <option>John</option> 
                                            <option>Test</option> 
                                        </select>
                                    </div>
                                </div>
                            )
                            }
                        })()}

							
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
                                <Typography>User Buyer Rights</Typography>
                            </div>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div className="float-right tbl-filter-btn">
                                                <button className="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="Search" data-testid="Search-iconButton" title="Search">
                            
                                    <span className="MuiIconButton-label">
                            
                            
                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                            
                                    </span>
                            
                                </button>
                            
                                <button className="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Download CSV-iconButton" aria-label="Download CSV" title="Download CSV">
                            
                            <span className="MuiIconButton-label">
                            
                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path>
                                </svg></span>
                            
                            
                            
                            
                            </button>
                            <button className="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="Print-iconButton" aria-label="Print">
                            
                                            <span className="MuiIconButton-label">
                            
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
                                                </svg></span></button>
                            
                                                <button className="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="View Columns-iconButton" aria-label="View Columns">
                            
                            
                            
                                                    <span className="MuiIconButton-label"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>
                                            </svg></span></button>
                            
                                            <button className="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Filter Table"><span className="MuiIconButton-label"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                                            </svg></span></button>
                            </div>
                            <table className="table">
                                <thead className="thead-light">
                                    <th>
                                    <Checkbox color="primary" value="true" />
                                    {/* color="primary" checked={this.state.checkedA} onChange={this.handleChange('checkedA')} */}
                                    </th>
                                    <th>Buyer Code</th>
                                    <th>BuyDivCode</th>

                                    <th>DivName</th>

                                </thead>
                                <tbody>
                                {data.map(n => {
                                    
										 return (
                                            <tr>
                                                <td> <Checkbox color="primary" value="true" />
                                                </td>
                                                <td>{n[0]}</td>
                                                <td>{n[1]}</td>
                                                <td>{n[2]}</td>
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
 export default UserbuyerrightsElement;
 
 