/**
 * App Routes
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import { Scrollbars } from 'react-custom-scrollbars';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
 import MenuIcon from '@material-ui/icons/Menu';


// Components
import Header from 'Components/Header/Header';
import SidebarContent from 'Components/Sidebar';
import Footer from 'Components/Footer/Footer';
import Tour from 'Components/Tour';
import ThemeOptions from 'Components/ThemeOptions/ThemeOptions';

// preload Components
import PreloadHeader from 'Components/PreloadLayout/PreloadHeader';
import PreloadSidebar from 'Components/PreloadLayout/PreloadSidebar';
import { Link } from 'react-router-dom';

// app config
import AppConfig from 'Constants/AppConfig';

// actions
import { collapsedSidebarAction, startUserTour, miniSidebarAction } from 'Actions';

class MainApp extends Component {

	state = {
		loadingHeader: true,
		loadingSidebar: true
	}
	constructor(props) {
        super(props);
        this.state = {submenuName: 'Design & Development'}
    }
	UNSAFE_componentWillMount() {
		this.updateDimensions();
	}

	componentDidMount() {
		const { windowWidth } = this.state;
		
		this.interval = setInterval(() => this.setState({submenuName: localStorage.getItem('menuName')}), 1000);

		window.addEventListener("resize", this.updateDimensions);
		if (AppConfig.enableUserTour && windowWidth > 600) {
			setTimeout(() => {
				this.props.startUserTour();
			}, 2000);
		}
		setTimeout(() => {
			this.setState({ loadingHeader: false, loadingSidebar: false });
		}, 114);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
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

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			window.scrollTo(0, 0);
		}
	}

	renderPage() {
		const { pathname } = this.props.location;
		const { children } = this.props;
		if (pathname === '/app/chat' || pathname.startsWith('/app/mail') || pathname === '/app/todo') {
			return (
				<div className="rct-page-content p-0">
					{children}
				</div>
			);
		}
		return (
			<Scrollbars
				className="rct-scroll"
				autoHide
				autoHideDuration={100}
				style={this.getScrollBarStyle()}
			>
				<div className="rct-page-content">
					{children}
					<Footer />
				</div>
			</Scrollbars>
		);
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
	// render header
	renderHeader() {
		const { loadingHeader } = this.state;
		if (loadingHeader) {
			return <PreloadHeader />;
		}
		return <Header />
	}

	//render Sidebar
	renderSidebar() {
		const { loadingSidebar } = this.state;
		if (loadingSidebar) {
			return <PreloadSidebar />;
		}
		return <SidebarContent />
	}

	//Scrollbar height
	getScrollBarStyle() {
		return {
			height: 'calc(100vh - 50px)'
		}
	}

	getTotalPrice(){
		return localStorage.getItem();
	}

	render() {
		const { navCollapsed, rtlLayout, miniSidebar } = this.props.settings;
		const { windowWidth } = this.state;
		const { showing } = this.state;
		return (
			<div className="app">
				<div className="app-main-container">
					<Tour />
					<Sidebar
						sidebar={this.renderSidebar()}
						open={windowWidth <= 1199 ? navCollapsed : false}
						docked={windowWidth > 1199 ? !navCollapsed : false}
						pullRight={rtlLayout}
						onSetOpen={() => this.props.collapsedSidebarAction(false)}
						styles={{ content: { overflowY: '' } }}
						contentClassName={classnames({ 'app-conrainer-wrapper': miniSidebar })}
					>
						<div className="list-inline-item toggle-btn" onClick={(e) => this.onToggleNavCollapsed()}>
						 <Tooltip title="Sidebar Toggle" placement="bottom">
							<IconButton color="inherit" mini="true" aria-label="Menu" className="humburger p-0">
								<MenuIcon />											
							</IconButton>
						</Tooltip>
						</div>
				 		<div  className="app-txt"><span className='logo-text-hm'>{this.state.submenuName?this.state.submenuName:'Design & Development'}</span></div>
						<div className="app-container">
							<div className="rct-app-content">
								<div className="app-header">
									{this.renderHeader()}
								</div>
								<div className="rct-page">
									{this.renderPage()}
								</div>
							</div>
						</div>
					</Sidebar>
					<div className="co-i" onClick={() => this.setState({ showing: !showing })}>
						
							<a href="javascript:void()">
						<img src={require('Assets/img/si-9.png')} />
						</a>
							
						</div>
					 { showing 
                    ?
					<div className="footer-copy">
				 	<span aria-hidden="true" class="icon-close" onClick={() => this.setState({ showing: !showing })}></span>
						<Link to="/" className="logo-mini">
							<img src={require('Assets/img/acpl-logo.png')} className="mr-0" alt="site logo" width="100" height="50" />
						</Link>
					<p>Copyrights &copy; AFIPL</p> 
				 
						<p>Lorem Ipsum is simply dummy text of the 
						printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
						</div>:null
						}
					{/* <ThemeOptions /> */}
				</div>
			</div>
		);
	}
}

// map state to props
const mapStateToProps = ({ settings }) => {
	return { settings }
}

export default withRouter(connect(mapStateToProps, {
	collapsedSidebarAction,
	startUserTour,
	miniSidebarAction
})(MainApp));
