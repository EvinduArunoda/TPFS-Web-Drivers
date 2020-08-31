/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Table from '@material-ui/core/Table';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import brand from '../../../api/dummy/brand';
import styles from '../../../components/Tables/tableStyle-jss';
import EmptyData from '../../../components/Tables/EmptyData';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import fire from '../../../Firebase/firebase';

class PaymentHistory extends Component {
  constructor() {
    super();
    this.state = {
      Payment: []
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
      } else {
        const user = fire.firestore().doc('Drivers/' + authUser.uid);
        fire.firestore().collection('Payment').where('driver', '==', user).get()
          .then(sn => {
            const Payment = [];
            sn.forEach(doc => {
              const data = doc.data();

              Payment.push(data);
              console.log(new Date().setDate(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)));
            });
            this.setState({ Payment });
          });
      }
    });
  }

  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
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
        <PapperBlock title="Payment" whiteBg icon="ios-menu-outline" desc="">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="default">Amount</TableCell>
                <TableCell align="right">Time</TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {this.state.Payment.map(ee => (
                <TableRow>
                  <TableCell padding="default" style={{ color: 'orange'}}><strong>{ee.amount.toFixed(2)}</strong></TableCell>
                  <TableCell align="right" style={{ color: 'green' }}><strong>{(ee.timeStamp.toDate()).toLocaleDateString('en-US', DATE_OPTIONS)}</strong></TableCell>
                </TableRow>
              )

              )}
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

export default PaymentHistory;
