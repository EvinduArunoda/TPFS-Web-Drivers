/* eslint-disable react/sort-comp */
/* eslint-disable no-template-curly-in-string */
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
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Input } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { green } from '@material-ui/core/colors';
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
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


class EditPhoto extends Component {
  constructor() {
    super();
    this.ref = fire.firestore().collection('Drivers');
    this.state = {
      Driver: [],
      url: '',
      selectedFile: null,
      checkedB: false,
    };
  }

  componentDidMount() {
    const Driver = [];
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
      } else {
        const user = authUser.uid;
        fire.firestore().collection('Drivers').doc(user).get()
          .then(doc => {
            const l_n = doc.data().LicenseNumber;
            fire.storage().ref('Drivers').child(l_n + '.jpg').getDownloadURL()
              .then(url => {
                if (url) {
                  console.log(url);
                  this.setState({ url });
                }
              })
              .catch(error => {

              });
            this.setState({ l_n });
          });
      }
    });
  }

  fileSelecterHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
    console.log(event.target.files[0]);
  }

  fileUploadHandler = () => {
    const imagename = this.state.selectedFile;
    const name = this.state.l_n + '.jpg';
    console.log(imagename);
    if (this.state.checkedB) {
      fire.storage().ref('Drivers/').child(name).delete();
    }
    const uploadTask = fire.storage().ref('Drivers/').child(name).put(imagename);
    uploadTask.on(

      'state_changed',
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        fire.storage()
          .ref('Drivers')
          .child(name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
          });
      }
    );
  }

  oncancel() {
    window.location.href = '/app/editprofile';
  }

   handleChange = (event) => {
     console.log(event.target.checked);
     this.setState({ checkedB: event.target.checked });
   };

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
               <Grid item md sm xs>
                 <Paper className={classes.paper}>
                   <div>
                     <p>Upload New Image</p>
                     <Input
                       type="file"
                       inputProps={{ accept: 'image/*' }}
                       onChange={this.fileSelecterHandler}
                     />
                   </div>
                 </Paper>
               </Grid>

               <div>
                 <Button onClick={this.fileUploadHandler} variant="contained" color="secondary" type="submit" disabled={submitting}>


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
         </Grid>

       </div>
     );
   }
}


export default withStyles(styles)(EditPhoto);
