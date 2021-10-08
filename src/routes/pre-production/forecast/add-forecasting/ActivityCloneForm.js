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


const AddNewUserForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
    
    <Form className="new-form">
        <FormGroup>
        <div className="col-lg-6 col-md-3 col-sm-6 col-xs-12 ft-lft new-form">
            <div className="form-group">
            <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">Season</InputLabel>
                <Select  onChange={(e) => onChangeAddNewUserDetails()}
                inputProps={{ name: 'age', id: 'age-simple', }}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Autumn</MenuItem>
                <MenuItem value={20}>Summer</MenuItem>
                <MenuItem value={30}>Winter</MenuItem>
                </Select>
            </FormControl>
            </div>
        </div>
        <div className="col-sm-6 col-md-6 col-xl-6">
            <div className="form-group">
            <FormControl fullWidth>
                <InputLabel htmlFor="age-simple">Year</InputLabel>
                <Select  onChange={(e) => onChangeAddNewUserDetails()}
                inputProps={{ name: 'age', id: 'age-simple', }}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>2020</MenuItem>
                <MenuItem value={20}>2019</MenuItem>
                <MenuItem value={30}>2018</MenuItem>
                </Select>
            </FormControl>
            </div>
        </div>
        </FormGroup>
        <FormGroup>
            <div className="col-lg-6 col-md-3 col-sm-6 col-xs-12 ft-lft">
                <div className="form-group">
                <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                </div>
            </div>
            <div className="col-lg-6 col-md-3 col-sm-6 col-xs-12">
                <div className="form-group">
                <TextField id="buyer-division" fullWidth label="Buyer Division" placeholder="Buyer Division"/>
                </div>
            </div>
        </FormGroup>       
    </Form>
);

export default AddNewUserForm;
