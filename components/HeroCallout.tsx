import React from "react"
import Link from "next/link"
import { Wrapper } from "."

export default () => (
  <section className="hero-callout text-center">
    <Wrapper>
      <h1>Ready to get started?</h1>
      <p className="lead">
        Drop us a line. It only takes a few minutes. We will take care of the
        rest.
      </p>
      <p className="mt-3">
        <Link href="/contact">
          <a
            className="hero-callout__btn btn btn-muted btn btn-lg btn-block mx-auto btn--with-direction-right"
            style={{
              maxWidth: "300px"
            }}
          >
            Get a quote <i className="direction-icon fas fa-chevron-right" />
          </a>
        </Link>
      </p>
    </Wrapper>
  </section>
)
