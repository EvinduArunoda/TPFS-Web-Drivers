/* eslint-disable linebreak-style */

/* eslint-disable no-useless-concat */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
/* eslint-disable no-const-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-redeclare */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Table from '@material-ui/core/Table';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { PayHereButton } from 'react-payhere-button';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import styles from '../../../components/Tables/tableStyle-jss';
import EmptyData from '../../../components/Tables/EmptyData';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import fire from '../../../Firebase/firebase';


class BasicTable extends Component {
  constructor() {
    super();
    this.state = {
      Ticket: []
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
      } else {
        const x = authUser.uid;
        const nic = '';
        fire.firestore().collection('Drivers').doc(x).get()
          .then((doc) => {
            const nic = doc.data().LicenseNumber;

            const query = fire.firestore().collection('Ticket').where('LicenseNumber', '==', nic);
            query.get().then(sn => {
              const Ticket = [];
              sn.forEach(doc => {
                const data = doc.data();
                console.log(doc.data().Area._a);
                Ticket.push(data);
                const DATE_OPTIONS = {
                  weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
                };
                const x = new Date();
                const date = (x).toLocaleDateString('en-US', DATE_OPTIONS);
                console.log(date);
              });

              this.setState({Ticket: Ticket});
            });
          });
      }
    });
  }


  onSucess(ee) {
    console.log(ee);
    fire.auth().onAuthStateChanged(authUser => {
      const driver = fire.firestore().doc('Drivers/' + authUser.uid);
      fire.firestore().collection('Ticket').where('LicenseNumber', '==', ee.LicenseNumber).where('Time', '==', ee.Time)
        .get()
        .then(sn => {
          sn.forEach(doc => {
            const id = doc.id;
            console.log(id);
            const ticket = fire.firestore().doc('Ticket/' + id);
            const amount = ee.FineAmount;
            const timeStamp = new Date();
            const status = 'online';
            const Status = 'paid';
            fire.firestore().collection('Payment').add({
              driver, ticket, amount, timeStamp, status
            }).then((docRef) => {
              this.setState({
                driver: '',
                ticket: '',
                amount: '',
                timeStamp: '',
                status: ''
              });
              window.alert('Payment has been done successfully');
            });
            fire.firestore().collection('Ticket').doc(id).update({
              Status
            })
              .then((docRef) => {
                this.setState({
                  Status: ''
                });
              });
          });
        });
      console.log(authUser.uid);
      // Congratulation, it came here means everything's fine!
      console.log('The payment was succeeded!');
    }); // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  }

  handleRemoveRow = () => {
    this.setState((prevState, props) => ({ Ticket: prevState.Ticket.slice(1) }));
  };

  clickMe(ee) {
    console.log(ee.LicenseNumber);
    fire.firestore().collection('Ticket').where('LicenseNumber', '==', ee.LicenseNumber).where('Time', '==', ee.Time)
      .get()
      .then(sn => {
        sn.forEach(doc => {
          const id = doc.id;
          console.log(id);
          fire.firestore().collection('Ticket').doc(id).delete();
        });
      });
  }


  render() {
    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log('The payment was cancelled!', data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onDismissed = () => console.log('onDismissed');
    const onError = () => console.log('onError');
    const client = {

      sandbox: 'AenerYjabnjEnZUfu4Fh05OeYpZv1cYFxYIXG5N17LQ6qdx5WWwpr_sXX2X4KWvScd6tm_6RnuKY8mSs',
      production: 'EHfUCReJo3Tig761zYbjUbEUu-izU1Et_OEYQI74H5IczzUvGsTvZ6qcXnA9Rvn2tBQhvjrfVm0F5AO-',
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    const env = 'sandbox'; // you can set here to 'production' for production
    const currency = 'USD'; // or you can set this value from your props or state
    const total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const title = 'Ticket';
    const description = 'Ticketing veiwing and pay';
    const { Ticket } = this.state;
    const DATE_OPTIONS = {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    };
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Ticket" whiteBg icon="ios-menu-outline" desc="">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="default">License Plate </TableCell>
                <TableCell align="right">Fine Amount</TableCell>
                <TableCell align="right">Vechile</TableCell>
                <TableCell align="right">Offenses</TableCell>
                <TableCell align="right">Status</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              {this.state.Ticket
                && this.state.Ticket.map((ee, index) => (
                  <TableRow>
                    <TableCell padding="default">
                      <strong>
                        {' '}
                        {ee.LicensePlate}
                        {' '}
                      </strong>
                    </TableCell>
                    <TableCell align="right">{ee.FineAmount}</TableCell>
                    <TableCell align="right">{ee.Vehicle}</TableCell>
                    <TableCell align="right" style={{ color: 'red' }}>
                      <strong>
                        {ee.Offences.map(e => (
                          <p>{e}</p>
                        ))}
                      </strong>
                    </TableCell>
                    <TableCell align="right" style={{ color: 'green' }}><strong>{ee.Status}</strong></TableCell>
                    <TableCell align="right">
                      {ee.Status === 'open'

                      && (
                        <PayHereButton
                          sandbox
                          merchant_id="1214619"
                          onCompleted={this.onSucess.bind(this, ee)}
                          onDismissed={onDismissed}
                          onError={onError}
                          order_id="ItemNo12345"
                          items="Pay your Fine"
                          amount={ee.FineAmount}
                          currency="LKR"
                          phone="0763083854"
                          options={{
                            return_url: 'http://sample.com/return',
                            cancel_url: 'http://sample.com/cancel',
                            notify_url: 'http://sample.com/notify',
                          }}
                        />
                      )

                      }
                      {ee.Status === 'reported'
                      && (
                        <IconButton type="submit" onClick={this.clickMe.bind(this, ee)} aria-label="delete">
                          <DeleteRounded />
                          {ee.status}
                        </IconButton>
                      )


                      }
                      {ee.Status === 'closed'
                      && (
                        <IconButton type="submit" onClick={this.clickMe.bind(this, ee)} aria-label="delete">
                          <DeleteRounded />
                        </IconButton>
                      )
                      }
                    </TableCell>

                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </PapperBlock>
        <PapperBlock title="" whiteBg icon="" desc="">
          <div>
            <EmptyData />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default BasicTable;
