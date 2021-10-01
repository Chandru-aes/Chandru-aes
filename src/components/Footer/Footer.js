/**
 * Footer
 */
 import React from 'react';
 import Button from '@material-ui/core/Button';
 import { Link } from 'react-router-dom';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // app config
 import AppConfig from 'Constants/AppConfig';
 
 const Footer = () => (
	 <div className="rct-footer d-flex justify-content-between align-items-center">
		 <ul className="list-inline footer-menus mb-0">
			 {/* <li className="list-inline-item">
			 <Button component={Link}><IntlMessages id="sidebar.gettingStarted" /></Button>
				  <Button component={Link} to="/app/dashboard"><IntlMessages id="sidebar.gettingStarted" /></Button> 
			 </li>
			 <li className="list-inline-item">
				 <Button component={Link}><IntlMessages id="sidebar.aboutUs" /></Button>
			 </li>
			 <li className="list-inline-item">
				 <Button component={Link}><IntlMessages id="sidebar.faq(s)" /></Button>
			 </li>
			 <li className="list-inline-item">
				 <Button component={Link}><IntlMessages id="sidebar.terms&Conditions" /></Button>
			 </li>
			 <li className="list-inline-item">
				 <Button component={Link}><IntlMessages id="sidebar.feedback" /></Button>
			 </li> */}
		 </ul>
		 <h5 className="mb-0">Copyrights &copy; {AppConfig.copyRightText}</h5>
	 </div>
 );
 
 export default Footer;
 