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
	FormFeedback
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


import Select1 from "react-dropdown-select";


// import TextField from '@material-ui/core/TextField';
// import FormHelperText from '@material-ui/core/FormHelperText';
function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }

 
 class MenurightsElement extends Component {
     
    state = {
        buyerlists:[],
        menuRightsList:[],
        moduleLists:[],
        LocationItem:[],
        RoleTypeList:[],
        UnitCodeList:[],
		employeePayroll: null,
        activeIndex: 0,
        name: '',
        userlevel: '',
        WHCategory:'',
        ICategory:'',
        fromuser: [
            // {
            //   value: "1",
            //   label: "Admin"
            // }
        ],
        touser:[],
        username:'',
        modulename:'',
        unitcodename:'',
        modulenameValue:[],
        lpcationItemValue:[],
        codeItemValue:[],
        location:'',
        module:'',
        roletype:[],
        MenurightsSaveList:[],
        textInputValues: [],
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

     handleChangesingledropdown = name => event => {
		this.setState({ [name]: event.target.value });
	};

     handleChangeIndex(index) {
        this.setState({ activeIndex: index });
     }

     handleChangeradio = (event) => {
        this.setState({ userlevel:  event.currentTarget.value });
     }

     handleChange(event, value) {
        this.setState({ activeIndex: value });
     }
    componentDidMount() {
		this.getEmployeePayrolls();
	}

    handleRadioChange = (event) => {
        this.setState({
          selectedRadio: event.currentTarget.value
        })
      };

    handleRightsItem(event,index,menuRights) {
        console.log(event)
        
        const { MenurightsSaveList } = this.state;
        MenurightsSaveList[index] = event;
        MenurightsSaveList[index]['menuRights'] = menuRights;
        
        this.setState({ MenurightsSaveList });
        console.log(this.state.MenurightsSaveList)
    }
    saveMenuRights(){
        console.log(this.state)
        const dataset = [];
        for (const item of this.state.menuRightsList) { 
            this.state.textInputValues[this.state.menuRightsList.indexOf(item)]
            dataset.push({
                "roleId": "50",
                "appName": item.appName,
                "menuId": item.menuId,
                "menuRights": item.menuRights,
                "columnRights": this.state.textInputValues[this.state.menuRightsList.indexOf(item)],
                "unitCode": this.state.unitcodename[0].value,
                "createdBy": "1",
                "modifyBy": "1",
                "modifyDt": "2021-10-10",
                "locCode": item.locCode,
                "hostName": "ADmin"
            });
        }
        let data = {
            "rmrInsertModel":dataset};
                api.post('RoleMenuRights/SaveRoleMenuRights',data) .then((response) => {
                    
                    NotificationManager.success('Added Sucessfully');
                })
                .catch(error => {
                    // error handling
                })
    }
	// get employee payrols
	getEmployeePayrolls() {
      
        api.get('Buyer/GetBuyerDropDown')
        .then((response) => {
            
            this.setState({ buyerlists: response.data.result.data });
        })        
        .catch(error => {
            // error handling
        })

        api.get('UserBuyerRights/GetUserBuyerRightsList')
        .then((response) => { 
            this.setState({ buyerrightlists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })


        api.get('Miscellaneous/GetMiscellaneousDropDown?MType=module')
        .then((response) => {            
            this.setState({ moduleLists: response.data.result.data });
        })

        api.get('Location/GetLocationDropDown')
        .then((response) => {            
            this.setState({ LocationItem: response.data.result.data });
        })

        api.get('RoleMaster/GetRoleMasterList')
        .then((response) => {            
            this.setState({ RoleTypeList: response.data.result.data });
        })

        api.get('RoleMenuRights/GeRoleMenuRightsList')
        .then((response) => {            
            this.setState({ menuRightsList: response.data.result.data });
        })

        api.get('Unit/GetUnitDropDown')
        .then((response) => {            
            this.setState({ UnitCodeList: response.data.result.data });
        })
        
	}
    onNameEdited(i, event){
        let textInputValues = [...this.state.textInputValues];
        textInputValues[i] = event.target.value;
        this.setState({ textInputValues });
        console.log(this.state.textInputValues)

    }
    fetchMenuRights(){
        const RoleID = 50;//this.state.roletype[0].value;
        const AppName = this.state.modulename[0].value;
        const LocCode = this.state.location[0].value;
        const UnitCode = this.state.unitcodename[0].value;
        api.get('RoleMenuRights/GeRoleMenuRightsList?RoleId='+RoleID+'&AppName='+AppName+'&LocCode='+LocCode+'&UnitCode='+UnitCode+'')
        .then((response) => {            
            this.setState({ menuRightsList: response.data.result.data });
        })
    }
    render() {
        
        const options1 = [];         
        for (const item of this.state.buyerlists) {           
            options1.push({value:item.buyerCode,label:item.buyerName});
        }

        const moduleListOptions = [];         
        for (const item of this.state.moduleLists) {           
            moduleListOptions.push({value:item.code,label:item.code});
        }

        const locationItemOptions = [];         
        for (const item of this.state.LocationItem) {           
            locationItemOptions.push({value:item.locCode,label:item.locName});
        }
        
        const RoleOptions =[];
        for (const item of this.state.RoleTypeList) {           
            RoleOptions.push({value:item.roleId,label:item.roleDesc});
        }

        const UnitItemOptions =[];
        for (const item of this.state.UnitCodeList) {           
            UnitItemOptions.push({value:item.uCode,label:item.uName});
        }

       
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
                                <Typography>Add Menu Rights</Typography>
                            </div>
                        </AccordionSummary>
					    <AccordionDetails>                                      
                            <div className="col-sm-12 col-md-12 col-xl-12 p-0">                    
                                <RctCollapsibleCard heading="">
                                    <div className="w-50 float-right pr-0 but-tp">
                                        <Form> 
                                            <Button disabled={this.state.menuRightsList.length==0}  onClick={(e) =>this.saveMenuRights()} color="primary" variant="contained" className="pull-right b-sm btn-success">
                                                save <i className="zmdi zmdi-save"></i>
                                            </Button>
                                            {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={this.createNotification('success')} disabled={!this.state.menuRightsList}><span className="MuiButton-label">save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button> */}

                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger  text-white btn-icon pull-right b-sm mr-10" tabindex="0" type="button" onClick={this.createNotification('warning')}><span className="MuiButton-label">Cancel <i className="zmdi zmdi-close"></i></span><span className="MuiTouchRipple-root"></span></button>
                                            
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={this.createNotification('error')}><span className="MuiButton-label">Report <i className="zmdi zmdi-file"></i></span><span className="MuiTouchRipple-root"></span></button>

                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon pull-right b-md mr-10" tabindex="0" type="button" onClick={(e) =>this.fetchMenuRights()}><span className="MuiButton-label">Menu Rights <i className="zmdi zmdi-menu"></i></span><span className="MuiTouchRipple-root"></span></button>                               
                                        </Form>                               
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="row new-form">
                                        <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12 p-0 mt-15">
                                            <div className="row">
                                                <div className="w-50 ">
                                                    <div className="w-20 float-left pl-10">
                                                        <InputLabel htmlFor="age-simple" className="pl-15 pt-10">User Level :</InputLabel>
                                                    </div>
                                                    <div className="w-75 float-left">
                                                        <RadioGroup row aria-label="anchorReference" name="anchorReference">
                                                            <div className="w-25">
                                                                <FormControlLabel color="primary" value="roleuser"  control={<Radio onChange={this.handleChangeradio} checked/>} label="Role User" />
                                                            </div>
                                                        </RadioGroup>
                                                    </div>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row new-form">                            
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">    
                                                <div className="form-group select_label_name m-btop-10"> 
                                                    <Select1  dropdownPosition="auto"    createNewLabel="Role Type"
                                                            options={RoleOptions}
                                                            onChange={values => this.setState({ roletype:values })}
                                                            placeholder="Role Type"
                                                            values={this.state.roletype}
                                                    />
                                                </div>
                                            </div>
                                        </div>                          
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">   
                                                        
                                                <div className="form-group m-btop-10">   
                                                    <FormControl fullWidth>
                                                        <Select1  dropdownPosition="auto"
                                                        //   multi
                                                            createNewLabel="Module"
                                                            options={moduleListOptions}
                                                            onChange={values => this.setState({ modulename:values })}
                                                            placeholder="Module"
                                                            values={this.state.modulenameValue}
                                                        />  
                                                    </FormControl> 
                                                </div>                                    
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group"> 
                                                <div className="form-group m-btop-10">   
                                                    <FormControl fullWidth>
                                                        <Select1  dropdownPosition="auto"
                                                        //   multi
                                                            createNewLabel="Location"
                                                            options={locationItemOptions}
                                                            onChange={values => this.setState({ location:values })}
                                                            placeholder="Location"
                                                            values={this.state.lpcationItemValue}
                                                        />  
                                                    </FormControl> 
                                                </div>  
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group"> 
                                                <div className="form-group m-btop-10">   
                                                    <FormControl fullWidth>
                                                        <Select1  dropdownPosition="auto"
                                                        //   multi
                                                            createNewLabel="Unit Code"
                                                            options={UnitItemOptions}
                                                            onChange={values => this.setState({ unitcodename:values })}
                                                            placeholder="Unit Code"
                                                            values={this.state.codeItemValue}
                                                        />  
                                                    </FormControl> 
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                </RctCollapsibleCard>
                            </div>
					    </AccordionDetails>
				    </Accordion>
                    <br/>
                    <div className="row "> 
                        <div className="col-sm-12 col-md-12 col-xl-12">
                            <RctCollapsibleCard heading="" fullBlock>
                                <Accordion>
                                    <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                        <div className="acc_title_font">
                                            <Typography>Menu Rights</Typography>
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
                                            </svg></span>
                                            </button>
                                        </div>
                                        <table className="table">
                                            <thead className="thead-light">
                                                <th className="w-25">Menu Name</th>
                                                <th className="w-25">Menu Type</th>
                                                <th className="text-center w-10" >Full</th>
                                                <th className="text-center w-10" >Read Only</th>
                                                <th className="text-center w-10" >No Access</th>
                                                <th className="w-20">Column rights</th>
                                            </thead>
                                            <tbody>
                                                {this.state.menuRightsList.map((n,index) => {
										            return (
                                                <tr>                                               
                                                    <td>{n.menuName}</td>
                                                    <td>{n.menuType}</td>
                                                    <td align="center" className="radio-effects">
                                                        <input type="radio"  name={index} onClick={(e) =>this.handleRightsItem(n,index,'F')} checked={n.menuRights=='F'}/>
                                                    </td>
                                                    <td align="center" className="radio-effects">
                                                        <input type="radio"  name={index} onClick={(e) =>this.handleRightsItem(n,index,'R')} checked={n.menuRights=='R'}/>
                                                    </td>
                                                    <td align="center" className="radio-effects">
                                                        <input type="radio"  name={index} onClick={(e) =>this.handleRightsItem(n,index,'N')} checked={n.menuRights=='N'}/>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">                                            
                                                            <input type="email" className="form-control" value={n.columnRights} onChange={this.onNameEdited.bind(this, index)}/>                                        
                                                        </div>
                                                    </td>
                                                </tr>
										        );
									            })}
                                                {this.state.menuRightsList.length === 0 && (
                                                    <td colSpan="6" className="no-records-data">
                                                        <div>No Record Found</div>
                                                    </td>
                                                    )}
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
                                    </AccordionDetails>
                                </Accordion>
                            </RctCollapsibleCard>
					    </div>
                    </div>
            </div>
        );
    };
}
 export default MenurightsElement;
 
 