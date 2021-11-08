/**
 * User Management Page
 */
 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import Button from '@material-ui/core/Button';
 import Checkbox from '@material-ui/core/Checkbox';
 import { Link } from 'react-router-dom';
 import TextField from '@material-ui/core/TextField';
 import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 import {
     Pagination,
     PaginationItem,
     PaginationLink,
     Modal,
     ModalHeader,
     ModalBody,
     ModalFooter,
     Badge
 } from 'reactstrap';
 import { NotificationManager } from 'react-notifications';
 import Avatar from '@material-ui/core/Avatar';
 
 // api
 import api from 'Api';
 
 // delete confirmation dialog
 import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';
 
 // add new user form
//  import AddNewUserForm from './AddNewUserForm';
 
//  // update user form
//  import UpdateUserForm from './UpdateUserForm';
 
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 // rct section loader
 import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';
 
 export default class ProductionRequest extends Component {
 
     state = {
        open: false,

         all: false,
         users: null, // initial user data
         selectedUser: null, // selected user to perform operations
         loading: false, // loading activity
         addNewUserModal: false, // add new user form modal
         addNewUserDetail: {
             id: '',
             name: '',
             avatar: '',
             type: '',
             emailAddress: '',
             status: 'Active',
             lastSeen: '',
             accountType: '',
             badgeClass: 'badge-success',
             dateCreated: 'Just Now',
             checked: false
         },
         openViewUserDialog: false, // view user dialog box
         editUser: null,
         allSelected: false,
         selectedUsers: 0
     }
 
     componentDidMount() {
         api.get('userManagement.js')
             .then((response) => {
                 this.setState({ users: response.data });
             })
             .catch(error => {
                 // error hanlding
             })
     }
 
     /**
      * On Delete
      */
     onDelete(data) {
         this.refs.deleteConfirmationDialog.open();
         this.setState({ selectedUser: data });
     }
 
     /**
      * Delete User Permanently
      */
     deleteUserPermanently() {
         const { selectedUser } = this.state;
         let users = this.state.users;
         let indexOfDeleteUser = users.indexOf(selectedUser);
         users.splice(indexOfDeleteUser, 1);
         this.refs.deleteConfirmationDialog.close();
         this.setState({ loading: true });
         let self = this;
         setTimeout(() => {
             self.setState({ loading: false, users, selectedUser: null });
             NotificationManager.success('User Deleted!');
         }, 2000);
     }
 
     /**
      * Open Add New User Modal
      */
     opnAddNewUserModal(e) {
         e.preventDefault();
         this.setState({ addNewUserModal: true });
     }
 
     /**
      * On Reload
      */
     onReload(e) {
         e.preventDefault();
         this.setState({ loading: true });
         let self = this;
         setTimeout(() => {
             self.setState({ loading: false });
         }, 2000);
     }
 
     /**
      * On Select User
      */
     onSelectUser(user) {
         user.checked = !user.checked;
         let selectedUsers = 0;
         let users = this.state.users.map(userData => {
             if (userData.checked) {
                 selectedUsers++;
             }
             if (userData.id === user.id) {
                 if (userData.checked) {
                     selectedUsers++;
                 }
                 return user;
             } else {
                 return userData;
             }
         });
         this.setState({ users, selectedUsers });
     }
 
     /**
      * On Change Add New User Details
      */
     onChangeAddNewUserDetails(key, value) {
         this.setState({
             addNewUserDetail: {
                 ...this.state.addNewUserDetail,
                 [key]: value
             }
         });
     }
     handleClickOpen = () => {
        this.setState({ open: true });
     };

     handleClose = () => {
        this.setState({ open: false });
     };
     /**
      * Add New User
      */
     addNewUser() {
         const { name, emailAddress } = this.state.addNewUserDetail;
         if (name !== '' && emailAddress !== '') {
             let users = this.state.users;
             let newUser = {
                 ...this.state.addNewUserDetail,
                 id: new Date().getTime()
             }
             users.push(newUser);
             this.setState({ addNewUserModal: false, loading: true });
             let self = this;
             setTimeout(() => {
                 self.setState({ loading: false, users });
                 NotificationManager.success('User Created!');
             }, 2000);
         }
     }
 
     /**
      * View User Detail Hanlder
      */
     viewUserDetail(data) {
         this.setState({ openViewUserDialog: true, selectedUser: data });
     }
 
     /**
      * On Edit User
      */
     onEditUser(user) {
         this.setState({ addNewUserModal: true, editUser: user });
     }
 
     /**
      * On Add & Update User Modal Close
      */
     onAddUpdateUserModalClose() {
         this.setState({ addNewUserModal: false, editUser: null })
     }
 
     /**
      * On Update User Details
      */
     onUpdateUserDetails(key, value) {
         this.setState({
             editUser: {
                 ...this.state.editUser,
                 [key]: value
             }
         });
     }
 
     /**
      * Update User
      */
     updateUser() {
         const { editUser } = this.state;
         let indexOfUpdateUser = '';
         let users = this.state.users;
         for (let i = 0; i < users.length; i++) {
             const user = users[i];
             if (user.id === editUser.id) {
                 indexOfUpdateUser = i
             }
         }
         users[indexOfUpdateUser] = editUser;
         this.setState({ loading: true, editUser: null, addNewUserModal: false });
         let self = this;
         setTimeout(() => {
             self.setState({ users, loading: false });
             NotificationManager.success('User Updated!');
         }, 2000);
     }
 
     //Select All user
     onSelectAllUser(e) {
         const { selectedUsers, users } = this.state;
         let selectAll = selectedUsers < users.length;
         if (selectAll) {
             let selectAllUsers = users.map(user => {
                 user.checked = true
                 return user
             });
             this.setState({ users: selectAllUsers, selectedUsers: selectAllUsers.length })
         } else {
             let unselectedUsers = users.map(user => {
                 user.checked = false
                 return user;
             });
             this.setState({ selectedUsers: 0, users: unselectedUsers });
         }
     }
 
     render() {
         const { users, loading, selectedUser, editUser, allSelected, selectedUsers } = this.state;
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
                 <RctCollapsibleCard fullBlock heading="Production Request">
                  
                    <div className="row new-form overall-border no-padding-bottom">  
                             <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name"> 
                                        <TextField id="Docno" fullWidth label="Doc No" placeholder="Doc No"/>
                                    </div>                                   
                                 </div>
                            </div>  
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Buyer</option> 
                                            <option>Levis</option> 
                                            <option>Allen</option> 
                                            <option>Solly</option> 
                                        </select> 
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Buyer Division</option> 
                                            <option>Levis</option> 
                                            <option>Allen</option> 
                                            <option>Solly</option> 
                                        </select> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Season</option> 
                                            <option>Autumn</option> 
                                            <option>Summer</option> 
                                            <option>Winter</option> 
                                        </select> 
                                    </div>  
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-3">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Year</option> 
                                            <option>2021</option> 
                                            <option>2020</option> 
                                            <option>2019</option> 
                                        </select> 
                                    </div>  
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Style</option> 
                                            <option>Autumn</option> 
                                            <option>Summer</option> 
                                            <option>Winter</option> 
                                        </select> 
                                    </div>  
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name"> 
                                        <TextField id="Units" fullWidth label="Units" placeholder="Units"/>
                                    </div>                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Fits</option> 
                                            <option>Annual Buyer</option> 
                                            <option>Monthly Buyer</option> 
                                            <option>Weely</option> 
                                        </select> 
                                    </div>
                                </div>
                            </div>   
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Colors</option> 
                                            <option>Annual Buyer</option> 
                                            <option>Monthly Buyer</option> 
                                            <option>Weely</option> 
                                        </select> 
                                    </div>
                                </div>
                            </div>  
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name"> 
                                        <TextField id="workingHours" fullWidth label="Working Hours" placeholder="Working Hours"/>
                                    </div>                                   
                                </div>
                            </div>  
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name"> 
                                        <TextField id="Fabric" fullWidth label="Fabric" placeholder="Fabric"/>
                                    </div>                                   
                                </div>
                            </div>    
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                <div className="form-group">
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">View <i class="ti-eye"></i></span><span className="MuiTouchRipple-root"></span></button> 
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Generate <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>  
                                </div>   
                            </div>           
                        </div> 
                        <div className="formelements-wrapper main-layout-class productivity-grid">
                            <Accordion key={1} className="mb-30 panel" defaultExpanded>
                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>} className="m-0 panel-heading">
                                    <h4>Productivity</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="row new-form p-20 container-br">
                                        <div className="col-lg-1 col-md-4 col-sm-6 col-xs-12">
                                            <div className="form-group mt-15">
                                                <Button variant="contained" className="btn-secondary text-white btn-block" onClick={this.handleClickOpen}>SAM</Button>
                                                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                                    <DialogTitle id="form-dialog-title">SAM</DialogTitle>
                                                    <DialogContent>                                   
                                                        <div className="col border">                       
                                                            <div className="row no-f-mb">
                                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                    <div className="form-group">
                                                                        <select className="form-control select2 mt-15">
                                                                            <option>Style Number</option> 
                                                                            <option>Levis</option> 
                                                                            <option>Allen</option> 
                                                                            <option>Solly</option> 
                                                                        </select> 
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                    <div className="form-group">
                                                                        <select className="form-control select2 mt-15">
                                                                            <option>SAM</option> 
                                                                            <option>Levis</option> 
                                                                            <option>Allen</option> 
                                                                            <option>Solly</option> 
                                                                        </select>
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
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="form-group select_label_name"> 
                                                    <TextField id="Orderqty" fullWidth label="Order qty" placeholder="Order qty"/>
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="form-group select_label_name mt-15"> 
                                                    <select className="form-control select2">
                                                        <option>Qty Range</option> 
                                                        <option>Annual Buyer</option> 
                                                        <option>Monthly Buyer</option> 
                                                        <option>Weely</option> 
                                                    </select> 
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="form-group select_label_name"> 
                                                    <TextField id="Nooflines" fullWidth label="No of Lines" placeholder="No of Lines"/>
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="form-group select_label_name"> 
                                                    <TextField id="OperatorLine" fullWidth label="Operator/Line" placeholder="Operator/Line"/>
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div className="col-lg-1 col-md-4 col-sm-6 col-xs-12">
                                            <div className="form-group mt-15">
                                                <Button variant="contained" className="btn-success text-white btn-block">Add +</Button>
                                            </div>
                                        </div>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                <th className="w-20">SAM</th>
                                                    <td>25.6</td>
                                                    <td>35.3</td>
                                                </tr>
                                                <tr>
                                                <th className="w-20">OQ/OQR</th>
                                                    <td>36972</td>
                                                    <td>45855</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">No of Lines</th>
                                                    <td>1</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">Operators</th>
                                                    <td>48</td>
                                                    <td>49</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">No of Days</th>
                                                    <td>1</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">Avg Prdty/Day/Line</th>
                                                    <td>1</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">Efficiency</th>
                                                    <td>80</td>
                                                    <td>80</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">Target/HR</th>
                                                    <td>80</td>
                                                    <td>80</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">Step Up D1</th>
                                                    <td>80</td>
                                                    <td>80</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">Step Up D2</th>
                                                    <td>80</td>
                                                    <td>80</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">Step Up D3</th>
                                                    <td>80</td>
                                                    <td>80</td>
                                                </tr>
                                                <tr>
                                                    <th className="w-20">Step Up D4</th>
                                                    <td>80</td>
                                                    <td>80</td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="formelements-wrapper main-layout-class productivity-grid pd-bottom-10">
                            <Accordion key={2} className="mb-30 panel">
                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>} className="m-0 panel-heading">
                                    <h4>List</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                <div className="table-responsive no-padding-top overall-border">
                         <div className="d-flex justify-content-between border-bottom">
                             
                                <div className="w-d-100">
                                    <div className="float-right">
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
                                                </svg>
                                            </span>
                                        </button>
                                        <button className="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="Print-iconButton" aria-label="Print">                            
                                            <span className="MuiIconButton-label">                            
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
                                                </svg>
                                            </span>
                                        </button>                            
                                        <button className="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="View Columns-iconButton" aria-label="View Columns">
                                            <span className="MuiIconButton-label">
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>
                                                </svg>
                                            </span>
                                        </button>                            
                                        <button className="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Filter Table"><span className="MuiIconButton-label"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                                        </svg></span></button>
                                    </div>
                                </div>
                         </div>
                         <table className="table table-middle table-hover mb-0">
                             <thead>
                                 <tr>
                                     <th>Style Image</th>
                                     <th>Doc No</th>
                                     <th>Date</th>
                                     <th>Style</th>
                                     <th>Order Qty</th>
                                     <th>SAM</th>                                    
                                     <th>Productivity</th>
                                     <th>Status</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {/* {users && users.map((user, key) => ( */}
                                     <tr>                                       
                                         <td>
                                             <div className="media">                                                
                                                     <img src={require('Assets/avatars/style-img1.png')} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />                                                    
                                             </div>
                                         </td>
                                         <td>859</td>
                                         <td>2021-10-15 </td>
                                         <td>Design</td>                                    
                                         <td>10</td>  
                                         <td>10</td>   
                                         <td>Nil</td>
                                         <td><span className={`badge badge-success badge-pill ft-lft`}>completed</span></td>                                     
                                     </tr>
                                     <tr>                                       
                                         <td>
                                             <div className="media">                                                
                                                     <img src={require('Assets/avatars/style-img1.png')} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />                                                    
                                             </div>
                                         </td>
                                         <td>859</td>
                                         <td>2021-10-15 </td>
                                         <td>Design</td>                                    
                                         <td>10</td>  
                                         <td>10</td>   
                                         <td>Nil</td>  
                                         <td><span className={`badge badge-warning badge-pill ft-lft`}>In process</span></td>                                     
                                     </tr>
                                     <tr>                                       
                                         <td>
                                             <div className="media">                                                
                                                     <img src={require('Assets/avatars/style-img1.png')} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />                                                    
                                             </div>
                                         </td>
                                         <td>859</td>
                                         <td>2021-10-15 </td>
                                         <td>Design</td>                                    
                                         <td>10</td>  
                                         <td>10</td>   
                                         <td>Nil</td>
                                         <td><span className={`badge badge-danger badge-pill ft-lft`}>Yet to process</span></td>                                       
                                     </tr>
                                     <tr>                                       
                                         <td>
                                             <div className="media">                                                
                                                     <img src={require('Assets/avatars/style-img1.png')} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />                                                    
                                             </div>
                                         </td>
                                         
                                         <td>859</td>
                                         <td>2021-10-15 </td>
                                         <td>Design</td>                                    
                                         <td>10</td>  
                                         <td>10</td>   
                                         <td>Nil</td> 
                                         <td><span className={`badge badge-success badge-pill ft-lft`}>completed</span></td>                                      
                                     </tr>
                                     <tr>                                       
                                         <td>
                                             <div className="media">                                                
                                                     <img src={require('Assets/avatars/style-img1.png')} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />                                                    
                                             </div>
                                         </td>
                                         
                                         <td>859</td>
                                         <td>2021-10-15 </td>
                                         <td>Design</td>                                    
                                         <td>10</td>  
                                         <td>10</td>   
                                         <td>Nil</td>
                                         <td><span className={`badge badge-success badge-pill ft-lft`}>completed</span></td>                                       
                                     </tr>
                                     <tr>                                       
                                         <td>
                                             <div className="media">                                                
                                                     <img src={require('Assets/avatars/style-img1.png')} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />                                                    
                                             </div>
                                         </td>                                         
                                         <td>859</td>
                                         <td>2021-10-15 </td>
                                         <td>Design</td>                                    
                                         <td>10</td>  
                                         <td>10</td>   
                                         <td>Nil</td>  
                                         <td><span className={`badge badge-warning badge-pill ft-lft`}>completed</span></td>                                      
                                     </tr>
                                 {/* )) */}
                             </tbody>
                             <tfoot className="border-top">
                                 <tr>
                                     <td colSpan="100%">
                                     <div className="row tb-pro mt-20">
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
                                     </td>
                                 </tr>
                             </tfoot>
                         </table>
                     </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                     
                     {loading &&
                         <RctSectionLoader />
                     }
                 </RctCollapsibleCard>
                 <DeleteConfirmationDialog
                     ref="deleteConfirmationDialog"
                     title="Are You Sure Want To Delete?"
                     message="This will delete user permanently."
                     onConfirm={() => this.deleteUserPermanently()}
                 />
                 <Modal isOpen={this.state.addNewUserModal} toggle={() => this.onAddUpdateUserModalClose()}>
                     <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
                         {editUser === null ?
                             'Add New User' : 'Update User'
                         }
                     </ModalHeader>
                     <ModalBody>
                         {/* {editUser === null ?
                             <AddNewUserForm
                                 addNewUserDetails={this.state.addNewUserDetail}
                                 onChangeAddNewUserDetails={this.onChangeAddNewUserDetails.bind(this)}
                             />
                             : <UpdateUserForm user={editUser} onUpdateUserDetail={this.onUpdateUserDetails.bind(this)} />
                         } */}
                     </ModalBody>
                     <ModalFooter>
                         {editUser === null ?
                             <Button variant="contained" className="text-white btn-success" onClick={() => this.addNewUser()}>Add</Button>
                             : <Button variant="contained" color="primary" className="text-white" onClick={() => this.updateUser()}>Update</Button>
                         }
                         {' '}
                         <Button variant="contained" className="text-white btn-danger" onClick={() => this.onAddUpdateUserModalClose()}>Cancel</Button>
                     </ModalFooter>
                 </Modal>
                 <Dialog
                     onClose={() => this.setState({ openViewUserDialog: false })}
                     open={this.state.openViewUserDialog}
                 >
                     <DialogContent>
                         {selectedUser !== null &&
                             <div>
                                 <div className="clearfix d-flex">
                                     <div className="media pull-left">
                                         <img src={selectedUser.avatar} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />
                                         <div className="media-body">
                                             <p>Name: <span className="fw-bold">{selectedUser.name}</span></p>
                                             <p>Email: <span className="fw-bold">{selectedUser.emailAddress}</span></p>
                                             <p>Type: <span className="badge badge-warning">{selectedUser.type}</span></p>
                                             <p>Account Type: <span className={`badge ${selectedUser.badgeClass} badge-pill`}>{selectedUser.accountType}</span></p>
                                             <p>Status: {selectedUser.status}</p>
                                             <p>Last Seen: {selectedUser.lastSeen}</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         }
                     </DialogContent>
                 </Dialog>
             </div>
         );
     }
 }
 