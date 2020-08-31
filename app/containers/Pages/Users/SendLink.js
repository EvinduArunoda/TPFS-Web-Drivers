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
import { Face, Fingerprint } from '@material-ui/icons';
import fire from '../../../Firebase/firebase';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit
  }
});

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});
class SendLink extends React.Component {
  click() {
    window.location.href = '/login';
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <Typography variant="h4" className={classes.title} gutterBottom>
        TPFS-Driver Reset Paasword


        </Typography>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">

            <Grid item md sm xs>
              <p style={{ color: 'black' }}><strong>Useremail:</strong></p>
              <p style={{ color: 'grey' }}>If you supplied a correct username or email address then an email should have been sent to you.</p>
              <p style={{ color: 'grey' }}>It contains easy instructions to confirm and complete this password change. If you continue to have difficulty, please contact the site administrator.</p>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button type="submit" variant="outlined" onClick={this.click} color="primary" style={{ textTransform: 'none' }}>Continue</Button>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(SendLink);
