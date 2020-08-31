/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
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

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Feedback } from '@material-ui/icons';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import EmptyData from '../../../components/Tables/EmptyData';
import styles from '../../../components/Tables/tableStyle-jss';
import brand from '../../../api/dummy/brand';

import fire from '../../../Firebase/firebase';


class ComplaintHistory extends Component {
  constructor() {
    super();
    this.state = {
      Complaint: [],
      Feedback: []
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
      } else {
        console.log(authUser.uid);
        const x = authUser.uid;
        const user = fire.firestore().doc('Drivers/' + authUser.uid);
        fire.firestore().collection('Complaint').where('user', '==', user).get()
          .then(s => {
            console.log(s);
            const Complaint = [];
            const Feedback = [];
            s.forEach(doc => {
              const id = doc.id;

              const data = doc.data();
              Complaint.push(data);
              const status = data.status;
              const time = data.timestamp;
              const user1 = fire.firestore().doc('Complaint/' + doc.id);
              fire.firestore().collection('FeedBacks').where('original', '==', user1).get()
                .then(sn => {
                  const list = [];
                  sn.forEach(d => {
                    list.push(d.data().feedback);
                    list.push(time);
                    Feedback.push(list);
                    console.log(Feedback);
                  });
                  this.setState({Feedback: Feedback});
                });
            });
            this.setState({Complaint});
            console.log(Complaint);
          });
      }
    });
  }


  render() {
    const { Complaint } = this.state;
    const title = brand.name + ' - Table';
    const description = brand.desc;
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
        <PapperBlock title="Complaint" whiteBg icon="ios-menu-outline" desc="">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="default" style={{color: 'Blue'}}><strong>Voilation</strong></TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Feedback</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {
                this.state.Complaint.map((ee, index) => (

                  <TableRow>
                    <TableCell padding="default">
                      <strong> {ee.title}</strong>
                    </TableCell>
                    <TableCell align="right" style={{color: 'grey'}}><strong>{ee.description}</strong></TableCell>
                    {ee.status === 0
                   && (
                     <TableCell align="right" style={{color: 'red'}}>
                       <strong>In Progress</strong>
                     </TableCell>
                   )

                    }
                    {ee.status === 1
                    && ((this.state.Feedback.map(ee1 => (
                      ee1[1] === ee.timestamp
                      && (
                        <TableCell align="right" style={{color: 'green'}}>

                          <strong> {ee1[0]}</strong>
                        </TableCell>
                      )
                    )))
                    )

                    }

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

export default ComplaintHistory;
