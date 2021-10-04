/**
 * Simple Line Icons
 */
 import React, { Component, Fragment } from 'react';
 import api from 'Api';
 import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col,
	FormFeedback
} from 'reactstrap';

import { Media, Badge } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 import TextField from '@material-ui/core/TextField';
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 import 'font-awesome/css/font-awesome.min.css';
 
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 import { Carousel } from 'react-responsive-carousel';
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'font-awesome/css/font-awesome.min.css';
const $ = require('jquery');
 class InlineFormElement extends Component {
    state = {
		employeePayroll: null
	}

    componentDidMount() {
		this.getEmployeePayrolls();
        $(document).on('click', '.edit', function() {
            $(this).parent().siblings('td.data').each(function() {
              var content = $(this).html();
              $(this).html('<input value="' + content + '" />');
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
            <div className="formelements-wrapper">
                <PageTitleBar title={<IntlMessages id="sidebar.simpleform" />} match={this.props.match} />
                 <div className="row">                
                    <div className="col-sm-12 col-md-12 col-xl-12">
                    
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-xl-12">
                    <RctCollapsibleCard heading="">
                        <div className="row">
                        <div className="table-responsive">
									<div class="MuiPaper-root MUIDataTable-paper-2 undefined MuiPaper-elevation4 MuiPaper-rounded">
									<div class="MuiToolbar-root MuiToolbar-regular MUIDataTableToolbar-root-13 MuiToolbar-gutters" role="toolbar" aria-label="Table Toolbar"><div class="MUIDataTableToolbar-left-15 list-title"><div class="MUIDataTableToolbar-titleRoot-19" aria-hidden="true"><h6 class="MuiTypography-root MUIDataTableToolbar-titleText-20 MuiTypography-h6">Employee list</h6></div></div><div class="MUIDataTableToolbar-actions-17"><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" aria-label="Search" data-testid="Search-iconButton" title="Search"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" data-testid="Download CSV-iconButton" aria-label="Download CSV" title="Download CSV"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><span><span><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" data-testid="Print-iconButton" aria-label="Print" title="Print"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></span></span><span><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" data-testid="View Columns-iconButton" aria-label="View Columns" title="View Columns"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></span><span><button class="MuiButtonBase-root MuiIconButton-root MUIDataTableToolbar-icon-22" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Filter Table"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></span></div></div>
									</div>
									</div>
                            <div className="table-responsive">
                            <table className="table data">
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Actions  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">666-666-666</td>
                                    <td>
                                    <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">666-666-666</td>
                                    <td>
                                        <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                        <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                        <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
                                    </td>
                                    </tr>
                                </tbody>
                                
                                </table>
                            </div>
                        </div>
                    </RctCollapsibleCard>
					</div>
            </div>
   );
 };
}
 export default InlineFormElement;
 
 