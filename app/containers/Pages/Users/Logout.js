/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Input
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import fire from '../../../Firebase/firebase';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit
  }
});


class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    fire.auth().signOut().then(() => {
      window.location.href = '/login';
      // Sign-out successful.
    }).catch((error) => {
      window.alert('You are not signout properly');
      // An error happened.
    });
  }

  login(e) {
    e.preventDefault();
    window.location.href = './app/dashboard';
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <Typography variant="h4" className={classes.title} gutterBottom>


            Logout from the App
        </Typography>
        <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">


            TPFS-Driver
        </Typography>
        <div className={classes.margin}>
          <Grid container justify="center" style={{ marginTop: '40px' }}>
            <Button type="submit" onClick ={this.logout} variant="outlined" color="primary">
  LOGOUT
            </Button>
            <Button type="submit" onClick={this.login} variant="outlined" color="secondary">
  BACK
            </Button>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Logout);
