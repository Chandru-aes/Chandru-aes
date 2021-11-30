/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Button from '@material-ui/core/Button';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import { Helmet } from "react-helmet";
 import { Media, Badge,Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,FormGroup,Label,
	Input,Form } from 'reactstrap';
 import IconButton from '@material-ui/core/IconButton';
 import Avatar from '@material-ui/core/Avatar';
 import Checkbox from '@material-ui/core/Checkbox';
 import { RctCard, RctCardContent } from 'Components/RctCard';
 // api
 import api from 'Api';
 
 import InputLabel from '@material-ui/core/InputLabel';
 
 import MenuItem from '@material-ui/core/MenuItem';
 
 import FormControl from '@material-ui/core/FormControl';
 
 import Select from '@material-ui/core/Select';
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 import DropzoneComponent from 'react-dropzone-component';
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 //import AddNewUserForm from './AddNewUserForm';
 import Accordion from '@material-ui/core/Accordion';
 import AccordionDetails from '@material-ui/core/AccordionDetails';
 import AccordionSummary from '@material-ui/core/AccordionSummary';
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 import Typography from '@material-ui/core/Typography';
 import TextField from '@material-ui/core/TextField';
 import AppBar from '@material-ui/core/AppBar';
 import Tabs from '@material-ui/core/Tabs';
 import Tab from '@material-ui/core/Tab';
 import SwipeableViews from 'react-swipeable-views';
 
 import moment from 'moment';
 import DateFnsUtils from '@date-io/date-fns';

 import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Scrollbars } from 'react-custom-scrollbars';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select1 from "react-dropdown-select";
 // const styles = {
 // 	checked: {
 // 		color: pink[500],
 // 	},
    
 // };
 import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
 import { NotificationContainer, NotificationManager } from 'react-notifications';
 const $ = require('jquery');

 function TabContainer({ children, dir }) {
    return (
       <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }
 
 class ItenNasterCreation extends Component {
    
     state = {
         all: false,   
         ropen: false,   
         fields: {},
         errors: {},  
         BuyerList:[],
         BuyerDivisionList:[],
         seasonlists:[],
         yearlists:[],
         stylenolist:[],
         open: false,
         IsMarker:false,
         IsProductivityModal:false,
         IsSAMModal:false,
         IsAttachmentModal:false,
         IsMaterialUnitPrice:false,
         MaterialTempRowData:[],
         activeIndex: 0

     }
     constructor(props) {
        super(props);
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif"
         };
   
         this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/'
         };
       // this.state = { employees: service.getEmployees() };
       // this.states = service.getStates();
      
     }
     handleChangeIndex(index) {
        this.setState({ activeIndex: index });
     }
  
     handleChange(event, value) {
        this.setState({ activeIndex: value });
     }
  
     componentDidMount() {
        api.get('Buyer/GetBuyerDropDown')
        .then((response) => {                
            this.setState({ BuyerList: response.data.result.data });
        }) 

        api.get('SeasonMaster/GetSeasonList')
        .then((response) => {
            
            this.setState({ seasonlists: response.data.result.data });
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=year')
        .then((response) => {
            
            this.setState({ yearlists: response.data.result.data });
        })
     }
    
     rhandleClickOpen = () => {
        this.setState({ ropen: true });
     };
     rhandleClose = () => {
        this.setState({ ropen: false });
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
    setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
        fields[name] = event[0].value;        
        this.setState({fields});
        
        setTimeout(() => {
            this.getStyleList();
        }, 100);
		this.setState({ [name]: event });
      
       
	};

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

    handleChangesingledropdown = name => event => {
		this.setState({ [name]: event.target.value });
	};

     openReferenceversion = () => {
        this.setState({ open: true });
     };
     openMarkerReferenceversion= () => {
        this.setState({ IsMarker: true });
     };
     openProductivityversion=() => {
        this.setState({ IsProductivityModal: true });
     };
     openSAMversion=() => {
        this.setState({ IsSAMModal: true });
     };
     CloseRefernceversion = () => {
        this.setState({ open: false });
     };
     CloseMarkerRefernceversion= () => {
        this.setState({ IsMarker: false });
     };
     CloseProductivityModal= () => {
        this.setState({ IsProductivityModal: false });
     };
     CloseSAMModal= () => {
        this.setState({ IsSAMModal: false });
     };
     OpenAttachmentPack= () => {
        this.setState({ IsAttachmentModal: true });
     };
     CloseAttachmentModal= () => {
        this.setState({ IsAttachmentModal: false });
     };
     OpenMaterialUnitPrice= () => {
        this.setState({ IsMaterialUnitPrice: true });
     };
     CloseMaterialUnitPrice= () => {
        this.setState({ IsMaterialUnitPrice: false });
     };
     setstatevaluefunction = name => event => {         
        let fields = this.state.fields;
        fields[name] = event.target.value;        
        this.setState({fields});
        this.setState({ [name]: event.target.value });     
	};
     render() {
        const { theme, listData, transferreport, expenseCategory } = this.props;
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            drop: this.callbackArray,
            addedfile: this.callback,
            success: this.success,
            removedfile: this.removedfile
         }
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

         const FreightModeoptions = [{value:'air',label:'Air'},{value:'sea',label:'Sea'},{value:'rail',label:'Rail'},{value:'road',label:'Road'}];
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
                <RctCollapsibleCard fullBlock heading="Costing Creation">
                    <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12">
                        <div className="w-100">
                            <div className="float-right n-bt-top">                                
                                <FormControlLabel control={<Checkbox color="primary"  onChange={this.handleChangesingledropdown('IsConfirm')} value="BC" />} label="Buyer Confirmation" />
                                <FormControlLabel control={<Checkbox color="primary"  onChange={this.handleChangesingledropdown('Iscomplete')} value="CD" />} label="Complete" />
                                                           
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-warning mr-10 text-white btn-icon b-sm" tabindex="0" type="button"  ><span className="MuiButton-label">clear <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button> 
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" ><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button> 
                            </div>    
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <Accordion className="border mb-15 mt-15">
                            <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                <div className="acc_title_font">
                                    <Typography>Acitvity</Typography>
                                </div>
                            </AccordionSummary>

                            <AccordionDetails> 
                            <div className="row no-f-mb">  
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <FormControl fullWidth>
                                        {/* <InputLabel htmlFor="age-simple"></InputLabel> */}
                                        <div className="form-group mt-15">
                                            <input class="form-control float-left" type="file" id="formFile"/>
                                        </div>
                                    </FormControl>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                     <Select1  dropdownPosition="auto"  createNewLabel="Buyer"
                                        options={BuyerOptions} ref="buyername"
                                        onChange={values => this.getBuyerDivision1({ BuyerValue:values },this,"buyername")}
                                        placeholder="Buyer"                                              
                                        values={this.state.BuyerValue}
                                    />  
                                    <span className="error">{this.state.errors["buyername"]}</span>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                     <Select1  dropdownPosition="auto"  createNewLabel="Buyer Division"
                                        options={BuyerDivisionOptions} ref="buyerdivision"
                                        placeholder="Buyer Division"
                                        onChange={this.setstatevaluedropdownfunction('BuyerdivisionValue')}                                      
                                        values={this.state.BuyerdivisionValue}
                                    /> 
                                    <span className="error">{this.state.errors["BuyerdivisionValue"]}</span>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                    <Select1 dropdownPosition="auto" 
                                        createNewLabel="Season"  
                                        options={seasonoptions}
                                       // onChange={values => this.setState({ season:values })} 
                                        onChange={this.setstatevaluedropdownfunction('season')}
                                        placeholder="Select Season"
                                        values={this.state.season} />
                                        <span className="error">{this.state.errors["season"]}</span> 
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                    <Select1 dropdownPosition="auto" createNewLabel="Year"  options={yearoptions}
                                    // onChange={values => this.setState({ year:values })} 
                                    onChange={this.setstatevaluedropdownfunction('year')}
                                    placeholder="Year"
                                    values={this.state.year} />
                                    <span className="error">{this.state.errors["year"]}</span>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12  mt-15">
                                    <Select1 dropdownPosition="auto" createNewLabel="Style No"  options={styleNooptions}
                                        // onChange={values => this.setState({ year:values })} 
                                        onChange={this.setstatevaluedropdownfunction('styleno')}
                                        placeholder="Style No"
                                        values={this.state.styleno} />
                                        <span className="error">{this.state.errors["styleno"]}</span>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <TextField id="Buyer" fullWidth label="Style Description" placeholder="Style Description"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <TextField id="Buyer" fullWidth label="Purpose" placeholder="Purpose"/>
                                </div>
                              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                 <div className="w-100 float-left">
                                    <div className="w-80 float-left">
                                        <div className="form-group btn-right">
                                            <TextField id="ReferenceVersion" fullWidth label="Reference Version" placeholder="Reference Version" disabled/>                                       
                                        </div> 
                                    </div>
                                    <div className="w-20 float-left">
                                        <button className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon b-ic add mt-15" tabindex="0" type="button" onClick={this.openReferenceversion}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                    </div>
                                </div>
                              </div>                                 
                            
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <TextField id="Buyer" fullWidth label="Costing Options" placeholder="Costing Options"/>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <TextField id="Buyer" fullWidth label="Date" placeholder="Date"/>
                                    </div>
                                </div>


                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="w-100 float-left">
                                        <div className="w-80 float-left">
                                            <TextField id="markerVersion" fullWidth label="Marker Version & UOM" placeholder="Marker Version & UOM" disabled/>                                       
                                        </div> 
                                        <div className="w-20 float-left">
                                            <button className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon b-ic add mt-15" tabindex="0" type="button" onClick={this.openMarkerReferenceversion}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                        </div>
                                    </div>                                   
                                </div>
                                <div className="clearfix col-12">&nbsp;</div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="w-100 float-left">
                                        <div className="w-80 float-left">
                                            <TextField id="productivity" fullWidth label="Productivity" placeholder="Productivity" disabled/>                                       
                                        </div> 
                                        <div className="w-20 float-left">
                                            <button className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon b-ic add mt-15" tabindex="0" type="button" onClick={this.openProductivityversion}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                        </div>
                                    </div>                                   
                                </div>
                              
                             
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <TextField id="Locaiton" fullWidth label="Location" placeholder="Location"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <TextField id="LineoFCost" fullWidth label="Line oF Cost" placeholder="LineoFCost"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="w-100 float-left">
                                        <div className="w-80 float-left">
                                            <TextField id="productivity" fullWidth label="SAM" placeholder="SAM" disabled/>                                       
                                        </div>   
                                        <div className="w-20 float-left">
                                            <button className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon b-ic add mt-15" tabindex="0" type="button" onClick={this.openSAMversion}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                        </div>
                                    </div>                                 
                                </div>
                                <div className="clearfix col-12">&nbsp;</div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-10">
                                    <div className="form-group ">
                                        <Select1 dropdownPosition="auto" createNewLabel="Currency"  options={styleNooptions}
                                        onChange={this.setstatevaluedropdownfunction('Currency')}
                                        placeholder="Currency"
                                        values={this.state.Currency} />
                                        <span className="error">{this.state.errors["Currency"]}</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-10">
                                    <div className="form-group ">
                                        <Select1 dropdownPosition="auto" createNewLabel="Buyer T&A"  options={styleNooptions}
                                        onChange={this.setstatevaluedropdownfunction('Currency')}
                                        placeholder="Buyer T&A"
                                        values={this.state.buyerta} />
                                        <span className="error">{this.state.errors["buyerta"]}</span>
                                    </div>
                                </div>
                               
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                                    <div className="form-group">
                                        <TextField id="Version" fullWidth label="Version" placeholder="Version" disabled/>                                       
                                    </div>                                    
                                </div>
                               
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                                    <div className="form-group btn-right">
                                        <TextField id="SaleOrder" fullWidth label="Sale Order" placeholder="Sale Order" disabled/>                                       
                                    </div>                                    
                                </div>
                                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-10">
                                    <div class="item cursor-pointer"  onClick={this.OpenAttachmentPack} ><span class="material-icons mr-10">attach_file</span><span>Attachment</span></div>
                                </div>
                            </div>

                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                        <Accordion className="border mb-15">
                            <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                <div className="acc_title_font">
                                    <Typography>Material Details </Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails> 
                                <div className="row"> 
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                        <Select1  dropdownPosition="auto"  createNewLabel="Material Type"
                                            options={BuyerOptions} ref="MaterialType"
                                            onChange={this.setstatevaluedropdownfunction('materialType')} 
                                            placeholder="Material Type"                                              
                                            values={this.state.materialType}
                                        />  
                                        <span className="error">{this.state.errors["materialType"]}</span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                            <Select1  dropdownPosition="auto"  createNewLabel="Material Group"
                                            options={BuyerDivisionOptions} ref="materialGroup"
                                            placeholder="Material Group"
                                            onChange={this.setstatevaluedropdownfunction('materialGroup')}                                      
                                            values={this.state.materialGroup}
                                        /> 
                                        <span className="error">{this.state.errors["materialGroup"]}</span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                        <Select1 dropdownPosition="auto" 
                                            createNewLabel="Material Sub Group"  
                                            options={seasonoptions}
                                            onChange={this.setstatevaluedropdownfunction('materialsubGroup')}
                                            placeholder="Material Sub Group"
                                            values={this.state.materialsubGroup} />
                                            <span className="error">{this.state.errors["materialsubGroup"]}</span> 
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                        <Select1 dropdownPosition="auto" 
                                            createNewLabel="Supplier"  
                                            options={seasonoptions}
                                            onChange={this.setstatevaluedropdownfunction('Supplier')}
                                            placeholder="Supplier"
                                            values={this.state.Supplier} />
                                            <span className="error">{this.state.errors["Supplier"]}</span> 
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                                        <Select1 dropdownPosition="auto" createNewLabel="Description"  options={yearoptions}
                                        onChange={this.setstatevaluedropdownfunction('description')}
                                        placeholder="Description"
                                        values={this.state.description} />
                                        <span className="error">{this.state.errors["description"]}</span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12  mt-15">
                                        <Select1 dropdownPosition="auto" createNewLabel="Supplier Reference"  options={styleNooptions}
                                            // onChange={values => this.setState({ year:values })} 
                                            onChange={this.setstatevaluedropdownfunction('SupplierReference')}
                                            placeholder="Supplier Reference"
                                            values={this.state.SupplierReference} />
                                            <span className="error">{this.state.errors["SupplierReference"]}</span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="BuyerMarker" fullWidth label="Buyer Marker" placeholder="Buyer Marker" onChange={this.handleChangeTextField('BuyerMarker')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="InternalMarker" fullWidth label="Internal Marker" placeholder="Internal Marker" onChange={this.handleChangeTextField('InternalMarker')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12  mt-15">
                                        <Select1 dropdownPosition="auto" createNewLabel="Marker UOM"  options={styleNooptions}
                                            // onChange={values => this.setState({ year:values })} 
                                            onChange={this.setstatevaluedropdownfunction('markerUom')}
                                            placeholder="Marker UOM"
                                            values={this.state.markerUom} />
                                            <span className="error">{this.state.errors["markerUom"]}</span>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="Wastage" fullWidth label="Wastage" placeholder="Wastage" onChange={this.handleChangeTextField('Wastage')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="Finance" fullWidth label="Finance" placeholder="Finance" onChange={this.handleChangeTextField('Finance')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group mt-15">
                                            <button type="button" class="btn btn-outline-primary w-100" onClick={this.OpenMaterialUnitPrice}>Material Unit Price {this.state.materialUnitPrice} <i class="zmdi zmdi-arrow-right-top"></i></button>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="InternalPrice" fullWidth label="Internal Price" placeholder="Internal Price" onChange={this.handleChangeTextField('InternalPrice')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="AllowancePercentage" fullWidth label="Allowance Percentage" placeholder="Allowance Percentage" onChange={this.handleChangeTextField('AllowancePercentage')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="BuyerPrice" fullWidth label="Buyer Price" placeholder="Buyer Price" onChange={this.handleChangeTextField('BuyerPrice')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <TextField id="AvailableCM" fullWidth label="Available CM" placeholder="Available CM" onChange={this.handleChangeTextField('AvailableCM')}/>
                                        </div>
                                    </div>
                                    <div className="table-responsive mt-0">
                                        <div className="float-right">
                                            <div className="form-group">
                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button" onClick={(e) =>this.addPatternGrid()}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>                           
                                            </div>
                                        </div> 
                                        <table className="table mt-10 data w-100 float-left">
                                    <thead>
                                        <tr>
                                            <th className="">Image</th>
                                            <th className="">Material Type</th>
                                            <th className="">Material Group</th>
                                            <th className="">Material Sub Group</th>
                                            <th className="">Description</th>
                                            <th className="">Supplier</th>
                                            <th className="">Sup Ref#</th>
                                            <th className="">Buyer Marker </th>
                                            <th className="">Internal Marker</th>
                                            <th className="">Marker UOM</th> 
                                            <th className="">Wastage</th>
                                            <th className="">Finance</th>
                                            <th className="">Material Unit Price</th>
                                            <th className="">Internal Price</th>
                                            <th className="">Allowance Percentage</th>
                                            <th className="">Buyer Price</th>
                                            <th className="">Available CM</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                    
                                        {this.state.MaterialTempRowData.map((n,index) => {                                   
                                        return (
                                            <tr>
                                                <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" onClick={(e) =>this.deletePatternGrid(n)}><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                                <td>{n.natureOfJob} </td>
                                                <td>{n.patVersion} </td>
                                                <td> {n.storageArea}</td>
                                                <td> {n.preparedby}</td>
                                                <td>{n.checkedby} </td>
                                                <td>{n.Revision} </td>
                                                <td>{n.checkbyName} </td>
                                                <td>{n.patterndate} & {n.patterntime} </td>
                                                <td>{n.remarks} </td>
                                                {/* <td> </td>
                                                <td> </td>
                                                <td> </td> */}
                                                
                                            </tr>
                                        ) } )
                                        }
                                        {this.state.MaterialTempRowData.length==0 &&
                                                <tr>
                                                    <td colSpan="16" className="no-records-data">No Records Found</td>
                                                </tr>
                                        }
                                        </tbody>
                                        
                                        </table>
                                        <div className="clearfix"></div>                                 
                                    </div>    
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </RctCollapsibleCard>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <RctCard>
                            <RctCardContent>
                                <div className="Transaction-table-wrap Tab-wrap">
                                    <AppBar position="static" color="default">
                                    <Tabs
                                        value={this.state.activeIndex}
                                        onChange={(e, value) => this.handleChange(e, value)}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="fullWidth"
                                    >
                                        <Tab label="Add-ons" />
                                        <Tab label="Productivity" />
                                        <Tab label="Summary" />
                                        <Tab label="Fit Cost" />
                                    </Tabs>
                                    </AppBar>
                                    <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={420} autoHide>
                                    <SwipeableViews
                                         axis={'x'}
                                         index={this.state.activeIndex}
                                         onChangeIndex={(index) => this.handleChangeIndex(index)}>
                                        <div className="card mb-0 transaction-box mt-15">
                                            <TabContainer>                                           
                                                <Form inline>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row">
                                                        <label for="Email-7" className="col-lg-4">
                                                            <h3>Wash per unit</h3> :
                                                        </label>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                                                            <div className="float-right form-group mb-10 mr-10 p-0 w-100">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Embroidery per unit</h3> :
                                                        </label>
                                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Print per unit</h3> :
                                                        </label>
                                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Garment Freight cost</h3> :
                                                        </label>
                                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Testing</h3> :
                                                        </label>
                                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Others</h3> :
                                                        </label>
                                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>PDC value per unit</h3> :
                                                        </label>                                                       
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>PDC %</h3> :
                                                        </label>                                                       
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Discount %</h3> :
                                                        </label>                                                       
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Discount value</h3> :
                                                        </label>                                                       
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Profit %</h3> :
                                                        </label>                                                       
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Internal</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Internal" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-8">
                                                    <div className="row"><label for="Email-7" className="col-lg-4">
                                                            <h3>Commission</h3> :
                                                        </label>                                                       
                                                        <div className="col-sm-6 col-md-6 col-lg-4">
                                                            <div className="mr-10 mb-10 form-group">
                                                                <FormGroup className="mr-10 mb-10">
                                                                    <Label for="Email-7" hidden>Buyer</Label>
                                                                    <Input type="email" name="email" id="Email-7" placeholder="Buyer" />
                                                                </FormGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br/>
                                                </Form>                                                
                                            </TabContainer>
                                        </div>
                                        <div className="card mb-0 transaction-box">
                                            <TabContainer>
                                            <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                                                <table class="table table-striped mt-15">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Qty</th>
                                                            <td className="no-records-data">5k</td>
                                                            <td className="no-records-data">2k</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Productivity</th>
                                                            <td className="no-records-data">1</td>
                                                            <td className="no-records-data">2</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Number of machines</th>
                                                            <td className="no-records-data">1</td>
                                                            <td className="no-records-data">2</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Number of lines</th>
                                                            <td className="no-records-data">1</td>
                                                            <td className="no-records-data">2</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Break even CM</th>
                                                            <td className="no-records-data">1</td>
                                                            <td className="no-records-data">2</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Buyer CM</th>
                                                            <td className="no-records-data">1</td>
                                                            <td className="no-records-data">2</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="col">Select</th>
                                                            <td className="no-records-data">
                                                                <FormControlLabel control={<Checkbox color="primary"  onChange={this.handleChangesingledropdown('IsConfirm')} value="1" />} />
                                                            </td>
                                                            <td className="no-records-data">
                                                            <FormControlLabel control={<Checkbox color="primary"  onChange={this.handleChangesingledropdown('IsConfirm')} value="2" />}/>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                </table>    
                                            </div>   
                                            <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                                                <div className="w-100 float-left">
                                                    <div className="w-40 float-left mr-10 mt-15">
                                                        <Select1 dropdownPosition="auto" createNewLabel="Loss Reason"  options={styleNooptions}
                                                        // onChange={values => this.setState({ year:values })} 
                                                        onChange={this.setstatevaluedropdownfunction('LossReason')}
                                                        placeholder="Loss Reason"
                                                        values={this.state.LossReason} />
                                                    </div>
                                                    <div className="w-40 float-left">
                                                        <div className="form-group">
                                                            <TextField id="Remark" fullWidth label="Remark" placeholder="Remark" onChange={this.handleChangeTextField('Remark')}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                      
                                            </TabContainer>
                                        </div>
                                        <div className="card mb-0 transaction-box">
                                            <TabContainer>
                                                <div className="col-sm-6 col-md-6 col-lg-6 float-left mt-15">
                                                    <table>
                                                        <tr>
                                                            <td></td>
                                                            <th scope="col">Buyer</th>
                                                            <th scope="col">Internal</th>
                                                            <th scope="col">Available</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Fabric</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                           
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Interlining</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Trim</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Packeting</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">CM</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Value-add</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Commission</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Discount</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Garment Freight</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Others</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">PDC %</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>                                                          
                                                        </tr>
                                                    </table>
                                                </div>
                                            </TabContainer>
                                        </div>
                                        <div className="card mb-0 transaction-box">
                                            <TabContainer>
                                            <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                                                <div className="w-100 float-left">
                                                    <div className="w-30 float-left mr-10 mt-15">
                                                        <Select1 dropdownPosition="auto" createNewLabel="FIT"  options={styleNooptions}
                                                        // onChange={values => this.setState({ year:values })} 
                                                        onChange={this.setstatevaluedropdownfunction('LossReason')}
                                                        placeholder="FIT"
                                                        values={this.state.LossReason} />
                                                    </div>
                                                    <div className="w-30 float-left mr-10">
                                                        <div className="form-group">
                                                            <TextField id="BuyerCost" fullWidth label="BuyerCost" placeholder="BuyerCost" onChange={this.handleChangeTextField('BuyerCost')}/>
                                                        </div>
                                                    </div>
                                                    <div className="w-20 float-left mt-15">
                                                    <FormControlLabel control={<Checkbox color="primary"  onChange={this.handleChangesingledropdown('keyFit')} value="kfit" />} label="Key Fit" />
                                                    </div>
                                                    <div className="w-10 float-left mt-15">
                                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button" onClick={(e) =>this.addPatternGrid()}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button> 
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="col-sm-6 col-md-6 col-lg-6 float-left">
                                                <div className="table-responsive mt-0">
                                                    <table className="table mt-10 data w-100 float-left la-fix" >
                                                        <thead>
                                                            <tr>
                                                                <th>Actions</th>
                                                                <th className="">Fit</th>
                                                                <th className="">Buyer Cost</th>
                                                                <th className="">Key Fit</th>                              
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete" ><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
                                                                </td>
                                                                <td>1 </td>
                                                                <td>212 </td>
                                                                <td>122 </td>                                              
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div> 
                                            </TabContainer>
                                        </div>
                                    </SwipeableViews>
                                    </Scrollbars>
                                </div>
                            </RctCardContent>
                        </RctCard>
                    </div>
                </div>
        
                {/* Reference Model version */}
                <Dialog open={this.state.open} onClose={this.CloseRefernceversion} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Base Style</DialogTitle>
                        <DialogContent>                                   
                            <div className="col border pb-15">                       
                                <div className="row no-f-mb">
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="form-group select_label_name mt-15">
                                            <Select1
                                                dropdownPosition="auto"
                                                //   multi
                                                createNewLabel="Buyer"
                                                options={BuyerOptions}
                                                onChange={this.setstatevaluedropdownfunction('buyer')}
                                                placeholder="Buyer"
                                                values={this.state.buyer}
                                                />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="form-group select_label_name mt-15">
                                            <Select1
                                            dropdownPosition="auto"
                                            //   multi
                                            createNewLabel="Buyer Division"
                                            options={BuyerDivisionOptions}
                                            onChange={this.setstatevaluedropdownfunction('buyerdiv')}
                                            placeholder="Buyer Division"
                                            values={this.state.buyerdiv}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="form-group select_label_name mt-15">
                                            <Select1
                                                dropdownPosition="auto"
                                                //   multi
                                                createNewLabel="Season"
                                                options={seasonoptions}
                                                onChange={this.setstatevaluedropdownfunction('season')}
                                                placeholder="Season"
                                                values={this.state.season}
                                                />                        
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                            dropdownPosition="auto"
                                            createNewLabel="Year"
                                            options={yearoptions}
                                            onChange={this.setstatevaluedropdownfunction('year')}
                                            placeholder="Year"
                                            values={this.state.year}
                                            />
                                        </div>
                                    </div> 
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                        <TextField id="designStyleNo" value={this.state.designStyleNo}   fullWidth label="Style No" placeholder="Style No"/>
                                        {/* <TextField id="Buyer" fullWidth label="Style No" placeholder="Style No"/> */}
                                        </div>
                                    </div>                                             
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" onClick={this.CloseRefernceversion} color="primary" className="text-white">
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={this.CloseRefernceversion} className="btn-info text-white">
                                Ok
                            </Button>
                        </DialogActions>
                </Dialog>
                {/* End Reference Model version */}

                {/* Marker Model version */}
                <Dialog open={this.state.IsMarker} onClose={this.CloseMarkerRefernceversion} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Base Style</DialogTitle>
                    <DialogContent>                                   
                        <div className="col border pb-15">                       
                            <div className="row no-f-mb">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                            dropdownPosition="auto"
                                            //   multi
                                            createNewLabel="Buyer"
                                            options={BuyerOptions}
                                            onChange={this.setstatevaluedropdownfunction('buyer')}
                                            placeholder="Buyer"
                                            values={this.state.buyer}
                                            />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                        dropdownPosition="auto"
                                        //   multi
                                        createNewLabel="Buyer Division"
                                        options={BuyerDivisionOptions}
                                        onChange={this.setstatevaluedropdownfunction('buyerdiv')}
                                        placeholder="Buyer Division"
                                        values={this.state.buyerdiv}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                            dropdownPosition="auto"
                                            //   multi
                                            createNewLabel="Season"
                                            options={seasonoptions}
                                            onChange={this.setstatevaluedropdownfunction('season')}
                                            placeholder="Season"
                                            values={this.state.season}
                                            />                        
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group select_label_name mt-15">
                                    <Select1
                                        dropdownPosition="auto"
                                        createNewLabel="Year"
                                        options={yearoptions}
                                        onChange={this.setstatevaluedropdownfunction('year')}
                                        placeholder="Year"
                                        values={this.state.year}
                                        />
                                    </div>
                                </div> 
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.designStyleNo}   fullWidth label="Style No" placeholder="Style No"/>
                                    </div>
                                </div>    
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.fit}   fullWidth label="Fit" placeholder="Fit"/>
                                    </div>
                                </div>  
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.purpose}   fullWidth label="Purpose" placeholder="Purpose"/>                                       
                                    </div>
                                </div>                                           
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={this.CloseMarkerRefernceversion} color="primary" className="text-white">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.CloseMarkerRefernceversion} className="btn-info text-white">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* End Marker Model version */}

                {/* Productivity Model version */}
                <Dialog open={this.state.IsProductivityModal} onClose={this.CloseProductivityModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Base Style</DialogTitle>
                    <DialogContent>                                   
                        <div className="col border pb-15">                       
                            <div className="row no-f-mb">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                            dropdownPosition="auto"
                                            //   multi
                                            createNewLabel="Buyer"
                                            options={BuyerOptions}
                                            onChange={this.setstatevaluedropdownfunction('buyer')}
                                            placeholder="Buyer"
                                            values={this.state.buyer}
                                            />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                        dropdownPosition="auto"
                                        //   multi
                                        createNewLabel="Buyer Division"
                                        options={BuyerDivisionOptions}
                                        onChange={this.setstatevaluedropdownfunction('buyerdiv')}
                                        placeholder="Buyer Division"
                                        values={this.state.buyerdiv}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                            dropdownPosition="auto"
                                            //   multi
                                            createNewLabel="Season"
                                            options={seasonoptions}
                                            onChange={this.setstatevaluedropdownfunction('season')}
                                            placeholder="Season"
                                            values={this.state.season}
                                            />                        
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group select_label_name mt-15">
                                    <Select1
                                        dropdownPosition="auto"
                                        createNewLabel="Year"
                                        options={yearoptions}
                                        onChange={this.setstatevaluedropdownfunction('year')}
                                        placeholder="Year"
                                        values={this.state.year}
                                        />
                                    </div>
                                </div> 
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.designStyleNo}   fullWidth label="Style No" placeholder="Style No"/>
                                    </div>
                                </div>    
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.fit}   fullWidth label="Fit" placeholder="Fit"/>
                                    </div>
                                </div>  
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.purpose}   fullWidth label="Purpose" placeholder="Purpose"/>                                       
                                    </div>
                                </div>                                           
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={this.CloseProductivityModal} color="primary" className="text-white">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.CloseProductivityModal} className="btn-info text-white">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* END Productivity Model version */}

                {/* SAM Model version */}
                <Dialog open={this.state.IsSAMModal} onClose={this.CloseSAMModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Base Style</DialogTitle>
                    <DialogContent>                                   
                        <div className="col border pb-15">                       
                            <div className="row no-f-mb">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                            dropdownPosition="auto"
                                            //   multi
                                            createNewLabel="Buyer"
                                            options={BuyerOptions}
                                            onChange={this.setstatevaluedropdownfunction('buyer')}
                                            placeholder="Buyer"
                                            values={this.state.buyer}
                                            />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                        dropdownPosition="auto"
                                        //   multi
                                        createNewLabel="Buyer Division"
                                        options={BuyerDivisionOptions}
                                        onChange={this.setstatevaluedropdownfunction('buyerdiv')}
                                        placeholder="Buyer Division"
                                        values={this.state.buyerdiv}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group select_label_name mt-15">
                                        <Select1
                                            dropdownPosition="auto"
                                            //   multi
                                            createNewLabel="Season"
                                            options={seasonoptions}
                                            onChange={this.setstatevaluedropdownfunction('season')}
                                            placeholder="Season"
                                            values={this.state.season}
                                            />                        
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="form-group select_label_name mt-15">
                                    <Select1
                                        dropdownPosition="auto"
                                        createNewLabel="Year"
                                        options={yearoptions}
                                        onChange={this.setstatevaluedropdownfunction('year')}
                                        placeholder="Year"
                                        values={this.state.year}
                                        />
                                    </div>
                                </div> 
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.designStyleNo}   fullWidth label="Style No" placeholder="Style No"/>
                                    </div>
                                </div>    
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.fit}   fullWidth label="Fit" placeholder="Fit"/>
                                    </div>
                                </div>  
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <TextField id="designStyleNo" value={this.state.purpose}   fullWidth label="Purpose" placeholder="Purpose"/>                                       
                                    </div>
                                </div>                                           
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={this.CloseSAMModal} color="primary" className="text-white">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.CloseSAMModal} className="btn-info text-white">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* END SAM Model version */}

                {/* Attachment Model version */}
                <Dialog open={this.state.IsAttachmentModal} onClose={this.CloseAttachmentModal} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Attachment</DialogTitle>
                    <DialogContent>                                   
                        <div className="col border">                       
                            <div className="row no-f-mb">
                            
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-15">
                                    <div className="form-group">
                                        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                                    </div>
                                </div>        

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">                                        
                                        <TextField id="remarks" value={this.state.remarks}  onChange={this.setstatevaluefunction('remarks')} fullWidth label="Remarks" placeholder="Remarks"/>
                                    </div>
                                </div> 
                                                               
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={this.CloseAttachmentModal} color="primary" className="text-white">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.CloseAttachmentModal} className="btn-info text-white">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* END Attachment Model version */}

                 {/* Material Unit Price Model version */}
                 <Dialog open={this.state.IsMaterialUnitPrice} onClose={this.CloseMaterialUnitPrice} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Material Unit Price</DialogTitle>
                    <DialogContent>                                   
                        <div className="col border">                       
                            <div className="row no-f-mb">                            
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">                                        
                                        <TextField id="MaterialPrice" value={this.state.materialPrice}  onChange={this.setstatevaluefunction('materialPrice')} fullWidth label="Material Price" placeholder="Material Price"/>
                                    </div>
                                </div> 
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group">                                        
                                        <TextField id="FreightPrice" value={this.state.FreightPrice}  onChange={this.setstatevaluefunction('FreightPrice')} fullWidth label="Freight Price" placeholder="Freight Price"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-15">
                                    <Select1 dropdownPosition="auto" createNewLabel="Freight Mode"  options={FreightModeoptions}
                                        // onChange={values => this.setState({ year:values })} 
                                        onChange={this.setstatevaluedropdownfunction('FreightMode')}
                                        placeholder="Freight Mode"
                                        values={this.state.FreightMode} />
                                        <span className="error">{this.state.errors["FreightMode"]}</span>
                                </div>                                
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={this.CloseMaterialUnitPrice} color="primary" className="text-white">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.CloseMaterialUnitPrice} className="btn-info text-white">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* END Material Unit Price Model version */}
            </div>
         );
     }
 }
 export default ItenNasterCreation;
 