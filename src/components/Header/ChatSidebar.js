import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// data
import users from 'Assets/data/chat-app/users';

// helpers
import { textTruncate } from 'Helpers/helpers';

const ChatSidebar = () => (
   <div className="chat-sidebar rct-customizer">
    <AppBar position="static" color="primary">
         <Toolbar>
            <Typography variant="h5" color="inherit">
               Comments 
            </Typography>
         </Toolbar>
      </AppBar>
    <div className="recorder-slide">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0">
         
            <div className="notes-list">
              <ul>
                <li>
                	<div className="job-log-l"><img src={require('Assets/avatars/profile.jpg')} />

<p>2/4/2019 11:40:32 PM</p></div>
                    <div className="job-log-r"><p><strong>Ben Douglas</strong>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do</p></div>
                 </li>
                <li>
                	<div className="job-log-l"><img src={require('Assets/avatars/profile.jpg')} />

<p>2/4/2019 11:40:32 PM</p></div>
                    <div className="job-log-r"><p><strong>Jennifer Bland</strong>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do...</p></div>
                </li>
                <li>
                	<div className="job-log-l"><img src={require('Assets/avatars/profile.jpg')} />

<p>2/4/2019 11:40:32 PM</p></div>
                    <div className="job-log-r"><p><strong>Jennifer Bland</strong>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do</p></div>
                </li>
              </ul>
            </div>                    
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0">
            <div className="grey-box order-bg">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-t-0 padding-0">
                <h5>Add Comment </h5>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-t-5 padding-0">
                <div className="form-group margin-0 no-margin">
                  <div className="form-line">
                    <textarea type="text" className="form-control padding-0 height-40 notes-text" placeholder=""></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0 m-t-10 text-right">
              <button className="btn button-base btn-primary-bg mr-10 mb-10 text-white btn-icon mr-10 mb-10 text-white btn-icon" tabindex="0" type="button"><span className="MuiButton-label">Send <i className="zmdi zmdi-mail-send"></i></span><span className="MuiTouchRipple-root"></span></button>
              </div>
            </div>
          </div>
        </div>
      {/* <AppBar position="static" color="primary">
         <Toolbar>
            <Typography variant="h5" color="inherit">
               Chat 1
            </Typography>
         </Toolbar>
      </AppBar> */}
      {/* <List>
         {users.map((user, key) => (
            <ListItem key={key} button className="chat-list-item">
               <Avatar className="mr-2" src={require('Assets/avatars/profile.jpg')} />
               <ListItemText
                  primary={user.first_name + ' ' + user.last_name}
                  secondary={textTruncate(user.last_chat, 16)}
               />
            </ListItem>
         ))}
      </List> */}
   </div>
);

export default ChatSidebar;
