/**
 * User Management Page
 */
 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import Button from '@material-ui/core/Button';
 import Checkbox from '@material-ui/core/Checkbox';
 import { Link } from 'react-router-dom';
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
 import Dialog from '@material-ui/core/Dialog';
 import DialogContent from '@material-ui/core/DialogContent';
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

 import TextField from '@material-ui/core/TextField';
 
 export default class UserProfile extends Component {
 
     state = {
         all: false,
         users: null, // initial user data
         selectedUser: null, // selected user to perform operations
         loading: false, // loading activity
         addNewUserModal: false, // add new user form modal
        
         openViewUserDialog: false, // view user dialog box
         editUser: null,
         allSelected: false,
         selectedUsers: 0,
         styleno:this.props.match.params.styleno,
         stylelistData:[],
         //requestNumber:0
     }
 
     componentDidMount() {
       
        api.get('SWRequestGrid/StyleGridData?StyleNumber='+this.state.styleno)
        .then((response) => {                
            this.setState({ stylelistData: response.data.data });
        })        
        .catch(error => {})  
     }
 
     viewRequestList(e){
        api.get('SWRequestGrid/StyleRequestList?RequestNumber='+this.state.requestNumber)
        .then((response) => {                
            this.setState({ stylelistData: response.data.data });
        })        
        .catch(error => {})    
    }
    onNameEdited(event){        
        this.setState({requestNumber:event.target.value});
        console.log(this.state.requestNumber)

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
                 <RctCollapsibleCard fullBlock>
                     <div className="table-responsive">
                         <div className="d-flex justify-content-between px-10">
                             <div>
                                <h3 className="m-btop-10">Style List</h3>
                             </div>
                                <div>
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
                                        <Badge className="mb-10 mr-10" color="dark">Add New</Badge>
                                    </div>
                                </div>
                         </div>
                         <div className="row new-form overall-border no-padding-bottom">  
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <div className="form-group select_label_name"> 
                                            <TextField id="Requestno" fullWidth label="Style Number" placeholder="Request Number"  defaultValue={this.state.requestNumber} onChange={this.onNameEdited.bind(this)}/>
{/*                                                 
                                            <span className="error">{this.state.errors["styleno"]}</span> */}
                                        </div>                                   
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group mt-15"> 
                                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.viewRequestList(e)}><span className="MuiButton-label">Search <i class="ti-eye"></i></span><span className="MuiTouchRipple-root"></span></button> 
                                    </div>   
                                </div> 
                            </div>
                            <table className="table table-middle table-hover mb-0">
                                <thead>
                                    <tr>                                   
                                        <th>FIT</th>
                                        <th>Tech Pack</th>
                                        <th>SAM</th>
                                        <th>Target</th>
                                        <th>Purpose</th>
                                        <th>Pattern</th>
                                        <th>Sample</th>
                                        <th>Marker</th>
                                        <th>Value Add</th>
                                        <th>OUT Pcs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.stylelistData.map((n,index) => {                                   
                                return (
                                    <tr>                                       
                                        <td>{n.fit}</td>
                                        <td>{n.techpack}</td>
                                        <td>{n.sam}</td>
                                        <td>{n.sam}</td>
                                        <td>{n.purpose}</td>   
                                        <td>{n.pattern}</td>   
                                        <td>{n.sample}</td> 
                                        <td>{n.marker}</td>   
                                        <td>{n.valueAdd}</td>  
                                        <td>{n.outpcs}</td>                        
                                    </tr>
                                )
                                })
                            }                                  
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
 