import React from 'react'
import Link from 'next/link'
import { Splash, Wrapper } from '../components'

const splashProps = {
  title: 'About Us',
  splashStyle: 'splash--alt1'
}

export default () => (
  <>
    <Splash {...splashProps} />
    <Wrapper customClass="wrapper--content wrapper--narrow">
      <section>
        <h2>Who We Are</h2>
        <p>
          We are a web development company based in Los Angeles, California. Our
          company consists of professionals who are passionate about web
          technology and aim at delivering high quality work. We work with all
          type of clients - individuals, profit and non-profit
          businesses/organizations.
        </p>
        <h2>Our Mission</h2>
        <p>
          Build high quality websites for all individuals, businesses, or
          organizations.
        </p>
      </section>
    </Wrapper>
  </>
)
