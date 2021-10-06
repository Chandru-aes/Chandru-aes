/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Table from '@material-ui/core/Table';
 import TableBody from '@material-ui/core/TableBody';
 import TableCell from '@material-ui/core/TableCell';
 import TableHead from '@material-ui/core/TableHead';
 import TableRow from '@material-ui/core/TableRow';
 import { Media, Badge } from 'reactstrap';
 import IconButton from '@material-ui/core/IconButton';
 
 // api
 import api from 'Api';
 
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 // For Basic Table
 let id = 0;
 
 function createData(name, calories, fat, carbs, protein) {
	 id += 1;
	 return { id, name, calories, fat, carbs, protein };
 }
 
 const data = [
	 createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	 createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	 createData('Eclair', 262, 16.0, 24, 6.0),
	 createData('Cupcake', 305, 3.7, 67, 4.3),
	 createData('Gingerbread', 356, 16.0, 49, 3.9),
 ];
 
 class BasicTable extends Component {
 
	 state = {
		 employeePayroll: null
	 }
 
	 componentDidMount() {
		 this.getEmployeePayrolls();
	 }
 
	 // get employee payrols
	 getEmployeePayrolls() {
		 api.get('employeePayrols.js')
			 .then((response) => {
				 this.setState({ employeePayroll: response.data });
			 })
			 .catch(error => {
				 // error handling
			 })
	 }
 
	 render() {
		 const { employeePayroll } = this.state;
		 const { match } = this.props;
		 return (
			 <div className="table-wrapper">
				 <PageTitleBar title={<IntlMessages id="sidebar.basic" />} match={match} />
				 <RctCollapsibleCard heading="Basic Table" fullBlock>
					 <div className="table-responsive">
					 <div className="float-right">
					 <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="Search" data-testid="Search-iconButton" title="Search">
 
		 <span class="MuiIconButton-label">
 
 
		 <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
				 <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
			 </svg>
 
		 </span>
 
	 </button>
 
	 <button class="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Download CSV-iconButton" aria-label="Download CSV" title="Download CSV">
 
 <span class="MuiIconButton-label">
 
 <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
		 <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path>
	 </svg></span>
 
 
 
 
 </button>
 <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="Print-iconButton" aria-label="Print">
 
				 <span class="MuiIconButton-label">
 
					 <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
						 <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
					 </svg></span></button>
 
					 <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="View Columns-iconButton" aria-label="View Columns">
 
 
 
						 <span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
					 <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>
				 </svg></span></button>
 
				 <button class="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Filter Table"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
					 <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
				 </svg></span></button>
 </div>
						 <Table>
							 <TableHead>
								 <TableRow hover>
									 <TableCell>Dessert (100g serving)</TableCell>
									 <TableCell align="left">Calories</TableCell>
									 <TableCell align="left">Fat (g)</TableCell>
									 <TableCell align="left">Carbs (g)</TableCell>
									 <TableCell align="left">Protein (g)</TableCell>
								 </TableRow>
							 </TableHead>
							 <TableBody>
								 <Fragment>
									 {data.map(n => {
										 return (
											 <TableRow hover key={n.id}>
												 <TableCell>{n.name}</TableCell>
												 <TableCell align="left">{n.calories}</TableCell>
												 <TableCell align="left">{n.fat}</TableCell>
												 <TableCell align="left">{n.carbs}</TableCell>
												 <TableCell align="left">{n.protein}</TableCell>
											 </TableRow>
										 );
									 })}
								 </Fragment>
							 </TableBody>
						 </Table>
						 <div className="row tb-pro mt-10">
			 <div className="w-100">
				 <div className="w-25 float-left">
					 <div className="form-group">
						 <div className="w-50 float-left text-center">
							 <label for="exampleFormControlSelect1">Rows per page</label>
						 </div>
						 <div className="w-25 float-left">
							 <select className="form-control" id="exampleFormControlSelect1">
								 <option>10</option>
								 <option>20</option>
								 <option>30</option>
								 <option>40</option>
								 <option>50</option>
							 </select>
						 </div>
					 </div>
				 </div>
				 <div className="w-25 float-right">
					 <nav aria-label="Page navigation example">
						 <ul className="pagination justify-content-end">
							 <li className="page-item disabled">
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
					 </div>
				 </RctCollapsibleCard>
				 <RctCollapsibleCard heading="Employee Payroll" fullBlock>
					 <div className="table-responsive">
						 <Table>
							 <TableHead>
								 <TableRow hover>
									 <TableCell>Name</TableCell>
									 <TableCell>Designation</TableCell>
									 <TableCell>Salary</TableCell>
									 <TableCell>Status</TableCell>
									 <TableCell>Action</TableCell>
								 </TableRow>
							 </TableHead>
							 <TableBody>
								 <Fragment>
									 {employeePayroll && employeePayroll.map((employee, key) => (
										 <TableRow hover key={key}>
											 <TableCell>
												 <Media>
													 <Media left>
														 <Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />
													 </Media>
													 <Media body><h5 className="m-0 pt-15">{employee.employeeName}</h5></Media>
												 </Media>
											 </TableCell>
											 <TableCell>{employee.designation}</TableCell>
											 <TableCell>${employee.salary}</TableCell>
											 {employee.status === 1 ?
												 <TableCell><Badge color="success">Done</Badge></TableCell>
												 : <TableCell><Badge color="warning">Done</Badge></TableCell>
											 }
											 <TableCell>
												 <IconButton className="text-success" aria-label="Delete"><i className="zmdi zmdi-check-all"></i></IconButton>
												 <IconButton className="text-danger" aria-label="Add an alarm"><i className="zmdi zmdi-close"></i></IconButton>
											 </TableCell>
										 </TableRow>
									 ))}
								 </Fragment>
							 </TableBody>
						 </Table>
						 
					 </div>
				 </RctCollapsibleCard>
				 <RctCollapsibleCard heading="Contextual colored Table" fullBlock>
					 <div className="table-responsive">
						 <Table>
							 <TableHead>
								 <TableRow>
									 <TableCell>Order ID</TableCell>
									 <TableCell>Invoice</TableCell>
									 <TableCell>Customer Name</TableCell>
									 <TableCell>Profitment</TableCell>
									 <TableCell>Status</TableCell>
								 </TableRow>
							 </TableHead>
							 <TableBody>
								 <TableRow className="table-primary">
									 <TableCell>#10001</TableCell>
									 <TableCell>INV-001001</TableCell>
									 <TableCell>Juan Rodriquez</TableCell>
									 <TableCell>$120.40</TableCell>
									 <TableCell><Badge color="info" className="badge-pill">Pending</Badge></TableCell>
								 </TableRow>
								 <TableRow className="table-secondary">
									 <TableCell>#10002</TableCell>
									 <TableCell>INV-001002</TableCell>
									 <TableCell>Grace Maldonado</TableCell>
									 <TableCell>$45.40</TableCell>
									 <TableCell><Badge color="success" className="badge-pill">Paid</Badge></TableCell>
								 </TableRow>
								 <TableRow className="table-success">
									 <TableCell>#10003</TableCell>
									 <TableCell>INV-001003</TableCell>
									 <TableCell>Johnny Gonzales</TableCell>
									 <TableCell>$45.40</TableCell>
									 <TableCell><Badge color="danger" className="badge-pill">Canceled</Badge></TableCell>
								 </TableRow>
								 <TableRow className="table-danger">
									 <TableCell>#10004</TableCell>
									 <TableCell>INV-001004</TableCell>
									 <TableCell>Juan Rodriquez</TableCell>
									 <TableCell>$155.40</TableCell>
									 <TableCell><Badge color="success" className="badge-pill">Paid</Badge></TableCell>
								 </TableRow>
								 <TableRow className="table-info">
									 <TableCell>#10002</TableCell>
									 <TableCell>INV-001002</TableCell>
									 <TableCell>Grace Maldonado</TableCell>
									 <TableCell>$45.40</TableCell>
									 <TableCell><Badge color="danger" className="badge-pill">Canceled</Badge></TableCell>
								 </TableRow>
								 <TableRow className="table-secondary">
									 <TableCell>#10003</TableCell>
									 <TableCell>INV-001003</TableCell>
									 <TableCell>Johnny Gonzales</TableCell>
									 <TableCell>$45.40</TableCell>
									 <TableCell><Badge color="info" className="badge-pill">Pending</Badge></TableCell>
								 </TableRow>
							 </TableBody>
						 </Table>
					 </div>
				 </RctCollapsibleCard>
			 </div>
		 );
	 }
 }
 
 export default BasicTable;
 