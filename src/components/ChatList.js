import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import { Restore, Explore, Add } from '@material-ui/icons';

import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatsList: {
    height: `calc(100% - 56px)`,
    overflowY: 'scroll',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
});

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatsList}>
    {chats.map((chat, index) => (
      <ChatListItem key={index} {...chat}/>
    ))}
  </List>
  // <Button 
  // variant="fab" 
  // color="primary" 
  // className={classes.newChatButton}>
  //   <Add />
  // </Button>
);

export default withStyles(styles)(ChatList);
