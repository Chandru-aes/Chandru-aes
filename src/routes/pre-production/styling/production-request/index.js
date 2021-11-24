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

 import Select1 from "react-dropdown-select";
 
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
         selectedUsers: 0,
         BuyerList:[],
         BuyerDivisionList:[],
         stylenolist:[],
         fields: {},
         errors: {},
         documentNumber:'',
         seasonlists:[],
         yearlists:[],
         UnitCodeList:[],
         samstylelist:[],
         RequestListData:[{'id':1}],
         tableheaderitems:['SAM','OQ/OQR','No of Line','Operators','Number Of Days','Average productivity/day/line','Efficiency','Target/Hour','Step Up']
     }
 
     componentDidMount() {

        api.get('ProductivityRequest/GetDocumentnumber')
        .then((response) => {                
            this.setState({ documentNumber: response.data.data });
        })        
        .catch(error => {})

        api.get('Buyer/GetBuyerDropDown')
        .then((response) => {                
            this.setState({ BuyerList: response.data.result.data });
        })        
        .catch(error => {})

        api.get('SeasonMaster/GetSeasonList')
        .then((response) => {
            
            this.setState({ seasonlists: response.data.result.data });
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=year')
        .then((response) => {
            
            this.setState({ yearlists: response.data.result.data });
        })

        api.get('Unit/GetUnitDropDown')
        .then((response) => {            
            this.setState({ UnitCodeList: response.data.result.data });
        })

        api.get('ProductivityRequest/GetSamStyleNoDropDown')
        .then((response) => {            
            this.setState({ samstylelist: response.data.data });
        })
     }
 
    
    
     handleClickOpen = () => {
        this.setState({ open: true });
     };

     handleClose = () => {
        this.setState({ open: false });
     };
     
     getBuyerDivision1(val,field,e){
        let fields = this.state.fields;
        fields['buyername'] = val.BuyerValue[0].value;        
        this.setState({fields});

        this.setState({ BuyerValue: val.BuyerValue });
        api.get('BuyerDivision/GetBuyerDivisionList?BuyerID='+val.BuyerValue[0].value)
        .then((response) => {                
            this.setState({ BuyerDivisionList: response.data.result.data });
        })        
        .catch(error => {})           
    }
    checkRequestValidation(e,type){
          e.preventDefault();
          if(this.handleValidation()){
              this.createRequest();
          }    
    }
    setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
        fields[name] = event[0].value;        
        this.setState({fields});
        
		this.setState({ [name]: event });
        
       this.getStyleList();
	};

    createRequest(){
        const saveObject = {
            "pdmValueAddStatusModel":{
            "id": 0,
            "prReqNo": this.state.documentNumber,
            "entityId": "st",
            "buyCode": this.state.BuyerValue[0].value,
            "buyDivcode": this.state.BuyerdivisionValue[0].value,
            "seasonCode": this.state.season[0].value,
            "seasonYear": this.state.year[0].value,
            "unitcode": this.state.units[0].value,
            "noOfFits": this.state.fits,
            "noofColors": this.state.Colors,
            "sam": 0,
            "fabricDesc": "string",
            "orderQty": 0,
            "numberOflines": this.state.nooflines,
            "noOfOperators": this.state.noofOperator,
            "workingHrs": this.state.workinghours,//it should be dropdown value
            "difficultyLevel": "string",
            "acceptFlag": "Y",
            "keyRequest": "Y",
            "cancel": "N",
            "createdBy": "Admin",
            "hostName": "Localhost"
        }
    }
        api.post('ProductivityRequest/SaveProdRequest',saveObject) .then((response) => {            
            
           if(response.data.status==true){
                 NotificationManager.success('Request Created Sucessfully');
                // api.get('ForecastEntity/GetForecastHeaderList')
                // .then((response) => {         
                //     this.setState({ forecastinglists: response.data.data });
                // })
           }               
            e.cancel=false;
        })
        .catch(error => {
            // error handling
        })
    }
    getStyleList(){
        if(this.state.BuyerValue && this.state.BuyerdivisionValue && this.state.year){
            api.get('ProductivityRequest/GetStyleNoDropDown?BuyDivCode='+this.state.BuyerdivisionValue[0].value+'&Seasoncode='+this.state.season[0].value+'&SeasonYear='+this.state.year[0].value)
            .then((response) => {                
                this.setState({ stylenolist: response.data.data });
            })        
            .catch(error => {})  
        }
    }
    handleChangeTextField = name => event => {
        
        this.setState({ [name]: event.target.value });

        let fields = this.state.fields;
        fields[name] = event.target.value;        
        this.setState({fields});
        
    };
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
       
        if(!fields["buyername"]){
          formIsValid = false;
          errors["buyername"] = "Cannot be empty";
        }
        
        if(!fields["BuyerdivisionValue"]){
            formIsValid = false;
            errors["BuyerdivisionValue"] = "Cannot be empty";
        }
       
        if(!fields["season"]){
            formIsValid = false;
            errors["season"] = "Cannot be empty";
        }
        if(!fields["year"]){
            formIsValid = false;
            errors["year"] = "Cannot be empty";
        }
        if(!fields["styleno"]){
            formIsValid = false;
            errors["styleno"] = "Cannot be empty";
        }
        if(!fields["units"]){
            formIsValid = false;
            errors["units"] = "Cannot be empty";
        }
        if(!fields["noofOperator"]){
            formIsValid = false;
            errors["noofOperator"] = "Cannot be empty";
        }
        if(!fields["nooflines"]){
            formIsValid = false;
            errors["nooflines"] = "Cannot be empty";
        }
        if(!fields["workinghours"]){
            formIsValid = false;
            errors["workinghours"] = "Cannot be empty";
        }
        if(!fields["Colors"]){
            formIsValid = false;
            errors["Colors"] = "Cannot be empty";
        }
        if(!fields["fits"]){
            formIsValid = false;
            errors["fits"] = "Cannot be empty";
        }
        console.log(errors);
        console.log(formIsValid);
        this.setState({errors: errors});
        return formIsValid;
      }
 
     render() {
         const { users, loading, selectedUser, editUser, allSelected, selectedUsers,documentNumber,tableheaderitems,RequestListData } = this.state;
         
         const BuyerOptions =[];
         for (const item of this.state.BuyerList) {           
             BuyerOptions.push({value:item.buyerCode,label:item.buyerName});
         }

         const BuyerDivisionOptions =[];
         for (const item of this.state.BuyerDivisionList) {           
             BuyerDivisionOptions.push({value:item.divisionCode,label:item.divisionName});
         }

         const seasonoptions = [];
        for (const item of this.state.seasonlists) {           
            seasonoptions.push({value:item.seasonCode,label:item.seasonName});
        }

        const yearoptions = [];
        for (const item of this.state.yearlists) {           
            yearoptions.push({value:item.code,label:item.codeDesc});
        }
        const styleNooptions = [];
        for (const item of this.state.stylenolist) {           
            styleNooptions.push({value:item.id,label:item.refStyleNo});
        }


        const UnitItemOptions =[];
        for (const item of this.state.UnitCodeList) {           
            UnitItemOptions.push({value:item.uCode,label:item.uName});
        }
        const SamStyleOptions =[];
        for (const item of this.state.samstylelist) {           
            SamStyleOptions.push({value:item.id,label:item.refStyleNo});
        }
        
        let buyerrightlistshtml = null;

        if(this.state.tableheaderitems.length>0){
            buyerrightlistshtml= this.state.tableheaderitems.map((n,index) => {                                    
                return (
                    <tr>
                    <th className="w-20">{n}</th>
                    {
                        this.state.RequestListData.map((nd,index) => {     
                            return (                              
                            <span>
                                <td>{nd.id}</td>
                                {/* <td>35.3</td> */}
                            </span>
                            )
                        }) 
                     } 
                    </tr>
                );
            });
        console.log(this.state.RequestListData)
    }else{
            buyerrightlistshtml = <tr><td colSpan="9" className="no-records-data"><span>No records found</span></td></tr> ;
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
                 <RctCollapsibleCard fullBlock heading="Productivity Request">
                  
                    <div className="row new-form overall-border no-padding-bottom">  
                             <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name"> 
                                        <TextField id="Docno" fullWidth label="Doc No" placeholder="Doc No" value={this.state.documentNumber} disabled/>
                                    </div>                                   
                                 </div>
                            </div>  
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group  mt-15">
                                    <div className="form-group select_label_name"> 
                                        <input class="form-control w-80 float-left" type="file" id="formFile"/>
                                    </div>                                   
                                 </div>
                            </div>  
                            
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <Select1  dropdownPosition="auto"  createNewLabel="Buyer"
                                            options={BuyerOptions} ref="buyername"
                                            onChange={values => this.getBuyerDivision1({ BuyerValue:values },this,"buyername")}
                                            placeholder="Buyer"                                              
                                            values={this.state.BuyerValue}
                                        />  
                                         <span className="error">{this.state.errors["buyername"]}</span>                                 
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
                                        <Select1 dropdownPosition="auto" 
                                        createNewLabel="Season"  
                                        options={seasonoptions}
                                       // onChange={values => this.setState({ season:values })} 
                                        onChange={this.setstatevaluedropdownfunction('season')}
                                        placeholder="Select Season"
                                        values={this.state.season} />
                                        <span className="error">{this.state.errors["season"]}</span> 
                                    </div>  
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-3">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <Select1 dropdownPosition="auto" createNewLabel="Year"  options={yearoptions}
                                            // onChange={values => this.setState({ year:values })} 
                                            onChange={this.setstatevaluedropdownfunction('year')}
                                            placeholder="Year"
                                            values={this.state.year} />
                                            <span className="error">{this.state.errors["year"]}</span>
                                    </div>  
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <Select1 dropdownPosition="auto" createNewLabel="Style No"  options={styleNooptions}
                                            // onChange={values => this.setState({ year:values })} 
                                            onChange={this.setstatevaluedropdownfunction('styleno')}
                                            placeholder="Style No"
                                            values={this.state.styleno} />
                                            <span className="error">{this.state.errors["styleno"]}</span>
                                    </div>  
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name"> 
                                        <Select1 dropdownPosition="auto" createNewLabel="Units"  options={UnitItemOptions}
                                            // onChange={values => this.setState({ year:values })} 
                                            onChange={this.setstatevaluedropdownfunction('units')}
                                            placeholder="Units"
                                            values={this.state.units} />
                                            <span className="error">{this.state.errors["units"]}</span>
                                    </div>                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                    <TextField id="Docno" fullWidth label="Fits" placeholder="Fits" onChange={this.handleChangeTextField('fits')} value={this.state.fits}/>
                                    <span className="error">{this.state.errors["fits"]}</span>
                                    </div>
                                </div>
                            </div>   
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <TextField id="Colors" fullWidth label="Colors" placeholder="Colors" onChange={this.handleChangeTextField('Colors')} value={this.state.Colors}/>
                                        <span className="error">{this.state.errors["Colors"]}</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group mt-15">
                                    <div className="form-group select_label_name"> 
                                        <TextField id="workingHours" fullWidth label="Working Hours" placeholder="Working Hours" onChange={this.handleChangeTextField('workinghours')} value={this.state.workinghours}/>
                                    </div>                                   
                                </div>
                            </div>  
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group mt-15">
                                    <div className="form-group select_label_name"> 
                                        <TextField id="Fabric" fullWidth label="Fabric" placeholder="Fabric" disabled/>
                                    </div>                                   
                                </div>
                            </div>    
                            <div className="col-lg-5 col-md-3 col-sm-6 col-xs-12 mt-15">
                                <div className="form-group">
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">View OB</span><span className="MuiTouchRipple-root"></span></button> 
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.checkRequestValidation(e)}><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button> 
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-delete"></i></span><span className="MuiTouchRipple-root"></span></button> 
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
                                                
                                             
                                            </div>
                                        </div> 
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="form-group select_label_name"> 
                                                    <TextField id="Orderqty" fullWidth label="Order qty" placeholder="Order qty" disabled/>
                                                </div>                                   
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
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
                                        </div>   */}
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="form-group select_label_name"> 
                                                    <TextField id="Nooflines" fullWidth label="No of Lines" placeholder="No of Lines" onChange={this.handleChangeTextField('nooflines')} value={this.state.nooflines}/>
                                                    <span className="error">{this.state.errors["nooflines"]}</span>
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="form-group select_label_name"> 
                                                    <TextField id="OperatorLine" fullWidth label="Operator/Line" placeholder="Operator/Line" onChange={this.handleChangeTextField('noofOperator')} value={this.state.noofOperator}/>
                                                    <span className="error">{this.state.errors["noofOperator"]}</span>
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
                                            {buyerrightlistshtml}
                                            </tbody>
                                        </table> 
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">SAM</DialogTitle>
                            <DialogContent>                                   
                                <div className="col border">                       
                                    <div className="row no-f-mb">
                                        <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group mt-15">
                                            <Select1 dropdownPosition="auto" createNewLabel="Units"  options={SamStyleOptions}
                                                // onChange={values => this.setState({ year:values })} 
                                                onChange={this.setstatevaluedropdownfunction('samstyleno')}
                                                placeholder="Style No"
                                                values={this.state.samstyleno} />
                                                <span className="error">{this.state.errors["samstyleno"]}</span>                                                                        
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
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
 