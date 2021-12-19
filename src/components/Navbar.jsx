import React from "react";

export default function(){
    return (
        <nav id="sidebar">
            <div id="dismiss" className="df-ico">
                <a href="#">
                    <img src="assets/img/app-icon-blk.png" />
                </a>
            </div>
            <div id="dismiss">
                <i className="fas fa-arrow-left"></i>
            </div>
            <div className="other-menu mt-30">
                <h2>Apps</h2>
                <div className="menu-div">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="assets/img/sourcing-icon-cl.png" />
                                <span className="menu"><span>Masters</span></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/pre-production-icon-cl.png" />
                                <span className="menu"><span>Product Development</span></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/admin-icon-cl.png" />
                                <span className="menu"><span>Administrator</span></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/bootstrap-icon-cl.png" />
                                <span className="menu"><span>Bootstrap</span></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu-btm">
                    <h2>Where do you want to go?</h2>
                </div>
                <div className="search-icon">
                    <div className="search-wrapper"><input placeholder="Search.." type="search" className="search-input-lg form-control" /></div>
                </div>
            </div>
        </nav>
    )
}