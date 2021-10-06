/**
 * Page Title Bar Component
 * Used To Display Page Title & Breadcrumbs
 */
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// get display string
const getDisplayString = (sub) => {
   const arr = sub.split("-");
   if (arr.length > 1) {
      return <IntlMessages id={`${arr[0].charAt(0) + arr[0].slice(1) + arr[1].charAt(0).toUpperCase() + arr[1].slice(1)}`} />
   } else {
      return <IntlMessages id={`${sub.charAt(0) + sub.slice(1)}`} />
   }

};

// get url string
const getUrlString = (path, sub, index) => {
   if (index === 0) {
      return '/';
   } else {
      return '/' + path.split(sub)[0] + sub;
   }
};

const PageTitleBar = ({ title, match, enableBreadCrumb }) => {
   const path = match.path.substr(1);
   const subPath = path.split('/');
   if(subPath.length>2){
      subPath.pop();
   }
 

 
   return (
      <div className="page-title d-flex justify-content-between align-items-center title-align-text">
         {title &&
            <div className="page-title-wrap">
               {/* <ul className="list-inline mb-0 navbar-left">
                <li className="list-inline-item" onClick={(e) => this.onToggleNavCollapsed(e)}>
                  <Tooltip title="Sidebar Toggle" placement="bottom">
                     <IconButton color="inherit" mini="true" aria-label="Menu" className="humburger p-0">
                        <MenuIcon />	
                        <i className="zmdi zmdi-long-arrow-right"></i>											
                     </IconButton>
                  </Tooltip>
               </li> 
               </ul> */}
               {/* <i className="ti-angle-left"></i> */}
               <h2 className="BreadCrumb-title">{title}</h2>
               {
                  enableBreadCrumb &&
                  <Breadcrumb className="mb-0 tour-step-7 breadcrumb-submenu" tag="nav">
                     {subPath.map((sub, index) => {
                        return <BreadcrumbItem active={subPath.length === index + 1}
                           tag={subPath.length === index + 1 ? "span" : Link} key={index}
                          >{getDisplayString(sub)}</BreadcrumbItem>
                     }
                     )}
                  </Breadcrumb>
               }
            </div>
         }
         {
         // enableBreadCrumb &&
         //    <Breadcrumb className="mb-0 tour-step-7" tag="nav">
         //       {subPath.map((sub, index) => {
         //          return <BreadcrumbItem active={subPath.length === index + 1}
         //             tag={subPath.length === index + 1 ? "span" : Link} key={index}
         //            >{getDisplayString(sub)}</BreadcrumbItem>
         //       }
         //       )}
         //    </Breadcrumb>
         }
      </div>
   )
   
};

// default props value
PageTitleBar.defaultProps = {
   enableBreadCrumb: true
}

export default PageTitleBar;
