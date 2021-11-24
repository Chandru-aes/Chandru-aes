/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Button from '@material-ui/core/Button';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import { Helmet } from "react-helmet";
 import { Media, Badge,Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, } from 'reactstrap';
 import IconButton from '@material-ui/core/IconButton';
 import Avatar from '@material-ui/core/Avatar';
 import Checkbox from '@material-ui/core/Checkbox';
 // api
 import api from 'Api';
 
 import InputLabel from '@material-ui/core/InputLabel';
 
 import MenuItem from '@material-ui/core/MenuItem';
 
 import FormControl from '@material-ui/core/FormControl';
 
 import Select from '@material-ui/core/Select';
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 import DropzoneComponent from 'react-dropzone-component';
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 //import AddNewUserForm from './AddNewUserForm';
 import Accordion from '@material-ui/core/Accordion';
 import AccordionDetails from '@material-ui/core/AccordionDetails';
 import AccordionSummary from '@material-ui/core/AccordionSummary';
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 import Typography from '@material-ui/core/Typography';
 import TextField from '@material-ui/core/TextField';
 import AppBar from '@material-ui/core/AppBar';
 import Tabs from '@material-ui/core/Tabs';
 import Tab from '@material-ui/core/Tab';
 import SwipeableViews from 'react-swipeable-views';
 
 import moment from 'moment';
 import DateFnsUtils from '@date-io/date-fns';

 import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select1 from "react-dropdown-select";
 // const styles = {
 // 	checked: {
 // 		color: pink[500],
 // 	},
    
 // };
 import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
 import { NotificationContainer, NotificationManager } from 'react-notifications';
 const $ = require('jquery');
 
 class ItenNasterCreation extends Component {
    
     state = {
         all: false,   
         ropen: false,     
     }
     constructor(props) {
        super(props);
       // this.state = { employees: service.getEmployees() };
       // this.states = service.getStates();
      
     }
     componentDidMount() {
       
     }
    
     rhandleClickOpen = () => {
        this.setState({ ropen: true });
     };
     rhandleClose = () => {
        this.setState({ ropen: false });
     };
    
     render() {
        const buyeroptions = []; 
        const buyerdivoptions = [];
        const seasonoptions =[];
        const yearoptions = [];
      
         return (
           
             <div className="user-management">
                 <Helmet>
                 <title>Ambattur Fashion India Private Limited ( AFIPL)</title>
                     <meta name="description" content="Reactify Widgets" />
                 </Helmet>
                 <PageTitleBar
                     title={<IntlMessages id="sidebar.userManagement" />}
                     match={this.props.match}
                 />
                 <RctCollapsibleCard fullBlock heading="Costing Creation">
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <Accordion className="border mb-15 mt-15">
                            <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                <div className="acc_title_font">
                                    <Typography>Acitvity</Typography>
                                </div>
                            </AccordionSummary>

                            <AccordionDetails> 
                            <div className="row">  
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-simple">Image</InputLabel>
                                        <div className="form-group mt-15">
                                            <input class="form-control w-80 float-left" type="file" id="formFile"/>
                                        </div>
                                    </FormControl>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-simple"> Buyer</InputLabel>

                                        <Select value={this.state.age} onChange={this.handleChange}

                                        inputProps={{ name: 'age', id: 'age-simple', }}>

                                            <MenuItem value=""><em>None</em></MenuItem>

                                            <MenuItem value={10}>Autumn</MenuItem>

                                            <MenuItem value={20}>Summer</MenuItem>

                                            <MenuItem value={30}>Winter</MenuItem>

                                        </Select>

                                    </FormControl>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-simple"> Buyer Division</InputLabel>

                                        <Select value={this.state.age} onChange={this.handleChange}

                                        inputProps={{ name: 'age', id: 'age-simple', }}>

                                            <MenuItem value=""><em>None</em></MenuItem>

                                            <MenuItem value={10}>Autumn</MenuItem>

                                            <MenuItem value={20}>Summer</MenuItem>

                                            <MenuItem value={30}>Winter</MenuItem>

                                        </Select>

                                    </FormControl>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-simple"> Season</InputLabel>

                                        <Select value={this.state.age} onChange={this.handleChange}

                                        inputProps={{ name: 'age', id: 'age-simple', }}>

                                            <MenuItem value=""><em>None</em></MenuItem>

                                            <MenuItem value={10}>Autumn</MenuItem>

                                            <MenuItem value={20}>Summer</MenuItem>

                                            <MenuItem value={30}>Winter</MenuItem>

                                        </Select>

                                    </FormControl>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-simple"> Year</InputLabel>

                                        <Select value={this.state.age} onChange={this.handleChange}

                                        inputProps={{ name: 'age', id: 'age-simple', }}>

                                            <MenuItem value=""><em>None</em></MenuItem>

                                            <MenuItem value={10}>Autumn</MenuItem>

                                            <MenuItem value={20}>Summer</MenuItem>

                                            <MenuItem value={30}>Winter</MenuItem>

                                        </Select>

                                    </FormControl>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-simple"> Style</InputLabel>

                                        <Select value={this.state.age} onChange={this.handleChange}

                                        inputProps={{ name: 'age', id: 'age-simple', }}>

                                            <MenuItem value=""><em>None</em></MenuItem>

                                            <MenuItem value={10}>Autumn</MenuItem>

                                            <MenuItem value={20}>Summer</MenuItem>

                                            <MenuItem value={30}>Winter</MenuItem>

                                        </Select>

                                    </FormControl>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <TextField id="Buyer" fullWidth label="Style Description" placeholder="Style Description"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <TextField id="Buyer" fullWidth label="Purpose" placeholder="Purpose"/>
                                </div>
                             
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group mt-30">
                                        <button type="button" class="btn btn-outline-primary" onClick={this.rhandleClickOpen}>Reference version <i class="zmdi zmdi-arrow-right-top"></i></button>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <TextField id="Buyer" fullWidth label="Costing Options" placeholder="Costing Options"/>

                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <TextField id="Buyer" fullWidth label="Date" placeholder="Date"/>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group mt-30">
                                        <button type="button" class="btn btn-outline-primary" onClick={this.rhandleClickOpen}>Marker version  & UOM<i class="zmdi zmdi-arrow-right-top"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group mt-30">
                                        <button type="button" class="btn btn-outline-primary" onClick={this.rhandleClickOpen}>Productivity<i class="zmdi zmdi-arrow-right-top"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <TextField id="Locaiton" fullWidth label="Location" placeholder="Location"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <TextField id="LineoFCost" fullWidth label="Line oF Cost" placeholder="LineoFCost"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group mt-30">
                                        <button type="button" class="btn btn-outline-primary" onClick={this.rhandleClickOpen}>SAM<i class="zmdi zmdi-arrow-right-top"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">

                                        <FormControl fullWidth>

                                            <InputLabel htmlFor="age-simple">Currency</InputLabel>

                                            <Select value={this.state.age} onChange={this.handleChange}

                                            inputProps={{ name: 'age', id: 'age-simple', }}>

                                            <MenuItem value=""><em>None</em></MenuItem>

                                            <MenuItem value={10}>Autumn</MenuItem>

                                            <MenuItem value={20}>Summer</MenuItem>

                                            <MenuItem value={30}>Winter</MenuItem>

                                            </Select>

                                        </FormControl>

                                    </div>

                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">

                                        <FormControl fullWidth>

                                            <InputLabel htmlFor="age-simple">Buyer T$A</InputLabel>

                                            <Select value={this.state.age} onChange={this.handleChange}

                                            inputProps={{ name: 'age', id: 'age-simple', }}>

                                            <MenuItem value=""><em>None</em></MenuItem>

                                            <MenuItem value={10}>Autumn</MenuItem>

                                            <MenuItem value={20}>Summer</MenuItem>

                                            <MenuItem value={30}>Winter</MenuItem>

                                            </Select>

                                        </FormControl>

                                    </div>

                                </div>

   

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple">    Width UOM </InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

        </div>

        </div>



        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple">   Port of Load </InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

        </div>

        </div>



        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple"> Physical Finish </InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

        </div>

        </div>



        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple">  Chemical Finish</InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

        </div>

        </div>



    </div>





         </AccordionDetails>

         </Accordion>

         </div>

         



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Material Details </Typography>

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
                            <th className="text-center w-10">Actions</th>
                            <th className="text-center w-10">Material type</th>
                            <th className="text-center w-10">Material Group</th>
                            <th className="text-center w-10">Material Sub Group</th>
                            <th className="w-10" >Supplier</th>
                            <th className="" >Description</th>
                            <th className="" >Sub REf#</th>
                            <th className="">Buyer Marker</th>
                            <th className="">Internal Marker</th>
                            <th className="">Marker UOM</th>
                            <th className="">Wastage %</th>
                            <th className="">Finance %</th>
                            <th className="">Material Unit Price</th>
                            <th className="">Available CM</th>
                        </thead>
                        <tbody>
                       
                            <tr>                                               
                                <td className="text-center">
                                
                                
                                <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>

                                </td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                            </tr>
                            <tr>                                               
                                <td className="text-center">
                                
                                
                                <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>

                                </td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                            </tr>
                            <tr>                                               
                                <td className="text-center">
                                
                                
                                <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>

                                </td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                                <td className="text-center"> Demo</td>
                            </tr>
										
                        </tbody>
                            </table>                           
                                 <div className="w-50 float-right">
                                    <div className="w-25 float-left">
                                        <label className="mt-5">Rows per page: </label>
                                    </div>
                                    <div className="w-15 float-left">
                                        <select class="form-control">
                                            <option>10</option> 
                                            <option>20</option> 
                                            <option>30</option> 
                                            <option>40</option> 
                                        </select>
                                    </div>
                                    <div className="w-30 float-left pl-30">
                                        <label className="mt-5">1-10 of 50</label>
                                    </div>
                                    <div className="w-30 float-left">
                                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" ><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
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

         </div>



         



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Purchase   </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Purchase Info Record   </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 



     <div className="float-right pr-0 but-tp">

     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Add <i className="zmdi zmdi-plus-circle"></i></span><span className="MuiTouchRipple-root"></span></button>

     </div>

     <div className="clearfix"></div>

     <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

     <div className="row">

     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Material Code" placeholder="Material Code"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

<FormControl fullWidth>

<InputLabel htmlFor="age-simple">Supplier</InputLabel>

<Select value={this.state.age} onChange={this.handleChange}

inputProps={{ name: 'age', id: 'age-simple', }}>

<MenuItem value=""><em>None</em></MenuItem>

<MenuItem value={10}>Autumn</MenuItem>

<MenuItem value={20}>Summer</MenuItem>

<MenuItem value={30}>Winter</MenuItem>

</Select>

</FormControl>

</div>

</div>





<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Brand" placeholder="Brand"/>

</div></div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Supplier Reference" placeholder="Supplier Reference"/>

</div></div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Multiples" placeholder="Multiples"/>

</div></div>





<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="MOQ" placeholder="MOQ"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

<FormControl fullWidth>

<InputLabel htmlFor="age-simple">    MOQUOM </InputLabel>

<Select value={this.state.age} onChange={this.handleChange}

inputProps={{ name: 'age', id: 'age-simple', }}>

<MenuItem value=""><em>None</em></MenuItem>

<MenuItem value={10}>Autumn</MenuItem>

<MenuItem value={20}>Summer</MenuItem>

<MenuItem value={30}>Winter</MenuItem>

</Select>

</FormControl>

</div>

</div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Lead Time" placeholder="Lead Time"/>

</div></div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Color" placeholder="Color"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Size" placeholder="Size"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="From Date" placeholder="From Date"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="To Date" placeholder="To Date"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Price" placeholder="Price"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

<FormControl fullWidth>

<InputLabel htmlFor="age-simple">        Currency  </InputLabel>

<Select value={this.state.age} onChange={this.handleChange}

inputProps={{ name: 'age', id: 'age-simple', }}>

<MenuItem value=""><em>None</em></MenuItem>

<MenuItem value={10}>Autumn</MenuItem>

<MenuItem value={20}>Summer</MenuItem>

<MenuItem value={30}>Winter</MenuItem>

</Select>

</FormControl>

</div>

</div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Bin Code" placeholder="Bin Code"/>

</div></div>



<div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Descriptions" placeholder="Descriptions"/>

</div></div>



<div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Remarks" placeholder="Remarks"/>

</div></div>





</div>



    </div>



         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Sales    </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Plant     </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Accounts      </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Approval       </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>
                 </RctCollapsibleCard>
               
             </div>
         );
     }
 }
 export default ItenNasterCreation;
 