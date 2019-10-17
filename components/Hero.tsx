import React from "react"
import Link from "next/link"

export default () => (
  <>
    <div className="hero mb-0">
      <div className="hero__inner">
        <div className="hero__intro">
          <h1 className="hero__heading animated fadeInUp">
            Take your website to next level.
          </h1>
          <p
            className="hero__subheading animated fadeInUp"
            style={{
              animationDelay: "500ms"
            }}
          >
            Apkomatic is dedicated to deliver high quality website solutions.
          </p>
          <Link href="/contact">
            <a
              className="hero__cta btn btn-lg btn-secondary animated fadeInUp"
              style={{
                animationDelay: "1400ms"
              }}
            >
              Let's Start Building
            </a>
          </Link>
        </div>
        <div className="hero__image">
          <img
            src="/static/hero.svg"
            alt=""
            className="img-fluid animated fadeInUp"
            style={{
              animationDuration: "400ms",
              animationDelay: "1000ms"
            }}
          />
        </div>
      </div>
    </div>
  </>
)
