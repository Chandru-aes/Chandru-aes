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
 import Avatar from '@material-ui/core/Avatar';
 import { Link } from 'react-router-dom';
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
    ["Buyer 1","1st Division","Autumn","2021","Bangalore","10","10","6","Active"],
    ["Buyer 2","2nd Division","Summer","2021","Bangalore","10","10","6","Active"],
    ["Buyer 3","3rd Division","Winter","2021","Bangalore","10","10","6","Active"],
    ["Buyer 4","5th Division","windy","2021","Bangalore","10","10","6","Active"],
    ["Buyer 5","5th Division","Autumn","2021","Bangalore","10","10","6","Active"],
    ["Buyer 6","6th Division","Winter","2021","Bangalore","10","10","6","Active"],
    ["Buyer 7","7th Division","Summer","2021","Bangalore","10","10","6","Active"],
    
];
 
 class PreprodcutionTable extends Component {
 
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
                 <PageTitleBar title={<IntlMessages id="sidebar.forecasting" />} match={this.props.match} />
                
                 <RctCollapsibleCard heading="Forecast List" fullBlock>                   
                    <div className="float-right tbl-filter-btn">
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
                                </svg>
                            </span>
                        </button>
                        <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="Print-iconButton" aria-label="Print">
                            <span class="MuiIconButton-label">            
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
                                </svg>
                            </span>
                        </button>                            
                        <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="View Columns-iconButton" aria-label="View Columns"> 
                            <span class="MuiIconButton-label">
                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>
                                </svg>
                            </span>
                        </button>
                            
                        <button class="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Filter Table"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                            </svg></span>
                        </button>
                        <Link to="/app/pre-production/add-forecasting">
                        <button class="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Add Forecast">
                        <span class="material-icons mr-10 font-lg">add_circle</span>
                        </button>
                        </Link>
                    </div>
                    <table className="table multi-clr">
                        <thead className="thead-light">
                            <th className="text-center w-10">Actions</th>
                            <th className="text-center w-10">Buyer</th>
                            <th className="text-center w-10">Division</th>
                            <th className="w-10" >Season</th>
                            <th className="" >Year</th>
                            <th className="" >Location</th>
                            <th className="">Forecast Qty</th>
                            <th className="">Projection Qty</th>
                            <th className="">Confirmed Qty</th>
                            <th className="">Activity</th>
                        </thead>
                        <tbody>
                            {data.map(n => {                                    
                                return (
                            <tr>                                               
                                <td className="text-center"><button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                </td>
                                <td className="text-center"> {n[0]}</td>
                                <td className="text-center">{n[1]}</td>
                                <td>{n[2]}</td>
                                <td>{n[3]}</td>
                                <td>{n[4]}</td>
                                <td>{n[5]}</td>
                                <td>{n[6]}</td>
                                <td>{n[7]}</td>
                                <td>{n[8]}</td>
                            </tr>
										 );
									 })}
                        </tbody>
                    </table>
                    <div className="row tb-pro mt-10">
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
                 </RctCollapsibleCard>
             </div>
         );
     }
 }
 
 export default PreprodcutionTable;
 