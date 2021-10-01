/**
 * App Header
 */
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import Button from '@material-ui/core/Button';
 import IconButton from '@material-ui/core/IconButton';
 import Drawer from '@material-ui/core/Drawer';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import { Link } from 'react-router-dom';
 import screenfull from 'screenfull';
 import Tooltip from '@material-ui/core/Tooltip';
 import MenuIcon from '@material-ui/icons/Menu';
 import { withRouter } from 'react-router-dom';
 
 // actions
 import { collapsedSidebarAction, miniSidebarAction } from 'Actions';
 
 // helpers
 import { getAppLayout } from "Helpers/helpers";
 
 // components
 import Notifications from './Notifications';
 import ChatSidebar from './ChatSidebar';
 import DashboardOverlay from '../DashboardOverlay/DashboardOverlay';
 import LanguageProvider from './LanguageProvider';
 import SearchForm from './SearchForm';
 import QuickLinks from './QuickLinks';
 import MobileSearchForm from './MobileSearchForm';
 import Cart from './Cart';
 // components
 import UserBlock from '../Sidebar/UserBlock';
 import 'font-awesome/css/font-awesome.min.css';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 class Header extends Component {
 
	 state = {
		 customizer: false,
		 isMobileSearchFormVisible: false
	 }
	 Ischeck =true;
 
	 // function to change the state of collapsed sidebar
	 onToggleNavCollapsed = (event) => {	
 
		 var e = document.getElementsByClassName('app-container')[0].parentNode;
		console.log(this.Ischeck)
		 if (this.Ischeck==true) {
			 document.body.classList.add("mini-sidebar");
			 this.props.miniSidebarAction(this.Ischeck);
			 
			 this.Ischeck =false;		
		 }
		 else {
			 document.body.classList.remove("mini-sidebar");
			 //this.props.miniSidebarAction(this.Ischeck);
			 e.removeAttribute("style");
			 e.setAttribute("style", "position: absolute; inset: 0px 0px 0px 244px; transition: left 0.2s ease-out 0s, right 0.2s ease-out 0s;");
			 
			 this.Ischeck =true;
		 }
		 setTimeout(() => {
			 //this.props.miniSidebarAction(this.Ischeck);
		 }, 100)
		 
		 //this.props.collapsedSidebarAction(val);
	 }
 
	 // open dashboard overlay
	 openDashboardOverlay(e) {
		 var el = document.getElementsByClassName('dashboard-overlay')[0];
		 el.classList.toggle("d-none");
		 el.classList.toggle("show");
		 if (el.classList.contains('show')) {
			 document.body.style.overflow = "hidden";
		 }
		 else {
			 document.body.style.overflow = "";
		 }
		 e.preventDefault();
	 }
 
	 // close dashboard overlay
	 closeDashboardOverlay() {
		 var e = document.getElementsByClassName('dashboard-overlay')[0];
		 e.classList.remove('show');
		 e.classList.add('d-none');
		 document.body.style.overflow = "";
	 }
 
	 // toggle screen full
	 toggleScreenFull() {
		 screenfull.toggle();
	 }
 
	 // mobile search form
	 openMobileSearchForm() {
		 this.setState({ isMobileSearchFormVisible: true });
	 }
 
	 render() {
		 
		 const { isMobileSearchFormVisible } = this.state;
		 const { horizontalMenu, agencyMenu, location } = this.props;
		 return (
			 <AppBar position="static" className="rct-header">
				 <Toolbar className="d-flex justify-content-between w-100 pl-0">
					 <div className="d-inline-flex align-items-center menu-align">
						 {(horizontalMenu || agencyMenu) &&
							 <div className="site-logo">
								 {/* <Link to="/" className="logo-mini">
									 <img src={require('Assets/img/appLogo.png')} className="mr-15" alt="site logo" width="35" height="35" />
								 </Link>
								 <Link to="/" className="logo-normal">
									 <img src={require('Assets/img/appLogoText.png')} className="img-fluid" alt="site-logo" width="67" height="17" />
								 </Link> */}
							 </div>
						 }
						 {!agencyMenu &&
							 <ul className="list-inline mb-0 navbar-left">
								 {!horizontalMenu ?
									'' :
									 <li className="list-inline-item">
										 <Tooltip title="Sidebar Toggle" placement="bottom">
											 <IconButton color="inherit" aria-label="Menu" className="humburger p-0" component={Link} to="/">
												 <i className="ti-layout-sidebar-left"></i>
												 
											 </IconButton>
										 </Tooltip>
									 </li>
								 }
								 {!horizontalMenu 
								 //&& 
								 // <QuickLinks />
								 }
								 {/* <li className="list-inline-item search-icon d-inline-block">
									 <SearchForm />
									 <IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
										 <i className="zmdi zmdi-search"></i>
									 </IconButton>
									 <MobileSearchForm
										 isOpen={isMobileSearchFormVisible}
										 onClose={() => this.setState({ isMobileSearchFormVisible: false })}
									 />
								 </li> */}
								 
							 </ul>
						 }
					 </div>
					 
					 <ul className="navbar-right-new">
					 <li>
							 <a href="javascript:void()">
							 <Tooltip title="Navigation" placement="bottom" className="">
						 <img src={require('Assets/img/tp-ico-4.png')} />
						 </Tooltip>
						 </a>
							 </li>
					 <li>
							 <a href="javascript:void()">
							 <Tooltip title="Support" placement="bottom" className="">
						 <img src={require('Assets/img/tp-ico-3.png')} />
						 </Tooltip>
						 </a>
							 </li>
							 <li>
							 <a href="javascript:void()">
							 <Tooltip title="Notification" placement="bottom" className="">
						 <img src={require('Assets/img/tp-ico-6.png')} />
						 </Tooltip>
						 </a>
							 </li>
							 <li>
							 <a href="javascript:void()">
							 <Tooltip title="Help" placement="bottom" className="">
						 <img src={require('Assets/img/tp-ico-2.png')} />
						 </Tooltip>
						 </a>
							 </li>
							 {/* <li className="cmd-ico">
								<a href="javascript:void()">
									<Tooltip title="" placement="bottom" className="">
										<img src={require('Assets/img/tp-ico-5.png')} />
									</Tooltip>
								</a>
							 </li> */}
							 
						 </ul>
						 <ul className="navbar-right list-inline mb-0 u-p-men">
					 
						 <li className="list-inline-item summary-icon ml-10">
								 <UserBlock />
						 </li>
						 </ul>
					 <Drawer
						 anchor={'right'}
						 open={this.state.customizer}
						 onClose={() => this.setState({ customizer: false })}
					 >
						 <ChatSidebar />
					 </Drawer>
				 </Toolbar>
				 <DashboardOverlay
					 onClose={() => this.closeDashboardOverlay()}
				 />
			 </AppBar>
		 );
	 }
 }
 
 // map state to props
 const mapStateToProps = ({ settings }) => {
	 return settings;
 };
 
 export default withRouter(connect(mapStateToProps, {
	 collapsedSidebarAction, miniSidebarAction
 })(Header));
 