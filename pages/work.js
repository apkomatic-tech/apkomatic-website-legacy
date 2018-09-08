import React from 'react';
import { PROJECTS } from '../data';
import { DISPLAY_WORK } from '../config/global';
import { Header, Footer, Wrapper, Splash, PortfolioDisplay } from '../components';

export default () => (
  <div id="work">
    <Header path="/work" />
    <Splash title="Work" text="Take a look at what we have done over time." />

    <Wrapper>
      {DISPLAY_WORK && (
        <div className="row d-fle`x align-items-stretch mt-3 pt-3">
          <PortfolioDisplay items={PROJECTS} />
        </div>
      )}
      {!DISPLAY_WORK && (
        <div className="lead" style={{ textAlign: 'center' }}>
          <i className="fa fa-exclamation-triangle text-danger" /> This page is under construction.
        </div>
      )}
    </Wrapper>
    <Footer />
  </div>
);
