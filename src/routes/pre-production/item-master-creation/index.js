/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import Button from '@material-ui/core/Button';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
 import { Helmet } from "react-helmet";
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
 
 class ItenNasterCreation extends Component {
    
     state = {
         all: false,        
     }
     constructor(props) {
        super(props);
       // this.state = { employees: service.getEmployees() };
       // this.states = service.getStates();
      
     }
     componentDidMount() {
       
     }
    
    
    
     render() {
           
      
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
                 <RctCollapsibleCard fullBlock heading="Item Creation">
                 <div className="w-100 float-left">

<div className="row">

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple">Parent Group</InputLabel>

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

            <InputLabel htmlFor="age-simple">Material Type</InputLabel>

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

            <InputLabel htmlFor="age-simple">Material Group & Material Sub</InputLabel>

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

<TextField id="Buyer" fullWidth label="Material Code" placeholder="Material Code"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

        <div className="form-group">

<TextField id="Buyer" fullWidth label="System Material Code" placeholder="System Material Code"/>

</div></div>

<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> 

        <div className="form-group">

<TextField id="Buyer" fullWidth label="Material Description" placeholder="Material Description"/>

</div></div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple">Buyer Division</InputLabel>

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



        <RadioGroup row aria-label="anchorReference" name="anchorReference">

            <div className="w-33">

                <FormControlLabel color="primary" value="sample" control={<Radio />} label="Activate" />

            </div>

             

        </RadioGroup>

        </div>

        </div>



        </div>

    </div>



    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15 mt-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Fabric</Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

     <div className="row">  

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<FormControl fullWidth>

            <InputLabel htmlFor="age-simple">Fiber</InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<FormControl fullWidth>

            <InputLabel htmlFor="age-simple"> Content</InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

    </div>



    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Fabric Content" placeholder="Fabric Content"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<FormControl fullWidth>

            <InputLabel htmlFor="age-simple">     Fabric Type </InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<FormControl fullWidth>

            <InputLabel htmlFor="age-simple">     Fabric Weave </InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<FormControl fullWidth>

            <InputLabel htmlFor="age-simple">     Dye Process </InputLabel>

            <Select value={this.state.age} onChange={this.handleChange}

            inputProps={{ name: 'age', id: 'age-simple', }}>

            <MenuItem value=""><em>None</em></MenuItem>

            <MenuItem value={10}>Autumn</MenuItem>

            <MenuItem value={20}>Summer</MenuItem>

            <MenuItem value={30}>Winter</MenuItem>

            </Select>

        </FormControl>

    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="w-100 float-left">

        <div className="w-80 float-left">

        <div className="form-group">

        <TextField id="Buyer" fullWidth label="Yarn Wrap" placeholder="Yarn Wrap"/>

        </div>

        </div>

        <div className="w-20 float-left text-center pt-15">

        <button className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>

        </div>

        </div>

    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Wrap Yarn Blend" placeholder="Wrap Yarn Blend"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="w-100 float-left">

        <div className="w-80 float-left">

        <div className="form-group">

        <TextField id="Buyer" fullWidth label="Yarn Weft" placeholder="Yarn Weft"/>

        </div>

        </div>

        <div className="w-20 float-left text-center pt-15">

        <button className="float-right MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary text-white btn-icon b-ic add" tabindex="0" type="button"><i className="zmdi zmdi-plus-circle"></i><span className="MuiTouchRipple-root"></span></button>

        </div>

        </div>

    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Weft Yarn Blend" placeholder="Weft Yarn Blend"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Ends / Inches" placeholder="Ends / Inches"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Picks / Inches" placeholder="Picks / Inches"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Shrink Wrap" placeholder="Shrink Wrap"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Shrink Weft" placeholder="Shrink Weft"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple">Wash Method</InputLabel>

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

<TextField id="Buyer" fullWidth label="FabWt_BW" placeholder="FabWt_BW"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="FabWt_AW" placeholder="FabWt_AW"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple">    Weight UOM </InputLabel>

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

<TextField id="Buyer" fullWidth label="Actual Width" placeholder="Actual Width"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Cuttable Width" placeholder="Cuttable Width"/>

</div>



    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

        <FormControl fullWidth>

            <InputLabel htmlFor="age-simple">    Width UOM </InputLabel>

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

            <InputLabel htmlFor="age-simple">   Port of Load </InputLabel>

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

            <InputLabel htmlFor="age-simple"> Physical Finish </InputLabel>

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

            <InputLabel htmlFor="age-simple">  Chemical Finish</InputLabel>

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



    </div>





         </AccordionDetails>

         </Accordion>

         </div>

         



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Thread </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

     <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

     <div className="row">

     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Quality" placeholder="Quality"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Tex" placeholder="Tex"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Tkt" placeholder="Tkt"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="No of Meter" placeholder="No of Meter"/>

</div></div>



</div>



    </div>





         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Details  </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

     <div className="float-right pr-0 but-tp">

     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Add <i className="zmdi zmdi-plus-circle"></i></span><span className="MuiTouchRipple-root"></span></button>

     </div>

     <div className="clearfix"></div>

     <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

     <div className="row">

     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Group Article Number" placeholder="Group Article Number"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Product" placeholder="Product"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Finish" placeholder="Finish"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Remarks" placeholder="Remarks"/>

</div></div>



</div>



    </div>

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Purchase   </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Purchase Info Record   </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 



     <div className="float-right pr-0 but-tp">

     <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-0 text-white btn-icon b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Add <i className="zmdi zmdi-plus-circle"></i></span><span className="MuiTouchRipple-root"></span></button>

     </div>

     <div className="clearfix"></div>

     <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

     <div className="row">

     <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Material Code" placeholder="Material Code"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

<FormControl fullWidth>

<InputLabel htmlFor="age-simple">Supplier</InputLabel>

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

<TextField id="Buyer" fullWidth label="Brand" placeholder="Brand"/>

</div></div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Supplier Reference" placeholder="Supplier Reference"/>

</div></div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Multiples" placeholder="Multiples"/>

</div></div>





<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="MOQ" placeholder="MOQ"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

<FormControl fullWidth>

<InputLabel htmlFor="age-simple">    MOQUOM </InputLabel>

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

<TextField id="Buyer" fullWidth label="Lead Time" placeholder="Lead Time"/>

</div></div>

<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Color" placeholder="Color"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Size" placeholder="Size"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="From Date" placeholder="From Date"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="To Date" placeholder="To Date"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Price" placeholder="Price"/>

</div></div>



<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

<div className="form-group">

<FormControl fullWidth>

<InputLabel htmlFor="age-simple">        Currency  </InputLabel>

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

<TextField id="Buyer" fullWidth label="Bin Code" placeholder="Bin Code"/>

</div></div>



<div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Descriptions" placeholder="Descriptions"/>

</div></div>



<div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">

    <div className="form-group">

<TextField id="Buyer" fullWidth label="Remarks" placeholder="Remarks"/>

</div></div>





</div>



    </div>



         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Sales    </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Plant     </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Accounts      </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>



         <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">

    <Accordion className="border mb-15">

     <AccordionSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>}>

         <div className="acc_title_font">

             <Typography>Approval       </Typography>

         </div>

     </AccordionSummary>

     <AccordionDetails> 

         </AccordionDetails>

         </Accordion>

         </div>
                 </RctCollapsibleCard>
               
             </div>
         );
     }
 }
 export default ItenNasterCreation;
 