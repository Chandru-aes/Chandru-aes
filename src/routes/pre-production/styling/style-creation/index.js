/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Button from '@material-ui/core/Button';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import { Media, Badge,Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, Input,} from 'reactstrap';
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
import { DateTimePicker} from '@material-ui/pickers';
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
     constructor(props) {
         super(props);
   
         // For a full list of possible configurations,
         // please consult http://www.dropzonejs.com/#configuration
         this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif"
         };
   
         this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/'
         };
   
         // If you want to attach multiple callbacks, simply
         // create an array filled with all your callbacks.
         // this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];
   
         // // Simple callbacks work too, of course
         // this.callback = () => console.log('Hello!');
   
         // this.success = file => console.log('uploaded', file);
   
         // this.removedfile = file => console.log('removing...', file);
   
         this.dropzone = null;
         }
     state = {
        activeIndex: 0,
        addNewUserModal: false,
        isActiveOrder:false,
        checkedA: true,
        open: false,
        tpopen: false,
        selectedDate: new Date(),
     }
     handleDateChange = (date) => {
		this.setState({ selectedDate: date });
	};

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
    handleClickOpen = () => {
        this.setState({ open: true });
     };
     ClickTechPack = () => {
        this.setState({ tpopen: true });
     }
     handleClose = () => {
        this.setState({ open: false });
     };
     CloseTechPack= () => {
        this.setState({ tpopen: false });
     };
     render() {
         const { employeePayroll } = this.state;
         const { match } = this.props;
        // const { selectedDate } = this.state;
         const { classes } = this.props;
         const config = this.componentConfig;
         const djsConfig = this.djsConfig;
         
           const handleToggle = () => {
             this.setState({ isActive: !this.state.isActive });
           };
           const eventHandlers = {
             init: dz => this.dropzone = dz,
             drop: this.callbackArray,
             addedfile: this.callback,
             success: this.success,
             removedfile: this.removedfile
          }
           const handleToggle1 = () => {
             this.setState({ isActive: false });
            
           };
           const handleToggle2 = () => {
               
             this.setState({ isActiveOrder: false });
             console.log(this.state)
           };
 
           const handleToggle3 = () => {
             this.setState({ isActive: false });
           };
           const isActive = this.state.isActive;
           const isActiveOrder = this.state.isActiveOrder;
           const { selectedDate } = this.state;
          return (
              
             <RctCollapsibleCard heading="Create Style">
                  <PageTitleBar title="Menu" match={this.props.match} />
                  <div  className={isActive ? "s-panel active" : 's-panel'}>
                      { !isActive &&
                          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-10 text-white btn-icon nd-fom" tabindex="0" type="button"  onClick={handleToggle}><span className="MuiButton-label">Projection Details<i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                      }
                       { isActive &&
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-icon b-ic edit close-side" onClick={handleToggle1} tabindex="0" type="button" ><i className="zmdi zmdi-close"></i><span className="MuiTouchRipple-root"></span></button>
                         }
                      <div className="row new-form">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                         <div className="form-group">
                            <div className="rct-picker">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DateTimePicker
                                        value={selectedDate}
                                        clearable
                                        label="Choose a date &amp; Time"
                                        onChange={this.handleDateChange}
                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                        fullWidth
                                        />
                                </MuiPickersUtilsProvider>
                            </div>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                         <div className="form-group">
                         <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                         <div className="form-group">
                         <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                         <div className="form-group">
                         <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                         </div>
                     </div>
                     <div className="table-responsive mt-15">
                     
 
                             <table className="table data w-100">
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
 
                                    <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

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
 
                                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                            <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                            <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
 
                                         {/* <button className="save">Save</button>
                                         <button className="edit">Edit</button>
                                         <button className="delete">Delete</button> */}
                                     </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                             </div>
                     </div>
                  </div>
 
 
                  <div  className={isActiveOrder ? "s-panel-1 active" : 's-panel-1'}>
                      { !isActiveOrder &&
                          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon nd-fom" tabindex="0" type="button"  onClick={handleToggle2}><span className="MuiButton-label">Order Specification <i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                      }
                       { isActiveOrder &&
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-icon b-ic edit close-side" onClick={handleToggle3} tabindex="0" type="button" ><i className="zmdi zmdi-close"></i><span className="MuiTouchRipple-root"></span></button>
                         }
                          <div className="row new-form">
                          { isActiveOrder &&                           
                            <div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                                <div className="form-group">
                                    <Input type="date" name="date" id="PCD" placeholder="PCD" />
                                </div>
                             </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                                <div className="form-group">
                                <Input type="date" name="date" id="tentDalivery" placeholder="Tentaive Delivery Date" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                                <div className="form-group">
                                <TextField id="ExpectedQuantity" fullWidth label="Expected Quantity" placeholder="Expected Quantity"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 mt-15">
                                <div className="form-group">
                                <Input type="date" name="date" id="conf-due" placeholder="Confirmation due Date" />
                                </div>
                            </div>
                            <div className="table-responsive mt-15"> 
                             <table className="table data w-100">
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
                                        <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                     </td>
                                     </tr>
                                     <tr>
                                     <td className="data">John Doe</td>
                                     <td className="data">johndoe@john.com</td>
                                     <td className="data">666-666-666</td>
                                     <td className="text-center">
                                    
                                        <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                 <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                                 <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                     </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                             </div>
                             
                     </div>
                     
                    }
                    { isActiveOrder &&
                            <div className="row new-form">
                        
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                                <div className="form-group">
                                    <select className="form-control select2 mt-15">
                                        <option>Color</option> 
                                        <option>Red</option> 
                                        <option>Blue</option> 
                                        <option>Solly</option> 
                                    </select> 
                                </div>
                             </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                                <div className="form-group">
                                    <select className="form-control select2 mt-15">
                                        <option>Fabric Type</option> 
                                        <option>Red</option> 
                                        <option>Blue</option> 
                                        <option>Solly</option> 
                                    </select> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                                <div className="form-group">
                                    <select className="form-control select2 mt-15">
                                        <option>Fit</option> 
                                        <option>Red</option> 
                                        <option>Blue</option> 
                                        <option>Solly</option> 
                                    </select> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 mt-15">
                                <div className="form-group">
                                    <select className="form-control select2 mt-15">
                                        <option>Size</option> 
                                        <option>Red</option> 
                                        <option>Blue</option> 
                                        <option>Solly</option> 
                                    </select> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 mt-15">
                                <div className="form-group">
                                    <select className="form-control select2 mt-15">
                                        <option>Destination</option> 
                                        <option>Coimabtore</option> 
                                        <option>Chennai</option> 
                                        <option>Solly</option> 
                                    </select> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 mt-15">
                                <div className="form-group">
                                    <select className="form-control select2 mt-15">
                                        <option>Market</option> 
                                        <option>premium</option> 
                                        <option>Blue</option> 
                                        <option>Solly</option> 
                                    </select> 
                                </div>
                            </div>
                            <div className="table-responsive mt-15"> 
                             <table className="table data w-100">
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
                                        <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                     </td>
                                     </tr>
                                     <tr>
                                     <td className="data">John Doe</td>
                                     <td className="data">johndoe@john.com</td>
                                     <td className="data">666-666-666</td>
                                     <td className="text-center">
                                    
                                        <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                 <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                                 <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                     </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                             </div>
                             
                     </div>
                     
                    }
                     </div>
                  </div>
 
                  
               
                <div className="row new-form">
                <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12">
                <div className="w-100">
                <div className="float-right n-bt-top">
                        
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button>
                        
                       
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                   </div>    </div> </div>
                   {/* <div className="col-lg-12 mt-10">
                        <ul class="list-group list-group-horizontal-md">
                            <li class="list-group-item">ITH# 2136005</li>
                            <li class="list-group-item">Single window</li>
                            <li class="list-group-item">Costing</li>
                            <li class="list-group-item">Rm order</li>
                            <li class="list-group-item">Delivery SM</li>
                            <li class="list-group-item">History</li>
                        </ul>
                    </div> */}
                   <div className="row new-form p-20">
                <div className="w-25 border p-10 mr-5 no-f-mb">
                {/* <img className="rounded img-fluid" src="https://via.placeholder.com/300"  data-src="https://via.placeholder.com/250" alt="Square placeholder image 300px"></img> */}
 
                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                    <div className="form-group">
                         <select className="form-control select2 mt-15">
                            <option>Stage Details</option> 
                            <option>Levis</option> 
                            <option>Allen</option> 
                            <option>Solly</option> 
                        </select> 
                    </div>
                    <div className="form-group">
                        <select className="form-control select2 mt-15">
                            <option>Location</option> 
                            <option>India</option> 
                            <option>Australia</option> 
                            <option>Germany</option> 
                        </select>
                    </div>
                    <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Unit" placeholder="Unit"/>
                    </div>
                    {/* <div className="form-group">
                        <select className="form-control select2 mt-15">
                            <option>Print Type</option> 
                            <option>Levis</option> 
                            <option>Allen</option> 
                            <option>Solly</option> 
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control select2 mt-15">
                            <option>Garment dye Type</option> 
                            <option>Levis</option> 
                            <option>Allen</option> 
                            <option>Solly</option> 
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control select2 mt-15">
                            <option>Embroidery Type</option> 
                            <option>Levis</option> 
                            <option>Allen</option> 
                            <option>Solly</option> 
                        </select>
                    </div> */}
                        <div className="form-group">
                            <div className="w-75 float-left m-btop-10">
                                <FormControl>
                                    <div class="item cursor-pointer"  onClick={this.ClickTechPack} ><span class="material-icons mr-10">attach_file</span><span>Tech Pack</span></div>
                                    <Dialog open={this.state.tpopen} onClose={this.CloseTechPack} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Tech Pack</DialogTitle>
                                    <DialogContent>                                   
                                        <div className="col border">                       
                                            <div className="row no-f-mb">
                                               
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <select className="form-control select2 mt-15">
                                                            <option>FIT</option> 
                                                            <option>Levis</option> 
                                                            <option>Allen</option> 
                                                            <option>Solly</option> 
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <select className="form-control select2 mt-15">
                                                            <option>Stage</option> 
                                                            <option>Autumn</option> 
                                                            <option>Summer</option> 
                                                            <option>Winter</option> 
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <TextField id="Buyer" fullWidth label="Version Number" placeholder="Version No"/>
                                                    </div>
                                                </div> 
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-15">
                                                    <div className="form-group">
                                                        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                                                    </div>
                                                </div>                                             
                                                                                            
                                            </div>
                                        </div>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="contained" onClick={this.CloseTechPack} color="primary" className="text-white">
                                            Cancel
                                        </Button>
                                        <Button variant="contained" onClick={this.CloseTechPack} className="btn-info text-white">
                                            Ok
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                </FormControl>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="w-75 float-left m-btop-10">
                                <FormControl>
                                    <div class="item"><span class="material-icons mr-10">attach_file</span><span>Buyer Block</span></div>
                                </FormControl>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="w-75 float-left m-btop-10">
                                <FormControl>
                                    <div class="item"><span class="material-icons mr-10">attach_file</span><span>FIS</span></div>
                                </FormControl>
                            </div>
                        </div>  
                        
                     </div>
 
                    <div className="w-75 col border">
                        
                    <div className="row no-f-mb">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <select className="form-control select2 mt-15">
                                    <option>Buyer</option> 
                                    <option>Levis</option> 
                                    <option>Allen</option> 
                                    <option>Solly</option> 
                                </select> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <select className="form-control select2 mt-15">
                                    <option>Buyer Division</option> 
                                    <option>Levis</option> 
                                    <option>Allen</option> 
                                    <option>Solly</option> 
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <select className="form-control select2 mt-15">
                                    <option>Season</option> 
                                    <option>Autumn</option> 
                                    <option>Summer</option> 
                                    <option>Winter</option> 
                                </select>
                            </div>
                        </div>
 
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <select className="form-control select2 mt-15">
                                    <option>Year</option> 
                                    <option>2021</option> 
                                    <option>2020</option> 
                                    <option>2019</option> 
                                </select>
                            </div>
                        </div> 
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group mt-15">
                                <Button variant="contained" className="btn-secondary text-white btn-block" onClick={this.handleClickOpen}>Base Style</Button>
                                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Base Style</DialogTitle>
                                    <DialogContent>                                   
                                        <div className="col border">                       
                                            <div className="row no-f-mb">
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <select className="form-control select2 mt-15">
                                                            <option>Buyer</option> 
                                                            <option>Levis</option> 
                                                            <option>Allen</option> 
                                                            <option>Solly</option> 
                                                        </select> 
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <select className="form-control select2 mt-15">
                                                            <option>Buyer Division</option> 
                                                            <option>Levis</option> 
                                                            <option>Allen</option> 
                                                            <option>Solly</option> 
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <select className="form-control select2 mt-15">
                                                            <option>Season</option> 
                                                            <option>Autumn</option> 
                                                            <option>Summer</option> 
                                                            <option>Winter</option> 
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <select className="form-control select2 mt-15">
                                                            <option>Year</option> 
                                                            <option>2021</option> 
                                                            <option>2020</option> 
                                                            <option>2019</option> 
                                                        </select>
                                                    </div>
                                                </div> 
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                    <TextField id="Buyer" fullWidth label="Style No" placeholder="Style No"/>
                                                    </div>
                                                </div>                                             
                                            </div>
                                        </div>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="contained" onClick={this.handleClose} color="primary" className="text-white">
                                            Cancel
                                        </Button>
                                        <Button variant="contained" onClick={this.handleClose} className="btn-info text-white">
                                            Ok
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <select className="form-control select2 mt-15">
                                <option>Order Category</option> 
                                <option>Category 1</option> 
                                <option>Category 2</option> 
                                <option>Category 3</option> 
                            </select>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <TextField id="Buyer" fullWidth label="Style Number" placeholder="Style number"/>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <TextField id="Buyer" fullWidth label="Description" placeholder="Description"/>
                        </div>
                    </div> 
 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Design Style Reference Number" placeholder="Design Style Reference Number"/>
                        </div>
                    </div> 
 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Fabric" placeholder="Fabric"/>
                        </div>
                    </div> 
 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <select className="form-control select2 mt-15">
                                <option>Product Type</option> 
                                <option>Product 1</option> 
                                <option>Product 2</option> 
                                <option>Product 3</option> 
                            </select>
                        </div>
                    </div> 
 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <select className="form-control select2 mt-15">
                                <option>Sub Product Type</option> 
                                <option>Product 1</option> 
                                <option>Product 2</option> 
                                <option>Product 3</option> 
                            </select>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <select className="form-control select2 mt-15">
                                <option>Fashion Group</option> 
                                <option>Group 1</option> 
                                <option>Group 2</option> 
                                <option>Group 3</option> 
                            </select>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <select className="form-control select2 mt-15">
                                <option>Person Responsible</option> 
                                <option>Group 1</option> 
                                <option>Group 2</option> 
                                <option>Group 3</option> 
                            </select>
                        </div>
                    </div>        
                  
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                                <select className="form-control select2 mt-15">
                                    <option>print Type</option> 
                                    <option>Levis</option> 
                                    <option>Allen</option> 
                                    <option>Solly</option> 
                                </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                                <select className="form-control select2 mt-15">
                                    <option>Wash Type</option> 
                                    <option>Levis</option> 
                                    <option>Allen</option> 
                                    <option>Solly</option> 
                                </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                         <div className="form-group">
                                <select className="form-control select2 mt-15">
                                    <option>Embroidery Type</option> 
                                    <option>Levis</option> 
                                    <option>Allen</option> 
                                    <option>Solly</option> 
                                </select>
                        </div>
                    </div>
 
                    </div>
                            
                            
                    </div>
                    <div className="col-lg-12 mt-10 w-25 border p-10 mr-5 no-f-mb">
                        <ul class="list-group list-group-horizontal-md">
                            <li class="list-group-item">ITH# 2136005</li>
                            <a href="javascript:void(0)"><li class="list-group-item">Single window</li></a>
                            <a href="javascript:void(0)"><li class="list-group-item">Costing</li></a>
                            <a href="javascript:void(0)"><li class="list-group-item">Rm order</li></a>
                            <a href="javascript:void(0)"><li class="list-group-item">Delivery SM</li></a>
                            <a href="javascript:void(0)"><li class="list-group-item">History</li></a>
                        </ul>
                    </div>
                    </div>
                                
                </div>
 
               
           
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
 