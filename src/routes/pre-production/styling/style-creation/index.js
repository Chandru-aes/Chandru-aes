/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Button from '@material-ui/core/Button';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
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
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';

 //import AddNewUserForm from './AddNewUserForm';
 
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

// const styles = {
// 	checked: {
// 		color: pink[500],
// 	},
	
// };
import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
 const $ = require('jquery');
 function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }
 class PreprodcutionTable extends Component {
 
     state = {
        activeIndex: 0,
        selectedDate: moment(),
        addNewUserModal: false,
        checkedA: true,
     }
     onAddUpdateUserModalClose() {
        this.setState({ addNewUserModal: false, editUser: null })
    }

     opnAddNewUserModal(e) {
        e.preventDefault();
        this.setState({ addNewUserModal: true });
    }
     componentDidMount() {
		
        $(document).on('click', '.edit', function() {
            $(this).parent().siblings('td.data').each(function() {
              var content = $(this).html();
              $(this).html('<input value="' + content + '" class="form-control"/>');
            });
            
            $(this).siblings('.save').show();
            $(this).siblings('.delete').hide();
            $(this).hide();
          });
          
          $(document).on('click', '.save', function() {
            
            $('input').each(function() {
              var content = $(this).val();
              $(this).html(content);
              $(this).contents().unwrap();
            });
            $(this).siblings('.edit').show();
            $(this).siblings('.delete').show();
            $(this).hide();
            
          });
          
          
          $(document).on('click', '.delete', function() {
            $(this).parents('tr').remove();
          });
          
          $('.add').click(function() {
            $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');
          });
	}
     handleChange(event, value) {
        this.setState({ activeIndex: value });
        this.setState({ [name]: checked });
     }
     handleDateChange = (date) => {
		this.setState({ selectedDate: date });
	};
    handleChangeCheckbox = name => (event, checked) => {
		console.log("name:: ", name);
		this.setState({ [name]: checked });
	};
     render() {
         const { employeePayroll } = this.state;
         const { match } = this.props;
         const { selectedDate } = this.state;
         const { classes } = this.props;
         return (
            <RctCollapsibleCard heading="Create Forecast">
                 <PageTitleBar title="Menu" match={this.props.match} />
               
                <div className="side-button">
                      
                 <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clone <i className="zmdi zmdi-copy"></i></span><span className="MuiTouchRipple-root"></span></button>
                 <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Upload <i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                 </div>
                <div className="row new-form">
                <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12">
                <div className="w-100">
                <div className="float-right n-bt-top">
                        
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button>
                        
                       
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                   </div>    </div> </div>
                   <div className="col-lg-12 mt-10">
                   <ul class="list-group list-group-horizontal-md">
  <li class="list-group-item">ITH# 2136005</li>
  <li class="list-group-item">Single window</li>
  <li class="list-group-item">Costing</li>
  <li class="list-group-item">Rm order</li>
  <li class="list-group-item">Delivery SM</li>
  <li class="list-group-item">History</li>
</ul>
</div>
                   <div className="row new-form p-20">
                <div className="w-25 border p-10 mr-5 no-f-mb">
                <img className="rounded img-fluid" src="https://via.placeholder.com/300"  data-src="https://via.placeholder.com/250" alt="Square placeholder image 300px"></img>
                    <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Stage</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Autumn</MenuItem>
                            <MenuItem value={20}>Summer</MenuItem>
                            <MenuItem value={30}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Location</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Autumn</MenuItem>
                            <MenuItem value={20}>Summer</MenuItem>
                            <MenuItem value={30}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Wash type</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Autumn</MenuItem>
                            <MenuItem value={20}>Summer</MenuItem>
                            <MenuItem value={30}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel control={
								<Checkbox color="primary" checked={this.state.checkedA} onChange={this.handleChangeCheckbox('checkedA')} value="checkedA" />
							} label="Option A"
							/>
                        </div>
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Print type</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Autumn</MenuItem>
                            <MenuItem value={20}>Summer</MenuItem>
                            <MenuItem value={30}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Gar_Due Type</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Autumn</MenuItem>
                            <MenuItem value={20}>Summer</MenuItem>
                            <MenuItem value={30}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Embroidery Type</InputLabel>
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

                    <div className="w-75 col border">
                        
                    <div className="row no-f-mb">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Division" placeholder="Buyer Name"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Season" placeholder="Buyer Name"/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="year" placeholder="Buyer Name"/>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Base style" placeholder="Buyer Name"/>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="style no" placeholder="Buyer Name"/>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Descde" placeholder="Buyer Name"/>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Fabric" placeholder="Buyer Name"/>
                        </div>
                    </div> 

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Plaid" placeholder="Buyer Name"/>
                        </div>
                    </div> 

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Product type" placeholder="Buyer Name"/>
                        </div>
                    </div> 

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Sub Product type" placeholder="Buyer Name"/>
                        </div>
                    </div> 

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Contact person" placeholder="Buyer Name"/>
                        </div>
                    </div> 

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Projection details</InputLabel>
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
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Order Specfication</InputLabel>
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
                  <Tab label="Qty Breakup" />
                  <Tab label="Activity" />
                 
               </Tabs>
            </AppBar>
            <SwipeableViews
               axis={'x'}
               index={this.state.activeIndex}
               onChangeIndex={(index) => this.handleChangeIndex(index)}>
               <TabContainer>
      
                    {/* <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <TextField id="ActivityName" fullWidth label="Activity Name" placeholder="Activity Name"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                        </div>
                    </div> */}
                     <div className="table-responsive mt-15">
                     <div className="w-25 float-right pl-25">
                        <div className="form-group">
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                        </div>
                    </div>

                            <table className="table data w-75">
                                <thead>
                                    <tr>
                                    <th className="w-25">Activity</th>
                                    <th className="w-25">Due By</th>
                                    <th className="w-25">Number</th>
                                    <th className="w-25 text-center">Actions  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">666-666-666</td>
                                    <td className="text-center">
                                    {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">666-666-666</td>
                                    <td className="text-center">
                                    {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

<button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                    </td>
                                    </tr>
                                </tbody>
                                
                                </table>
                            </div>
               </TabContainer>
               <TabContainer>
                  
                   <div className="row mt-15 new-form">
                   <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <TextField id="ActivityName" fullWidth label="Activity Name" placeholder="Activity Name"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <Fragment>
                                <div className="rct-picker">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                            }}
                                            label="Choose a date"
                                            value={selectedDate}
                                            onChange={this.handleDateChange}
                                            animateYearScrolling={false}
                                            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                            fullWidth
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </Fragment>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group mt-15">
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"  onClick={(e) => this.opnAddNewUserModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                        </div>
                    </div>
                    </div>
                   <div className="table-responsive">
                        <table className="table data">
                                <thead>
                                    <tr>
                                    <th>Activity</th>
                                    <th>Due By</th>
                                    <th className="text-center">Actions  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="data">Activity 1</td>
                                    <td className="data">2021-04-10</td>
                                    <td className="text-center">
                                    {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

<button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="data">Activity 2</td>
                                    <td className="data">2021-11-10</td>
                                    <td className="text-center">
                                    {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                    </td>
                                    </tr>
                                </tbody>
                                
                                </table>
                            </div>
               </TabContainer>
            </SwipeableViews>
                <Modal isOpen={this.state.addNewUserModal} toggle={() => this.onAddUpdateUserModalClose()}>
                    <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
                      Clone Activity
                    </ModalHeader>
                    <ModalBody>
                        {/* <AddNewUserForm /> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="contained" className="text-white btn-success">Add</Button>
                        <Button variant="contained" className="text-white btn-danger">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </RctCollapsibleCard>
            
         );
     }
 }
 
 export default PreprodcutionTable;
 