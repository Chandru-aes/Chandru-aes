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
import { AccordionInput } from "../../../../helpers/helpers";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select1 from "react-dropdown-select";
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
class PdtamasterElement extends Component {
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
        activeIndex: 0,
        open: false,
        cloneopen: false,
        ropen: false,
        tpopen: false,
        selectedDate: moment().format('YYYY-MM-DD'),
        addNewUserModal: false,
        checkedA: true,

        unit: [],
        unitlists: [],

        buyerlists: [],
        buyerdivlists: [],
        ordercategorylists: [],
        ordercategory: [],
        buyer: [],
        buyerdiv: [],
        stylenolists: [],
        styleno: [],
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
        versionno: '',
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
        filterordercategory: [],
        filterbuyer: [],
        filterbuyerdiv: [],
        overalllists: [],
        edit_add: false,
        filterbuyerdivlists: [],
        filterstylenolists: [],
        filterstyleno: [],
        actstagelists: [],
        activity: '',
        optionname: '',
        optiondate: moment(new Date()).format('YYYY-MM-DD'),
        optionremark: '',
        optiondays: '',
        optionid: '',
        option1: [],
        option1name: 'Option1',
        option2: [],
        option2name: 'Option2',
        option3: [],
        option3name: 'Option3',
        option4: [],
        option4name: 'Option4',
        option5: [],
        option5name: 'Option5',
        option6: [],
        option6name: 'Option6',
        option7: [],
        option7name: 'Option7',
        option8: [],
        option8name: 'Option8',
        option9: [],
        option9name: 'Option9',
        option10: [],
        option10name: 'Option10',
        hid: 0,
        count: 1,
        currentoptiontype: "option1",
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
        $('.optionalltable').css('opacity', '0');
    }


    getfilldropdownlists() {

        api.get('Buyer/GetBuyerDropDown')
            .then((response) => {

                this.setState({ buyerlists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

        // api.get('StyleHeader/GetStyleGridList')
        // .then((response) => {

        //     this.setState({ stylenolists: response.data.data });
        // })
        // .catch(error => {
        //     // error handling
        // })

        api.get('Unit/GetUnitDropDown')
            .then((response) => {

                this.setState({ unitlists: response.data.result.data });
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




    }

    setstatevaluefunction = name => event => {

        this.setState({ [name]: event.target.value });

        if (name == "optiondays") {
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


        if (name == "buyer" || name == "buyerdiv" || name == "ordercategory") {
            setTimeout(() => {
                this.getActivitylist();
            }, 200);
        }


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

    getalldata() {
        this.setState({ overalllists: [] });
        if (this.state.filterbuyer.length > 0 && this.state.filterbuyerdiv.length > 0 && this.state.filterordercategory.length > 0 && this.state.filterstyleno.length > 0) {

            api.get('TNAMaster/GetBuyerTNAList?Buyer=' + this.state.filterbuyer[0].value + '&BuyerDiv=' + this.state.filterbuyerdiv[0].value + '&Ocategory=' + this.state.filterordercategory[0].value + '&Style=' + this.state.filterstyleno[0].value)
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
            api.get('TNAMaster/GetStyleForBuyTNASearch?Buyer=' + this.state.filterbuyer[0].value + '&BuyerDivsion=' + this.state.filterbuyerdiv[0].value)
                .then((response) => {
                    let datas = response.data.data;
                    this.setState({ filterstylenolists: datas });
                })
                .catch(error => {
                    // error handling
                })
        }
    }

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
        this.setState({ actstagelists: [], option1: [], option2: [], option3: [], option4: [], option5: [], option6: [], option7: [], option8: [], option9: [], option10: [] });
        if (this.state.buyer.length > 0 && this.state.buyerdiv.length > 0 && this.state.ordercategory.length > 0) {

            // api.get('TNAMaster/GetExistChkForTNABuyer?Buyer='+this.state.buyer[0].value)
            // api.get('TNAMaster/GetExistChkForTNABuyerDiv?Buyer=' + this.state.buyer[0].value + '&BuyerDiv=' + this.state.buyerdiv[0].value)

            api.get('TNAMaster/GetExistChkBuyerOCat?Buyer=' + this.state.buyer[0].value + '&BuyerDiv=' + this.state.buyerdiv[0].value + '&OCat=' + this.state.ordercategory[0].value)
                .then((response) => {
                    let datas = response.data.data;
                    if (response.data.messageCode == "200") {

                        this.setState({ actstagelists: datas, option1: datas, option2: datas, option3: datas, option4: datas, option5: datas, option6: datas, option7: datas, option8: datas, option9: datas, option10: datas });
                    } else {
                        this.setState({ actstagelists: datas, option1: datas, option2: datas, option3: datas, option4: datas, option5: datas, option6: datas, option7: datas, option8: datas, option9: datas, option10: datas });
                        NotificationManager.error(response.data.message);
                    }

                })
                .catch(error => {
                    // error handling
                })
        }
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

        this.setState({ selectedDate: moment(date).format('YYYY-MM-DD') });

    };
    handleChangeCheckbox = name => (event, checked) => {
        console.log("name:: ", name);
        this.setState({ [name]: checked });
    };



    Clickclone = () => {
        this.setState({ cloneopen: true });
    }


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
    rowclickfunction(n, index, optionname, optionid) {
        $('.alltd').css('background-color', '#fff');
        $('#' + optionid + 'duration' + index).css('background-color', '#da0a0a');
        $('#' + optionid + 'date' + index).css('background-color', '#da0a0a');
        $('#' + optionid + 'remark' + index).css('background-color', '#da0a0a');
        this.setState({ activity: n.activity, optiondays: n.duration, optionremark: "", optionname: optionname, optionid: n.hid, currentoptiontype: optionid })
    }

    //save Buyer T&A
    save() {

        if (this.state.buyer.length > 0) {
            if (this.state.option1.length > 0) {
                let optionarraylists = []
                this.state.option1.forEach(element => {
                    let optiondata = {
                        "id": 0,
                        "buyerTna_Id": element.id,
                        "tnaSeqno": element.tnaSeqNo,
                        "tnaOption": this.state.option1name,
                        "triggerDt": "2021-12-07T17:39:20.942Z",
                        "actCode": 0,
                        "activity": element.activity,
                        "duration": element.duration,
                        "dependActCode": "string",
                        "scheduleDt":  element.schedule,
                        "revisedDt": "2021-12-07T17:39:20.942Z",
                        "completed": "s",
                        "completedDt": "2021-12-07T17:39:20.942Z",
                        "skipped": "s",
                        "deviation": 0,
                        "baseOption": "Y",
                        "confirmed": "Y",
                        "remarks": "string",
                        "createdBy": "string",
                        "modifyBy": "string",
                        "hostname": "string"
                    }
                    optionarraylists.push(optiondata);
                });
                this.state.option2.forEach(element => {
                    if(element.schedule!="" && element.schedule!=null){
                        let optiondata = {
                              "id": 0,
                        "buyerTna_Id": element.id,
                        "tnaSeqno": element.tnaSeqNo,
                        "tnaOption": this.state.option2name,
                        "triggerDt": "2021-12-07T17:39:20.942Z",
                        "actCode": 0,
                        "activity": element.activity,
                        "duration": element.duration,
                        "dependActCode": "string",
                        "scheduleDt":  element.schedule,
                        "revisedDt": "2021-12-07T17:39:20.942Z",
                        "completed": "s",
                        "completedDt": "2021-12-07T17:39:20.942Z",
                        "skipped": "s",
                        "deviation": 0,
                        "baseOption": "N",
                        "confirmed": "N",
                        "remarks": "string",
                        "createdBy": "string",
                        "modifyBy": "string",
                        "hostname": "string"
                        }
                        optionarraylists.push(optiondata);

                    }
                   
                });
                this.state.option3.forEach(element => {
                    if(element.schedule!="" && element.schedule!=null){
                        let optiondata = {
                              "id": 0,
                        "buyerTna_Id": element.id,
                        "tnaSeqno": element.tnaSeqNo,
                        "tnaOption": this.state.option3name,
                        "triggerDt": "2021-12-07T17:39:20.942Z",
                        "actCode": 0,
                        "activity": element.activity,
                        "duration": element.duration,
                        "dependActCode": "string",
                        "scheduleDt":  element.schedule,
                        "revisedDt": "2021-12-07T17:39:20.942Z",
                        "completed": "s",
                        "completedDt": "2021-12-07T17:39:20.942Z",
                        "skipped": "s",
                        "deviation": 0,
                        "baseOption": "N",
                        "confirmed": "N",
                        "remarks": "string",
                        "createdBy": "string",
                        "modifyBy": "string",
                        "hostname": "string"
                        }
                        optionarraylists.push(optiondata);

                    }
                   
                });
                this.state.option4.forEach(element => {
                    if(element.schedule!="" && element.schedule!=null){
                        let optiondata = {
                              "id": 0,
                        "buyerTna_Id": element.id,
                        "tnaSeqno": element.tnaSeqNo,
                        "tnaOption": this.state.option4name,
                        "triggerDt": "2021-12-07T17:39:20.942Z",
                        "actCode": 0,
                        "activity": element.activity,
                        "duration": element.duration,
                        "dependActCode": "string",
                        "scheduleDt":  element.schedule,
                        "revisedDt": "2021-12-07T17:39:20.942Z",
                        "completed": "s",
                        "completedDt": "2021-12-07T17:39:20.942Z",
                        "skipped": "s",
                        "deviation": 0,
                        "baseOption": "N",
                        "confirmed": "N",
                        "remarks": "string",
                        "createdBy": "string",
                        "modifyBy": "string",
                        "hostname": "string"
                        }
                        optionarraylists.push(optiondata);

                    }
                   
                });
                this.state.option5.forEach(element => {
                    if(element.schedule!="" && element.schedule!=null){
                        let optiondata = {
                              "id": 0,
                        "buyerTna_Id": element.id,
                        "tnaSeqno": element.tnaSeqNo,
                        "tnaOption": this.state.option5name,
                        "triggerDt": "2021-12-07T17:39:20.942Z",
                        "actCode": 0,
                        "activity": element.activity,
                        "duration": element.duration,
                        "dependActCode": "string",
                        "scheduleDt":  element.schedule,
                        "revisedDt": "2021-12-07T17:39:20.942Z",
                        "completed": "s",
                        "completedDt": "2021-12-07T17:39:20.942Z",
                        "skipped": "s",
                        "deviation": 0,
                        "baseOption": "N",
                        "confirmed": "N",
                        "remarks": "string",
                        "createdBy": "string",
                        "modifyBy": "string",
                        "hostname": "string"
                        }
                        optionarraylists.push(optiondata);

                    }
                   
                });
                let data = {
                    "id": 0,
                    "entityId": "st",
                    "masterStyle": this.state.styleno[0].value,
                    "baseActivity": "string",
                    "remarks": "string",
                    "cancel": "N",
                    "createdBy": "string",
                    "modifyBy": "string",
                    "hostname": "string",
                    "buyerTNADetlEntityModel": optionarraylists
                };


                api.post('TNAMaster/SaveBuyerTNAMaster', data).then((response) => {

                    NotificationManager.success('Saved Sucessfully');
                    this.setState({ edit_add: false });
                    this.setState({
                        buyerdiv: [], buyer: [], ordercategory: [], year: [], season: [], actstagelists: [], option1: [], styleno: [], unit: [],option2: [],option3: [],option4: [],option5: [],option6: [],option7: [],option8: [],option9: [],option10: [],
                    });
                })
                    .catch(error => {
                        // error handling
                    })

            } else {
                NotificationManager.error('Schedule Date Generation Records not found');
            }

        } else {
            NotificationManager.error('Please Select Buyer');

        }


    }

    delete(n) {

        let data = {
            "id": n.hid,
            "entityId": "st",
            "masterStyle": 0,
            "baseActivity": "string",
            "remarks": "string",
            "cancel": "Y",
            "createdBy": "string",
            "modifyBy": "string",
            "hostname": "string",
            "buyerTNADetlEntityModel": [
                {
                    "id": n.did,
                    "buyerTna_Id": 0,
                    "tnaSeqno": 0,
                    "tnaOption": "string",
                    "triggerDt": "2021-12-07T10:29:53.065Z",
                    "actCode": 0,
                    "activity": "string",
                    "duration": 0,
                    "dependActCode": "string",
                    "scheduleDt": "2021-12-07T10:29:53.065Z",
                    "revisedDt": "2021-12-07T10:29:53.065Z",
                    "completed": "s",
                    "completedDt": "2021-12-07T10:29:53.065Z",
                    "skipped": "s",
                    "deviation": 0,
                    "baseOption": "s",
                    "confirmed": "s",
                    "remarks": "string",
                    "createdBy": "string",
                    "modifyBy": "string",
                    "hostname": "string"
                }
            ]
        };

        api.post('TNAMaster/SaveBuyerTNAMaster', data).then((response) => {
            if (response.data.messageCode == "200") {
                NotificationManager.success('Deleted Sucessfully');
                this.getalldata();
            } else {
                NotificationManager.error(response.data.message);
            }


        })
            .catch(error => {
                // error handling
            })




    }





    //edit buyer
    edittnabuyer(id) {

        this.setState({
            actstagelists: [],
            option1: [],
            hid: 0,
            styleno: [],
            edit_add: true
        });

        api.get('TNAMaster/GetBuyerTNAListBasedID?ID=' + id)
            .then((response) => {
                let data = response.data.data[0];


                let tamasteraddmoredatalists = [];
                for (const item of data.buyerTNADetlEntityModel) {
                    let dataall = {
                        activity: item.activity,
                        buyer: "",
                        buyerDiv: "",
                        duration: item.duration,
                        fit: null,
                        id: item.id,
                        orderCat: "",
                        schedule: item.scheduleDt,
                        stage: "",
                        tnaSeqNo: item.tnaSeqno,

                    };
                    tamasteraddmoredatalists.push(dataall);
                }

                // this.setState({ tamasteraddmoredata: tamasteraddmoredatalists, buyer: [{ value: data.buyCode, label: data.buyerCode }], buyerdiv: [{ value: data.buydivCode, label: data.buyerDivName }], ordercategory: [{ value: data.orderCategory, label: data.orderCategory }], department: [{ value: data.deptcode, label: data.deptcode }] });

                this.setState({
                    actstagelists: [],
                    option1: tamasteraddmoredatalists,
                    hid: id,
                    styleno: [{ value: data.masterStyle, label: data.masterStyle }],
                });
            })
            .catch(error => {
                // error handling
            })
    }
    Addoption() {
        let count = this.state.count + 1;
        this.setState({ count: count });
        $('#option' + count + 'table').css('opacity', '1');

    }

    Generate() {

        let ordercategory = "";
        if (this.state.ordercategory.length > 0) {
            ordercategory = this.state.ordercategory[0].value;
        }

        if (this.state.buyer.length > 0 && this.state.buyer.length > 0) {
            if (this.state.optionid != 0 && this.state.optionid != '') {
                if (this.state.optiondays != 0 && this.state.optiondays != '') {
                    let data = {
                        "buyer": this.state.buyer[0].value,
                        "buyerDiv": this.state.buyerdiv[0].value,
                        "orderCat": ordercategory,
                        "id": this.state.optionid,
                        "activity": this.state.activity,
                        "noofDays": this.state.optiondays,
                        "schedule": this.state.optiondate,
                        "OptName": this.state.currentoptiontype
                    };
                    let optiontypename = this.state.currentoptiontype + 'name';
                    let optiontype = this.state.currentoptiontype;

                    api.post('TNAMaster/GetScheduleDateGeneration', data).then((response) => {
                        this.setState({ [optiontypename]: this.state.optionname, optionid: '', optionname: '', optiondays: 0, optiondate: moment(new Date()).format('YYYY-MM-DD'), activity: '' });
                        let datas = response.data.data;
                        if (datas != null) {
                            if (response.data.messageCode == "200") {
                                this.setState({ [optiontype]: datas });
                            } else {
                                this.setState({ [optiontype]: datas });
                                NotificationManager.error(response.data.message);
                            }
                        } else {
                            this.setState({ [optiontype]: [] });
                            NotificationManager.error(response.data.message);
                        }


                    })
                        .catch(error => {
                            // error handling
                        })

                } else {
                    NotificationManager.error('Please Enter valid days');
                }
            } else {
                NotificationManager.error('Please Click on days or date');
            }



        } else {
            NotificationManager.error('Please Select Buyer');

        }


    }



    render() {
        const { employeePayroll, samaddmoredata, valueaddaddmoredata, markeraddmoredata, sampleaddmoredata, reqtype, optiondate } = this.state;
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


        const buyeroptions = [];
        for (const item of this.state.buyerlists) {
            buyeroptions.push({ value: item.buyerCode, label: item.buyerName });
        }

        const buyerdivoptions = [];
        for (const item of this.state.buyerdivlists) {
            buyerdivoptions.push({ value: item.divisionCode, label: item.divisionName });
        }

        const filterbuyerdivoptions = [];
        for (const item of this.state.filterbuyerdivlists) {
            filterbuyerdivoptions.push({ value: item.divisionCode, label: item.divisionName });
        }



        const ordercategoryoptions = [];
        for (const item of this.state.ordercategorylists) {
            ordercategoryoptions.push({ value: item.code, label: item.codeDesc });
        }


        const yearoptions = [];
        for (const item of this.state.yearlists) {
            yearoptions.push({ value: item.code, label: item.codeDesc });
        }



        const locationoptions = [];
        for (const item of this.state.locationlists) {
            locationoptions.push({ value: item.locCode, label: item.locName });
        }



        const seasonoptions = [];
        for (const item of this.state.seasonlists) {
            seasonoptions.push({ value: item.seasonCode, label: item.seasonName });
        }


        const stylenooptions = [];
        for (const item of this.state.stylenolists) {
            stylenooptions.push({ value: item.masterStyle, label: item.masterStyle + '-' + item.refStyleNo });
        }


        const filterstylenooptions = [];
        for (const item of this.state.filterstylenolists) {
            filterstylenooptions.push({ value: item.masterStyle, label: item.masterStyle + '-' + item.refStyleNo });
        }
        const unitoptions = [];
        for (const item of this.state.unitlists) {
            unitoptions.push({ value: item.uCode, label: item.uName });
        }


        let overalllistshtml = null;
        if (this.state.overalllists.length > 0) {
            overalllistshtml = this.state.overalllists.map((n, index) => {
                return (
                    <tr>
                        <td className="text-center">
                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" onClick={(e) => this.delete(n)} ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                            <button className="MuiButtonBase-root mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" onClick={(e) => this.edittnabuyer(n.hid)}><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button></td>

                        <td>{n.buyName} </td>
                        <td>{n.divname} </td>
                        <td>{n.orderType} </td>
                        <td>{n.refStyleNo}</td>
                        <td></td>



                    </tr>
                );
            })
        } else {
            overalllistshtml = <tr><td colSpan="6" className="no-records-data"><span>No records found</span></td></tr>;
        }

        let actstagelisthtml = null;
        if (this.state.actstagelists.length > 0) {
            actstagelisthtml = this.state.actstagelists.map((n, index) => {
                return (
                    <tr>
                        <td>{n.stage} </td>
                        <td>{n.activity} </td>
                        {/* <td className="alltd" id={'duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option1name)}>{n.duration} </td>
                        <td className="alltd" id={'date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option1name)}> </td>
                        <td className="alltd" id={'remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option1name)}> </td> */}
                        {/* <td> </td>
                    <td> </td>
                    <td> </td> */}
                    </tr>
                );
            })
        } else {
            actstagelisthtml = <tr><td colSpan="2" className="no-records-data"><span>No records found</span></td></tr>;


        }

        let option1html = null;
        if (this.state.option1.length > 0) {
            option1html = this.state.option1.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                        <td>{n.activity} </td> */}
                        <td className="alltd" id={'option1duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option1name, 'option1')}>{n.duration} </td>
                        <td className="alltd" id={'option1date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option1name, 'option1')}> {n.schedule}</td>
                        <td className="alltd" id={'option1remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option1name, 'option1')}> </td>
                        {/* <td> </td>
                    <td> </td>
                    <td> </td> */}
                    </tr>
                );
            })
        } else {
            option1html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option2html = null;
        if (this.state.option2.length > 0) {
            option2html = this.state.option2.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                        <td>{n.activity} </td> */}
                        <td className="alltd" id={'option2duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option2name, 'option2')}>{n.duration} </td>
                        <td className="alltd" id={'option2date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option2name, 'option2')}> {n.schedule} </td>
                        <td className="alltd" id={'option2remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option2name, 'option2')}> </td>
                        {/* <td> </td>
                    <td> </td>
                    <td> </td> */}
                    </tr>
                );
            })
        } else {
            option2html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option3html = null;
        if (this.state.option3.length > 0) {
            option3html = this.state.option3.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                    <td>{n.activity} </td> */}
                        <td className="alltd" id={'option3duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option3name, 'option3')}>{n.duration} </td>
                        <td className="alltd" id={'option3date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option3name, 'option3')}>  {n.schedule}</td>
                        <td className="alltd" id={'option3remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option3name, 'option3')}> </td>
                        {/* <td> </td>
                <td> </td>
                <td> </td> */}
                    </tr>
                );
            })
        } else {
            option3html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option4html = null;
        if (this.state.option4.length > 0) {
            option4html = this.state.option4.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                    <td>{n.activity} </td> */}
                        <td className="alltd" id={'option4duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option4name, 'option4')}>{n.duration} </td>
                        <td className="alltd" id={'option4date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option4name, 'option4')}>  {n.schedule}</td>
                        <td className="alltd" id={'option4remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option4name, 'option4')}> </td>
                        {/* <td> </td>
                <td> </td>
                <td> </td> */}
                    </tr>
                );
            })
        } else {
            option4html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option5html = null;
        if (this.state.option5.length > 0) {
            option5html = this.state.option5.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                    <td>{n.activity} </td> */}
                        <td className="alltd" id={'option5duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option5name, 'option5')}>{n.duration} </td>
                        <td className="alltd" id={'option5date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option5name, 'option5')}>  {n.schedule}</td>
                        <td className="alltd" id={'option5remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option5name, 'option5')}> </td>
                        {/* <td> </td>
                <td> </td>
                <td> </td> */}
                    </tr>
                );
            })
        } else {
            option5html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option6html = null;
        if (this.state.option6.length > 0) {
            option6html = this.state.option6.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                    <td>{n.activity} </td> */}
                        <td className="alltd" id={'option6duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option6name, 'option6')}>{n.duration} </td>
                        <td className="alltd" id={'option6date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option6name, 'option6')}>  {n.schedule}</td>
                        <td className="alltd" id={'option6remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option6name, 'option6')}> </td>
                        {/* <td> </td>
                <td> </td>
                <td> </td> */}
                    </tr>
                );
            })
        } else {
            option6html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option7html = null;
        if (this.state.option7.length > 0) {
            option7html = this.state.option7.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                    <td>{n.activity} </td> */}
                        <td className="alltd" id={'option7duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option7name, 'option7')}>{n.duration} </td>
                        <td className="alltd" id={'option7date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option7name, 'option7')}>  {n.schedule}</td>
                        <td className="alltd" id={'option7remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option7name, 'option7')}> </td>
                        {/* <td> </td>
                <td> </td>
                <td> </td> */}
                    </tr>
                );
            })
        } else {
            option7html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option8html = null;
        if (this.state.option8.length > 0) {
            option8html = this.state.option8.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                    <td>{n.activity} </td> */}
                        <td className="alltd" id={'option8duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option8name, 'option8')}>{n.duration} </td>
                        <td className="alltd" id={'option8date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option8name, 'option8')}>  {n.schedule}</td>
                        <td className="alltd" id={'option8remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option8name, 'option8')}> </td>
                        {/* <td> </td>
                <td> </td>
                <td> </td> */}
                    </tr>
                );
            })
        } else {
            option8html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option9html = null;
        if (this.state.option9.length > 0) {
            option9html = this.state.option9.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                    <td>{n.activity} </td> */}
                        <td className="alltd" id={'option9duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option9name, 'option9')}>{n.duration} </td>
                        <td className="alltd" id={'option9date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option9name, 'option9')}>  {n.schedule}</td>
                        <td className="alltd" id={'option9remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option9name, 'option9')}> </td>
                        {/* <td> </td>
                <td> </td>
                <td> </td> */}
                    </tr>
                );
            })
        } else {
            option9html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }

        let option10html = null;
        if (this.state.option10.length > 0) {
            option10html = this.state.option10.map((n, index) => {
                return (
                    <tr>
                        {/* <td>{n.stage} </td>
                    <td>{n.activity} </td> */}
                        <td className="alltd" id={'option10duration' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option10name, 'option10')}>{n.duration} </td>
                        <td className="alltd" id={'option10date' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option10name, 'option10')}>  {n.schedule}</td>
                        <td className="alltd" id={'option10remark' + `${index}`} onClick={(e) => this.rowclickfunction(n, index, this.state.option10name, 'option10')}> </td>
                        {/* <td> </td>
                <td> </td>
                <td> </td> */}
                    </tr>
                );
            })
        } else {
            option10html = <tr><td colSpan="3" className="no-records-data"><span>No records found</span></td></tr>;

        }





        return (

            <RctCollapsibleCard heading="">
                <PageTitleBar title="Menu" match={this.props.match} />
                <div >

                    {/* className={isActive ? "s-panel active" : 's-panel'} */}
                    <Accordion className="border mb-15 mt-15">
                        <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                            <div className="acc_title_font">
                                <Typography>Product Development Buyer T&A </Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="float-right pr-0 but-tp">

                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.Generate(e)}  ><span className="MuiButton-label">    Generate  <i className="zmdi zmdi-copy"></i></span><span className="MuiTouchRipple-root"></span></button>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.Addoption(e)}  ><span className="MuiButton-label">Add <i className="zmdi zmdi-copy"></i></span><span className="MuiTouchRipple-root"></span></button>


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

                                <div className="w-100">

                                    <div className="clearfix"></div>
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
                                                    createNewLabel="Order category"
                                                    options={ordercategoryoptions}
                                                    onChange={this.setstatevaluedropdownfunction('ordercategory')}
                                                    placeholder="Order category"
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
                                                    createNewLabel="Unit"
                                                    options={unitoptions}
                                                    onChange={this.setstatevaluedropdownfunction('unit')}
                                                    placeholder="Unit"
                                                    values={this.state.unit}
                                                />
                                                <span className="error">{this.state.errors["unit"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <TextField id="activity" value={this.state.activity} onChange={this.setstatevaluefunction('activity')} fullWidth label="Activity" placeholder="Activity" />


                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                {/* <TextField id="Buyer" fullWidth label="Option" placeholder="Option"/> */}
                                                <TextField id="optionname" value={this.state.optionname} onChange={this.setstatevaluefunction('optionname')} fullWidth label="Option" placeholder="Option" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pl-0 f-w-date">
                                            {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0 f-w-date"> */}
                                            <div className="row">
                                                <AccordionInput>
                                                    <Fragment>
                                                        <div className="rct-picker">
                                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                <KeyboardDatePicker
                                                                    disablePast={true}
                                                                    // minDate={pcd}
                                                                    disableToolbar
                                                                    variant="inline"
                                                                    format="MM/dd/yyyy"
                                                                    margin="normal"
                                                                    id="date-picker-inline"
                                                                    KeyboardButtonProps={{
                                                                        'aria-label': 'Date',
                                                                    }}
                                                                    label="Date"
                                                                    value={optiondate}
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
                                            </div>
                                            {/* </div> */}
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <TextField id="optiondays" value={this.state.optiondays} onChange={this.setstatevaluefunction('optiondays')} fullWidth label="Days" placeholder="Days" />
                                                {/* <TextField id="Buyer" fullWidth label="Days" placeholder="Days"/> */}
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <TextField id="optionremark" value={this.state.optionremark} onChange={this.setstatevaluefunction('optionremark')} fullWidth label="Remarks" placeholder="Remarks" />
                                                
                                            </div>
                                        </div> */}

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) => this.handleChangecheckbox(n, index)} />} label="Base" />
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) => this.handleChangecheckbox(n, index)} />} label="Confirmed" />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="table-responsive mt-20">

                                        <div className="w-100 overflow-scl">
                                            <div className="scr-tbl">
                                                <div className="sc-tbl">

                                                    <table className="table f-st-tbl mt-10 data w-100 float-left text-center">
                                                        <thead className="tbl-hh-br">
                                                            <tr>
                                                                <th rowspan="">Stage</th>
                                                                <th rowspan="">Activity</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {actstagelisthtml &&
                                                                actstagelisthtml}

                                                        </tbody>
                                                    </table>
                                                    </div>
                                                <div className="nsc-tbl">
                                                    <table className="table mt-10 data w-100 float-left text-center">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option1name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option1html &&
                                                                option1html}


                                                        </tbody>
                                                    </table>
                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option2table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option2name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option2html &&
                                                                option2html}


                                                        </tbody>
                                                    </table>

                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option3table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option3name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option3html &&
                                                                option3html}


                                                        </tbody>
                                                    </table>

                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option4table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option4name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option4html &&
                                                                option4html}


                                                        </tbody>
                                                    </table>

                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option5table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option5name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option5html &&
                                                                option5html}


                                                        </tbody>
                                                    </table>

                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option6table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option6name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option6html &&
                                                                option6html}


                                                        </tbody>
                                                    </table>

                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option7table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option7name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option7html &&
                                                                option7html}


                                                        </tbody>
                                                    </table>

                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option8table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option8name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option8html &&
                                                                option8html}


                                                        </tbody>
                                                    </table>

                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option9table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option9name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option9html &&
                                                                option9html}


                                                        </tbody>
                                                    </table>

                                                    <table className="table mt-10 data w-100 float-left text-center optionalltable" id="option10table">
                                                        <thead className="tbl-hh-br">
                                                            <tr>

                                                                <th colspan="3">{this.state.option10name}</th>

                                                            </tr>
                                                            <tr>
                                                                <th colspan="3" className="p-0">

                                                                    <div className="w-50 float-left border-right p-5">Created Dt</div>
                                                                    <div className="w-50 float-left p-5">Modified Dt</div>

                                                                </th>

                                                            </tr>
                                                            <tr>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Base</div>

                                                                </th>
                                                                <th className="p-0">

                                                                    <div className="w-50 float-left border-right p-5"> <div className="w-100 pt-10">
                                                                        {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} />} label="" /> */}
                                                                    </div>
                                                                    </div>
                                                                    <div className="w-50 float-left p-5">Confirmed</div>

                                                                </th>
                                                                <th></th>

                                                            </tr>
                                                            <tr>
                                                                <th>Days</th>
                                                                <th>Date</th>
                                                                <th>Rmrk</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {option10html &&
                                                                option10html}


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className="border mb-15 mt-15">
                        <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                            <div className="acc_title_font">
                                <Typography>Buyer T&A List </Typography>
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
                                                <th className="">style</th>
                                                <th className="">status</th>




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

export default PdtamasterElement;
