import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from './Avatar';

const styles = theme => ({
  itemText: {
    marginLeft: theme.spacing.unit * 2,
  },
});

const ChatListItem = ({ classes, title }) => (
      <ListItem button>
        <Avatar colorFrom={title}>{title}</Avatar>
        <ListItemText primary={title} className={classes.itemText} />
      </ListItem>
);

export default withStyles(styles)(ChatListItem);
