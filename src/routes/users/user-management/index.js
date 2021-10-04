/**
 * User Management Page
 */
 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import Button from '@material-ui/core/Button';
 import Checkbox from '@material-ui/core/Checkbox';
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
 
 import MUIDataTable from "mui-datatables";
 // api
 import api from 'Api';
 
 // delete confirmation dialog
 import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';
 
 // add new user form
 import AddNewUserForm from './AddNewUserForm';
 
 // update user form
 import UpdateUserForm from './UpdateUserForm';
 
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 // rct section loader
 import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';
 
 export default class UserProfile extends Component {
 
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
		 const columns = ["Category Name", "Description", "Location", "Code", "Amount"];
		 const data = [
			 ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
			 ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
			 ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
			 ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
			 ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
			 ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
			 ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
			 ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
			 ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
			 ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
			 ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
			 ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
			 ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
			 ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
			 ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
			 ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
			 ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
			 ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
			 ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
			 ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
			 ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
			 ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
			 ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
			 ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
			 ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
			 ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
			 ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
			 ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
			 ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
			 ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
		 ];
		 const options = {
			 filterType: 'dropdown'
		 };
		 return (
			 <div className="user-management">
				 <Helmet>
					 <title>Ambattur Fashion India Private Limited(AFIPL)</title>
					 <meta name="description" content="Ambattur Fashion India Private Limited(AFIPL)" />
				 </Helmet>
				 <PageTitleBar
					 title={<IntlMessages id="sidebar.userManagement" />}
					 match={this.props.match}
				 />
				 <RctCollapsibleCard fullBlock>
					 <div className="table-responsive">
						 <div className="d-flex justify-content-between py-20 px-10 border-bottom">
							 <div>
								 <a href="#" onClick={(e) => this.onReload(e)} className="btn-outline-default mr-10"><i className="ti-reload"></i></a>
								 {/* <a href="#" onClick={e => e.preventDefault()} className="btn-outline-default mr-10">More</a> */}
							 </div>
							 <div>
								 {/* <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a> */}
								 {/*<a href="#" onClick={(e) => this.opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New User <i className="zmdi zmdi-plus"></i></a>*/}
								 <div className="col-sm-12 col-md-12 col-xl-12 ft-lft">                     
									 <div className="form-group">
										 <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button" onClick={(e) => this.opnAddNewUserModal(e)}><span class="MuiButton-label">Add New Category <i class="zmdi zmdi-plus"></i></span><span class="MuiTouchRipple-root"></span></button>
									 </div>                       
								 </div> 
							 </div>
						 </div>
						 <div className="row">   
							<div className="col-sm-12 col-md-12 col-xl-12">
								<RctCollapsibleCard heading="" fullBlock>
								<MUIDataTable
									title={"Category List"}
									data={data}
									columns={columns}
									options={options}
								/>
								</RctCollapsibleCard>

								</div>
						</div>
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
							 'Add New Category' : 'Update User'
						 }
					 </ModalHeader>
					 <ModalBody>
						 {editUser === null ?
							 <AddNewUserForm
								 addNewUserDetails={this.state.addNewUserDetail}
								 onChangeAddNewUserDetails={this.onChangeAddNewUserDetails.bind(this)}
							 />
							 : <UpdateUserForm user={editUser} onUpdateUserDetail={this.onUpdateUserDetails.bind(this)} />
						 }
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
 