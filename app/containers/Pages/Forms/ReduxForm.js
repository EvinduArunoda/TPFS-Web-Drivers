import React from 'react';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import brand from '../../../api/dummy/brand';
import ReduxFormDemo from './ReduxFormDemo';
import fire from '../../../Firebase/firebase';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class ReduxForm extends React.Component {
// check the user logged in or not
  componentDidMount() {
    fire.auth().onAuthStateChanged(authUser => {
      if (!authUser) {
        window.location.href = '/login';
      }
    });
  }

  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const docSrc = 'containers/Forms/demos/';
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
        <PapperBlock title="Complaint" icon="ios-list-box-outline" desc="">
          <div>
            <ReduxFormDemo />
            <SourceReader componentName={docSrc + 'ReduxFormDemo.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(ReduxForm);
