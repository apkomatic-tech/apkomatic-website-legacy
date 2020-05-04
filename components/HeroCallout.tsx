import React from 'react'
import Link from 'next/link'
import { Wrapper } from '.'

export default () => (
  <section className="hero-callout text-center">
    <Wrapper>
      <div className="hero-callout__content">
        <h1>Ready to get started?</h1>
        <p className="lead">
          Drop us a line. It only takes a few minutes. We will take care of the
          rest.
        </p>
        <Link href="/contact">
          <a className="btn btn-tertiary btn-block btn-lg hero-callout__btn">
            Get a quote
          </a>
        </Link>
      </div>
    </Wrapper>
  </section>
)
