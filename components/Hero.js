import React from 'react'
import Link from 'next/link'

export default () => (
  <>
    <div className="hero mb-0">
      <div
        className="container hero__wrapper animated fadeIn"
        style={{ animationDuration: '400ms' }}
      >
        <div className="hero__col1">
          <h1>
            Let us take your website
            <br /> to next level.
          </h1>
          <p>
            Apkomatic is dedicated to deliver high quality website solutions.
          </p>
          <Link href="/contact">
            <a className="hero__cta btn btn-lg btn-primary">Get a Quote</a>
          </Link>
        </div>
        <div className="hero__col2">
          <img
            className="img-fluid"
            src="/static/hero-graphic-alt4.svg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  </>
)
