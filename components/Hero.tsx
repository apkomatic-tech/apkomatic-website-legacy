import React from "react"
import Link from "next/link"

export default () => (
  <>
    <div className="hero mb-0">
      <div
        className="container animated fadeIn"
        style={{ animationDuration: "400ms" }}
      >
        <img
          className="img-fluid hero__image"
          src="/static/apkomatic-hero.svg"
          alt="hero"
        />
        <h1 className="hero__heading">
          Let's take your website <br /> to the next level.
        </h1>
        <p className="hero__paragraph">
          At Apkomatic we are dedicated to deliver high quality website
          solutions.
        </p>
        <Link href="/contact">
          <a
            className="hero__cta btn btn-lg btn-tertiary"
            style={{
              fontSize: "2rem"
            }}
          >
            Get a Quote
          </a>
        </Link>
      </div>
    </div>
  </>
)
