/* eslint-disable react/display-name */
import React from 'react'
import { Wrapper, ServiceOptions } from '../components'

export default () => (
  <React.Fragment>
    <Wrapper style={{ marginBottom: '3rem' }}>
      <h1>Our Services</h1>
      <p>
        Part of our mission is to build affordable websites for all kind of
        businesses and organizations. We have different service plans tailored
        to your needs.
      </p>
      <ServiceOptions />
    </Wrapper>
  </React.Fragment>
)
