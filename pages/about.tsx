import React from "react"
import Link from "next/link"
import { Splash, Wrapper } from "../components"

const splashProps = {
  title: "About Us",
  splashStyle: "splash--alt1"
}

export default () => (
  <>
    <Splash {...splashProps} />
    <Wrapper
      fluid
      style={{
        maxWidth: "70rem"
      }}
    >
      <h3>Who We Are</h3>
      <p>
        We are a web development company based in Los Angeles, California. Our
        company consists of professionals who are passionate about web
        technology and aim at delivering high quality work. We work with all
        type of clients - individuals, profit and non-profit
        businesses/organizations.
      </p>
      <h3>Our Mission</h3>
      <p>
        Build hight quality websites for all individuals, businesses, or
        organizations.
      </p>
      <h3>Ready to work with us?</h3>
      <p>
        <Link href="/contact">
          <a className="btn btn-primary">Get In Touch</a>
        </Link>
      </p>
    </Wrapper>
  </>
)
