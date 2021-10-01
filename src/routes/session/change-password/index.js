import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';

// app config
import AppConfig from 'Constants/AppConfig';

export default class Changepwd extends Component {
   render() {
      return (
         <QueueAnim type="bottom" duration={2000}>
            <div className="rct-session-wrapper" key="1">
               {/* <AppBar position="static" className="session-header">
                  <Toolbar>
                     <div className="container">
                        <div className="d-flex justify-content-between">
                           <div className="session-logo">
                              <Link to="/">
                                  <img src={require('Assets/img/site-logo.png')} alt="session-logo" className="img-fluid" width="110" height="35" />
                                 ACPL
                              </Link>
                           </div>
                           <div className="session-social-icon">
                              <IconButton className="text-white" aria-label="facebook">
                                 <i className="zmdi zmdi-facebook"></i>
                              </IconButton>
                              <IconButton className="text-white" aria-label="twitter">
                                 <i className="zmdi zmdi-twitter"></i>
                              </IconButton>
                              <IconButton className="text-white" aria-label="google">
                                 <i className="zmdi zmdi-google"></i>
                              </IconButton>
                           </div>
                        </div>
                     </div>
                  </Toolbar>
               </AppBar> */}
               <div className="session-inner-wrapper p-4 p-md-0">
                  <div className="row">
                     <div className="col-sm-8 col-lg-5 mx-auto">
                        <div className="session-body text-center">
                           <div className="session-head mb-30">
                              <img src={require('Assets/img/acpl-logo-color.png')} alt="acpl-logo" className="img-fluid" /> 
                              <h1 className="font-weight-bold">{AppConfig.brandName}</h1>
                           
                           </div>
                           <Form>
                              <FormGroup className="has-wrapper">
                                 <Input  type="Password" name="user-pwd" id="opwd" className="has-input input-lg" placeholder="Old Password"  />
                                 <span className="has-icon"><i className="ti-lock"></i></span>
                              </FormGroup>
                              <FormGroup className="has-wrapper">
                                 <Input  type="Password" name="user-pwd" id="npwd" className="has-input input-lg" placeholder="New Password"  />
                                 <span className="has-icon"><i className="ti-lock"></i></span>
                              </FormGroup>
                              <FormGroup className="has-wrapper">
                                 <Input  type="Password" name="user-pwd" id="cpwd" className="has-input input-lg" placeholder="Confirm Password"  />
                                 <span className="has-icon"><i className="ti-lock"></i></span>
                              </FormGroup>
                              <FormGroup>
                                 <Button variant="contained" className="btn-info button-base btn-primary-bg text-white btn-block btn-large w-100">Update Password</Button>
                              </FormGroup>
                              {/* <Button component={Link} to="/session/login" className="btn-dark button-base btn-secondary-bg btn-block btn-large text-white w-100">Already having account?  Login</Button> */}
                           </Form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </QueueAnim>
      );
   }
}
