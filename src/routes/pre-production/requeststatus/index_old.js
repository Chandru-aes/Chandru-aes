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
 import RadioGroup from '@material-ui/core/RadioGroup';
 import Radio from '@material-ui/core/Radio';
 
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
 class RequeststatusElement extends Component {
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
             this.setState({ isActive: !this.state.isActive });
           };
 
           const handleToggle3 = () => {
             this.setState({ isActive: false });
           };
           const isActive = this.state.isActive;
          return ( 
              
             <RctCollapsibleCard heading="Request Status">
                  <PageTitleBar title="Menu" match={this.props.match} />
                  <div  className={isActive ? "s-panel active" : 's-panel'}>
                      {/* { !isActive &&
                          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-10 text-white btn-icon nd-fom" tabindex="0" type="button"  onClick={handleToggle}><span className="MuiButton-label">Projection Details<i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                      }
                       { isActive &&
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-icon b-ic edit close-side" onClick={handleToggle1} tabindex="0" type="button" ><i className="zmdi zmdi-close"></i><span className="MuiTouchRipple-root"></span></button>
                         } */}
                      <div className="row new-form">
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
 
 
                  <div  className={isActive ? "s-panel-1 active" : 's-panel-1'}>
                      {/* { !isActive &&
                          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon nd-fom" tabindex="0" type="button"  onClick={handleToggle2}><span className="MuiButton-label">Order Specification <i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                      }
                       { isActive &&
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-icon b-ic edit close-side" onClick={handleToggle3} tabindex="0" type="button" ><i className="zmdi zmdi-close"></i><span className="MuiTouchRipple-root"></span></button>
                         } */}
                      <div className="row new-form">
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
 
                  <div className="row">
                <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12">
                <div className="w-100">
                <div className="float-right n-bt-top">
                        
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button>
                        
                       
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                   </div> 
                   <div className="clearfix"></div>
                <div className="row p-20">
                
                <div className="w-75 col border pb-10">
                <div className="row no-f-mb">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Request No</InputLabel>
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
                        <TextField id="Buyer" fullWidth label="Style Number" placeholder="Style Number"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Purpose" placeholder="Purpose"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Base Style" placeholder="Base Style"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                    <RadioGroup row aria-label="anchorReference" name="anchorReference">
                           
                                <FormControlLabel color="primary" value="sample" control={<Radio />} label="Accept" />
                           
                           
                        </RadioGroup>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                    <RadioGroup row aria-label="anchorReference" name="anchorReference">
                           
                                <FormControlLabel color="primary" value="sample" control={<Radio />} label="Hold" />
                           
                           
                        </RadioGroup>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                    <RadioGroup row aria-label="anchorReference" name="anchorReference">
                           
                                <FormControlLabel color="primary" value="sample" control={<Radio />} label="Cancel" />
                           
                           
                        </RadioGroup>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Reason" placeholder="Reason"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Remarks" placeholder="Remarks"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Request View</InputLabel>
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
                    
                   
               
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                    <Accordion className="border mb-15 mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Pattern</Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">
                         <div className="w-25">
                     <div className="">
                     <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                     </div>
                     </div>
                     <div className="w-75 row pl-15">
                     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple"> Nature of Job</InputLabel>
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
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple"> Version</InputLabel>
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
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Pattern Type</InputLabel>
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
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Storage Area" placeholder="Storage Area"/>
 </div>
  
     </div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Done by</InputLabel>
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
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Checked by</InputLabel>
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
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group ">
 <TextField id="Buyer" fullWidth label="Date" placeholder="Date"/>
 </div>
     </div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group ">
 <TextField id="Buyer" fullWidth label="Time" placeholder="Time"/>
 </div>
     </div>
  </div>
                 
  <div className="table-responsive mt-0">
                      <div className="float-right">
                         <div className="form-group">
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-0 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="">Actions</th>
                                     <th className="">    Nature of Job </th>
                                     <th className="">Version</th>
                                     <th className="">Pattern Type  </th>
                                     <th className="">    Storage Area    </th>
                                     <th className="">Done By   </th>
                                     <th className="">Checked By   </th>
                                     <th className="">Revision    </th>
                                     <th className="">    Date & Time     </th>
                                     <th className="">    Remark     </th> 

                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                         <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                        
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
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
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>      
                     
                    
               
                        
                        </div>
                     </AccordionDetails>
                 </Accordion>
                 <Accordion className="border">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Sample</Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">  
                     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Pattern Version</InputLabel>
     <Select value={this.state.age} onChange={this.handleChange}
     inputProps={{ name: 'age', id: 'age-simple', }}>
     <MenuItem value=""><em> none</em></MenuItem>
     <MenuItem value={10}>Autumn</MenuItem>
     <MenuItem value={20}>Summer</MenuItem>
     <MenuItem value={30}>Winter</MenuItem>
     </Select>
 </FormControl>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="No of Pieces" placeholder="No of Pieces"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Line</InputLabel>
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
     <InputLabel htmlFor="age-simple">Department</InputLabel>
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
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
     <div className="row">
<RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">

<FormControlLabel color="primary" value="sample" control={<Radio />} label="In" />


</RadioGroup>

<RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">

<FormControlLabel color="primary" value="sample" control={<Radio />} label="Out" />


</RadioGroup>
</div>
</div>
<div className="col-lg-6 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
<div className="form-group">
 <TextField id="Buyer" fullWidth label="Remarks" placeholder="Remarks"/>
 </div>
</div>
</div>



                     <div className="table-responsive mt-10">
                      <div className="float-right">
                         <div className="form-group">
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-0 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="text-center">Actions</th>
                                     <th className="">    Pattern Version </th>
                                     <th className="">    No of Pieces </th>
                                     <th className="">    Line </th>
                                     <th className="">Department</th>
                                     <th className="">In</th>
                                     <th className="">Out</th>
                                     <th className="">    Remarks </th>
                                     

                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>

                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
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
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>   
                     </AccordionDetails>
                 </Accordion>
                 
 
                 <Accordion className="border mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Marker</Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">
                     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">    Pattern Version </InputLabel>
     <Select value={this.state.age} onChange={this.handleChange}
     inputProps={{ name: 'age', id: 'age-simple', }}>
     <MenuItem value=""><em>none</em></MenuItem>
     <MenuItem value={10}>Autumn</MenuItem>
     <MenuItem value={20}>Summer</MenuItem>
     <MenuItem value={30}>Winter</MenuItem>
     </Select>
 </FormControl>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Storage Area" placeholder=" Storage Area"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple"> Done by</InputLabel>
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
     <InputLabel htmlFor="age-simple">Checked by</InputLabel>
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
 <TextField id="Buyer" fullWidth label="Date" placeholder="Date"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Time" placeholder="Time"/>
 </div></div>
 <div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="    Remarks " placeholder="    Remarks "/>
 </div></div>
 </div>
                     <div className="table-responsive mt-10">
                      <div className="float-right">
                         <div className="form-group">
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-0 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="">Pattern Version</th>
                                     <th className="">Fabric Details</th>
                                     <th className="">Width </th>
                                     <th className="">Size </th>
                                     <th className="">Repeat </th>
                                     <th className="">GAR Quantity</th>
                                     <th className="">Marker</th>
                                     <th className="">Efficiency</th>
                                     <th className="">Remarks</th>

                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
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
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>  
                     </AccordionDetails>
                 </Accordion>
 
                 <Accordion className="border mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Value Add </Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">
                     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Value Add</InputLabel>
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
     <InputLabel htmlFor="age-simple">Value Add Type</InputLabel>
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
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
     <div className="row">
<RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">

<FormControlLabel color="primary" value="sample" control={<Radio />} label="In" />


</RadioGroup>

<RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">

<FormControlLabel color="primary" value="sample" control={<Radio />} label="Out" />


</RadioGroup>
</div>
</div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="No of Pieces" placeholder="No of Pieces"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Wash Formula" placeholder="Wash Formula"/>
 </div>
 </div>
 <div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Description" placeholder="Description"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="    Remarks " placeholder="    Remarks "/>
 </div>
 </div>
                     </div>
                     <div className="table-responsive mt-10">
                      <div className=" float-right">
                         <div className="form-group">
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-0 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="text-center">Actions</th>
                                     <th className="">    Department </th>
                                     <th className="">    No of Pieces </th>
                                     <th className="">    Description </th>
                                     <th className="">     In </th>
                                     <th className="">    Out </th>
                                     <th className="">    Description </th>

                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                         <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                          
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
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
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>  
                     </AccordionDetails>
                 </Accordion>
                
 
                 <Accordion className="border mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>SAM</Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">
                     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">    Option Type </InputLabel>
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
     <InputLabel htmlFor="age-simple">Option</InputLabel>
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
 <TextField id="Buyer" fullWidth label="SEW SAM" placeholder="SEW SAM"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="KB SAM" placeholder="KB SAM"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Manual SAM" placeholder="Manual SAM"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="    Difficulty Level " placeholder="    Difficulty Level "/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="OB Link" placeholder="OB Link"/>
 </div>
 </div>
                     </div>
                     <div className="table-responsive mt-10">
                      <div className="float-right">
                         <div className="form-group">
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="text-center">Actions</th>
                                     <th className="">    Option Type </th>
                                     <th className="">Option</th>
                                     <th className="">SEW SAM</th>
                                     <th className="">    KB SAM </th>
                                     <th className="">    Manual SAM </th>
                                     <th className="">OB Link</th>
                                     <th className="">    Difficulty Level </th>

                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                         <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                          
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                     
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>

                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>

                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
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
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>  
                     </AccordionDetails>
                 </Accordion>
 
 
                 
 
                 </div>
 </div>
 
                    </div>
                </div>
                </div>
                </div>
                </div>
               
 
               
           
                
            </RctCollapsibleCard>
            
         );
     }
 }
 
 export default RequeststatusElement;
 