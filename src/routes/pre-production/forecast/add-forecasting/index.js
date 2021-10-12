/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Button from '@material-ui/core/Button';
 import { Media, Badge,Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, } from 'reactstrap';
 import IconButton from '@material-ui/core/IconButton';
 import Avatar from '@material-ui/core/Avatar';
 
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

 import AddNewUserForm from './ActivityCloneForm';

 import QuantityFormClone from './QuantityCloneForm';
 
 
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
        addQuantityModal:false
     }
     onAddUpdateUserModalClose() {
        this.setState({ addNewUserModal: false,addQuantityModal:false, editUser: null })
    }

     opnAddNewUserModal(e) {
        e.preventDefault();
        this.setState({ addNewUserModal: true });
    }
    opnQuantityModal(e){
        e.preventDefault();
        this.setState({ addQuantityModal: true });
    }
     componentDidMount() {
        //$(this).siblings('.save').hide();
        $(document).on('click', '.edit', function() {
            $(this).parent().siblings('td.data').each(function() {
              var content = $(this).html();
              $(this).html('<input value="' + content + '" class="float-none form-control m-auto w-50"/>');
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

          $(document).on('click', '.add', function() {
             
            $('.qty-breakup-table').append('<tr><td class="data"><input value="" class="form-control" placeholder="Qty"></td><td class="data"><input value="" class="form-control" placeholder="location"></td><td class="data"><input value="" class="form-control" placeholder="Category"></td><td class="data"><input value="" class="form-control" placeholder="Sub Category"></td><td class="data"><input value="" class="form-control" placeholder="avg SAM"></td><td class="data"><input value="" class="form-control" placeholder="Tentative start date"></td><td class="data"><input value="" class="form-control" placeholder="Tentative delivery date"></td><td class="data"><input value="" class="form-control" placeholder="Confirm date"></td><td class="text-center"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic delete" tabindex="0" type="button" ><i class="zmdi zmdi-delete"></i><span class="MuiTouchRipple-root"></span></button> <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic edit" tabindex="0" type="button" ><i class="zmdi zmdi-edit"></i><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic save" tabindex="0" type="button" ><i class="zmdi zmdi-save"></i><span class="MuiTouchRipple-root"></span></button></td></tr>');
          });

          $(document).on('click', '.addactivity', function() {
             
            $('.activity-table').append('<tr><td class="data"><input value="" class="float-none form-control m-auto w-50" placeholder="Activity Name"></td><td class="data"><input value="" class="float-none form-control m-auto w-50" placeholder="Due Date"></td><td class="text-center"><button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic delete" tabindex="0" type="button" ><i class="zmdi zmdi-delete"></i><span class="MuiTouchRipple-root"></span></button> <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic edit" tabindex="0" type="button" ><i class="zmdi zmdi-edit"></i><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic save" tabindex="0" type="button" ><i class="zmdi zmdi-save"></i><span class="MuiTouchRipple-root"></span></button></td></tr>');
          });
          
        //   $('.add').click(function() {
        //     $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');
        //   });
	}
     handleChange(event, value) {
        this.setState({ activeIndex: value });
     }
     handleDateChange = (date) => {
		this.setState({ selectedDate: date });
	};
 
     render() {
         const { employeePayroll } = this.state;
         const { match } = this.props;
         const { selectedDate } = this.state;
         return (
            <RctCollapsibleCard heading="Create Forecast">
                 <PageTitleBar title="Menu" match={this.props.match} />
                <div className="row new-form mb-10">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="buyer-division" fullWidth label="Buyer Division" placeholder="Buyer Division"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Location" fullWidth label="Location" placeholder="Location"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="type" fullWidth label="Type" placeholder="Type"/>
                        </div>
                    </div>
                   
                        
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Season</InputLabel>
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
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Year</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>2020</MenuItem>
                            <MenuItem value={20}>2019</MenuItem>
                            <MenuItem value={30}>2018</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                        <div className="form-group mt-15 text-right">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Add <i className="zmdi zmdi-file-plus"></i></span><span className="MuiTouchRipple-root"></span></button>
                              
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-10 text-white btn-icon b-sm" tabindex="0" type="button"><span className="MuiButton-label">Guide<i className="zmdi zmdi-book"></i></span><span className="MuiTouchRipple-root"></span></button>
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
                     <div className="table-responsive">
                     <div className="float-right">
                        <div className="">
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                        </div>
                    </div>

                            <table className="table data qty-breakup-table">
                                <thead>
                                    <tr>
                                    <th className="w-10">Quantity</th>
                                    <th className="w-10">Location</th>
                                    <th className="w-10">Category</th>
                                    <th className="w-10">Sub Category</th>
                                    <th className="w-10">Avg SAM</th>
                                    <th className="w-15">Tent. Production Start Date</th>
                                    <th className="w-10">Tent. Delivery Date</th>
                                    <th className="w-10">Confirm Date</th>
                                    <th className="w-15 text-center">Actions  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">category 1</td>
                                    <td className="data">Sub category 1</td>
                                    <td className="data">45</td>
                                    <td className="data">2021-10-05</td>
                                    <td className="data">2021-11-05</td>
                                    <td className="data">2021-12-05</td>
                                    <td className="text-center">
                                    {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic-sm delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic-sm edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic-sm save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">category 2</td>
                                    <td className="data">Sub category 2</td>
                                    <td className="data">45</td>
                                    <td className="data">2021-10-05</td>
                                    <td className="data">2021-11-05</td>
                                    <td className="data">2021-12-05</td>
                                    <td className="text-center">
                                    {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic-sm delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic-sm edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic-sm save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>         

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
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic addactivity" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"  onClick={(e) => this.opnAddNewUserModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                        </div>
                    </div>
                    </div>
                   <div className="table-responsive">
                        <table className="table data activity-table">
                                <thead>
                                    <tr>
                                    <th className="w-33 text-center">Activity</th>
                                    <th className="w-33 text-center">Due By</th>
                                    <th className="w-33 text-center">Actions  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="data text-center">Activity 1</td>
                                    <td className="data text-center">2021-04-10</td>
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
                                    <td className="data text-center">Activity 2</td>
                                    <td className="data text-center">2021-11-10</td>
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
                      Activity Form
                    </ModalHeader>
                    <ModalBody>
                        <AddNewUserForm addNewUserDetails={this.state.age} onChangeAddNewUserDetails={this.handleChange.bind(this)}/>
                    </ModalBody>
                    <ModalFooter>                      
                        <Button variant="contained" className="text-white btn-danger">Cancel</Button>
                        <Button variant="contained" className="text-white btn-success">Add</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.addQuantityModal} toggle={() => this.onAddUpdateUserModalClose()}>
                    <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
                      Quantity Breakup
                    </ModalHeader>
                    <ModalBody>
                        <QuantityFormClone />
                    </ModalBody>
                    <ModalFooter>
                       
                        <Button variant="contained" className="text-white btn-danger">Cancel</Button>
                        <Button variant="contained" className="text-white btn-success">Add</Button>
                    </ModalFooter>
                </Modal>
                
            </RctCollapsibleCard>
            
         );
     }
 }
 
 export default PreprodcutionTable;
 