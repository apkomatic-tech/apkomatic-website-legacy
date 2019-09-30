/* eslint-disable react/display-name */
import React from "react"
import { Wrapper, ServiceOptions, Splash } from "../components"

export default class Services extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Splash
          title="Our Services"
          text="Part of our mission is to build affordable websites for all kind of
            businesses and organizations. We have different service plans
            tailored to your needs."
        />
        <Wrapper>
          <ServiceOptions />
        </Wrapper>
      </React.Fragment>
    )
  }
}
