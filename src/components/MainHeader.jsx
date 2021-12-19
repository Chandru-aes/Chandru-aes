import React from "react";

export default function(){
    return (
        <div className="main-header sticky side-header nav nav-item">
            <div className="container-fluid">
                <div className="main-header-left ">
                    <a id="sidebarCollapse"><img src="assets/img/app-icon-white.png" className="" alt="logo" /></a>
                    <h1 className="main-title ml-40">Design & Development</h1>
                </div>
                <div className="main-header-right">
                    <div className="main-header-center ms-3 d-sm-none d-md-none d-lg-block">
                        <input className="form-control" placeholder="Search..." type="search" /> <button className="btn"><i className="fas fa-search d-none d-md-block"></i></button>
                    </div>
                    <ul className="nav nav-item  navbar-nav-right ms-auto">
                        <li className="nav-link">
                            <a href="">
                                <img src="assets/img/tp-ico-4.png" />
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="">
                                <img src="assets/img/tp-ico-3.png" />
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="">
                                <img src="assets/img/tp-ico-6.png" />
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="">
                                <img src="assets/img/tp-ico-2.png" />
                            </a>
                        </li>
                        <li className="dropdown main-profile-menu nav nav-item nav-link">
                            <a className="profile-user d-flex" href=""><img alt="" src="assets/img/faces/6.jpg" /></a>
                            <div className="dropdown-menu">
                                <div className="main-header-profile bg-primary p-3">
                                    <div className="d-flex wd-100p">
                                        <div className="main-img-user"><img alt="" src="assets/img/faces/6.jpg" className="" /></div>
                                        <div className="ms-3 my-auto">
                                            <h6>Petey Cruiser</h6><span>Premium Member</span>
                                        </div>
                                    </div>
                                </div>
                                <a className="dropdown-item" href=""><i className="bx bx-user-circle"></i>Profile</a>
                                <a className="dropdown-item" href=""><i className="bx bx-cog"></i> Edit Profile</a>
                                <a className="dropdown-item" href=""><i className="bx bxs-inbox"></i>Inbox</a>
                                <a className="dropdown-item" href=""><i className="bx bx-envelope"></i>Messages</a>
                                <a className="dropdown-item" href=""><i className="bx bx-slider-alt"></i> Account
                                    Settings</a>
                                <a className="dropdown-item" href="signin.html"><i className="bx bx-log-out"></i> Sign
                                    Out</a>
                            </div>
                        </li>
                        {/* <li className="dropdown main-header-message right-toggle">
                            
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}