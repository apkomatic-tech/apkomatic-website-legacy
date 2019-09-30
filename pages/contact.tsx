/* eslint-disable jsx-a11y/label-has-for */
import React from "react"
import { Wrapper, ContactForm, Splash } from "../components"
import BackgroundLayout from "../components/BackgroundLayout"

export default () => (
  <React.Fragment>
    <BackgroundLayout background="/static/images/contact-page-bg.jpg">
      <h1>Contact Us</h1>
      <p className="lead">Let's get in touch about your exciting project!</p>
      <ContactForm />
    </BackgroundLayout>
  </React.Fragment>
)
