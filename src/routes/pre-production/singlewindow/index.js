/**
 * Basic Table
 */
import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
// const styles = {
// 	checked: {
// 		color: pink[500],
// 	},

// };
import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const $ = require('jquery');
function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}
class SinglewindowElement extends Component {
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

        // If you want to attach multiple callbacks, simply
        // create an array filled with all your callbacks.
        // this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

        // // Simple callbacks work too, of course
        // this.callback = () => console.log('Hello!');

        // this.success = file => console.log('uploaded', file);

        // this.removedfile = file => console.log('removing...', file);

        this.dropzone = null;
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
        buyerlists:[],
        buyerdivlists:[],
        yearlists:[],
        reqtypelists:[],
        reqtype:[],

        bodygrainlists:[],
        bodygrain:[],

        joblists:[],
        job:[],

        addoninfolists:[],
        addoninfo:[],
        prepseqlists:[],
        prepseq:[],

        stylenolists:[],
        styleno:[],

        materialtypelists:[],
        materialtype:[],
        sample_materialtype:[],

        sampletypelists:[],
        sampletype:[],

        valueaddlists:[],
        valueadd:[],

        valueaddtypelists:[],
        valueaddtype:[],

        markerforlists:[],
        markerfor:[],


        locationlists:[],
        sizelists:[],
        size:[],
        sample_size:[],
        location:[],
        FashionGRP:[],
        buyer:[],
        buyerdiv:[],
        year:[],

        stagedetailslists:[],
        fitlists:[],
        fabtypelists:[],
        stagedetails:[],
        stage:[],
        fit:[],
        fabtype:[],
        seasonlists:[],
        season:[],
        // styleno:'',
        refstyleno:'',
        versionno:'',
        designStyleNo:'',
        desc:'',
        fabdesc:'',
        fields: {},
        errors: {},

        samaddmoredata:[],
        optionType:'',
        valueaddaddmoredata:[],
        markeraddmoredata:[],
        sampleaddmoredata:[],
        valueaddcolor:'',
        // valueadd:[],
        // valueaddtype:[],
        color:'',
        noofpieces:0,
        purposelists:[],
        purpose:[],
        costingwarp:'',
        costingweft:'',
        costingsize:[],
        samplesize:[],
        samplewarp:'',
        sampleweft:'',
        ref_version:'',
        ref_styleno:'',

        sample_color:'',
        sample_desc:'',
        sample_pieces:'',
        sample_placement:'',

        marker_bodygrain:'',
        marker_changesin:'',
        marker_color:'',
        marker_desc:'',
        marker_pieces:'',
        marker_placement:'',
        marker_ref_version:'',
        marker_repeat:'',
        marker_shrinkage:'',
        marker_width:'',

        baseStyleno:'',fabricDesc:'',fabricType:'',
        reference_version:[],
        reference_versionlists:[],
        pattern_styleno:[],
        pattern_stylenolists:[],
        swid:0,

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
        $('.patternclass').hide();
        $('.samclass').hide();
        $('.sampleclass').hide();
        $('.markerclass').hide();
        $('.valueaddclass').hide();
        this.getfilldropdownlists();

        if(this.props.match.params.swid!=undefined){
            this.setState({swid:this.props.match.params.swid})
            this.editdata(this.props.match.params.swid);
        }
        // $(document).on('click', '.edit', function() {
        //     $(this).parent().siblings('td.data').each(function() {
        //       var content = $(this).html();
        //       $(this).html('<input value="' + content + '" class="form-control"/>');
        //     });

        //     $(this).siblings('.save').show();
        //     $(this).siblings('.delete').hide();
        //     $(this).hide();
        //   });

        //   $(document).on('click', '.save', function() {

        //     $('input').each(function() {
        //       var content = $(this).val();
        //       $(this).html(content);
        //       $(this).contents().unwrap();
        //     });
        //     $(this).siblings('.edit').show();
        //     $(this).siblings('.delete').show();
        //     $(this).hide();

        //   });


        //   $(document).on('click', '.delete', function() {
        //     $(this).parents('tr').remove();
        //   });

