import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ChatMessageList from "./ChatMessageList";
import MessageInput from './MessageInput';

const styles = () => ({
  chatLayout: {
    paddingLeft: '320px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
});

const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} />
    <MessageInput />
  </main>
);

export default withStyles(styles)(Chat);
