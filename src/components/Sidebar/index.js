/**
 * Reactify Sidebar
 */
 import React, { Component, Fragment } from 'react';
 import classNames from 'classnames';
 import { withRouter } from 'react-router-dom';
 import { useHistory } from "react-router-dom";
 import { connect } from 'react-redux';
 import { Link } from 'react-router-dom';
 import { Scrollbars } from 'react-custom-scrollbars';
 import { Input } from 'reactstrap';
 import Button from '@material-ui/core/Button';
 import IconButton from '@material-ui/core/IconButton';
 import Tooltip from '@material-ui/core/Tooltip';
 import MenuIcon from '@material-ui/icons/Menu';
 import Drawer from '@material-ui/core/Drawer';
 import ChatSidebar from '../../components/Header/ChatSidebar';
 import ToggleSidebar from '../../components/Header/ToggleSidebar';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import SearchForm from '../Header/SearchForm';
 import MobileSearchForm from '../Header/MobileSearchForm';
 
 
 // redux actions
 import { collapsedSidebarAction } from 'Actions';
 
 // components
 import UserBlock from './UserBlock';
 import SidebarContent from './SidebarContent';
 import AgencySidebar from '../AgencyMenu/AgencySidebar';
 
 class Sidebar extends Component {
 
	 UNSAFE_componentWillMount() {
		 this.updateDimensions();
	 }
 
	 shouldComponentUpdate(nextProps) {
		 const { enableSidebarBackgroundImage, selectedSidebarImage, isDarkSidenav, locale } = this.props;
		 if (enableSidebarBackgroundImage !== nextProps.enableSidebarBackgroundImage || selectedSidebarImage !== nextProps.selectedSidebarImage || isDarkSidenav !== nextProps.isDarkSidenav || locale) {
			 return true
		 } else {
			 return false
		 }
	 }
 
	 componentDidMount() {
		 window.addEventListener("resize", this.updateDimensions);
	 }
 
	 componentWillUnmount() {
		 window.removeEventListener("resize", this.updateDimensions);
	 }
	 checkMenu(menuValue){
		 
		this.setState({ customizer: false });
		localStorage.setItem('menuName',menuValue);
		

		this.props.history.push('/app/pages/dashboard');
		
	 }
	 UNSAFE_componentWillReceiveProps(nextProps) {
		 const { windowWidth } = this.state;
		 if (nextProps.location !== this.props.location) {
			 if (windowWidth <= 1199) {
				 this.props.collapsedSidebarAction(false);
			 }
		 }
	 }
 
	 updateDimensions = () => {
		 this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
	 }
 
	 render() {
		 const { enableSidebarBackgroundImage, selectedSidebarImage, isDarkSidenav, agencySidebar } = this.props;
		 return (
			 <Fragment>
				 <div className={classNames('rct-sidebar', { 'background-none': !enableSidebarBackgroundImage })}>
					 <div className={classNames("rct-sidebar-content", { "sidebar-overlay-dark": !isDarkSidenav, 'sidebar-overlay-light': isDarkSidenav })}>
						 <div className="site-logo">
							 {/* <span>ACPL</span> */}
							 <Tooltip title="App Launcher" placement="bottom" className="mr-50" onClick={() => this.setState({ customizer: true })}>
								 <IconButton color="inherit" mini="true" aria-label="Menu" className="app-icon">
								 {/* <i className="zmdi zmdi-apps"></i>*/}
								 <img src={require('Assets/img/app-icon-white.png')} alt="App Launcher" />								
								 </IconButton>
							 </Tooltip>
							 {/* <Link to="/" className="logo-normal">
								 <img src={require('Assets/img/appLogoText.png')} className="img-fluid" alt="site-logo" width="67" height="17" />
							 </Link> */}
						 </div>

						 <Drawer
							 anchor={'left'}
							 open={this.state.customizer}
							 onClose={() => this.setState({ customizer: false })}
						 >
							  <div className="chat-sidebar rct-customizer rct-customizer-menu">
								<AppBar position="static" color="primary">
									<Toolbar>
									<Tooltip title="App Launcher" placement="bottom" className="mr-50" onClick={() => this.setState({ customizer: false })}>
										<IconButton color="inherit" mini="true" aria-label="Menu" className="app-icon">
										{/* <i className="zmdi zmdi-apps"></i>	 */}
										<img src={require('Assets/img/app-icon-blk.png')} alt="App Launcher" />
										</IconButton>
									</Tooltip> 
									<a href="javascript:void(0);" className="back-link"  onClick={() => this.setState({ customizer: false })}> <i className="zmdi zmdi-long-arrow-left" ></i><span>Back</span></a>
									</Toolbar>
								</AppBar>
      {/* <List>
         {users.map((user, key) => (
            <ListItem key={key} button className="chat-list-item">
               <Avatar className="mr-2" src={user.photo_url} />
               <ListItemText
                  primary={user.first_name + ' ' + user.last_name}
                  secondary={textTruncate(user.last_chat, 16)}
               />
            </ListItem>
         ))}
      </List> */}
     <div className="other-menu">
		
       <h2>Apps</h2>
       <div className="menu-div">
		   
          <ul>
            {/* <li>
				
              <a href="javascript:void(0);" onClick={() => this.checkMenu('Design & Development')}><img src={require('Assets/img/design-icon-cl.png')} alt="Design and Development" className="img-fluid" /> <span class="menu"><span>Design & Development</span></span></a>
            </li> */}
            <li>
              <a href="javascript:void(0);" onClick={() => this.checkMenu('Pre-Production')}><img src={require('Assets/img/pre-production-icon-cl.png')} alt="Product Development" className="img-fluid" /> <span class="menu"><span>Product Development</span></span></a>
            </li>
            {/* <li>
              <a href="javascript:void(0);" onClick={() => this.checkMenu('Planning')}><img src={require('Assets/img/planning-icon-cl.png')} alt="Planning" className="img-fluid" /> <span class="menu"><span>Planning</span></span></a>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={() => this.checkMenu('Sourcing')}><img src={require('Assets/img/sourcing-icon-cl.png')} alt="Sourcing" className="img-fluid" /> <span class="menu"><span>Sourcing</span></span></a>
            </li> */}
            <li>
              <a href="javascript:void(0);" onClick={() => this.checkMenu('Admin')}><img src={require('Assets/img/admin-icon-cl.png')} alt="Admin" className="img-fluid" /> <span class="menu"><span>Administrator</span></span></a>
            </li>
         <li>
              <a href="javascript:void(0);" onClick={() => this.checkMenu('Bootstrap')}><img src={require('Assets/img/bootstrap-icon-cl.png')} alt="Bootstrap" className="img-fluid" /> <span class="menu"><span>Bootstrap</span></span></a>
            </li> 
          </ul>
          {/* <a href="javascript:void(0);" className="app-link"><span>All Apps</span><i className="zmdi zmdi-long-arrow-right"></i> </a> */}
         </div>
		
         <div className="menu-btm">
            <h2>Where do you want to go?</h2>
        </div>
		<div className="search-icon">
			<SearchForm />
			<IconButton mini="true" className="search-icon-btn">
				<i className="zmdi zmdi-search"></i>
			</IconButton>
		</div>
     </div>    
     
   </div>
						 </Drawer>
						 <div className="rct-sidebar-wrap">
							 <Scrollbars
								 className="rct-scroll"
								 autoHide
								 autoHideDuration={100}
								 style={{ height: 'calc(100vh - 140px)' }}
							 >
								 {/* <UserBlock /> */}
								 {!agencySidebar ?
									 <SidebarContent />
									 :
									 <AgencySidebar />
								 }
							 </Scrollbars>
							 
						 </div>				
						 
					 </div>
					
				 </div>
			 </Fragment>
		 );
	 }
 }
 
 // map state to props
 const mapStateToProps = ({ settings }) => {
	 const { enableSidebarBackgroundImage, selectedSidebarImage, collapsedSidebar, isDarkSidenav, locale } = settings;
	 return { enableSidebarBackgroundImage, selectedSidebarImage, collapsedSidebar, isDarkSidenav, locale };
 };
 
 export default withRouter(connect(mapStateToProps, {
	 collapsedSidebarAction,
 })(Sidebar));
 