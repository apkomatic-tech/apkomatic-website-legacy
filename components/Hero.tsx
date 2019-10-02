import React from "react"
import Link from "next/link"

export default () => (
  <>
    <div className="hero mb-0">
      <div className="container">
        <h1
          className="hero__heading animated fadeInUp"
          style={{
            animationDelay: "240ms"
          }}
        >
          Take your website <br /> to the next level.
        </h1>
        <h2
          className="hero__subheading animated fadeInUp"
          style={{
            animationDelay: "500ms"
          }}
        >
          Apkomatic is dedicated to deliver high quality website solutions.
        </h2>
        <Link href="/contact">
          <a
            className="hero__cta btn btn-lg btn-primary animated fadeInUp"
            style={{
              fontSize: "2rem",
              animationDelay: "1000ms"
            }}
          >
            Let's Start Building
          </a>
        </Link>
      </div>
    </div>
  </>
)
