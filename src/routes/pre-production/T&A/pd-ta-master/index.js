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
        selectedDate: moment(),
        addNewUserModal: false,
        checkedA: true,
        buyerlists:[],
        buyerdivlists:[],
        filterbuyerdivlists:[],
        ordercategorylists:[],
        ordercategory:[],
        buyer:[],
        buyerdiv:[],
        departmentlists:[],
        department:[],
        stagelists:[],
        stage:[],
        activitytypelists:[],
        activitytype:[],
        fitlists:[],
        fit:[],
        categorylists:[],
        category:[],
        valueaddlists:[],
        valueadd:[],

        DpndOnActlists:[],
        DpndOnAct:[],
        DpndOnSubActlists:[],
        DpndOnSubAct:[],
        DpndDept:[],
        fields: {},
        errors: {},
        tamasteraddmoredata:[],
        activity:'',
        subactivity:'',
        days:'',
        swid:0,
        DpndCode:[],
        filterordercategory:[],
        filterbuyer:[],
        filterbuyerdiv:[],
        overalllists:[],
        edit_add:false,
        hid:0,
        actflag:false,
        dcodeflag:false,
        dactcodeflag:false,
        mactiveflag :"Y",
        alowskipflag:"N",
        activeflag:"Y"

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
        
        if(this.props.match.params.swid!=undefined){
            this.setState({swid:this.props.match.params.swid})
            this.editdata(this.props.match.params.swid);
        }
        
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
            this.setState({tamasteraddmoredata:response.data.data,samplewarp:data.expDeliDate,
                prepseq: [{value:data.prepSeq,label:data.prepSeq}],               
                
             });
        })
        .catch(error => {
            // error handling
        })

        api.get('SingleWindowRequestheader/GetSinGleWindowValueAddList?IdRequestNo=35')
        .then((response) => {
           
            let data = response.data.data[0];       
            this.setState({valueaddaddmoredata:response.data.data
             });
        })
        .catch(error => {
            // error handling
        })

        api.get('SingleWindowRequestheader/GetSinGleWindowSamReqList?IdRequestNo=43')
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

        

        api.get('Miscellaneous/GetMiscellaneousList?MType=ORDCATE')
        .then((response) => {
            
            this.setState({ ordercategorylists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

       
        api.get('Miscellaneous/GetMiscellaneousList?MType=DEPT')
        .then((response) => {
            
            this.setState({ departmentlists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=ORDSTAGE')
        .then((response) => {
            
            this.setState({ stagelists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })


        api.get('Miscellaneous/GetMiscellaneousList?MType=ACTTYPE')
        .then((response) => {
            
            this.setState({ activitytypelists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=FIT')
        .then((response) => {
            
            this.setState({ fitlists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=GUIDETYPE')
        .then((response) => {
            
            this.setState({ categorylists: response.data.result.data });
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
        

      }

      setstatevaluefunction = name => event => {
         
		this.setState({ [name]: event.target.value });

        if(name=="days"){
            if(!/^[0-9]+$/.test(event.target.value)){
                if(event.target.value=="" || event.target.value==0){

                } else{
                    NotificationManager.error('Please only enter numeric characters (Allowed input:0-9)');
                }
                
                this.setState({ [name]: 0 });                
            } else{
                this.setState({ [name]: event.target.value });
            }
            
        }

	};



      setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
        if(event.length!=0){
            fields[name] = event[0].value;        
            this.setState({fields});
            
        } else{
           
            fields[name] = '';        
            this.setState({fields});
        }
        
		this.setState({ [name]: event });
        this.setState({ actflag: false,dcodeflag:false });
        if(name=="activitytype"){            
            if(event.length!=0){
                if(event[0].value=="BUYER" || event[0].value=="BUYINT"){
                    this.setState({ actflag: true });
                } 
                
            } 
        }

        if(name=="DpndCode"){            
            if(event.length!=0){
                this.setState({ dcodeflag: true });                
            } 
        }

        

        

	};


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

                  
    }
    
    getBuyerDivision2(val,field,e){
        let fields = this.state.fields;
        this.setState({ filterbuyerdivlists: [],filterbuyerdiv:[]  });
        if(val.filterbuyer.length!=0){
            fields['filterbuyer'] = val.filterbuyer[0].value;        
            this.setState({fields});

            this.setState({ filterbuyer: val.filterbuyer });
            api.get('BuyerDivision/GetBuyerDivisionList?BuyerID='+val.filterbuyer[0].value)
            .then((response) => {                
                this.setState({ filterbuyerdivlists: response.data.result.data });
            })        
            .catch(error => {}) 
            
        } else{
            fields['filterbuyer'] = '';        
            this.setState({fields});
        }

                  
    }

    getDpndOnAct(val,field,e){
        let fields = this.state.fields;
        this.setState({ DpndOnActlists: [],DpndOnAct:[]  });
        if(val.DpndDept.length!=0){
            fields['DpndDept'] = val.DpndDept[0].value;        
            this.setState({fields});

            this.setState({ DpndDept: val.DpndDept });
            api.get('TNAMaster/GetDpndOnActForTNABuyer?Dept='+val.DpndDept[0].value)
            .then((response) => {                
                this.setState({ DpndOnActlists: response.data.data });
            })        
            .catch(error => {}) 
            
        } else{
            fields['DpndDept'] = '';        
            this.setState({fields});
        }                  
    }
    

    getalldata(){
        this.setState({overalllists:[]});
        if(this.state.filterbuyer.length>0 && this.state.filterbuyerdiv.length>0 && this.state.filterordercategory.length>0){

            api.get('TNAMaster/GetTNAMasterList?Buyer='+this.state.filterbuyer[0].value+'&BuyerDiv='+this.state.filterbuyerdiv[0].value+'&Ordercategory='+this.state.filterordercategory[0].value)
                .then((response) => {
                    let datas = response.data.data;
                    this.setState({overalllists:datas});
                })
                .catch(error => {
                    // error handling
                })
        } else{
            NotificationManager.error('All fields are required');
        }
    }

    getDpndOnSubAct(val,field,e){
        this.setState({ dactcodeflag: false });
        let fields = this.state.fields;
        this.setState({ DpndOnSubActlists: [],DpndOnSubAct:[]  });
        if(val.DpndOnAct.length!=0){
            this.setState({ dactcodeflag: true });
            fields['DpndOnAct'] = val.DpndOnAct[0].value;        
            this.setState({fields});

            this.setState({ DpndOnAct: val.DpndOnAct });
            api.get('TNAMaster/GetDpndOnSubActForTNABuyer?Activity='+val.DpndOnAct[0].label)
            .then((response) => {                
                this.setState({ DpndOnSubActlists: response.data.data });
            })        
            .catch(error => {}) 
            
        } else{
            fields['DpndOnAct'] = '';        
            this.setState({fields});
        }                  
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

           //department
        if(!fields["department"]){
            formIsValid = false;
            errors["department"] = "Cannot be empty";
          }

           //ordercategory
        if(!fields["ordercategory"]){
            formIsValid = false;
            errors["ordercategory"] = "Cannot be empty";
          }

              //stage
        // if(!fields["stage"]){
        //     formIsValid = false;
        //     errors["stage"] = "Cannot be empty";
        //   }

              //fit
        // if(!fields["fit"]){
        //     formIsValid = false;
        //     errors["fit"] = "Cannot be empty";
        //   }
      
        //activitytype
        // if(!fields["activitytype"]){
        //     formIsValid = false;
        //     errors["activitytype"] = "Cannot be empty";
        //   }

        //category
        // if(!fields["category"]){
        //     formIsValid = false;
        //     errors["category"] = "Cannot be empty";
        //   }

              //valueadd
        // if(!fields["valueadd"]){
        //     formIsValid = false;
        //     errors["valueadd"] = "Cannot be empty";
        //   }
    
    
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
   
    mactiveChangecheckbox(event) {
        if(this.state.mactiveflag=="Y"){
            this.setState({ mactiveflag:"N" });
        }else{
            this.setState({ mactiveflag:"Y" });
        }
    }

    alowskipChangecheckbox(event) {
        if(this.state.alowskipflag=="Y"){
            this.setState({ alowskipflag:"N" });
        }else{
            this.setState({ alowskipflag:"Y" });
        }
    }

    activeChangecheckbox(event) {
        if(this.state.activeflag=="Y"){
            this.setState({ activeflag:"N" });
        }else{
            this.setState({ activeflag:"Y" });
        }
    }
    
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



      
    sampleaddmoresave(){
        
          const {tamasteraddmoredata} = this.state;
          let DpndDept="";
          let DpndDeptlabel="";
          if(this.state.DpndDept.length>0){
              DpndDept=this.state.DpndDept[0].value;
              DpndDeptlabel=this.state.DpndDept[0].label;
          }

          let DpndOnAct="";
          let DpndOnActlabel="";
          if(this.state.DpndOnAct.length>0){
              DpndOnAct=this.state.DpndOnAct[0].value;
              DpndOnActlabel=this.state.DpndOnAct[0].label;
          }

          let DpndOnSubAct="";
          let DpndOnSubActlabel="";
          if(this.state.DpndOnSubAct.length>0){
              DpndOnSubAct=this.state.DpndOnSubAct[0].value;
              DpndOnSubActlabel=this.state.DpndOnSubAct[0].label;
          }


          let category="";
          let categorylabel="";
          if(this.state.category.length>0){
              category=this.state.category[0].value;
              categorylabel=this.state.category[0].label;
          }

          let valueadd="";
          let valueaddlabel="";
          if(this.state.valueadd.length>0){
              valueadd=this.state.valueadd[0].value;
              valueaddlabel=this.state.valueadd[0].label;
          }

          let DpndCode=0;
          let DpndCodelabel="";
          if(this.state.DpndCode.length>0){
              DpndCode=this.state.DpndCode[0].value;
              DpndCodelabel=this.state.DpndCode[0].label;
          }


          let activitytype="";
          
          if(this.state.activitytype.length>0){
              activitytype=this.state.activitytype[0].value;
          }

          let department="";
          
          if(this.state.department.length>0){
              department=this.state.department[0].value;
          }

          let stage="";
          
          if(this.state.stage.length>0){
              stage=this.state.stage[0].value;
          }

          let fit="";
          let fitlabel="";
          if(this.state.fit.length>0){
              fit=this.state.fit[0].value;
              fitlabel=this.state.fit[0].label;
          }


          let id=0;
          if(this.state.edit_add!=false){
            id=this.state.hid;
          } 
          if(this.state.buyer.length>0 && this.state.buyerdiv.length>0 && this.state.ordercategory.length>0){
            let data =  {
                "id": id,
                "buyCode": this.state.buyer[0].value,
                "buyName": this.state.buyer[0].label,
                "buydivCode": this.state.buyerdiv[0].value,
                "buydivName": this.state.buyerdiv[0].label,
                "orderCategory": this.state.ordercategory[0].value,
                "deptcode": department,
                "stage": stage,
                "activityType": activitytype,
                "fit": fit,
                "fitName": fitlabel,
                "actCode": 0,
                "activity": this.state.activity,
                "subActivity": this.state.subactivity,
                "tnaSeqNo": DpndCode,
                "duration": this.state.days,
                "dependActCode": DpndOnAct,
                "dependDeptCode": DpndDept,
                "dependDeptCodeName": DpndDeptlabel,
                "dependActvity1": DpndOnAct,
                "dependActvity": DpndOnActlabel,
                "dependActvityName": DpndOnActlabel,
                "dependSubActvity1": DpndOnSubAct,
                "dependSubActvity": DpndOnSubActlabel,
                "dependSubActvityName": DpndOnSubActlabel,
                "category": category,
                "valueAddtype": valueadd,
                "skipped": this.state.alowskipflag,
                "active": this.state.activeflag,
                "createdBy": "string",
                "modifyBy": "string",
                "hostname": "string",
                "mActive": this.state.mactiveflag
              }
                tamasteraddmoredata.push(data);
                this.setState({tamasteraddmoredata:tamasteraddmoredata});
                this.setState({stage:[],activitytype:[],fit:[],activity:'',subactivity:'',days:'',DpndDept:[],DpndOnAct:[],DpndOnSubAct:[],category:[],valueadd:[]})
                
          }  else{
            NotificationManager.error('Please Enter all values');
  
        }
       
      }
  
     
  
        sampleaddmoredelete(item){
            const {tamasteraddmoredata} = this.state;
  
            
                  if (tamasteraddmoredata.indexOf(item) !== -1) {
                      tamasteraddmoredata.splice(tamasteraddmoredata.indexOf(item), 1);
                  } 
               this.setState({tamasteraddmoredata:tamasteraddmoredata})
          
         
        }
  
        sampleaddmoreedit(item){
          const {tamasteraddmoredata} = this.state;
          this.setState({stage:[{value:item.stage,label:item.stage}],activitytype:[{value:item.activityType,label:item.activityType}],fit:[{value:item.fit,label:item.fitName}],
            activity:item.activity,subactivity:item.subActivity,days:item.duration,
            DpndDept:[{value:item.dependDeptCode,label:item.dependDeptCodeName}],
            DpndOnAct:[{value:item.dependActvity1,label:item.dependActvityName}],
            DpndOnSubAct:[{value:item.dependSubActvity1,label:item.dependSubActvityName}],
            category:[{value:item.category,label:item.category}],valueadd:[{value:item.valueAddtype,label:item.valueAddtype}]})
          
                if (tamasteraddmoredata.indexOf(item) !== -1) {
                    tamasteraddmoredata.splice(tamasteraddmoredata.indexOf(item), 1);
                } 
             this.setState({tamasteraddmoredata:tamasteraddmoredata})
        
       
      }

      save () {
        console.log(this.state,'-----------------------')
        

        if(this.state.buyer.length>0){
           
            
            let data ={"tnaMasterRecord":
            this.state.tamasteraddmoredata                
              };
console.log(data,'datadatadata')

            api.post('TNAMaster/SaveTNAMaster',data) .then((response) => {
                // this.getMenulists();
                NotificationManager.success('Saved Sucessfully');
                // window.location.href = "/#/app/pre-production/request-grid";
                this.setState({edit_add:false});
                this.setState( {
                 buyerdiv:[],buyer:[],ordercategory:[],department:[],stage:[],activitytype:[],fit:[],activity:'',subactivity:'',days:'',DpndDept:[],DpndOnAct:[],DpndOnSubAct:[],category:[],valueadd:[],tamasteraddmoredata:[]
                });
            })
            .catch(error => {
                // error handling
            })

        } else{
            NotificationManager.error('Please Select Buyer');

        }
                

      }
  
      edittnamaster(id){
       

        this.setState({edit_add:true});
          api.get('TNAMaster/GetTNAMasterListID?ID='+id)
          .then((response) => {
              
              let dataval = response.data.data;
              let data = response.data.data[0];
              this.setState({tamasteraddmoredata:dataval,buyer:[{value:data.buyCode,label:data.buyerCode}],buyerdiv:[{value:data.buydivCode,label:data.buyerDivName}],ordercategory:[{value:data.orderCategory,label:data.orderCategory}],department:[{value:data.deptcode,label:data.deptcode}] });

              this.setState({ hid: id });
          })
          .catch(error => {
              // error handling
          })
    }

     render() {
         const { employeePayroll,tamasteraddmoredata,actflag,dactcodeflag,dcodeflag ,mactiveflag,alowskipflag,activeflag} = this.state;
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


           const filterbuyerdivoptions = [];
           for (const item of this.state.filterbuyerdivlists) {           
            filterbuyerdivoptions.push({value:item.divisionCode,label:item.divisionName});
           }

           const DpndOnActoptions = [];
           for (const item of this.state.DpndOnActlists) {           
               DpndOnActoptions.push({value:item.id,label:item.activity});
           }

           const DpndOnSubActoptions = [];
           for (const item of this.state.DpndOnSubActlists) {           
               DpndOnSubActoptions.push({value:item.id,label:item.subActivity});
           }

           
           const departmentoptions = [];
           for (const item of this.state.departmentlists) {           
               departmentoptions.push({value:item.code,label:item.codeDesc});
           }


           const ordercategoryoptions = [];
           for (const item of this.state.ordercategorylists) {           
               ordercategoryoptions.push({value:item.code,label:item.codeDesc});
           }

           const stageoptions = [];
           for (const item of this.state.stagelists) {           
               stageoptions.push({value:item.code,label:item.codeDesc});
           }

           const activitytypeoptions = [];
           for (const item of this.state.activitytypelists) {           
               activitytypeoptions.push({value:item.code,label:item.codeDesc});
           }

           const fitoptions = [];
           for (const item of this.state.fitlists) {           
               fitoptions.push({value:item.code,label:item.codeDesc});
           }

           const categoryoptions = [];
           for (const item of this.state.categorylists) {           
               categoryoptions.push({value:item.code,label:item.codeDesc});
           }

           const valueaddoptions = [];
           for (const item of this.state.valueaddlists) {           
               valueaddoptions.push({value:item.code,label:item.codeDesc});
           }

           const DpndCodeoptions = [];
           let i=1;
           for (const item of this.state.tamasteraddmoredata) {           
               DpndCodeoptions.push({value:i,label:i});
               i++;
           }

           

            //console.log(this.state.overalllists)
        let buyerrightlistshtml = null;
        if(this.state.tamasteraddmoredata.length>0){
            buyerrightlistshtml= this.state.tamasteraddmoredata.map((n,index) => {                                    
            return (
                <tr>  
                <td>{index+1} </td>             
              <td className="text-center"> <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" onClick={(e) =>this.sampleaddmoredelete(n)} tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
              <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" onClick={(e) =>this.sampleaddmoreedit(n)} tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
               </td>
              <td>{n.stage} </td>
              <td>{n.activityType}</td>
              <td>{n.fitName}</td>
              <td>{n.activity}</td>
              <td>{n.subActivity}</td>
              <td>{n.duration}</td>                   
              <td>{n.tnaSeqNo}</td>
              <td>{n.dependDeptCodeName}</td>
              <td>{n.dependActvityName}</td>  
              <td>{n.dependSubActvityName}</td>
              <td>{n.category}</td>
              <td>{n.valueAddtype}</td>
              <td>{n.skipped}</td>
              <td>{n.active}</td>
                </tr>
            );
        }) }else{
            buyerrightlistshtml = <tr><td colSpan="16" className="no-records-data"><span>No records found</span></td></tr> ;
        }

        let overalllistshtml = null;
        if(this.state.overalllists.length>0){
            overalllistshtml= this.state.overalllists.map((n,index) => {                                    
            return (
                <tr>
                                     <td className="text-center">
                                          <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button> 
                                     <button className="MuiButtonBase-root mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" onClick={(e) =>this.edittnamaster(n.hid)}><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button></td>

                                         <td>{n.buyerCode} </td>
                                         <td>{n.buyerDivName} </td>
                                         <td>{n.orderCategory} </td>
                                         <td> </td>
                                         
                                         
                                        
                                     </tr>
            );
        }) }else{
            overalllistshtml = <tr><td colSpan="5" className="no-records-data"><span>No records found</span></td></tr> ;
        }
           
          return (
              
             <RctCollapsibleCard heading="">
                  <PageTitleBar title="Menu" match={this.props.match} />
                  <div >
                      
                  {/* className={isActive ? "s-panel active" : 's-panel'} */}
                  <Accordion className="border mb-15 mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Product Development T&A Master </Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails> 
                     <div className="float-right pr-0 but-tp">


<button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button>

{(() => {
                           
                           if (this.state.edit_add == false) {
                          return ( 
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={(e) =>this.contactSubmit(e)} ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                          )
                        }
                        if (this.state.edit_add != false) {
                            return ( <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" onClick={(e) =>this.contactSubmit(e)} ><span className="MuiButton-label">Update <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                            )
                          }
                    })()}
{/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.contactSubmit(e)}  ><span className="MuiButton-label">Save <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button> */}
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
                                  createNewLabel="Department"
                                  options={departmentoptions}
                                  onChange={this.setstatevaluedropdownfunction('department')}
                                  placeholder="Department"
                                  values={this.state.department}
                                  />
                                   <span className="error">{this.state.errors["department"]}</span>
                              </div>


</div>
<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">

      <div className="w-100 pt-10">
      {(() => {

if (mactiveflag == 'Y') {
return (   <FormControlLabel control={<Checkbox color="primary" onClick={(e) =>this.mactiveChangecheckbox(e)} checked />} label="M.Active" />

)
}
if (mactiveflag != 'Y') {
    return (
      <FormControlLabel control={<Checkbox color="primary" onClick={(e) =>this.mactiveChangecheckbox(e)} />} label="M.Active" />
    )
    }
})()}
      {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)} checked />} label="M.Active" /> */}
      </div>
</div>
<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  createNewLabel="Stage"
                                  options={stageoptions}
                                  onChange={this.setstatevaluedropdownfunction('stage')}
                                  placeholder="Stage"
                                  values={this.state.stage}
                                  />
                                   <span className="error">{this.state.errors["stage"]}</span>
                              </div>
</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  createNewLabel="Activity Type"
                                  options={activitytypeoptions}
                                  onChange={this.setstatevaluedropdownfunction('activitytype')}
                                  placeholder="Activity Type"
                                  values={this.state.activitytype}
                                  />
                                   <span className="error">{this.state.errors["activitytype"]}</span>
                              </div>
</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  createNewLabel="Fit"
                                  disabled={actflag}
                                  options={fitoptions}
                                  onChange={this.setstatevaluedropdownfunction('fit')}
                                  placeholder="Fit"
                                  values={this.state.fit}
                                  />
                                   <span className="error">{this.state.errors["fit"]}</span>
                              </div>
</div>
<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group">
<TextField id="activity" value={this.state.activity}  onChange={this.setstatevaluefunction('activity')} fullWidth label="Activity" placeholder="Activity"/>
   {/* <TextField id="Buyer" fullWidth label="Activity" placeholder="Activity"/> */}
                              </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group">
<TextField id="subactivity" value={this.state.subactivity} disabled={actflag} onChange={this.setstatevaluefunction('subactivity')} fullWidth label="Sub Activity" placeholder="Sub Activity"/>
   {/* <TextField id="Buyer" fullWidth label="Sub activity" placeholder="Sub activity"/> */}
                              </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group">
<TextField id="days" value={this.state.days} onChange={this.setstatevaluefunction('days')} fullWidth label="Days" placeholder="Days"/>
   {/* <TextField id="Buyer" fullWidth label="Days" placeholder="Days"/> */}
                              </div>
  </div>

  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
  <div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  
                                  createNewLabel="DpndCode"
                                  options={DpndCodeoptions}
                                  onChange={this.setstatevaluedropdownfunction('DpndCode')}
                                  // onChange={values => this.getDpndOnAct({ DpndCode:values },this,"DpndCode")}
                                  placeholder="DpndCode"
                                  values={this.state.DpndCode}
                                  />
                                   <span className="error">{this.state.errors["DpndCode"]}</span>
                              </div>


</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  disabled={dcodeflag}
                                  createNewLabel="DpndDept"
                                  options={departmentoptions}
                                  // onChange={this.setstatevaluedropdownfunction('DpndDept')}
                                  onChange={values => this.getDpndOnAct({ DpndDept:values },this,"DpndDept")}
                                  placeholder="DpndDept"
                                  values={this.state.DpndDept}
                                  />
                                   <span className="error">{this.state.errors["DpndDept"]}</span>
                              </div>

</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  createNewLabel="DpndOnAct"
                                  options={DpndOnActoptions}
                                  // onChange={this.setstatevaluedropdownfunction('DpndOnAct')}
                                  onChange={values => this.getDpndOnSubAct({ DpndOnAct:values },this,"DpndOnAct")}
                                  placeholder="DpndOnAct"
                                  values={this.state.DpndOnAct}
                                  />
                                   <span className="error">{this.state.errors["DpndOnAct"]}</span>
                              </div>

</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  disabled={dactcodeflag}
                                  createNewLabel="DpndOnS.Act"
                                  options={DpndOnSubActoptions}
                                  onChange={this.setstatevaluedropdownfunction('DpndOnSubAct')}
                                  // onChange={values => this.getDpndOnSubAct({ DpndOnSubAct:values },this,"DpndOnSubAct")}
                                  placeholder="DpndOnS.Act"
                                  values={this.state.DpndOnSubAct}
                                  />
                                   <span className="error">{this.state.errors["DpndOnSubAct"]}</span>
                              </div>

</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  createNewLabel="Category"
                                  options={categoryoptions}
                                  onChange={this.setstatevaluedropdownfunction('category')}
                                  placeholder="Category"
                                  values={this.state.category}
                                  />
                                   <span className="error">{this.state.errors["category"]}</span>
                              </div>
</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="form-group select_label_name mt-15">
                              <Select1
                                  dropdownPosition="auto"
                                  //   multi
                                  createNewLabel="VA Aprv"
                                  options={valueaddoptions}
                                  onChange={this.setstatevaluedropdownfunction('valueadd')}
                                  placeholder="VA Aprv"
                                  values={this.state.valueadd}
                                  />
                                   <span className="error">{this.state.errors["valueadd"]}</span>
                              </div>

</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="w-100 pt-10">
{(() => {

if (alowskipflag == 'Y') {
return (<FormControlLabel control={<Checkbox color="primary" onClick={(e) =>this.alowskipChangecheckbox(e)} checked />} label="AlowSkip" />)
}
if (alowskipflag != 'Y') {
    return (
      <FormControlLabel control={<Checkbox color="primary" onClick={(e) =>this.alowskipChangecheckbox(e)} />} label="AlowSkip" />
    )
    }
})()}
      {/* <FormControlLabel control={<Checkbox color="primary" value="Sample" onClick={(e) =>this.handleChangecheckbox(n,index)}  />} label="AlowSkip" /> */}
      </div>

</div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
<div className="w-100 pt-10">
{(() => {

if (mactiveflag == 'Y') {
return (   <FormControlLabel control={<Checkbox color="primary" onClick={(e) =>this.activeChangecheckbox(e)} checked />} label="Active" />

)
}
if (mactiveflag != 'Y') {
    return (
      <FormControlLabel control={<Checkbox color="primary" onClick={(e) =>this.activeChangecheckbox(e)} />} label="Active" />
    )
    }
})()}

      </div>


</div>






</div>
</div>
<div className="table-responsive mt-0">
<div className="w-20 float-right">
   <div className="form-group">
   <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" tabindex="0" type="button"  onClick={(e) =>this.sampleaddmoresave()}><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
       {/* <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button"><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
       <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic" tabindex="0" type="button" onClick={(e) => this.opnQuantityModal(e)}><i className="zmdi zmdi-copy"></i><span className="MuiTouchRipple-root"></span></button> */}
   </div>
</div>

       <table className="table mt-10 data w-100 float-left la-fix" >
           <thead>
               <tr>
               <th className="w-10">#</th>
               <th className="w-10">Remove</th>
               <th className="w-10">Stage</th>
               <th className="w-15">Act Type</th>
               <th className="w-10">Fit  </th>
               <th className="w-10">Activity  </th>
               <th className="w-25">Sub Activity  </th>
               <th className="w-10">Days </th>
               <th className="w-10">DpndCode </th>
               <th className="w-15">DpndDept </th>
               <th className="w-15">DpndOnAct </th>
               <th className="w-15">DpndOnS.Act </th>
               <th className="w-15">Category </th>
               <th className="w-10">Va Aprv </th>
               <th className="w-10">AlowSkip </th>
               <th className="w-10">Active </th>


               </tr>
           </thead>
           <tbody>
           { buyerrightlistshtml &&
       buyerrightlistshtml}
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
                         </AccordionDetails>
                         </Accordion>

                         <Accordion className="border mb-15 mt-15">
                     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>
                         <div className="acc_title_font">
                             <Typography>Master List </Typography>
                         </div>
                     </AccordionSummary>
                     <AccordionDetails>
                     <div className="float-right pr-0 but-tp">
  

  <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon b-sm" onClick={(e) => this.getalldata()} tabindex="0" type="button" ><span className="MuiButton-label">Search <i className="zmdi zmdi-search"></i></span><span className="MuiTouchRipple-root"></span></button>
  
 
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
                                                        onChange={values => this.getBuyerDivision2({ filterbuyer:values },this,"filterbuyer")}
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
                                     <th className="">status</th>
                             
                                     


                                     </tr>
                                 </thead>
                                 <tbody>
                                 { overalllistshtml &&
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
 