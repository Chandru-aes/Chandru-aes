/**
 * Buttons
 */
import React from 'react';
import MatButton from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'reactstrap';
import { Fab } from '@material-ui/core';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

function RaisedButtons(props) {
   return (
      <div className="button-wrapper">
         <PageTitleBar title={<IntlMessages id="sidebar.buttons" />} match={props.match} />
        
         <RctCollapsibleCard
            heading="Buttons"
         >
            {/* <span className="sub-heading">Bootstrap and material Color Scheme With Material Raised Button Concept</span> */}
            <MatButton variant="contained" color="primary" className="btn button-base btn-primary-bg mr-10 mb-10 text-white">Primary</MatButton>
            <MatButton variant="contained" className="btn button-base btn-secondary-bg mr-10 mb-10 text-white">Secondary</MatButton>
            <MatButton variant="contained" className="btn-success mr-10 mb-10 text-white">Success</MatButton>
            <MatButton variant="contained" className="btn-warning mr-10 mb-10 text-white">warning</MatButton>
            <MatButton variant="contained" className="btn-info mr-10 mb-10 text-white">Info</MatButton>
            <MatButton variant="contained" className="btn-danger mr-10 mb-10 text-white">Danger</MatButton>
            <MatButton variant="contained" color="primary" className="mr-10 mb-10 text-white">Button</MatButton>
            <MatButton variant="contained" color="secondary" className="mr-10 mb-10 text-white">Button</MatButton>
            <MatButton variant="contained" color="" className="mr-10 mb-10"  style={{"cursor":"not-allowed"}}>Disabled</MatButton>
         </RctCollapsibleCard>
         <RctCollapsibleCard
            heading={<IntlMessages id="widgets.buttonWithIconAndLabel" />}
         >
           
            <MatButton variant="contained" color="primary" className="btn button-base btn-primary-bg mr-10 mb-10 text-white btn-icon">Delete <i className="zmdi zmdi-delete"></i></MatButton>
            <MatButton variant="contained" className="btn button-base btn-secondary-bg mr-10 mb-10 text-white btn-icon">Send <i className="zmdi zmdi-mail-send"></i></MatButton>
            <MatButton variant="contained" className="btn button-base btn-success mr-10 mb-10 text-white btn-icon"><i className="zmdi zmdi-check-all"></i> Success</MatButton>
            <MatButton variant="contained" className="btn button-base btn-warning mr-10 mb-10 text-white btn-icon">Warning <i className="zmdi zmdi-alert-triangle"></i></MatButton>
            <MatButton variant="contained" className="btn button-base btn-info mr-10 mb-10 text-white btn-icon">Info <i className="zmdi zmdi-info"></i></MatButton>
            <MatButton variant="contained" className="btn button-base btn-danger mr-10 mb-10 text-white btn-icon">Danger <i className="zmdi zmdi-alert-circle"></i></MatButton>
            <MatButton variant="contained" color="primary" className="btn button-base mr-10 mb-10 text-white btn-icon">Button <i className="zmdi zmdi-inbox"></i></MatButton>
            <MatButton variant="contained" color="secondary" className="btn button-base mr-10 mb-10 text-white btn-icon">Button <i className="zmdi zmdi-favorite"></i></MatButton>
         </RctCollapsibleCard>
         <div className="row">
          
            <RctCollapsibleCard
               heading={<IntlMessages id="widgets.iconButton" />}
               colClasses="col-sm-12 col-md-6"
            >
            
               <IconButton color="primary" className="color-primary" aria-label="Delete">
                  <i className="zmdi zmdi-delete"></i>
               </IconButton>
               <IconButton color="secondary" aria-label="Add an alarm">
                  <i className="zmdi zmdi-alarm-check"></i>
               </IconButton>
               <IconButton className="text-danger" aria-label="Add an alarm">
                  <i className="zmdi zmdi-favorite"></i>
               </IconButton>
               <input accept="image/*" className="d-none" id="icon-button-file" type="file" />
               <label htmlFor="icon-button-file">
                  <IconButton className="text-warning" component="span">
                     <i className="zmdi zmdi-image"></i>
                  </IconButton>
               </label>
               <IconButton className="text-default" disabled aria-label="disabled Icon">
                  <i className="zmdi zmdi-help"></i>
               </IconButton>
            </RctCollapsibleCard>
         </div>        
        
        
      </div>
   );
}

export default RaisedButtons;
