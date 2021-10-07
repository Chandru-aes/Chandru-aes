/**
 * Basic Table
 */
 import React, { Component, Fragment } from 'react';
 import { Media, Badge } from 'reactstrap';
 import IconButton from '@material-ui/core/IconButton';
 import Avatar from '@material-ui/core/Avatar';
 
 // api
 import api from 'Api';
 
 import InputLabel from '@material-ui/core/InputLabel';

 import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct card box
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 import Typography from '@material-ui/core/Typography';
 import TextField from '@material-ui/core/TextField';
 import AppBar from '@material-ui/core/AppBar';
 import Tabs from '@material-ui/core/Tabs';
 import Tab from '@material-ui/core/Tab';
 import SwipeableViews from 'react-swipeable-views';
 function TabContainer({ children }) {
    return (
       <Typography component="div" style={{ padding: 8 * 3 }}>
          {children}
       </Typography>
    );
 }
 class PreprodcutionTable extends Component {
 
     state = {
        activeIndex: 0
     }
     
     componentDidMount() {
        
     }
     handleChange(event, value) {
        this.setState({ activeIndex: value });
     }
 
     render() {
         const { employeePayroll } = this.state;
         const { match } = this.props;
         return (
            <RctCollapsibleCard heading="Create Forecast">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <TextField id="Buyer" fullWidth label="Buyer" placeholder="Buyer Name"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <TextField id="buyer-division" fullWidth label="Buyer Division" placeholder="Buyer Division"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <TextField id="Location" fullWidth label="Location" placeholder="Location"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <TextField id="type" fullWidth label="Type" placeholder="Type"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Season</InputLabel>
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
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="age-simple">Year</InputLabel>
                            <Select value={this.state.age} onChange={this.handleChange}
                            inputProps={{ name: 'age', id: 'age-simple', }}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>2020</MenuItem>
                            <MenuItem value={20}>2019</MenuItem>
                            <MenuItem value={30}>2018</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3">
                        <div className="form-group">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-primary mr-10 mb-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button" ><span className="MuiButton-label">Add <i className="zmdi zmdi-alert-circle"></i></span><span className="MuiTouchRipple-root"></span></button>
                              
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained btn-success mr-10 mb-10 text-white btn-icon pull-right b-sm" tabindex="0" type="button"><span className="MuiButton-label">Guide<i className="zmdi zmdi-save"></i></span><span className="MuiTouchRipple-root"></span></button>
                        </div>
                    </div>
                </div>

                <AppBar position="static" color="default">
               <Tabs
                  value={this.state.activeIndex}
                  onChange={(e, value) => this.handleChange(e, value)}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
               >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                 
               </Tabs>
            </AppBar>
            <SwipeableViews
               axis={'x'}
               index={this.state.activeIndex}
               onChangeIndex={(index) => this.handleChangeIndex(index)}>
               <TabContainer>Item One</TabContainer>
               <TabContainer>Item Two</TabContainer>
            </SwipeableViews>
            </RctCollapsibleCard>
         );
     }
 }
 
 export default PreprodcutionTable;
 