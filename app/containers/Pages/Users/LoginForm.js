/* eslint-disable react/sort-comp */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable brace-style */
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
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import {
  Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Input
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { shallow } from 'enzyme';
import { Face, Fingerprint } from '@material-ui/icons';
import fire from '../../../Firebase/firebase';

const styles = theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(1)
  }
});


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.state = {
      email: '',
      password: '',
      e_l: true,
      e_v: true,
      e_v1: true,
      emailValid: true,
      passwordValid: false,
      submitDisabled: true
    };
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };


  handleEmailChange = ({ target }) => {
    // eslint-disable-next-line camelcase
    const e_l = !(target.value.length === 0);
    const e_v = (target.value.includes('@'));
    const e_v1 = (target.value.includes('.com'));
    const emailValid = e_l && e_v && e_v1;
    const submitValid = this.state.passwordValid && emailValid;
    this.setState({
      email: target.value,
      emailValid,
      e_l,
      e_v,
      e_v1,
      submitDisabled: !submitValid
    });
  };


  handlePasswordChange = ({ target }) => {
    const passwordValid = target.value.length > 7; // basic text validation
    const submitValid = this.state.emailValid && passwordValid;
    this.setState({
      password: target.value,
      passwordValid,
      submitDisabled: !submitValid
    });
  };

  login = e => {
    e.preventDefault();
    fire.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        window.location.href = '/app/profile';
      } else {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
          // check whether user in the drivers collection
          fire.firestore().collection('Drivers').doc(u.user.uid).get()
            .then(doc => {
              if (doc.exists) {
                // go to the web system
                window.location.href = '/app/profile';
              }
              // otherwise automatically signout from the system
              else {
                fire.auth().signOut();
                window.location.href = '/login';
                window.alert('You are not from this type user');
              }
            });
        }).catch((error) => {
          window.alert('Your Email or Password is incorrect Try Again');
          this.setState({
            email: '',
            password: ''
          });
        });
      } });
    this.props.login();
  }

  reset() {
    window.location.href = '/reset-password';
  }

  render() {
    const email = this.state;
    const { showPassword } = this.state;
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <Typography variant="h4" className={classes.title} gutterBottom>


            Sign In
        </Typography>
        <Typography variant="caption" className={classes.subtitle} gutterBottom align="center">


            TPFS-Driver LOGIN
        </Typography>
        <div className={classes.margin}>
          <form data-testid="form" method="post" onSubmit={this.login}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Face />
              </Grid>
              <Grid item md sm xs>
                <label>Email address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                  fullWidth
                  autoFocus
                  required

                />
                <div>{!this.state.emailValid
    && <span style={{ color: 'red' }}>Invalid Email</span>
                }
                </div>
              </Grid>

            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Fingerprint />
              </Grid>
              <Grid item md sm xs>
                <label>Password</label>
                <Input
                  id="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Button disableFocusRipple disableRipple type="submit" onClick={this.reset} style={{ textTransform: 'none' }} variant="text" color="primary">Forgot password ?</Button>
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
              <Button data-testid="login" disabled={this.state.submitDisabled} type="submit" variant="outlined" color="primary" style={{ textTransform: 'none' }}>Login</Button>
            </Grid>
          </form>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(LoginForm);
