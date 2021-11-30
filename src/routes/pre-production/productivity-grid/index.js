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

 import Select1 from "react-dropdown-select";
 
 class Productivitygrid extends Component {
    
     state = {
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
         selectedUsers: 0,
         BuyerDivisionList:[],
         BuyerdivisionValue:[],
         
         fields: {},
        errors: {},
        // styleno:'',
        overalllists:[],
        stylenolists:[],
        styleno:[],
        buyerlists:[],
        buyer:[],
        docnumberlists:[],
        docnumber:[],
     }
     constructor(props) {
        super(props);
       // this.state = { employees: service.getEmployees() };
       // this.states = service.getStates();
      
     }
     componentDidMount() {
        api.get('Buyer/GetBuyerDropDown')
        .then((response) => {
            
            this.setState({ buyerlists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

        // api.get('BuyerDivision/GetBuyerDivisionDropDown')
        // .then((response) => {                
        //     this.setState({ BuyerDivisionList: response.data.result.data });
        // })        
        // .catch(error => {})  

        api.get('StyleHeader/GetStyleHeaderList')
        .then((response) => {
            
            this.setState({ stylenolists: response.data.data });
        })
        .catch(error => {
            // error handling
        })

    
        
        
     }

     docnumberfilter(){
        
        if(this.state.buyer.length>0 && this.state.BuyerdivisionValue.length>0 && this.state.styleno.length>0){
            this.setState({docnumber:[]});
            api.get('ProductivityGrid/GetProductivityDocNoDropDown?Bcode='+this.state.buyer[0].value+'&BDivCode='+this.state.BuyerdivisionValue[0].value+'&Style='+this.state.styleno[0].value)
            .then((response) => {
                
                this.setState({ docnumberlists: response.data.data });
            })
            .catch(error => {
                // error handling
            })
        }
     }

     getBuyerDivision1(val,field,e){
        let fields = this.state.fields;
        this.setState({ BuyerDivisionList: [],BuyerdivisionValue:[] });
        if(val.buyer.length!=0){
            fields['buyer'] = val.buyer[0].value;        
            this.setState({fields});

            this.setState({ buyer: val.buyer });
            api.get('BuyerDivision/GetBuyerDivisionList?BuyerID='+val.buyer[0].value)
            .then((response) => {                
                this.setState({ BuyerDivisionList: response.data.result.data });
            })        
            .catch(error => {}) 
            
        } else{
            fields['buyer'] = '';        
            this.setState({fields});
        }

        // fields['buyer'] = val.buyer[0].value;        
        // this.setState({fields});

                  
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
     
     setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
        this.setState({ [name]: event });
        if(event.length!=0){
           
            fields[name] = event[0].value;        
            this.setState({fields});
        } else{
            fields[name] = '';        
            this.setState({fields});
        }
        if(name!="docnumber"){
            setTimeout(() => {
                this.docnumberfilter();
            }, 200);
        }
       
      
		
	};
    
    setTextboxvalue = name => event => {
        let fields = this.state.fields;
        fields[name] =event.target.value;
        this.setState({fields});

		this.setState({ [name]: event.target.value });
	};
    viewRequestList(e){
        e.preventDefault();
        if(this.handleValidation()){
            this.getRequestGridList();
        }    
    }
    getRequestGridList(){
       
        api.get('ProductivityGrid/GetProductivityGridData?Buyer='+this.state.fields.buyer+'&Buyerdivision='+this.state.fields.BuyerdivisionValue+'&Style='+this.state.fields.styleno+'&DocNum='+this.state.fields.docnumber)
        .then((response) => response.data.data)
        .then(overalllists => {
            this.setState({ overalllists: overalllists });
        });
        // .then((response) => {  
                    
        //     this.setState({ overalllists: response.data.data });

            
        // })
    }

    
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
       
        if(!fields["buyer"]){
            formIsValid = false;
            errors["buyer"] = "Cannot be empty";
        }
        if(!fields["BuyerdivisionValue"]){
            formIsValid = false;
            errors["BuyerdivisionValue"] = "Cannot be empty";
        }
        
        if(!fields["styleno"]){
            formIsValid = false;
            errors["styleno"] = "Cannot be empty";
        }

        if(!fields["docnumber"]){
            formIsValid = false;
            errors["docnumber"] = "Cannot be empty";
        }
        
      
        this.setState({errors: errors});
        return formIsValid;
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
    

         const buyeroptions = [];
         for (const item of this.state.buyerlists) {           
             buyeroptions.push({value:item.buyerCode,label:item.buyerName});
         }


         const BuyerDivisionOptions =[];
         for (const item of this.state.BuyerDivisionList) {           
             BuyerDivisionOptions.push({value:item.divisionCode,label:item.divisionName});
         }

         const stylenooptions = [];
         for (const item of this.state.stylenolists) {           
             stylenooptions.push({value:item.masterStyle,label:item.masterStyle});
         }

         const docnumberoptions = [];
         for (const item of this.state.docnumberlists) {           
             docnumberoptions.push({value:item.prReqNo,label:item.prReqNo});
         }
         
        
        //console.log(this.state.overalllists)
        let buyerrightlistshtml = null;
        if(this.state.overalllists.length>0){
            buyerrightlistshtml= this.state.overalllists.map((n,index) => {                                    
            return (
                <tr>               
                    <td>
                        <div className="media">                                                
                                <img src={require('Assets/avatars/style-img1.png')} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />                                                    
                        </div>
                    </td>
                    <td>{n.docNum}</td> 
                    <td>{n.createdDate}</td>
                    <td>{n.style}</td>
                    <td>{n.orderQuantity}</td>
                    {/* <td><Link to='/app/pre-production/request-style-list'>{n.styleNumber}</Link></td>                     */}
                    <td>{n.sam}</td>                                    
                    <td>{n.productivity}</td>     
                    {/* <td><span className={`badge badge-success badge-pill ft-lft`}>{n.colorStatus}</span></td>     */}
                </tr>
            );
        }) }else{
            buyerrightlistshtml = <tr><td colSpan="7" className="no-records-data"><span>No records found</span></td></tr> ;
        }
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
                 <RctCollapsibleCard fullBlock heading="Productivity Request List">
                  
                    <div className="row new-form overall-border no-padding-bottom">   
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                <div className="form-group select_label_name mt-15"> 
                                    <Select1  dropdownPosition="auto"  createNewLabel="Buyer "
                                        options={buyeroptions} ref="buyer"
                                        placeholder="Buyer "
                                        // onChange={this.setstatevaluedropdownfunction('buyer')}
                                        onChange={values => this.getBuyerDivision1({ buyer:values },this,"buyer")}
                                        //onChange={this.handleChangeValidate.bind(this, "buyer",this.state.buyer)} 
                                        //onChange={values => this.setState({ buyer:values })}
                                        values={this.state.buyer}
                                    /> 
                                    <span className="error">{this.state.errors["buyer"]}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                <div className="form-group select_label_name mt-15"> 
                                    <Select1  dropdownPosition="auto"  createNewLabel="Buyer Division"
                                        options={BuyerDivisionOptions} ref="buyerdivision"
                                        placeholder="Buyer Division"
                                        onChange={this.setstatevaluedropdownfunction('BuyerdivisionValue')}
                                        //onChange={this.handleChangeValidate.bind(this, "buyerdivision",this.state.BuyerdivisionValue)} 
                                        //onChange={values => this.setState({ BuyerdivisionValue:values })}
                                        values={this.state.BuyerdivisionValue}
                                    /> 
                                    <span className="error">{this.state.errors["BuyerdivisionValue"]}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                <div className="form-group select_label_name mt-15"> 
                                    <Select1  dropdownPosition="auto"  createNewLabel="Style Number "
                                        options={stylenooptions} ref="styleno"
                                        placeholder="Style Number "
                                        onChange={this.setstatevaluedropdownfunction('styleno')}
                                        //onChange={this.handleChangeValidate.bind(this, "styleno",this.state.styleno)} 
                                        //onChange={values => this.setState({ styleno:values })}
                                        values={this.state.styleno}
                                    /> 
                                    <span className="error">{this.state.errors["styleno"]}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                <div className="form-group select_label_name mt-15"> 
                                    <Select1  dropdownPosition="auto"  createNewLabel="Document Number"
                                        options={docnumberoptions} ref="docnumber"
                                        placeholder="Document Number"
                                        onChange={this.setstatevaluedropdownfunction('docnumber')}
                                        //onChange={this.handleChangeValidate.bind(this, "docnumber",this.state.docnumber)} 
                                        //onChange={values => this.setState({ docnumber:values })}
                                        values={this.state.docnumber}
                                    /> 
                                    <span className="error">{this.state.errors["docnumber"]}</span>
                                    </div>
                                </div>
                            </div>

                           
                           
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group mt-15"> 
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.viewRequestList(e)}><span className="MuiButton-label">View <i class="ti-eye"></i></span><span className="MuiTouchRipple-root"></span></button> 
                                </div>   
                            </div>                     
                        </div> 
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
                                        <Link to='/app/pre-production/production-request'><Badge className="mb-10 mr-10" color="dark">Add New</Badge></Link>
                                    </div>
                                </div>
                         </div>
                         <table className="table table-middle table-hover mb-0">
                             <thead>
                                 <tr>
                                     {/* <th className="w-5">
                                         <FormControlLabel
                                             control={
                                                 <Checkbox
                                                     indeterminate={selectedUsers > 0 && selectedUsers < users.length}
                                                     checked={selectedUsers > 0}
                                                     onChange={(e) => this.onSelectAllUser(e)}
                                                     value="all"
                                                     color="primary"
                                                 />
                                             }
                                             label="All"
                                         />
                                     </th> */}
                                     <th>Style Image</th>
                                     <th>Document Number</th>
                                     <th>Date</th>
                                     <th>Style</th>
                                     <th>Order Quantity</th>
                                     <th>SAM</th>                                    
                                     <th>Productivity</th>
                                 </tr>
                             </thead>
                             <tbody>
                             { buyerrightlistshtml &&
                             buyerrightlistshtml}
                            
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
                                                    <a className="page-link" tabindex="-1">Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link">1</a></li>
                                                <li className="page-item"><a className="page-link">2</a></li>
                                                <li className="page-item"><a className="page-link">.&nbsp;&nbsp;.&nbsp;&nbsp;.</a></li>
                                                <li className="page-item"><a className="page-link">100</a></li>
                                                <li className="page-item">
                                                    <a className="page-link">Next</a>
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
 export default Productivitygrid;
 