        //   $('.add').click(function() {
        //     $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');
        //   });
    }

    editdata(id){
        api.get('SingleWindowRequestheader/GetSinGleWindowheaderList?IdRequestNo='+id)
            .then((response) => {

                let data = response.data.data[0];

                this.setState({ buyer: [{value:data.buyCode,label:data.buyerName}],buyerdiv: [{value:data.buyDivCode,label:data.buyDivCode}],season: [{value:data.seasonCode,label:data.seasonName}],year: [{value:data.seasonYear,label:data.seasonYear}],baseStyleno:data.baseStyleno,fabricDesc:data.fabricDesc,fabricType:data.fabricType,
                    purpose: [{value:data.purpose,label:data.purpose}],
                    reqtype: [{value:data.reqType,label:data.reqType}],
                    styleno: [{value:data.styleNo,label:data.styleNo}],
                    fit:[{value:data.fit,label:data.fit}]
                });
            })
            .catch(error => {
                // error handling
            })

        api.get('SingleWindowRequestheader/GetSinGleWindowPatternList?IdRequestNo='+id)
            .then((response) => {

                let data = response.data.data[0];

                this.setState({buyerdiv: [{value:data.buyDivcode,label:data.buyerDivName}],
                    samplewarp:data.samShrWarp,
                    sampleweft:data.samShrWeft,
                    costingwarp:data.costShrWarp,
                    costingweft:data.costShrWeft,
                    samplesize: [{value:data.samSize,label:data.samSize}],
                    costingsize: [{value:data.costSize,label:data.costSize}],
                    bodygrain: [{value:data.bodyGrain,label:data.bodyGrain}],
                    addoninfo: [{value:data.addOnInfo,label:data.addOnInfo}],
                    job: [{value:data.natureOfJob,label:data.natureOfJob}],

                });
            })
            .catch(error => {
                // error handling
            })

        api.get('SingleWindowRequestheader/GetSinGleWindowSampleList?IdRequestNo='+id)
            .then((response) => {

                let data = response.data.data[0];
                this.setState({sampleaddmoredata:response.data.data,samplewarp:data.expDeliDate,
                    prepseq: [{value:data.prepSeq,label:data.prepSeq}],

                });
            })
            .catch(error => {
                // error handling
            })

        api.get('SingleWindowRequestheader/GetSinGleWindowValueAddList?IdRequestNo='+id)
            .then((response) => {

                let data = response.data.data[0];
                this.setState({valueaddaddmoredata:response.data.data
                });
            })
            .catch(error => {
                // error handling
            })

        api.get('SingleWindowRequestheader/GetSinGleWindowSamReqList?IdRequestNo='+id)
            .then((response) => {

                let data = response.data.data[0];
                this.setState({samaddmoredata:response.data.data
                });
            })
            .catch(error => {
                // error handling
            })



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

            // Miscellaneous/GetMiscellaneousList?MType
        api.get('Purpose/GetPurposeList?PType=JOB')
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
    };



    setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
        if(event.length!=0){
            fields[name] = event[0].value;
            this.setState({fields});



            if(name=="reqtype"){

                $('.patternclass').hide();
                $('.samclass').hide();
                $('.sampleclass').hide();
                $('.markerclass').hide();
                $('.valueaddclass').hide();

                event.forEach(element => {

                    if(element.value=="PATTERN"){
                        $('.patternclass').show();
                    }
                    if(element.value=="SAM"){
                        $('.samclass').show();
                    }
                    if(element.value=="SAMPLE"){
                        $('.sampleclass').show();
                    }
                    if(element.value=="VALUEADD"){
                        $('.valueaddclass').show();
                    }
                    if(element.value=="MARKER"){
                        $('.markerclass').show();
                    }

                });



            }



        } else{
            if(name=="reqtype"){
                $('.patternclass').hide();
                $('.samclass').hide();
                $('.sampleclass').hide();
                $('.markerclass').hide();
                $('.valueaddclass').hide();
            }
            fields[name] = '';
            this.setState({fields});
        }

        this.setState({ [name]: event });

        if(name=="buyer" || name=="buyerdiv" || name=="season" || name=="year" || name=="styleno" || name=="reqtype"){
            setTimeout(() => {
                this.getrefversionno();
            }, 100);
        }

        if(name=="buyer" || name=="buyerdiv" || name=="season" || name=="year" ){

            setTimeout(() => {

                this.getstyleno();
            }, 100);
        }

        if(name=="styleno"){

            setTimeout(() => {
                // console.log(this.state.styleno[0].label.split('-'),'6666666')
                this.stylenochange();
            }, 100);
        }

    };


    getstyleno(){
        this.setState({styleno:[],stylenolists:[]});
        if(this.state.buyer.length>0 && this.state.buyerdiv.length>0 && this.state.season.length>0 && this.state.year.length>0){

            api.get('SingleWindowRequestheader/GetStyleNoDropDown?Buyer='+this.state.buyer[0].value+'&BuyDivCode='+this.state.buyerdiv[0].value+'&Seasoncode='+this.state.season[0].value+'&SeasonYear='+this.state.year[0].value)
                .then((response) => {
                    let datas = response.data.data;
                    this.setState({stylenolists:datas});
                })
                .catch(error => {
                    // error handling
                })
        }
    }

    stylenochange(){

        if(this.state.styleno.length>0){
            this.setState({baseStyleno:'',fabricDesc:'',fabricType:''});
            api.get('StyleHeader/GetStyleHeaderList?SID='+this.state.styleno[0].value)
                .then((response) => {
                    let datas = response.data.data[0];
                    this.setState({baseStyleno:datas.baseStyleno,fabricDesc:datas.fabricDesc,fabricType:datas.fabricType});
                })
                .catch(error => {
                    // error handling
                })
        }
    }

    getrefversionno(){
        this.setState({reference_versionlists:[],reference_version:[],pattern_stylenolists:[],pattern_styleno:[]});
        if(this.state.styleno.length>0 && this.state.buyer.length>0 && this.state.buyerdiv.length>0 && this.state.season.length>0 && this.state.year.length>0){

            api.get('SingleWindowRequestheader/GetRefVersion?Buyer='+this.state.buyer[0].value+'&BuyerDiv='+this.state.buyerdiv[0].value+'&season='+this.state.season[0].value+'&syear='+this.state.year[0].value+'&StyleNumber='+this.state.styleno[0].value)
                .then((response) => {
                    // let datas = response.data.data[0];
                    this.setState({reference_versionlists:response.data.data});
                })
                .catch(error => {
                    // error handling
                })
        }

        if(this.state.buyer.length>0 && this.state.buyerdiv.length>0 && this.state.season.length>0  && this.state.year.length>0){

            api.get('SingleWindowRequestheader/GetStyleNumber?Buyer='+this.state.buyer[0].value+'&BuyerDiv='+this.state.buyerdiv[0].value+'&season='+this.state.season[0].value+'&syear='+this.state.year[0].value)
                .then((response) => {
                    // let datas = response.data.data[0];
                    this.setState({pattern_stylenolists:response.data.data});
                })
                .catch(error => {
                    // error handling
                })
        }

    }

    save () {
        console.log(this.state,'-----------------------')


        if(this.state.buyer.length>0){

            let job="";
            
            if(this.state.job.length>0){
                job=this.state.job[0].value;
            }

            let bodygrain="";
            
            if(this.state.bodygrain.length>0){
                bodygrain=this.state.bodygrain[0].value;
            }

            let addoninfo="";
            
            if(this.state.addoninfo.length>0){
                addoninfo=this.state.addoninfo[0].value;
            }

            let sample_size="";
            
            if(this.state.sample_size.length>0){
                sample_size=this.state.sample_size[0].value;
            }

            let markerfor="";
            
            if(this.state.markerfor.length>0){
                markerfor=this.state.markerfor[0].value;
            }

            let prepseq="";
            
            if(this.state.prepseq.length>0){
                prepseq=this.state.prepseq[0].value;
            }

            let sampletype="";
            
            if(this.state.sampletype.length>0){
                sampletype=this.state.sampletype[0].value;
            }
            
            
            

            let patterndata ={};
            let markerdata ={};
            let sampledata ={};
            let samdata ={};
            let valueadddata ={};
            let reqtypedata = [];
            this.state.reqtype.forEach(element => {

                let newdata =   {
                    "id": 0,
                    "swH_Id": this.state.swid,
                    "reqType": element.value,
                    "createdBy": "string",
                    "createdDt": "2021-11-16T05:00:55.509Z",
                    "modifyBy": "string",
                    "modifyDt": "2021-11-16T05:00:55.509Z",
                    "hostName": "string"
                };

                reqtypedata.push(newdata);


                if(element.value=="PATTERN"){
                    patterndata ={
                        "id": 0,
                        "swH_Id": this.state.swid,
                        "verRef": "string",
                        "bodyGrain": bodygrain,
                        "addOnInfo": addoninfo,
                        "samShr": "s",
                        "samShrWarp": this.state.samplewarp,
                        "samShrWeft":  this.state.sampleweft,
                        //   "samNilShr":  "string",
                        "costShr": "s",
                        "costShrWarp":  this.state.costingwarp,
                        "costShrWeft": this.state.costingweft,
                        //   "costNilShr": "string",
                        "SamSize":sample_size,
                        "CostSize":sample_size,
                        // "size": "string",
                        "createdBy": "string",
                        "createdDt": "2021-11-16T05:00:55.509Z",
                        "modifyBy": "string",
                        "modifyDt": "2021-11-16T05:00:55.509Z",
                        "hostName": "string",
                        "swPatternDetEntityModel": [
                            {
                                "id": 0,
                                "swH_Id": this.state.swid,
                                "natureOfJob": job,
                                "cancel": "s",
                                "createdBy": "string",
                                "createdDt": "2021-11-16T05:00:55.509Z",
                                "modifyBy": "string",
                                "modifyDt": "2021-11-16T05:00:55.509Z",
                                "hostName": "string"
                            }
                        ]
                    }
                }
                //  else{
                //     patterndata ={
                //         "id": 0,
                //         "swH_Id": this.state.swid,
                //         "verRef": "string",
                //         "bodyGrain": "string",
                //         "addOnInfo": "string",
                //         "samShr": "s",
                //         "samShrWarp": 0,
                //         "samShrWeft": 0,
                //         "costShr": "s",
                //         "costShrWarp": 0,
                //         "costShrWeft": 0,
                //         "samSize": "string",
                //         "costSize": "string",
                //         "createdBy": "string",
                //         "createdDt": "2021-11-18T12:07:22.603Z",
                //         "modifyBy": "string",
                //         "modifyDt": "2021-11-18T12:07:22.603Z",
                //         "hostName": "string",
                //         "swPatternDetEntityModel": [
                //           {
                //             "id": 0,
                //             "swH_Id": this.state.swid,
                //             "natureOfJob": "string",
                //             "cancel": "s",
                //             "createdBy": "string",
                //             "createdDt": "2021-11-18T12:07:22.603Z",
                //             "modifyBy": "string",
                //             "modifyDt": "2021-11-18T12:07:22.603Z",
                //             "hostName": "string"
                //           }
                //         ]
                //       }
                // }


                if(element.value=="MARKER"){
                    markerdata = {
                        "id": 0,
                        "swH_Id": this.state.swid,
                        "verRef": "string",
                        "changesIn": this.state.marker_changesin,
                        "bodyGrain": this.state.marker_bodygrain,
                        "shrinkage": this.state.marker_shrinkage,
                        "markerFor": markerfor,
                        "createdBy": "string",
                        "createdDt": "2021-11-16T05:00:55.509Z",
                        "modifyBy": "string",
                        "modifyDt": "2021-11-16T05:00:55.509Z",
                        "hostName": "string",
                        "swMarkerDetEntityModel":
                        this.state.markeraddmoredata

                    }
                }

                // else{
                //     markerdata ={
                //         "id": 0,
                //         "swH_Id": this.state.swid,
                //         "verRef": "string",
                //         "changesIn": "string",
                //         "bodyGrain": "string",
                //         "shrinkage": "string",
                //         "markerFor": "string",
                //         "createdBy": "string",
                //         "createdDt": "2021-11-18T12:07:22.603Z",
                //         "modifyBy": "string",
                //         "modifyDt": "2021-11-18T12:07:22.603Z",
                //         "hostName": "string",
                //         "swMarkerDetEntityModel": [
                //           {
                //             "id": 0,
                //             "swH_Id": this.state.swid,
                //             "matType": "string",
                //             "description": "string",
                //             "placement": "string",
                //             "color": "string",
                //             "size": "string",
                //             "pcs": 0,
                //             "width": "string",
                //             "repeat": "string",
                //             "baseMarker": "s",
                //             "cancel": "s",
                //             "createdBy": "string",
                //             "createdDt": "2021-11-18T12:07:22.603Z",
                //             "modifyBy": "string",
                //             "modifyDt": "2021-11-18T12:07:22.603Z",
                //             "hostName": "string"
                //           }
                //         ]
                //       }
                // }


                if(element.value=="SAMPLE"){
                    sampledata = {
                        "id": 0,
                        "swH_Id": this.state.swid,
                        "verRef": "string",
                        "expDeliDate": this.state.selectedDate,
                        "prepSeq": prepseq,
                        "sampleType": sampletype,
                        "totPcs": 0,
                        "createdBy": "string",
                        "createdDt": "2021-11-16T05:00:55.509Z",
                        "modifyBy": "string",
                        "modifyDt": "2021-11-16T05:00:55.509Z",
                        "hostName": "string",
                        "swSampleDetEntityModel":
                        this.state.sampleaddmoredata


                    }
                }

                // else {
                //     sampledata ={
                //         "id": 0,
                //         "swH_Id": this.state.swid,
                //         "verRef": "string",
                //         "expDeliDate": "2021-11-18T12:07:22.603Z",
                //         "prepSeq": "string",
                //         "sampleType": "string",
                //         "totPcs": 0,
                //         "createdBy": "string",
                //         "createdDt": "2021-11-18T12:07:22.603Z",
                //         "modifyBy": "string",
                //         "modifyDt": "2021-11-18T12:07:22.603Z",
                //         "hostName": "string",
                //         "swSampleDetEntityModel": [
                //           {
                //             "id": 0,
                //             "swH_Id": this.state.swid,
                //             "matType": "string",
                //             "matDesc": "string",
                //             "placement": "string",
                //             "color": "string",
                //             "size": "string",
                //             "pcs": 0,
                //             "cancel": "s",
                //             "createdBy": "string",
                //             "createdDt": "2021-11-18T12:07:22.603Z",
                //             "modifyBy": "string",
                //             "modifyDt": "2021-11-18T12:07:22.603Z",
                //             "hostName": "string"
                //           }
                //         ]
                //       }
                // }


                if(element.value=="SAM"){
                    samdata =this.state.samaddmoredata;
                }
                // else{
                //     samdata =[
                //         {
                //           "id": 0,
                //           "swH_Id": this.state.swid,
                //           "optionType": "string",
                //           "baseSAM": "s",
                //           "cancel": "s",
                //           "createdBy": "string",
                //           "createdDt": "2021-11-18T12:07:22.603Z",
                //           "modifyBy": "string",
                //           "modifyDt": "2021-11-18T12:07:22.603Z",
                //           "hostName": "string"
                //         }
                //       ]
                // }



                if(element.value!="VALUEADD"){
                    valueadddata =this.state.valueaddaddmoredata;
                }
                // else{
                //     valueadddata =[
                //         {
                //           "id": 0,
                //           "swH_Id": this.state.swid,
                //           "valueAdd": "string",
                //           "valueAddType": "string",
                //           "valueAddDesc": "string",
                //           "color": "string",
                //           "pcs": 0,
                //           "typeOfGarment": "string",
                //           "cancel": "s",
                //           "createdBy": "string",
                //           "createdDt": "2021-11-18T12:07:22.603Z",
                //           "modifyBy": "string",
                //           "modifyDt": "2021-11-18T12:07:22.603Z",
                //           "hostName": "string"
                //         }
                //       ]
                // }
            });

            let stylenosplit = this.state.styleno[0].label.split('-');
            let data ={
                "id": this.state.swid,
                "entityId": "st",
                "buyCode": this.state.buyer[0].value,
                "buyDivcode": this.state.buyerdiv[0].value,
                "seasonCode": this.state.season[0].value,
                "seasonYear": this.state.year[0].value,
                "styleNo": stylenosplit[0],//this.state.styleno[0].value,
                "masterStyle": stylenosplit[1],
                "baseStyleno": this.state.baseStyleno,
                "unitCode": "string",
                "reqNo": "string",
                "reqDate": "2021-11-16T05:00:55.509Z",
                "fit":  this.state.fit[0].value,
                "purpose": this.state.purpose[0].label,
                "fabricDesc": this.state.fabricDesc,
                "fabricType": this.state.fabricType,
                "cancel": "s",
                "createdBy": "string",
                "createdDt": "2021-11-16T05:00:55.509Z",
                "modifyBy": "string",
                "modifyDt": "2021-11-16T05:00:55.509Z",
                "hostName": "string",
                "singleWindowDetEntityModel": reqtypedata,
                // "swPatternHeadEntityModel": patterndata,
                // "swSampleHeadEntityModel": sampledata,
                // "swMarkerHeadEntityModel":markerdata,
                // "swValueAddEntityModel":
                // valueadddata
                // ,
                "swsamReqEntityModel":
                samdata

            };
            console.log(data,'datadatadata')

            api.post('SingleWindowRequestheader/SaveSingleWindowRequestDetails',data) .then((response) => {
                // this.getMenulists();
                NotificationManager.success('Saved Sucessfully');
                window.location.href = "/#/app/pre-production/request-grid";
                this.setState( {
                    // edit_add:false,
                    // menuId:0,
                    // parent_menu_id:[],
                    // module:[],
                    // menu_type:[],
                    // menuname:'',
                    // menuurl:'',
                    // menudesc:'',
                    // active_status:'',
                    // isparent:'',
                    // displayindex:''
                });
            })
                .catch(error => {
                    // error handling
                })

        } else{
            NotificationManager.error('Please Select Buyer');

        }


    }

    getBuyerDivision1(val,field,e){
        let fields = this.state.fields;
        this.setState({ buyerdivlists: [],buyerdiv:[]  });
        if(val.buyer.length!=0){
            fields['buyer'] = val.buyer[0].value;
            this.setState({fields});

            this.setState({ buyer: val.buyer });
            api.get('BuyerDivision/GetBuyerDivisionList?BuyerID='+val.buyer[0].value)
                .then((response) => {
                    this.setState({ buyerdivlists: response.data.result.data });
                })
                .catch(error => {})

        } else{
            fields['buyer'] = '';
            this.setState({fields});
        }

        // fields['buyer'] = val.buyer[0].value;
        // this.setState({fields});


    }

    getvalueaddtype(val,field,e){
        let fields = this.state.fields;
        this.setState({ valueaddtypelists: [] });
        if(val.valueadd.length!=0){
            fields['valueadd'] = val.valueadd[0].value;
            this.setState({fields});

            this.setState({ valueadd: val.valueadd });

            api.get('Miscellaneous/GetMiscellaneousList?MType='+val.valueadd[0].value)
                .then((response) => {

                    this.setState({ valueaddtypelists: response.data.result.data });
                })
                .catch(error => {
                    // error handling
                })



        } else{
            fields['valueadd'] = '';
            this.setState({fields});
        }

        // fields['buyer'] = val.buyer[0].value;
        // this.setState({fields});


    }



    contactSubmit(e,type){
        e.preventDefault();
        if(this.handleValidation()){
            this.save();
        }else{
            //   alert("Form has errors.")
            NotificationManager.error('Form has errors');
        }

    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        console.log(fields)
        //Name
        if(!fields["buyer"]){
            formIsValid = false;
            errors["buyer"] = "Cannot be empty";
        }

        //buyerdiv
        if(!fields["buyerdiv"]){
            formIsValid = false;
            errors["buyerdiv"] = "Cannot be empty";
        }
        //season
        if(!fields["season"]){
            formIsValid = false;
            errors["season"] = "Cannot be empty";
        }

        //year
        if(!fields["year"]){
            formIsValid = false;
            errors["year"] = "Cannot be empty";
        }

        //styleno
        if(!fields["styleno"]){
            formIsValid = false;
            errors["styleno"] = "Cannot be empty";
        }

        //reqtype
        if(!fields["reqtype"]){
            formIsValid = false;
            errors["reqtype"] = "Cannot be empty";
        }

        //purpose
        if(!fields["purpose"]){
            formIsValid = false;
            errors["purpose"] = "Cannot be empty";
        }

        //fit
        if(!fields["fit"]){
            formIsValid = false;
            errors["fit"] = "Fit Cannot be empty";
        }

        //stage
        if(!fields["stage"]){
            formIsValid = false;
            errors["stage"] = "Stage Cannot be empty";
        }






        // if(typeof fields["name"] !== "undefined"){
        //   if(!fields["name"].match(/^[a-zA-Z]+$/)){
        //     formIsValid = false;
        //     errors["name"] = "Only letters";
        //   }
        // }

        // //Email
        // if(!fields["email"]){
        //   formIsValid = false;
        //   errors["email"] = "Cannot be empty";
        // }

        // if(typeof fields["email"] !== "undefined"){
        //   let lastAtPos = fields["email"].lastIndexOf('@');
        //   let lastDotPos = fields["email"].lastIndexOf('.');

        //   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        //     formIsValid = false;
        //     errors["email"] = "Email is not valid";
        //   }
        // }



        this.setState({errors: errors});
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

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    ClickTechPack = () => {
        this.setState({ tpopen: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    };
    CloseTechPack= () => {
        this.setState({ tpopen: false });
    };

    rhandleClickOpen = () => {
        this.setState({ ropen: true });
    };

    rhandleClose = () => {
        this.setState({ ropen: false });
    };

    Clickclone = () => {
        this.setState({ cloneopen: true });
    }
    Closeclone= () => {
        this.setState({ cloneopen: false });
    };

    samaddmoresave(){
        const {samaddmoredata} = this.state;
        if(this.state.optionType!=''){
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
            this.setState({samaddmoredata:samaddmoredata})
            // this.state.samaddmoredata.push(data);
            this.setState({optionType:''})
            console.log(this.state.samaddmoredata,'this.state.samaddmoredata')
        }  else{
            NotificationManager.error('Please Enter all values');

        }

    }



    samaddmoredelete(item){
        const {samaddmoredata} = this.state;


        if (samaddmoredata.indexOf(item) !== -1) {
            samaddmoredata.splice(samaddmoredata.indexOf(item), 1);
        }
        this.setState({samaddmoredata:samaddmoredata})
        console.log(this.state.samaddmoredata,'samaddmoredata')


    }

    samaddmoreedit(item){
        const {samaddmoredata} = this.state;

        this.setState({optionType:item.optionType});
        if (samaddmoredata.indexOf(item) !== -1) {
            samaddmoredata.splice(samaddmoredata.indexOf(item), 1);
        }
        this.setState({samaddmoredata:samaddmoredata})
        console.log(this.state.samaddmoredata,'samaddmoredata')


    }


    valueaddaddmoresave(){
        console.log(this.state.valueadd,this.state.valueaddtype,'valueaddtypevalueaddtype')
        const {valueaddaddmoredata} = this.state;
        if(this.state.valueadd.length>0 || this.state.noofpieces!=0){
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
            this.setState({valueaddaddmoredata:valueaddaddmoredata})
            // this.state.valueaddaddmoredata.push(data);
            //   this.setState({valueadd:[],valueaddtype:[],noofpieces:0})
            this.setState({valueaddcolor:'',noofpieces:0})
            //   console.log(this.state.valueaddaddmoredata,'this.state.valueaddaddmoredata')
        }  else{
            NotificationManager.error('Please Enter all values');

        }

    }



    valueaddaddmoredelete(item){
        const {valueaddaddmoredata} = this.state;


        if (valueaddaddmoredata.indexOf(item) !== -1) {
            valueaddaddmoredata.splice(valueaddaddmoredata.indexOf(item), 1);
        }
        this.setState({valueaddaddmoredata:valueaddaddmoredata})
        console.log(this.state.valueaddaddmoredata,'valueaddaddmoredata')


    }

    valueaddaddmoreedit(item){
        const {valueaddaddmoredata} = this.state;

        this.setState({noofpieces:item.pcs,valueaddcolor:item.color,valueadd: [{value:item.valueAdd,label:item.valueAdd}],valueaddtype: [{value:item.valueAddType,label:item.valueaddtypeDesc}]});
        if (valueaddaddmoredata.indexOf(item) !== -1) {
            valueaddaddmoredata.splice(valueaddaddmoredata.indexOf(item), 1);
        }
        this.setState({valueaddaddmoredata:valueaddaddmoredata})
        console.log(this.state.valueaddaddmoredata,'valueaddaddmoredata')


    }




    markeraddmoresave(){
        console.log(this.state.marker,this.state.markertype,'markertypemarkertype')
        const {markeraddmoredata} = this.state;
        if(this.state.markerfor.length>0 ){
            let data =  {
                "id": 0,
                "swH_Id": this.state.swid,
                "matType": this.state.materialtype[0].value,
                "description": this.state.marker_desc,
                "placement":this.state.marker_placement,
                "color":this.state.marker_color,
                "size":this.state.size[0].value,
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
            this.setState({markeraddmoredata:markeraddmoredata})

            this.setState({marker_desc:'',marker_placement:'',marker_color:'',marker_pieces:'',marker_width:'',marker_repeat:''})
        }  else{
            NotificationManager.error('Please Enter all values');

        }

    }



    markeraddmoredelete(item){
        const {markeraddmoredata} = this.state;


        if (markeraddmoredata.indexOf(item) !== -1) {
            markeraddmoredata.splice(markeraddmoredata.indexOf(item), 1);
        }
        this.setState({markeraddmoredata:markeraddmoredata})


    }

    markeraddmoreedit(item){
        const {markeraddmoredata} = this.state;

        this.setState({noofpieces:item.pcs,markercolor:item.color,marker: [{value:item.marker,label:item.marker}],markertype: [{value:item.markerType,label:item.markertypeDesc}]});
        if (markeraddmoredata.indexOf(item) !== -1) {
            markeraddmoredata.splice(markeraddmoredata.indexOf(item), 1);
        }
        this.setState({markeraddmoredata:markeraddmoredata})


    }



    sampleaddmoresave(){

        const {sampleaddmoredata} = this.state;
        if(this.state.sample_materialtype.length>0 ){
            let data =  {
                "id": 0,
                "swH_Id": this.state.swid,
                "matType": this.state.sample_materialtype[0].value,
                "matDesc": this.state.sample_desc,
                "placement":this.state.sample_placement,
                "color":this.state.sample_color,
                "size":this.state.sample_size[0].value,
                "pcs": this.state.sample_pieces,
                "cancel": "s",
                "createdBy": "string",
                "createdDt": "2021-11-16T05:00:55.509Z",
                "modifyBy": "string",
                "modifyDt": "2021-11-16T05:00:55.509Z",
                "hostName": "string"
            }
            sampleaddmoredata.push(data);
            this.setState({sampleaddmoredata:sampleaddmoredata})

            this.setState({sample_desc:'',sample_placement:'',sample_color:'',sample_pieces:''})
        }  else{
            NotificationManager.error('Please Enter all values');

        }

    }



    sampleaddmoredelete(item){
        const {sampleaddmoredata} = this.state;


        if (sampleaddmoredata.indexOf(item) !== -1) {
            sampleaddmoredata.splice(sampleaddmoredata.indexOf(item), 1);
        }
        this.setState({sampleaddmoredata:sampleaddmoredata})


    }

    sampleaddmoreedit(item){
        const {sampleaddmoredata} = this.state;

        this.setState({sample_pieces:item.pcs,sample_color:item.color,sample_desc:item.matDesc,sample_placement:item.placement,sample_materialtype: [{value:item.matType,label:item.matType}],sample_size: [{value:item.size,label:item.size}]});
        if (sampleaddmoredata.indexOf(item) !== -1) {
            sampleaddmoredata.splice(sampleaddmoredata.indexOf(item), 1);
        }
        this.setState({sampleaddmoredata:sampleaddmoredata})


    }



    render() {
        const { employeePayroll,samaddmoredata,valueaddaddmoredata,markeraddmoredata,sampleaddmoredata,reqtype } = this.state;
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
            buyeroptions.push({value:item.buyerCode,label:item.buyerName});
        }

        const buyerdivoptions = [];
        for (const item of this.state.buyerdivlists) {
            buyerdivoptions.push({value:item.divisionCode,label:item.divisionName});
        }

        const yearoptions = [];
        for (const item of this.state.yearlists) {
            yearoptions.push({value:item.code,label:item.codeDesc});
        }

        const purposeoptions = [];
        for (const item of this.state.purposelists) {
            purposeoptions.push({value:item.parntslno,label:item.purpose});
        }


        const reqtypeoptions = [];
        for (const item of this.state.reqtypelists) {
            reqtypeoptions.push({value:item.code,label:item.codeDesc});
        }

        const bodygrainoptions = [];
        for (const item of this.state.bodygrainlists) {
            bodygrainoptions.push({value:item.code,label:item.codeDesc});
        }


        const joboptions = [];
        for (const item of this.state.joblists) {
            joboptions.push({value:item.purpose,label:item.purpose});
        }

        const addoninfooptions = [];
        for (const item of this.state.addoninfolists) {
            addoninfooptions.push({value:item.code,label:item.codeDesc});
        }

        const prepseqoptions = [];
        for (const item of this.state.prepseqlists) {
            prepseqoptions.push({value:item.code,label:item.codeDesc});
        }

        const reference_versionoptions = [];
        for (const item of this.state.reference_versionlists) {
            reference_versionoptions.push({value:item.id,label:item.patVersion});
        }

        const pattern_stylenooptions = [];
        for (const item of this.state.pattern_stylenolists) {
            pattern_stylenooptions.push({value:item.styleNo,label:item.styleNo});
        }


        const locationoptions = [];
        for (const item of this.state.locationlists) {
            locationoptions.push({value:item.locCode,label:item.locName});
        }

        const sizeoptions = [];
        for (const item of this.state.sizelists) {
            sizeoptions.push({value:item.sizecode,label:item.sizeIndex});
        }


        const fitoptions = [];
        for (const item of this.state.fitlists) {
            fitoptions.push({value:item.code,label:item.codeDesc});
        }

        const fabtypeoptions = [];
        for (const item of this.state.fabtypelists) {
            fabtypeoptions.push({value:item.code,label:item.codeDesc});
        }

        const stagedetailsoptions = [];
        for (const item of this.state.stagedetailslists) {
            stagedetailsoptions.push({value:item.code,label:item.codeDesc});
        }

        const seasonoptions = [];
        for (const item of this.state.seasonlists) {
            seasonoptions.push({value:item.seasonCode,label:item.seasonName});
        }


        const markerforoptions = [];
        for (const item of this.state.markerforlists) {
            markerforoptions.push({value:item.code,label:item.codeDesc});
        }

        const valueaddoptions = [];
        for (const item of this.state.valueaddlists) {
            valueaddoptions.push({value:item.code,label:item.codeDesc});
        }

        const valueaddtypeoptions = [];
        for (const item of this.state.valueaddtypelists) {
            valueaddtypeoptions.push({value:item.code,label:item.codeDesc});
        }


        const sampletypeoptions = [];
        for (const item of this.state.sampletypelists) {
            sampletypeoptions.push({value:item.code,label:item.codeDesc});
        }

        const stylenooptions = [];
        for (const item of this.state.stylenolists) {
            stylenooptions.push({value:item.id,label:item.refStyleNo+'-'+item.masterStyle});
        }

        const materialtypeoptions = [];
        for (const item of this.state.materialtypelists) {
            materialtypeoptions.push({value:item.mattype,label:item.matDesc});
        }



        return (

            <RctCollapsibleCard heading="Single Window">
                <PageTitleBar title="Menu" match={this.props.match} />
                <div  className={isActive ? "s-panel active" : 's-panel'}>
                    {/* { !isActive &&
                          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-10 text-white btn-icon nd-fom" tabindex="0" type="button"  onClick={handleToggle}><span className="MuiButton-label">Projection Details<i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                      }
                       { isActive &&
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-icon b-ic edit close-side" onClick={handleToggle1} tabindex="0" type="button" ><i className="zmdi zmdi-close"></i><span className="MuiTouchRipple-root"></span></button>
                         } */}
                    <div className="row new-form">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                            </div>
                        </div>
                        <div className="table-responsive mt-15">


                            <table className="table data w-100">
                                <thead>
                                <tr>
                                    <th className="w-25">Activity</th>
                                    <th className="w-25">Due By</th>
                                    <th className="w-25">Number</th>
                                    <th className="w-25 text-center">Actions  </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">666-666-666</td>
                                    <td className="text-center">
                                        {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                     <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                     <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

                                        <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                         <button className="edit">Edit</button>
                                         <button className="delete">Delete</button> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">666-666-666</td>
                                    <td className="text-center">
                                        {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                     <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                     <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

                                        <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                         <button className="edit">Edit</button>
                                         <button className="delete">Delete</button> */}
                                    </td>
                                </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>


                <div  className={isActive ? "s-panel-1 active" : 's-panel-1'}>
                    {/* { !isActive &&
                          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon nd-fom" tabindex="0" type="button"  onClick={handleToggle2}><span className="MuiButton-label">Order Specification <i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                      }
                       { isActive &&
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-icon b-ic edit close-side" onClick={handleToggle3} tabindex="0" type="button" ><i className="zmdi zmdi-close"></i><span className="MuiTouchRipple-root"></span></button>
                         } */}
                    <div className="row new-form">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                            <div className="form-group">
                                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                            </div>
                        </div>
                        <div className="table-responsive mt-15">


                            <table className="table data w-100">
                                <thead>
                                <tr>
                                    <th className="w-25">Activity</th>
                                    <th className="w-25">Due By</th>
                                    <th className="w-25">Number</th>
                                    <th className="w-25 text-center">Actions  </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">666-666-666</td>
                                    <td className="text-center">
                                        {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                     <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                     <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

                                        <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                         <button className="edit">Edit</button>
                                         <button className="delete">Delete</button> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="data">John Doe</td>
                                    <td className="data">johndoe@john.com</td>
                                    <td className="data">666-666-666</td>
                                    <td className="text-center">
                                        {/* <button class="MuiButtonBase-root MuiIconButton-root text-primary MuiIconButton-colorPrimary save" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>

                                     <button class="MuiButtonBase-root MuiIconButton-root text-success MuiIconButton-colorPrimary edit" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-edit"></i></span><span class="MuiTouchRipple-root"></span></button>

                                     <button class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary delete" tabindex="0" type="button" aria-label="Delete"><span class="MuiIconButton-label"><i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button> */}

                                        <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                        <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>

                                        {/* <button className="save">Save</button>
                                         <button className="edit">Edit</button>
                                         <button className="delete">Delete</button> */}
                                    </td>
                                </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12">
                        <div className="w-100">
                            <div className="float-right n-bt-top">

                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={this.Clickclone} ><span className="MuiButton-label">Clone <i className="zmdi zmdi-copy"></i></span><span className="MuiTouchRipple-root"></span></button>


                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button>

                                {(() => {

                                    if (this.state.swid == 0) {
                                        return (
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button"  onClick={(e) => this.contactSubmit(e)} ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                                        )
                                    }
                                    if (this.state.swid != 0) {
                                        return (
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button"  onClick={(e) => this.contactSubmit(e)} ><span className="MuiButton-label">Update <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                                        )
                                    }
                                })()}

                            </div>

                            <div className="clearfix"></div>

                            <Dialog open={this.state.cloneopen} onClose={this.Closeclone} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Clone</DialogTitle>
                                <DialogContent>
                                    <div className="col border">
                                        <div className="row no-f-mb">
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <select className="form-control select2 mt-15">
                                                        <option>Buyer</option>
                                                        <option>Levis</option>
                                                        <option>Allen</option>
                                                        <option>Solly</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <select className="form-control select2 mt-15">
                                                        <option>Buyer Division</option>
                                                        <option>Levis</option>
                                                        <option>Allen</option>
                                                        <option>Solly</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <select className="form-control select2 mt-15">
                                                        <option>Season</option>
                                                        <option>Autumn</option>
                                                        <option>Summer</option>
                                                        <option>Winter</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <select className="form-control select2 mt-15">
                                                        <option>Year</option>
                                                        <option>2021</option>
                                                        <option>2020</option>
                                                        <option>2019</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <TextField id="Buyer" fullWidth label="Style No" placeholder="Style No"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="contained" onClick={this.Closeclone} color="primary" className="text-white">
                                        Cancel
                                    </Button>
                                    <Button variant="contained" onClick={this.Closeclone} className="btn-info text-white">
                                        Ok
                                    </Button>
                                </DialogActions>
                            </Dialog>


                            <div className="w-100 border p-10 no-f-mb mt-5">
                                <div className="row">

                                    <div className="w-25 float-left">
                                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                            <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                                        </div>
                                    </div>
                                    <div className="w-75 float-left pr-15">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Buyer"
                                                        options={buyeroptions}
                                                        // onChange={this.setstatevaluedropdownfunction('buyer')}
                                                        onChange={values => this.getBuyerDivision1({ buyer:values },this,"buyer")}
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
                                                        createNewLabel="Style No"
                                                        options={stylenooptions}
                                                        onChange={this.setstatevaluedropdownfunction('styleno')}
                                                        placeholder="Style No"
                                                        values={this.state.styleno}
                                                    />
                                                    <span className="error">{this.state.errors["styleno"]}</span>
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Req no/ Date</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Autumn</MenuItem>
                            <MenuItem value={20}>Summer</MenuItem>
                            <MenuItem value={30}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        </div> */}
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <div className="w-100 float-left m-btop-10">
                                                        <FormControl>
                                                            <div class="item cursor-pointer mt-5"  onClick={this.ClickTechPack} ><span class="material-icons mr-10">attach_file</span><span>Tech Pack</span></div>
                                                            <span className="error">{this.state.errors["fit"]}</span>
                                                            <span className="error">{this.state.errors["stage"]}</span>
                                                            <Dialog open={this.state.tpopen} onClose={this.CloseTechPack} aria-labelledby="form-dialog-title">
                                                                <DialogTitle id="form-dialog-title">Tech Pack</DialogTitle>
                                                                <DialogContent>
                                                                    <div className="col border pb-10">
                                                                        <div className="row no-f-mb">

                                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                                                <div className="form-group select_label_name mt-15">
                                                                                    <Select1
                                                                                        dropdownPosition="auto"
                                                                                        //   multi
                                                                                        createNewLabel="Fit"
                                                                                        options={fitoptions}
                                                                                        onChange={this.setstatevaluedropdownfunction('fit')}
                                                                                        placeholder="Fit"
                                                                                        values={this.state.fit}
                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                                                <div className="form-group select_label_name mt-15">
                                                                                    <Select1
                                                                                        dropdownPosition="auto"
                                                                                        //   multi
                                                                                        createNewLabel="Stage"
                                                                                        options={stagedetailsoptions}
                                                                                        onChange={this.setstatevaluedropdownfunction('stage')}
                                                                                        placeholder="Stage"
                                                                                        values={this.state.stage}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                                                <div className="form-group">

                                                                                    <TextField id="versionno" value={this.state.versionno}  onChange={this.setstatevaluefunction('versionno')} fullWidth label="Version Number" placeholder="Version No"/>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12 mt-15">
                                                                                <div className="form-group">
                                                                                    <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </DialogContent>
                                                                <DialogActions>
                                                                    <Button variant="contained" onClick={this.CloseTechPack} color="primary" className="text-white">
                                                                        Cancel
                                                                    </Button>
                                                                    <Button variant="contained" onClick={this.CloseTechPack} className="btn-info text-white">
                                                                        Ok
                                                                    </Button>
                                                                </DialogActions>
                                                            </Dialog>
                                                        </FormControl>
                                                    </div>
                                                </div> </div>
                                            <div className="clearfix "></div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5">
                                                <div className="w-100 p-0 mt-5">
                                                    <label for="formFile" class="form-label float-left w-20 p-10">FIS</label>
                                                    <input class="form-control w-80 float-left" type="file" id="formFile"/>
                                                </div></div>

                                            <div className="clearfix"></div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5">
                                                <div className="w-100 p-0 mt-5 ">
                                                    <label for="formFile" class="form-label float-left w-20 p-10">BLOCK</label>
                                                    <input class="form-control w-80 float-left" type="file" id="formFile"/>
                                                </div>
                                            </div>
                                        </div></div></div>

                                <div className="w-100 col border mt-10 pb-10">
                                    <div className="row no-f-mb">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">
                                                <Select1
                                                    dropdownPosition="auto"
                                                    multi
                                                    createNewLabel="Req Type"
                                                    options={reqtypeoptions}
                                                    onChange={this.setstatevaluedropdownfunction('reqtype')}
                                                    placeholder="Req Type"
                                                    values={this.state.reqtype}
                                                />
                                                <span className="error">{this.state.errors["reqtype"]}</span>

                                            </div>

                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group select_label_name mt-15">
                                                <Select1
                                                    dropdownPosition="auto"
                                                    //   multi
                                                    createNewLabel="Purpose"
                                                    options={purposeoptions}
                                                    onChange={this.setstatevaluedropdownfunction('purpose')}
                                                    placeholder="Purpose"
                                                    values={this.state.purpose}
                                                />
                                                <span className="error">{this.state.errors["purpose"]}</span>
                                            </div>


                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                            <div className="form-group">
                                                <TextField id="baseStyleno" value={this.state.baseStyleno}  onChange={this.setstatevaluefunction('baseStyleno')} fullWidth label="Base Style" placeholder="Base Style"/>
                                            </div>


                                            {/* <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="baseStyleno-simple">Base Style</InputLabel>
                            <Select value={this.state.baseStyleno} onChange={this.handleChange}
                            inputProps={{ name: 'baseStyleno', id: 'baseStyleno-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Autumn</MenuItem>
                            <MenuItem value={20}>Summer</MenuItem>
                            <MenuItem value={30}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        </div> */}

                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <TextField id="fabricDesc" value={this.state.fabricDesc}  onChange={this.setstatevaluefunction('fabricDesc')} fullWidth label="Fabric composition" placeholder="Fabric composition"/>
                                            </div>

                                            {/* <div className="form-group">
                            <FormControl fullWidth>
                                <InputLabel htmlFor="age-simple">Fabric composition</InputLabel>
                                <Select value={this.state.age} onChange={this.handleChange}
                                inputProps={{ name: 'age', id: 'age-simple', }}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={10}>Autumn</MenuItem>
                                <MenuItem value={20}>Summer</MenuItem>
                                <MenuItem value={30}>Winter</MenuItem>
                                </Select>
                            </FormControl>
                            </div> */}
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <TextField id="fabricType" value={this.state.fabricType}  onChange={this.setstatevaluefunction('fabricType')} fullWidth label="Fabric Type(Pluid)" placeholder="Fabric Type(Pluid)"/>
                                            </div>

                                            {/* <div className="form-group">
                            <FormControl fullWidth>
                                <InputLabel htmlFor="age-simple">Fabric Type(Pluid)</InputLabel>
                                <Select value={this.state.age} onChange={this.handleChange}
                                inputProps={{ name: 'age', id: 'age-simple', }}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={10}>Autumn</MenuItem>
                                <MenuItem value={20}>Summer</MenuItem>
                                <MenuItem value={30}>Winter</MenuItem>
                                </Select>
                            </FormControl>
                        </div> */}

                                        </div>

                                        {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Wash Type</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Autumn</MenuItem>
                            <MenuItem value={20}>Summer</MenuItem>
                            <MenuItem value={30}>Winter</MenuItem>
                            </Select>
                        </FormControl>
                        </div>

                    </div>  */}
                                        {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group mt-15">
                        <TextField id="Buyer" fullWidth label="" placeholder=""/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group mt-15">
                        <TextField id="Buyer" fullWidth label="" placeholder=""/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="form-group mt-15">
                        <TextField id="Buyer" fullWidth label="" placeholder=""/>
                        </div>
                    </div> */}
                                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                            <Accordion className="border mb-15 mt-15 patternclass">
                                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                                    <div className="acc_title_font">
                                                        <Typography>Pattern</Typography>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {/* <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div> */}
                                                    <div className="clearfix"></div>
                                                    {/* <div className="row"> */}
                                                    {/* <div className="w-25">
                     <div className="">
                     <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                     </div>
                     </div> */}
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group mt-15">
                                                                <button type="button" class="btn btn-outline-primary" onClick={this.rhandleClickOpen}>Reference version <i class="zmdi zmdi-arrow-right-top"></i></button>
                                                                {/* <Button variant="contained" className="btn-secondary text-white btn-block" >Reference version</Button> */}
                                                                <Dialog open={this.state.ropen} onClose={this.rhandleClose} aria-labelledby="form-dialog-title">
                                                                    <DialogTitle id="form-dialog-title">Reference version</DialogTitle>
                                                                    <DialogContent>
                                                                        <div className="col border">
                                                                            <div className="row no-f-mb">
                                                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                                                    <div className="form-group select_label_name mt-15">
                                                                                        <Select1
                                                                                            dropdownPosition="auto"
                                                                                            //   multi
                                                                                            createNewLabel="Buyer"
                                                                                            options={buyeroptions}
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
                                                                                            options={buyerdivoptions}
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
                                                                                            //   multi
                                                                                            createNewLabel="Year"
                                                                                            options={yearoptions}
                                                                                            onChange={this.setstatevaluedropdownfunction('year')}
                                                                                            placeholder="Year"
                                                                                            values={this.state.year}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

                                                                                    <div className="form-group select_label_name mt-15">
                                                                                        <Select1
                                                                                            dropdownPosition="auto"
                                                                                            //   multi
                                                                                            createNewLabel="Style No"
                                                                                            options={pattern_stylenooptions}
                                                                                            onChange={this.setstatevaluedropdownfunction('pattern_styleno')}
                                                                                            placeholder="Style No"
                                                                                            values={this.state.pattern_styleno}
                                                                                        />
                                                                                    </div>

                                                                                    {/* <div className="form-group">
                                                    <TextField id="ref_styleno" value={this.state.ref_styleno}  onChange={this.setstatevaluefunction('ref_styleno')} fullWidth label="Style No" placeholder="Style No"/>
                                                    </div> */}
                                                                                </div>
                                                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                                                    <div className="form-group">
                                                                                        <TextField id="ref_version" value={this.state.ref_version}  onChange={this.setstatevaluefunction('ref_version')} fullWidth label="Version" placeholder="Version"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </DialogContent>
                                                                    <DialogActions>
                                                                        <Button variant="contained" onClick={this.rhandleClose} color="primary" className="text-white">
                                                                            Cancel
                                                                        </Button>
                                                                        <Button variant="contained" onClick={this.rhandleClose} className="btn-info text-white">
                                                                            Ok
                                                                        </Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                            </div>
                                                        </div>
                                                        {/*
                     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <FormControl fullWidth>
                                <InputLabel htmlFor="age-simple"> Reference version</InputLabel>
                                <Select value={this.state.age} onChange={this.handleChange}
                                inputProps={{ name: 'age', id: 'age-simple', }}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={10}>Autumn</MenuItem>
                                <MenuItem value={20}>Summer</MenuItem>
                                <MenuItem value={30}>Winter</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div> */}
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    //   multi
                                                                    createNewLabel="Body Grain"
                                                                    options={bodygrainoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('bodygrain')}
                                                                    placeholder="Body Grain"
                                                                    values={this.state.bodygrain}
                                                                />


                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    //   multi
                                                                    createNewLabel="Nature of Job"
                                                                    options={joboptions}
                                                                    onChange={this.setstatevaluedropdownfunction('job')}
                                                                    placeholder="Nature of Job"
                                                                    values={this.state.job}
                                                                />


                                                            </div>


                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    //   multi
                                                                    createNewLabel="Add on info"
                                                                    options={addoninfooptions}
                                                                    onChange={this.setstatevaluedropdownfunction('addoninfo')}
                                                                    placeholder="Add on info"
                                                                    values={this.state.addoninfo}
                                                                />


                                                            </div>




                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group mt-15">

                                                                <button type="button" class="btn btn-outline-primary" onClick={this.handleClickOpen}>Pattern for <i class="zmdi zmdi-arrow-right-top"></i></button>

                                                                {/* <Button variant="contained" className="btn-secondary text-white btn-block" >Pattern for</Button> */}
                                                                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                                                    <DialogTitle id="form-dialog-title">Pattern for</DialogTitle>
                                                                    <DialogContent>
                                                                        <div className="col border">
                                                                            <div className="row no-f-mb">

                                                                                <div className="col-lg-6">
                                                                                    <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
                                                                                        <div className="form-group">
                                                                                            <FormControlLabel control={<Checkbox color="primary" value="Sample" />} label="Sample" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
                                                                                        <div className="form-group">
                                                                                            <TextField id="samplewarp" value={this.state.samplewarp}  onChange={this.setstatevaluefunction('samplewarp')} fullWidth label="Warp %" placeholder="Warp %"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
                                                                                        <div className="form-group">
                                                                                            <TextField id="sampleweft" value={this.state.sampleweft}  onChange={this.setstatevaluefunction('sampleweft')} fullWidth label="Weft %" placeholder="Weft %"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
                                                                                        <div className="form-group select_label_name mt-15">
                                                                                            <Select1
                                                                                                dropdownPosition="auto"
                                                                                                // multi
                                                                                                createNewLabel="Size"
                                                                                                options={sizeoptions}
                                                                                                onChange={this.setstatevaluedropdownfunction('samplesize')}
                                                                                                placeholder="Size"
                                                                                                values={this.state.samplesize}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>


                                                                                <div className="col-lg-6">
                                                                                    <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
                                                                                        <div className="form-group">
                                                                                            <FormControlLabel control={<Checkbox color="primary" value="Costing" />} label="Costing" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
                                                                                        <div className="form-group">
                                                                                            <TextField id="costingwarp" value={this.state.costingwarp}  onChange={this.setstatevaluefunction('costingwarp')} fullWidth label="Warp %" placeholder="Warp %"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
                                                                                        <div className="form-group">
                                                                                            <TextField id="costingweft" value={this.state.costingweft}  onChange={this.setstatevaluefunction('costingweft')} fullWidth label="Weft %" placeholder="Weft %"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
                                                                                        <div className="form-group select_label_name mt-15">
                                                                                            <Select1
                                                                                                dropdownPosition="auto"
                                                                                                // multi
                                                                                                createNewLabel="Size"
                                                                                                options={sizeoptions}
                                                                                                onChange={this.setstatevaluedropdownfunction('costingsize')}
                                                                                                placeholder="Size"
                                                                                                values={this.state.costingsize}
                                                                                            />
                                                                                        </div>
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
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="form-group">
                <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Pattern Type</InputLabel>
                    <Select value={this.state.age} onChange={this.handleChange}
                    inputProps={{ name: 'age', id: 'age-simple', }}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Autumn</MenuItem>
                    <MenuItem value={20}>Summer</MenuItem>
                    <MenuItem value={30}>Winter</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div> */}
                                                        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

    <div className="form-group">
    <TextField id="Buyer" fullWidth label="Storage Area" placeholder="Storage Area"/>
    </div>

        </div> */}
                                                        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group">
    <FormControl fullWidth>
        <InputLabel htmlFor="age-simple">Done by</InputLabel>
        <Select value={this.state.age} onChange={this.handleChange}
        inputProps={{ name: 'age', id: 'age-simple', }}>
        <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value={10}>Autumn</MenuItem>
        <MenuItem value={20}>Summer</MenuItem>
        <MenuItem value={30}>Winter</MenuItem>
        </Select>
    </FormControl>
    </div>
     </div> */}
                                                        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group">
    <FormControl fullWidth>
        <InputLabel htmlFor="age-simple">Checked by</InputLabel>
        <Select value={this.state.age} onChange={this.handleChange}
        inputProps={{ name: 'age', id: 'age-simple', }}>
        <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value={10}>Autumn</MenuItem>
        <MenuItem value={20}>Summer</MenuItem>
        <MenuItem value={30}>Winter</MenuItem>
        </Select>
    </FormControl>
    </div>
     </div> */}
                                                        {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group ">
 <TextField id="Buyer" fullWidth label="Date" placeholder="Date"/>
 </div>
     </div>
     <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
     <div className="form-group ">
 <TextField id="Buyer" fullWidth label="Time" placeholder="Time"/>
 </div>
     </div> */}
                                                        {/* </div> */}

                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion className="border mb-15 mt-15 sampleclass">
                                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                                    <div className="acc_title_font">
                                                        <Typography>Sample</Typography>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {/* <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div> */}
                                                    <div className="clearfix"></div>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    //   multi
                                                                    createNewLabel="Reference Version"
                                                                    options={reference_versionoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('reference_version')}
                                                                    placeholder="Reference Version"
                                                                    values={this.state.reference_version}
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12">

                                                            <Fragment>
                                                                <div className="rct-picker">
                                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                        <KeyboardDatePicker
                                                                            disableToolbar
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

                                                            {/* <div className="form-group">
                <TextField id="Buyer" fullWidth label="Expected delivery date" placeholder="Expected delivery date"/>
                </div> */}
                                                        </div>
                                                        <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    //   multi
                                                                    createNewLabel="Preparation sequence"
                                                                    options={prepseqoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('prepseq')}
                                                                    placeholder="Preparation sequence"
                                                                    values={this.state.prepseq}
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    //   multi
                                                                    createNewLabel="Material type"
                                                                    options={materialtypeoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('sample_materialtype')}
                                                                    placeholder="Material type"
                                                                    values={this.state.sample_materialtype}
                                                                />

                                                            </div>

                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="sample_desc" value={this.state.sample_desc}  onChange={this.setstatevaluefunction('sample_desc')}  fullWidth label="Description" placeholder="Description"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="sample_placement" value={this.state.sample_placement}  onChange={this.setstatevaluefunction('sample_placement')}  fullWidth label="Placement" placeholder="Placement"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="sample_color" value={this.state.sample_color}  onChange={this.setstatevaluefunction('sample_color')}  fullWidth label="Color" placeholder="Color"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    // multi
                                                                    createNewLabel="Size"
                                                                    options={sizeoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('sample_size')}
                                                                    placeholder="Size"
                                                                    values={this.state.sample_size}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="sample_pieces" value={this.state.sample_pieces}  onChange={this.setstatevaluefunction('sample_pieces')}  fullWidth label="Pieces" placeholder="Pieces"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    // multi
                                                                    createNewLabel="Sample type"
                                                                    options={sampletypeoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('sampletype')}
                                                                    placeholder="Sample type"
                                                                    values={this.state.sampletype}
                                                                />
                                                            </div>

                                                        </div>


                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

                                                        </div></div>
                                                    <div className="table-responsive mt-0">
                                                        <div className="w-20 float-right">
                                                            <div className="form-group">
                                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button" onClick={(e) =>this.sampleaddmoresave()}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                                                {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button> */}
                                                            </div>
                                                        </div>

                                                        <table className="table mt-10 data w-100 float-left">
                                                            <thead>
                                                            <tr>
                                                                <th className="w-25 text-center">Actions</th>
                                                                <th className="w-20">Material Type</th>
                                                                <th className="w-20">Description</th>
                                                                <th className="w-20">Placement</th>
                                                                <th className="">Color  </th>
                                                                <th className="">Size  </th>
                                                                <th className="">Pieces  </th>
                                                                <th className="w-20">Sample Type  </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {sampleaddmoredata.map((n,index) => {

                                                                return (

                                                                    <tr key={`list${index}`}>
                                                                        <td className="">


                                                                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" onClick={(e) =>this.sampleaddmoredelete(n)} tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                                            <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" onClick={(e) =>this.sampleaddmoreedit(n)} tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>

                                                                            {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}

                                                                        </td>
                                                                        <td className="data">{n.matType}</td>
                                                                        <td className="data">{n.matDesc}</td>
                                                                        <td className="data">{n.placement}</td>
                                                                        <td className="data">{n.color}</td>
                                                                        <td className="data">{n.size}</td>
                                                                        <td className="data">{n.pcs}</td>
                                                                        <td className="data"></td>
                                                                    </tr>
                                                                );
                                                            })}
                                                            {/* <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr>
                                     <tr>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                         <td>Demo </td>
                                     </tr> */}
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
                                                </AccordionDetails>
                                            </Accordion>


                                            <Accordion className="border mb-15 mt-15 markerclass">
                                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                                    <div className="acc_title_font">
                                                        <Typography>Marker</Typography>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {/* <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div> */}
                                                    <div className="clearfix"></div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_ref_version" value={this.state.marker_ref_version}  onChange={this.setstatevaluefunction('marker_ref_version')} fullWidth label="Reference version" placeholder="Reference version"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_changesin" value={this.state.marker_changesin}  onChange={this.setstatevaluefunction('marker_changesin')} fullWidth label="Changes In" placeholder="Changes In"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_bodygrain" value={this.state.marker_bodygrain}  onChange={this.setstatevaluefunction('marker_bodygrain')} fullWidth label="Body grain" placeholder="Body grain"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_shrinkage" value={this.state.marker_shrinkage}  onChange={this.setstatevaluefunction('marker_shrinkage')} fullWidth label="Shrinkage" placeholder="Shrinkage"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    //   multi
                                                                    createNewLabel="Marker for"
                                                                    options={markerforoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('markerfor')}
                                                                    placeholder="Marker for"
                                                                    values={this.state.markerfor}
                                                                />

                                                            </div>

                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    //   multi
                                                                    createNewLabel="Material type"
                                                                    options={materialtypeoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('materialtype')}
                                                                    placeholder="Material type"
                                                                    values={this.state.materialtype}
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_desc" value={this.state.marker_desc}  onChange={this.setstatevaluefunction('marker_desc')} fullWidth label="Description" placeholder="Description"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_placement" value={this.state.marker_placement}  onChange={this.setstatevaluefunction('marker_placement')} fullWidth label="Placement" placeholder="Placement"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_color" value={this.state.marker_color}  onChange={this.setstatevaluefunction('marker_color')} fullWidth label="Color" placeholder="Color"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    // multi
                                                                    createNewLabel="Size"
                                                                    options={sizeoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('size')}
                                                                    placeholder="Size"
                                                                    values={this.state.size}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_pieces" value={this.state.marker_pieces}  onChange={this.setstatevaluefunction('marker_pieces')} fullWidth label="Pieces" placeholder="Pieces"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_width" value={this.state.marker_width}  onChange={this.setstatevaluefunction('marker_width')} fullWidth label="Width" placeholder="Width"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="marker_repeat" value={this.state.marker_repeat}  onChange={this.setstatevaluefunction('marker_repeat')} fullWidth label="Repeat" placeholder="Repeat"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <FormControl fullWidth>
                                                                    <InputLabel htmlFor="basemarker-simple">Base marker</InputLabel>
                                                                    <Select value={this.state.basemarker} onChange={this.handleChange}
                                                                            inputProps={{ name: 'basemarker', id: 'basemarker-simple', }}>
                                                                        <MenuItem value=""><em>None</em></MenuItem>
                                                                        <MenuItem value={10}>Yes</MenuItem>
                                                                        <MenuItem value={20}>NO</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="table-responsive mt-0">
                                                        <div className="w-20 float-right">
                                                            <div className="form-group">
                                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button" onClick={(e) =>this.markeraddmoresave()}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                                                {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button> */}
                                                            </div>
                                                        </div>

                                                        <table className="table mt-10 data w-100 float-left">
                                                            <thead>
                                                            <tr>
                                                                <th className="w-25 text-center">Actions  </th>
                                                                {/* <th className="w-25">Marker For</th> */}
                                                                <th className="w-25">Material Type</th>
                                                                <th className="w-25">Description</th>
                                                                <th className="w-25">Placement</th>
                                                                <th className="w-25">Color  </th>
                                                                <th className="w-25">Size  </th>
                                                                <th className="w-25">Pieces  </th>
                                                                <th className="w-25">Width  </th>
                                                                <th className="w-25">Repeat  </th>
                                                                <th className="w-25">Base Marker  </th>

                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {markeraddmoredata.map((n,index) => {

                                                                return (

                                                                    <tr key={`list${index}`}>
                                                                        <td className="">


                                                                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" onClick={(e) =>this.markeraddmoredelete(n)} tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                                            <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" onClick={(e) =>this.markeraddmoreedit(n)} tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>

                                                                            {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                                                        </td>
                                                                        <td className="data">{n.matType}</td>
                                                                        <td className="data">{n.description}</td>
                                                                        <td className="data">{n.placement}</td>
                                                                        <td className="data">{n.color}</td>
                                                                        <td className="data">{n.size}</td>
                                                                        <td className="data">{n.pcs}</td>
                                                                        <td className="data">{n.width}</td>
                                                                        <td className="data">{n.repeat}</td>
                                                                        <td className="data">{n.baseMarker}</td>
                                                                    </tr>
                                                                );
                                                            })}
                                                            {/* <tr>
                                         <td>Demo </td>
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
                                         <td>Demo </td>
                                     </tr>
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
                                         <td>Demo </td>
                                     </tr> */}
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion className="border mb-15 mt-15 valueaddclass">
                                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                                    <div className="acc_title_font">
                                                        <Typography>Value Add </Typography>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {/* <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div> */}
                                                    <div className="clearfix"></div>
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    // multi
                                                                    createNewLabel="Value Add"
                                                                    options={valueaddoptions}
                                                                    // onChange={this.setstatevaluedropdownfunction('valueadd')}
                                                                    onChange={values => this.getvalueaddtype({ valueadd:values },this,"valueadd")}
                                                                    placeholder="Value Add"
                                                                    values={this.state.valueadd}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group select_label_name mt-15">
                                                                <Select1
                                                                    dropdownPosition="auto"
                                                                    // multi
                                                                    createNewLabel="Value Add Type"
                                                                    // options={valueaddtypeoptions}
                                                                    options={valueaddoptions}
                                                                    onChange={this.setstatevaluedropdownfunction('valueaddtype')}
                                                                    placeholder="Value Add Type"
                                                                    values={this.state.valueaddtype}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="valueaddcolor" value={this.state.valueaddcolor}  onChange={this.setstatevaluefunction('valueaddcolor')} fullWidth label="Color" placeholder="Color"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="noofpieces" value={this.state.noofpieces}  onChange={this.setstatevaluefunction('noofpieces')} fullWidth label="No of Pieces" placeholder="No of Pieces"/>
                                                            </div>
                                                        </div>

                                                        <div className="w-10">
                                                            <InputLabel htmlFor="age-simple" className="pl-15 pt-10">Ref Type :</InputLabel>
                                                        </div>

                                                        <div className="w-33 ml-15">
                                                            <RadioGroup row aria-label="anchorReference" name="anchorReference">
                                                                <div className="w-33">
                                                                    <FormControlLabel color="primary" value="sample" control={<Radio />} label="Sample" />
                                                                </div>
                                                                <div className="w-33">
                                                                    <FormControlLabel color="primary" value="mock" control={<Radio  />} label="Mock" />
                                                                </div>
                                                                <div className="w-33">
                                                                    <FormControlLabel color="primary" value="Reference" control={<Radio  />} label="Reference" />
                                                                </div>
                                                            </RadioGroup>
                                                        </div>

                                                    </div>

                                                    <div className="table-responsive mt-0">
                                                        <div className="w-20 float-right">
                                                            <div className="form-group">
                                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" onClick={(e) =>this.valueaddaddmoresave()}  type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                                                {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button> */}
                                                            </div>
                                                        </div>

                                                        <table className="table mt-10 data w-100 float-left">
                                                            <thead>
                                                            <tr>
                                                                <th className="w-25 text-center">Actions  </th>
                                                                <th className="w-25">Value Add</th>
                                                                <th className="w-25">Value Add Type</th>
                                                                <th className="w-25">Color</th>
                                                                <th className="w-25">No of pcs  </th>
                                                                <th className="w-25">Radio </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {valueaddaddmoredata.map((n,index) => {

                                                                return (

                                                                    <tr key={`list${index}`}>
                                                                        <td className="">


                                                                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" onClick={(e) =>this.valueaddaddmoredelete(n)} tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                                            <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" onClick={(e) =>this.valueaddaddmoreedit(n)} tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>

                                                                            {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                                                        </td>
                                                                        <td className="data">{n.valueAdd}</td>
                                                                        <td className="data">{n.valueaddtypeDesc}</td>
                                                                        <td className="data">{n.color}</td>
                                                                        <td className="data">{n.pcs}</td>
                                                                        <td className="data"></td>
                                                                    </tr>
                                                                );
                                                            })}

                                                            </tbody>

                                                        </table>
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>


                                            <Accordion className="border mb-15 mt-15 samclass">
                                                <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                                                    <div className="acc_title_font">
                                                        <Typography>SAM</Typography>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {/* <div className="float-right pr-0 but-tp">
                     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                     </div> */}
                                                    <div className="clearfix"></div>
                                                    <div className="row">

                                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                            <div className="form-group">
                                                                <TextField id="optionType" value={this.state.optionType}  onChange={this.setstatevaluefunction('optionType')} fullWidth label="Option type" placeholder="Option type"/>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="table-responsive mt-0">
                                                        <div className="w-20 float-right">
                                                            <div className="form-group">
                                                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" onClick={(e) =>this.samaddmoresave()} tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                                                {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button> */}
                                                            </div>
                                                        </div>

                                                        <table className="table mt-10 data w-100 float-left">
                                                            <thead>
                                                            <tr>
                                                                <th className="w-25 text-center">Actions  </th>
                                                                <th className="w-25">Option type</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {samaddmoredata.map((n,index) => {

                                                                return (

                                                                    <tr key={`list${index}`}>
                                                                        <td className="">


                                                                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" onClick={(e) =>this.samaddmoredelete(n)} tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                                            <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" onClick={(e) =>this.samaddmoreedit(n)} tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>

                                                                            {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                                                        </td>
                                                                        <td className="data">{n.optionType}</td>

                                                                    </tr>
                                                                );
                                                            })}
                                                            </tbody>

                                                        </table>
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

export default SinglewindowElement;
 