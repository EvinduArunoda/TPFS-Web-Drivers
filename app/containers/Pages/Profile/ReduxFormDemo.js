/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable no-const-assign */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable react/sort-comp */
/* eslint-disable consistent-return */
/* eslint-disable quotes */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line no-unused-vars
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
// eslint-disable-next-line no-unused-vars
import FormLabel from '@material-ui/core/FormLabel';
// eslint-disable-next-line no-unused-vars
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Input } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { Label } from '@material-ui/icons';
import { initAction, clearAction } from '../../../actions/ReduxFormActions';
import fire from '../../../Firebase/firebase';


// validation functions

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
});


class ReduxFormDemo extends Component {
  constructor() {
    super();
    this.ref = fire.firestore().collection('Drivers');
    this.state = {
      Driver: [],
      url: '',
      l_n: '',
      valid: true
    };
  }

  onChange = (e) => {
    const { state } = this;
    const valid = e.target.value.length > 0;
    state[e.target.name] = e.target.value;
    console.log(e.target.value);
    this.setState(state, valid);
  }

  componentDidMount() {
    const Driver = [];
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = "/login";
      } else {
        const user = authUser.uid;
        fire.firestore().collection('Drivers').doc(authUser.uid).get()
          .then(doc => {
            console.log(doc.data().Class.inWord);
            const data = doc.data();
            const n = doc.data().name;
            const l_n = doc.data().LicenseNumber;
            Driver.push(data);
            this.setState({ Driver });
            this.setState({ user, n });
            fire.storage().ref("Drivers").child(l_n + '.jpg').getDownloadURL()
              .then(url => {
                if (url) {
                  this.setState({ url });
                }
              });
          });
      }
    });
  }

  onsubmit() {
    window.location.href = '/app/editprofile';
  }

  render() {
    const trueBool = true;
    const { Driver } = this.state;

    const {
      classes,

      pristine,
      reset,
      submitting,
    } = this.props;

    return (

      <div>


        <Grid container spacing={2} direction="row" justify="center">
          {this.state.Driver.map(e => (


            <Grid item xs={8} md={6}>
              <Paper className={classes.root}>
                <Grid item md sm xs>
                  <Paper className={classes.paper}>
                    <div>
                      <img
                        src={this.state.url || 'https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png'}
                        height="150"
                        weight="140"
                        border-radius="50%"
                        alt="Avatar"
                      />
                    </div>
                  </Paper>
                </Grid>
                <label> Name</label>
                <Grid item md sm xs>
                  <Paper className={classes.paper}>
                    {e.name}
                  </Paper>
                </Grid>

                <label> LicenceNumber</label>
                <Grid item md sm xs>
                  <Paper className={classes.paper}>
                    {e.LicenseNumber}
                  </Paper>
                </Grid>
                <label> NIC</label>
                <Grid item md sm xs>
                  <Paper className={classes.paper}>
                    {e.NIC}
                  </Paper>
                </Grid>
                <label> Licence Class</label>
                <Grid item md sm xs>
                  <Paper className={classes.paper}>
                    {e.Class.inWord}
                  </Paper>
                </Grid>
                <div>
                  <label>Email</label>
                  <Grid item md sm xs>
                    <Paper className={classes.paper}>
                      {e.emailaddress}
                    </Paper>
                  </Grid>
                </div>
                <div>
                  <label>Phone Number</label>
                  <Grid item md sm xs>
                    <Paper className={classes.paper}>
                      {e.phonenumber}
                    </Paper>
                  </Grid>
                </div>

                <div>
                  <label> Address</label>
                  <Grid item md sm xs>
                    <Paper className={classes.paper}>
                      {e.address}
                    </Paper>
                  </Grid>
                </div>
                <label> PhysicalDisabilities</label>
                <Grid item md sm xs>
                  <Paper className={classes.paper}>
                    {e.physicaldisabilities.map(e => (
                      <p>{e.inWord}</p>))}
                  </Paper>
                </Grid>
                <div>
                  <Button variant="contained" onClick={this.onsubmit} color="secondary" type="submit" disabled={submitting}>

                    Edit
                  </Button>
                </div>

              </Paper>
            </Grid>
          ))}
        </Grid>

      </div>
    );
  }
}


export default withStyles(styles)(ReduxFormDemo);
