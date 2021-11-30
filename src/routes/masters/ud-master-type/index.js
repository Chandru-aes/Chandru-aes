import React, { Component, Fragment } from 'react';
 // page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// rct card box
import api from "Api";
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Checkbox from '@material-ui/core/Checkbox';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import UDMasterTypeList from './UDMasterTypeList';
const $ = require('jquery');

class UDMasterType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            MiscType : "",
            Description : "",
            Active : true,
            TypeList : [],
            fields: {},
            errors: {}
        };
    }

    getCommonData() { 
        //alert("hi")
        api.get('MiscellaneousType/GETMiscellaneousList')
            .then((response) => {            
                this.setState({ TypeList: response.data.result.data });
                console.log(this.state.TypeList)
            }).catch(error => { });
    }

    componentDidMount() {
        this.getCommonData();
	}

    ClearAll() {
        this.setState({
            MiscType : "",
            Description : "",
            Active : true,
            
        });
    }

    CheckboxHandle = (e) => {
        this.setState({ Active : !this.state.Active });
    }

    ChangeEvent = (e)=> {
        this.setState({[e.target.name]: e.target.value});
        
        this.setstatevaluedropdownfunction(e.target.name, e.target.value); 
    }

    EditRows = (e) => {
        const mType = e.target.getAttribute("data-param");
        api.get('MiscellaneousType/GETMiscellaneousList?MiscType=' + mType)
            .then((response) => {
                console.log(response.data);
                response.data.result.data.map((data, ind) => (
                    this.setState({ 
                        MiscType : data.miscType,
                        Description : data.description,                        
                        Active : (data.active == "Y" ? true : false),
                        TypeList : this.state.TypeList,
                     })
                ));            
            })
    }

    POST_UD_Master_Type_Data = (e) => {
        if(this.handleValidation()) {
            console.log({ miscType : this.state.MiscType, description : this.state.Description, Active : (this.state.Active == true ? "Y" : "N") });
            api.post("MiscellaneousType/SaveMiscTypeMaster", { miscType : this.state.MiscType, description : this.state.Description, Active : (this.state.Active == true ? "Y" : "N") }).then((response) => {
                console.log(response);
                NotificationManager.success('Added Sucessfully');
                this.ClearAll()
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
       
        if(!fields["MiscType"]) {
          formIsValid = false;
          errors["MiscType"] = "Cannot be empty";
        }        
        if(!fields["Description"]) {
            formIsValid = false;
            errors["Description"] = "Cannot be empty";
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
                <PageTitleBar title="Master Type" match={this.props.match} />
                    
                <div className="row new-form mb-10" id="UDMasterTypeForm">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="form-group">
                            <label> Misc Type </label>
                            <input className="form-control" name="MiscType" id="MiscType" placeholder="Misc Type" value={this.state.MiscType} onChange={this.ChangeEvent} />
                            <span className="error">{this.state.errors["MiscType"]}</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label> Description </label>
                            <input className="form-control" name="Description" id="Description" placeholder="Description" value={this.state.Description} onChange={this.ChangeEvent} />
                            <span className="error">{this.state.errors["Description"]}</span>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                        <div className="form-group">
                            <div className="w-10 align-center pt-25 ch-new float-right mr-50">
                                <FormControlLabel name="Active" control={<Checkbox color="primary" checked={this.state.Active} onChange={this.CheckboxHandle} value = "" />} label="Active" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 pr-0">
                        <div className="form-group mt-15 text-right">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" >
                                <span className="MuiButton-label">
                                    <i className="zmdi zmdi-rotate-left"></i> 
                                    Cancel
                                </span> 
                                <span className="MuiTouchRipple-root"></span>
                            </button>

                            <button onClick={this.POST_UD_Master_Type_Data} className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" >
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
                    <UDMasterTypeList TypeList={this.state.TypeList} EditRow={this.EditRows}></UDMasterTypeList>
                </div>
            </RctCollapsibleCard>
        </div>
        )
    }

}

export default UDMasterType;