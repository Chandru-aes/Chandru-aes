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
	// Input,
	FormText,
	Col,
	FormFeedback,Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import Input from '@material-ui/core/Input';
import { Media, Badge } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

 import MUIDataTable from "mui-datatables";
 
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

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';



import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

import PreprodcutionAddTable from '../add-forecasting/index';

import AddNewUserForm from '../../forecast/add-forecasting/ActivityCloneForm';

import QuantityFormClone from '../../forecast/add-forecasting/QuantityCloneForm';

import GuideForm from '../../forecast/add-forecasting/GuideForm';

/**Editable Grid section**/
import DataGrid, {
    Column,
    Editing,
    Paging,
    Selection,
    Lookup,
    Summary, TotalItem
  } from 'devextreme-react/data-grid';
  
  //import { Button } from 'devextreme-react/button';
  import { Template } from 'devextreme-react/core/template';
  
  import ArrayStore from 'devextreme/data/array_store';
  import DataSource from 'devextreme/data/data_source';
  import { employees, states,product_types,sub_product_types } from './data.js';
  import 'devextreme/dist/css/dx.light.css';

  const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
/****/
function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }

 
 class PreprodcutionTable extends Component {
    state = {
		employeePayroll: null,
        activeIndex: 0,
        name: '',
        userlevel: '',
	}
    constructor(props) {
        super(props);
       // this.state = { employees: service.getEmployees() };
       // this.states = service.getStates();
        this.state = {
            selectTextOnEditStart: true,
            startEditAction: 'click'
        };
        this.allowDeleting = this.allowDeleting.bind(this);
        this.onRowValidating = this.onRowValidating.bind(this);
        this.onEditorPreparing = this.onEditorPreparing.bind(this);
        this.isCloneIconVisible = this.isCloneIconVisible.bind(this);
        this.cloneIconClick = this.cloneIconClick.bind(this);
      }
      isChief(position) {
        return position && ['CEO', 'CMO'].indexOf(position.trim().toUpperCase()) >= 0;
      }
      allowDeleting(e) {
        return !this.isChief(e.row.data.Position);
      }
      onRowValidating(e) {
        const position = e.newData.Position;
    
        if(this.isChief(position)) {
          e.errorText = `The company can have only one ${ position.toUpperCase() }. Please choose another position.`;
          e.isValid = false;
        }
      }
      onEditorPreparing(e) {
        if(e.parentType === 'dataRow' && e.dataField === 'Position') {
          e.editorOptions.readOnly = this.isChief(e.value);
        }
      }
      isCloneIconVisible(e) {
        return !e.row.isEditing && !this.isChief(e.row.data.Position);
      }
      cloneIconClick(e) {
        const employees = [...this.state.employees];
       // const clonedItem = { ...e.row.data, ID: service.getMaxID() };
    
        employees.splice(e.row.rowIndex, 0, clonedItem);
        this.setState({ employees: employees });
        e.event.preventDefault();
      }
    opnAddNewUserModal(e) {
        e.preventDefault();
        this.setState({ addNewUserModal: true });
    }
    opnQuantityModal(e){
        e.preventDefault();
        this.setState({ addQuantityModal: true });
    }
    opnguideformmodal(e){
        e.preventDefault();
        this.setState({ guideformmodal: true });
    }
    onAddUpdateUserModalClose() {
        this.setState({ addNewUserModal: false,addQuantityModal:false,guideformmodal:false, editUser: null })
    }

    componentDidMount() {
        this.getEmployeePayrolls();
        //$(this).siblings('.save').hide();
        $(document).on('click', '.edit', function() {
            $(this).parent().siblings('td.data').each(function() {
              var content = $(this).html();
              $(this).html('<input value="' + content + '" class="float-none form-control m-auto w-50"/>');
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

          $(document).on('click', '.add', function() {
             
            $('.qty-breakup-table').append('<tr><td class="text-center"> <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root text-primary  save MuiIconButton-colorPrimary " tabindex="0" type="button" aria-label="Save"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button></td><td class="data"><input value="" class="form-control" placeholder="Qty"></td><td class="data"><input value="" class="form-control" placeholder="location"></td><td class="data"><input value="" class="form-control" placeholder="Category"></td><td class="data"><input value="" class="form-control" placeholder="Sub Category"></td><td class="data"><input value="" class="form-control" placeholder="avg SAM"></td><td class="data"><input value="" class="form-control" placeholder="Tentative start date"></td><td class="data"><input value="" class="form-control" placeholder="Tentative delivery date"></td><td class="data"><input value="" class="form-control" placeholder="Confirm date"></td></tr>');
          });

          $(document).on('click', '.addactivity', function() {
             
            $('.activity-table').append('<tr><td class="text-center"> <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root text-primary  save MuiIconButton-colorPrimary " tabindex="0" type="button" aria-label="Save"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button></td><td class="data"><input value="" class="float-none form-control m-auto w-50" placeholder="Activity Name"></td><td class="data"><input value="" class="float-none form-control m-auto w-50" placeholder="Due Date"></td></tr>');
          });
          
        //   $('.add').click(function() {
        //     $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');
        //   });
	}
    createNotification = (type) => {
        return () => {
           switch (type) {
              case 'info':
                 NotificationManager.info('Info message');
                 break;
              case 'success':
                 NotificationManager.success('Success message');
                 break;
              case 'warning':
                 NotificationManager.warning('Warning message');
                 break;
              case 'error':
                 NotificationManager.error('Error message');
                 break;
              default:
                 NotificationManager.success('Success message', 'Title here');
                 break;
           }
        };
     };

     handleChangeIndex(index) {
        this.setState({ activeIndex: index });
     }

     handleChangeradio = (event) => {
        this.setState({ userlevel:  event.currentTarget.value });        
       
     }
     handleDateChange = (date) => {
		this.setState({ selectedDate: date });
	};
     handleChange(event, value) {
        this.setState({ activeIndex: value });
     }
    

    handleRadioChange = (event) => {
        console.log(event.currentTarget.value);
        this.setState({
          selectedRadio: event.currentTarget.value
        })
        console.log(this.state);
      };
      deleteButtonRender() {
        return <Button
          onClick={this.deleteRecords}
          icon="trash"
          disabled={!this.state.selectedItemKeys.length}
          text="Delete Selected Records">
        </Button>;
      }
      deleteRecords() {
        this.state.selectedItemKeys.forEach((key) => {
          dataSource.store().remove(key);
        });
        this.setState({
          selectedItemKeys: []
        });
        dataSource.reload();
      }
      selectionChanged(data) {
        this.setState({
          selectedItemKeys: data.selectedRowKeys
        });
      }
      onToolbarPreparing(e) {
        e.toolbarOptions.items[0].showText = 'always';
    
        e.toolbarOptions.items.push({
          location: 'after',
          template: 'deleteButton'
        });
      }
	// get employee payrols
	getEmployeePayrolls() {
		api.get('current_subscriptions')
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
        const { selectedDate } = this.state;
        //const columns = ["Buyer Code", "BuyDivCode", "DivName"];
        const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
        //const columns = ['Actions', 'Quantity', 'Location', 'Category', 'Sub Category','Avg SAM','PCD','Tent.ExFact','Confirm Due'];
        // const dataSource = new DataSource({
        //     store: new ArrayStore({
        //       data: employees,
        //       key: 'ID'
        //     })
        //   });
        const data = [
            ["Buyer 1","1st Division","Autumn","2021","Bangalore","10","10","6","Active"],
            ["Buyer 2","2nd Division","Summer","2021","Bangalore","10","10","6","Active"],
            ["Buyer 3","3rd Division","Winter","2021","Bangalore","10","10","6","Active"],
            ["Buyer 4","5th Division","windy","2021","Bangalore","10","10","6","Active"],
            ["Buyer 5","5th Division","Autumn","2021","Bangalore","10","10","6","Active"],
            ["Buyer 6","6th Division","Winter","2021","Bangalore","10","10","6","Active"],
            ["Buyer 7","7th Division","Summer","2021","Bangalore","10","10","6","Active"],
            
        ];
        const options = {
            filterType: 'dropdown'
        };
        return (
            <div className="formelements-wrapper main-layout-class">
                {/* <PageTitleBar title={"Menu Rights<IntlMessages id="sidebar.simpleform" />} match={this.props.match} /> */}
                 <PageTitleBar title="Menu Rights" match={this.props.match} />
                <Accordion>
					<AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                        <div className="acc_title_font">
						    <Typography>Add Forecasting</Typography>
                        </div>
					</AccordionSummary>
					<AccordionDetails> 
                                     
                    <div className="col-sm-12 col-md-12 col-xl-12 p-0">
                    
                    <RctCollapsibleCard heading="">
                        <div className="row new-form mb-10">
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
                                {/* <FormControl fullWidth>
                                    <InputLabel htmlFor="age-simple">Buyer</InputLabel>
                                    <Select value={this.state.age} onChange={this.handleChange}
                                    inputProps={{ name: 'age', id: 'age-simple', }}>
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Levis</MenuItem>
                                    <MenuItem value={20}>Allen</MenuItem>
                                    <MenuItem value={30}>Solly</MenuItem>
                                    </Select>
                                </FormControl> */}
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
                                            <option>Location</option> 
                                            <option>Coimbatore</option> 
                                            <option>Chennai</option> 
                                            <option>Tirupur</option> 
                                        </select> 
                                    </div>                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Forecast Type</option> 
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
                            <div className="col-lg-6 pr-0">
                                <div className="form-group mt-15 text-right">
                                    {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Add <i className="zmdi zmdi-file-plus"></i></span><span className="MuiTouchRipple-root"></span></button> */}
                                    
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.opnguideformmodal(e)}><span className="MuiButton-label">Guide</span><span className="MuiTouchRipple-root"></span></button>
                                </div>
                            </div> 
                        </div> 

                        <AppBar position="static" color="default">
                            <Tabs
                                value={this.state.activeIndex}
                                onChange={(e, value) => this.handleChange(e, value)}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                            >
                                <Tab label="Qty Breakup" />
                                <Tab label="Activity" />                        
                            </Tabs>
                        </AppBar>
                        <SwipeableViews axis={'x'}  index={this.state.activeIndex} onChangeIndex={(index) => this.handleChangeIndex(index)}>
                            <TabContainer>
                                <div className=""> 
                                    <div id="data-grid-demo">
                                    <DataGrid dataSource={employees} keyExpr="ID" showBorders={true} >
                                        <Paging enabled={false} />
                                        <Editing mode="batch" allowUpdating={true}  allowAdding={true}  allowDeleting={true}
                                                selectTextOnEditStart={this.state.selectTextOnEditStart}
                                            startEditAction={this.state.startEditAction} useIcons={true}/>
                                           <Column type="buttons" width={110} caption="Actions">
                                                <Button name="edit" />
                                                <Button name="delete" />
                                                <Button hint="Clone" icon="repeat"  />
                                            </Column>   
                                        <Column dataField="Quantity" caption="Quantity"  />
                                        <Column dataField="ProductTypeId" caption="Product type" >
                                            <Lookup dataSource={product_types} valueExpr="ID" displayExpr="Name" />
                                        </Column>
                                        <Column dataField="SubProductTypeId" caption="Sub-Product type" >
                                            <Lookup dataSource={sub_product_types} valueExpr="ID" displayExpr="Name" />
                                        </Column>
                                        <Column dataField="AvgSAM" caption="Average SAM"/>
                                        <Column dataField="PCD" dataType="date" />
                                        <Column dataField="tent-deli-date" caption="Tentative delivery date" dataType="date" />
                                        <Column dataField="confirm-due-date" caption="Confirmation due date" dataType="date" />
                                        <Column dataField="" caption="Available capacity" width={50}/>
                                      
                                        {/* <Column dataField="LastName" />
                                        <Column dataField="Position" width={170} /> */}
                                        {/* <Column dataField="StateID" caption="State" width={125}>
                                            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
                                        </Column> */}
                                         <Summary>
                                            <TotalItem column="Quantity" summaryType="sum"  valueFormat="#0.00" />
                                        </Summary>
                                        
                                    </DataGrid>
                                    {/* <DataGrid
                                        id="gridContainer"
                                        dataSource={this.state.employees}
                                        keyExpr="ID"
                                        showBorders={true}
                                        onRowValidating={this.onRowValidating}
                                        onEditorPreparing={this.onEditorPreparing}
                                        defaultColumns={columns}>
                                        <Editing
                                        mode="row"
                                        useIcons={true}
                                        allowUpdating={true}
                                        allowDeleting={this.allowDeleting} />
                                        <Column type="buttons" width={110}>
                                        <Button name="edit" className="text-danger"/>
                                        <Button name="delete" />
                                        <Button hint="Clone" icon="repeat" visible={this.isCloneIconVisible} onClick={this.cloneIconClick} />
                                        </Column>
                                        <Column dataField="Prefix" caption="Title" />
                                        <Column dataField="FirstName" />
                                        <Column dataField="LastName" />
                                        <Column dataField="Position" width={130} />
                                        <Column dataField="StateID" caption="State" width={125}>
                                        <Lookup dataSource={this.states} displayExpr="Name" valueExpr="ID" />
                                        </Column>
                                        <Column dataField="BirthDate" dataType="date" width={125} />
                                    </DataGrid> */}
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
                                    </div>
                                    
                                </div>
                            </TabContainer>
                            <TabContainer>
                                <div className="row mt-15 new-form">
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="ActivityName" fullWidth label="Activity Name" placeholder="Activity Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <Fragment>
                                                <div className="rct-picker">
                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        <KeyboardDatePicker
                                                            disableToolbar
                                                            variant="inline"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            id="date-picker-inline"
                                                            KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                            }}
                                                            label="Choose a date"
                                                            value={selectedDate}
                                                            onChange={this.handleDateChange}
                                                            animateYearScrolling={false}
                                                            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                                            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                                            fullWidth
                                                        />
                                                    </MuiPickersUtilsProvider>
                                                </div>
                                            </Fragment>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group mt-15">
                                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic addactivity" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"  onClick={(e) => this.opnAddNewUserModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table data activity-table">
                                        <thead>
                                            <tr>
                                                
                                            <th className="w-33 text-center">Actions</th>
                                            <th className="w-33 text-center">Activity</th>
                                            <th className="w-33 text-center">Due By</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td className="text-center">
                                            <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>
                                            <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Save"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>
                                            <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
                                                {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button> */}
                                            </td>
                                            <td className="data text-center">Activity 1</td>
                                            <td className="data text-center">2021-04-10</td>
                                          
                                            </tr>
                                            <tr>
                                            <td className="text-center">
                                                <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>
                                                <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Save"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>
                                                <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
                                            </td>
                                            <td className="data text-center">Activity 2</td>
                                            <td className="data text-center">2021-11-10</td>
                                          
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabContainer>
                        </SwipeableViews>    

                        <Modal isOpen={this.state.addNewUserModal} toggle={() => this.onAddUpdateUserModalClose()}>
                            <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
                            Activity Form
                            </ModalHeader>
                            <ModalBody>
                                <AddNewUserForm addNewUserDetails={this.state.age} onChangeAddNewUserDetails={this.handleChange.bind(this)}/>
                            </ModalBody>
                            <ModalFooter>                      
                                <Button variant="contained" className="text-white btn-danger">Cancel</Button>
                                <Button variant="contained" className="text-white btn-success">Add</Button>
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={this.state.addQuantityModal} toggle={() => this.onAddUpdateUserModalClose()}>
                            <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
                            Quantity Breakup
                            </ModalHeader>
                            <ModalBody>
                                <QuantityFormClone />
                            </ModalBody>
                            <ModalFooter>
                            
                                <Button variant="contained" className="text-white btn-danger">Cancel</Button>
                                <Button variant="contained" className="text-white btn-success">Add</Button>
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.guideformmodal} toggle={() => this.onAddUpdateUserModalClose()} className="modal-lg">
                            <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
                            Guide
                            </ModalHeader>
                            <ModalBody>
                                <GuideForm />
                            </ModalBody>
                            <ModalFooter>
                            
                                {/* <Button variant="contained" className="text-white btn-danger">Cancel</Button>
                                <Button variant="contained" className="text-white btn-success">Add</Button> */}
                            </ModalFooter>
                        </Modal>
                    </RctCollapsibleCard>
                </div>
					</AccordionDetails>
				</Accordion>
               <br/>

                <div className="row ">   
                {/* d-tbl-sp  */}
                    <div className="col-sm-12 col-md-12 col-xl-12">
                    <RctCollapsibleCard heading="" fullBlock>
                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                            <div className="acc_title_font">
                                <Typography>Forecasting List</Typography>
                            </div>
                            </AccordionSummary>
                            <AccordionDetails>
                            <div className="float-right tbl-filter-btn">
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
                                </svg></span>
                            
                            
                            
                            
                            </button>
                            <button className="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="Print-iconButton" aria-label="Print">
                            
                                            <span className="MuiIconButton-label">
                            
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
                                                </svg></span></button>
                            
                                                <button className="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" data-testid="View Columns-iconButton" aria-label="View Columns">
                            
                            
                            
                                                    <span className="MuiIconButton-label"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>
                                            </svg></span></button>
                            
                                            <button className="MuiButtonBase-root MuiIconButton-root jss26" tabindex="0" type="button" data-testid="Filter Table-iconButton" aria-label="Filter Table" title="Filter Table"><span className="MuiIconButton-label"><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                                            </svg></span></button>
                            </div>
                            <table className="table">
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
                                <td className="text-center">
                                {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button> */}
                                
                               
                                <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>
                                <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>

                                    {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button> */}
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
                            
                            
                                {/* <RctCollapsibleCard heading="" fullBlock> */}
                                {/* <MUIDataTable
                                    // title={"Category List"}
                                    data={data}
                                    columns={columns}
                                    options={options}
                                /> */}
                                {/* </RctCollapsibleCard> */}
                            </AccordionDetails>
                        </Accordion>
                        </RctCollapsibleCard>
					</div>

                    
                </div>
            </div>
   );
 };
}
 export default PreprodcutionTable;
 
 