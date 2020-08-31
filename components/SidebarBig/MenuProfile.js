/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/sort-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import dummy from 'dan-api/dummy/dummyContents';
import styles from './sidebarBig-jss';
import fire from '../../Firebase/firebase';
// eslint-disable-next-line react/require-render-return
class MenuProfile extends React.Component {
  state = {
    status: dummy.user.status,
    anchorEl: null,
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChangeStatus = status => {
    this.setState({ status });
    this.handleClose();
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
      } else {
        const user = authUser.uid;
        fire.firestore().collection('Drivers').doc(user).get()
          .then(doc => {
            const l_n = doc.data().LicenseNumber;
            const { name } = doc.data();
            this.setState({ name });
            fire.storage().ref('Drivers').child(l_n + '.jpg').getDownloadURL()
              .then(url => {
                this.setState({ url });
              });
          });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl, status } = this.state;
  }
}

MenuProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

MenuProfile.defaultProps = {
  anchorEl: null,
  isLogin: false,
};

export default withStyles(styles)(MenuProfile);
