/*====== Max Height Menu =====*/
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
const options = [
  'Single Window Request',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default class ActionMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    console.log(this.state)
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton aria-label="More" aria-owns={anchorEl ? 'long-menu' : null} aria-haspopup="true" onClick={this.handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu id="long-menu" anchorEl={this.state.anchorEl} open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}>
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Single Window Request'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}
