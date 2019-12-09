import React from "react"
import { Wrapper } from "."

const HeroColumns = () => (
  <section className="hero-columns">
    <Wrapper>
      <section className="featured">
        <section className="featured-row">
          <div className="centered">
            <h2>Design</h2>
            <p>
              We recognize that good design is very important as it visually
              communicates with your users and customers. We take it seriously.
              Whether you are a small business looking for a simple website to
              promote your services or mid-size organization looking to refresh
              your website look or add new features - we got you covered.
            </p>
          </div>
          <div className="featured__grid-item">
            <img
              className="img-fluid"
              src="/static/images/home/featured-design.svg"
              alt="design"
            />
          </div>
        </section>
        <section className="featured-row">
          <div className="right centered">
            <h2>Development</h2>
            <p>
              Good design is important, but so is technical implementation. Our
              expertise in front end and backend technologies and languages is
              the key to build responsive and optimized websites and apps.
            </p>
          </div>
          <div className="left">
            <img
              className="img-fluid"
              src="/static/images/home/featured-code.svg"
              alt="development"
            />
          </div>
        </section>
        <section className="featured-row">
          <div className="centered">
            <h2>Work Ethics</h2>
            <p>
              We truly care about our customers and that
              {`'`}s why our work is not done after we build your product. We
              will keep in touch with you if you need help maintaining your
              website or web application. We value your time and business.
            </p>
          </div>
          <div>
            <img
              className="img-fluid"
              src="/static/images/home/featured-relationship.svg"
              alt="work ethic"
            />
          </div>
        </section>
      </section>
    </Wrapper>
  </section>
)

export default HeroColumns
