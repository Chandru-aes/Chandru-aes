/**
 * Simple Line Icons
 */
import React, { Component, Fragment,useRef } from 'react';
import api from 'Api';
import {
    Button,Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import TextField from '@material-ui/core/TextField';
// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import 'font-awesome/css/font-awesome.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
import { NotificationManager } from 'react-notifications';
import AddNewUserForm from '../../forecast/add-forecasting/ActivityCloneForm';
import QuantityFormClone from '../../forecast/add-forecasting/QuantityCloneForm';
import GuideForm from '../../forecast/add-forecasting/GuideForm';
import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';

/**Editable Grid section**/
import DataGrid, {
    Column,
    Editing,
    Paging,
    Lookup,
    Summary, TotalItem,
    RequiredRule,
    RangeRule, CustomRule,
} from 'devextreme-react/data-grid';
import Select1 from "react-dropdown-select";
import { Validator,StringLengthRule} from 'devextreme-react/validator';
import 'devextreme/dist/css/dx.light.css';

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
        BuyerValue:[],
        BuyerdivisionValue:[],
        forecastinglists:[],
        yearlists:[],
        seasonlists:[],
        fields: {},
        errors: {},

        // QtyBreakUpList:[]
    }
    constructor(props) {
        super(props);
        this.getSubproductType = this.getSubproductType.bind(this);
        this.state = {
            selectTextOnEditStart: true,
            startEditAction: 'click',
            BuyerList:[],
            BuyerDivisionList:[],
            LocationItem:[],
            forecastType:[],
            forecastItem:[],
            QtyBreakUpList:[],
            productTypes:[],
            subproductTypes:[],
            activityList:[],
            forecastinglists:[],
            yearlists:[],
            seasonlists:[],
            fcQtyDetailInsertEntityModel:[],
            fcActivityInsertEntityModel:[],
            saveQtyDetailItems:{},
            saveActivityItems:{},
            deleteQtyDetailItems:{},
            activityName:'',
            fields: {},
            errors: {},
            IsEdit:false,
            tentativeDate: new Date(),
            pcdDate: new Date()
        };


        this.onRowUpdated = this.onRowUpdated.bind(this);
        this.onRowUpdatedActiv= this.onRowUpdatedActiv.bind(this);
        this.onRowRemovingActiv = this.onRowRemovingActiv.bind(this);
        this.onRowRemoving = this.onRowRemoving.bind(this);
    }

    handleChangesingledropdown = name => event => {
        this.setState({ [name]: event.target.value });
    };

    getForecastdetail(ForecastId){
        api.get('ForecastQtyDetailEntity/GetForecastGrid?ForecastID='+ForecastId)
            .then((response) => {

                this.setState({
                    BuyerValue:[{value:response.data.data[0].buyCode,label:response.data.data[0].buyerName}],
                    BuyerdivisionValue:[{value:response.data.data[0].buyDivcode,label:response.data.data[0].buyerDivName}],
                    lpcationItemValue:[{value:response.data.data[0].loccode,label:response.data.data[0].locName}],
                    season:[{value:response.data.data[0].seasonCode,label:response.data.data[0].seasonName}],
                    year:[{value:response.data.data[0].seasonYear,label:response.data.data[0].seasonYear}],
                    forecastItem:[{value:response.data.data[0].fcType,label:response.data.data[0].fcTypeDesc}]
                });

            })
            .catch(error => {})
        this.setState({currentForecastId:ForecastId});
        api.get('ForecastQtyDetailEntity/GetForecastQtyDetails?FCID='+ForecastId)
            .then((response) => {
                this.setState({ QtyBreakUpList: response.data });
            })

        api.get('ForecastActivityEntity/GetForecastActivityList?FID='+ForecastId)
            .then((response) => {
                this.setState({ activityList: response.data });
            })
    }
    deleteForecast(ForecastItem,ForecastId){

        this.refs.deleteConfirmationDialog.open();

        this.setState({ deleteForecastdetail: ForecastItem,DForecastId:ForecastId });
    }
    deleteForecastConfirm(){
        const ForecastItem = this.state.deleteForecastdetail;
        const ForecastId = this.state.DForecastId;
        const deleteForecastHeaderitem={
            "id": ForecastId,
            "forecastNo": ForecastItem.forecastNo,
            "entityID": ForecastItem.entityID,
            "buyCode": ForecastItem.buyCode,
            "buyDivcode": ForecastItem.buyDivcode,
            "loccode": ForecastItem.loccode,
            "seasonCode": ForecastItem.seasonCode,
            "seasonYear": ForecastItem.seasonYear,
            "fCtype": ForecastItem.fCtype,
            "cancel": "Y",
            "createdDt": ForecastItem.createdDt,
            "createdBy": ForecastItem.createdBy,
            "modifyBy": ForecastItem.modifyBy,
            "hostName": ForecastItem.hostName
        }
        api.post('ForecastEntity/SaveForecastQtyDetails',deleteForecastHeaderitem) .then((response) => {
            this.refs.deleteConfirmationDialog.close();
            NotificationManager.success('Deleted Sucessfully');
            if(response.data.status==true){
                api.get('ForecastEntity/GetForecastHeaderList')
                    .then((response) => {
                        this.setState({ forecastinglists: response.data.data });
                    })
            }
            e.cancel=false;
        })
            .catch(error => {
                // error handling
            })
    }
    // get employee payrols
    SaveForecast(type){
        console.log(this.state.IsEdit);
        if((this.state.QtyBreakUpList.data.length===0 && this.state.activityList.data.length===0 && (!this.state.IsEdit))){
            NotificationManager.error('Please Select any Quantity or Activity Items');
        }else{
            const { saveQtyDetailItems, activityName, selectedDate} = this.state;
            const activityPayload = [{
                "id": 0,
                "fcHead_ID": 0,
                "activity": activityName ? activityName : '',
                "dueDt": selectedDate ? selectedDate : '',
                "cancel": "N",
                "createdBy": "1",
                "modifyBy": "1",
                "hostName": "LOCALHOST"
            }];
            if(type==='qty'){
                const payload = Object.assign(saveQtyDetailItems, {forecastActivityEntityModel: activityPayload})
                this.saveForecastDetails(payload)
            }else{
                if(this.state.activityName !=='' && this.state.selectedDate!==''){
                    const saveQtyPayload = [
                        {
                            "id": 0,
                            "fcHead_ID": 0,
                            "productType": "string",
                            "subProductType": "string",
                            "qty": 0,
                            "avgSAM": 0,
                            "pcd": "2021-11-02T17:05:04.667Z",
                            "exfacDt": "2021-11-02T17:05:04.667Z",
                            "confirmDt": "2021-11-02T17:05:04.667Z",
                            "cancel": "N",
                            "createdBy": "string",
                            "modifyBy": "string",
                            "hostName": "string"
                        }
                    ]
                    const saveActivityItems = {
                        "hid":0,
                        "entityID": "st",
                        "buyCode": this.state.BuyerDivisionList[0].buyerCode,
                        "buyDivcode": this.state.BuyerdivisionValue[0].value,
                        "loccode": this.state.location[0].value,
                        "seasonCode": this.state.season[0].value,
                        "seasonYear": this.state.year[0].value,
                        "fCtype": this.state.forecastItem[0].value,
                        "createdBy": "1",
                        "modifyBy": "1",
                        "cancel": "N",
                        "hostName": "admin",
                        "fcQtyDetailInsertEntityModel": saveQtyDetailItems.fcQtyDetailInsertEntityModel.length > 0
                        && saveQtyDetailItems.fcQtyDetailInsertEntityModel[0].quantity !== 0 ? saveQtyDetailItems.fcQtyDetailInsertEntityModel
                            : saveQtyPayload
                    }
                    const payload = Object.assign(saveActivityItems, {forecastActivityEntityModel : activityPayload})
                    this.setState({
                        saveActivityItems: payload
                    })
                    this.saveForecastDetails(payload)
                }
            }
        }
    }

    saveForecastDetails = (payload) => {
        api.post('ForecastQtyDetailEntity/SaveForecastQtyDetails', payload) .then((response) => {
            NotificationManager.success('Added Sucessfully');
            let fcQtyId = response.data.data.data.fcQtyDetailInsertEntityModel[0].fcHead_ID;
            api.get('ForecastActivityEntity/GetForecastActivityList?FID='+fcQtyId)
                .then((response) => {
                    this.setState({ activityList: response.data });
                })
            api.get('ForecastEntity/GetForecastHeaderList')
                .then((response) => {
                    this.setState({ forecastinglists: response.data.data });
                })
        })
            .catch(error => {
                // error handling
            })
    }
    onRowRemovingActiv(e){
        /*Stop removing the data in a row*/
        e.cancel=true;
        /**/

        const tdeleteQtyDetailItems = {
            "hid":e.data.fcHead_ID,
            "entityID": "st",
            "buyCode": e.data.buyCode,
            "buyDivcode": e.data.buyDivcode,
            "loccode": e.data.loccode,
            "seasonCode": e.data.seasonCode,
            "seasonYear": e.data.seasonYear,
            "fCtype":"SEASONAL",
            "createdBy": e.data.createdBy,
            "modifyBy": e.data.modifyBy,
            "cancel": "Y",
            "hostName": e.data.hostName,
            "fcQtyDetailInsertEntityModel":[{
                "id": e.data.id,
                "fcHead_ID":  e.data.fcHead_ID,
                "productType": "string",
                "subProductType": "string",
                "qty": 0,
                "avgSAM": 0,
                "pcd": "2021-11-02T19:34:53.517Z",
                "exfacDt": "2021-11-02T19:34:53.517Z",
                "confirmDt": "2021-11-02T19:34:53.517Z",
                "cancel": "N",
                "createdBy": "string",
                "modifyBy": "string",
                "hostName": "string"
            }],
            "forecastActivityEntityModel": [
                {
                    "id": e.data.id,
                    "fcHead_ID": e.data.fcHead_ID,
                    "activity": e.data.activity,
                    "dueDt": "2021-11-02T19:34:53.517Z",
                    "cancel": "Y",
                    "createdBy": "1",
                    "modifyBy": "1",
                    "hostName": "LocalHost"
                }
            ]
        }
        this.deleteForCastDetails(tdeleteQtyDetailItems);
    }

    deleteForCastDetails = (payload) => {
        api.post('ForecastQtyDetailEntity/SaveForecastQtyDetails',tdeleteQtyDetailItems) .then((response) => {
            NotificationManager.success('Deleted Sucessfully');
            if(response.data.data.status==true){
                /*
                 api.get('ForecastActivityEntity/GetForecastActivityList')
                 .then((response) => {
                     this.setState({ activityList: response.data });
                 })
                 */
                api.get('ForecastActivityEntity/GetForecastActivityList?FID='+this.state.currentForecastId)
                    .then((response) => {
                        this.setState({ activityList: response.data });
                    })

                api.get('ForecastEntity/GetForecastHeaderList')
                    .then((response) => {
                        this.setState({ forecastinglists: response.data.data });
                    })
            }
            e.cancel=false;
        })
            .catch(error => {
                // error handling
            })
    }

    onRowRemoving(e){
        /*Stop removing the data in a row*/
        //e.cancel=true;
        /**/
        const tdeleteQtyDetailItems = {
            "hid":e.data.fcHead_ID,
            "entityID": "st",
            "buyCode": e.data.buyCode,
            "buyDivcode": e.data.buyDivcode,
            "loccode": e.data.loccode,
            "seasonCode": e.data.seasonCode,
            "seasonYear": e.data.seasonYear,
            "fCtype":e.data.fCtype,
            "createdBy": e.data.hCreatedBy,
            "modifyBy": e.data.hModifyBy,
            "cancel": "Y",
            "hostName": e.data.hostName,
            "fcQtyDetailInsertEntityModel":[{
                "id": e.data.id,
                "fcHead_ID": e.data.fcHead_ID,
                "productType":  e.data.productType,
                "subProductType":  e.data.subProductType,
                "qty":  e.data.qty,
                "avgSAM":  e.data.avgSAM,
                "pcd":  e.data.pcd,
                "exfacDt":  e.data.exfacDt,
                "confirmDt":  e.data.exfacDt,
                "cancel": "Y",
                "createdBy":  e.data.hCreatedBy,
                "modifyBy":  e.data.hModifyBy,
                "hostName": "LOCALHOST"
            }],
            "forecastActivityEntityModel": [
                {
                    "id": 0,
                    "fcHead_ID": 0,
                    "activity": "string",
                    "dueDt": "2021-11-02T06:23:14.481Z",
                    "cancel": "N",
                    "createdBy": "string",
                    "modifyBy": "string",
                    "hostName": "string"
                }
            ]
        }
        this.deleteForCastDetails(tdeleteQtyDetailItems);

    }
    onRowUpdatedActiv(e){
        const UpdatedData = e.data;

        const {fcActivityInsertEntityModel} = this.state;

        this.setState({ IsEdit: true });
        if(fcActivityInsertEntityModel.length>0){
            const index = fcActivityInsertEntityModel.findIndex(item=>item.id === e.data.id);
            fcActivityInsertEntityModel.find(function(el,index1) {

                if(el.id == e.data.id){

                    fcActivityInsertEntityModel.splice(index, 1);
                    fcActivityInsertEntityModel[index]['cancel']='N';
                    fcActivityInsertEntityModel[index]['fcHead_ID']=(e.data.fcHead_ID)?e.data.fcHead_ID:0;
                    fcActivityInsertEntityModel[index]['createdBy']='Admin';
                    fcActivityInsertEntityModel[index]['modifyBy']='Admin';
                    fcActivityInsertEntityModel[index]['hostName']='Localhost';
                    fcActivityInsertEntityModel.push(UpdatedData);

                }else{
                    fcActivityInsertEntityModel[index]['cancel']='N';
                    fcActivityInsertEntityModel[index]['id']=(e.data.id>0)?e.data.id:0;
                    fcActivityInsertEntityModel[index]['fcHead_ID']=(e.data.fcHead_ID)?e.data.fcHead_ID:0;
                    fcActivityInsertEntityModel[index]['createdBy']='Admin';
                    fcActivityInsertEntityModel[index]['modifyBy']='Admin';
                    fcActivityInsertEntityModel[index]['hostName']='Localhost';
                    fcActivityInsertEntityModel.push(UpdatedData);
                }
            });
        }else{
            fcActivityInsertEntityModel.push(UpdatedData);
            fcActivityInsertEntityModel[0]['id']=(e.data.id>0)?e.data.id:0;;
            fcActivityInsertEntityModel[0]['fcHead_ID']=(e.data.fcHead_ID)?e.data.fcHead_ID:0;
            fcActivityInsertEntityModel[0]['createdBy']='Admin';
            fcActivityInsertEntityModel[0]['modifyBy']='Admin';
            fcActivityInsertEntityModel[0]['hostName']='Localhost';
            fcActivityInsertEntityModel[0]['cancel']='N';
        }

        const key = 'id';
        const arrayUniqueByKey = [...new Map(fcActivityInsertEntityModel.map(item =>
            [item[key], item])).values()];

        this.state.saveActivityItems = {
            "hid":e.data.fcHead_ID,
            "entityID": "st",
            "buyCode": (this.state.BuyerDivisionList.length>0)?this.state.BuyerDivisionList[0].buyerCode:e.data.buyCode,
            "buyDivcode": (this.state.BuyerdivisionValue)?this.state.BuyerdivisionValue[0].value:e.data.buyDivcode,
            "loccode": (this.state.location)?this.state.location[0].value:e.data.loccode,
            "seasonCode": (this.state.season)?this.state.season[0].value:e.data.seasonCode,
            "seasonYear": (this.state.year)?this.state.year[0].value:e.data.seasonYear,
            "fCtype": (this.state.forecastItem.length>0)?this.state.forecastItem[0].value:e.data.fCtype,
            //"fCtype": "SEASONAL",
            "createdBy": "1",
            "modifyBy": "1",
            "cancel": "N",
            "hostName": "admin",
            "fcQtyDetailInsertEntityModel": [
                {
                    "id": 0,
                    "fcHead_ID": 0,
                    "productType": "string",
                    "subProductType": "string",
                    "qty": 0,
                    "avgSAM": 0,
                    "pcd": "2021-11-02T17:05:04.667Z",
                    "exfacDt": "2021-11-02T17:05:04.667Z",
                    "confirmDt": "2021-11-02T17:05:04.667Z",
                    "cancel": "N",
                    "createdBy": "string",
                    "modifyBy": "string",
                    "hostName": "string"
                }
            ],
            "forecastActivityEntityModel":arrayUniqueByKey
        }
    }
    onRowUpdated(e) {
        const UpdatedData = e.data;
        this.setState({ IsEdit: true });
        console.log(this.state.IsEdit)
        const {fcQtyDetailInsertEntityModel} = this.state;
        UpdatedData.subProductType = e.data.subProductType;
        UpdatedData.qty = 0;
        if(!e.data.id){
            UpdatedData.cancel = "N";
            UpdatedData.hostName = "Local Host";
            UpdatedData.createdBy="1";
            UpdatedData.modifyBy="1";
            UpdatedData.id= 0;
            UpdatedData.fcHead_ID= 0;
        }

        if(fcQtyDetailInsertEntityModel.length>0){
            fcQtyDetailInsertEntityModel.find(function(el,index1) {

                if(el.id == e.data.id){
                    const index = fcQtyDetailInsertEntityModel.findIndex(item=>item.id === e.data.id);
                    fcQtyDetailInsertEntityModel.splice(index, 1);
                    fcQtyDetailInsertEntityModel.push(UpdatedData);

                }else{
                    fcQtyDetailInsertEntityModel.push(UpdatedData);
                }
            });
        }else{
            fcQtyDetailInsertEntityModel.push(UpdatedData);
        }

        const key = 'id';
        const arrayUniqueByKey = [...new Map(fcQtyDetailInsertEntityModel.map(item =>
            [item[key], item])).values()];

        const saveQtyDetailItems = {
            "hid":(e.data.fcHead_ID)?e.data.fcHead_ID:0,
            "entityID": "st",
            "buyCode": (this.state.BuyerDivisionList.length>0)?this.state.BuyerDivisionList[0].buyerCode:e.data.buyCode,
            "buyDivcode": (this.state.BuyerdivisionValue)?this.state.BuyerdivisionValue[0].value:e.data.buyDivcode,
            "loccode": (this.state.location)?this.state.location[0].value:e.data.loccode,
            "seasonCode": (this.state.season)?this.state.season[0].value:e.data.seasonCode,
            "seasonYear": (this.state.year)?this.state.year[0].value:e.data.seasonYear,
            "fCtype": (this.state.forecastItem.length>0)?this.state.forecastItem[0].value:e.data.fCtype,
            "createdBy": "1",
            "modifyBy": "1",
            "cancel": "N",
            "hostName": "admin",
            "fcQtyDetailInsertEntityModel":arrayUniqueByKey,
            "forecastActivityEntityModel": [
                {
                    "id": 0,
                    "fcHead_ID": 0,
                    "activity": "string",
                    "dueDt": "2021-11-02T06:23:14.481Z",
                    "cancel": "N",
                    "createdBy": "string",
                    "modifyBy": "string",
                    "hostName": "string"
                }
            ]
        }

        this.setState({saveQtyDetailItems})
    }
    getCommonData() {

        api.get('Buyer/GetBuyerDropDown')
            .then((response) => {
                this.setState({ BuyerList: response.data.result.data });
            })
            .catch(error => {})

        api.get('Location/GetLocationDropDown')
            .then((response) => {
                this.setState({ LocationItem: response.data.result.data });
            })

        api.get('Miscellaneous/GetMiscellaneousList?MType=FCTYPE')
            .then((response) => {
                this.setState({ forecastType: response.data.result.data });
            })
        this.state.QtyBreakUpList.data =[];
        this.state.activityList.data =[];
        /*
        api.get('ForecastQtyDetailEntity/GetForecastQtyDetails')
        .then((response) => {
            this.setState({ QtyBreakUpList: response.data });
        })
        */
        /*
         api.get('ForecastActivityEntity/GetForecastActivityList')
         .then((response) => {
             this.setState({ activityList: response.data });
         })
         */
        api.get('StyleDivision/GetStyleDivisionList')
            .then((response) => {
                this.setState({ subproductTypes: response.data.result.data });
            })
        api.get('ProductType/GetProductTypeDropDown')
            .then((response) => {
                this.setState({ productTypes: response.data.result.data });
            })

        api.get('ForecastEntity/GetForecastHeaderList')
            .then((response) => {
                this.setState({ forecastinglists: response.data.data });
            })

        api.get('Miscellaneous/GetMiscellaneousList?MType=year')
            .then((response) => {

                this.setState({ yearlists: response.data.result.data });
            })

        api.get('SeasonMaster/GetSeasonList')
            .then((response) => {

                this.setState({ seasonlists: response.data.result.data });
            })

    }
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
    getSubproductType(options){
        return {
            store: this.state.subproductTypes,
            filter: options.data ? ['productType', '=', options.data.productType] : null,
        };

    }
    opnAddNewUserModal(e) {
        e.preventDefault();
        this.setState({ addNewUserModal: true });
    }


    onAddUpdateUserModalClose() {
        this.setState({ addNewUserModal: false,addQuantityModal:false,guideformmodal:false, editUser: null })
    }

    componentDidMount() {
        this.getCommonData();
    }

    handleChangeIndex(index) {
        this.setState({ activeIndex: index });
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: moment(date).format('YYYY-MM-DD') });
    };
    handleChange(event, value) {
        this.setState({ activeIndex: value });
    }

    setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
        fields[name] = event[0].value;
        this.setState({fields});

        this.setState({ [name]: event });
    };
    contactSubmit(e,type){

        //if(Object.keys(this.state.saveActivityItems).length === 0){
        e.preventDefault();
        if(this.handleValidation()){
            this.SaveForecast(type);
        }
        //   }
        //   else{
        //     this.SaveForecast(type);
        //   }

    }
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
        if(!fields["location"]){
            formIsValid = false;
            errors["location"] = "Cannot be empty";
        }
        if(!fields["forecastItem"]){
            formIsValid = false;
            errors["forecastItem"] = "Cannot be empty";
        }
        if(!fields["season"]){
            formIsValid = false;
            errors["season"] = "Cannot be empty";
        }
        if(!fields["year"]){
            formIsValid = false;
            errors["year"] = "Cannot be empty";
        }


        this.setState({errors: errors});
        return formIsValid;
    }

    customizeText (e) {
        return "Total: " + e.value;
    };

    dateValidation = (e, type='') => {
        if (e.value && type === 'pcd'){
            this.setState({
                pcdDate: e.value
            })
        }
        if (e.value && type === 'tentative'){
            this.setState({
                tentativeDate: e.value
            })
        }
        return true
    }

    render() {

        const { selectedDate } = this.state;
        const BuyerOptions =[];
        for (const item of this.state.BuyerList) {
            BuyerOptions.push({value:item.buyerCode,label:item.buyerCode+'-'+item.buyerName});
        }

        const locationItemOptions = [];
        for (const item of this.state.LocationItem) {
            locationItemOptions.push({value:item.locCode,label:item.locName});
        }

        const ForecastTypeItemOptions = [];
        for (const item of this.state.forecastType) {
            ForecastTypeItemOptions.push({value:item.code,label:item.codeDesc});
        }


        const BuyerDivisionOptions =[];
        for (const item of this.state.BuyerDivisionList) {
            BuyerDivisionOptions.push({value:item.divisionCode,label:item.divisionCode+'-'+item.divisionName});
        }

        const yearoptions = [];
        for (const item of this.state.yearlists) {
            yearoptions.push({value:item.code,label:item.codeDesc});
        }

        const seasonoptions = [];
        for (const item of this.state.seasonlists) {
            seasonoptions.push({value:item.seasonCode,label:item.seasonName});
        }


        // const executeScroll = () => scrollToRef(buyername)
        return (
            <div className="formelements-wrapper main-layout-class">
                {/* <PageTitleBar title={"Menu Rights<IntlMessages id="sidebar.simpleform" />} match={this.props.match} /> */}
                <PageTitleBar title="Menu Rights" match={this.props.match} />
                <Accordion>
                    <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"/>}>
                        <div className="acc_title_font">
                            <Typography>Add Forecasting</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>

                        <div className="col-sm-12 col-md-12 col-xl-12 p-0">

                            <RctCollapsibleCard heading="">
                                <form name="contactform" className="contactform">
                                    <div className="row new-form mb-10">
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
                                                    <Select1  dropdownPosition="auto"
                                                        //   multi
                                                              createNewLabel="Location"
                                                              options={locationItemOptions}
                                                              onChange={this.setstatevaluedropdownfunction('location')}
                                                        //onChange={values => this.setState({ location:values })}
                                                              placeholder="Location"
                                                              values={this.state.lpcationItemValue}
                                                    />
                                                    <span className="error">{this.state.errors["location"]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1  dropdownPosition="auto"
                                                        //   multi
                                                              createNewLabel="Forecast Type"
                                                              options={ForecastTypeItemOptions}
                                                              onChange={this.setstatevaluedropdownfunction('forecastItem')}
                                                        //onChange={values => this.setState({ forecastItem:values })}
                                                              placeholder="Forecast Type"
                                                              values={this.state.forecastItem}
                                                    />
                                                    <span className="error">{this.state.errors["forecastItem"]}</span>
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
                                                    <DataGrid dataSource={this.state.QtyBreakUpList.data} keyExpr="" showBorders={true}
                                                              onRowUpdated={this.onRowUpdated}  onRowRemoving={this.onRowRemoving} onRowInserting={this.onRowUpdated}>
                                                        <Paging enabled={false} />
                                                        <Editing mode="cell" allowUpdating={true}  allowAdding={true}  allowDeleting={true}
                                                                 selectTextOnEditStart={this.state.selectTextOnEditStart}
                                                                 startEditAction={this.state.startEditAction} useIcons={true}/>
                                                        <Column type="buttons" width={110} caption="Actions">
                                                            <Button name="edit" />
                                                            <Button name="delete" />
                                                            <Button name="delete" hint="Clone" icon="repeat"  />
                                                        </Column>
                                                        <Column dataField="quantity" width={110} caption="Quantity">
                                                            <RequiredRule />
                                                            <StringLengthRule max={7} message="Quantity should not more than 7 Digits"/>
                                                        </Column>
                                                        <Column dataField="productType" caption="Product type" >

                                                            <Lookup dataSource={this.state.productTypes} valueExpr="productType" displayExpr="productType"/>
                                                            <RequiredRule />
                                                        </Column>
                                                        <Column dataField="subProductType" caption="Sub-Product type" >
                                                            {/* */}
                                                            <Lookup dataSource={this.getSubproductType} valueExpr="subProductType" displayExpr="subProductType" />
                                                            <RequiredRule />
                                                        </Column>
                                                        <Column dataField="avgSAM" width={110} caption="AVG SAM">
                                                            <RequiredRule />
                                                        </Column>
                                                        <Column dataField="pcd" dataType="date" >
                                                            <RangeRule message="Past dates cannot be allowed" min={new Date()} />
                                                            <CustomRule
                                                                type="custom"
                                                                validationCallback={(e) => this.dateValidation(e, 'pcd')}
                                                            />
                                                            <RequiredRule />
                                                        </Column>
                                                        <Column dataField="exfacDt" caption="Tent Del" dataType="date" >
                                                            <RangeRule message="Past dates cannot be allowed" min={ this.state.pcdDate} />
                                                            <CustomRule
                                                                type="custom"
                                                                validationCallback={(e) => this.dateValidation(e, 'tentative')}
                                                            />
                                                            <RequiredRule />
                                                        </Column>
                                                        <Column dataField="confirmDt" caption="Conf Due" dataType="date" >
                                                            <RangeRule message="Past dates cannot be allowed" min={new Date()} />
                                                            <RequiredRule />
                                                        </Column>
                                                        <Column dataField="capacity" caption="Available capacity" allowEditing={false}>

                                                        </Column>

                                                        <Summary>
                                                            <TotalItem column="Quantity" summaryType="sum"  customizeText={this.customizeText}  valueFormat="#0.00" />
                                                        </Summary>

                                                    </DataGrid>
                                                    <div className="w-50 float-right mt-20">
                                                        <div className="w-25 float-left">
                                                            <label className="mt-5">Rows per page: </label>
                                                        </div>
                                                        <div className="w-15 float-left">
                                                            <select className="form-control">
                                                                <option>10</option>
                                                                <option>20</option>
                                                                <option>30</option>
                                                                <option>40</option>
                                                            </select>
                                                        </div>
                                                        <div className="w-30 float-left pl-30">
                                                            <label className="mt-5">1-10 of 50</label>
                                                        </div>
                                                        <div className="w-30 float-left">
                                                            <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" ><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                                                            <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" ><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row tb-pro mt-10">
                                                    <div className="w-100">
                                                        <div className="float-right">
                                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button"   onClick={(e) => this.contactSubmit(e,'qty')}><span className="MuiButton-label">Save <i className="zmdi zmdi-save"/></span><span className="MuiTouchRipple-root"/></button>
                                                            {/* <button className="btn btn-lg pro" id="submit" value="Submit" onClick= {this.contactSubmit.bind(this)} >Send Message</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContainer>
                                        <TabContainer>
                                            <div className="row mt-15 new-form">
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <TextField id="ActivityName" fullWidth label="Activity Name" placeholder="Activity Name"  value={this.state.activityName}  onChange={this.handleChangesingledropdown('activityName')}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <Fragment>
                                                            <div className="rct-picker">
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardDatePicker
                                                                        disableToolbar
                                                                        disablePast={true}
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
                                                {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                        <div className="form-group mt-15">                                       
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"  onClick={(e) => this.opnAddNewUserModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button>
                                        </div>
                                    </div> */}
                                            </div>
                                            <div className="table-responsive">
                                                <DataGrid dataSource={this.state.activityList.data} keyExpr="id" showBorders={true} onRowUpdated={ this.onRowUpdatedActiv}  onRowRemoving={this.onRowRemovingActiv} onRowInserting={this.onRowUpdatedActiv}>
                                                    <Paging enabled={false} />
                                                    <Editing mode="cell" allowUpdating={true}  allowAdding={true}  allowDeleting={true}
                                                             selectTextOnEditStart={this.state.selectTextOnEditStart}
                                                             startEditAction={this.state.startEditAction} useIcons={true}/>
                                                    <Column type="buttons" width={110} caption="Actions">
                                                        <Button name="edit" />
                                                        <Button name="delete" />
                                                        <Button hint="Clone" icon="repeat"  />
                                                    </Column>
                                                    <Column dataField="activity" caption="Activity"  ><RequiredRule /></Column>
                                                    <Column dataField="dueDt" dataType="date" ><RequiredRule /></Column>

                                                </DataGrid>
                                            </div>
                                            <div className="tb-pro mt-10">
                                                <div className="w-100">
                                                    <div className="float-right">
                                                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button"  onClick={(e) => this.contactSubmit(e,'activity')}><span className="MuiButton-label">Save <i className="zmdi zmdi-save"/></span><span className="MuiTouchRipple-root"/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContainer>
                                    </SwipeableViews>
                                </form>
                                <DeleteConfirmationDialog
                                    ref="deleteConfirmationDialog"
                                    title="Are You Sure Want To Delete?"
                                    message="Are You Sure Want To Delete Permanently."
                                    onConfirm={() => this.deleteForecastConfirm()}
                                />
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
                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"/>}>
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
                                        <th className="text-center w-10">Forecast Id</th>
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
                                        {this.state.forecastinglists.map((n,index) => {
                                            return (
                                                <tr>
                                                    <td className="text-center">
                                                        {/* <button className="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span className="MuiIconButton-label"><i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button> */}


                                                        <button className="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete" onClick={(e) => this.getForecastdetail(n.id)}><span className="MuiIconButton-label"><i className="zmdi zmdi-edit"></i></span><span className="MuiTouchRipple-root"></span></button>
                                                        <button className="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Delete" onClick={(e) => this.deleteForecast(n,n.id)}><span className="MuiIconButton-label"><i className="zmdi zmdi-delete"></i></span><span className="MuiTouchRipple-root"></span></button>

                                                        {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button> */}
                                                    </td>
                                                    <td className="text-center"> {n.forecastNo}</td>
                                                    <td className="text-center"> {n.buyCode}</td>
                                                    <td className="text-center">{n.buyDivcode}</td>
                                                    <td>{n.seasonCode}</td>
                                                    <td>{n.seasonYear}</td>
                                                    <td>{n.loccode}</td>
                                                    <td>{n.loccode}</td>
                                                    <td>{n.loccode}</td>
                                                    <td>{n.loccode}</td>
                                                    <td>{n.loccode}</td>
                                                </tr>
                                            );
                                        })}
                                        </tbody>
                                    </table>
                                    <div className="w-50 float-right">
                                        <div className="w-25 float-left">
                                            <label className="mt-5">Rows per page: </label>
                                        </div>
                                        <div className="w-15 float-left">
                                            <select className="form-control">
                                                <option>10</option>
                                                <option>20</option>
                                                <option>30</option>
                                                <option>40</option>
                                            </select>
                                        </div>
                                        <div className="w-30 float-left pl-30">
                                            <label className="mt-5">1-10 of 50</label>
                                        </div>
                                        <div className="w-30 float-left">
                                            <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" ><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                                            <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
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
export default PreprodcutionTable;
 
 