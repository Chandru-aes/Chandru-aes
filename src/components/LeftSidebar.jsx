import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function(){
    
    const navigate = useNavigate()

    const goToForecasting = (e) => {
        alert("hai")
        console.log(e)
        e.preventDefault()
        navigate("/fore-casting")
    }

    return (
        <div className="sidebar-nav-pad">
            <nav className="sidebar">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/fore-casting"><i className="fa fa-dashboard" aria-hidden="true"></i><span className="m-txt"> Forecasting </span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span aria-hidden="true" className="ti-bar-chart"></span> <span className="m-txt"> Styling</span> <b className="float-end">&raquo;</b> </a>
                        <ul className="submenu dropdown-menu">
                            <li><Link to="/style-list" className="nav-link">Style
                                    List</Link></li>
                            <li><Link to="/style-create" className="nav-link">Style
                                    Creation</Link></li>
                            <li><a href="" className="nav-link">Request
                                    Grid</a></li>
                            <li><a href="single-window.html" className="nav-link">Single
                                    Window</a></li>
                            
                            
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-diamond" aria-hidden="true"></i> <span className="m-txt">Item Creation</span> </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> <span aria-hidden="true" className="icon-layers"></span><span className="m-txt">HandOver </span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-futbol-o" aria-hidden="true"></i><span className="m-txt">Repository </span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#"> <img src="assets/img/si-5.png" /> </a>
                    </li>
                    <li className="nav-item">
                        <a href="#"> <img src="assets/img/si-6.png" /> </a>
                    </li>
                    <li className="nav-item">
                        <a href="#"> <img src="assets/img/si-7.png" /> </a>
                    </li>
                    <li className="nav-item">
                        <a href="#"> <img src="assets/img/si-8.png" /> </a>
                    </li>
                </ul>
            </nav>
            
            <div className="co-i"><a href="#"><img src="assets/img/si-9.png" /></a></div>
        </div>
    )
}