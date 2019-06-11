import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const styles = theme => ({
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
  tabBlock: {
    width: '50%'
  }
});

class WelcomePage extends React.Component {
  state = {
    activeTab: 0,
  }

  handleTabChage = (event, value) => {
    this.setState({ activeTab: value });
  }

  render() {

    const { classes } = this.props;
    const { activeTab } = this.state;

    return (
      <React.Fragment>
        <AppBar>
          <ToolBar>
            <Typography variant='title' color='inherit' style={{ flex: 1 }}>
              DogeCodes React Chat
            </Typography>
          </ToolBar>
        </AppBar>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs
                  value={activeTab}
                  onChange={this.handleTabChage}
                  fullWidth
                >
                  <Tab className={classes.tabBlock} label="Login" />
                  <Tab className={classes.tabBlock} label="SIng Up" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                {activeTab === 0 && <LoginForm />}
                {activeTab === 1 && <SignupForm />}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WelcomePage);
