import React, { Component, Fragment } from 'react';
 // page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import Button from '@material-ui/core/Button';
import { Media, Badge,Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
// intl messages
import IntlMessages from 'Util/IntlMessages';
// rct card box
import api from "Api";
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Select1 from "react-dropdown-select";
import { convertNeSwToNwSe } from 'google-map-react';
import UDMasterList from "./udmasterlist";
// const $ = require('jquery');


class UDMaster extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Type : "",
            TypeDesc : "",
            Code : "",
            CodeDesc : "",
            IndexKey : 0,
            Active : true,
            TypeList : [],
            UDList : [],
            fields: {},
            errors: {}
        };
    }

    getTypeList = (e) => {
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});       

        this.setstatevaluedropdownfunction(e.target.name, e.target.value);  
        var index = e.target.selectedIndex;
        var optionElement = e.target.childNodes[index]
        var option =  optionElement.getAttribute('name');

        this.setState({ Type: e.target.value, TypeDesc : option, Code : "", CodeDesc : "",IndexKey : 0, Active : true });
        this.Fill_UD_List_Data(e.target.value);

        // api.get('Miscellaneous/GetMiscellaneousList?MType=' + e.target.value)
        //     .then((response) => {            
        //         this.setState({ UDList: response.data.result.data });
        //     }).catch(error => { });
    }
    
    Fill_UD_List_Data(mType) {
        api.get('Miscellaneous/GetMiscellaneousList?MType=' + mType)
            .then((response) => {            
                this.setState({ UDList: response.data.result.data });
            }).catch(error => { });
    }

    getCommonData() {  
        api.get('MiscellaneousType/GETMiscellaneousDropDown')
            .then((response) => {            
                this.setState({ TypeList: response.data.result.data });
            }).catch(error => { });
    }

    CheckboxHandle = (e) => {
        this.setState({ Active : !this.state.Active });
    }

    componentDidMount() {
        this.getCommonData();
	}


    ChangeEvent = (e)=> {
        this.setState({[e.target.name]: e.target.value});
        
        this.setstatevaluedropdownfunction(e.target.name, e.target.value);       
    }

    ClearAll() {
        this.setState({
            Type : "",
            TypeDesc : "",
            Code : "",
            CodeDesc : "",
            IndexKey : 0,
            Active : true,
            TypeList : [],
            UDList : []
        });
    }

    EditRows = (e) => {
        
        // console.log(mCode);
        // console.log(mType);
        //const { param, param1 } = e.target.dataset;
        const mCode = e.target.getAttribute("data-param"); 
        const mType = e.target.getAttribute("data-param1");

        api.get('Miscellaneous/GetMiscellaneousList?MCode=' + mCode + '&MType=' + mType)
            .then((response) => {
                console.log(response.data);
                response.data.result.data.map((data, ind) => (
                    //console.log(data.active)
                    //this.setState({ Code : data.code })
                    this.setState({ 
                        Type : data.type,
                        TypeDesc : data.typeDesc,
                        Code : data.code,
                        CodeDesc : data.codeDesc,
                        IndexKey : data.indexkey,
                        Active : (data.active == "Y" ? true : false),
                        TypeList : this.state.TypeList,
                        UDList : this.state.UDList
                     })
                ));
                //document.getElementById('UDMasterForm').scrollTo(0, 0);               
            })
    }


    POST_UD_Master_Data = (e) => {
        if(this.handleValidation()) {
            console.log({ Type : this.state.Type, TypeDesc : this.state.TypeDesc, Code : this.state.Code, CodeDesc : this.state.CodeDesc, IndexKey : this.state.IndexKey, Active : (this.state.Active == true ? "Y" : "N") });
            api.post("Miscellaneous/SaveMiscMaster", { type : this.state.Type, typeDesc : this.state.TypeDesc, code : this.state.Code, codeDesc : this.state.CodeDesc, indexKey : this.state.IndexKey, active : (this.state.Active == true ? "Y" : "N"), createdBy: "ADMIN", modifyBy: "ADMIN", modifyDt: "2021-11-23T05:38:08.837Z", hostName: "ADMIN" }).then((response) => {
                console.log(response);
                NotificationManager.success('Added Sucessfully');
                this.setState({
                    Code : "",
                    CodeDesc : "",
                    IndexKey : 0,
                    Active : true
                });
                this.Fill_UD_List_Data(this.state.Type);
                this.getCommonData();
            });
        }
        
    }

    setstatevaluedropdownfunction (name, val) {
        let fields = this.state.fields;
        fields[name] = val;        
        this.setState({fields});
        
		// this.setState({ [name]: event });
	};

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
       
        if(!fields["Type"]) {
          formIsValid = false;
          errors["Type"] = "Cannot be empty";
        }        
        if(!fields["Code"]) {
            formIsValid = false;
            errors["Code"] = "Cannot be empty";
        }

        if(!fields["TypeDesc"]) {
            formIsValid = false;
            errors["TypeDesc"] = "Cannot be empty";
        } 

        if(!fields["CodeDesc"]) {
            formIsValid = false;
            errors["CodeDesc"] = "Cannot be empty";
        }

        if(!formIsValid) {
            console.log(this.state);
        }
        this.setState({errors: errors});

        return formIsValid;
    }

    render() {
       return(
           
        <div>
            <RctCollapsibleCard heading="">
                <PageTitleBar title="UD Master" match={this.props.match} />
                    
                <div className="row new-form mb-10" id="UDMasterForm">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            {/* <TextField id="UDType" fullWidth label="Type" placeholder="Type"/> */}
                            {/* <Select1  dropdownPosition="auto"  createNewLabel="UDType"
                                            options={TypeOptions} ref="Type"
                                            onChange={values => this.getTypeList({ BuyerValue: values }, this, "Type")}
                                            placeholder="Type" values={this.state.Type}
                                        />  
                                         <span className="error">{}</span> */}
                            <label> Type </label>
                            <select className="form-control" name="Type" id="UDType" onChange={this.getTypeList}>
                                <option value="">-  -</option>
                                {
                                    //console.log(this.state.TypeList)

                                    this.state.TypeList.map((val) => (
                                        <option value={val.miscType} name={val.description}>{val.miscType}&emsp;|&emsp;{val.description}</option>
                                    ))
                                }
                            </select>
                            <span className="error">{this.state.errors["Type"]}</span> 
                        </div>
                        {/* <div className="form-group">
                            <label className="control-label">Type</label>
                            <select className="form-control">
                                <option value=""></option>
                            </select>
                        </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            {/* <TextField id="UDCode" fullWidth label="Code" placeholder="Code"/> */}
                            <label> Code </label>
                            <input className="form-control" name="Code" id="UDCode" placeholder="Code" value={this.state.Code} onChange={this.ChangeEvent} />
                            <span className="error">{this.state.errors["Code"]}</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            {/* <TextField id="UDTypeDesc" fullWidth label="Type Description" placeholder="Type Description"/> */}
                            <label> Type Description </label>
                            <input className="form-control" name="TypeDesc" id="UDTypeDesc" placeholder="Type Description" value={this.state.TypeDesc} onChange={this.ChangeEvent} />
                            <span className="error">{this.state.errors["TypeDesc"]}</span>
                        </div>
                        {/* <div className="form-group">
                            <label className="control-label">Type</label>
                            <select className="form-control">
                                <option value=""></option>
                            </select>
                        </div> */}
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            {/* <TextField id="UDDesc" fullWidth label="Code Description" placeholder="Code Description"/> */}
                            <label> Code Description </label>
                            <input className="form-control" name="CodeDesc" id="UDDesc" placeholder="Code Description" value={this.state.CodeDesc} onChange={this.ChangeEvent} />
                            <span className="error">{this.state.errors["CodeDesc"]}</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="form-group">
                            {/* <TextField id="Indexkey" fullWidth label="Index Key" placeholder="Index Key"/> */}
                            <label> Index Key </label>
                            <input className="form-control" name="IndexKey" id="Indexkey" placeholder="Index Key" value={this.state.IndexKey} onChange={this.ChangeEvent} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="form-group">
                            {/* <Checkbox color="primary" checked={true} value="C" /> */}
                            <div className="w-10 align-center pt-25 ch-new float-right mr-50">
                                <FormControlLabel name="Active" control={<Checkbox color="primary" checked={this.state.Active} onChange={this.CheckboxHandle} value="" />} label="Active" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                        <div className="form-group mt-15 text-right">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" >
                                <span className="MuiButton-label">
                                    <i className="zmdi zmdi-rotate-left"></i> 
                                    Cancel
                                </span> 
                                <span className="MuiTouchRipple-root"></span>
                            </button>

                            <button onClick={this.POST_UD_Master_Data} className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" >
                                <span className="MuiButton-label">
                                    <i className="zmdi zmdi-floppy"></i> 
                                    Save
                                </span> 
                                <span className="MuiTouchRipple-root"></span>
                            </button>                           

                        </div>
                    </div> 
                </div>
                <div className="clearboth">
                    <UDMasterList UDList={this.state.UDList} EditRow={this.EditRows}></UDMasterList>
                </div>
            </RctCollapsibleCard>
        </div>
    )
   }
}
export default UDMaster;