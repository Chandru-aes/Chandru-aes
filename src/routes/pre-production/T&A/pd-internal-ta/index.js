/**
 * Basic Table
 */
import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    Media, Badge, Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
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

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select1 from "react-dropdown-select";

import { AccordionInput } from "../../../../helpers/helpers";

// const styles = {
// 	checked: {
// 		color: pink[500],
// 	},

// };
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const $ = require('jquery');
function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}
class PdtinternalElement extends Component {
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
    }
    state = {
        hid:0,
        activeIndex: 0,
        open: false,
        cloneopen: false,
        ropen: false,
        tpopen: false,
        selectedDate: moment(),
        addNewUserModal: false,
        checkedA: true,
        buyerlists: [],
        buyerdivlists: [],
        yearlists: [],
        reqtypelists: [],
        reqtype: [],

        bodygrainlists: [],
        bodygrain: [],

        joblists: [],
        job: [],

        addoninfolists: [],
        addoninfo: [],
        prepseqlists: [],
        prepseq: [],

        stylenolists: [],
        styleno: [],

        orderno: [],
        activity:"",
        subactivity:"",

        materialtypelists: [],
        materialtype: [],
        sample_materialtype: [],

        sampletypelists: [],
        sampletype: [],

        valueaddlists: [],
        valueadd: [],

        valueaddtypelists: [],
        valueaddtype: [],

        markerforlists: [],
        markerfor: [],


        locationlists: [],
        sizelists: [],
        size: [],
        sample_size: [],
        location: [],
        FashionGRP: [],
        buyer: [],
        buyerdiv: [],
        year: [],

        stagedetailslists: [],
        fitlists: [],
        fabtypelists: [],
        stagedetails: [],
        stage: [],
        fit: [],
        fabtype: [],
        seasonlists: [],
        season: [],
        // styleno:'',
        refstyleno: '',
        
        designStyleNo: '',
        desc: '',
        fabdesc: '',
        fields: {},
        errors: {},

        samaddmoredata: [],
        optionType: '',
        valueaddaddmoredata: [],
        markeraddmoredata: [],
        sampleaddmoredata: [],
        valueaddcolor: '',
        // valueadd:[],
        // valueaddtype:[],
        color: '',
        noofpieces: 0,
        purposelists: [],
        purpose: [],
        costingwarp: '',
        costingweft: '',
        costingsize: [],
        samplesize: [],
        samplewarp: '',
        sampleweft: '',
        ref_version: '',
        ref_styleno: '',

        sample_color: '',
        sample_desc: '',
        sample_pieces: '',
        sample_placement: '',

        marker_bodygrain: '',
        marker_changesin: '',
        marker_color: '',
        marker_desc: '',
        marker_pieces: '',
        marker_placement: '',
        marker_ref_version: '',
        marker_repeat: '',
        marker_shrinkage: '',
        marker_width: '',

        baseStyleno: '', fabricDesc: '', fabricType: '',
        reference_version: '',
        swid: 0,
        ordercategorylists: [],
        filterordercategory: [],
        filterbuyer: [],
        filterbuyerdiv: [],
        overalllists: [],
        edit_add: false,
        filterbuyerdivlists: [],
        filterstylenolists: [],
        filterstyleno: [],

        scheduled_date: moment(new Date()).format('YYYY-MM-DD'),
        revisied_date: moment(new Date()).format('YYYY-MM-DD'),
        confdate: moment(new Date()).format('YYYY-MM-DD'),
        days:0,
        versionno: '',
        rmrk:'',
        skipflag:"N",
        
        actstagelists: [],
    }
    onAddUpdateUserModalClose() {
        this.setState({ addNewUserModal: false, editUser: null })
    }

    opnAddNewUserModal(e) {
        e.preventDefault();
        this.setState({ addNewUserModal: true });
    }
    componentDidMount() {

        document.body.classList.add('med-pop-up-h');
        this.getfilldropdownlists();

    }


    getfilldropdownlists() {

        api.get('Buyer/GetBuyerDropDown')
            .then((response) => {

                this.setState({ buyerlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })


        // api.get('BuyerDivision/GetBuyerDivisionList')
        // .then((response) => {

        //     this.setState({ buyerdivlists: response.data.result.data });
        // })
        // .catch(error => {
        //     // error handling
        // })

        // api.get('StyleHeader/GetStyleGridList')
        // .then((response) => {

        //     this.setState({ stylenolists: response.data.data });
        // })
        // .catch(error => {
        //     // error handling
        // })



        api.get('Miscellaneous/GetMiscellaneousList?MType=ORDSTAGE')
            .then((response) => {

                this.setState({ stagedetailslists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })


        api.get('Miscellaneous/GetMiscellaneousList?MType=REQTYPE')
            .then((response) => {

                this.setState({ reqtypelists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })


        api.get('Miscellaneous/GetMiscellaneousList?MType=GRAIN')
            .then((response) => {

                this.setState({ bodygrainlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })


        api.get('Miscellaneous/GetMiscellaneousList?MType=JOB')
            .then((response) => {

                this.setState({ joblists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('Miscellaneous/GetMiscellaneousList?MType=ADDONINFO')
            .then((response) => {

                this.setState({ addoninfolists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('Miscellaneous/GetMiscellaneousList?MType=PREPSEQ')
            .then((response) => {

                this.setState({ prepseqlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('Miscellaneous/GetMiscellaneousList?MType=VALUEADD')
            .then((response) => {

                this.setState({ valueaddlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })


        api.get('Miscellaneous/GetMiscellaneousList?MType=SAMPLETYPE')
            .then((response) => {

                this.setState({ sampletypelists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('Materialtype/GetItemTypeDropDown')
            .then((response) => {

                this.setState({ materialtypelists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })


        api.get('Miscellaneous/GetMiscellaneousList?MType=MARKPUR')
            .then((response) => {

                this.setState({ markerforlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('Miscellaneous/GetMiscellaneousList?MType=fit')
            .then((response) => {

                this.setState({ fitlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('Miscellaneous/GetMiscellaneousList?MType=fabtype')
            .then((response) => {

                this.setState({ fabtypelists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('Miscellaneous/GetMiscellaneousList?MType=ORDCATE')
            .then((response) => {

                this.setState({ ordercategorylists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })


        api.get('Location/GetLocationList')
            .then((response) => {

                this.setState({ locationlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('SeasonMaster/GetSeasonDropDown')
            .then((response) => {

                this.setState({ seasonlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })


        api.get('Size/GetSizeList')
            .then((response) => {

                this.setState({ sizelists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })






        api.get('Miscellaneous/GetMiscellaneousList?MType=year')
            .then((response) => {

                this.setState({ yearlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        api.get('Purpose/GetPurposeDropDown')
            .then((response) => {

                this.setState({ purposelists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })




    }

    setstatevaluefunction = name => event => {

        this.setState({ [name]: event.target.value });

        if (name == "days") {
            if (!/^[0-9]+$/.test(event.target.value)) {
                if (event.target.value == "" || event.target.value == 0) {

                } else {
                    NotificationManager.error('Please only enter numeric characters (Allowed input:0-9)');
                }

                this.setState({ [name]: 0 });
            } else {
                this.setState({ [name]: event.target.value });
            }

        }

    };



    setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
        if (event.length != 0) {
            fields[name] = event[0].value;
            this.setState({ fields });
        } else {

            fields[name] = '';
            this.setState({ fields });
        }

        this.setState({ [name]: event });

        // if(name=="styleno"){
        //     setTimeout(() => {
        //         this.stylenochange();
        //     }, 200);
        // }

        if(name=="buyer" || name=="buyerdiv" || name=="ordercategory"){
            setTimeout(() => {
                this.getActivitylist();
            }, 200);
        }


        // if(name=="buyer" || name=="buyerdiv" || name=="year" || name=="season"){
        //     setTimeout(() => {
        //         this.getstyleno();
        //     }, 200);
        // }

        if (name == "buyer" || name == "buyerdiv" || name == "year" || name == "season") {
            setTimeout(() => {
                this.getstyleno();
            }, 200);
        }

        if (name == "filterbuyer" || name == "filterbuyerdiv" || name == "filterordercategory") {
            setTimeout(() => {
                this.getfilterstyleno();
            }, 200);
        }

    };

    getstyleno() {

        if (this.state.buyer.length > 0 && this.state.buyerdiv.length > 0 && this.state.season.length > 0 && this.state.year.length > 0) {
            this.setState({ stylenolists: [], styleno: [], });
            api.get('TNAMaster/GetStyleForTNABuyer?BuyerDiv=' + this.state.buyerdiv[0].value + '&season=' + this.state.season[0].value + '&year=' + this.state.year[0].value)
                .then((response) => {
                    let datas = response.data.data;
                    this.setState({ stylenolists: datas });
                })
                .catch(error => {
                    // error handling
                })
        }
    }

    getActivitylist() {
        this.setState({ actstagelists: [] });
        if (this.state.buyer.length > 0 && this.state.buyerdiv.length > 0 && this.state.ordercategory.length > 0) {

            // api.get('TNAMaster/GetExistChkForTNABuyer?Buyer='+this.state.buyer[0].value)
            api.get('TNAMaster/GetExistChkForTNAInternalOCat?Buyer=' + this.state.buyer[0].value + '&BuyerDiv=' + this.state.buyerdiv[0].value+'&OCat=' + this.state.ordercategory[0].value)
                .then((response) => {
                    let datas = response.data.data;
                    if (response.data.messageCode == "200") {

                        this.setState({ actstagelists: datas });
                    } else {
                        this.setState({ actstagelists: datas });
                        NotificationManager.error(response.data.message);
                    }

                })
                .catch(error => {
                    // error handling
                })
        }
    }

    getalldata() {
        this.setState({ overalllists: [] });
        if (this.state.filterbuyer.length > 0 && this.state.filterbuyerdiv.length > 0 && this.state.filterordercategory.length > 0 && this.state.filterstyleno.length > 0) {

            api.get('TNAMaster/GetInternalTNAList?Buyer=' + this.state.filterbuyer[0].value + '&BuyerDiv=' + this.state.filterbuyerdiv[0].value + '&Ocategory=' + this.state.filterordercategory[0].value + '&Style=' + this.state.filterstyleno[0].value)
                .then((response) => {
                    let datas = response.data.data;
                    this.setState({ overalllists: datas });
                })
                .catch(error => {
                    // error handling
                })
        } else {
            NotificationManager.error('All fields are required');
        }
    }


    getfilterstyleno() {

        if (this.state.filterbuyer.length > 0 && this.state.filterbuyerdiv.length > 0 && this.state.filterordercategory.length > 0) {
            this.setState({ filterstyleno: [], filterstylenolists: [], });
            api.get('TNAMaster/GetStyleForBuyer?Buyer=' + this.state.filterbuyer[0].value + '&BuyerDivison=' + this.state.filterbuyerdiv[0].value)
                .then((response) => {
                    let datas = response.data.data;
                    this.setState({ filterstylenolists: datas });
                })
                .catch(error => {
                    // error handling
                })
        }
    }

    stylenochange() {

        if (this.state.styleno.length > 0) {
            this.setState({ baseStyleno: '', fabricDesc: '', fabricType: '' });
            api.get('StyleHeader/GetStyleHeaderList?SID=' + this.state.styleno[0].value)
                .then((response) => {
                    let datas = response.data.data[0];
                    this.setState({ baseStyleno: datas.baseStyleno, fabricDesc: datas.fabricDesc, fabricType: datas.fabricType });
                })
                .catch(error => {
                    // error handling
                })
        }
    }

    skipChangecheckbox(event) {
        if (this.state.skipflag == "Y") {
            this.setState({ skipflag: "N" });
        } else {
            this.setState({ skipflag: "Y" });
        }
    }

    
    Generate() {

        let ordercategory = "";
        if (this.state.ordercategory.length > 0) {
            ordercategory = this.state.ordercategory[0].value;
        }

        if (this.state.buyer.length > 0 && this.state.buyer.length > 0) {
            if(this.state.hid!=0 && this.state.hid!=''){
                if(this.state.optiondays!=0 && this.state.optiondays!=''){

                   

                    let data = {
                        "buyer": this.state.buyer[0].value,
                        "buyerDiv": this.state.buyerdiv[0].value,
                        "orderCat": ordercategory,
                        "id": this.state.hid,
                        "activity": this.state.activity,
                        "noofDays": this.state.days,
                        "schedule": this.state.scheduled_date,
                        };
        
                    
                    api.post('TNAMaster/GetScheduleDateGenerationInternal', data).then((response) => {
                        this.setState({hid:'',days:0,scheduled_date: moment(new Date()).format('YYYY-MM-DD'),activity:'',subactivity:'',revisied_date: moment(new Date()).format('YYYY-MM-DD'),confdate: moment(new Date()).format('YYYY-MM-DD'),});
                        let datas = response.data.data;
                        if(datas!=null){
                            if (response.data.messageCode == "200") {    
                                this.setState({ actstagelists: datas });
                            } else {
                                this.setState({ actstagelists: datas });
                                NotificationManager.error(response.data.message);
                            }
                        } else{
                            this.setState({ actstagelists: []});
                            NotificationManager.error(response.data.message);
                        }
                       
        
                    })
                        .catch(error => {
                            // error handling
                        })

                }else {
                    NotificationManager.error('Please Enter valid days');    
                }
            } else {
                NotificationManager.error('Please Click on days or date');    
            }

          

        } else {
            NotificationManager.error('Please Select Buyer');

        }


    }
    

    //save Internal T&A
    save() {
        
        if (this.state.buyer.length > 0) {
            if(this.state.actstagelists.length>0){
                let optionarraylists = []
                this.state.actstagelists.forEach(element => {
                  let optiondata =  {
                        "id": 0,
                        "intTna_Id":  element.id,
                        "tnaSeqno": element.tnaSeqNo,
                        "fit": element.fit,
                        "actCode": 0,
                        "activity": element.activity,
                        "subActivity": "string",
                        "duration": element.duration,
                        "dependActCode": "string",
                        "scheduleDt": element.schedule,
                        "revisedDt": "2021-12-05T17:28:53.760Z",
                        "completed": "s",
                        "completedDt": "2021-12-05T17:28:53.760Z",
                        "skipped": "s",
                        "deviation": 0,
                        "remarks": "string",
                        "createdBy": "string",
                        "modifyBy": "string",
                        "hostname": "string"
                        
                      }
                      optionarraylists.push(optiondata);
                });
                let data = {
                    "id": 0,
                    "entityId": "st",
                    "masterStyle": this.state.styleno[0].value,
                    "baseActivity": "string",
                    "triggerDt": "2021-12-05T17:28:53.760Z",
                    "remarks": "string",
                    "cancel": "N",
                    "createdBy": "string",
                    "modifyBy": "string",
                    "hostname": "string",
                    "intTNADetlEntityModel":optionarraylists
                  };
    
    
                api.post('TNAMaster/SaveInternalTNAMaster', data).then((response) => {
    
                    NotificationManager.success('Saved Sucessfully');
                    this.setState({ edit_add: false });
                    this.setState({
                        buyerdiv: [], buyer: [], ordercategory: [], year:[],season:[],actstagelists:[],styleno:[],orderno:[],hid:'',days:0,scheduled_date: moment(new Date()).format('YYYY-MM-DD'),activity:'',subactivity:'',revisied_date: moment(new Date()).format('YYYY-MM-DD'),confdate: moment(new Date()).format('YYYY-MM-DD')
                    });
                })
                    .catch(error => {
                        // error handling
                    })

            }  else {
                NotificationManager.error('Schedule Date Generation Records not found');    
            }           

        } else {
            NotificationManager.error('Please Select Buyer');

        }


    }

    
    //edit internal
    edittnainternal(id) {

        this.setState({
            actstagelists:[],
            hid: 0,
            styleno:[],
            edit_add: true
        });
        
        api.get('TNAMaster/GetInternalTNAListBasedID?ID=' + id)
            .then((response) => {
                let data = response.data.data[0];

                
                let tamasteraddmoredatalists = [];
                for (const item of data.intTNADetlEntityModel) {
                    let dataall ={
                        "id": item.id,
                        "intTna_Id": item.intTna_Id,
                        "tnaSeqno": item.tnaSeqno,
                        "fit": item.fit,
                        "actCode": 0,
                        "activity": item.activity,
                        "subActivity": item.subActivity,
                        "duration": 0,
                        "dependActCode": item.dependActCode,
                        "schedule": item.scheduleDt,
                        "revisedDt": item.revisedDt,
                        "completed": item.completed,
                        "completedDt": item.completedDt,
                        "skipped": item.skipped,
                        "deviation": item.deviation,
                        "remarks": item.remarks,
                        "modifyBy": item.modifyBy,
                        "modifyDt": null,
                        "createdBy": item.createdBy,
                        "createdDt": item.createdDt,


                    };
                    tamasteraddmoredatalists.push(dataall);
                }
                
                // this.setState({ tamasteraddmoredata: tamasteraddmoredatalists, buyer: [{ value: data.buyCode, label: data.buyerCode }], buyerdiv: [{ value: data.buydivCode, label: data.buyerDivName }], ordercategory: [{ value: data.orderCategory, label: data.orderCategory }], department: [{ value: data.deptcode, label: data.deptcode }] });

                this.setState({
                    actstagelists:tamasteraddmoredatalists,
                    hid: id,
                    styleno:[{value:data.masterStyle,label:data.masterStyle}],
                });
            })
            .catch(error => {
                // error handling
            })
    }



    getBuyerDivision1(val, field, e) {
        let fields = this.state.fields;
        this.setState({ buyerdivlists: [], buyerdiv: [] });
        if (val.buyer.length != 0) {
            fields['buyer'] = val.buyer[0].value;
            this.setState({ fields });

            this.setState({ buyer: val.buyer });
            api.get('BuyerDivision/GetBuyerDivisionList?BuyerID=' + val.buyer[0].value)
                .then((response) => {
                    this.setState({ buyerdivlists: response.data.result.data });
                })
                .catch(error => { })

        } else {
            fields['buyer'] = '';
            this.setState({ fields });
        }

        // fields['buyer'] = val.buyer[0].value;        
        // this.setState({fields});


    }

    getBuyerDivision2(val, field, e) {
        let fields = this.state.fields;
        this.setState({ filterbuyerdivlists: [], filterbuyerdiv: [] });
        if (val.filterbuyer.length != 0) {
            fields['filterbuyer'] = val.filterbuyer[0].value;
            this.setState({ fields });

            this.setState({ filterbuyer: val.filterbuyer });
            api.get('BuyerDivision/GetBuyerDivisionList?BuyerID=' + val.filterbuyer[0].value)
                .then((response) => {
                    this.setState({ filterbuyerdivlists: response.data.result.data });
                })
                .catch(error => { })

        } else {
            fields['filterbuyer'] = '';
            this.setState({ fields });
        }


    }

    getvalueaddtype(val, field, e) {
        let fields = this.state.fields;
        this.setState({ valueaddtypelists: [] });
        if (val.valueadd.length != 0) {
            fields['valueadd'] = val.valueadd[0].value;
            this.setState({ fields });

            this.setState({ valueadd: val.valueadd });

            api.get('Miscellaneous/GetMiscellaneousList?MType=' + val.valueadd[0].value)
                .then((response) => {

                    this.setState({ valueaddtypelists: response.data.result.data });
                })
                .catch(error => {
                    // error handling
                })



        } else {
            fields['valueadd'] = '';
            this.setState({ fields });
        }

        // fields['buyer'] = val.buyer[0].value;        
        // this.setState({fields});


    }



    contactSubmit(e, type) {
        e.preventDefault();
        if (this.handleValidation()) {
            this.save();
        } else {
            //   alert("Form has errors.")
            NotificationManager.error('Form has errors');
        }

    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        console.log(fields)
        //Name
        if (!fields["buyer"]) {
            formIsValid = false;
            errors["buyer"] = "Cannot be empty";
        }

        //buyerdiv
        if (!fields["buyerdiv"]) {
            formIsValid = false;
            errors["buyerdiv"] = "Cannot be empty";
        }
        //season
        if (!fields["season"]) {
            formIsValid = false;
            errors["season"] = "Cannot be empty";
        }

        //year
        if (!fields["year"]) {
            formIsValid = false;
            errors["year"] = "Cannot be empty";
        }

        //styleno
        if (!fields["styleno"]) {
            formIsValid = false;
            errors["styleno"] = "Cannot be empty";
        }


        this.setState({ errors: errors });
        return formIsValid;
    }


    handleChange(event, value) {
        this.setState({ activeIndex: value });
        this.setState({ [name]: checked });
    }

    handleDateChange = (date) => {
        // console.log(moment(date).format('YYYY-MM-DD h:m:s a'));
        this.setState({ scheduled_date: moment(date).format('YYYY-MM-DD')});
    };

    handleDateChange1 = (date) => {
        this.setState({ revisied_date: moment(date).format('YYYY-MM-DD') });
    };

    handleDateChange2 = (date) => {
        this.setState({ confdate: moment(date).format('YYYY-MM-DD') });
    };


    samaddmoresave() {
        const { samaddmoredata } = this.state;
        if (this.state.optionType != '') {
            let data = {
                "id": 0,
                "swH_Id": this.state.swid,
                "optionType": this.state.optionType,
                "baseSAM": "s",
                "cancel": "s",
                "createdBy": "string",
                "createdDt": "2021-11-15T06:14:33.552Z",
                "modifyBy": "string",
                "modifyDt": "2021-11-15T06:14:33.552Z",
                "hostName": "string"
            }
            samaddmoredata.push(data);
            this.setState({ samaddmoredata: samaddmoredata })
            // this.state.samaddmoredata.push(data);
            this.setState({ optionType: '' })
            console.log(this.state.samaddmoredata, 'this.state.samaddmoredata')
        } else {
            NotificationManager.error('Please Enter all values');

        }

    }



    samaddmoredelete(item) {
        const { samaddmoredata } = this.state;


        if (samaddmoredata.indexOf(item) !== -1) {
            samaddmoredata.splice(samaddmoredata.indexOf(item), 1);
        }
        this.setState({ samaddmoredata: samaddmoredata })
        console.log(this.state.samaddmoredata, 'samaddmoredata')


    }

    samaddmoreedit(item) {
        const { samaddmoredata } = this.state;

        this.setState({ optionType: item.optionType });
        if (samaddmoredata.indexOf(item) !== -1) {
            samaddmoredata.splice(samaddmoredata.indexOf(item), 1);
        }
        this.setState({ samaddmoredata: samaddmoredata })
        console.log(this.state.samaddmoredata, 'samaddmoredata')


    }


    valueaddaddmoresave() {
        console.log(this.state.valueadd, this.state.valueaddtype, 'valueaddtypevalueaddtype')
        const { valueaddaddmoredata } = this.state;
        if (this.state.valueadd.length > 0 || this.state.noofpieces != 0) {
            let data = {
                "id": 0,
                "swH_Id": this.state.swid,
                "valueAdd": this.state.valueadd[0].value,
                "valueAddType": this.state.valueaddtype[0].value,
                "valueaddtypeDesc": this.state.valueaddtype[0].label,
                "color": this.state.valueaddcolor,
                "pcs": this.state.noofpieces,
                "typeOfGarment": "string",
                "cancel": "s",
                "createdBy": "string",
                "createdDt": "2021-11-15T06:14:33.552Z",
                "modifyBy": "string",
                "modifyDt": "2021-11-15T06:14:33.552Z",
                "hostName": "string"
            }
            valueaddaddmoredata.push(data);
            this.setState({ valueaddaddmoredata: valueaddaddmoredata })
            // this.state.valueaddaddmoredata.push(data);
            //   this.setState({valueadd:[],valueaddtype:[],noofpieces:0})
            this.setState({ valueaddcolor: '', noofpieces: 0 })
            //   console.log(this.state.valueaddaddmoredata,'this.state.valueaddaddmoredata')
        } else {
            NotificationManager.error('Please Enter all values');

        }

    }



    valueaddaddmoredelete(item) {
        const { valueaddaddmoredata } = this.state;


        if (valueaddaddmoredata.indexOf(item) !== -1) {
            valueaddaddmoredata.splice(valueaddaddmoredata.indexOf(item), 1);
        }
        this.setState({ valueaddaddmoredata: valueaddaddmoredata })
        console.log(this.state.valueaddaddmoredata, 'valueaddaddmoredata')


    }

    valueaddaddmoreedit(item) {
        const { valueaddaddmoredata } = this.state;

        this.setState({ noofpieces: item.pcs, valueaddcolor: item.color, valueadd: [{ value: item.valueAdd, label: item.valueAdd }], valueaddtype: [{ value: item.valueAddType, label: item.valueaddtypeDesc }] });
        if (valueaddaddmoredata.indexOf(item) !== -1) {
            valueaddaddmoredata.splice(valueaddaddmoredata.indexOf(item), 1);
        }
        this.setState({ valueaddaddmoredata: valueaddaddmoredata })
        console.log(this.state.valueaddaddmoredata, 'valueaddaddmoredata')


    }




    markeraddmoresave() {
        console.log(this.state.marker, this.state.markertype, 'markertypemarkertype')
        const { markeraddmoredata } = this.state;
        if (this.state.markerfor.length > 0) {
            let data = {
                "id": 0,
                "swH_Id": this.state.swid,
                "matType": this.state.materialtype[0].value,
                "description": this.state.marker_desc,
                "placement": this.state.marker_placement,
                "color": this.state.marker_color,
                "size": this.state.size[0].value,
                "pcs": this.state.marker_pieces,
                "width": this.state.marker_width,
                "repeat": this.state.marker_repeat,
                "baseMarker": "s",
                "cancel": "s",
                "createdBy": "string",
                "createdDt": "2021-11-16T05:00:55.509Z",
                "modifyBy": "string",
                "modifyDt": "2021-11-16T05:00:55.509Z",
                "hostName": "string"
            }
            markeraddmoredata.push(data);
            this.setState({ markeraddmoredata: markeraddmoredata })

            this.setState({ marker_desc: '', marker_placement: '', marker_color: '', marker_pieces: '', marker_width: '', marker_repeat: '' })
        } else {
            NotificationManager.error('Please Enter all values');

        }

    }



    markeraddmoredelete(item) {
        const { markeraddmoredata } = this.state;


        if (markeraddmoredata.indexOf(item) !== -1) {
            markeraddmoredata.splice(markeraddmoredata.indexOf(item), 1);
        }
        this.setState({ markeraddmoredata: markeraddmoredata })


    }

    markeraddmoreedit(item) {
        const { markeraddmoredata } = this.state;

        this.setState({ noofpieces: item.pcs, markercolor: item.color, marker: [{ value: item.marker, label: item.marker }], markertype: [{ value: item.markerType, label: item.markertypeDesc }] });
        if (markeraddmoredata.indexOf(item) !== -1) {
            markeraddmoredata.splice(markeraddmoredata.indexOf(item), 1);
        }
        this.setState({ markeraddmoredata: markeraddmoredata })


    }



    sampleaddmoresave() {

        const { sampleaddmoredata } = this.state;
        if (this.state.sample_materialtype.length > 0) {
            let data = {
                "id": 0,
                "swH_Id": this.state.swid,
                "matType": this.state.sample_materialtype[0].value,
                "matDesc": this.state.sample_desc,
                "placement": this.state.sample_placement,
                "color": this.state.sample_color,
                "size": this.state.sample_size[0].value,
                "pcs": this.state.sample_pieces,
                "cancel": "s",
                "createdBy": "string",
                "createdDt": "2021-11-16T05:00:55.509Z",
                "modifyBy": "string",
                "modifyDt": "2021-11-16T05:00:55.509Z",
                "hostName": "string"
            }
            sampleaddmoredata.push(data);
            this.setState({ sampleaddmoredata: sampleaddmoredata })

            this.setState({ sample_desc: '', sample_placement: '', sample_color: '', sample_pieces: '' })
        } else {
            NotificationManager.error('Please Enter all values');

        }

    }



    sampleaddmoredelete(item) {
        const { sampleaddmoredata } = this.state;


        if (sampleaddmoredata.indexOf(item) !== -1) {
            sampleaddmoredata.splice(sampleaddmoredata.indexOf(item), 1);
        }
        this.setState({ sampleaddmoredata: sampleaddmoredata })


    }

    sampleaddmoreedit(item) {
        const { sampleaddmoredata } = this.state;

        this.setState({ sample_pieces: item.pcs, sample_color: item.color, sample_desc: item.matDesc, sample_placement: item.placement, sample_materialtype: [{ value: item.matType, label: item.matType }], sample_size: [{ value: item.size, label: item.size }] });
        if (sampleaddmoredata.indexOf(item) !== -1) {
            sampleaddmoredata.splice(sampleaddmoredata.indexOf(item), 1);
        }
        this.setState({ sampleaddmoredata: sampleaddmoredata })


    }


    rowclickfunction(n, index) {
        $('.alltd').css('background-color', '#fff');
        $('#duration' + index).css('background-color', '#da0a0a');
        $('#schedule' + index).css('background-color', '#da0a0a');
        $('#revised' + index).css('background-color', '#da0a0a');
        $('#confirmed' + index).css('background-color', '#da0a0a');
        this.setState({ activity: n.activity,subactivity:n.subActivity, days: n.duration, rmrk: "", hid: n.hid,scheduled_date:moment(n.schedule).format('YYYY-MM-DD'),confdate:moment(n.completedDt).format('YYYY-MM-DD'),revisied_date:moment(n.revisedDt).format('YYYY-MM-DD') })
    }


    render() {
        const { employeePayroll, samaddmoredata, valueaddaddmoredata, markeraddmoredata, sampleaddmoredata, reqtype } = this.state;
        const { match } = this.props;
        const { selectedDate } = this.state;
        const { classes } = this.props;
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

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
        const handleToggle1 = () => {
            this.setState({ isActive: false });
        };
        const handleToggle2 = () => {
            this.setState({ isActive: !this.state.isActive });
        };

        const handleToggle3 = () => {
            this.setState({ isActive: false });
        };
        const isActive = this.state.isActive;

        const {  scheduled_date,confdate, revisied_date,skipflag  } = this.state;

        const buyeroptions = [];
        for (const item of this.state.buyerlists) {
            buyeroptions.push({ value: item.buyerCode, label: item.buyerName });
        }

        const buyerdivoptions = [];
        for (const item of this.state.buyerdivlists) {
            buyerdivoptions.push({ value: item.divisionCode, label: item.divisionName });
        }

        const yearoptions = [];
        for (const item of this.state.yearlists) {
            yearoptions.push({ value: item.code, label: item.codeDesc });
        }

        const purposeoptions = [];
        for (const item of this.state.purposelists) {
            purposeoptions.push({ value: item.parntslno, label: item.purpose });
        }


        const reqtypeoptions = [];
        for (const item of this.state.reqtypelists) {
            reqtypeoptions.push({ value: item.code, label: item.codeDesc });
        }

        const bodygrainoptions = [];
        for (const item of this.state.bodygrainlists) {
            bodygrainoptions.push({ value: item.code, label: item.codeDesc });
        }


        const joboptions = [];
        for (const item of this.state.joblists) {
            joboptions.push({ value: item.code, label: item.codeDesc });
        }

        const addoninfooptions = [];
        for (const item of this.state.addoninfolists) {
            addoninfooptions.push({ value: item.code, label: item.codeDesc });
        }

        const prepseqoptions = [];
        for (const item of this.state.prepseqlists) {
            prepseqoptions.push({ value: item.code, label: item.codeDesc });
        }


        const locationoptions = [];
        for (const item of this.state.locationlists) {
            locationoptions.push({ value: item.locCode, label: item.locName });
        }

        const sizeoptions = [];
        for (const item of this.state.sizelists) {
            sizeoptions.push({ value: item.sizecode, label: item.sizeIndex });
        }


        const fitoptions = [];
        for (const item of this.state.fitlists) {
            fitoptions.push({ value: item.code, label: item.codeDesc });
        }

        const fabtypeoptions = [];
        for (const item of this.state.fabtypelists) {
            fabtypeoptions.push({ value: item.code, label: item.codeDesc });
        }

        const stagedetailsoptions = [];
        for (const item of this.state.stagedetailslists) {
            stagedetailsoptions.push({ value: item.code, label: item.codeDesc });
        }

        const seasonoptions = [];
        for (const item of this.state.seasonlists) {
            seasonoptions.push({ value: item.seasonCode, label: item.seasonName });
        }


        const markerforoptions = [];
        for (const item of this.state.markerforlists) {
            markerforoptions.push({ value: item.code, label: item.codeDesc });
        }

        const valueaddoptions = [];
        for (const item of this.state.valueaddlists) {
            valueaddoptions.push({ value: item.code, label: item.codeDesc });
        }

        const valueaddtypeoptions = [];
        for (const item of this.state.valueaddtypelists) {
            valueaddtypeoptions.push({ value: item.code, label: item.codeDesc });
        }


        const sampletypeoptions = [];
        for (const item of this.state.sampletypelists) {
            sampletypeoptions.push({ value: item.code, label: item.codeDesc });
        }

        const stylenooptions = [];
        for (const item of this.state.stylenolists) {
            stylenooptions.push({ value: item.masterStyle, label: item.masterStyle + '-' + item.refStyleNo });
        }

        const materialtypeoptions = [];
        for (const item of this.state.materialtypelists) {
            materialtypeoptions.push({ value: item.mattype, label: item.matDesc });
        }


        const filterstylenooptions = [];
        for (const item of this.state.filterstylenolists) {
            filterstylenooptions.push({ value: item.masterStyle, label: item.masterStyle + '-' + item.refStyleNo });
        }



        const ordercategoryoptions = [];
        for (const item of this.state.ordercategorylists) {
            ordercategoryoptions.push({ value: item.code, label: item.codeDesc });
        }



        const filterbuyerdivoptions = [];
        for (const item of this.state.filterbuyerdivlists) {
            filterbuyerdivoptions.push({ value: item.divisionCode, label: item.divisionName });
        }


        let overalllistshtml = null;
        if (this.state.overalllists.length > 0) {
            overalllistshtml = this.state.overalllists.map((n, index) => {
                return (
                    <tr>
                        <td className="text-center">
                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" onClick={(e) => this.edittnainternal(n.hid)}><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button></td>

                        <td>{n.buyName} </td>
                        <td>{n.divname} </td>
                        <td>{n.orderType} </td>
                        <td>{n.refStyleNo}</td>
                        <td className={n.colorstatus}>{n.activity}</td>
                        {/* <td></td>
                                            <td></td>
                                            <td></td> */}
                    </tr>
                );
            })
        } else {
            overalllistshtml = <tr><td colSpan="9" className="no-records-data"><span>No records found</span></td></tr>;
        }


        let actstagelisthtml = null;
        if (this.state.actstagelists.length > 0) {
            actstagelisthtml = this.state.actstagelists.map((n, index) => {
                return (
                    <tr>
                        <td>{n.stage} </td>
                        <td>{n.fit} </td>
                        <td>{n.activity} </td>
                        <td>{n.subActivity} </td>
                        <td className="alltd" id={'duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index)}>{n.duration} </td>
                        <td className="alltd" id={'schedule' + `${index}`} onClick={(e) => this.rowclickfunction(n, index)}>{n.schedule} </td>
                        <td className="alltd" id={'revised' + `${index}`} onClick={(e) => this.rowclickfunction(n, index)}> {n.revisedDt}</td>
                        <td className="alltd" id={'confirmed' + `${index}`} onClick={(e) => this.rowclickfunction(n, index)}>{n.completedDt} </td>
                        <td> </td>
                        <td>{n.skipped} </td>
                        <td> </td>
                        
                    </tr>
                );
            })
        } else {
            actstagelisthtml = <tr><td colSpan="11" className="no-records-data"><span>No records found</span></td></tr>;
        }



        return (

            <RctCollapsibleCard heading="">
                <PageTitleBar title="Menu" match={this.props.match} />
                <div >

                    {/* className={isActive ? "s-panel active" : 's-panel'} */}
                    <Accordion className="border mb-15 mt-15">
                        <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                            <div className="acc_title_font">
                                <Typography>Product Development Internal T&A </Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="float-right pr-0 but-tp">


                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.Generate(e)}  ><span className="MuiButton-label"> Generate <i className="zmdi zmdi-plus"></i></span><span className="MuiTouchRipple-root"></span></button>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button>

                                {(() => {
                                    if (this.state.edit_add == false) {
                                        return (
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={(e) => this.contactSubmit(e)} ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                                        )
                                    }
                                    if (this.state.edit_add != false) {
                                        return (<button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={(e) => this.contactSubmit(e)} ><span className="MuiButton-label">Update <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                                        )
                                    }
                                })()}
                                {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button> */}
                            </div> <div className="clearfix"></div>
                            <div className="row new-form">

                                <div className="w-100  p-10 no-f-mb mt-5">

                                    <div className="clearfix"></div>
                                    <div className="w-100 float-left">
                                        <div className="row">

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Buyer"
                                                        options={buyeroptions}
                                                        // onChange={this.setstatevaluedropdownfunction('buyer')}
                                                        onChange={values => this.getBuyerDivision1({ buyer: values }, this, "buyer")}
                                                        placeholder="Buyer"
                                                        values={this.state.buyer}
                                                    />
                                                    <span className="error">{this.state.errors["buyer"]}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Buyer Division"
                                                        options={buyerdivoptions}
                                                        onChange={this.setstatevaluedropdownfunction('buyerdiv')}
                                                        placeholder="Buyer Division"
                                                        values={this.state.buyerdiv}
                                                    />
                                                    <span className="error">{this.state.errors["buyerdiv"]}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Order Category"
                                                        options={ordercategoryoptions}
                                                        onChange={this.setstatevaluedropdownfunction('ordercategory')}
                                                        placeholder="Order Category"
                                                        values={this.state.ordercategory}
                                                    />
                                                    <span className="error">{this.state.errors["ordercategory"]}</span>
                                                </div>

                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
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
                                                    <span className="error">{this.state.errors["season"]}</span>
                                                </div>

                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Year"
                                                        options={yearoptions}
                                                        onChange={this.setstatevaluedropdownfunction('year')}
                                                        placeholder="Year"
                                                        values={this.state.year}
                                                    />
                                                    <span className="error">{this.state.errors["year"]}</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Style Number"
                                                        options={stylenooptions}
                                                        onChange={this.setstatevaluedropdownfunction('styleno')}
                                                        placeholder="Style Number"
                                                        values={this.state.styleno}
                                                    />
                                                    <span className="error">{this.state.errors["styleno"]}</span>
                                                </div>
                                            </div>


                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Order No"
                                                        options={stylenooptions}
                                                        onChange={this.setstatevaluedropdownfunction('orderno')}
                                                        placeholder="Order No"
                                                        values={this.state.orderno}
                                                    />
                                                    
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                     <TextField id="versionno" disabled value={this.state.versionno} onChange={this.setstatevaluefunction('versionno')} fullWidth label="Version" placeholder="Version" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                     <TextField id="activity" disabled value={this.state.activity} onChange={this.setstatevaluefunction('activity')} fullWidth label="Activity" placeholder="Activity" />
                                                </div>
                                                
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                     <TextField id="subactivity" disabled value={this.state.subactivity} onChange={this.setstatevaluefunction('subactivity')} fullWidth label="Sub Activity" placeholder="Sub Activity" />
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pl-0 f-w-date">
                                                <div className="row">
                                                    <AccordionInput>
                                                        <Fragment>
                                                            <div className="rct-picker">
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardDatePicker
                                                                        disablePast={true}
                                                                        // minDate={confduedate}
                                                                        disableToolbar
                                                                        variant="inline"
                                                                        format="MM/dd/yyyy"
                                                                        margin="normal"
                                                                        id="date-picker-inline"
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'Schedule',
                                                                        }}
                                                                        label="Schedule"
                                                                        value={scheduled_date}
                                                                        onChange={this.handleDateChange}
                                                                        animateYearScrolling={false}
                                                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                                                        fullWidth
                                                                    />
                                                                </MuiPickersUtilsProvider>
                                                            </div>
                                                        </Fragment>
                                                    </AccordionInput>
                                                </div></div>

                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pl-0 f-w-date">
                                                <div className="row">
                                                    <AccordionInput>
                                                        <Fragment>
                                                            <div className="rct-picker">
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardDatePicker
                                                                        disablePast={true}
                                                                        
                                                                        disableToolbar
                                                                        variant="inline"
                                                                        format="MM/dd/yyyy"
                                                                        margin="normal"
                                                                        id="date-picker-inline"
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'Revised',
                                                                        }}
                                                                        label="Revised"
                                                                        value={revisied_date}
                                                                        onChange={this.handleDateChange1}
                                                                        animateYearScrolling={false}
                                                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                                                        fullWidth
                                                                    />
                                                                </MuiPickersUtilsProvider>
                                                            </div>
                                                        </Fragment>
                                                    </AccordionInput>
                                                </div></div>

                                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pl-0 f-w-date">
                                                <div className="row">
                                                    <AccordionInput>
                                                        <Fragment>
                                                            <div className="rct-picker">
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardDatePicker
                                                                        disablePast={true}                                                                        
                                                                        disableToolbar
                                                                        variant="inline"
                                                                        format="MM/dd/yyyy"
                                                                        margin="normal"
                                                                        id="date-picker-inline"
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'Completed',
                                                                        }}
                                                                        label="Completed"
                                                                        value={confdate}
                                                                        onChange={this.handleDateChange2}
                                                                        animateYearScrolling={false}
                                                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                                                        fullWidth
                                                                    />
                                                                </MuiPickersUtilsProvider>
                                                            </div>
                                                        </Fragment>
                                                    </AccordionInput>
                                                </div></div>

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">


                                                <div className="form-group">
                                                  <TextField id="days" value={this.state.days} onChange={this.setstatevaluefunction('days')} fullWidth label="Days" placeholder="Days" />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                                                <RadioGroup row aria-label="anchorReference" name="anchorReference">
                                                    <div className="w-100 pt-10">

                                                    {(() => {

                                                        if (skipflag == 'Y') {
                                                            return (<FormControlLabel control={<Checkbox color="primary" onClick={(e) => this.skipChangecheckbox(e)} checked />} label="Skip" />

                                                            )
                                                        }
                                                        if (skipflag != 'Y') {
                                                            return (
                                                                <FormControlLabel control={<Checkbox color="primary" onClick={(e) => this.skipChangecheckbox(e)} />} label="Skip" />
                                                            )
                                                        }
                                                    })()}

                                                       
                                                    </div>

                                                </RadioGroup>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">


                                                <div className="form-group">
                                                     <TextField id="rmrk" value={this.state.rmrk} onChange={this.setstatevaluefunction('rmrk')} fullWidth label="Rmrk" placeholder="Rmrk" />
                                                </div>

                                            </div>


                                            <div className="table-responsive mt-0">


                                                <table className="table mt-10 data w-100 float-left la-fix" >
                                                    <thead>
                                                        <tr>
                                                            <th className="">Stage</th>
                                                            <th className="">Fit</th>
                                                            <th className="">Activity</th>
                                                            <th className="">S.Activity</th>
                                                            <th className="">Days</th>
                                                            <th className="">Schedule</th>
                                                            <th className="">Revised</th>
                                                            <th className="">Completed</th>
                                                            <th className="">Delay</th>
                                                            <th className="">Skip</th>
                                                            <th className="">Rmrk</th>



                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {actstagelisthtml &&
                                                    actstagelisthtml}

                                                    </tbody>

                                                </table>
                                                <div className="clearfix"></div>
                                                {/* <div className="w-50 float-right">
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
        <div className="w-30 float-left pl-30">
                        <label className="mt-5">1-10 of 50</label>
                        </div>
                        <div className="w-30 float-left">
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                        <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                        </div></div> */}
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                {/*  */}

                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="border mb-15 mt-15">
                        <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                            <div className="acc_title_font">
                                <Typography>Internal Style T&A List</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="float-right pr-0 but-tp">


                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.getalldata()} ><span className="MuiButton-label">Search <i className="zmdi zmdi-search"></i></span><span className="MuiTouchRipple-root"></span></button>


                            </div>
                            <div className="w-100  p-10 no-f-mb mt-5">

                                <div className="clearfix"></div>
                                <div className="w-100 float-left">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">
                                                <Select1
                                                    dropdownPosition="auto"
                                                    //   multi
                                                    createNewLabel="Buyer"
                                                    options={buyeroptions}
                                                    // onChange={this.setstatevaluedropdownfunction('buyer')}
                                                    onChange={values => this.getBuyerDivision2({ filterbuyer: values }, this, "filterbuyer")}
                                                    placeholder="Buyer"
                                                    values={this.state.filterbuyer}
                                                />
                                                <span className="error">{this.state.errors["filterbuyer"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">
                                                <Select1
                                                    dropdownPosition="auto"
                                                    //   multi
                                                    createNewLabel="Buyer Division"
                                                    options={filterbuyerdivoptions}
                                                    onChange={this.setstatevaluedropdownfunction('filterbuyerdiv')}
                                                    placeholder="Buyer Division"
                                                    values={this.state.filterbuyerdiv}
                                                />
                                                <span className="error">{this.state.errors["filterbuyerdiv"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">
                                                <Select1
                                                    dropdownPosition="auto"
                                                    //   multi
                                                    createNewLabel="Order Type"
                                                    options={ordercategoryoptions}
                                                    onChange={this.setstatevaluedropdownfunction('filterordercategory')}
                                                    placeholder="Order Type"
                                                    values={this.state.filterordercategory}
                                                />
                                                <span className="error">{this.state.errors["filterordercategory"]}</span>
                                            </div>

                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">
                                                <Select1
                                                    dropdownPosition="auto"
                                                    //   multi
                                                    createNewLabel="Style"
                                                    options={filterstylenooptions}
                                                    onChange={this.setstatevaluedropdownfunction('filterstyleno')}
                                                    placeholder="Style"
                                                    values={this.state.filterstyleno}
                                                />
                                                <span className="error">{this.state.errors["filterstyleno"]}</span>
                                            </div>

                                        </div>






                                    </div>
                                </div>
                                <div className="table-responsive mt-0">


                                    <table className="table mt-10 data w-100 float-left la-fix" >
                                        <thead>
                                            <tr>
                                                <th className="text-center">Actions</th>
                                                <th className="">Buyer</th>
                                                <th className="">Buyer Div</th>
                                                <th className="">Ord type</th>
                                                <th className="">Style</th>
                                                <th className="">Activity</th>
                                                {/* <th className="">Act2</th>
                                     <th className="">Act3</th>
                                     <th className="">Act4</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {overalllistshtml &&
                                                overalllistshtml}
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
                                        <div className="w-30 float-left pl-30">
                                            <label className="mt-5">1-10 of 50</label>
                                        </div>
                                        <div className="w-30 float-left">
                                            <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-left"></i><span className="MuiTouchRipple-root"></span></button>
                                            <button className="float-left MuiButtonBase-root MuiButton-root MuiButton-contained  mr-10  btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-chevron-right"></i><span className="MuiTouchRipple-root"></span></button>
                                        </div></div>
                                </div>

                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>





            </RctCollapsibleCard>

        );
    }
}

export default PdtinternalElement;
