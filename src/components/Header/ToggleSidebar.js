import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

// data
import users from 'Assets/data/chat-app/users';

// helpers
import { textTruncate } from 'Helpers/helpers';
const UNSAFE_componentWillMount=()=> {
  this.updateDimensions();
}
const updateDimensions = () => {
  this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
}
const ToggleSidebar = () => (
   <div className="chat-sidebar rct-customizer rct-customizer-menu">
      <AppBar position="static" color="primary">
         <Toolbar>
         <Tooltip title="App Launcher" placement="bottom" className="mr-50" onClick={() => this.setState({ customizer: false })}>
              <IconButton color="inherit" mini="true" aria-label="Menu" className="app-icon">
              {/* <i className="zmdi zmdi-apps"></i>	 */}
              <img src={require('Assets/img/app-icon-blk.png')} alt="App Launcher" />
              </IconButton>
          </Tooltip> 
        <a href="javascript:void(0);" className="back-link"> <i className="zmdi zmdi-long-arrow-left"></i><span>Back</span></a>
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
            <li>
              <a href="javascript:void(0);" onClick={() => this.setState({ customizer: false })}><img src={require('Assets/img/design-icon-cl.png')} alt="Design and Development" className="img-fluid" /> <span class="menu"><span>Design & Development</span></span></a>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={() => this.setState({ customizer: false })}><img src={require('Assets/img/pre-production-icon-cl.png')} alt="Pre-Production" className="img-fluid" /> <span class="menu"><span>Pre-Production</span></span></a>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={() => this.setState({ customizer: false })}><img src={require('Assets/img/planning-icon-cl.png')} alt="Planning" className="img-fluid" /> <span class="menu"><span>Planning</span></span></a>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={() => this.setState({ customizer: false })}><img src={require('Assets/img/sourcing-icon-cl.png')} alt="Sourcing" className="img-fluid" /> <span class="menu"><span>Sourcing</span></span></a>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={() => this.setState({ customizer: false })}><img src={require('Assets/img/admin-icon-cl.png')} alt="Admin" className="img-fluid" /> <span class="menu"><span>Admin</span></span></a>
            </li>
            <li>
              <a href="javascript:void(0);"><img src={require('Assets/img/bootstrap-icon-cl.png')} alt="Bootstrap" className="img-fluid" /> <span class="menu"><span>Bootstrap</span></span></a>
            </li>
          </ul>
          {/* <a href="javascript:void(0);" className="app-link"><span>All Apps</span><i className="zmdi zmdi-long-arrow-right"></i> </a> */}
         </div>

         <div className="menu-btm">
            <h2>Where do you want to go?</h2>
        </div>
         
     </div>    
     
   </div>
);

export default ToggleSidebar;
