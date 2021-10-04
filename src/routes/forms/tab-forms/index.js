/**
 * Fixed Tab
 */
 import React, { Component } from 'react';
 import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col,
	FormFeedback
} from 'reactstrap';
 import SwipeableViews from 'react-swipeable-views';
 import AppBar from '@material-ui/core/AppBar';
 import Tabs from '@material-ui/core/Tabs';
 import Tab from '@material-ui/core/Tab';
 import Typography from '@material-ui/core/Typography';
 import TextField from '@material-ui/core/TextField';
 import Select from '@material-ui/core/Select';
 import FormControl from '@material-ui/core/FormControl';
 import FormHelperText from '@material-ui/core/FormHelperText';
 //import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ReactQuill from 'react-quill';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
import FormattedInputs from '../../forms/material-text-field/components/formated-input';
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }
 const modules = {
   toolbar: [
     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
     [{ 'font': [] }],
     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
     [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
     ['link', 'image'],
     ['clean'],
     [{ 'align': [] }],
     ['code-block']
   ],
 };
 
 const formats = [
   'header',
   'font',
   'bold', 'italic', 'underline', 'strike', 'blockquote',
   'list', 'bullet', 'indent',
   'link', 'image', 'align',
   'code-block'
 ];
 class TabForms extends Component {
 
    state = {
       activeIndex: 0,
       age: '',
		name: 'hai',
      anchorReference: 'anchorEl',
    }
    
 
    handleChange(event, value) {
       this.setState({ activeIndex: value });
    }
 
    render() {
      const {  anchorReference} = this.state;
       return (
         <div className="formelements-wrapper">
         <PageTitleBar title={<IntlMessages id="sidebar.formElements" />} match={this.props.match} />
         <div className="row">
            
            <div className="col-sm-12 col-md-12 col-xl-12 t-pa">
          <RctCollapsibleCard heading='Address Master' >
             <AppBar position="static" color="default">
                <Tabs
                   value={this.state.activeIndex}
                   onChange={(e, value) => this.handleChange(e, value)}
                   indicatorColor="primary"
                   textColor="primary"
                   variant="fullWidth"
                >
                   <Tab label="Address List" />
                   <Tab label="Address Entry" />
                   <Tab label="list3" />
                   {/* <Tab label="Education Details" /> */}
                </Tabs>
             </AppBar>
             <SwipeableViews
                axis={'x'}
                index={this.state.activeIndex}
                onChangeIndex={(index) => this.handleChange(index)}>
                <TabContainer>
                <RctCollapsibleCard heading="Basic Details">
                  <div className="row">
					      <div className="col-sm-12 col-md-12 col-xl-6">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 <TextField id="First Name" fullWidth label="First name" placeholder="First name" />
                              </div>                       
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 <TextField id="Email" fullWidth label="Email" placeholder="Email" />
                              </div>                       
                           </div>								
                        </Form>
                     </div>
                     <div className="col-sm-12 col-md-12 col-xl-6">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 <TextField id="Last Name" fullWidth label="Last name" placeholder="Last name" />
                              </div>                       
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 <TextField id="Mobile Number" fullWidth label="Mobile Number" placeholder="Mobile Number" />
                              </div>                       
                           </div>								
                        </Form>
                     </div>
                     <div className="col-sm-12 col-md-12 col-xl-4">
                        <div className="form-group">
                           <FormControl fullWidth>
                              <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                                 <Select native value={this.state.age} >
                                    <option value="" />
                                    <option value={10}>Male</option>
                                    <option value={20}>Female</option>
                                 </Select>
                           </FormControl>
                        </div>
                     </div>
                     <div className="col-sm-12 col-md-12 col-xl-4">
                        <div className="form-group">
                           <FormControl fullWidth>
                              <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                                 <Select native value={this.state.age} >
                                    <option value="" />
                                    <option value={10}>India</option>
                                    <option value={20}>Australia</option>
                                 </Select>
                           </FormControl>
                        </div>
                     </div>
                     
                     <div className="col-sm-12 col-md-12 col-xl-4">
                        <div className="form-group">
                           <FormControl fullWidth>
                              <InputLabel htmlFor="age-native-simple">State</InputLabel>
                                 <Select native value={this.state.age} >
                                    <option value="" />
                                    <option value={10}>Chennai</option>
                                    <option value={20}>Coimbatore</option>
                                 </Select>
                           </FormControl>
                        </div>
                     </div>
                     <div className="col-sm-12 col-md-12 col-xl-12">
                        <RadioGroup row aria-label="anchorReference" name="anchorReference">
                           <FormControlLabel color="primary" value="anchorEl" control={<Radio />} label="anchorEl" />
                           <FormControlLabel color="primary" value="anchorPosition" control={<Radio />} label="anchorPosition" />
                        </RadioGroup>
                     </div>
                     <div className="col-sm-12 col-md-12 col-xl-12">
                        <div className="editor-wrapper">                           
                          
                              <ReactQuill modules={modules} formats={formats} placeholder="Enter Your Message.." />
                          
                        </div>
                     </div>
                   
                     <div className="col-sm-12 col-md-12 col-xl-4">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                              {/* <Button color="primary">Reset</Button> */}
                              </div>                       
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 {/* <TextField id="Mobile Number" fullWidth label="Mobile Number" placeholder="Mobile Number" /> */}
                              </div>                       
                           </div>								
                        </Form>
                     </div>
                     <div className="col-sm-12 col-md-12 col-xl-3">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                              {/* <Button color="primary">Cancel</Button> */}
                              </div>                       
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 {/* <TextField id="Mobile Number" fullWidth label="Mobile Number" placeholder="Mobile Number" /> */}
                              </div>                       
                           </div>								
                        </Form>
                     </div>
                     
                     <div className="col-sm-12 col-md-12 col-xl-5 pr-0">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-4 ft-lft p-0">                     
                              {/* <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Cancel <i class="zmdi zmdi-alert-circle"></i></span><span class="MuiTouchRipple-root"></span></button>                       */}
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                           {/* <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Reset <i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>                      */}
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-4 pr-0">                     
                              <div className="form-group">
                              <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Next <i class="zmdi zmdi-mail-send"></i></span><span class="MuiTouchRipple-root"></span></button>
                              </div>                       
                           </div>                   						
                        </Form>
                     </div>
                     
                  </div>
						</RctCollapsibleCard>
                </TabContainer>
                <TabContainer>
                <RctCollapsibleCard heading="Address Details">  
                  <div className="row">
                     <div className="col-sm-12 col-md-12 col-xl-6">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 <TextField id="Address 1" fullWidth label="Address 1" placeholder="Address 1" />
                              </div>                       
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 <TextField id="Address 2" fullWidth label="Address 2" placeholder="Address 2" />
                              </div>                       
                           </div>								
                        </Form>
                     </div>
                     <div className="col-sm-12 col-md-12 col-xl-6">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                <Label for="Text">Text Area</Label>
                                <Input type="textarea" name="text" id="Text" />
                              </div>                       
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                              <Label for="exampleDate">Date of Birth</Label>
									   <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                              </div>                       
                           </div>								
                        </Form>
                     </div>                
                     <div className="col-sm-12 col-md-12 col-xl-6">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 <Label for="File-2">File</Label>
									      <Input type="file" name="file" id="File-2" />
                              </div>                       
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-12">                     
                              <div className="form-group">
                                 <FormGroup check>
                                    <Label check>
                                       <Input type="radio" />{' '}
                                       Option one 
                                    </Label>
                                 </FormGroup>
                                 <FormGroup check>
                                    <Label check>
                                       <Input type="radio" />{' '}
                                       Option two
                                    </Label>
                                 </FormGroup>
                              </div>                       
                           </div>								
                        </Form>
                     </div>  
                     
                  </div>
                  <div className="col-sm-12 col-md-12 col-xl-12 pr-0">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-4 ft-lft p-0">                     
                              {/* <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Cancel <i class="zmdi zmdi-alert-circle"></i></span><span class="MuiTouchRipple-root"></span></button>                       */}
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                           {/* <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Reset <i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>                      */}
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-4  pr-0">                     
                              <div className="form-group">
                                 <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right col-6" tabindex="0" type="button"><span class="MuiButton-label">Next <i class="zmdi zmdi-mail-send"></i></span><span class="MuiTouchRipple-root"></span></button>
                              </div>                       
                           </div>                   						
                        </Form>
                     </div>
                </RctCollapsibleCard>
                </TabContainer>
                
                <TabContainer>
                  <div className="row new-form">
                     <div className="col-sm-6 col-md-6 col-xl-4">
                        <div className="form-group">
                        <TextField id="skucode" fullWidth label="SKU Code" placeholder="SKU Code"/>
                        </div>
                     </div>
                     <div className="col-sm-6 col-md-6 col-xl-4">
                        <div className="form-group">
                        <TextField id="Category" fullWidth label="Category" placeholder="Category"/>
                        </div>
                     </div>
                     <div className="col-sm-6 col-md-6 col-xl-4">
                        <div className="form-group">
                        <TextField id="Category" fullWidth label="Category" placeholder="Category"/>
                        </div>
                     </div>
                     <div className="col-sm-6 col-md-6 col-xl-12">
                        <div className="form-group">
                        <FormattedInputs />
                        </div>
                     </div>
                     


                     <div className="col-sm-12 col-md-12 col-xl-6 pr-0">
                        </div>
                     <div className="col-sm-12 col-md-12 col-xl-6 pr-0">
                        <Form>
                           <div className="col-sm-12 col-md-12 col-xl-4 ft-lft p-0">                     
                              <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Cancel <i class="zmdi zmdi-alert-circle"></i></span><span class="MuiTouchRipple-root"></span></button>                      
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                           <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Reset <i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>                     
                           </div>
                           <div className="col-sm-12 col-md-12 col-xl-4  pr-0">                     
                              <div className="form-group">
                                 <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Save <i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>
                              </div>                       
                           </div>                   						
                        </Form>
                     </div>
                  </div>
                </TabContainer>
             </SwipeableViews>
          </RctCollapsibleCard>
          </div></div></div>
       );
    }
 }
 
 export default TabForms;
 