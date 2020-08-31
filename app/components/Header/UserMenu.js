/* eslint-disable react/no-unused-state */
/* eslint-disable no-shadow */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/RemoveCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Ionicon from 'react-ionicons';
import dummy from 'dan-api/dummy/dummyContents';
import messageStyles from 'dan-styles/Messages.scss';
import avatarApi from 'dan-api/images/avatars';
import link from 'dan-api/ui/link';
import styles from './header-jss';
import fire from '../../Firebase/firebase';
class UserMenu extends React.Component {
  state = {
    anchorEl: null,
    openMenu: null,
    num: ''
  };


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

  handleClose = () => {
    this.setState({ anchorEl: null, openMenu: null });
  };

  handleclose = () => {
    this.setState({ anchorEl: null, openMenu: null, num: '' });
  }

  logout() {
    fire.auth().signOut();
  }

  handleMenu = menu => (event) => {
    const { openMenu } = this.state;
    this.setState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget
    });
  };

  render() {
    const { classes, dark } = this.props;
    const { anchorEl, openMenu } = this.state;
    return (
      <div>
        <IconButton
          aria-haspopup="true"
          onClick={this.handleMenu('notification')}
          color="inherit"
          className={classNames(classes.notifIcon, dark ? classes.dark : classes.light)}
        />
        <Button onClick={this.handleMenu('user-setting')}>
          <div>
            <Avatar
              alt={dummy.user.name}
              src={this.state.url}
            />
          </div>
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openMenu === 'user-setting'}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={Link} to="/app/profile">My Profile</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/app/editprofile">Edit Profile</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/app/editphoto">Change Photo</MenuItem>
          <Divider />
          <MenuItem onClick={this.logout} type="submit">
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Log Out
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};

UserMenu.defaultProps = {
  dark: false
};

export default withStyles(styles)(UserMenu);
