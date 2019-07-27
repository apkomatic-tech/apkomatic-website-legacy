import React, { Fragment } from 'react';
import { Wrapper, Grid } from '../components';

import '../css/about.scss';

export default () => (
  <Fragment>
    <Wrapper>
      <Grid columns={2}>
        <div className="v-centered">
          <h1>About Apkomatic</h1>
          <p>
            We are a web development company based in Los Angeles, California. Our company consists of professionals who
            are passionate about web technology and aim at delivering high quality work. We work with all type of
            clients - individuals, profit and non-profit businesses/organizations. Our goal is to deliver quality work
            at affordable prices.
          </p>
        </div>
        <div>
          <img className="img-fluid" src="/static/images/about-splash.svg" alt="about graphic" />
        </div>
      </Grid>
    </Wrapper>
  </Fragment>
);
