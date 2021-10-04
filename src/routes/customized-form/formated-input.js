import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Col,
	FormFeedback
} from 'reactstrap';

import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default class FormattedInputs extends React.Component {
  // state = {
  //   textmask: '(112) 121-2121',
  //   numberformat: '1320',
  // };
  createNotification = (type) => {
    return () => {
       switch (type) {
          case 'info':
             NotificationManager.info('Info message');
             break;
          case 'success':
             NotificationManager.success('Success message');
             break;
          case 'warning':
             NotificationManager.warning('Warning message');
             break;
          case 'error':
             NotificationManager.error('Error message');
             break;
          default:
             NotificationManager.success('Success message', 'Title here');
             break;
       }
    };
 };
  state = {
    age: '',
    name: 'hai',
    productname:''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  // };

  render() {
    return (
      <RctCollapsibleCard heading="Add Product">
						<div className="row new-form">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="skucode" fullWidth label="SKU Code" placeholder="SKU Code"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="Category" fullWidth label="Category" placeholder="Category"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="age-simple">Sub Category</InputLabel>
                    <Select value={this.state.age} onChange={this.handleChange}
                      inputProps={{ name: 'age', id: 'age-simple', }}>
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Product Name</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-6 col-md-6 col-xl-3">
							  <div className="form-group">
                    <TextField error id="error" fullWidth label="Error message will be displayed here" defaultValue="Hello World" />
                </div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="HSN Code" placeholder="HSN Code"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Selling Method</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>		
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Piece Quantity" placeholder="Piece Quantity"/>
								</div>
							</div>				
						</div>
            <div className="row">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Sales Price" placeholder="Sales Price"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="HSN Code" placeholder="HSN Code"/>
								</div>
							</div>
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
								<TextField id="name" fullWidth label="Piece Quantity" placeholder="Piece Quantity"/>
								</div>
							</div>		
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Size</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>              		
						</div>
            <div className="row">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Colors</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Material Type</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">UOM</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>		
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Item Type</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>              		
						</div>
            
            <div className="row">
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <TextField id="name" fullWidth label="Barcode" placeholder="Barcode"/>
								</div>
							</div>
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Size</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>
              <div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                  <TextField id="name" fullWidth label="Barcode" placeholder="Barcode"/>
								</div>
							</div>		
							<div className="col-sm-6 col-md-6 col-xl-3">
								<div className="form-group">
                <FormControl fullWidth>
                      <InputLabel htmlFor="product-name">Size</InputLabel>
                      <Select value={this.state.productname} onChange={this.handleChange}
                        inputProps={{ name: 'product-name', id: 'product-name', }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
								</div>
							</div>              		
						</div>
            <div className="row">
							<div className="col-sm-9 col-md-9 col-xl-8">
                <FormGroup row>
                  {/* <Label for="Email-5" sm={2}>Comments</Label> */}
                  <Col sm={10}>
                    <textarea className="form-control" fullWidth label="Comments" placeholder="Comments" bsSize="lg"/>										
                  </Col>
                </FormGroup>
              </div>
              <div className="col-sm-3 col-md-3 col-xl-4">
								<Form> 
                  <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                    
                    <div className="form-group">
                              <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-warning mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button" onClick={this.createNotification('warning')}><span class="MuiButton-label">Warning <i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>
                              </div> 

                  </div>                                                          
                  <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                      
                    <div className="form-group">
                              <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-danger mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button" onClick={this.createNotification('error')}><span class="MuiButton-label">Error <i class="zmdi zmdi-alert-circle"></i></span><span class="MuiTouchRipple-root"></span></button>
                              </div>                 
                  </div>
                  <div className="col-sm-12 col-md-12 col-xl-4 ft-lft">                     
                     
                  <div className="form-group">
                              <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button" onClick={this.createNotification('success')}><span class="MuiButton-label">save <i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>
                              </div>                
                  </div>    
                   {/* <div className="col-sm-12 col-md-12 col-xl-6 ft-lft">                     
                        <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Reset <i class="zmdi zmdi-delete"></i></span><span class="MuiTouchRipple-root"></span></button>                     
                    </div>
                    <div className="col-sm-12 col-md-12 col-xl-6 ft-lft">                     
                        <div className="form-group">
                            <button class="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right col-12" tabindex="0" type="button"><span class="MuiButton-label">Save <i class="zmdi zmdi-save"></i></span><span class="MuiTouchRipple-root"></span></button>
                        </div>                       
                    </div>   */}
                </Form>                               
							</div>
            </div>
						</RctCollapsibleCard>
    );
  }
}
