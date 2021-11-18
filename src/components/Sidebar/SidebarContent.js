/**
 * Sidebar Content
 */
 import React, { Component } from 'react';
 import List from '@material-ui/core/List';
 import ListSubheader from '@material-ui/core/ListSubheader';
 import { withRouter } from 'react-router-dom';
 import { connect } from 'react-redux';
 import { Link } from 'react-router-dom';
 
 import IntlMessages from 'Util/IntlMessages';
 
 import NavMenuItem from './NavMenuItem';
 
 // redux actions
 import { onToggleMenu } from 'Actions';
 
 class SidebarContent extends Component {
	state = { showing: true };
	//menuName='Design & Development';
	constructor() {
		//setInterval(() => this.menuName = localStorage.getItem('menuName'), 1000);
		
        super()
        this.state = {
            activeItem: 'MenuTitle1',
			menuName: 'Design & Development'
        }
    }
	onToggleNavCollapsed = (event) => {	
 
		var e = document.getElementsByClassName('app-container')[0].parentNode;
		
			document.body.classList.remove("mini-sidebar");
			//this.props.miniSidebarAction(this.Ischeck);
			e.removeAttribute("style");
			e.setAttribute("style", "position: absolute; inset: 0px 0px 0px 244px; transition: left 0.2s ease-out 0s, right 0.2s ease-out 0s;");
			
			this.Ischeck =true;
	}
	 toggleMenu(menu, stateCategory) {
		 let data = {
			 menu,
			 stateCategory
		 }
		 this.props.onToggleMenu(data);
	 }
	 handleClick(id){
		console.log(id);
	 }
	 componentDidMount() {
		this.interval = setInterval(() => this.setState({submenuName: localStorage.getItem('menuName')}), 1000);
		
	 }
	 getClassName(id) {
        if(id === this.state.activeItem) return 'menuTitle active'
        return 'menuTitle'
    }
	getActiveClassName(id) {
        if(id === this.state.activeItem) return 'act'
        return ''
    }
	 clickMenu(id){
        // Add class 'active' on the clicked <li>, and remove from all other <li>
		
        this.setState({
            activeItem: id,
        })
		this.onToggleNavCollapsed();
    }
	 render() {
		 const { sidebarMenus } = this.props.sidebar;
		 const { showing } = this.state;
		 return (
			 <div className="rct-sidebar-nav">
			  <div className="sidebar-nav-pad">
			 	<ul className="sidebar-new">
						<li  class="act" id="MenuTitle1"
                            
                            onClick={() => this.clickMenu('MenuTitle1')} className={this.getActiveClassName('MenuTitle1')}>
							<a href="javascript:void()">
							
							<i class="fa fa-dashboard" aria-hidden="true"></i>
						
						</a>
							</li>
							<li id="MenuTitle2"
                            onClick={() => this.clickMenu('MenuTitle2')} className={this.getActiveClassName('MenuTitle2')}>
							<a href="javascript:void()">
							<span aria-hidden="true" class="ti-bar-chart"></span>
						</a>
							</li>
							<li id="MenuTitle3"
                            onClick={() => this.clickMenu('MenuTitle3')} className={this.getActiveClassName('MenuTitle3')}>
							<a href="javascript:void()">
							<i class="fa fa-diamond" aria-hidden="true"></i>
						</a>
							</li>
							<li id="MenuTitle4"
                            onClick={() => this.clickMenu('MenuTitle4')} className={this.getActiveClassName('MenuTitle4')}>
							<a href="javascript:void()">
							<span aria-hidden="true" class="icon-layers"></span>
						</a>
							</li>
							<li id="MenuTitle5"
                            onClick={() => this.clickMenu('MenuTitle5')} className={this.getActiveClassName('MenuTitle5')}>
							<a href="javascript:void()">
							<i class="fa fa-futbol-o" aria-hidden="true"></i>
						</a>
							</li>
							<li id="6" onClick={() => this.handleClick(6)}>
							<a href="javascript:void()">
						<img src={require('Assets/img/si-5.png')} />
						</a>
							</li>
							<li id="7" onClick={() => this.handleClick(7)}>
							<a href="javascript:void()">
						<img src={require('Assets/img/si-6.png')} />
						</a>
							</li>
							<li>
							<a href="javascript:void()">
						<img src={require('Assets/img/si-7.png')} />
						</a>
							</li>
							<li>
							<a href="javascript:void()">
						<img src={require('Assets/img/si-8.png')} />
						</a>
							</li>
						</ul>
						
						</div>
					 <nav className="navigation">

						 
					
											
						 	<div id="submenu" className={this.getClassName('MenuTitle1')}>

							 
									{this.state.submenuName=='Admin' &&
												
												<List className="rct-mainMenu p-0 m-0 list-unstyled"  
														subheader={
														<ListSubheader className="side-title" component="li">
															{/* <IntlMessages id="sidebar.general" /> */}
														</ListSubheader>
														} >
													{sidebarMenus.category12.map((menu, key) => (
														<NavMenuItem
															menu={menu}
															key={key}
															onToggleMenu={() => this.toggleMenu(menu, 'category12')}
														/>
													))}
												</List>
												
											
											} 

									{this.state.submenuName=='Admin' &&
												
												<List className="rct-mainMenu p-0 m-0 list-unstyled"  
														subheader={
														<ListSubheader className="side-title" component="li">
															{/* <IntlMessages id="sidebar.general" /> */}
														</ListSubheader>
														} >
													{sidebarMenus.category13.map((menu, key) => (
														<NavMenuItem
															menu={menu}
															key={key}
															onToggleMenu={() => this.toggleMenu(menu, 'category13')}
														/>
													))}
												</List>
												
											
											}

										{this.state.submenuName=='Admin' &&
												
												<List className="rct-mainMenu p-0 m-0 list-unstyled"  
														subheader={
														<ListSubheader className="side-title" component="li">
															{/* <IntlMessages id="sidebar.general" /> */}
														</ListSubheader>
														} >
													{sidebarMenus.category14.map((menu, key) => (
														<NavMenuItem
															menu={menu}
															key={key}
															onToggleMenu={() => this.toggleMenu(menu, 'category14')}
														/>
													))}
												</List>
												
											
											}
											

									{this.state.submenuName!='Bootstrap'  && this.state.submenuName!='Admin'  && this.state.submenuName!='Pre-Production' && 
								
										<List className="rct-mainMenu p-0 m-0 list-unstyled"  
										subheader={
											<ListSubheader className="side-title" component="li">
												{/* <IntlMessages id="sidebar.general" /> */}
											</ListSubheader>
										} >
										{sidebarMenus.category10.map((menu, key) => (
											<NavMenuItem
												menu={menu}
												key={key}
												onToggleMenu={() => this.toggleMenu(menu, 'category10')}
											/>
										))}
									</List>
								}
									

								{this.state.submenuName!='Bootstrap'  && this.state.submenuName!='Admin'  && this.state.submenuName!='Pre-Production' &&
								<List
									className="rct-mainMenu p-0 m-0 list-unstyled"
									subheader={<ListSubheader className="side-title" component="li">
										{/* <IntlMessages id="sidebar.modules" /> */}
										</ListSubheader>}
								>
									{sidebarMenus.category2.map((menu, key) => (
										<NavMenuItem
											menu={menu}
											key={key}
											onToggleMenu={() => this.toggleMenu(menu, 'category2')}
										/>
									))}
								</List>
								}
								{this.state.submenuName!='Bootstrap'  && this.state.submenuName!='Admin'  && this.state.submenuName!='Pre-Production' &&
								<List
										className="rct-mainMenu p-0 m-0 list-unstyled"
										subheader={<ListSubheader className="side-title" component="li">
											{/* <IntlMessages id="sidebar.component" /> */}
											</ListSubheader>}
									>
										{sidebarMenus.category3.map((menu, key) => (
											<NavMenuItem
												menu={menu}
												key={key}
												onToggleMenu={() => this.toggleMenu(menu, 'category3')}
											/>
										))}
									</List>
								}
								{this.state.submenuName!='Bootstrap'  && this.state.submenuName!='Pre-Production' && this.state.submenuName!='Admin'  &&
									<List
										className="rct-mainMenu p-0 m-0 list-unstyled"
										subheader={<ListSubheader className="side-title" component="li">
											
											</ListSubheader>}
									>
										{sidebarMenus.category4.map((menu, key) => (
											<NavMenuItem
												menu={menu}
												key={key}
												onToggleMenu={() => this.toggleMenu(menu, 'category4')}
											/>
										))}
									</List>
									}
							</div>
					{this.state.submenuName!='Bootstrap'  && this.state.submenuName!='Admin'  &&  this.state.submenuName!='Pre-Production'  &&
					<div id="submenu" className={this.getClassName('MenuTitle2')}>
						
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.features" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category4.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category4')}
								/>
							))}
						</List>
						
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.applications" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category5.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category5')}
								/>
							))}
						</List>
					</div>
					 }

					 {this.state.submenuName!='Bootstrap'  && this.state.submenuName!='Admin'  && this.state.submenuName!='Pre-Production'  &&
					<div id="submenu" className={this.getClassName('MenuTitle3')}>
						
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.applications" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category5.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category5')}
								/>
							))}
						</List>
					<List
						 className="rct-mainMenu p-0 m-0 list-unstyled"
						 subheader={<ListSubheader className="side-title" component="li">
							 {/* <IntlMessages id="sidebar.modules" /> */}
							 </ListSubheader>}
					 >
						 {sidebarMenus.category2.map((menu, key) => (
							 <NavMenuItem
								 menu={menu}
								 key={key}
								 onToggleMenu={() => this.toggleMenu(menu, 'category2')}
							 />
						 ))}
					 </List>
					 <List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.component" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category3.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category3')}
								/>
							))}
						</List>
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.component" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category4.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category3')}
								/>
							))}
						</List>
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.component" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category5.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category3')}
								/>
							))}
						</List>
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.component" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category3.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category3')}
								/>
							))}
						</List>
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.component" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category1.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category3')}
								/>
							))}
						</List>
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.component" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category3.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category3')}
								/>
							))}
						</List>
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.component" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category4.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category3')}
								/>
							))}
						</List>
					</div>
	 				}
					 {this.state.submenuName!='Bootstrap'  && this.state.submenuName!='Admin'  && this.state.submenuName!='Pre-Production' &&
					<div id="submenu" className={this.getClassName('MenuTitle4')}>
						
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.features" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category4.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category4')}
								/>
							))}
						</List>
						
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.applications" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category5.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category5')}
								/>
							))}
						</List>
					</div>
	 				}
					 {this.state.submenuName!='Bootstrap'  && this.state.submenuName!='Admin'  && this.state.submenuName!='Pre-Production'  &&
					<div id="submenu" className={this.getClassName('MenuTitle5')}>
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.features" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category4.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category4')}
								/>
							))}
						</List>
						
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.modules" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category2.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category2')}
								/>
							))}
						</List>
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								
								</ListSubheader>}
						>
							{sidebarMenus.category3.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category3')}
								/>
							))}
						</List>
					</div>
				 }
				  {this.state.submenuName=='Bootstrap' && 
				
				 	<List className="rct-mainMenu p-0 m-0 list-unstyled"  
					 		subheader={
								<ListSubheader className="side-title" component="li">
									{/* <IntlMessages id="sidebar.general" /> */}
								</ListSubheader>
							 } >
						 {sidebarMenus.category6.map((menu, key) => (
							 <NavMenuItem
								 menu={menu}
								 key={key}
								 onToggleMenu={() => this.toggleMenu(menu, 'category6')}
							 />
						 ))}
					 </List>
				 
	 			}
				  {this.state.submenuName=='Bootstrap' &&
				 	<List className="rct-mainMenu p-0 m-0 list-unstyled"  
					 		subheader={
								<ListSubheader className="side-title" component="li">
									{/* <IntlMessages id="sidebar.general" /> */}
								</ListSubheader>
							 } >
						 {sidebarMenus.category7.map((menu, key) => (
							 <NavMenuItem
								 menu={menu}
								 key={key}
								 onToggleMenu={() => this.toggleMenu(menu, 'category7')}
							 />
						 ))}
					 </List>
					 
	 			}
				  {this.state.submenuName=='Bootstrap' &&
				 	<List className="rct-mainMenu p-0 m-0 list-unstyled"  
					 		subheader={
								<ListSubheader className="side-title" component="li">
									{/* <IntlMessages id="sidebar.general" /> */}
								</ListSubheader>
							 } >
						 {sidebarMenus.category8.map((menu, key) => (
							 <NavMenuItem
								 menu={menu}
								 key={key}
								 onToggleMenu={() => this.toggleMenu(menu, 'category8')}
							 />
						 ))}
					 </List>
					 
	 			}
				
				 
				  {this.state.submenuName=='Bootstrap' &&
				 	<List className="rct-mainMenu p-0 m-0 list-unstyled"  
					 		subheader={
								<ListSubheader className="side-title" component="li">
									{/* <IntlMessages id="sidebar.general" /> */}
								</ListSubheader>
							 } >
						 {sidebarMenus.category9.map((menu, key) => (
							 <NavMenuItem
								 menu={menu}
								 key={key}
								 onToggleMenu={() => this.toggleMenu(menu, 'category9')}
							 />
						 ))}
					 </List>
					 
	 			}
				  {this.state.submenuName=='Bootstrap' &&
				 	<List className="rct-mainMenu p-0 m-0 list-unstyled"  
					 		subheader={
								<ListSubheader className="side-title" component="li">
									{/* <IntlMessages id="sidebar.general" /> */}
								</ListSubheader>
							 } >
						 {sidebarMenus.category10.map((menu, key) => (
							 <NavMenuItem
								 menu={menu}
								 key={key}
								 onToggleMenu={() => this.toggleMenu(menu, 'category10')}
							 />
						 ))}
					 </List>
					 
	 			}
				{this.state.submenuName=='Pre-Production' && this.state.submenuName!='Bootstrap' &&
								<List
									className="rct-mainMenu p-0 m-0 list-unstyled"
									subheader={<ListSubheader className="side-title" component="li">
										{/* <IntlMessages id="sidebar.modules" /> */}
										</ListSubheader>}
								>
									{sidebarMenus.category11.map((menu, key) => (
										<NavMenuItem
											menu={menu}
											key={key}
											onToggleMenu={() => this.toggleMenu(menu, 'category11')}
										/>
									))}
								</List>
								}

					{this.state.submenuName=='Pre-Production' && this.state.submenuName!='Bootstrap' &&
						<List
							className="rct-mainMenu p-0 m-0 list-unstyled"
							subheader={<ListSubheader className="side-title" component="li">
								{/* <IntlMessages id="sidebar.modules" /> */}
								</ListSubheader>}
						>
							{sidebarMenus.category15.map((menu, key) => (
								<NavMenuItem
									menu={menu}
									key={key}
									onToggleMenu={() => this.toggleMenu(menu, 'category15')}
								/>
							))}
						</List>
						
						}
						{this.state.submenuName=='Pre-Production' && this.state.submenuName!='Bootstrap' &&
								<List
								className="rct-mainMenu p-0 m-0 list-unstyled"
								subheader={<ListSubheader className="side-title" component="li">
									{/* <IntlMessages id="sidebar.modules" /> */}
									</ListSubheader>}
							>
								{sidebarMenus.category16.map((menu, key) => (
									<NavMenuItem
										menu={menu}
										key={key}
										onToggleMenu={() => this.toggleMenu(menu, 'category16')}
									/>
								))}
						</List>
						
						}
						
				
				 </nav>
				
			 </div>
					
			 
		 );
	 }
 }
 
 // map state to props
 const mapStateToProps = ({ sidebar, settings }) => {
	 return { sidebar, settings };
 };
 
 export default withRouter(connect(mapStateToProps, {
	 onToggleMenu
 })(SidebarContent));
 