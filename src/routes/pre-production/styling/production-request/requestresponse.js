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

 import RadioGroup from '@material-ui/core/RadioGroup';
 import Radio from '@material-ui/core/Radio';
 
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
         difficultyLevelDropdwonItems:[],
         workingHoursList:[],
         BuyerDivisionList:[],
         stylenolist:[],
         fields: {},
         errors: {},
         documentNumber:'',
         seasonlists:[],
         yearlists:[],
         UnitCodeList:[],
         samstylelist:[],
         RequestListData:[],
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

        api.get('Miscellaneous/GetMiscellaneousList?MType=dlevel')
        .then((response) => {
            
            this.setState({ difficultyLevelDropdwonItems: response.data.result.data });
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
    addGridItems(){
        const {RequestListData} = this.state;
        let patternItems = {
           "SAM":1,
           "OQ":25,
           "NoOfLines":this.state.nooflines,
           "Operator":this.state.noofOperator,
           "days":2
        }
        /**Check whether object is already exists */
        let IsMatch = false;
        RequestListData.map((item, index) => {
           IsMatch = JSON.stringify(patternItems) === JSON.stringify(item);
           if(IsMatch){
               return;
           }           
       });         
       if(!IsMatch){
        RequestListData.push(patternItems);
       }else{
           NotificationManager.error('Added Items is already exists in List');
       }      
       
        this.setState({RequestListData:RequestListData}) 

        console.log
    }
    setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
        fields[name] = event[0].value;        
        this.setState({fields});
        
        if(name=='units'){
            api.get('ProductivityRequest/GetWorkingHours?UnitID='+event[0].value)
            .then((response) => {                
                this.setState({ workingHoursList: response.data.data });
            })        
            .catch(error => {})  
        }
		this.setState({ [name]: event });
        setTimeout(() => {
            this.getStyleList();
        }, 100);
       
	};

    createRequest(){
        
    }
    createProductivityCertificate(){
        const saveObject = {
            "productivityRequestCTCModel":{
                "id": 0,
                "prReq_Id": this.state.documentNumber,
                "masterStyle": this.state.styleno[0].value,
                "sam": 0,
                "orderQty": 0,
                "noOfLines": this.state.nooflines,
                "operators": this.state.noofOperator,
                "avgProductivity": 0,
                "targetPerHr": 0,
                "efficiency": 0,             
                "hostName": "LocalHost"
        }
    }
        api.post('ProductivityRequest/SaveProdCTC',saveObject) .then((response) => {            
            
           if(response.data.status==true){
                 NotificationManager.success('Target Certificate Created Sucessfully');
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
       
        this.setState({errors: errors});
        return formIsValid;
      }
 
     render() {
         const { users, loading, selectedUser, editUser, allSelected, selectedUsers,documentNumber,tableheaderitems } = this.state;
         
         const BuyerOptions =[];
         for (const item of this.state.BuyerList) {           
             BuyerOptions.push({value:item.buyerCode,label:item.buyerName});
         }

         const difficultyLevelDropdwonOptions =[];
         for (const item of this.state.difficultyLevelDropdwonItems) {           
            difficultyLevelDropdwonOptions.push({value:item.code,label:item.codeDesc});
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
        
        const WorkingHourOptions = [];
        for (const item of this.state.workingHoursList) {           
            WorkingHourOptions.push({value:item.workingHrs,label:item.workingHrs});
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
                 <RctCollapsibleCard fullBlock heading="Request Response">
                  
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
                                        {/* <TextField id="workingHours" fullWidth label="Working Hours" placeholder="Working Hours" onChange={this.handleChangeTextField('workinghours')} value={this.state.workinghours}/> */}
                                        <Select1 dropdownPosition="auto" createNewLabel="Working Hours"  options={WorkingHourOptions}
                                            // onChange={values => this.setState({ year:values })} 
                                            onChange={this.setstatevaluedropdownfunction('workinghours')}
                                            placeholder="Working Hours"
                                            values={this.state.workinghours} />
                                            <span className="error">{this.state.errors["workinghours"]}</span>
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
                             <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                             <RadioGroup row aria-label="anchorReference" name="anchorReference">
                                <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 rb-mb pt-10">
                                        <FormControlLabel color="primary" value="Accept" control={<Radio onChange={this.handleChangeradio} />} label="Accept" />   
                                </div>
                                <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 rb-mb pt-10">
                                        <FormControlLabel color="primary" value="Reject" control={<Radio  onChange={this.handleChangeradio} />} label="Reject" />
                                </div>                                           
                            </RadioGroup>
                            </div>  
                         
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <Select1  dropdownPosition="auto"  createNewLabel="Difficulty Level"
                                            options={difficultyLevelDropdwonOptions} ref="DifficultyLevel"
                                            onChange={this.setstatevaluedropdownfunction('DifficultyLevel')}
                                           // onChange={values => this.getBuyerDivision1({ BuyerValue:values },this,"buyername")}
                                            placeholder="Difficulty Level"                                              
                                            values={this.state.DifficultyLevel}
                                        />  
                                         <span className="error">{this.state.errors["DifficultyLevel"]}</span>                                 
                                    </div>
                                </div>
                            </div> 
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
                              
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                <div className="form-group">
                                  
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.checkRequestValidation(e)}><span className="MuiButton-label">Generate <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button> 
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-delete"></i></span><span className="MuiTouchRipple-root"></span></button> 
                                </div>   
                            </div>           
                        </div> 
                        <div className="formelements-wrapper main-layout-class productivity-grid">
                            <Accordion key={1} className="mb-30 panel" defaultExpanded>
                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>} className="m-0 panel-heading">
                                    <h4>Productivity Grid</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="row new-form p-20 container-br">
                                        
                                        <table className="table">
                                            <tbody>
                                                {
                                                    this.state.tableheaderitems.map((n,index) => {
                                                        return(
                                                        <tr>                                                    
                                                            <th className="w-20">{this.state.tableheaderitems[index]}</th>
                                                            
                                                         </tr>
                                                        )
                                                    })
                                                }
                                                {                        
                                                this.state.RequestListData.map((nd,index1) => {     
                                                    return ( 
                                                        <span>                             
                                                            <tr>
                                                                <td>{nd.SAM}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{nd.OQ}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{nd.NoOfLines}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{nd.Operator}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{nd.days}</td>
                                                            </tr>
                                                        </span>
                                                    )
                                                }) 
                                            } 
                                                        
                                                
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
                     
                     {loading &&
                         <RctSectionLoader />
                     }
                 </RctCollapsibleCard>
              
             </div>
         );
     }
 }
 