/* eslint-disable react/jsx-indent */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-multi-comp */
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
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import {
  Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Input
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import { red } from '@material-ui/core/colors';
import fire from '../../../Firebase/firebase';

const styles = theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(1)
  }
});

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});
class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.changepassword = this.changepassword.bind(this);
    this.handlePasswordChange1 = this.handlePasswordChange1.bind(this);
    this.handlePasswordChange2 = this.handlePasswordChange2.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      Valid: true,
      passwordValid1: true,
      passwordValid2: true,
      submitDisabled: true
    };
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  changepassword() {
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
      } else {
        
        fire.auth().currentUser.updatePassword(this.state.password1);

        fire.auth().signOut();
        window.location.href = '/login';
      }
    });
  }


  handlePasswordChange1 = ({ target }) => {
    const passwordValid1 = target.value.length > 7 && target.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/); // basic text validation
    const submitValid = passwordValid1 && this.state.passwordValid2;
    this.setState({
      password1: target.value,
      passwordValid1,
      submitDisabled: !submitValid
    });
  };

  handlePasswordChange2 = ({ target }) => {
    const passwordValid2 = target.value === this.state.password1 && target.value.length === this.state.password1.length; // basic text validation
    const submitValid = passwordValid2 && this.state.passwordValid1;
    this.setState({
      password2: target.value,
      passwordValid2,
      submitDisabled: !submitValid
    });
  };


  render() {
    const {
      passwordOne, passwordTwo, error, showingAlert
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    const { classes } = this.props;
    return (

      <Paper className={classes.padding}>
        <Typography variant="h4" className={classes.title} gutterBottom>


            Change Password
        </Typography>


        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md sm xs>
              <label>New Password</label>
              <Input
                id="password1"
                label="Password"
                type="password"
                placeholder="Password1"
                onChange={this.handlePasswordChange1}
                value={this.state.password1}
                fullWidth
                required

              />

            </Grid>
          </Grid>
          <div>{!this.state.passwordValid1
    && <span style={{ color: 'red' }}>password is too short</span>
          }
          </div>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md sm xs>
              <p style={{ color: 'black' }}><strong>Password:</strong></p>
              <p style={{ color: 'grey' }}>Use at least 8 characters. Don’t use a password from another site or something too obvious like your pet’s name.</p>
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md sm xs>
              <label>Confirm Password</label>
              <Input
                id="password2"
                label="Password"
                type="password"
                placeholder="Password2"
                onChange={this.handlePasswordChange2}
                value={this.state.password2}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <div>{!this.state.passwordValid2
    && <span style={{ color: 'red' }}>password didnot match</span>
          }
          </div>
          <Grid container alignItems="center" justify="space-between">
            <Grid item />
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button data-testid="change" disabled={this.state.submitDisabled} type="submit" onClick={this.changepassword} variant="outlined" color="primary" style={{ textTransform: 'none' }}>Change Password</Button>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(ChangePassword);
