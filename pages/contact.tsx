/* eslint-disable jsx-a11y/label-has-for */
import React from "react"
import { Wrapper, ContactForm, Splash } from "../components"

const splashProps = {
  title: "Contact",
  splashStyle: "splash--alt1",
  text: "Let's get in touch about your exciting project!"
}

export default () => (
  <React.Fragment>
    <Splash {...splashProps} />
    <Wrapper
      style={{ maxWidth: "50rem", paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <ContactForm />
    </Wrapper>
  </React.Fragment>
)
