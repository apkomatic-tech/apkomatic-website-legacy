import React from "react"
import {
  HomePage,
  Hero,
  HeroColumns,
  HeroCallout,
  Testimonials
} from "../components"
import "../css/page/home.scss"

export default () => (
  <HomePage>
    <Hero />
    <HeroColumns />
    <Testimonials />
    <HeroCallout />
  </HomePage>
)
