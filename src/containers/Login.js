import React from "react";
import {Form, FormGroup, Button, Input} from "reactstrap";
import {Link} from "react-router-dom";
import bg from "../assets/img/acpl-logo-white.png"
import loginPersonImg from "../assets/img/login-person-img.jpg"
import cookie from "react-cookies";

const LoginPage = () => {

    const login = () => {
        cookie.save("cred", "sample-token")
        history.pushState("", null, "/")
        location.reload()
    }
    return (
        <div className="page">
            <div className="rct-session-wrapper rct-session-wrapper1">
                <div className="session-inner-wrapper">
                    <div className="container">
                        <div className="row row-eq-height">
                            <div className="col-sm-7 col-md-12 col-lg-10 mx-auto">
                                <div className="login-div">
                                    <div className="login-img">
                                        <div className="session-cont">
                                            <img src={bg} alt="acpl-logo"
                                                 className="img-fluid"/>
                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Pellentesque in condimentum nibh, quis rutrum quam.
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                per inceptos himenaeos. Ut pharetra quis urna eget dictum. Pellentesque
                                                luctus sem ante, ut imperdiet massa condimentum sit amet.</p>
                                        </div>
                                    </div>
                                    <div className="session-body">
                                        <div className="session-head mb-20">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6 col-lg-7 good-txt">
                                                    <div>
                                                        <h1 className="font-weight-bold">Hi Good Afternoon!</h1>
                                                        <p>Ready to start your day with <br/>some pitch checks?</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-5">
                                                    <img src={loginPersonImg} alt="login-image"
                                                         className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                        <Form>
                                            <FormGroup className="has-wrapper">
                                                <Input type="mail" name="user-mail" id="user-mail"
                                                       className="form-control has-input input-lg"
                                                       placeholder="Enter Email Address" />
                                                <span className="has-icon"><i className="ti-user"/></span>
                                            </FormGroup>
                                            <FormGroup className="has-wrapper">
                                                <Input type="Password" name="user-pwd" id="pwd"
                                                       className="form-control has-input input-lg" placeholder="Password" />
                                                <span className="has-icon"><i className="ti-lock"/></span>
                                            </FormGroup>
                                            <FormGroup className="mb-15">
                                                <div className="row">
                                                    <div className="col-sm-7 col-md-6 col-lg-6 forgot-password">
                                                        <p className="mb-0">
                                                            <Link to="/session/forgot-password" className="text-muted">Forgot Password?</Link>
                                                        </p>
                                                    </div>
                                                    <div className="col-sm-7 col-md-6 col-lg-6 text-right btn-right">
                                                        <Button
                                                            className="btn btn-primary text-white w-60 font-weight-bold"
                                                            variant="contained"
                                                            size="large"
                                                            onClick={login}
                                                        >
                                                            Sign In
                                                        </Button>
                                                    </div>
                                                </div>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </div>
                                <div className="footer-txt text-center"><p>Copyrights 2021 AFIPL | Terms of Use |
                                    Cookies</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage