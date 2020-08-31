/* eslint-disable react/no-access-state-in-setstate */
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
import { Input } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { initAction, clearAction } from '../../../actions/ReduxFormActions';
import fire from '../../../Firebase/firebase';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

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
});

const initData = {
  text: 'Sample Text',
  email: 'sample@mail.com',
  textarea: 'This is default text'
};

class ReduxFormDemo extends Component {
  constructor() {
    super();
    this.ref = fire.firestore().collection('Complaint');
    this.state = {
      title: '',
      description: '',
      date: '',
      user: '',
      submitDisabled: true,
      DescriptionValid: false,
      TitleValid: false
    };
  }

  handleDescriptionChange = ({ target }) => {
    const DescriptionValid = target.value.length > 5; // basic text validation
    const submitValid = this.state.TitleValid && DescriptionValid;
    this.setState({
      description: target.value,
      DescriptionValid,
      submitDisabled: !submitValid
    });
  };

  handleTitleChange = ({ target }) => {
    const TitleValid = target.value.length > 7; // basic text validation
    const submitValid = this.state.DescriptionValid && TitleValid;
    this.setState({
      title: target.value,
      TitleValid,
      submitDisabled: !submitValid
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      title, description
    } = this.state;

    fire.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        const user = fire.firestore().doc('Drivers/' + authUser.uid);
        const timestamp = new Date();
        const status = 0;
        this.ref.add({
          title, description, user, status, timestamp
        }).then((docRef) => {
          this.setState({
            title: '',
            description: '',
            timestamp: '',
            user: '',
            status: ''
          });
          window.alert("Your Complaint has been Submitted successfully. We will get back to you soon");
        })
          .catch((error) => {
            window.alert("Error adding document: ", error);
          });
      }
    });
  }


  render() {
    const trueBool = true;
    const {
      policeman, policestation, email, nic, complaint, date
    } = this.state;
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
      init,
      clear
    } = this.props;
    return (
      <div>
        <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                Complaint Form
              </Typography>
              <div className={classes.buttonInit}>
                <Button color="secondary" type="button">
                  Complaint Details
                </Button>
                <Button onClick={this.onReset} type="submit">
                  Reset
                </Button>
              </div>
              <form data-testid="form" onSubmit={this.onSubmit}>
                <div>
                  <Input
                    name="title"
                    id="title"
                    placeholder="Voilation Type"
                    label="title"
                    required
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    className={classes.field}
                  />
                </div>

                <div className={classes.field}>
                  <textarea
                    name="description"
                    id="description"
                    className={classes.field}
                    placeholder="Complaint"
                    label="Complaint Details"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    rows={4}
                  />
                </div>
                <div>
                  <Button data-testid="complaint" variant="contained" color="secondary" type="submit" disabled={this.state.submitDisabled}>
                    Submit
                  </Button>
                  <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};


export default withStyles(styles)(ReduxFormDemo);
