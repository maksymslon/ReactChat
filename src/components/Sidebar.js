import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Divider, BottomNavigationAction } from '@material-ui/core';

import { Restore, Explore } from '@material-ui/icons';

import ChatList  from './ChatList';

const styles = theme => ({
  drawerPapper: {
    width: '320px'
  },
  drawerHeader: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
});

const Sidebar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes={{ paper: classes.drawerPapper }}
  >
    <div className={classes.drawerHeader}>
      <TextField
        fullWidth
        margin="normal"
        placeholder="Search chats..."
      />
    </div>
    <Divider />
    <ChatList chats={chats}/>
    <BottomNavigation showLabels>
      <BottomNavigationAction label="My Chat" icon={<Restore />} />
      <BottomNavigationAction label="Explore" icon={<Explore />} />
    </BottomNavigation>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
