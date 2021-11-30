/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Button from '@material-ui/core/Button';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import { Media, Badge,Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, Input,} from 'reactstrap';
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
import { DateTimePicker} from '@material-ui/pickers';
 // const styles = {
 // 	checked: {
 // 		color: pink[500],
 // 	},
    
 // };
 import { NotificationContainer, NotificationManager } from 'react-notifications';

 import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
 import Select1 from "react-dropdown-select";
 import { Link } from 'react-router-dom';
 const $ = require('jquery');
 function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }
 class PreprodcutionTable extends Component {
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
        addNewUserModal: false,
        isActiveOrder:false,
        checkedA: true,
        open: false,
        tpopen: false,
        selectedDate: new Date(),
        buyerlists:[],
        buyerdivlists:[],
        yearlists:[],
        GarDyeTypelists:[],
        OrderTypelists:[],
        Washtypelists:[],
        embtypelists:[],
        printtypelists:[],
        FashionGRPlists:[],
        locationlists:[],
        sizelists:[],
        size:[],
        location:[],
        FashionGRP:[],
        buyer:[],
        buyerdiv:[],
        year:[],
        GarDyeType:[],
        OrderType:[],
        Washtype:[],
        embtype:[],
        printtype:[],
        stagedetailslists:[],
        fitlists:[],
        fabtypelists:[],
        stagedetails:[],
        stage:[],
        fit:[],
        fabtype:[],
        seasonlists:[],
        season:[],
        producttypelists:[],
        producttype:[],
        styleno:'',
        refstyleno:'',
        versionno:'',
        designStyleNo:'',
        desc:'',
        fabdesc:'',
        subproducttypelists:[],
        subproducttype:[],
        pcd:moment(new Date()).format('YYYY-MM-DD'),
        tendeliverydate:moment(new Date()).format('YYYY-MM-DD'),
        confduedate:moment(new Date()).format('YYYY-MM-DD'),
        expcqty:'',
        availableqty:'',
        projectiondata:[],
        person_resp:[],
        styleid:this.props.match.params.styleid,
        styleDetailID:0,
        masterStyle:0,
        fields: {},
        errors: {},
        unit:[],
        unitlists:[]

     }
     handleDateChange11 = (date) => {
		this.setState({ selectedDate: date });
	};

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
        // console.log(this.props.match.params.styleid,'---------------------------')
        // this.setState({styleid:this.props.params.styleid});
        this.editdata(this.state.styleid);
        this.editdataprojectiondt(this.state.styleid);
      
    }
     handleChange(event, value) {
        this.setState({ activeIndex: value });
        this.setState({ [name]: checked });
     }
     handleDateChange = (date) => {
        // console.log(moment(date).format('YYYY-MM-DD h:m:s a'));
        this.setState({ pcd: moment(date).format('YYYY-MM-DD') });
    };

    handleDateChange1 = (date) => {
        this.setState({ tendeliverydate: moment(date).format('YYYY-MM-DD') });
    };

    handleDateChange2 = (date) => {
        this.setState({ confduedate: moment(date).format('YYYY-MM-DD') });
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


     setstatevaluefunction = name => event => {
         
		this.setState({ [name]: event.target.value });
	};

    contactSubmit(e,type){
        e.preventDefault();
        if(this.handleValidation()){
            this.save();
        }else{
            NotificationManager.error('Form has errors.');
            
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

          //location
          if(!fields["location"]){
            formIsValid = false;
            errors["location"] = "Cannot be empty";
        }

         //OrderType
         if(!fields["OrderType"]){           
            formIsValid = false;
            errors["OrderType"] = "Cannot be empty";
        }

        //producttype        
        if(!fields["producttype"]){           
            formIsValid = false;
            errors["producttype"] = "Cannot be empty";
        }
          

        //subproducttype                
        if(!fields["subproducttype"]){           
            formIsValid = false;
            errors["subproducttype"] = "Cannot be empty";
        }

         //FashionGRP                
         if(!fields["FashionGRP"]){           
            formIsValid = false;
            errors["FashionGRP"] = "Cannot be empty";
        }
          
    
        if(typeof fields["styleno"] !== "undefined"){
          if(!fields["styleno"].match(/^[a-zA-Z0-9]+$/)){
            formIsValid = false;
            errors["styleno"] = "Input is not alphanumeric";
          }      	
        }

        if(typeof fields["fabdesc"] !== "undefined"){
            if(!fields["fabdesc"].match(/^[a-zA-Z0-9]+$/)){
              formIsValid = false;
              errors["fabdesc"] = "Input is not alphanumeric";
            }      	
          }

          if(typeof fields["refstyleno"] !== "undefined"){
            if(!fields["refstyleno"].match(/^[a-zA-Z0-9]+$/)){
              formIsValid = false;
              errors["refstyleno"] = "Input is not alphanumeric";
            }      	
          }
          
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


     getfilldropdownlists() {

        api.get('Buyer/GetBuyerDropDown')
        .then((response) => {
            
            this.setState({ buyerlists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })


        api.get('BuyerDivision/GetBuyerDivisionList')
        .then((response) => {
            
            this.setState({ buyerdivlists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })



        api.get('Miscellaneous/GetMiscellaneousList?MType=ORDSTAGE')
        .then((response) => {
            
            this.setState({ OrderTypelists: response.data.result.data,stagedetailslists: response.data.result.data,stage: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=Washtype')
        .then((response) => {
            
            this.setState({ Washtypelists: response.data.result.data });
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

        api.get('Miscellaneous/GetMiscellaneousList?MType=FashionGRP')
        .then((response) => {
            
            this.setState({ FashionGRPlists: response.data.result.data });
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


        api.get('Unit/GetUnitDropDown')
        .then((response) => {
            
            this.setState({ unitlists: response.data.result.data });
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

        api.get('ProductType/GetProductTypeDropDown')
        .then((response) => {
            
            this.setState({ producttypelists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })


        // api.get('StyleDivision/GetStyleDivisionList')
        // .then((response) => {
            
        //     this.setState({ subproducttypelists: response.data.result.data });
        // })
        // .catch(error => {
        //     // error handling
        // })

        
        api.get('Size/GetSizeList')
        .then((response) => {
            
            this.setState({ sizelists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

        

        api.get('Miscellaneous/GetMiscellaneousList?MType=printtype')
        .then((response) => {
            
            this.setState({ printtypelists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=embtype')
        .then((response) => {
            
            this.setState({ embtypelists: response.data.result.data });
        })
        .catch(error => {
            // error handling
        })

        api.get('Miscellaneous/GetMiscellaneousList?MType=GarDyeType')
        .then((response) => {
            
            this.setState({ GarDyeTypelists: response.data.result.data });
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

      
    setstatevaluedropdownfunction = name => event => {
        let fields = this.state.fields;
       
        if(event.length!=0){
            fields[name] = event[0].value;        
            this.setState({fields});
            if(name=='OrderType'){            
                $('.project-dt-pop').hide();
                if(event[0].value=='PROJECTION'){
                    $('.project-dt-pop').show();
                }
                
            }

        } else{
            fields[name] = '';        
            this.setState({fields});
            if(name=='OrderType'){            
                $('.project-dt-pop').hide();
            }
        }
        
		this.setState({ [name]: event });
	};

    
      editdata(id){
        api.get('StyleHeader/GetStyleGrid?StyleID='+id)
        .then((response) => {
            console.log(response.data.data[0],'------------')
            let data = response.data.data[0];            

            this.setState({ buyer: [{value:data.buyCode,label:data.buyerName}],buyerdiv: [{value:data.buyDivCode,label:data.buyDivname}],season: [{value:data.seasonCode,label:data.seasonName}],year: [{value:data.seasonYear,label:data.seasonYear}],OrderType: [{value:data.orderStage,label:data.orderStage}],
                designStyleNo:data.baseStyleno,refstyleno:data.designStyleNo,
                styleno:data.refStyleNo,producttype: [{value:data.producttype,label:data.producttype}],subproducttype: [{value:data.subProductType,label:data.subProductType}],
                Washtype: [{value:data.washDesc,label:data.washTypeCodeDesc}],
                printtype: [{value:data.printDesc,label:data.printTypeCodeDesc}],
                embtype: [{value:data.embDesc,label:data.embroideryTypeDesc}],
                GarDyeType: [{value:data.garDyeDesc,label:data.garmentDyeTypeDesc}],
                location: [{value:data.loccode,label:data.locationname}],
                desc:data.styleDesc,
                fabdesc:data.fabricDesc,
                fabtype: [{value:data.fabricType,label:data.fabricTypeDesc}],
                FashionGRP: [{value:data.fashionGroup,label:data.fashionGroupCodeDesc}],
                masterStyle:data.masterStyle,
                unit: [{value:data.unitCode,label:data.unitName}],
             });
        })
        .catch(error => {
            // error handling
        })
    }
editdataprojectiondt(id){
        api.get('StyleHeader/GetStyleDetailGridList?SParentID='+id)
        .then((response) => {
            console.log(response.data.data,'------------')
            
            this.setState({ projectiondata: response.data.data});
        })
        .catch(error => {
            // error handling
        })
     } 


      projectsave(){
        const {projectiondata} = this.state;
        if(this.state.expcqty!=''){
          let data = {
              "id": this.state.styleDetailID,
              "styleMast_ID": this.state.styleid,
              "expOrdQty": this.state.expcqty,
              "pcd": this.state.pcd,
              "expExfacDt": this.state.tendeliverydate,
              "projClosrDt": this.state.confduedate,
              "cancel": "N",
              "createdBy": "q",
              "createdDt": "2021-10-30T10:38:00.634Z",
              "modifyBy": "q",
              "modifyDt": "2021-10-30T10:38:00.634Z",
              "hostName": "q"
              }
            //   projectiondata.push(data);
            //   this.setState({projectiondata:projectiondata})

              api.post('StyleHeader/SaveStyleDetail',{"styleDetailEntityModel":[data]}) .then((response) => {
                // this.getMenulists();
                NotificationManager.success('Updated Sucessfully');
                this.setState({styleDetailID:0});
                this.editdataprojectiondt(this.state.styleid);
                // window.location.href = "/#/app/pre-production/style-list";
               
            })
            .catch(error => {
                // error handling
            })

          // this.state.projectiondata.push(data);
          this.setState({expcqty:0})
          
        }  else{
          NotificationManager.error('Please Enter all values');

      }
     
    }

   

      projectdelete(item){
        //   const {projectiondata} = this.state;

          
        //         if (projectiondata.indexOf(item) !== -1) {
        //             projectiondata.splice(projectiondata.indexOf(item), 1);
        //         } 
        //      this.setState({projectiondata:projectiondata})
             
        let data = {
            "id": item.styleDetailID,
            "styleMast_ID": this.state.styleid,
            "expOrdQty": item.expcqty,
            "pcd": item.pcd,
            "expExfacDt": item.tendeliverydate,
            "projClosrDt": item.confduedate,
            "cancel": "Y",
            "createdBy": "q",
            "createdDt": "2021-10-30T10:38:00.634Z",
            "modifyBy": "q",
            "modifyDt": "2021-10-30T10:38:00.634Z",
            "hostName": "q"
            }
          //   projectiondata.push(data);
          //   this.setState({projectiondata:projectiondata})

            api.post('StyleHeader/SaveStyleDetail',{"styleDetailEntityModel":[data]}) .then((response) => {
              // this.getMenulists();
              NotificationManager.success('Deleted Sucessfully');
              this.setState({styleDetailID:0});
              this.editdataprojectiondt(this.state.styleid);
              // window.location.href = "/#/app/pre-production/style-list";
             
          })
          .catch(error => {
              // error handling
          })

        
       
      }

      projectedit(item){
        const {projectiondata} = this.state;

        this.setState({expcqty:item.expOrdQty,pcd:item.pcd,tendeliverydate:item.expExfacDt,confduedate:item.projClosrDt,styleDetailID:item.styleDetailID});
        //       if (projectiondata.indexOf(item) !== -1) {
        //           projectiondata.splice(projectiondata.indexOf(item), 1);
        //       } 
        //    this.setState({projectiondata:projectiondata})
        //    console.log(this.state.projectiondata,'projectiondata')
      
     
    }
    

      save () {
        console.log(this.state,'-----------------------')
        

        let fabtype="";
        if(this.state.fabtype.length>0){
            fabtype=this.state.fabtype[0].value;
        }


        let Washtype="";
        let Washtypeflag="N";
        if(this.state.Washtype.length>0){
            Washtype=this.state.Washtype[0].value;
            Washtypeflag="Y";
        }

        let printtype="";
        let printtypeflag="N";
        if(this.state.printtype.length>0){
            printtype=this.state.printtype[0].value;
            printtypeflag="Y";
        }

        let embtype="";
        let embtypeflag="N";
        if(this.state.embtype.length>0){
            embtype=this.state.embtype[0].value;
            embtypeflag="Y";
        }

        let GarDyeType="";
        let GarDyeTypeflag="N";
        if(this.state.GarDyeType.length>0){
            GarDyeType=this.state.GarDyeType[0].value;
            GarDyeTypeflag="Y";
        }
        

        let unit="";
        if(this.state.unit.length>0){
            unit=this.state.unit[0].value;
        }

        if(this.state.buyer.length>0){
 
            let data =
          {
            "id": this.state.styleid,
            "entityID": "EC",
            "buyCode": this.state.buyer[0].value,
            "buyDivCode": this.state.buyerdiv[0].value,
            "seasoncode": this.state.season[0].value,
            "seasonYear": this.state.year[0].value,
            "loccode": this.state.location[0].value,
            "baseStyleno": this.state.designStyleNo,
            "refStyleNo": this.state.styleno,
            "masterStyle": this.state.masterStyle,
            "styleDesc": this.state.desc,
            "designStyleNo": this.state.refstyleno,
            "fabricDesc": this.state.fabdesc,
            "fabricType": fabtype,
            "fashionGroup": this.state.FashionGRP[0].value,
            "producttype":  this.state.producttype[0].value,
            "subProductType": this.state.subproducttype[0].value,
            "OrderStage":  this.state.OrderType[0].value,
            "sam": 2,
            "washReq":  Washtypeflag,
            "washDesc": Washtype,
            "printing":  printtypeflag,
            "printDesc":  printtype,
            "embroidery":  embtypeflag,
            "embDesc":  embtype,
            "garmentDye":  GarDyeTypeflag,
            "garDyeDesc":  GarDyeType,
            "tentativeFOB": 2,
            "remarks": "Remarks",
            "active": "Y",
            "createdBy": "A",
            "createdDt": "2021-10-29T08:01:11.048Z",
            "modifyBy": "A",
            "modifyDt": "2021-10-29T08:01:11.048Z",
            "hostName": "A",
            "unitcode": unit,
            "styleDetailEntityModel": []
                // this.state.projectiondata
                // [
                // {
                // "id": 0,
                // "styleMast_ID": 0,
                // "expOrdQty": this.state.expcqty,
                // "pcd": this.state.pcd,//"2021-10-30T10:38:00.634Z",
                // "expExfacDt": this.state.tendeliverydate,//"2021-10-30T10:38:00.634Z",
                // "projClosrDt": this.state.confduedate,//"2021-10-30T10:38:00.634Z",
                // "cancel": "q",
                // "createdBy": "q",
                // "createdDt": "2021-10-30T10:38:00.634Z",
                // "modifyBy": "q",
                // "modifyDt": "2021-10-30T10:38:00.634Z",
                // "hostName": "q"
                // }
            // ]
            ,
            // "styleImageEntityModel": [
            //     {
            //     "id": 0,
            //     "styleMast_ID": 0,
            //     "masterStyle": 1,
            //     "versionNo": 2,
            //     "fName": "test.jpg",
            //     "cancel": "q",
            //     "createdBy": "q",
            //     "createdDt": "2021-10-30T10:38:00.634Z",
            //     "modifyBy": "q",
            //     "modifyDt": "2021-10-30T10:38:00.634Z",
            //     "hostName": "q"
            //     }
            // ],
            "styleResPeEntityrModel": [
                {
                "id": 0,
                "masterStyle": 1,
                "styleMast_ID": 0,
                "userId": "q",
                "createdBy": "q",
                "createdDt": "2021-10-30T11:16:24.931Z",
                "modifyBy": "q",
                "modifyDt": "2021-10-30T11:16:24.931Z",
                "hostName": "q"
                }
            ]
            // "styleFileUploadEntityModel": [
            //     {
            //     "id": 0,
            //     "styleMast_ID": 0,
            //     "filetype": "w",
            //     "fit": this.state.fit[0].value,
            //     "stage": this.state.stage[0].value,
            //     "versionNo": this.state.versionno,
            //     "fName": "test.jpg",
            //     "cancel": "w",
            //     "createdBy": "w",
            //     "createdDt": "2021-10-30T11:16:24.931Z",
            //     "modifyBy": "w",
            //     "modifyDt": "2021-10-30T11:16:24.931Z",
            //     "hostName": "w"
            //     }
            // ]
        };
console.log(data,'datadatadata')

            api.post('StyleHeader/SaveStyleHeader',data) .then((response) => {
                // this.getMenulists();
                NotificationManager.success('Updated Sucessfully');
                window.location.href = "/#/app/pre-production/style-list";
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
        this.setState({ buyerdivlists: [],buyerdiv:[] });
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


    getSubproduct(val,field,e){
        let fields = this.state.fields;
        this.setState({ subproducttypelists: [],subproducttype:[] });
        if(val.producttype.length!=0){
            fields['producttype'] = val.producttype[0].value;        
            this.setState({fields});

            this.setState({ producttype: val.producttype });

            api.get('StyleDivision/GetStyleDivisionList?ProductType='+val.producttype[0].value)
            .then((response) => {
                
                this.setState({ subproducttypelists: response.data.result.data });
            })
            .catch(error => {
                // error handling
            })

          
            
        } else{
            fields['producttype'] = '';        
            this.setState({fields});
        }

        // fields['producttype'] = val.producttype[0].value;        
        // this.setState({fields});

                  
    }

     render() {
         const { employeePayroll,projectiondata } = this.state;
         const { match } = this.props;
        // const { selectedDate } = this.state;
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
               
             this.setState({ isActiveOrder: !this.state.isActiveOrder });
             console.log(this.state)
           };
 
           const handleToggle3 = () => {
             this.setState({ isActiveOrder: false });
           };
           const isActive = this.state.isActive;
           const isActiveOrder = this.state.isActiveOrder;
           const { selectedDate,tendeliverydate,confduedate,pcd } = this.state;


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

           const GarDyeTypeoptions = [];
           for (const item of this.state.GarDyeTypelists) {           
               GarDyeTypeoptions.push({value:item.code,label:item.codeDesc});
           }


           const OrderTypeoptions = [];
           for (const item of this.state.OrderTypelists) {           
               OrderTypeoptions.push({value:item.code,label:item.codeDesc});
           }

           const Washtypeoptions = [];
           for (const item of this.state.Washtypelists) {           
               Washtypeoptions.push({value:item.code,label:item.codeDesc});
           }

           const embtypeoptions = [];
           for (const item of this.state.embtypelists) {           
               embtypeoptions.push({value:item.code,label:item.codeDesc});
           }

           const printtypeoptions = [];
           for (const item of this.state.printtypelists) {           
               printtypeoptions.push({value:item.code,label:item.codeDesc});
           }

           const FashionGRPoptions = [];
           for (const item of this.state.FashionGRPlists) {           
               FashionGRPoptions.push({value:item.code,label:item.codeDesc});
           }

           const locationoptions = [];
           for (const item of this.state.locationlists) {           
               locationoptions.push({value:item.locCode,label:item.locName});
           }

           const unitoptions = [];
           for (const item of this.state.unitlists) {           
               unitoptions.push({value:item.uCode,label:item.uName});
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

           const producttypeoptions = [];
           for (const item of this.state.producttypelists) {           
               producttypeoptions.push({value:item.productType,label:item.productType});
           }

           const subproducttypeoptions = [];
           for (const item of this.state.subproducttypelists) {           
               subproducttypeoptions.push({value:item.subProductType,label:item.subProductType});
           }



           
          return (
              
             <RctCollapsibleCard heading="Style Edit">
                  <PageTitleBar title="Menu" match={this.props.match} />
                  <div  className={isActive ? "s-panel s-panel-width active" : 's-panel'}>
                      { !isActive &&
                          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-info mr-10 text-white btn-icon nd-fom" tabindex="0" type="button"  onClick={handleToggle}><span className="MuiButton-label">Projection Details{isActive}<i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                      }
                       { isActive &&
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-icon b-ic edit close-side" onClick={handleToggle1} tabindex="0" type="button" ><i className="zmdi zmdi-close"></i><span className="MuiTouchRipple-root"></span></button>
                         }
                      <div className="row new-form">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                         <div className="form-group">
                            <div className="rct-picker">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DateTimePicker
                                        value={pcd}
                                        clearable
                                        label="PCD"
                                        onChange={this.handleDateChange}
                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                        fullWidth
                                        />
                                </MuiPickersUtilsProvider>
                            </div>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                         <div className="form-group">
                            <div className="form-group">
                                <div className="rct-picker">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DateTimePicker
                                            value={tendeliverydate}
                                            clearable
                                            label="Tentative Delivery Date"
                                            onChange={this.handleDateChange1}
                                            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                            fullWidth
                                            />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </div>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                         <div className="form-group">
                         <TextField id="expcqty" value={this.state.expcqty}  onChange={this.setstatevaluefunction('expcqty')} fullWidth label="Expected Quantity" placeholder="Expected Quantity"/>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                         <div className="form-group">
                            <div className="rct-picker">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DateTimePicker
                                            value={confduedate}
                                            clearable
                                            label="Confirmation Due Date"
                                            onChange={this.handleDateChange2}
                                            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                            fullWidth
                                            />
                                    </MuiPickersUtilsProvider>
                                </div>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                         <div className="form-group">
                         <TextField id="availableqty" value={this.state.availableqty}  onChange={this.setstatevaluefunction('availableqty')} fullWidth label="Available Quantity" placeholder="Available Quantity"/>
                         </div>
                     </div>
                     <div className="table-responsive mt-0">
                        <div className="float-right">
                            <div className="form-group">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add" onClick={(e) =>this.projectsave()} tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>
                                
                            </div>
                        </div>
                         <div className="clearfix"></div>
                             <table className="table data w-100">
                                 <thead>
                                     <tr>
                                     <th className="w-25 text-center">Actions  </th>
                                     <th className="w-25">PCD</th>
                                     <th className="w-25">Delivery Date</th>
                                     <th className="w-25">Exp Qty</th>
                                     <th className="w-25">Confirmation Date</th>
                                     <th className="w-25">Shipper</th>
                                     <th className="w-25">Available</th>
                                    
                                     </tr>
                                 </thead>
                                 <tbody>
                                 {projectiondata.map((n,index) => {
                                    
                                    return (

                                     <tr key={`list${index}`}>
                                     <td className="text-center">
                                         
                                   <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" onClick={(e) =>this.projectdelete(n)} tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                   <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" onClick={(e) =>this.projectedit(n)} tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                  
                                        {/* <button className="save">Save</button>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button> */}
                                    </td>
                                     <td className="data">{n.pcd}</td>
                                     <td className="data">{n.expExfacDt}</td>
                                     <td className="data">{n.expOrdQty}</td>
                                     <td className="data">{n.projClosrDt}</td>
                                     <td className="data">-</td>
                                     <td className="data">0</td>
                                     
                                     </tr>
                                        );
                                    })}
                                     
                                 </tbody>
                                 
                                 </table>
                             </div>
                     </div>
                  </div>
 
 
                  <div  className={isActiveOrder ? "s-panel-1 active" : 's-panel-1'}>
                  {/* !isActiveOrder */}
                      { isActiveOrder &&
                          <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 text-white btn-icon nd-fom" tabindex="0" type="button"  onClick={handleToggle2}><span className="MuiButton-label">Order Specification{isActiveOrder} <i className="zmdi zmdi-cloud-upload"></i></span><span className="MuiTouchRipple-root"></span></button>
                      }
                       { isActiveOrder &&
                         <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-icon b-ic edit close-side" onClick={handleToggle3} tabindex="0" type="button" ><i className="zmdi zmdi-close"></i><span className="MuiTouchRipple-root"></span></button>
                         }
                          <div className="row new-form">
                          { isActiveOrder &&                           
                            <div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0 ft-lft">
                                <div className="form-group">
                                    <select className="form-control select2">
                                        <option>Color</option> 
                                        <option>Levis</option> 
                                        <option>Allen</option> 
                                        <option>Solly</option> 
                                    </select> 
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 ft-lft">
                            <div className="form-group">
                                                <Select1
                                                    dropdownPosition="auto"
                                                    //   multi
                                                    createNewLabel="Fabric Type"
                                                    options={fabtypeoptions}
                                                    onChange={this.setstatevaluedropdownfunction('fabtype')}
                                                    placeholder="Fabric Type"
                                                    values={this.state.fabtype}
                                                    />

                                   
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0 ft-lft mt-15">
                            <div className="form-group">
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
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 ft-lft mt-15 ">
                            <div className="form-group">
                                                <Select1
                                                    dropdownPosition="auto"
                                                      multi
                                                    createNewLabel="Size"
                                                    options={sizeoptions}
                                                    onChange={this.setstatevaluedropdownfunction('size')}
                                                    placeholder="Size"
                                                    values={this.state.size}
                                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 ft-lft mt-15 ">
                            <div className="form-group">
                                                <Select1
                                                    dropdownPosition="auto"
                                                    //   multi
                                                    createNewLabel="Destination"
                                                    options={locationoptions}
                                                    onChange={this.setstatevaluedropdownfunction('location')}
                                                    placeholder="Destination"
                                                    values={this.state.location}
                                                    />                          
                                    {/* <select className="form-control select2">
                                        <option>Destination</option> 
                                        <option>Levis</option> 
                                        <option>Allen</option> 
                                        <option>Solly</option> 
                                    </select>  */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 mt-15 ft-lft">
                                <div className="form-group">                                  
                                    <select className="form-control select2">
                                        <option>Market</option> 
                                        <option>Levis</option> 
                                        <option>Allen</option> 
                                        <option>Solly</option> 
                                    </select> 
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
                                    <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                    <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                 </td>
                                 </tr>
                                 <tr>
                                 <td className="data">John Doe</td>
                                 <td className="data">johndoe@john.com</td>
                                 <td className="data">666-666-666</td>
                                 <td className="text-center">
                                
                                    <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                             <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                             <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                 </td>
                                 </tr>
                             </tbody>
                             
                             </table>
                            </div>                             
                        </div>
                         }
                    { !isActiveOrder &&
                        <div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                                <div className="form-group">
                                    <Input type="date" name="date" id="PCD" placeholder="PCD" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0">
                                <div className="form-group">
                                <Input type="date" name="date" id="tentDalivery" placeholder="Tentaive Delivery Date" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-0">
                                <div className="form-group">
                                <TextField id="ExpectedQuantity" fullWidth label="Expected Quantity" placeholder="Expected Quantity"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pr-0 mt-15">
                                <div className="form-group">
                                <Input type="date" name="date" id="conf-due" placeholder="Confirmation due Date" />
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
                                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                            <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                            <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td className="data">John Doe</td>
                                        <td className="data">johndoe@john.com</td>
                                        <td className="data">666-666-666</td>
                                        <td className="text-center">
                                        
                                            <button className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete" tabindex="0" type="button" ><i className="zmdi zmdi-delete"></i><span className="MuiTouchRipple-root"></span></button>
                                                    <button className="MuiButtonBase-root  mr-10 text-primary btn-icon b-ic edit" tabindex="0" type="button" ><i className="zmdi zmdi-edit"></i><span className="MuiTouchRipple-root"></span></button>
                                                    <button className="MuiButtonBase-root  mr-10 text-success btn-icon b-ic save" tabindex="0" type="button" ><i className="zmdi zmdi-save"></i><span className="MuiTouchRipple-root"></span></button>
                                        </td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </div>                             
                        </div>
                    }
                     </div>
                  </div>
 
                  
               
                <div className="row new-form">
                <div className="col-lg-12 col-md-3 col-sm-6 col-xs-12">
                <div className="w-100">
                <div className="float-right n-bt-top">
                        
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Clear <i className="zmdi zmdi-close-circle-o"></i></span><span className="MuiTouchRipple-root"></span></button>
                        
                       
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-0 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.contactSubmit(e)}><span className="MuiButton-label">Update <i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                   </div>    </div> </div>
                   {/* <div className="col-lg-12 mt-10">
                        <ul class="list-group list-group-horizontal-md">
                            <li class="list-group-item">ITH# 2136005</li>
                            <li class="list-group-item">Single window</li>
                            <li class="list-group-item">Costing</li>
                            <li class="list-group-item">Rm order</li>
                            <li class="list-group-item">Delivery SM</li>
                            <li class="list-group-item">History</li>
                        </ul>
                    </div> */}
                   <div className="row new-form p-20">
                   <div className="w-25 border p-10 mr-5 no-f-mb">
                {/* <img className="rounded img-fluid" src="https://via.placeholder.com/300"  data-src="https://via.placeholder.com/250" alt="Square placeholder image 300px"></img> */}
 
                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Stage Details"
                                                        options={stagedetailsoptions}
                                                        onChange={this.setstatevaluedropdownfunction('stagedetails')}
                                                        placeholder="Stage Details"
                                                        values={this.state.stagedetails}
                                                        />
                         {/* <select className="form-control select2 mt-15">
                            <option>Stage Details</option> 
                            <option>Levis</option> 
                            <option>Allen</option> 
                            <option>Solly</option> 
                        </select>  */}
                    </div>
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Location"
                                                        options={locationoptions}
                                                        onChange={this.setstatevaluedropdownfunction('location')}
                                                        placeholder="Location"
                                                        values={this.state.location}
                                                        />
                                                         <span className="error">{this.state.errors["location"]}</span>
                        {/* <select className="form-control select2 mt-15">
                            <option>Location</option> 
                            <option>India</option> 
                            <option>Australia</option> 
                            <option>Germany</option> 
                        </select> */}
                    </div>
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
                       
                    </div>
                    {/* <div className="form-group">
                        <select className="form-control select2 mt-15">
                            <option>Print Type</option> 
                            <option>Levis</option> 
                            <option>Allen</option> 
                            <option>Solly</option> 
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control select2 mt-15">
                            <option>Garment dye Type</option> 
                            <option>Levis</option> 
                            <option>Allen</option> 
                            <option>Solly</option> 
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control select2 mt-15">
                            <option>Embroidery Type</option> 
                            <option>Levis</option> 
                            <option>Allen</option> 
                            <option>Solly</option> 
                        </select>
                    </div> */}
                        <div className="form-group">
                            <div className="w-75 float-left m-btop-10">
                                <FormControl>
                                    <div class="item cursor-pointer"  onClick={this.ClickTechPack} ><span class="material-icons mr-10">attach_file</span><span>Tech Pack</span></div>
                                    <Dialog open={this.state.tpopen} onClose={this.CloseTechPack} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Tech Pack</DialogTitle>
                                    <DialogContent>                                   
                                        <div className="col border">                       
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

                                                {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div className="form-group select_label_name mt-15">
                                                <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Stage Details"
                                                        options={stagedetailsoptions}
                                                        onChange={this.setstatevaluedropdownfunction('stage')}
                                                        placeholder="Stage Details"
                                                        values={this.state.stage}
                                                        />
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
                                                </div> */}
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        
                                                        <TextField id="versionno" value={this.state.versionno}  onChange={this.setstatevaluefunction('versionno')} fullWidth label="Version Number" placeholder="Version No"/>
                                                    </div>
                                                </div> 
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-15">
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
                        </div>
                        <div className="form-group">
                            <div className="w-75 float-left m-btop-10">
                            <div className="w-100 p-0 mt-5">
                                                    <label for="formFile" class="form-label float-left w-20 p-10">Buyer Block</label>
                                                    <input class="form-control w-80 float-left" type="file" id="formFile"/>
                                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="w-75 float-left m-btop-10">
                            <div className="w-100 p-0 mt-5">
                                                    <label for="formFile" class="form-label float-left w-20 p-10">FIS</label>
                                                    <input class="form-control w-80 float-left" type="file" id="formFile"/>
                                                </div>
                            
                            </div>
                        </div> 
                        
                     </div>
 
                    <div className="w-75 col border">
                        
                    <div className="row no-f-mb">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group select_label_name mt-15">
                                            <Select1
                                                dropdownPosition="auto"
                                                //   multi
                                                  createNewLabel="Buyer"
                                                options={buyeroptions}
                                                //onChange={values => this.setState({ buyer:values })}
                                                // onChange={this.setstatevaluedropdownfunction('buyer')}
                                                onChange={values => this.getBuyerDivision1({ buyer:values },this,"buyer")}
                                                placeholder="Buyer"
                                                values={this.state.buyer}
                                                />
                                <span className="error">{this.state.errors["buyer"]}</span>
                                {/* <select className="form-control select2 mt-15">
                                    <option>Buyer</option> 
                                    <option>Levis</option> 
                                    <option>Allen</option> 
                                    <option>Solly</option> 
                                </select>  */}
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
                               <span className="error">{this.state.errors["buyerdiv"]}</span>
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
                               <span className="error">{this.state.errors["season"]}</span>
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
                                                 <span className="error">{this.state.errors["year"]}</span>
                               
                            </div>
                        </div> 
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="form-group mt-15">
                            <button type="button" class="btn btn-outline-primary w-100" onClick={this.handleClickOpen}>Base Style {this.state.designStyleNo} <i class="zmdi zmdi-arrow-right-top"></i></button>
                                {/* <Button variant="contained" className="btn-secondary text-white btn-block" onClick={this.handleClickOpen}>Base Style</Button> */}
                                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
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
                                                    <div className="form-group">
                                                    <TextField id="designStyleNo" value={this.state.designStyleNo}  onChange={this.setstatevaluefunction('designStyleNo')} fullWidth label="Style No" placeholder="Style No"/>
                                                    {/* <TextField id="Buyer" fullWidth label="Style No" placeholder="Style No"/> */}
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
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Order Category"
                                                        options={OrderTypeoptions}
                                                        onChange={this.setstatevaluedropdownfunction('OrderType')}
                                                        placeholder="Order Category"
                                                        values={this.state.OrderType}
                                                        />
                          <span className="error">{this.state.errors["OrderType"]}</span>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <TextField id="styleno" value={this.state.styleno}  onChange={this.setstatevaluefunction('styleno')} fullWidth label="Style Number" placeholder="Style number"/>
                            <span className="error">{this.state.errors["styleno"]}</span>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <TextField id="desc" fullWidth  value={this.state.desc}  onChange={this.setstatevaluefunction('desc')}  label="Description" placeholder="Description"/>
                        </div>
                    </div> 
 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="ref_no" value={this.state.refstyleno}  onChange={this.setstatevaluefunction('refstyleno')} fullWidth label="Design Style Reference Number" placeholder="Design Style Reference Number"/>
                        <span className="error">{this.state.errors["refstyleno"]}</span>
                        </div>
                    </div> 
 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="form-group">
                        <TextField id="fabdesc" value={this.state.fabdesc}  onChange={this.setstatevaluefunction('fabdesc')} fullWidth label="Fabric" placeholder="Fabric"/>
                        <span className="error">{this.state.errors["fabdesc"]}</span>
                        </div>
                    </div> 
 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Product Type"
                                                        options={producttypeoptions}
                                                        // onChange={this.setstatevaluedropdownfunction('producttype')}
                                                        onChange={values => this.getSubproduct({ producttype:values },this,"producttype")}
                                                        placeholder="Product Type"
                                                        values={this.state.producttype}
                                                        />
                         <span className="error">{this.state.errors["producttype"]}</span>
                            
                        </div>
                    </div> 
 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Sub Product Type"
                                                        options={subproducttypeoptions}
                                                        onChange={this.setstatevaluedropdownfunction('subproducttype')}
                                                        placeholder="Sub Product Type"
                                                        values={this.state.subproducttype}
                                                        />
                                                        <span className="error">{this.state.errors["subproducttype"]}</span>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Fashion Group"
                                                        options={FashionGRPoptions}
                                                        onChange={this.setstatevaluedropdownfunction('FashionGRP')}
                                                        placeholder="Fashion Group"
                                                        values={this.state.FashionGRP}
                                                        />
                          <span className="error">{this.state.errors["FashionGRP"]}</span>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                          multi
                                                        createNewLabel="Person Responsible"
                                                        options={producttypeoptions}
                                                        onChange={this.setstatevaluedropdownfunction('person_resp')}
                                                        placeholder="Person Responsible"
                                                        values={this.state.person_resp}
                                                        />
                          
                        </div>
                        {/* <div className="form-group">
                            <select className="form-control select2 mt-15">
                                <option>Person Responsible</option> 
                                <option>Group 1</option> 
                                <option>Group 2</option> 
                                <option>Group 3</option> 
                            </select>
                        </div> */}
                    </div>        
                  
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Print Type"
                                                        options={printtypeoptions}
                                                        onChange={this.setstatevaluedropdownfunction('printtype')}
                                                        placeholder="Print Type"
                                                        values={this.state.printtype}
                                                        />
                               
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Garment dye type"
                                                        options={GarDyeTypeoptions}
                                                        onChange={this.setstatevaluedropdownfunction('GarDyeType')}
                                                        placeholder="Garment dye type"
                                                        values={this.state.GarDyeType}
                                                        />
                               
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Wash Type"
                                                        options={Washtypeoptions}
                                                        onChange={this.setstatevaluedropdownfunction('Washtype')}
                                                        placeholder="Wash Type"
                                                        values={this.state.Washtype}
                                                        />
                               
                             
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Embroidery Type"
                                                        options={embtypeoptions}
                                                        onChange={this.setstatevaluedropdownfunction('embtype')}
                                                        placeholder="Embroidery Type"
                                                        values={this.state.embtype}
                                                        />
                               
                             
                               
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="form-group select_label_name mt-15">
                                                  
                    <Select1
                                                        dropdownPosition="auto"
                                                        //   multi
                                                        createNewLabel="Fabric Type"
                                                        options={fabtypeoptions}
                                                        onChange={this.setstatevaluedropdownfunction('fabtype')}
                                                        placeholder="Fabric Type"
                                                        values={this.state.fabtype}
                                                        />
                               
                             
                               
                        </div>
                    </div>

 
                    </div>
                            
                            
                    </div>
                    <div className="col-lg-12 mt-10 w-25 border p-10 mr-5 no-f-mb">
                        <ul class="list-group list-group-horizontal-md">
                            <li class="list-group-item">ITH# 2136005</li>
                            <Link to={'/app/pre-production/single-window'}> <a href="javascript:void(0)"><li class="list-group-item">Single window</li></a></Link>
                            <Link to={'/app/pre-production/costing-creation'}> <a href="javascript:void(0)"><li class="list-group-item">Costing</li></a></Link>
                            <a href="javascript:void(0)"><li class="list-group-item">Rm order</li></a>
                            <a href="javascript:void(0)"><li class="list-group-item">Delivery SM</li></a>
                            <a href="javascript:void(0)"><li class="list-group-item">History</li></a>
                        </ul>
                    </div>
                    </div>
                                
                </div>
 
               
           
                <Modal isOpen={this.state.addNewUserModal} toggle={() => this.onAddUpdateUserModalClose()}>
                    <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
                      Clone Activity
                    </ModalHeader>
                    <ModalBody>
                        {/* <AddNewUserForm /> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="contained" className="text-white btn-success">Add</Button>
                        <Button variant="contained" className="text-white btn-danger">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </RctCollapsibleCard>
            
         );
     }
 }
 
 export default PreprodcutionTable;
 