/**
 * Basic Table
 */
import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Helmet } from "react-helmet";
import {
  Media,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import { RctCard, RctCardContent } from "Components/RctCard";
// api
import api from "Api";

import InputLabel from "@material-ui/core/InputLabel";

import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";
// page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import DropzoneComponent from "react-dropzone-component";
// intl messages
import IntlMessages from "Util/IntlMessages";

//import AddNewUserForm from './AddNewUserForm';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
// rct card box
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Scrollbars } from "react-custom-scrollbars";

import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select1 from "react-dropdown-select";
// const styles = {
// 	checked: {
// 		color: pink[500],
// 	},

// };
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { th } from "date-fns/locale";
const $ = require("jquery");

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
    BuyerList: [],
    MaterialTypeList: [],
    MaterialGroupList: [],
    MaterialSubGroupList:[],
    BuyerDivisionList: [],
    SupplierList: [],
    descriptionList: [],
    SupplierReferenceList: [],
    MarkerUOMList: [],
    seasonlists: [],
    yearlists: [],
    freightmodeList:[],
    fitList:[],
    purposeList: [],
    stylenolist: [],
    BuyerTNAlist: [],
    open: false,
    IsMarker: false,
    selectedIndex:'',
    IsBuyerCm:false,
    IsProductivityModal: false,
    IsSAMModal: false,
    IsAttachmentModal: false,
    IsMaterialUnitPrice: false,
    MaterialTempRowData: [],
    markerReferenceLists: [],
    produtivityReferenceList:[],
    activeIndex: 0,
    markerversionSelected: false,
    selectedMarker: "",
    styleDescription: "",
    BuyerMarker: "",
    InternalMarker: "",
    Wastage: "",
    Finance: "",
    FreightPrice: "",
    MaterialPrice: "",
    IsBuyerMarkerError: false,
    washperunitBuyerError: false,
    IsInternalMarkerError: false,
    IsWastageError: false,
    IsFinanceError: false,
    IsMaterialPriceError: false,
    IsFreightPriceError: false,
    InternalPrice: "",
    AllowancePercentage: "",
    IsAllowancePercError: false,
    IsBuyerPriceError: false,
    washperunitInteralError: false,
    embroideryBuyerError: false,
    printPerUnitBuyerError: false,
    BuyerPrice: "",
    AvailableCM: "",
    washperunitBuyer: 0,
    washperunitINternal:0,
    printPerUnitInternal:0,
    embroideryInternal:0,
    printPerUnitBuyer:0,
    embroideryBuyer:0,
    pdcPerunitvalue: 0,
    pdcPercentage: 0,
    discountValue: 0,
    SummaryTotalFabricAvailable:0,
    SummaryTotalFabricBuyerPrice:0,
    SummaryTotalFabricinternalPrice:0,
    commission:0,
    SummaryBuyerTotalValue:0,
    SummaryInternalTotalValue:0,
    SummaryAvailableTotalValue:0,
    discountPercentError: false,
    commissionError: false,
    buyercmError:false,
    testingBuyerError: false,
    testingInternalError: false,
    PatternTempRowData: [],
    lineOfcost:0,
    productivityGridObject:[],
    FitGridRowData:[],
    buyerCMarray:[],
    summaryHeadingArray:['Fabric','Interlining','Trim','Packeting','CM','Value-add','Commission','Discount','GarmentFreight','Others','PDC'],
    summaryvalueArray:[
      {
          "Fabric":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
          }],
          "Interlining":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
          }],
          "Trim":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
          }],
           "Packeting":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
           }],
           "CM":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
           }],
           "Value-add":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
           }],
           "Commission":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
           }],
           "Discount":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
           }],
           "GarmentFreight":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
           }],
           "Others":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
           }],
          "PDC":[{
              'Buyer':0,
              'Internal':0,
              'Available':0
          }],
          
      }
  ],
    summarysubHeadingArray:['Buyer','Internal','Available']
  };
  constructor(props) {
    super(props);
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif",
    };

    this.componentConfig = {
      iconFiletypes: [".jpg", ".png", ".gif"],
      showFiletypeIcon: true,
      postUrl: "/",
    };
    // this.state = { employees: service.getEmployees() };
    // this.states = service.getStates();
    this.getReferenceVersion = this.getReferenceVersion.bind(this);
    this.GetMarkerRefernceversion = this.GetMarkerRefernceversion.bind(this);
    this.getProductivityitem = this.getProductivityitem.bind(this);
    this.showMarkerversion = this.showMarkerversion.bind(this);
    this.getProductivityDocument= this.getProductivityDocument.bind(this);
    this.validatenumber = this.validatenumber.bind(this);
    this.openBuyerCMmodal = this.openBuyerCMmodal.bind(this);
    this.saveBuyerCM = this.saveBuyerCM.bind(this);
  }
  handleChangeIndex(index) {
    this.setState({ activeIndex: index });
  }

  handleChange(event, value) {
    this.setState({ activeIndex: value });
  }

  componentDidMount() {
    api.get("Buyer/GetBuyerDropDown").then((response) => {
      this.setState({ BuyerList: response.data.result.data });
    });

    api.get("Materialtype/GetItemTypeDropDown").then((response) => {
      this.setState({ MaterialTypeList: response.data.result.data });
    });

    api.get("SeasonMaster/GetSeasonList").then((response) => {
      this.setState({ seasonlists: response.data.result.data });
    });

    api
      .get("Miscellaneous/GetMiscellaneousList?MType=year")
      .then((response) => {
        this.setState({ yearlists: response.data.result.data });
      });

    api.get("Purpose/GetPurposeDropDown").then((response) => {
      this.setState({ purposeList: response.data.result.data });
    });

    api.get("Supplier/GetSupplierDropDown").then((response) => {
      this.setState({ SupplierList: response.data.result.data });
    });

    api.get("Purpose/GetPurposeDropDown").then((response) => {
      this.setState({ descriptionList: response.data.result.data });
    });

    api.get("Purpose/GetPurposeDropDown").then((response) => {
      this.setState({ SupplierReferenceList: response.data.result.data });
    });

    api.get("Purpose/GetPurposeDropDown").then((response) => {
      this.setState({ MarkerUOMList: response.data.result.data });
    });

    api
    .get("Miscellaneous/GetMiscellaneousList?MType=mode")
    .then((response) => {
      this.setState({ freightmodeList: response.data.result.data });
    });

    api
    .get("Miscellaneous/GetMiscellaneousList?MType=fit")
    .then((response) => {
      this.setState({ fitList: response.data.result.data });
    });

    

  }

  rhandleClickOpen = () => {
    this.setState({ ropen: true });
  };
  rhandleClose = () => {
    this.setState({ ropen: false });
  };
  getBuyerDivision1(val, field, e) {
    let fields = this.state.fields;

    fields["buyername"] = val.BuyerValue[0].value;
    this.setState({ fields });
    this.setState({
      BuyerValue: val.BuyerValue,
      RVbuyer: val.BuyerValue,
      MVbuyer: val.BuyerValue,
      PVbuyer: val.BuyerValue,
    });
    // this.setState({RVbuyer : val.BuyerValue });
    api
      .get(
        "BuyerDivision/GetBuyerDivisionList?BuyerID=" + val.BuyerValue[0].value
      )
      .then((response) => {
        this.setState({ BuyerDivisionList: response.data.result.data });
      })
      .catch((error) => {});
  }
  getMVBuyerDivisionList(val, field, e) {
    let fields = this.state.fields;

    fields["buyername"] = val.MVbuyer[0].value;
    // this.setState({fields});
    // this.setState({ BuyerValue: val.BuyerValue,RVbuyer : val.BuyerValue,MVbuyer: val.BuyerValue });
    // this.setState({RVbuyer : val.BuyerValue });
    api
      .get("BuyerDivision/GetBuyerDivisionList?BuyerID=" + val.MVbuyer[0].value)
      .then((response) => {
        this.setState({ BuyerDivisionList: response.data.result.data });
      })
      .catch((error) => {});
  }
  setstatevaluedropdownfunction = (name) => (event) => {
    let fields = this.state.fields;
    fields[name] = event[0].value;
    this.setState({ fields });
    if (name == "BuyerdivisionValue") {
      this.setState({ RVbuyerdiv: event, RVbuyerdiv: event });
      this.setState({ MVbuyerdiv: event, RVbuyerdiv: event });
      this.setState({ PVbuyerdiv: event });

      api
        .get("Costing/GetPCDCostDetail?LocCode=IND&&BuyDivCode=GAPMT")
        .then((response) => {
          this.setState({ pdcPercentage: response.data.data[0].pdcPer });
          /*Calculation For Add On PDC Value Per unit*/
            const PdcPervalue = Number(response.data.data[0].pdcPer) * Number(this.state.SummaryBuyerTotalValue);
            this.setState({ pdcPerunitvalue: PdcPervalue });

            setTimeout(() => {
              const SummaryPDCInternal = Number(this.state.pdcPercentage)         
              this.state.summaryvalueArray.map(item => { 
                var temp = Object.assign({}, item);
                temp["PDC"][0]['Internal'] = SummaryPDCInternal;
              })
              this.setState({ summaryvalueArray: this.state.summaryvalueArray });
            }, 1000);
          /***/  
        })
        .catch((error) => {});
    }
    if (name == "season") {
      this.setState({ RVseason: event, MVseason: event });
      this.setState({ PVseason: event });
    }
    if (name == "year") {
      this.setState({ RVyear: event, MVyear: event, PVyear: event });
    }
    if (name == "styleno") {
      this.setState({ RVstyleno: event, MVstyleno: event, PVstyleno: event });
      api
        .get("Costing/GetReadStyleNo?Masterstyleid=" + event[0].value)
        .then((response) => {
          this.setState({
            styleNodetails: response.data.data,
            styleDescription: response.data.data[0].styleDesc,
          });
        });
    }

    if (name == "materialType") {
      api
        .get("Costing/GetMaterialgroup?Materialtype=" + event[0].value)
        .then((response) => {
          this.setState({ MaterialGroupList: response.data.data });
        });
    }
    if(name=='materialGroup'){
      api
      .get("Costing/GetMaterialsubgroup?MaterialGrouptype=FABRIC")
      .then((response) => {
        this.setState({ MaterialSubGroupList: response.data.data });
      });
    }

    setTimeout(() => {
      this.getStyleList();
    }, 100);
    this.setState({ [name]: event });
  };
  saveBuyerCM(){
    const {buyerCMarray} = this.state;
    const tempValue= [];
    this.state.buyerCMarray.map((item, Bindex) => {
      if(Bindex==this.state.selectedIndex){
        if(item.isRadiochecked){
          tempValue.push({'orderQty':item.orderQty,'productivity':item.productivity,'noOfmachine':0,'noOfLines':item.noOfLines,'breakEvencm':0,'buyerCm':this.state.buyercm,'isRadiochecked':true});
        }else{
          NotificationManager.error("Please select any below value");
          tempValue.push({'orderQty':item.orderQty,'productivity':item.productivity,'noOfmachine':0,'noOfLines':item.noOfLines,'breakEvencm':0,'buyerCm':item.buyerCm,'isRadiochecked':false});
        }
        
      }else{
        tempValue.push({'orderQty':item.orderQty,'productivity':item.productivity,'noOfmachine':0,'noOfLines':item.noOfLines,'breakEvencm':0,'buyerCm':item.buyercm,'isRadiochecked':false});
      }
    });
   
    setTimeout(() => {
      this.setState({ buyerCMarray: tempValue });
    }, 1000);
    
    this.closeBuyerCMmodal();
  }
  getStyleList() {
    if (
      this.state.BuyerValue &&
      this.state.BuyerdivisionValue &&
      this.state.year
    ) {
      api
        .get(
          "ProductivityRequest/GetStyleNoDropDown?Buyer=" +
            this.state.BuyerValue[0].value +
            "&BuyDivCode=" +
            this.state.BuyerdivisionValue[0].value +
            "&Seasoncode=" +
            this.state.season[0].value +
            "&SeasonYear=" +
            this.state.year[0].value
        )
        .then((response) => {
          this.setState({ stylenolist: response.data.data });
        })
        .catch((error) => {});
      if (this.state.styleno) {
        // api
        //   .get(
        //     "TNAMaster/GetBuyerTNADropDown?Buyer=" +
        //       this.state.BuyerValue[0].value +
        //       "&BuyDivCode=" +
        //       this.state.BuyerdivisionValue[0].value +
        //       "&Seasoncode=" +
        //       this.state.season[0].value +
        //       "&SeasonYear=" +
        //       this.state.year[0].value +
        //       "&Style=" +
        //       this.state.styleno[0].value
        //   )
        //   .then((response) => {
        //     this.setState({ BuyerTNAlist: response.data.data });
        //   })
        //   .catch((error) => {});
      }
    }
  }
  handleChangeTextField = (name) => (event) => {
    this.setState({ [name]: event.target.value });

    let fields = this.state.fields;
    fields[name] = event.target.value;
    this.setState({ fields });
  };

  handleChangesingledropdown = (name) => (event) => {    
      this.setState({ [name]: event.target.value });   
      if(event.target.value=='kfit' ){
        this.setState({ keyFit: event.target.checked });
      }
  };
  handleSwitch = (e) => {
    this.setState({ enableSwitch: !this.state.enableSwitch });
 }

  openReferenceversion = () => {
    this.setState({ open: true });
  };
  openMarkerReferenceversion = () => {
    this.setState({ IsMarker: true });
  };
  openBuyerCMmodal(value){
    
    this.setState({selectedIndex:value});
     
    this.setState({ IsBuyerCm: true });

  };
  openProductivityversion = () => {
    this.setState({ IsProductivityModal: true });
  };
  openSAMversion = () => {
    this.setState({ IsSAMModal: true });
  };
  CloseRefernceversion = () => {
    this.setState({ open: false });
  };
  CloseMarkerRefernceversion = () => {
    this.setState({ IsMarker: false });
  };
  closeBuyerCMmodal= () => {
    this.setState({ IsBuyerCm: false });
  };
  CloseProductivityModal = () => {
    this.setState({ IsProductivityModal: false });
  };
  CloseSAMModal = () => {
    this.setState({ IsSAMModal: false });
  };
  OpenAttachmentPack = () => {
    this.setState({ IsAttachmentModal: true });
  };
  CloseAttachmentModal = () => {
    this.setState({ IsAttachmentModal: false });
  };
  OpenMaterialUnitPrice = () => {
    this.setState({ IsMaterialUnitPrice: true });
  };
  CloseMaterialUnitPrice = () => {
    this.setState({ IsMaterialUnitPrice: false });
  };
  setstatevaluefunction = (name) => (event) => {
    let fields = this.state.fields;
    fields[name] = event.target.value;
    this.setState({ fields });
    this.setState({ [name]: event.target.value });
  };

  getReferenceVersion() {
    if (
      this.state.RVbuyer &&
      this.state.RVbuyerdiv &&
      this.state.RVseason &&
      this.state.RVyear
    ) {
      api
        .get(
          "Costing/GetReferenceversion?Buyer=" +
            this.state.RVbuyerdiv[0].value +
            "&BuyDivCode=" +
            this.state.BuyerdivisionValue[0].value +
            "&Seasoncode=" +
            this.state.RVseason[0].value +
            "&SeasonYear=" +
            this.state.RVyear[0].value
        )
        .then((response) => {
          //this.setState({ stylenolist: response.data.data });
        })
        .catch((error) => {});
    }
  }
  GetMarkerRefernceversion() {
    if (
      this.state.RVbuyer &&
      this.state.RVbuyerdiv &&
      this.state.RVseason &&
      this.state.RVyear
    ) {
      api
        .get(
          "Costing/GetMarkerversion?Buyer=" +
            this.state.RVbuyerdiv[0].value +
            "&BuyDivCode=" +
            this.state.BuyerdivisionValue[0].value +
            "&Seasoncode=" +
            this.state.RVseason[0].value +
            "&SeasonYear=" +
            this.state.RVyear[0].value
        )
        .then((response) => {
          this.setState({ markerReferenceLists: response.data.data });
          //this.setState({ stylenolist: response.data.data });
        })
        .catch((error) => {});
    }
  }

  getProductivityDocument(value){
    const {buyerCMarray} = this.state;
    api
    .get(
      "Costing/GetProductivityGrid?DocumentNo="+value+"&MasterStyleNo=21145" 
    )
    .then((response) => {
      this.setState({ productivityGridObject: response.data.data });
      const tempValue= [];
      this.state.productivityGridObject.map((item) => {

        tempValue.push({'orderQty':item.orderQty,'productivity':item.productivity,'noOfmachine':0,'noOfLines':item.noOfLines,'breakEvencm':0,'buyerCm':0,'isRadiochecked':false});
        
      });
      
      
      this.setState({ buyerCMarray: tempValue });

    })
    .catch((error) => {});

    api.get("Costing/GetLineCost?DocumentNo="+value )
    .then((response) => {
      this.setState({ lineOfcost: response.data.data });
      
    })
    .catch((error) => {});
    this.CloseProductivityModal();
    
  }
  commissionSummaryCalculation(stateVal){
    if(stateVal=='commissionError'){
      setTimeout(() => {
        const CommissionSummary = Number(this.state.commission);

        this.state.summaryvalueArray.map(item => { 
          var temp = Object.assign({}, item);
          temp["Commission"][0]['Buyer'] = CommissionSummary;
          temp["Commission"][0]['Available'] = 0;
        })
        this.setState({ summaryvalueArray: this.state.summaryvalueArray });
      }, 1000);
    }
  }

  /*Calculation For Value-Add column in summary section*/
  valueAddSummaryCalculation(stateVal){
    if(stateVal=='washperunitBuyerError' ||  stateVal=='printPerUnitBuyerError' || stateVal=='embroideryBuyerError'){
      setTimeout(() => {
        const SUmmaryValueAdd = Number(this.state.washperunitBuyer) + Number(this.state.embroideryBuyer) + Number(this.state.printPerUnitBuyer);         
        this.state.summaryvalueArray.map(item => { 
          var temp = Object.assign({}, item);
          temp["Value-add"][0]['Buyer'] = SUmmaryValueAdd;
          const ValueAddBuyerAvailable  =  Number(temp["Value-add"][0]['Buyer']) - Number(temp["Value-add"][0]['Internal']);
          temp["Value-add"][0]['Available'] = ValueAddBuyerAvailable;
        })
        this.setState({ summaryvalueArray: this.state.summaryvalueArray });
      }, 1000);
    }
    if(stateVal=='washperunitInteralError' ||  stateVal=='printPerUnitInternalError' || stateVal=='embroideryInternalError'){
      setTimeout(() => {
        const SUmmaryValueAdd = Number(this.state.washperunitINternal) + Number(this.state.embroideryInternal) + Number(this.state.printPerUnitInternal);         
        this.state.summaryvalueArray.map(item => { 
          var temp = Object.assign({}, item);
              temp["Value-add"][0]['Internal'] = SUmmaryValueAdd;
              const ValueAddBuyerAvailable  =  Number(temp["Value-add"][0]['Buyer']) - Number(temp["Value-add"][0]['Internal']);
              temp["Value-add"][0]['Available'] = ValueAddBuyerAvailable;
        })
        this.setState({ summaryvalueArray: this.state.summaryvalueArray });
      }, 1000);
    }
  }

  freightCostSummaryCalc(stateVal){
    if(stateVal=='GarmentFreightInternalError'){
      setTimeout(() => {
        const FreightInternalValueAdd = Number(this.state.GarmentFreightInternal)         
        this.state.summaryvalueArray.map(item => { 
          var temp = Object.assign({}, item);
              temp["GarmentFreight"][0]['Internal'] = FreightInternalValueAdd;

              const GarmentFreightAvailable  =  Number(temp["GarmentFreight"][0]['Buyer']) - Number(temp["GarmentFreight"][0]['Internal']);
              temp["GarmentFreight"][0]['Available'] = GarmentFreightAvailable;
        })
        this.setState({ summaryvalueArray: this.state.summaryvalueArray });
      }, 1000);
    }
    else if(stateVal=='GarmentFreightBuyerError'){
      setTimeout(() => {
        const FreightBuyerValueAdd = Number(this.state.GarmentFreightBuyer)         
        this.state.summaryvalueArray.map(item => { 
          var temp = Object.assign({}, item);
          temp["GarmentFreight"][0]['Buyer'] = FreightBuyerValueAdd;

          const GarmentFreightAvailable  =  Number(temp["GarmentFreight"][0]['Buyer']) - Number(temp["GarmentFreight"][0]['Internal']);
          temp["GarmentFreight"][0]['Available'] = GarmentFreightAvailable;
        })
        this.setState({ summaryvalueArray: this.state.summaryvalueArray });
      }, 1000);
    }
  }
  /**/
  validateTwoDigitAndDecimal = (name) => (event) => {
    const re = /^(?=.*\d)\d{0,2}(?:\.\d{0,2})?$/;
    this.setState({ [event.target.id]: true });
    let fields = this.state.fields;
    const  temp1 = [];
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ [name]: event.target.value, [event.target.id]: false });
      
       /*Calculation For Value-Add column in summary section*/ 
        this.valueAddSummaryCalculation(event.target.id);
        this.commissionSummaryCalculation(event.target.id);
        this.freightCostSummaryCalc(event.target.id);
        this.otherSummarycalc(event.target.id);
      /**/

      if (event.target.id == "discountPercentError") {
        this.state.discountValue =
          Number(this.state.BuyerPrice) +
          Number((event.target.value / 100) * this.state.BuyerPrice);
        /*Summary Discount value calculation*/
          this.state.summaryvalueArray.map(item => { 
            var temp = Object.assign({}, item);
                temp["Discount"][0]['Buyer'] = this.state.discountValue;
          })
          this.setState({ summaryvalueArray: this.state.summaryvalueArray }) 
        /*****/
      }
    }

    this.setState({ fields });
  };
  otherSummarycalc(stateVal){
    if(stateVal=='OthersBuyerError'){
      setTimeout(() => {
        const OthersInternalValueAdd = Number(this.state.OthersBuyer)         
        this.state.summaryvalueArray.map(item => { 
          var temp = Object.assign({}, item);
              temp["Others"][0]['Buyer'] = OthersInternalValueAdd;

              const OthersAvailable  =  Number(temp["Others"][0]['Buyer']) - Number(temp["Others"][0]['Internal']);
              temp["Others"][0]['Available'] = OthersAvailable;
        })
        this.setState({ summaryvalueArray: this.state.summaryvalueArray });
      }, 1000);
    }
    else if(stateVal=='OthersInternalError'){
      setTimeout(() => {
        const OthersInternaleAdd = Number(this.state.OthersInternal)         
        this.state.summaryvalueArray.map(item => { 
          var temp = Object.assign({}, item);
          temp["Others"][0]['Internal'] = OthersInternaleAdd;

          const OthersAvailable  =  Number(temp["Others"][0]['Buyer']) - Number(temp["Others"][0]['Internal']);
          temp["Others"][0]['Available'] = OthersAvailable;
        })
        this.setState({ summaryvalueArray: this.state.summaryvalueArray });
      }, 1000);
    }
  }
  validateThreeDigitAndDecimal = (name) => (event) => {
    const re = /^(?=.*\d)\d{0,3}(?:\.\d{0,2})?$/;
    this.setState({ [event.target.id]: true });
    let fields = this.state.fields;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ [name]: event.target.value, [event.target.id]: false });
        /*Calculation For Value-Add column in summary section*/ 
        this.valueAddSummaryCalculation(event.target.id);
      /**/
      // fields[name] = event.target.value;
    }
    this.setState({ fields });
  };
  addPatternGrid(){
    const {FitGridRowData} = this.state;
    let patternItems = {
        "FitCostfit":this.state.FitCostFit[0].value,
        "BuyerCost":this.state.BuyerCost,
        "keyFit":this.state.keyFit
    }
    /**Check whether object is already exists */
    let IsMatch = false;
    FitGridRowData.map((item, index) => {
       IsMatch = JSON.stringify(patternItems) === JSON.stringify(item);
       if(IsMatch){
           return;
       }           
   });         
   if(!IsMatch){
    FitGridRowData.push(patternItems);
   }else{
       NotificationManager.error('Added Items is already exists in List');
   }      
   
    this.setState({FitGridRowData:FitGridRowData})
  
}
deleteFitCost(item){
  const {FitGridRowData} = this.state; 
      
  if (FitGridRowData.indexOf(item) !== -1) {
    FitGridRowData.splice(FitGridRowData.indexOf(item), 1);
  } 
  this.setState({FitGridRowData:FitGridRowData})
}
  handleRightsItem = (name) => (event) => {
    // const { name, value } = e.target;
    const {buyerCMarray} = this.state;
   
    const tempValue= [];
    this.state.buyerCMarray.map((item, Bindex) => {
      if(Bindex==event.target.id){
        tempValue.push({'orderQty':item.orderQty,'productivity':item.productivity,'noOfmachine':0,'noOfLines':item.noOfLines,'breakEvencm':0,'buyerCm':item.buyerCm,'isRadiochecked':true});
      }else{
        tempValue.push({'orderQty':item.orderQty,'productivity':item.productivity,'noOfmachine':0,'noOfLines':item.noOfLines,'breakEvencm':0,'buyerCm':item.buyerCm,'isRadiochecked':false});
      }
    });

    setTimeout(() => {
      this.setState({ buyerCMarray: tempValue });
      //this.setState({[name]: value});
    }, 1000);
    

    // console.log(e)
    // console.log(this.state)
  };
 
  validatenumber(e) {
    let fields = this.state.fields;
    if (e.target.id == "BuyerMarker") {
      const re = /^(?=.*\d)\d{0,3}(?:\.\d{0,2})?$/;
      this.setState({ IsBuyerMarkerError: true });
      let fields = this.state.fields;
      if (e.target.value === "" || re.test(e.target.value)) {
        this.setState({
          BuyerMarker: e.target.value,
          IsBuyerMarkerError: false,
        });
        fields["BuyerMarker"] = e.target.value;
      }
    }

    if (e.target.id == "InternalMarker") {
      const re = /^(?=.*\d)\d{0,3}(?:\.\d{0,2})?$/;
      this.setState({ IsInternalMarkerError: true });
      let fields = this.state.fields;
      if (e.target.value === "" || re.test(e.target.value)) {
        this.setState({
          InternalMarker: e.target.value,
          IsInternalMarkerError: false,
        });
        fields["InternalMarker"] = e.target.value;
      }
    }

    if (e.target.id == "Wastage") {
      const re = /^(?=.*\d)\d{0,2}(?:\.\d{0,2})?$/;
      this.setState({ IsWastageError: true });
      let fields = this.state.fields;
      if (e.target.value === "" || re.test(e.target.value)) {
        this.setState({ Wastage: e.target.value, IsWastageError: false });
        fields["Wastage"] = e.target.value;
      }
    }

    if (
      e.target.id == "Finance" ||
      e.target.id == "MaterialPrice" ||
      e.target.id == "FreightPrice" ||
      e.target.id == "AllowancePercentage" ||
      e.target.id == "BuyerPrice"
    ) {
      const re = /^(?=.*\d)\d{0,2}(?:\.\d{0,2})?$/;
      if (e.target.id == "MaterialPrice") {
        this.setState({ IsMaterialPriceError: true });
      }
      if (e.target.id == "Finance") {
        this.setState({ IsFinanceError: true });
      }
      if (e.target.id == "FreightPrice") {
        this.setState({ IsFreightPriceError: true });
      }
      if (e.target.id == "AllowancePercentage") {
        this.setState({ IsAllowancePercError: true });
      }
      if (e.target.id == "BuyerPrice") {
        this.setState({ IsBuyerPriceError: true });
      }

      //this.setState({'IsFinanceError':true,'IsMaterialPriceError':true,'IsFreightPriceError':true})

      if (e.target.value === "" || re.test(e.target.value)) {
        if (e.target.id == "MaterialPrice") {
          this.setState({
            MaterialPrice: e.target.value,
            IsMaterialPriceError: false,
          });
          fields["MaterialPrice"] = e.target.value;
        } else if (e.target.id == "Finance") {
          this.setState({ Finance: e.target.value, IsFinanceError: false });
          fields["Finance"] = e.target.value;
        } else if (e.target.id == "FreightPrice") {
          this.setState({
            FreightPrice: e.target.value,
            IsFreightPriceError: false,
          });
          fields["FreightPrice"] = e.target.value;
        } else if (e.target.id == "AllowancePercentage") {
          this.setState({
            AllowancePercentage: e.target.value,
            IsAllowancePercError: false,
          });
          fields["AllowancePercentage"] = e.target.value;
        } else if (e.target.id == "BuyerPrice") {
          this.setState({
            BuyerPrice: e.target.value,
            IsBuyerPriceError: false,
          });
          fields["BuyerPrice"] = e.target.value;
        }
      }

      setTimeout(() => {
        const IntPriceSum =
          Number(this.state.MaterialPrice) + Number(this.state.FreightPrice);

        const FinalInternalPrice =
          Number(IntPriceSum) * Number(this.state.InternalMarker);
        this.setState({
          InternalPrice: FinalInternalPrice,
          SumMaterialUnitPrice: IntPriceSum,
        });
        /*Calculation For Buyer Price*/
        if (this.state.AllowancePercentage > 0) {
          const BuyerPriceValue =
            (Number(FinalInternalPrice) +
              Number(
                (this.state.AllowancePercentage / 100) * FinalInternalPrice
              ) +
              Number((this.state.Finance / 100) * FinalInternalPrice)) *
            (Number(this.state.BuyerMarker) +
              Number((this.state.Wastage / 100) * this.state.BuyerMarker));

          /*Calculation For available CM*/
          const availableCM = BuyerPriceValue - FinalInternalPrice;
          /**/
          this.setState({
            BuyerPrice: BuyerPriceValue.toFixed(2),
            AvailableCM: availableCM.toFixed(2),
          });
        }
        /*Calculation For available CM*/
      }, 100);
    }

    this.setState({ fields });
  }

  addMaterialsGrid() {
    const { PatternTempRowData } = this.state;

    let patternItems = {
      materialType: this.state.materialType[0].value,
      materialGroup: this.state.materialGroup[0].value,
      materialSubGroup: this.state.materialsubGroup[0].value,
      description: this.state.description[0].value,
      Supplier: this.state.Supplier[0].value,
      SupplierRef: this.state.SupplierReference[0].value,
      Buyermarker: this.state.BuyerMarker,
      InternalMarker: this.state.InternalMarker,
      MarkerUOM: this.state.markerUom[0].value,
      Wastage: this.state.Wastage,
      Finance: this.state.Finance,
      MaterialUnitPrice: this.state.SumMaterialUnitPrice,
      internalPrice: this.state.InternalPrice,
      allowancePercentage: this.state.AllowancePercentage,
      BuyerPrice: this.state.BuyerPrice,
      AvailableCM: this.state.AvailableCM,
    };
    /**Check whether object is already exists */
    let IsMatch = false;
    PatternTempRowData.map((item, Patternindex) => {
      IsMatch = JSON.stringify(patternItems) === JSON.stringify(item);
      if (IsMatch) {
        return;
      }
    });
    if (!IsMatch) {
      PatternTempRowData.push(patternItems);
    } else {
      NotificationManager.error("Added Items is already exists in List");
    }
    
    this.setState({ PatternTempRowData: PatternTempRowData });

    /****Summary Fabric & Interlining Calculation****/
      this.state.SummaryTotalFabricBuyerPrice=this.state.SummaryTotalFabricinternalPrice = 0;
      this.state.SummaryTotalInterliningBuyerPrice=this.state.SummaryTotalInterlininginternalPrice = 0;
      this.state.SummaryTotalTrimBuyerPrice=this.state.SummaryTotalTriminternalPrice = 0;
      this.state.SummaryTotalPKTBuyerPrice=this.state.SummaryTotalPKTinternalPrice = 0;

      this.state.PatternTempRowData.map((materialDetailListItem, indexval) => {
         /*Material Type - Fabric*/
        if(materialDetailListItem.materialType=='FBR'){
          this.state.SummaryTotalFabricBuyerPrice += Number(materialDetailListItem.BuyerPrice);
         this.state.SummaryTotalFabricinternalPrice += Number(materialDetailListItem.internalPrice);
        }
         /*Material Type - Interlining*/
        if(materialDetailListItem.materialType=='ILN'){
          this.state.SummaryTotalInterliningBuyerPrice += Number(materialDetailListItem.BuyerPrice);
         this.state.SummaryTotalInterlininginternalPrice += Number(materialDetailListItem.internalPrice);
        }
        /*Material Type - Trim*/
        if(materialDetailListItem.materialType=='TMS'){
          this.state.SummaryTotalTrimBuyerPrice += Number(materialDetailListItem.BuyerPrice);
         this.state.SummaryTotalTriminternalPrice += Number(materialDetailListItem.internalPrice);
        }
        /*Material Type - Packeting*/
        if(materialDetailListItem.materialType=='PKT'){
          this.state.SummaryTotalPKTBuyerPrice += Number(materialDetailListItem.BuyerPrice);
         this.state.SummaryTotalPKTinternalPrice += Number(materialDetailListItem.internalPrice);
        }
      });
    
      this.state.SummaryTotalFabricAvailable = Number(this.state.SummaryTotalFabricBuyerPrice) - Number(this.state.SummaryTotalFabricinternalPrice); 

      this.state.SummaryTotalInterliningAvailable = Number(this.state.SummaryTotalInterliningBuyerPrice) - Number(this.state.SummaryTotalInterlininginternalPrice); 

      this.state.SummaryTotalTrimAvailable = Number(this.state.SummaryTotalTrimBuyerPrice) - Number(this.state.SummaryTotalTriminternalPrice); 

      this.state.SummaryTotalPKTAvailable = Number(this.state.SummaryTotalPKTBuyerPrice) - Number(this.state.SummaryTotalPKTinternalPrice);
      setTimeout(() => {
        const FabricSumBuyerPrice = Number(this.state.SummaryTotalFabricBuyerPrice) ;      
        const FabricSumInternalPrice = Number(this.state.SummaryTotalFabricinternalPrice) ;
        const FabricSumAvailablePrice = Number(this.state.SummaryTotalFabricAvailable) ;  
        
        this.state.summaryvalueArray.map(item => { 
          var temp = Object.assign({}, item);
          temp["Fabric"][0]['Buyer'] = FabricSumBuyerPrice.toFixed(2);
          temp["Fabric"][0]['Internal'] = FabricSumInternalPrice.toFixed(2);
          temp["Fabric"][0]['Available'] = FabricSumAvailablePrice.toFixed(2);

          temp["Interlining"][0]['Buyer'] = this.state.SummaryTotalInterliningBuyerPrice.toFixed(2);
          temp["Interlining"][0]['Internal'] = this.state.SummaryTotalInterlininginternalPrice.toFixed(2);
          temp["Interlining"][0]['Available'] = this.state.SummaryTotalInterliningAvailable.toFixed(2);

          temp["Trim"][0]['Buyer'] = this.state.SummaryTotalTrimBuyerPrice.toFixed(2);
          temp["Trim"][0]['Internal'] = this.state.SummaryTotalTriminternalPrice.toFixed(2);
          temp["Trim"][0]['Available'] = this.state.SummaryTotalTrimAvailable.toFixed(2);

          temp["Packeting"][0]['Buyer'] = this.state.SummaryTotalPKTBuyerPrice.toFixed(2);
          temp["Packeting"][0]['Internal'] = this.state.SummaryTotalPKTinternalPrice.toFixed(2);
          temp["Packeting"][0]['Available'] = this.state.SummaryTotalPKTAvailable.toFixed(2);
         
        })
        this.setState({ summaryvalueArray: this.state.summaryvalueArray });
      }, 1000);
    /******ENds*****/
  }
  deletePatternGrid(item) {
    const { PatternTempRowData } = this.state;

    if (PatternTempRowData.indexOf(item) !== -1) {
      PatternTempRowData.splice(PatternTempRowData.indexOf(item), 1);
    }
    this.setState({ PatternTempRowData: PatternTempRowData });
  }
  getProductivityitem() {
    if (
      this.state.PVbuyer &&
      this.state.PVbuyerdiv &&
      this.state.PVseason &&
      this.state.PVyear
    ) {
      api
        .get(
          "Costing/GetProductivityDocumentNo?Buyer=" +
            this.state.PVbuyer[0].value +
            "&BuyDivCode=" +
            this.state.PVbuyerdiv[0].value +
            "&Seasoncode=" +
            this.state.PVseason[0].value +
            "&SeasonYear=" +
            this.state.PVyear[0].value +
            "&Styleno=" +
            this.state.PVstyleno[0].value
        )
        .then((response) => {
          this.setState({ produtivityReferenceList: response.data.data });
          //this.setState({ stylenolist: response.data.data });
        })
        .catch((error) => {});
    }
  }
  showMarkerversion(value) {
    this.markerversionSelected = true;
    this.setState({ selectedMarker: value });
    this.CloseMarkerRefernceversion();
  }
  render() {
    const { theme, listData, transferreport, expenseCategory } = this.props;
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;
    const eventHandlers = {
      init: (dz) => (this.dropzone = dz),
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile,
    };
    const BuyerOptions = [];
    for (const item of this.state.BuyerList) {
      BuyerOptions.push({ value: item.buyerCode, label: item.buyerName });
    }

    const MaterialTypeOptions = [];
    for (const item of this.state.MaterialTypeList) {
      MaterialTypeOptions.push({ value: item.mattype, label: item.matDesc });
    }

    const MaterialGroupOptions = [];
    for (const item of this.state.MaterialGroupList) {
      MaterialGroupOptions.push({ value: item.matGroup, label: item.matGroup });
    }

    const MaterialSubGroupOptions = [];
    for (const item of this.state.MaterialSubGroupList) {
      MaterialSubGroupOptions.push({ value: item.matSubGroup, label: item.matSubGroup });
    }
    
    const supplierOptions = [];
    for (const item of this.state.SupplierList) {
      supplierOptions.push({ value: item.supCode, label: item.supName });
    }

    const descriptionOPtion = [];
    for (const item of this.state.descriptionList) {
      descriptionOPtion.push({ value: item.parntslno, label: item.purpose });
    }

    const SupplierReferenceoptions = [];
    for (const item of this.state.SupplierReferenceList) {
      SupplierReferenceoptions.push({
        value: item.parntslno,
        label: item.purpose,
      });
    }

    const MarkeruomOptions = [];
    for (const item of this.state.MarkerUOMList) {
      MarkeruomOptions.push({ value: item.parntslno, label: item.purpose });
    }

    const BuyerDivisionOptions = [];
    for (const item of this.state.BuyerDivisionList) {
      BuyerDivisionOptions.push({
        value: item.divisionCode,
        label: item.divisionName,
      });
    }

    const seasonoptions = [];
    for (const item of this.state.seasonlists) {
      seasonoptions.push({ value: item.seasonCode, label: item.seasonName });
    }

    const yearoptions = [];
    for (const item of this.state.yearlists) {
      yearoptions.push({ value: item.code, label: item.codeDesc });
    }

    const Freightmodeoptions = [];
    for (const item of this.state.freightmodeList) {
      Freightmodeoptions.push({ value: item.code, label: item.codeDesc });
    }

    const Fitoptions = [];
    for (const item of this.state.fitList) {
      Fitoptions.push({ value: item.code, label: item.codeDesc });
    }

    

    const Purposeoptions = [];
    for (const item of this.state.purposeList) {
      Purposeoptions.push({ value: item.parntslno, label: item.purpose });
    }
    const styleNooptions = [];
    for (const item of this.state.stylenolist) {
      styleNooptions.push({
        value: item.masterStyle,
        label: item.refStyleNo + "-" + item.masterStyle,
      });
    }

    const BuyerTNAoptions = [];
    for (const item of this.state.BuyerTNAlist) {
      BuyerTNAoptions.push({ value: item.id, label: item.refStyleNo });
    }

    
    let Productuivtylistshtml = null;
    
    if (this.state.produtivityReferenceList.length > 0) {
      Productuivtylistshtml = this.state.produtivityReferenceList.map((n, indexprod) => {
        return (
          <tr className="cursor-pointer"  onClick={(e) => this.getProductivityDocument(n.prReqNo)} >
            <td>
              {this.state.PVbuyer[0].value}
            </td>
            <td>{n.prReqNo}</td>
            <td>{this.state.PVstyleno[0].value}</td>
          </tr>
        );
      });
    } else {
      Productuivtylistshtml = (
        <tr>
          <td colSpan="2" className="no-records-data">
            <span>No records found</span>
          </td>
        </tr>
      );
    }
    /*Summary Section Total calculation For Buyer*/
      this.state.SummaryBuyerTotalValue = 0;
      this.state.SummaryInternalTotalValue = 0;
      this.state.SummaryAvailableTotalValue = 0;
      this.state.summaryHeadingArray.map((n,index) => {                               
        this.state.SummaryBuyerTotalValue +=  Number(this.state.summaryvalueArray[0][n][0]['Buyer']);
        this.state.SummaryInternalTotalValue +=  Number(this.state.summaryvalueArray[0][n][0]['Internal']);
        this.state.SummaryAvailableTotalValue +=  Number(this.state.summaryvalueArray[0][n][0]['Available']);
      });
    /***/
    
   
    let buyerrightlistshtml = null;
    if (this.state.markerReferenceLists.length > 0) {
      buyerrightlistshtml = this.state.markerReferenceLists.map((n, indexBuyer) => {
        return (
          <tr className="cursor-pointer">
            <td onClick={(e) => this.showMarkerversion(n.masterStyle)}>
              {n.refStyleNo}
            </td>
            <td>{n.masterStyle}</td>
          </tr>
        );
      });
    } else {
      buyerrightlistshtml = (
        <tr>
          <td colSpan="2" className="no-records-data">
            <span>No records found</span>
          </td>
        </tr>
      );
    }

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
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      onChange={this.handleChangesingledropdown("IsConfirm")}
                      value="BC"
                    />
                  }
                  label="Buyer Confirmation"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      onChange={this.handleChangesingledropdown("Iscomplete")}
                      value="CD"
                    />
                  }
                  label="Complete"
                />

                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-warning mr-10 text-white btn-icon b-sm"
                  tabindex="0"
                  type="button"
                >
                  <span className="MuiButton-label">
                    clear <i className="zmdi zmdi-save"></i>
                  </span>
                  <span className="MuiTouchRipple-root"></span>
                </button>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 text-white btn-icon b-sm"
                  tabindex="0"
                  type="button"
                >
                  <span className="MuiButton-label">
                    Save <i className="zmdi zmdi-close-circle-o"></i>
                  </span>
                  <span className="MuiTouchRipple-root"></span>
                </button>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic"
                  tabindex="0"
                  type="button"
                >
                  <i className="zmdi zmdi-copy"></i>
                  <span className="MuiTouchRipple-root"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <Accordion className="border mb-15 mt-15">
              <AccordionSummary
                expandIcon={<i className="zmdi zmdi-chevron-down"></i>}
              >
                <div className="acc_title_font">
                  <Typography>Acitvity</Typography>
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <div className="row no-f-mb">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <FormControl fullWidth>
                      {/* <InputLabel htmlFor="age-simple"></InputLabel> */}
                      <div className="form-group mt-15 text-center">
                          <img
                            src={require("Assets/avatars/style-img1.png")}
                            alt="user prof"
                            className="rounded-circle mr-15"
                            width="50"
                            height="50"
                          />
                      </div>
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Buyer"
                      options={BuyerOptions}
                      ref="buyername"
                      onChange={(values) =>
                        this.getBuyerDivision1(
                          { BuyerValue: values },
                          this,
                          "buyername"
                        )
                      }
                      placeholder="Buyer"
                      values={this.state.BuyerValue}
                    />
                    <span className="error">
                      {this.state.errors["buyername"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Buyer Division"
                      options={BuyerDivisionOptions}
                      ref="buyerdivision"
                      placeholder="Buyer Division"
                      onChange={this.setstatevaluedropdownfunction(
                        "BuyerdivisionValue"
                      )}
                      values={this.state.BuyerdivisionValue}
                    />
                    <span className="error">
                      {this.state.errors["BuyerdivisionValue"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Season"
                      options={seasonoptions}
                      // onChange={values => this.setState({ season:values })}
                      onChange={this.setstatevaluedropdownfunction("season")}
                      placeholder="Select Season"
                      values={this.state.season}
                    />
                    <span className="error">{this.state.errors["season"]}</span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Year"
                      options={yearoptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction("year")}
                      placeholder="Year"
                      values={this.state.year}
                    />
                    <span className="error">{this.state.errors["year"]}</span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12  mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Style No"
                      options={styleNooptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction("styleno")}
                      placeholder="Style No"
                      values={this.state.styleno}
                    />
                    <span className="error">
                      {this.state.errors["styleno"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <TextField
                      id="Buyer"
                      fullWidth
                      label="Style Description"
                      placeholder="Style Description"
                      value={this.state.styleDescription}
                      disabled
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Purpose"
                      options={Purposeoptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction("purpose")}
                      placeholder="Purpose"
                      values={this.state.purpose}
                    />
                    <span className="error">
                      {this.state.errors["purpose"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="w-100 float-left">
                      <div className="w-80 float-left">
                        <div className="form-group btn-right">
                          <TextField
                            id="ReferenceVersion"
                            fullWidth
                            label="Reference Version"
                            placeholder="Reference Version"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="w-20 float-left">
                        <button
                          className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon b-ic add mt-15"
                          tabindex="0"
                          type="button"
                          onClick={this.openReferenceversion}
                        >
                          <i className="zmdi zmdi-plus-circle"></i>
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="Buyer"
                        fullWidth
                        label="Costing Options"
                        placeholder="Costing Options"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="Buyer"
                        fullWidth
                        label="Date"
                        placeholder="Date"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="w-100 float-left">
                      <div className="w-80 float-left">
                        <TextField
                          id="markerVersion"
                          fullWidth
                          label="Marker Version & UOM"
                          placeholder="Marker Version & UOM"
                          value={this.state.selectedMarker}
                          disabled
                        />
                      </div>
                      <div className="w-20 float-left">
                        <button
                          className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon b-ic add mt-15"
                          tabindex="0"
                          type="button"
                          onClick={this.openMarkerReferenceversion}
                        >
                          <i className="zmdi zmdi-plus-circle"></i>
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix col-12">&nbsp;</div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="w-100 float-left">
                      <div className="w-80 float-left">
                        <TextField
                          id="productivity"
                          fullWidth
                          label="Productivity"
                          placeholder="Productivity"
                        />
                      </div>
                      <div className="w-20 float-left">
                        <button
                          className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon b-ic add mt-15"
                          tabindex="0"
                          type="button"
                          onClick={this.openProductivityversion}
                        >
                          <i className="zmdi zmdi-plus-circle"></i>
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="Locaiton"
                        fullWidth
                        label="Location"
                        placeholder="Location"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="LineoFCost"
                        fullWidth
                        label="Line oF Cost"
                        placeholder="LineoFCost"
                        value={this.state.lineOfcost}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="w-100 float-left">
                      <div className="w-80 float-left">
                        <TextField
                          id="productivity"
                          fullWidth
                          label="SAM"
                          placeholder="SAM"
                          disabled
                        />
                      </div>
                      <div className="w-20 float-left">
                        <button
                          className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary  text-white btn-icon b-ic add mt-15"
                          tabindex="0"
                          type="button"
                          onClick={this.openSAMversion}
                        >
                          <i className="zmdi zmdi-plus-circle"></i>
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix col-12">&nbsp;</div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-10">
                    <div className="form-group ">
                      <Select1
                        dropdownPosition="auto"
                        createNewLabel="Currency"
                        options={styleNooptions}
                        onChange={this.setstatevaluedropdownfunction(
                          "Currency"
                        )}
                        placeholder="Currency"
                        values={this.state.Currency}
                      />
                      <span className="error">
                        {this.state.errors["Currency"]}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-10">
                    <div className="form-group ">
                      <Select1
                        dropdownPosition="auto"
                        createNewLabel="Buyer TnA"
                        options={BuyerTNAoptions}
                        onChange={this.setstatevaluedropdownfunction(
                          "buyertna"
                        )}
                        placeholder="Buyer TNA"
                        values={this.state.buyertna}
                      />
                      <span className="error">
                        {this.state.errors["buyertna"]}
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                    <div className="form-group">
                      <TextField
                        id="Version"
                        fullWidth
                        label="Version"
                        placeholder="Version"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                    <div className="form-group btn-right">
                      <TextField
                        id="SaleOrder"
                        fullWidth
                        label="Sale Order"
                        placeholder="Sale Order"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-10">
                    <div
                      class="item cursor-pointer"
                      onClick={this.OpenAttachmentPack}
                    >
                      <span class="material-icons mr-10">attach_file</span>
                      <span>Attachment</span>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
            <Accordion className="border mb-15">
              <AccordionSummary
                expandIcon={<i className="zmdi zmdi-chevron-down"></i>}
              >
                <div className="acc_title_font">
                  <Typography>Material Details </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Material Type"
                      options={MaterialTypeOptions}
                      ref="MaterialType"
                      onChange={this.setstatevaluedropdownfunction(
                        "materialType"
                      )}
                      placeholder="Material Type"
                      values={this.state.materialType}
                    />
                    <span className="error">
                      {this.state.errors["materialType"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Material Group"
                      options={MaterialGroupOptions}
                      ref="materialGroup"
                      placeholder="Material Group"
                      onChange={this.setstatevaluedropdownfunction(
                        "materialGroup"
                      )}
                      values={this.state.materialGroup}
                    />
                    <span className="error">
                      {this.state.errors["materialGroup"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Material Sub Group"
                      options={MaterialSubGroupOptions}
                      onChange={this.setstatevaluedropdownfunction(
                        "materialsubGroup"
                      )}
                      placeholder="Material Sub Group"
                      values={this.state.materialsubGroup}
                    />
                    <span className="error">
                      {this.state.errors["materialsubGroup"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Supplier"
                      options={supplierOptions}
                      onChange={this.setstatevaluedropdownfunction("Supplier")}
                      placeholder="Supplier"
                      values={this.state.Supplier}
                    />
                    <span className="error">
                      {this.state.errors["Supplier"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Description"
                      options={descriptionOPtion}
                      onChange={this.setstatevaluedropdownfunction(
                        "description"
                      )}
                      placeholder="Description"
                      values={this.state.description}
                    />
                    <span className="error">
                      {this.state.errors["description"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12  mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Supplier Reference"
                      options={SupplierReferenceoptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction(
                        "SupplierReference"
                      )}
                      placeholder="Supplier Reference"
                      values={this.state.SupplierReference}
                    />
                    <span className="error">
                      {this.state.errors["SupplierReference"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="BuyerMarker"
                        fullWidth
                        label="Buyer Marker"
                        placeholder="Buyer Marker"
                        onChange={this.validatenumber}
                        value={this.state.BuyerMarker}
                        //onChange={this.handleChangeTextField("BuyerMarker")}
                      />
                    </div>
                    {this.state.IsBuyerMarkerError && (
                      <span className="error">
                        Marker Should only 3 digits with 2 decimal points
                      </span>
                    )}
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="InternalMarker"
                        fullWidth
                        label="Internal Marker"
                        placeholder="Internal Marker"
                        onChange={this.validatenumber}
                        value={this.state.InternalMarker}
                      />
                      {this.state.IsInternalMarkerError && (
                        <span className="error">
                          Internal Marker Should only 3 digits with 2 decimal
                          points
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12  mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Marker UOM"
                      options={MarkeruomOptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction("markerUom")}
                      placeholder="Marker UOM"
                      values={this.state.markerUom}
                    />
                    <span className="error">
                      {this.state.errors["markerUom"]}
                    </span>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="Wastage"
                        fullWidth
                        label="Wastage"
                        placeholder="Wastage"
                        // onChange={this.handleChangeTextField("Wastage")}
                        onChange={this.validatenumber}
                        value={this.state.Wastage}
                      />
                      {this.state.IsWastageError && (
                        <span className="error">
                          Internal Marker Should only 2 digits with 2 decimal
                          points
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="Finance"
                        fullWidth
                        label="Finance"
                        placeholder="Finance"
                        onChange={this.validatenumber}
                        value={this.state.Finance}
                      />
                      {this.state.IsFinanceError && (
                        <span className="error">
                          Finance Should only 2 digits with 2 decimal points
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group mt-15">
                      <button
                        type="button"
                        class="btn btn-outline-primary w-100"
                        onClick={this.OpenMaterialUnitPrice}
                      >
                        Material Unit Price {this.state.materialUnitPrice}{" "}
                        <i class="zmdi zmdi-arrow-right-top"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="InternalPrice"
                        fullWidth
                        label="Internal Price"
                        placeholder="Internal Price"
                        value={this.state.InternalPrice}
                        disabled
                        //onChange={this.handleChangeTextField("InternalPrice")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="AllowancePercentage"
                        fullWidth
                        label="Allowance Percentage"
                        placeholder="Allowance Percentage"
                        // onChange={this.handleChangeTextField(
                        //   "AllowancePercentage"
                        // )}
                        onChange={this.validatenumber}
                        value={this.state.AllowancePercentage}
                      />
                      {this.state.IsAllowancePercError && (
                        <span className="error">
                          Allowance Percentage only 2 digits with 2 decimal
                          points
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="BuyerPrice"
                        fullWidth
                        label="Buyer Price"
                        placeholder="Buyer Price"
                        onChange={this.validatenumber}
                        value={this.state.BuyerPrice}
                        // onChange={this.handleChangeTextField("BuyerPrice")}
                      />
                      {this.state.IsBuyerPriceError && (
                        <span className="error">
                          Buyer only 2 digits with 2 decimal points
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <TextField
                        id="AvailableCM"
                        fullWidth
                        label="Available CM"
                        placeholder="Available CM"
                        value={this.state.AvailableCM}
                        //onChange={this.handleChangeTextField("AvailableCM")}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="table-responsive mt-0">
                    <div className="float-right">
                      <div className="form-group">
                        <button
                          className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add"
                          tabindex="0"
                          type="button"
                          onClick={(e) => this.addMaterialsGrid()}
                        >
                          <i className="zmdi zmdi-plus-circle"></i>
                          <span className="MuiTouchRipple-root"></span>
                        </button>
                      </div>
                    </div>
                    <table className="table mt-10 data w-100 float-left">
                      <thead>
                        <tr>
                          <th className="">Actions</th>
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
                        {this.state.PatternTempRowData.map((n, Pateernindex) => {
                          return (
                            <tr>
                              <td className="text-center">
                                {" "}
                                <button
                                  className="MuiButtonBase-root   mr-10 text-danger btn-icon b-ic delete"
                                  tabindex="0"
                                  type="button"
                                  onClick={(e) => this.deletePatternGrid(n)}
                                >
                                  <i className="zmdi zmdi-delete"></i>
                                  <span className="MuiTouchRipple-root"></span>
                                </button>{" "}
                              </td>
                              <td>
                                <div className="media">
                                  <img
                                    src={require("Assets/avatars/style-img1.png")}
                                    alt="user prof"
                                    className="rounded-circle mr-15"
                                    width="50"
                                    height="50"
                                  />
                                </div>
                              </td>
                              <td>{n.materialType} </td>
                              <td>{n.materialGroup} </td>
                              <td> {n.materialSubGroup}</td>
                              <td> {n.description}</td>
                              <td>{n.Supplier} </td>
                              <td>{n.SupplierRef} </td>
                              <td>{n.Buyermarker} </td>
                              <td>{n.InternalMarker}</td>
                              <td>{n.MarkerUOM} </td>
                              <td>{n.Wastage} </td>
                              <td>{n.Finance} </td>
                              <td>{n.MaterialUnitPrice} </td>
                              <td>{n.internalPrice} </td>
                              <td>{n.allowancePercentage} </td>
                              <td>{n.BuyerPrice} </td>
                              <td>{n.AvailableCM} </td>
                            </tr>
                          );
                        })}
                        {this.state.PatternTempRowData.length == 0 && (
                          <tr>
                            <td colSpan="8" className="no-records-data">
                              No Records Found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          
        </RctCollapsibleCard>
        <div className="row no-f-mb mt-25">
        <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 pr-0">
        {/*  Add On Section Starts  */}
        <RctCollapsibleCard
          key={1}
          customClasses=""
          colClasses="col-sm-12 col-md-6 col-lg-12 w-xs-full ft-lft mb-25"
          heading="Add Ons"
          fullBlock
        >
          <RctCardContent>
            <TabContainer>
              <Form inline>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="">
                        <h4>Wash per unit:</h4> 
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="float-right form-group mb-10 mr-10 p-0 w-100">
                        <FormGroup className="mr-10 mb-10">
                          <Label for="Email-7" hidden>
                            {" "}
                            Buyer
                          </Label>
                          <Input
                            type="washperunitBuyer"
                            name="washperunitBuyer"
                            id="washperunitBuyerError"
                            value={this.state.washperunitBuyer}
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "washperunitBuyer"
                            )}
                          />
                        </FormGroup>
                        {this.state.washperunitBuyerError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="washperunitInternal"
                            name="washperunitInternal"
                            id="washperunitInteralError"
                            value={this.state.washperunitINternal}
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "washperunitINternal"
                            )}
                          />
                        </FormGroup>
                        {this.state.washperunitInteralError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="">
                        <h4>Embroidery per unit</h4> :
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Buyer
                          </Label>
                          <Input
                            type="embroideryBuyer"
                            name="embroideryBuyer"
                            id="embroideryBuyerError"
                            value={this.state.embroideryBuyer}
                            placeholder="Buyer"
                            onChange={this.validateThreeDigitAndDecimal(
                              "embroideryBuyer"
                            )}
                          />
                        </FormGroup>
                        {this.state.embroideryBuyerError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="embroideryInternal"
                            name="embroideryInternal"
                            id="embroideryInternalError"
                            value={this.state.embroideryInternal}
                            placeholder="Buyer"
                            onChange={this.validateThreeDigitAndDecimal(
                              "embroideryInternal"
                            )}
                          />
                        </FormGroup>
                        {this.state.embroideryInternalError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="col-lg-12">
                        <h4>Print per unit</h4> :
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Buyer
                          </Label>
                          <Input
                            type="printPerUnitBuyer"
                            name="printPerUnitBuyer"
                            id="printPerUnitBuyerError"
                            value={this.state.printPerUnitBuyer}
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "printPerUnitBuyer"
                            )}
                          />
                        </FormGroup>
                        {this.state.printPerUnitBuyerError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="printPerUnitInternal"
                            name="printPerUnitInternal"
                            id="printPerUnitInternalError"
                            value={this.state.printPerUnitInternal}
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "printPerUnitInternal"
                            )}
                          />
                        </FormGroup>
                        {this.state.printPerUnitInternalError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="">
                        <h4>Garment Freight cost</h4> :
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Buyer
                          </Label>
                          <Input
                            type="email"
                            name="email"
                            id="GarmentFreightBuyerError"
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "GarmentFreightBuyer"
                            )}
                            value={this.state.GarmentFreightBuyer}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="email"
                            name="email"
                            id="GarmentFreightInternalError"
                            placeholder="Internal"
                            onChange={this.validateTwoDigitAndDecimal(
                              "GarmentFreightInternal"
                            )}
                            value={this.state.GarmentFreightInternal}
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="col-lg-12">
                        <h4>Testing</h4> :
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Buyer
                          </Label>
                          <Input
                            type="testingBuyer"
                            name="testingBuyer"
                            id="testingBuyerError"
                            value={this.state.testingBuyer}
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "testingBuyer"
                            )}
                          />
                        </FormGroup>
                        {this.state.testingBuyerError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="testingInternal"
                            name="testingInternal"
                            id="testingInternalError"
                            value={this.state.testingInternal}
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "testingInternal"
                            )}
                          />
                        </FormGroup>
                        {this.state.testingInternalError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                        <label for="Email-7" className="col-lg-12">
                          <h4>Others</h4> :
                        </label>
                      </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Buyer
                          </Label>
                          <Input
                            type="OthersBuyer"
                            name="OthersBuyer"
                            id="OthersBuyerError"
                            value={this.state.OthersBuyer}
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "OthersBuyer"
                            )}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="OthersInternal"
                            name="OthersInternal"
                            id="OthersInternalError"
                            value={this.state.OthersInternal}
                            placeholder="Internal"
                            onChange={this.validateTwoDigitAndDecimal(
                              "OthersInternal"
                            )}
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">         
                      <label for="Email-7" className="col-lg-12">
                        <h4>PDC value per unit</h4> :
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="pdcPerunitvalue"
                            name="pdcPerunitvalue"
                            id="pdcPerunitvalue"
                            placeholder="Internal"
                            value={this.state.pdcPerunitvalue}
                            disabled
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="col-lg-12">
                        <h4>PDC %</h4> :
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="pdcPercentage"
                            name="pdcPercentage"
                            id="pdcPercentage"
                            placeholder="Internal"
                            value={this.state.pdcPercentage}
                            disabled
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="col-lg-12">
                        <h4>Discount %</h4> :
                      </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Buyer
                          </Label>
                          <Input
                            type="discountPercent"
                            name="discountPercent"
                            id="discountPercentError"
                            value={this.state.discountPercent}
                            placeholder="Discount Percent"
                            onChange={this.validateTwoDigitAndDecimal(
                              "discountPercent"
                            )}
                          />
                        </FormGroup>
                        {this.state.discountPercentError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="">
                        <h4>Discount value</h4> :
                      </label>
                    </div>  
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Buyer
                          </Label>
                          <Input
                            type="discountValue"
                            name="discountValue"
                            id="discountValueError"
                            value={this.state.discountValue}
                            placeholder="Discount Value"
                            
                            disabled
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="col-lg-12">
                        <h4>Profit %</h4> :
                      </label>
                    </div> 
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Internal
                          </Label>
                          <Input
                            type="email"
                            name="email"
                            id="Email-7"
                            placeholder="Internal"
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 p-0">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <label for="Email-7" className="col-lg-12">
                        <h4>Commission</h4> :
                      </label>
                    </div>  
                    <div className="col-lg-4 col-md-6 col-sm-6 pr-0">
                      <div className="form-group">
                        <FormGroup className="">
                          <Label for="Email-7" hidden>
                            Buyer
                          </Label>
                          <Input
                            type="commission"
                            name="commission"
                            id="commissionError"
                            value={this.state.commission}
                            placeholder="Buyer"
                            onChange={this.validateTwoDigitAndDecimal(
                              "commission"
                            )}
                          />
                        </FormGroup>
                        {this.state.commissionError && (
                          <span className="error">
                            Item Should only 2 digits with 2 decimal points
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </Form>
            </TabContainer>
          </RctCardContent>
        </RctCollapsibleCard>
        {/*  Add On Section End  */}

        {/*  Fit Cost Section Starts  */}
        <RctCollapsibleCard
          key={1}
          customClasses=""
          colClasses="col-sm-12 col-md-6 col-lg-12 w-xs-full ft-lft mb-25"
          heading="Fit Cost"
          fullBlock
        >
          <RctCardContent>
            <TabContainer>
              <div className="col-sm-12 col-md-12 col-lg-12 float-left">
                <div className="w-100 float-left">
                  <div className="w-30 float-left mr-10 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="FIT"
                      options={Fitoptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction(
                        "FitCostFit"
                      )}
                      placeholder="FIT"
                      values={this.state.FitCostFit}
                    />
                  </div>
                  <div className="w-30 float-left mr-10">
                    <div className="form-group">
                      <TextField
                        id="BuyerCost"
                        fullWidth
                        label="BuyerCost"
                        placeholder="BuyerCost"
                        onChange={this.handleChangeTextField("BuyerCost")}
                        value={this.state.BuyerCost}
                      />
                    </div>
                  </div>
                  <div className="w-20 float-left mt-15">
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          name="keyFit"
                          onChange={this.handleChangesingledropdown("keyFit")}
                          value="kfit"
                        />
                      }
                      label="Key Fit"
                    />
                  </div>
                  <div className="w-10 float-left mt-15">
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-ic add"
                      tabindex="0"
                      type="button"
                      onClick={(e) => this.addPatternGrid()}
                    >
                      <i className="zmdi zmdi-plus-circle"></i>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 float-left">
                <div className="table-responsive mt-0">
                  <table className="table mt-10 data w-100 float-left la-fix">
                    <thead>
                      <tr>
                        <th>Actions</th>
                        <th className="">Fit</th>
                        <th className="">Buyer Cost</th>
                        <th className="">Key Fit</th>
                      </tr>
                    </thead>
                    <tbody>
                    {                 
                      this.state.FitGridRowData.map((n,indexD) => {     
                      return ( 
                      <tr>
                        <td>
                          <button
                            class="MuiButtonBase-root MuiIconButton-root text-danger MuiIconButton-colorPrimary"
                            tabindex="0"
                            type="button"
                            aria-label="Delete"
                            onClick={(e) =>this.deleteFitCost(n)}
                          >
                            <span class="MuiIconButton-label">
                              <i class="zmdi zmdi-delete"></i>
                            </span>
                            <span class="MuiTouchRipple-root"></span>
                          </button>
                        </td>
                        <td>{n.FitCostfit}</td>
                        <td>{n.BuyerCost} </td>
                        {n.keyFit && <td>Yes</td>}
                        {!n.keyFit && <td>No</td>}
                      </tr>
                          )
                          })
                        }
                    </tbody>
                  </table>
                </div>
              </div>
            </TabContainer>
          </RctCardContent>
        </RctCollapsibleCard>
        {/*  Fit Cost Section Ends  */}
        </div> 
       
        <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 pl-0">              
        {/*  Productivity Section Starts  */}
        <RctCollapsibleCard
          key={1}
          customClasses=""
          colClasses="col-sm-12 col-md-6 col-lg-12 w-xs-full ft-lft mb-25"
          heading="Productivity"
          fullBlock
        >
          <RctCardContent>
            <TabContainer>
              <div className="col-sm-12 col-md-12 col-lg-12 float-left">
                <div className="w-100 float-left">
                    <div className="w-30 float-left">
                        <table className="table mt-10 data w-100 float-left la-fix" >
                            <thead>                               
                              <tr><th className="">Qty</th></tr>
                              <tr><th className="">Productivity</th></tr>
                              <tr><th scope="col">No of machines</th></tr>
                              <tr><th scope="col">No of lines</th></tr>
                              <tr><th scope="col">Break even CM</th></tr>
                              <tr><th scope="col">Buyer CM</th></tr>
                              <tr><th scope="col">Select</th></tr>
                            </thead>
                        </table>
                    </div>
                    <div className="w-70 float-left">
                        <table className="table mt-10 data w-100 float-left la-fix" >
                            <tbody>
                                {                        
                                    this.state.buyerCMarray.map((data,indexD) => {     
                                    return ( 
                                        <span>
                                        <tr> <td>{data.orderQty}</td></tr>
                                        <tr> <td>{data.productivity}</td></tr>
                                        <tr> <td>{data.noOfmachine}</td></tr>
                                        <tr> <td>{data.noOfLines}</td></tr>
                                        <tr> <td>{data.breakEvencm}</td></tr>
                                        <tr> <td onClick={(e) => this.openBuyerCMmodal(indexD)}>{data.buyerCm}</td></tr>
                                        <tr> 
                                          <td align="center" className="radio-effects">
                                            <input type="radio" className="mt-10"  name={indexD} id={indexD} onChange={this.handleRightsItem(indexD)} />
                                          </td>
                                        </tr>
                                        </span>
                                        )
                                    }) 
                                } 
                                 {this.state.buyerCMarray.length == 0 && (
                                    <span>
                                      <tr> <td>0</td></tr>
                                      <tr> <td>0</td></tr>
                                      <tr> <td>0</td></tr>
                                      <tr> <td>0</td></tr>
                                      <tr> <td>0</td></tr>
                                      <tr> <td>0</td></tr>
                                      <tr> <td>0</td></tr>
                                    </span>
                                  )}
                            </tbody>
                        </table>
                    </div>
                </div>
              
              </div>
              <div className="col-sm-6 col-md-6 col-lg-12 float-left">
                <div className="w-100 float-left">
                  <div className="w-40 float-left mr-10 mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Loss Reason"
                      options={styleNooptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction(
                        "LossReason"
                      )}
                      placeholder="Loss Reason"
                      values={this.state.LossReason}
                    />
                  </div>
                  <div className="w-40 float-left">
                    <div className="form-group">
                      <TextField
                        id="Remark"
                        fullWidth
                        label="Remark"
                        placeholder="Remark"
                        onChange={this.handleChangeTextField("Remark")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabContainer>
          </RctCardContent>
        </RctCollapsibleCard>
        {/*  Productivity Section Ends  */}

        {/*  Summary Section Starts  */}
        <RctCollapsibleCard
          key={1}
          customClasses=""
          colClasses="col-sm-12 col-md-6 col-lg-12 w-xs-full ft-lft mb-25"
          heading="Summary"
          fullBlock
        >
          <RctCardContent>
            <TabContainer>
              <div className="col-sm-6 col-md-12 col-lg-12 float-left mt-30 m-bt-20">
              <div className="w-100 float-left">
                    <div className="">
                        <table className="table mt-10 data w-100 float-left la-fix" >
                            <thead>
                            <tr>
                              <td></td>
                              <th scope="col">Buyer</th>
                              <th scope="col">Internal</th>
                              <th scope="col">Available</th>
                            </tr>                               
                            {
                              this.state.summaryHeadingArray.map((n,index) => {
                               
                                return(

                              <tr> 
                                <td>{n}</td>

                                <td>{this.state.summaryvalueArray[0][n][0]['Buyer']}</td>
                                <td>{this.state.summaryvalueArray[0][n][0]['Internal']}</td>
                                <td>{this.state.summaryvalueArray[0][n][0]['Available']}</td>
                              </tr>

                                ) })
                             } 
                              <tr>
                                <td>Total</td>
                                <td>{this.state.SummaryBuyerTotalValue.toFixed(2)}</td>
                                <td>{this.state.SummaryInternalTotalValue.toFixed(2)}</td>
                                <td>{this.state.SummaryAvailableTotalValue.toFixed(2)}</td>
                              </tr>            
                            </thead>
                        </table>
                    </div>
                
                    
                </div>
                {/* <table>
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
                </table> */}
              </div>
            </TabContainer>
          </RctCardContent>
        </RctCollapsibleCard>
        {/*  Summary Section Ends  */}
        </div>        
        </div>

        {/* Reference Model version */}
        <Dialog
          open={this.state.open}
          onClose={this.CloseRefernceversion}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Reference Version</DialogTitle>
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
                      onChange={this.setstatevaluedropdownfunction("RVbuyer")}
                      placeholder="Buyer"
                      values={this.state.RVbuyer}
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
                      onChange={this.setstatevaluedropdownfunction("buyerdiv")}
                      placeholder="Buyer Division"
                      values={this.state.RVbuyerdiv}
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
                      onChange={this.setstatevaluedropdownfunction("season")}
                      placeholder="Season"
                      values={this.state.RVseason}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group select_label_name mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Year"
                      options={yearoptions}
                      onChange={this.setstatevaluedropdownfunction("year")}
                      placeholder="Year"
                      values={this.state.RVyear}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Style No"
                      options={styleNooptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction("styleno")}
                      placeholder="Style No"
                      values={this.state.RVstyleno}
                    />
                    <span className="error">
                      {this.state.errors["RVstyleno"]}
                    </span>
                    {/* <TextField id="Buyer" fullWidth label="Style No" placeholder="Style No"/> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group mt-15">
                    <Button
                      variant="contained"
                      onClick={this.CloseRefernceversion}
                      color="primary"
                      className="text-white margin-rt"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={this.getReferenceVersion}
                      className="btn-info text-white"
                    >
                      Ok
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            {/* <Button variant="contained" onClick={this.CloseRefernceversion} color="primary" className="text-white">
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={this.getReferenceVersion} className="btn-info text-white">
                                Ok
                            </Button> */}
          </DialogActions>
        </Dialog>
        {/* End Reference Model version */}

        {/* Marker Model version */}
        <Dialog
          open={this.state.IsMarker}
          onClose={this.CloseMarkerRefernceversion}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Marker version & UOM</DialogTitle>
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
                      // onChange={this.setstatevaluedropdownfunction('buyer')}
                      onChange={(values) =>
                        this.getMVBuyerDivisionList(
                          { MVbuyer: values },
                          this,
                          "buyer"
                        )
                      }
                      placeholder="Buyer"
                      values={this.state.MVbuyer}
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
                      // onChange={values => this.getBuyerDivision1({ MVbuyerdiv:values },this,"buyername")}
                      onChange={this.setstatevaluedropdownfunction("buyerdiv")}
                      placeholder="Buyer Division"
                      values={this.state.MVbuyerdiv}
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
                      onChange={this.setstatevaluedropdownfunction("season")}
                      placeholder="Season"
                      values={this.state.MVseason}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group select_label_name mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Year"
                      options={yearoptions}
                      onChange={this.setstatevaluedropdownfunction("year")}
                      placeholder="Year"
                      values={this.state.MVyear}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Style No"
                      options={styleNooptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction("styleno")}
                      placeholder="Style No"
                      values={this.state.MVstyleno}
                    />
                    <span className="error">
                      {this.state.errors["MVstyleno"]}
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="designStyleNo"
                      value={this.state.MVfit}
                      fullWidth
                      label="Fit"
                      placeholder="Fit"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="designStyleNo"
                      value={this.state.MVpurpose}
                      fullWidth
                      label="Purpose"
                      placeholder="Purpose"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group mt-15">
                    <Button
                      variant="contained"
                      onClick={this.CloseMarkerRefernceversion}
                      color="primary"
                      className="text-white margin-rt"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={this.GetMarkerRefernceversion}
                      className="btn-info text-white"
                    >
                      Ok
                    </Button>
                  </div>
                </div>
              </div>
              <div className="table-responsive mt-20">
                <table className="table mt-10 data w-100 float-left la-fix">
                  <thead>
                    <tr>
                      <th className="">Ref Style No</th>
                      <th className="">Master style</th>
                    </tr>
                  </thead>
                  <tbody>{buyerrightlistshtml && buyerrightlistshtml}</tbody>
                </table>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            {/* <Button variant="contained" onClick={this.CloseMarkerRefernceversion} color="primary" className="text-white">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.GetMarkerRefernceversion} className="btn-info text-white">
                            Ok
                        </Button> */}
          </DialogActions>
        </Dialog>
        {/* End Marker Model version */}

          {/* Buyer CRM Model version */}
          <Dialog
          open={this.state.IsBuyerCm}
          onClose={this.closeBuyerCMmodal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Buyer CM</DialogTitle>
          <DialogContent>
            <div className="col border pb-15">
              <div className="row no-f-mb">
                
                <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                        type="buyercm"
                        name="buyercm"
                        id="buyercmError"
                        value={this.state.buyercm}
                        placeholder="Buyer CM"
                        onChange={this.validateTwoDigitAndDecimal(
                          "buyercm"
                        )}
                    />
                 
                  </div>
                  {this.state.buyercmError && (
                      <span className="error">
                        Item Should only 2 digits with 2 decimal
                      </span>
                    )}
                </div>
                
                <div className="col-lg-7 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group mt-15">
                    <Button
                      variant="contained"
                      onClick={this.closeBuyerCMmodal}
                      color="primary"
                      className="text-white margin-rt"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={this.saveBuyerCM}
                      className="btn-info text-white"
                    >
                      Ok
                    </Button>
                  </div>
                </div>
              </div>
              
            </div>
          </DialogContent>
          <DialogActions>
            {/* <Button variant="contained" onClick={this.CloseMarkerRefernceversion} color="primary" className="text-white">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.GetMarkerRefernceversion} className="btn-info text-white">
                            Ok
                        </Button> */}
          </DialogActions>
        </Dialog>
        {/* End Marker Model version */}

        {/* Productivity Model version */}
        <Dialog
          open={this.state.IsProductivityModal}
          onClose={this.CloseProductivityModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Productivity</DialogTitle>
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
                      onChange={this.setstatevaluedropdownfunction("buyer")}
                      placeholder="Buyer"
                      values={this.state.PVbuyer}
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
                      onChange={this.setstatevaluedropdownfunction("buyerdiv")}
                      placeholder="Buyer Division"
                      values={this.state.PVbuyerdiv}
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
                      onChange={this.setstatevaluedropdownfunction("season")}
                      placeholder="Season"
                      values={this.state.PVseason}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group select_label_name mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Year"
                      options={yearoptions}
                      onChange={this.setstatevaluedropdownfunction("year")}
                      placeholder="Year"
                      values={this.state.PVyear}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group mt-15">
                    <Select1
                      dropdownPosition="auto"
                      createNewLabel="Style No"
                      options={styleNooptions}
                      // onChange={values => this.setState({ year:values })}
                      onChange={this.setstatevaluedropdownfunction("styleno")}
                      placeholder="Style No"
                      values={this.state.PVstyleno}
                    />
                    <span className="error">
                      {this.state.errors["PVstyleno"]}
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="designStyleNo"
                      value={this.state.fit}
                      fullWidth
                      label="Fit"
                      placeholder="Fit"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="designStyleNo"
                      value={this.state.purpose}
                      fullWidth
                      label="Purpose"
                      placeholder="Purpose"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group mt-15">
                    <Button
                      variant="contained"
                      onClick={this.CloseProductivityModal}
                      color="primary"
                      className="text-white margin-rt"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={this.getProductivityitem}
                      className="btn-info text-white"
                    >
                      Ok
                    </Button>
                  </div>
                </div>
              </div>
              <div className="table-responsive mt-20">
                <table className="table mt-10 data w-100 float-left la-fix">
                  <thead>
                    <tr>
                      <th className="">Buyer Code</th>
                      <th className="">Document Number</th>
                      <th className="">Style No</th>
                    </tr>
                  </thead>
                  <tbody>{Productuivtylistshtml && Productuivtylistshtml}</tbody>
                </table>
              </div>
            </div>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
        {/* END Productivity Model version */}

        {/* SAM Model version */}
        <Dialog
          open={this.state.IsSAMModal}
          onClose={this.CloseSAMModal}
          aria-labelledby="form-dialog-title"
        >
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
                      onChange={this.setstatevaluedropdownfunction("buyer")}
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
                      onChange={this.setstatevaluedropdownfunction("buyerdiv")}
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
                      onChange={this.setstatevaluedropdownfunction("season")}
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
                      onChange={this.setstatevaluedropdownfunction("year")}
                      placeholder="Year"
                      values={this.state.year}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="designStyleNo"
                      value={this.state.designStyleNo}
                      fullWidth
                      label="Style No"
                      placeholder="Style No"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="designStyleNo"
                      value={this.state.fit}
                      fullWidth
                      label="Fit"
                      placeholder="Fit"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="designStyleNo"
                      value={this.state.purpose}
                      fullWidth
                      label="Purpose"
                      placeholder="Purpose"
                    />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={this.CloseSAMModal}
              color="primary"
              className="text-white"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={this.CloseSAMModal}
              className="btn-info text-white"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        {/* END SAM Model version */}

        {/* Attachment Model version */}
        <Dialog
          open={this.state.IsAttachmentModal}
          onClose={this.CloseAttachmentModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Attachment</DialogTitle>
          <DialogContent>
            <div className="col border">
              <div className="row no-f-mb">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-15">
                  <div className="form-group">
                    <DropzoneComponent
                      config={config}
                      eventHandlers={eventHandlers}
                      djsConfig={djsConfig}
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="remarks"
                      value={this.state.remarks}
                      onChange={this.setstatevaluefunction("remarks")}
                      fullWidth
                      label="Remarks"
                      placeholder="Remarks"
                    />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={this.CloseAttachmentModal}
              color="primary"
              className="text-white"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={this.CloseAttachmentModal}
              className="btn-info text-white"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        {/* END Attachment Model version */}

        {/* Material Unit Price Model version */}
        <Dialog
          open={this.state.IsMaterialUnitPrice}
          onClose={this.CloseMaterialUnitPrice}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Material Unit Price</DialogTitle>
          <DialogContent>
            <div className="col border">
              <div className="row no-f-mb">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="MaterialPrice"
                      //value={this.state.materialPrice}
                      onChange={this.validatenumber}
                      value={this.state.MaterialPrice}
                      // onChange={this.setstatevaluefunction("materialPrice")}
                      fullWidth
                      label="Material Price"
                      placeholder="Material Price"
                    />
                    {this.state.IsMaterialPriceError && (
                      <span className="error">
                        Material Price Should only 2 digits with 2 decimal
                        points
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <TextField
                      id="FreightPrice"
                      value={this.state.FreightPrice}
                      onChange={this.validatenumber}
                      fullWidth
                      label="Freight Price"
                      placeholder="Freight Price"
                    />
                    {this.state.IsFreightPriceError && (
                      <span className="error">
                        Freight Price Should only 2 digits with 2 decimal points
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-15">
                  <Select1
                    dropdownPosition="auto"
                    createNewLabel="Freight Mode"
                    options={Freightmodeoptions}
                    // onChange={values => this.setState({ year:values })}
                    onChange={this.setstatevaluedropdownfunction("FreightMode")}
                    placeholder="Freight Mode"
                    values={this.state.FreightMode}
                  />
                  <span className="error">
                    {this.state.errors["FreightMode"]}
                  </span>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={this.CloseMaterialUnitPrice}
              color="primary"
              className="text-white"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={this.CloseMaterialUnitPrice}
              className="btn-info text-white"
            >
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
