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
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import EmptyData from '../../../components/Tables/EmptyData';
import brand from '../../../api/dummy/brand';
import styles from '../../../components/Tables/tableStyle-jss';
import fire from '../../../Firebase/firebase';

class Documentation extends Component {
  constructor() {
    super();
    this.state = {
      Fine: [],
      n: ''
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
      } else {
        fire.firestore().collection('Fine')
          .get()
          .then(snapshot => {
            const Fine = [];
            snapshot.forEach(doc => {
              const data = doc.data();
              Fine.push(data);
            });
            this.setState({ Fine: Fine});
          });
      }
    });
  }

  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const { Fine } = this.state;
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
        <PapperBlock title="Fine Documentation" whiteBg icon="ios-menu-outline" desc="">


          <div>


            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="default">Fine Description </TableCell>
                  <TableCell align="right">Fine Amount</TableCell>
                  <TableCell align="right">VehicleType</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>

                {
                  this.state.Fine.map(ee => (
                    <TableRow>
                      <TableCell padding="default" style={{color: 'black'}}>
                        <strong>
                          {ee.description}
                        </strong>
                      </TableCell>
                      <TableCell align="right">
                        <strong>
                          {ee.amount}
                          {' '}
                        </strong>
                      </TableCell>
                      <TableCell align="right">{ee.type}</TableCell>
                    </TableRow>
                  ))
                }


              </TableBody>
            </Table>
          </div>

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

export default Documentation;
