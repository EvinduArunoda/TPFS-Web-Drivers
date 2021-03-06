/* eslint-disable import/named */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  Parent,
  BlankPage,
  Form,
  Table,
  Error,
  NotFound,
  PaymentHistory,
  ComplaintHistory,
  FineDocumentation,
  Profile,
  EditProfile,
  Photo
} from '../pageListAsync';


class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          <Route exact path="/app" component={BlankPage} />
          <Route path="/app/form" component={Form} />
          <Route path="/app/profile" component={Profile} />
          <Route path="/app/editprofile" component={EditProfile} />
          <Route path="/app/editphoto" component={Photo} />
          <Route path="/app/table" component={Table} />
          <Route path="/app/complaint" component={ComplaintHistory} />
          <Route path="/app/paymenthistory" component={PaymentHistory} />
          <Route path="/app/finedocumentation" component={FineDocumentation} />
          <Route path="/app/page-list" component={Parent} />
          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
