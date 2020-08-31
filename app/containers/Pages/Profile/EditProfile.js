/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
import validator from 'validator';
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


class EditProfile extends Component {
  constructor() {
    super();
    this.ref = fire.firestore().collection('Drivers');
    this.state = {
      Driver: [],
      url: '',
      l_n: '',
      e_l: true,
      e_v: true,
      e_v1: true,
      add_valid: true,
      emailValid: true,
      valid: true,
      phonevalid: true,
      submitDisabled: false
    };
  }

  componentDidMount() {
    const Driver = [];
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
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
            fire.storage().ref('Drivers').child(l_n + '.jpg').getDownloadURL()
              .then(url => {
                if (url) {
                  this.setState({ url });
                }
              });
          });
      }
    });
  }

  onAddressChange(e) {
    const add_valid = e.target.value.length > 0;
    const submitvalid = add_valid && this.state.emailValid && this.state.valid && this.state.phonevalid;
    this.setState({ address: e.target.value, add_valid, submitDisabled: !submitvalid });
  }

  onNameChange(e) {
    const valid = e.target.value.length > 0;
    const submitvalid = this.state.add_valid && this.state.emailValid && valid && this.state.phonevalid;
    this.setState({ name: e.target.value, valid, submitDisabled: !submitvalid });
  }

  handleEmailChange = ({ target }) => {
    // eslint-disable-next-line camelcase
    const e_l = !(target.value.length === 0);
    const e_v = (target.value.includes('@'));
    const e_v1 = (target.value.includes('.com'));
    const emailValid = e_l && e_v && e_v1;
    const submitvalid = this.state.add_valid && emailValid && this.state.valid && this.state.phonevalid;
    this.setState({
      emailaddress: target.value,
      emailValid,
      e_l,
      e_v,
      e_v1,
      submitDisabled: !submitvalid
    });
  };

  onphonenumber = (e) => {
    const phonevalid = validator.isMobilePhone(e.target.value) && e.target.value.length === 10;
    const phonenumber = e.target.value;
    const submitvalid = this.state.add_valid && this.state.emailValid && this.state.valid && phonevalid;
    this.setState({ phonevalid, phonenumber, submitDisabled: !submitvalid });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      emailaddress, name, phonenumber, address
    } = this.state;
    const ref = fire.firestore().collection('Drivers').doc(this.state.user);
    if ((!(name === null) || !(name === '')) && !(name === undefined)) {
      console.log('name');
      ref.update({ name });
    }
    if ((!(emailaddress === null) || !(emailaddress === '')) && !(emailaddress === undefined)) {
      ref.update({ emailaddress });
    }
    if ((!(phonenumber === null) || !(phonenumber === '')) && !(phonenumber === undefined)) {
      ref.update({ phonenumber });
    }
    if ((!(address === null) || !(address === '')) && !(address === undefined)) {
      ref.update({ address });
    }
  }

  onphoto() {
    window.location.href = '/app/editphoto';
  }

  oncancel() {
    window.location.href = '/app/profile';
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
                      <Grid item>
                        <IconButton color="primary" type="submit" onClick={this.onphoto} aria-label="upload picture" component="span">
                          <PhotoCamera />
                        </IconButton>
                      </Grid>
                    </div>
                  </Paper>
                </Grid>
                <Grid>
                  <div>
                    <p>Name</p>
                    <Input
                      name="name"
                      id="name"
                      placeholder="Your name"
                      label="name"
                      defaultValue={e.name}
                      onChange={this.onNameChange.bind(this)}
                      required

                      className={classes.field}
                    />
                    <div>{!this.state.valid
    && <span style={{ color: 'red', fontSize: '10px' }}>This Field cannot be empty</span>
                    }
                    </div>
                  </div>
                </Grid>
                <div>
                  <label>Email</label>
                  <Input
                    name="email"
                    placeholder="Email Field"
                    label="Email"
                    required
                    defaultValue={e.emailaddress}
                    onChange={this.handleEmailChange.bind(this)}
                    className={classes.field}
                  />
                  <div>{!this.state.emailValid
    && <span style={{ color: 'red', fontSize: '10px' }}>Invalid Email</span>
                  }
                  </div>
                </div>
                <div>
                  <p>PhoneNumber</p>
                  <Input
                    name="phonenumber"
                    id="phonenumber"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    placeholder="Phone Number"
                    defaultValue={e.phonenumber}
                    onChange={this.onphonenumber.bind(this)}
                    required
                    className={classes.field}
                  />
                  <div>{!this.state.phonevalid
    && <span style={{ color: 'red', fontSize: '10px' }}>Invalid PhoneNumber</span>
                  }
                  </div>
                </div>


                <div>
                  <p>Address</p>
                  <Input
                    name="address"
                    id="address"
                    placeholder="Address"
                    defaultValue={e.address}
                    onChange={this.onAddressChange.bind(this)}
                    required
                    className={classes.field}
                  />
                  <div>{!this.state.add_valid
    && <span style={{ color: 'red', fontSize: '10px' }}>This Field cannot be empty</span>
                  }
                  </div>
                </div>

                <div>
                  <Button disabled={this.state.submitDisabled} onClick={this.onSubmit} variant="contained" color="secondary" type="submit">


                    Update
                  </Button>
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={this.oncancel}
                  >
                    Cancel
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


export default withStyles(styles)(EditProfile);
