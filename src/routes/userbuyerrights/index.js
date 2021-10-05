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


function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }

 
 class UserbuyerrightsElement extends Component {
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
                 <PageTitleBar title='User Buyer Rights' match={this.props.match} />
                <Accordion>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
						<Typography>User Buyer Rights</Typography>
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
                            <InputLabel htmlFor="age-simple" className="pl-15 pt-15">User Level :</InputLabel>
                            </div>
                                
                                <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12">
                                <RadioGroup row aria-label="anchorReference" name="anchorReference">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <FormControlLabel color="primary" value="anchorEl" control={<Radio />} label="Single User" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <FormControlLabel color="primary" value="anchorPosition" control={<Radio />} label="Copy User" />
                                    </div>
                                </RadioGroup>

                                </div>
                               
                                
                            </div>
                            </div>
							
							<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-0">
								<div className="form-group">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-simple">UserId</InputLabel>
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
                                <Typography>User Buyer Rights</Typography>
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
 export default UserbuyerrightsElement;
 
 