/**
 * Add New User Form
 */
 import React from 'react';
 import { Form, FormGroup, Label, Input } from 'reactstrap';
 
 import FormControl from '@material-ui/core/FormControl';
 
 import Select from '@material-ui/core/Select';
 
 import InputLabel from '@material-ui/core/InputLabel';
 import MenuItem from '@material-ui/core/MenuItem';
 import TextField from '@material-ui/core/TextField';
 
 
 const GuideForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
     
     <Form className="new-form">
         <FormGroup>
         <div className="row new-form mb-10">
                         
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Buyer Division</option> 
                                            <option>Levis</option> 
                                            <option>Allen</option> 
                                            <option>Solly</option> 
                                        </select> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-3">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Product type</option> 
                                            <option>Category 1</option> 
                                            <option>Category 2</option> 
                                            <option>Category 3</option> 
                                        </select> 
                                    </div>  
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-3">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Sub Product type</option> 
                                            <option>Sub Category 1</option> 
                                            <option>Sub Category 2</option> 
                                            <option>Sub Category 3</option> 
                                        </select> 
                                    </div>  
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Season</option> 
                                            <option>Autumn</option> 
                                            <option>Summer</option> 
                                            <option>Winter</option> 
                                        </select> 
                                    </div>  
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-3">
                                <div className="form-group">
                                    <div className="form-group select_label_name mt-15"> 
                                        <select className="form-control select2">
                                            <option>Year</option> 
                                            <option>2021</option> 
                                            <option>2020</option> 
                                            <option>2019</option> 
                                        </select> 
                                    </div>  
                                </div>
                            </div>
                           
                            <div className="col-lg-8 pr-0">
                                <div className="form-group mt-15 text-right">
                                    
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-secondary mr-10 text-white btn-icon b-sm" tabindex="0" type="button" onClick={(e) => this.opnguideformmodal(e)}><span className="MuiButton-label">View<i class="ti-eye"></i></span><span className="MuiTouchRipple-root"></span></button>
                                </div>
                            </div> 
                            <table className="table data activity-table">
                                        <thead>
                                            <tr>                                                
                                            <th className="w-25 text-center">Qty</th>
                                            <th className="w-20 text-center">SU 20</th>
                                            <th className="w-20 text-center">HOL 20</th>
                                            <th className="w-20 text-center">SP 21</th>
                                            <th className="w-20 text-center">Qty</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td  className="data text-center">India</td>
                                                <td className="data text-center">5000</td>
                                                <td className="data text-center">-</td>
                                                <td className="data text-center">-</td>
                                                <td className="data text-center">-</td>
                                            </tr>
                                            <tr>
                                                <td  className="data text-center">Jordan</td>
                                                <td className="data text-center">5000</td>
                                                <td className="data text-center">-</td>
                                                <td className="data text-center">-</td>
                                                <td className="data text-center">-</td>
                                            </tr>
                                            <tr>
                                                <td  className="data text-center">Bangalore</td>
                                                <td className="data text-center">5000</td>
                                                <td className="data text-center">-</td>
                                                <td className="data text-center">-</td>
                                                <td className="data text-center">-</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="text-center">
                                                <th  className="data text-center">8000</th>
                                                <th className="data text-center">-</th>
                                                <th className="data text-center">-</th>
                                                <th className="data text-center">-</th>
                                                <th className="data text-center">-</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                        </div> 
         </FormGroup>
            
     </Form>
 );
 
 export default GuideForm;
 