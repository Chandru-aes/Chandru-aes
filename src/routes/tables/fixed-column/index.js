/**
 * Data Table
 */
 import React from 'react';
 import MUIDataTable from "mui-datatables";
 
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 const $ = require('jquery');
$.DataTable = require('datatables.net')
 
 class FixedColumnTable extends React.Component {
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
	 render() {
		
		 return (		 
			 <div className="data-table-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.dataTable" />} match={this.props.match} />
				 <RctCollapsibleCard fullBlock>
					 
				 	<div className="row">
					 	<div className="col-sm-6 col-md-6 col-xl-12">
						 <div className="table-responsive">
									<div class="MuiPaper-root MUIDataTable-paper-2 undefined MuiPaper-elevation4 MuiPaper-rounded">
									<div class="MuiToolbar-root MuiToolbar-regular MUIDataTableToolbar-root-13 MuiToolbar-gutters" role="toolbar" aria-label="Table Toolbar"><div class="MUIDataTableToolbar-left-15 list-title"><div class="MUIDataTableToolbar-titleRoot-19" aria-hidden="true"><h6 class="MuiTypography-root MUIDataTableToolbar-titleText-20 MuiTypography-h6">Employee list</h6></div></div><div class="MUIDataTableToolbar-actions-17"><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" aria-label="Search" data-testid="Search-iconButton" title="Search"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" data-testid="Download CSV-iconButton" aria-label="Download CSV" title="Download CSV"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><span><span><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" data-testid="Print-iconButton" aria-label="Print" title="Print"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></span></span><span><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" data-testid="View Columns-iconButton" aria-label="View Columns" title="View Columns"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></span><span><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Filter Table"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></span></div></div>
									</div>
									</div>
									<div className="table-container">
										<table class="fixedcolumn">
											<tr>
												<th>Actions</th>
												<th>Title</th>
												<th>Location</th>
												<th>Age</th>
												<th>Salary</th>
												<th>Header 6</th>
												<th>Header 7</th>
												<th>Header 8</th>
												<th>Header 9</th>
												<th>Header 10</th>
												<th>Header 11</th>
												<th>Header 12</th>
												<th>Header 13</th>
												<th>Header 14</th>
												<th>Header 15</th>
												<th>Header 16</th>
												<th>Header 17</th>
											</tr>
											<tr>
												<td>
												
													<button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-eye"></i></span><span class="MuiTouchRipple-root"></span></button>

													 <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

											 		<button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
												</td>
												<td>H12</td>
												<td>H13</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
												<td>H12</td>
												<td>H13</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
											</tr>
											<tr>
											<td>
												
												<button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-eye"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
											</td>
											<td>H25</td>
											<td>H25</td>
												<td>H24</td>
												<td>H25</td>
												<td>H26</td>
												<td>H27</td>
												<td>H12</td>
												<td>H13</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
											</tr>
											<tr>
											<td>
												
												<button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-eye"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
											</td>
												<td>H32</td>
												<td>H33</td>
												<td>H34</td>
												<td>H35</td>
												<td>H36</td>
												<td>H37</td>
												<td>H12</td>
												<td>H13</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
											</tr>
											<tr>
											<td>
												
												<button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-eye"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
											</td>
												<td>H42</td>
												<td>H44</td>
												<td>H44</td>
												<td>H45</td>
												<td>H46</td>
												<td>H47</td>
												<td>H12</td>
												<td>H13</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
											</tr>
											<tr>
											<td>
												
												<button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-eye"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
											</td>
												<td>H52</td>
												<td>H54</td>
												<td>H54</td>
												<td>H55</td>
												<td>H56</td>
												<td>H57</td>
												<td>H12</td>
												<td>H13</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
											</tr>											
											<tr>
											<td>
												
												<button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-eye"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
											</td>
											<td>H25</td>
											<td>H25</td>
												<td>H84</td>
												<td>H85</td>
												<td>H86</td>
												<td>H87</td>
												<td>H12</td>
												<td>H13</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
											</tr>
											<tr>
											<td>
												
												<button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-eye"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

												 <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
											</td>
												<td>H82</td>
												<td>H84</td>
												<td>H84</td>
												<td>H85</td>
												<td>H86</td>
												<td>H87</td>
												<td>H12</td>
												<td>H13</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
												<td>H14</td>
												<td>H15</td>
												<td>H16</td>
												<td>H17</td>
											</tr>
										</table>
								</div>
							</div>							
						</div>		
					</RctCollapsibleCard>
				</div>
		 );
	 }
 }
 
 export default FixedColumnTable;
 
 