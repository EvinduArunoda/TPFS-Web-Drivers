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
import { Face, Fingerprint, DesktopWindows } from '@material-ui/icons';
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
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.resetpassword = this.resetpassword.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.state = {
      email: '',
      EmailFormat: true,
      emailValid: true,
      submitDisabled: true
    };
  }


  handleEmailChange = ({ target }) => {
    const e_l = !(target.value.length === 0);
    const e_v = (target.value.includes('@'));
    const e_v1 = (target.value.includes('.com'));
    const emailValid = e_l && e_v && e_v1;
    const submitValid = emailValid;
    this.setState({
      email: target.value,
      emailValid,
      submitDisabled: !submitValid
    });
  };

  resetpassword() {
    fire.auth().sendPasswordResetEmail(this.state.email).then(() => {
      console.log('email sent!');
      window.location.href = '/sendlink';
    }).catch((error) => {
      // An error happened.
    });
  }


  render() {
    const email = this.state;
    const { showPassword } = this.state;
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <Typography variant="h4" className={classes.title} gutterBottom>
        TPFS-Driver Reset Paasword


        </Typography>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md sm xs>
              <label>Email address</label>
              <Input
                id="email"
                label="email"
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

            <Grid item md sm xs>
              <p style={{ color: 'black' }}><strong>Useremail:</strong></p>
              <p style={{ color: 'grey' }}>A reset email link will be send to your email address. Use that link for reset your password</p>
              <p style={{ color: 'grey' }}>The email you given should be the user email you have been registered</p>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button data-testid="reset" disabled={this.state.submitDisabled} type="submit" variant="outlined" onClick={this.resetpassword} color="primary" style={{ textTransform: 'none' }}>Send Reset Link</Button>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(ResetPassword);
