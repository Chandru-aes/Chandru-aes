
 

 
/**
 * Basic Table
 */
 import React, { Component, Fragment,useState } from 'react';
 import Button from '@material-ui/core/Button';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import DateTimePicker from 'react-datetime-picker';
 import { Media, Badge,Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, } from 'reactstrap';
 import IconButton from '@material-ui/core/IconButton';
 import Avatar from '@material-ui/core/Avatar';
 import Checkbox from '@material-ui/core/Checkbox';
 // api
 import api from 'Api';
 
 import InputLabel from '@material-ui/core/InputLabel';
 
 import MenuItem from '@material-ui/core/MenuItem';
 
 import FormControl from '@material-ui/core/FormControl';
 
 import Select from '@material-ui/core/Select';
 import Select1 from "react-dropdown-select";
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
 import RadioGroup from '@material-ui/core/RadioGroup';
 import Radio from '@material-ui/core/Radio';
 
 import moment from 'moment';
 import DateFnsUtils from '@date-io/date-fns';
 import Dialog from '@material-ui/core/Dialog';
 import DialogActions from '@material-ui/core/DialogActions';
 import DialogContent from '@material-ui/core/DialogContent';
 import DialogContentText from '@material-ui/core/DialogContentText';
 import DialogTitle from '@material-ui/core/DialogTitle';
 import { NotificationContainer, NotificationManager } from 'react-notifications';
 
 // const styles = {
 // 	checked: {
 // 		color: pink[500],
 // 	},
    
 // };
 import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
 const $ = require('jquery');
 function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }
 class RequeststatusElement extends Component {
     constructor(props) {
         super(props);
         
         // For a full list of possible configurations,
         // please consult http://www.dropzonejs.com/#configuration
         this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif"
         };
   
         this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/'
         };
         this.dropzone = null;
         this.state={
            requestoptions:[],
            requestitems:[],
            employeeList:[],
            requestView:[],
            patternVersion:[],
            doneByitems:[],
            MarkerdoneByitems:[],
            checkedByItems:[],
            markercheckedByItems:[],
            patternNatureofJobItems:[],
            patternType:[],
            departmentType:[],
            patternStatusGridList:[],
            doneByList:[],
            checkedbyList:[],
            natureofJob:[],
            fields: {},
            errors: {},
            PatternTempRowData:[],
            sampleListData:[],
            markerListData:[],
            reason:'',
            storageArea:''
           
         }
         }
        state = {
            activeIndex: 0,
            open: false,
            cloneopen: false,
            ropen: false,
            tpopen: false,
            selectedDate: moment(),
            addNewUserModal: false,
            checkedA: true,
            fields: {},
            errors: {},
            requestitems:[],
            requestView:[],
            patternNatureofJobItems:[],
            patternType:[],
            doneByList:[],
            checkedbyList:[]
        }
     
     componentDidMount() {
        api.get('RequestStatus/GetRequestNoDropdown')
        .then((response) => {            
            this.setState({ requestitems: response.data.data });
        })
        .catch(error => {})

        api.get('RequestStatus/GetNatureOfJobDropdown')
        .then((response) => {            
            this.setState({ patternNatureofJobItems: response.data.data });
        })
        .catch(error => {})

        api.get('Miscellaneous/GetMiscellaneousList?MType=PATTYPE')
        .then((response) => {            
            this.setState({ patternType: response.data.result.data });
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=SAMDEPT')
        .then((response) => {            
            this.setState({ departmentType: response.data.result.data });
        })

        api.get('Employee/GetEmployeeList')
        .then((response) => {            
            this.setState({ employeeList: response.data.result.data });
        })
    }
    setStateValueDropdown = name => event => {      
		this.setState({ [name]: event });
	};
    setstateHeadervalueDrop= name => event => {
        let fields = this.state.fields;
        fields[name] = event[0].value;        
        this.setState({fields});
		this.setState({ [name]: event });
        this.setstatevaluedropdownfunction(event[0].label);
	};
    setstatevaluedropdownfunction(val){
       
      
        api.get('RequestStatus/GetRequestNoDetail?RequestNo='+val)
        .then((response) => {      
                
            this.setState(
                { updatedRequestNo: val,
                styleNo: response.data.data[0].styleNo,
                purpose: response.data.data[0].purpose,
               baseStyleno: response.data.data[0].baseStyleno}
            );
            
        })
        .catch(error => {})  
        
        api.get('RequestStatus/GetRequestviewDropDown?RequestNo='+val)
        .then((response) => {   
                
            this.setState({ requestView: response.data.data });            
        })
        .catch(error => {}) 

        api.get('RequestStatus/GetPatternversionDropdown?RequestNo='+val)
        .then((response) => {   
                
            this.setState({ patternVersion: response.data.data });            
        })
        .catch(error => {}) 


        api.get('RequestStatus/GetPatternStatusGridList?RequestNo='+val)
        .then((response) => {   
                
            this.setState({ patternStatusGridList: response.data.data });            
        })
        .catch(error => {}) 



    }

    handleChangeTextField = name => event => {
        
        this.setState({ [name]: event.target.value });

        let fields = this.state.fields;
        fields[name] = event.target.value;        
        this.setState({fields});
        
    };
    setPatterntimeValue (value){
        const Timevalue = value.patterndate;
        const NewDate = moment(Timevalue).format("YYYY/MM/DD");

        this.state.patterndate = NewDate;

        console.log(value)
        //this.setState({ [name]: event.target.value });
    };
    setPatterntimeStateValue(value){
       this.state.patterntime = moment(value).format("hh:mm:ss A");

       console.log(this.state)
    }
    
    setstatevalueDrop = name => event => {
        let fields = this.state.fields;
        fields[name] = event[0].value;        
        this.setState({fields});
        
		this.setState({ [name]: event });
	};
    rhandleClickOpen = () => {
        this.setState({ ropen: true });
     };

     rhandleClose = () => {
        this.setState({ ropen: false });
     };
     deletePatternGrid(item){
        const {PatternTempRowData} = this.state; 
            
        if (PatternTempRowData.indexOf(item) !== -1) {
            PatternTempRowData.splice(PatternTempRowData.indexOf(item), 1);
        } 
        this.setState({PatternTempRowData:PatternTempRowData})
     }
     addPatternGrid(){
         const {PatternTempRowData} = this.state;

         let patternItems = {
             "id":0,
             "swH_ID": 0,
             'natureOfJob':this.state.natureofJob[0].label,
             'patVersion':this.state.patternversion[0].label,
             'patType':this.state.patterntype[0].label,
             'storageArea':this.state.storageArea,
             'preparedby':this.state.doneByitems[0].label,
             'checkedby':this.state.doneByitems[0].label,  
             "cancel": "N",
             "outDate": "2021-11-19T02:38:39.740Z",
             "createdBy": "Admin",
             "hostName": "LOCALHOST",
             'Revision':   this.state.reason,    
             'patterndate':   this.state.patterndate,  
             'patterntime':this.state.patterntime,
             'remarks':this.state.patternremarks
         }
         /**Check whether object is already exists */
         let IsMatch = false;
         PatternTempRowData.map((item, index) => {
            IsMatch = JSON.stringify(patternItems) === JSON.stringify(item);
            if(IsMatch){
                return;
            }           
        });         
        if(!IsMatch){
            PatternTempRowData.push(patternItems);
        }else{
            NotificationManager.error('Added Items is already exists in List');
        }      
        
         this.setState({PatternTempRowData:PatternTempRowData})
       
     }
     deleteSampleItem(item){
        const {sampleListData} = this.state; 
            
        if (sampleListData.indexOf(item) !== -1) {
            sampleListData.splice(sampleListData.indexOf(item), 1);
        } 
        this.setState({sampleListData:sampleListData})
     }
     addSampleGrid(){
        const {sampleListData} = this.state;
        let patternItems = {
            "id": 0,
            "swH_ID": 0,
            "patVersion": this.state.samplepatternversion[0].label,
            "patVersionLabel": this.state.samplepatternversion[0].label,
            "pcs": this.state.noofpieces,
            "department": this.state.department[0].value,
            "departmentLabel": this.state.department[0].label,
            "departmentSeq": 0,
            "departmentFlag": "string",
            "line": this.state.lineno,
            "inDate": "2021-11-19T05:47:34.835Z",
            "outdate": "2021-11-19T05:47:34.835Z",
            "remarks": this.state.remarks,
            "qcFlag": "string",
            "qcRemarks": "string",
            "createdBy": "Admin",
            "hostName": "LOCALHOST"
        }
        /**Check whether object is already exists */
        let IsMatch = false;
        sampleListData.map((item, index) => {
           IsMatch = JSON.stringify(patternItems) === JSON.stringify(item);
           if(IsMatch){
               return;
           }           
       });         
       if(!IsMatch){
            sampleListData.push(patternItems);
       }else{
           NotificationManager.error('Added Items is already exists in List');
       }      
       
        this.setState({sampleListData:sampleListData})
     }

    savePattern(e){
        e.preventDefault();
        if(this.handleValidation()){
            this.savePatternItems();
        }  
    } 
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
       
        if(!fields["natureofJob"]){
          formIsValid = false;
          errors["natureofJob"] = "Cannot be empty";
        }
        if(!fields["patternversion"]){
            formIsValid = false;
            errors["patternversion"] = "Cannot be empty";
        }
        if(!fields["patterntype"]){
            formIsValid = false;
            errors["patterntype"] = "Cannot be empty";
        }
        if(!fields["storageArea"]){
            formIsValid = false;
            errors["storageArea"] = "Cannot be empty";
        }
        if(!fields["doneByitems"]){
            formIsValid = false;
            errors["doneByitems"] = "Cannot be empty";
        }
        if(!fields["checkedByItems"]){
            formIsValid = false;
            errors["checkedByItems"] = "Cannot be empty";
        }
        if(!fields["patternremarks"]){
            formIsValid = false;
            errors["patternremarks"] = "Cannot be empty";
        }
        if(!fields["requestno"]){
            formIsValid = false;
            errors["requestno"] = "Cannot be empty";
        }
        

        this.setState({errors: errors});
        return formIsValid;
    }
     savePatternItems(){

        if(this.state.PatternTempRowData.length>0){
            const {PatternTempRowData} = this.state;
            const savePatternObject = {
                "pdmPatternStatusModel":PatternTempRowData
            }
            api.post('RequestStatus/SavePattenStatus',savePatternObject) .then((response) => {
                NotificationManager.success('Pattern Iten created Sucessfully');
            });
        }else{
            NotificationManager.error('Pattern List Items should not be empty');
        }
        
           
     }
     saveSample(){
        const {sampleListData} = this.state;
        const saveObject = {
            "pdmSampleStatusModel":sampleListData
        }
        api.post('RequestStatus/SaveSampleStatus',saveObject) .then((response) => {
            NotificationManager.success('Sample Item created Sucessfully');
        });
           
     }
     addMarkerGrid(){
        const {markerListData} = this.state;
        let patternItems = {
            "id": 0,
            "swH_ID": 0,            
            "storageaArea": this.state.markerStoragearea,
            "preparedby": this.state.MarkerdoneByitems[0].label,
            "checkedBy":  this.state.markercheckedByItems[0].label,
            "remarks": this.state.remarks,
            "outDate": this.state.markerDate,
            "createdBy": "Admin",
            "hostName": "LocalHost",
            "fabricdetails":"",
            "width":"",
            "size":"",
            "Repeat":"",
            "GAR qTy":"",
            "Marker":"",
            "Efficiency":"",
        }
        /**Check whether object is already exists */
        let IsMatch = false;
        markerListData.map((item, index) => {
           IsMatch = JSON.stringify(patternItems) === JSON.stringify(item);
           if(IsMatch){
               return;
           }           
       });         
       if(!IsMatch){
        markerListData.push(patternItems);
       }else{
           NotificationManager.error('Added Items is already exists in List');
       }      
       
        this.setState({markerListData:markerListData})
     }
     
     render() {
         const { employeePayroll } = this.state;
         const { match } = this.props;
         const { selectedDate } = this.state;
         const { classes } = this.props;
         const config = this.componentConfig;
         const djsConfig = this.djsConfig;
         
         const requestnooptions = [];
        for (const item of this.state.requestitems) {           
            requestnooptions.push({value:item.id,label:item.reqNo});
        }

        const requestviewoptions = [];
        for (const item of this.state.requestView) {           
            requestviewoptions.push({value:item.id,label:item.reqType});
        }

        const patternVersionOptions = [];
        for (const item of this.state.patternVersion) {           
            patternVersionOptions.push({value:item.id,label:item.patVersion});
        }

        const natureofJobOptions =[];
        for (const item of this.state.patternNatureofJobItems) {           
            natureofJobOptions.push({value:item.code,label:item.typeDesc});
        }

        const patternTypeOptions = [];
        for (const item of this.state.patternType) {           
            patternTypeOptions.push({value:item.code,label:item.codeDesc});
        }
        
        const departmentTypeOptions=[];
        for (const item of this.state.departmentType) {           
            departmentTypeOptions.push({value:item.code,label:item.codeDesc});
        }
        
        const doneByListOptions = [];
        const checkedByListOptions = [];
        for (const item of this.state.employeeList) {           
            doneByListOptions.push({value:item.empCode,label:item.empName});
            checkedByListOptions.push({value:item.empCode,label:item.empName});

        }

        //:[]
           const handleToggle = () => {
             this.setState({ isActive: !this.state.isActive });
           };
           const eventHandlers = {
             init: dz => this.dropzone = dz,
             drop: this.callbackArray,
             addedfile: this.callback,
             success: this.success,
             removedfile: this.removedfile
          }
          
           const isActive = this.state.isActive;
        //    const Datevalue = new Date();
        //    const Timevalue=new Date();
           
          return ( 
              
             <RctCollapsibleCard heading="Request Status">
                  <PageTitleBar title="Menu" match={this.props.match} />  
                    <div className="row">
                        <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12">
                            <div className="w-100">
                                {/* <div className="float-right n-bt-top">                        
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button>  
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                                </div>  */}
                                <div className="clearfix"></div>
                                <div className="row p-20">
                                    <div className="w-75 col border pb-10">
                                        <div className="row no-f-mb">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="RequestNo"
                                                        options={requestnooptions}
                                                        onChange={this.setstateHeadervalueDrop('requestno')}
                                                       // onChange={values => this.setstatevaluedropdownfunction({ RequestNo:values },this,"requestno")}
                                                        //onChange={this.setstatevaluedropdownfunction('requestno')}
                                                        placeholder="Request No"
                                                        values={this.state.requestno}
                                                        />
                                                     <span className="error">{this.state.errors["requestno"]}</span>   
                                                </div>
                                            </div> 
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group  mt-15">
                                                    <input placeholder="Style Number" value={this.state.styleNo} className="MuiInputBase-input textbox-width" readOnly                                                   
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                 <div className="form-group  mt-15">
                                                    <input placeholder="Purpose" value={this.state.purpose} className="MuiInputBase-input textbox-width" readOnly                                                   
                                                    />
                                                </div>                                              
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group  mt-15">
                                                    <input placeholder="Base Style" value={this.state.baseStyleno} className="MuiInputBase-input textbox-width" readOnly                                                   
                                                    />
                                                </div> 
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                                                <RadioGroup row aria-label="anchorReference" name="anchorReference">                           
                                                    <FormControlLabel color="primary" value="sample" control={<Radio />} label="Accept" />
                                                </RadioGroup>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                                                <RadioGroup row aria-label="anchorReference" name="anchorReference">                           
                                                    <FormControlLabel color="primary" value="sample" control={<Radio />} label="Hold" />
                                                </RadioGroup>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                                                <RadioGroup row aria-label="anchorReference" name="anchorReference">
                                                    <FormControlLabel color="primary" value="sample" control={<Radio />} label="Cancel" />
                                                </RadioGroup>
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <TextField id="Buyer" fullWidth label="Reason" placeholder="Reason" onChange={this.handleChangeTextField('reason')} value={this.state.reason}/>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                <TextField id="Buyer" fullWidth label="Remarks" placeholder="Remarks" onChange={this.handleChangeTextField('remarks')} value={this.state.remarks}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Request View"
                                                        options={requestviewoptions}
                                                        //onChange={values => this.setstatevaluedropdownfunction({ RequestView:values },this,"requestview")}
                                                        onChange={this.setStateValueDropdown('requestView')}
                                                        placeholder="Request View"
                                                        values={this.state.requestview}
                                                        />
                                                </div>
                                            </div> 
                    
                   
               
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                    <Accordion className="border mb-15 mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Pattern</Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button"  onClick={(e) =>this.savePattern(e)}><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">
                         <div className="w-25">
                     <div className="">
                     <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                     </div>
                     </div>
                    <div className="w-75 row pl-15">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group select_label_name mt-15">
                                <Select1
                                    dropdownPosition="auto"
                                    //   multi
                                    ref="natureofJob"
                                    createNewLabel="Nature Of Job"
                                    options={natureofJobOptions}
                                    //onChange={values => this.setstatevaluedropdownfunction({ RequestNo:values },this,"requestno")}
                                    onChange={this.setstatevalueDrop('natureofJob')}
                                    placeholder="Nature Of Job"
                                    values={this.state.natureofJob}
                                    />
                                    <span className="error">{this.state.errors["natureofJob"]}</span> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group select_label_name mt-15">
                                <Select1
                                    dropdownPosition="auto"
                                    createNewLabel="Pattern Version"
                                    options={patternVersionOptions}                                   
                                    onChange={this.setstatevalueDrop('patternversion')}
                                    placeholder="Pattern Version"
                                    values={this.state.patternversion}
                                />
                                 <span className="error">{this.state.errors["patternversion"]}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group select_label_name mt-15">
                                <Select1
                                    dropdownPosition="auto"
                                    //   multi
                                    createNewLabel="Pattern Type"
                                    options={patternTypeOptions}
                                    onChange={this.setstatevalueDrop('patterntype')}
                                    placeholder="Pattern Type"
                                    values={this.state.patterntype}
                                    />
                                    <span className="error">{this.state.errors["patterntype"]}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">    
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Storage Area" placeholder="Storage Area" onChange={this.handleChangeTextField('storageArea')} value={this.state.storageArea}/>
                                <span className="error">{this.state.errors["storageArea"]}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group select_label_name mt-15">
                                <Select1
                                    dropdownPosition="auto"
                                    createNewLabel="Done by"
                                    options={doneByListOptions}
                                    onChange={this.setstatevalueDrop('doneByitems')}
                                    placeholder="Done by"
                                    values={this.state.doneByitems}
                                    />
                                    <span className="error">{this.state.errors["doneByitems"]}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group select_label_name mt-15">
                                <Select1
                                    dropdownPosition="auto"
                                    createNewLabel="Checked By"
                                    options={checkedByListOptions}
                                    onChange={this.setstatevalueDrop('checkedByItems')}                                    
                                    placeholder="Checked By"
                                    values={this.state.checkedByItems}
                                    />
                                    <span className="error">{this.state.errors["checkedByItems"]}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group ">
                                <TextField id="Buyer" fullWidth label="Date" placeholder="Date" onChange={this.handleChangeTextField('patterndate')} value={this.state.patterndate}/>
                                {/* <DateTimePicker     className="date-picker-react"  /> */}
                                {/* <DatePicker/> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group ">
                                <TextField id="Buyer" fullWidth label="Time" placeholder="Time" onChange={this.handleChangeTextField('patterntime')} value={this.state.patterntime}/>
                                {/* <DateTimePicker     className="date-picker-react" 
                                /> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group ">
                                <TextField id="PatternRemarks" fullWidth label="PatternRemarks" placeholder="Remarks" onChange={this.handleChangeTextField('patternremarks')} value={this.state.patternremarks}/>
                                <span className="error">{this.state.errors["patternremarks"]}</span>
                            </div>
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
                                    <th className="">Actions</th>
                                    <th className="">Nature of Job</th>
                                    <th className="">Version</th>
                                    <th className="">Pattern Type</th>
                                    <th className="">Storage Area</th>
                                    <th className="">Done By</th>
                                    <th className="">Checked By</th>
                                    <th className="">Revision </th>
                                    <th className="">Date & Time</th>
                                    <th className="">Remark</th> 
                                </tr>
                            </thead>
                                 <tbody>
                               
                                 {this.state.PatternTempRowData.map((n,index) => {                                   
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
                                {this.state.PatternTempRowData.length==0 &&
                                        <tr>
                                            <td colSpan="8" className="no-records-data">No Records Found</td>
                                        </tr>
                                }
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
                                 <div className="w-50 float-right">
                                 <div className="w-25 float-left">
                                 <label className="mt-5">Rows per page: </label>
                    </div>
                    <div className="w-15 float-left">
                    <select class="form-control">
                                                            <option>10</option> 
                                                            <option>20</option> 
                                                            <option>30</option> 
                                                            <option>40</option> 
                                                        </select>
        </div>
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>      
                     
                    
               
                        
                        </div>
                     </AccordionDetails>
                 </Accordion>
                 <Accordion className="border">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Sample</Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) =>this.saveSample()}><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">  
                     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group select_label_name mt-15">
                            <Select1
                                dropdownPosition="auto"
                                createNewLabel="Pattern Version"
                                options={patternVersionOptions}                                   
                                onChange={this.setstatevalueDrop('samplepatternversion')}
                                placeholder="Pattern Version"
                                values={this.state.samplepatternversion}
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <TextField id="Buyer" fullWidth label="No of Pieces" placeholder="No of Pieces" onChange={this.handleChangeTextField('noofpieces')} value={this.state.noofpieces}/>                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group ">
                             <TextField id="Buyer" fullWidth label="Line No" placeholder="Line No" onChange={this.handleChangeTextField('lineno')} value={this.state.lineno}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group select_label_name mt-15">
                            <Select1
                                dropdownPosition="auto"
                                createNewLabel="Department"
                                options={departmentTypeOptions}                                   
                                onChange={this.setstatevalueDrop('department')}
                                placeholder="Department"
                                values={this.state.department}
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                        <div className="row">
                            <RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">
                                <FormControlLabel color="primary" value="sample" control={<Radio />} label="In" />
                            </RadioGroup>

                            <RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">
                                <FormControlLabel color="primary" value="sample" control={<Radio />} label="Out" />
                            </RadioGroup>
                         </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                        <div className="form-group">
                            <TextField id="Buyer" fullWidth label="Remarks" placeholder="Remarks"/>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                        <div className="form-group mt-15">  
                            <Button variant="contained" className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-0 text-white btn-icon b-md" onClick={this.rhandleClickOpen}>Additional tab</Button>
                        </div>
                    </div>

                    <div classname="med-popup" >
                        <Dialog open={this.state.ropen} onClose={this.rhandleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Additional tab</DialogTitle>
                                <DialogContent>                                   
                                    <div className="col border pb-10">                       
                                        <div className="row no-f-mb">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <FormControl fullWidth>
                                                        <InputLabel htmlFor="age-simple">Department</InputLabel>
                                                        <Select value={this.state.age} onChange={this.handleChange}
                                                        inputProps={{ name: 'age', id: 'age-simple', }}>
                                                        <MenuItem value=""><em>None</em></MenuItem>
                                                        <MenuItem value={10}>Autumn</MenuItem>
                                                        <MenuItem value={20}>Summer</MenuItem>
                                                        <MenuItem value={30}>Winter</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </div>         
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <TextField id="Buyer" fullWidth label="Remarks" placeholder="Remarks"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <div className="w-100 p-0 mt-15">
                                                        <label for="formFile" class="form-label float-left w-20 p-10">Add File</label>
                                                        <input class="form-control w-80 float-left" type="file" id="formFile"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <TextField id="Buyer" fullWidth label="No of Pieces" placeholder="No of Pieces"/>
                                                </div>
                                            </div>  
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
                                                <div className="row">
                                                    <RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">
                                                    <FormControlLabel color="primary" value="sample" control={<Radio />} label="Pass" />
                                                    </RadioGroup>

                                                    <RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">
                                                        <FormControlLabel color="primary" value="sample" control={<Radio />} label="Fail" />
                                                    </RadioGroup>
                                                </div>
                                            </div>      
                                            <div className="clearfix"></div>   
                                            <div className="table-responsive mt-10">
                                                <div className="float-right mr-5">
                                                    <div className="form-group">
                                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button" ><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>                                                     
                                                </div>
                                            </div> 
                                            <table className="table mt-10 data w-100 float-left">
                                                <thead>
                                                    <tr>
                                                    <th className="">Department</th>
                                                    <th className=""> No of Pieces </th>
                                                    <th className="">Pass</th>
                                                    <th className="">Fail </th>
                                                    <th className="">Date</th>
                                                    <th className="">Time</th>                                                    
                                                    <th className="">Remarks </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                
                                                        <td>Demo </td>
                                                        <td>Demo </td>
                                                        <td>Demo </td>
                                                        <td>Demo </td>
                                                        <td>Demo </td>
                                                        <td>Demo </td>
                                                        <td>Demo </td>
                                                    </tr>
                                                </tbody>
                                 
                                            </table>
                                 <div className="clearfix"></div>
                                 <div className="w-50 float-right">
                                 <div className="w-25 float-left">
                                 <label className="mt-5">Rows per page: </label>
                    </div>
                    <div className="w-15 float-left">
                    <select class="form-control">
                                                            <option>10</option> 
                                                            <option>20</option> 
                                                            <option>30</option> 
                                                            <option>40</option> 
                                                        </select>
        </div>
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>                         
                                            </div>
                                        </div>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="contained" onClick={this.rhandleClose} color="primary" className="text-white">
                                            Cancel
                                        </Button>
                                        <Button variant="contained" onClick={this.rhandleClose} className="btn-success text-white">
                                            Ok
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                    </div>
</div>



                     <div className="table-responsive mt-10">
                      <div className="float-right">
                         <div className="form-group">
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button" onClick={(e) =>this.addSampleGrid()}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                            
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="text-center">Actions</th>
                                     <th className="">Pattern Version </th>
                                     <th className="">No of Pieces </th>
                                     <th className=""> Line </th>
                                     <th className="">Department</th>
                                     <th className="">In</th>
                                     <th className="">Out</th>
                                     <th className=""> Remarks </th>
                                     

                                     </tr>
                                 </thead>
                                 <tbody>                                 
                                 {this.state.sampleListData.map((n,index) => {                                   
                                return (
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button"  onClick={(e) =>this.deleteSampleItem(n)}><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         <td>{n.patVersionLabel} </td>
                                         <td>{n.pcs} </td>
                                         <td>{n.line} </td>
                                         <td>{n.departmentLabel} </td>
                                         <td>In </td>
                                         <td>Out </td>
                                         <td>{n.remarks} </td>
                                     </tr>
                                ) }) }
                                    {this.state.sampleListData.length==0 &&
                                        <tr>
                                            <td colSpan="8" className="no-records-data">No Records Found</td>
                                        </tr>
                                }
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
                                 <div className="w-50 float-right">
                                 <div className="w-25 float-left">
                                 <label className="mt-5">Rows per page: </label>
                    </div>
                    <div className="w-15 float-left">
                    <select class="form-control">
                                                            <option>10</option> 
                                                            <option>20</option> 
                                                            <option>30</option> 
                                                            <option>40</option> 
                                                        </select>
        </div>
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>   
                     </AccordionDetails>
                 </Accordion>
                 
 
                 <Accordion className="border mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Marker</Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group select_label_name mt-15">
                                <Select1
                                    dropdownPosition="auto"
                                    createNewLabel="Pattern Version"
                                    options={patternVersionOptions}                                   
                                    onChange={this.setstatevalueDrop('markerpatternversion')}
                                    placeholder="Pattern Version"
                                    values={this.state.markerpatternversion}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Storage Area" placeholder=" Storage Area" onChange={this.handleChangeTextField('markerStoragearea')} value={this.state.markerStoragearea}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group select_label_name mt-15">
                                <Select1
                                    dropdownPosition="auto"
                                    createNewLabel="Done by"
                                    options={doneByListOptions}
                                    onChange={this.setstatevalueDrop('MarkerdoneByitems')}
                                    placeholder="Done by"
                                    values={this.state.MarkerdoneByitems}
                                    />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group select_label_name mt-15">
                                <Select1
                                    dropdownPosition="auto"
                                    createNewLabel="Checked By"
                                    options={checkedByListOptions}
                                    onChange={this.setstatevalueDrop('markercheckedByItems')}                                    
                                    placeholder="Checked By"
                                    values={this.state.markercheckedByItems}
                                    />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Date" placeholder="Date" onChange={this.handleChangeTextField('markerDate')} value={this.state.markerDate}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Time" placeholder="Time"  onChange={this.handleChangeTextField('markertime')} value={this.state.markertime}/>
                            </div>
                        </div>                       
                    </div>
                     <div className="table-responsive mt-10">
                      <div className="float-right">
                         <div className="form-group">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button" onClick={(e) =>this.addMarkerGrid()}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>                            
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="">Pattern Version</th>
                                     <th className="">Fabric Details</th>
                                     <th className="">Width </th>
                                     <th className="">Size </th>
                                     <th className="">Repeat </th>
                                     <th className="">GAR Quantity</th>
                                     <th className="">Marker</th>
                                     <th className="">Efficiency</th>
                                     <th className="">Remarks</th>

                                     </tr>
                                 </thead>
                                 <tbody>
                                 {this.state.markerListData.map((n,index) => {                                   
                                return (
                                     <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                ) }) }
                                {this.state.markerListData.length==0 &&
                                    <tr>
                                        <td colSpan="8" className="no-records-data">No Records Found</td>
                                    </tr>
                                }  
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
                                 <div className="w-50 float-right">
                                 <div className="w-25 float-left">
                                 <label className="mt-5">Rows per page: </label>
                    </div>
                    <div className="w-15 float-left">
                    <select class="form-control">
                                                            <option>10</option> 
                                                            <option>20</option> 
                                                            <option>30</option> 
                                                            <option>40</option> 
                                                        </select>
        </div>
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>  
                     </AccordionDetails>
                 </Accordion>
 
                 <Accordion className="border mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Value Add </Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">
                     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Value Add</InputLabel>
     <Select value={this.state.age} onChange={this.handleChange}
     inputProps={{ name: 'age', id: 'age-simple', }}>
     <MenuItem value=""><em>None</em></MenuItem>
     <MenuItem value={10}>Autumn</MenuItem>
     <MenuItem value={20}>Summer</MenuItem>
     <MenuItem value={30}>Winter</MenuItem>
     </Select>
 </FormControl>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Value Add Type</InputLabel>
     <Select value={this.state.age} onChange={this.handleChange}
     inputProps={{ name: 'age', id: 'age-simple', }}>
     <MenuItem value=""><em>None</em></MenuItem>
     <MenuItem value={10}>Autumn</MenuItem>
     <MenuItem value={20}>Summer</MenuItem>
     <MenuItem value={30}>Winter</MenuItem>
     </Select>
 </FormControl>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 rb-mb pt-10">
     <div className="row">
<RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">

<FormControlLabel color="primary" value="sample" control={<Radio />} label="In" />


</RadioGroup>

<RadioGroup row aria-label="anchorReference" name="anchorReference" className="col-lg-6">

<FormControlLabel color="primary" value="sample" control={<Radio />} label="Out" />


</RadioGroup>
</div>
</div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="No of Pieces" placeholder="No of Pieces"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Wash Formula" placeholder="Wash Formula"/>
 </div>
 </div>
 <div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Description" placeholder="Description"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="    Remarks " placeholder="    Remarks "/>
 </div>
 </div>
                     </div>
                     <div className="table-responsive mt-10">
                      <div className=" float-right">
                         <div className="form-group">
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-0 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="text-center">Actions</th>
                                     <th className="">    Department </th>
                                     <th className="">    No of Pieces </th>
                                     <th className="">    Description </th>
                                     <th className="">     In </th>
                                     <th className="">    Out </th>
                                     <th className="">    Description </th>

                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                         <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                          
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                         
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
                                 <div className="w-50 float-right">
                                 <div className="w-25 float-left">
                                 <label className="mt-5">Rows per page: </label>
                    </div>
                    <div className="w-15 float-left">
                    <select class="form-control">
                                                            <option>10</option> 
                                                            <option>20</option> 
                                                            <option>30</option> 
                                                            <option>40</option> 
                                                        </select>
        </div>
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>  
                     </AccordionDetails>
                 </Accordion>
                
 
                 <Accordion className="border mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>SAM</Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div>
                     <div className="clearfix"></div>
                     <div className="row">
                     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">    Option Type </InputLabel>
     <Select value={this.state.age} onChange={this.handleChange}
     inputProps={{ name: 'age', id: 'age-simple', }}>
     <MenuItem value=""><em>None</em></MenuItem>
     <MenuItem value={10}>Autumn</MenuItem>
     <MenuItem value={20}>Summer</MenuItem>
     <MenuItem value={30}>Winter</MenuItem>
     </Select>
 </FormControl>
 </div>
 </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="form-group">
 <FormControl fullWidth>
     <InputLabel htmlFor="age-simple">Option</InputLabel>
     <Select value={this.state.age} onChange={this.handleChange}
     inputProps={{ name: 'age', id: 'age-simple', }}>
     <MenuItem value=""><em>None</em></MenuItem>
     <MenuItem value={10}>Autumn</MenuItem>
     <MenuItem value={20}>Summer</MenuItem>
     <MenuItem value={30}>Winter</MenuItem>
     </Select>
 </FormControl>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="SEW SAM" placeholder="SEW SAM"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="KB SAM" placeholder="KB SAM"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="Manual SAM" placeholder="Manual SAM"/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="    Difficulty Level " placeholder="    Difficulty Level "/>
 </div>
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
 <div className="form-group">
 <TextField id="Buyer" fullWidth label="OB Link" placeholder="OB Link"/>
 </div>
 </div>
                     </div>
                     <div className="table-responsive mt-10">
                      <div className="float-right">
                         <div className="form-group">
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                         </div>
                     </div>
 
                             <table className="table mt-10 data w-100 float-left">
                                 <thead>
                                     <tr>
                                     <th className="text-center">Actions</th>
                                     <th className="">    Option Type </th>
                                     <th className="">Option</th>
                                     <th className="">SEW SAM</th>
                                     <th className="">    KB SAM </th>
                                     <th className="">    Manual SAM </th>
                                     <th className="">OB Link</th>
                                     <th className="">    Difficulty Level </th>

                                     </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                         <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                          
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>
                                     
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>

                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                     <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> </td>

                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                 </tbody>
                                 
                                 </table>
                                 <div className="clearfix"></div>
                                 <div className="w-50 float-right">
                                 <div className="w-25 float-left">
                                 <label className="mt-5">Rows per page: </label>
                    </div>
                    <div className="w-15 float-left">
                    <select class="form-control">
                                                            <option>10</option> 
                                                            <option>20</option> 
                                                            <option>30</option> 
                                                            <option>40</option> 
                                                        </select>
        </div>
        <div className="w-33 float-left text-center pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="float-right">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div>
                             </div>  
                     </AccordionDetails>
                 </Accordion>
 
 
                 
 
                 </div>
 </div>
 
                    </div>
                </div>
                </div>
                </div>
                </div>
               
 
               
           
                
            </RctCollapsibleCard>
            
         );
     }
 }
 
 export default RequeststatusElement;
 