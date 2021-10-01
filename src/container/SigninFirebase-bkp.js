/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import { Fab } from "@material-ui/core";

// components
import {
   SessionSlider
} from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
import {
   signinUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter
} from 'Actions';

//Auth File
import Auth from '../Auth/Auth';

const auth = new Auth();

class Signin extends Component {

   state = {
      email: 'demo@example.com',
      password: 'test#123'
   }

	/**
	 * On User Login
	 */
   onUserLogin() {
      if (this.state.email !== '' && this.state.password !== '') {
         this.props.signinUserInFirebase(this.state, '/app/pages/dashboard');
      }
       this.props.history.push('/app/pages/dashboard');
    // this.props.signinUserInFirebase(this.state, this.props.history);
   }

	/**
	 * On User Sign Up
	 */
   onUserSignUp() {
      this.props.history.push('/signup');
   }

   //Auth0 Login
   loginAuth0() {
      auth.login();
   }

   render() {
      const { email, password } = this.state;
      const { loading } = this.props;
      return (
         <QueueAnim type="bottom" duration={2000}>
            <div className="rct-session-wrapper rct-session-wrapper2">
               {loading &&
                  <LinearProgress />
               }
               {/* <AppBar position="static" className="session-header">
                  <Toolbar>
                     <div className="container">
                        <div className="d-flex justify-content-between">
                           <div className="session-logo">
                              <Link to="/">
                                 <img src={AppConfig.appLogo} alt="session-logo" className="img-fluid" width="110" height="35" />
                             ACPL
                              </Link>
                           </div>
                           <div>
                              <a className="mr-15" onClick={() => this.onUserSignUp()}>Create New account?</a>
                              <Button variant="contained" className="btn-light button-base" onClick={() => this.onUserSignUp()}>Sign Up</Button>
                           </div>
                        </div>
                     </div>
                  </Toolbar>
               </AppBar> */}
               <div className="session-inner-wrapper">
                  <div className="container">
                     <div className="row row-eq-height">
                        <div className="col-sm-7 col-md-7 col-lg-10 mx-auto">
                        <div className="login-div">
                        <div className="login-img">
                        <div className="session-cont">
                               <img src={require('Assets/img/acpl-logo-color.png')} alt="acpl-logo" className="img-fluid" /> 
                               {/* <h1 className="font-weight-bold">{AppConfig.brandName}</h1> */}
                               <p>Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Pellentesque in condimentum nibh, quis rutrum quam. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                                per inceptos himenaeos. Ut pharetra quis urna eget dictum. Pellentesque 
                                luctus sem ante, ut imperdiet massa condimentum sit amet.</p>
                               {/* <h2>Don't have an account? </h2>
                               <Button variant="contained" className="btn-light button-base w-100" onClick={() => this.onUserSignUp()}>Sign Up</Button> */}
                               {/* <p className="mb-0">Most powerful ReactJS admin panel</p> */}
                            </div>                           
                         </div> 
                         <div className="session-body">
                         <div className="session-head mb-20">
                         <div className="row">
                              <div className="col-sm-7 col-md-6 col-lg-7 good-txt">
                                <div>
                                  <h1 className="font-weight-bold">Hi Good Afternoon!</h1>
                                  <p>Ready to start your day with <br/>some pitch checks?</p>
                                </div>
                              </div>
                              <div className="col-sm-7 col-md-6 col-lg-5">
                              <img src={require('Assets/img/login-person-img1.jpg')} alt="login-image" className="img-fluid" /> 
                              </div>                                         
                          </div>                          
                          </div>
                            <Form>
                               <FormGroup className="has-wrapper">
                               <div className="row">
                                <div className="col-sm-7 col-md-6 col-lg-3 good-txt">
                                   <label>User Name</label>
                                </div>
                                <div className="col-sm-7 col-md-6 col-lg-9">
                                <Input
                                     type="mail"
                                     value={email}
                                     name="user-mail"
                                     id="user-mail"
                                     className="has-input input-lg"
                                     placeholder="Enter Email Address"
                                     onChange={(event) => this.setState({ email: event.target.value })}
                                  />
                                  {/* <span className="has-icon"><i className="ti-user"></i></span> */}
                                </div>                                         
                            </div> 
                                  
                               </FormGroup>
                               <FormGroup className="has-wrapper">
                               <div className="row">
                                <div className="col-sm-7 col-md-6 col-lg-3 good-txt">
                                   <label>Password</label>
                                </div>
                                <div className="col-sm-7 col-md-6 col-lg-9">
                                <Input
                                     value={password}
                                     type="Password"
                                     name="user-pwd"
                                     id="pwd"
                                     className="has-input input-lg"
                                     placeholder="Password"
                                     onChange={(event) => this.setState({ password: event.target.value })}
                                  />
                                  {/* <span className="has-icon"><i className="ti-lock"></i></span> */}
                                </div>                                         
                            </div> 

                                 
                               </FormGroup>
                               <FormGroup className="mb-15">
                               <div className="row">
                                  <div className="col-sm-7 col-md-6 col-lg-6 forgot-password">
                                  <p className="mb-0"><a target="_blank" href="javascript:void(0);" className="text-muted"><Link to="/session/forgot-password">Forgot Password?</Link></a></p>
                                  </div>
                                  <div className="col-sm-7 col-md-6 col-lg-6 text-right btn-right">
                                  <Button
                                     color="primary"
                                     className="button-base btn-primary-bg text-white w-60"
                                     variant="contained"
                                     size="large"
                                     onClick={() => this.onUserLogin()}
                                  >
                                     Sign In
                                      </Button>                                   
                                  </div>  
                                  </div>
                               </FormGroup>

                               {/* <FormGroup className="mb-15">
                                  <Button
                                     variant="contained"
                                     className="btn-info btn-block text-white w-100"
                                     size="large"
                                     onClick={() => this.loginAuth0()}
                                  >
                                     Sign In With Auth0
                                      </Button>
                               </FormGroup> */}
                            </Form>
                            {/* <p className="mb-20">or sign in with</p>
                            <Fab size="small" variant="round" className="btn-facebook mr-15 mb-20 text-white"
                               onClick={() => this.props.signinUserWithFacebook(this.props.history)}
                            >
                               <i className="zmdi zmdi-facebook"></i>
                            </Fab>
                            <Fab size="small" variant="round" className="btn-google mr-15 mb-20 text-white"
                               onClick={() => this.props.signinUserWithGoogle(this.props.history)}
                            >
                               <i className="zmdi zmdi-google"></i>
                            </Fab>
                            <Fab size="small" variant="round" className="btn-twitter mr-15 mb-20 text-white"
                               onClick={() => this.props.signinUserWithTwitter(this.props.history)}
                            >
                               <i className="zmdi zmdi-twitter"></i>
                            </Fab>
                            <Fab size="small" variant="round" className="btn-instagram mr-15 mb-20 text-white"
                               onClick={() => this.props.signinUserWithGithub(this.props.history)}
                            >
                               <i className="zmdi zmdi-github-alt"></i>
                            </Fab> */}
                            {/* <p className="text-muted">By signing up you agree to {AppConfig.brandName}</p> */}
                           
                         </div>
                      </div>

                       <div className="footer-txt text-center">
                          <p>Copyrights 2021 AFIPL | Terms of Use | Cookies</p> 
                        </div>
                        </div>
                        {/* <div className="col-sm-5 col-md-5 col-lg-4">
                           <SessionSlider />
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </QueueAnim>
      );
   }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { user, loading } = authUser;
   return { user, loading }
}

export default connect(mapStateToProps, {
   signinUserInFirebase,
   signinUserWithFacebook,
   signinUserWithGoogle,
   signinUserWithGithub,
   signinUserWithTwitter
})(Signin);
