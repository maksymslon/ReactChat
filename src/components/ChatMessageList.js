import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ChatMessage from './ChatMessage';

const styles = theme => ({
  messagesWrapper: {
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px'
  },
});

class ChatMessageList extends React.Component {

  componentDidMount() {
    this.scrollDownHistory()
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) {
      console.log(messagesWrapper)
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {

    const { classes, messages } = this.props;

    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((messages, index) => (
          <ChatMessage key={index} {...messages} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
