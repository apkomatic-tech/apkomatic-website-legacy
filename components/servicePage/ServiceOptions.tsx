import React, { memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Checkmark } from '..'

import './ServiceOptions.scss'

const hoverState = {
  scale: [0.99, 1.01, 1],
  opacity: 0.9
}

const ServiceOptions = memo(() => (
  <div className="services">
    <motion.div
      className="service-block"
      initial={false}
      whileHover={hoverState}
      style={{
        borderTop: '8px solid #FFBF69'
      }}
    >
      <div className="service-block__heading">
        <h2>Essential</h2>
        <p className="text-muted">
          Perfect for clean, light, and interactive websites.
        </p>
      </div>
      <ul className="service-block__list">
        <li>
          <Checkmark /> Lightweight and Clean
        </li>
        <li>
          <Checkmark /> Basic SEO
        </li>
        <li>
          <Checkmark /> 1-4 pages
        </li>
        <li>&ndash;</li>
      </ul>
      <div className="service-block__callout">
        <Link href="/contact">
          <a
            className="btn btn-lg btn-tertiary btn-block"
            tabIndex={0}
            role="button"
          >
            Contact for price
          </a>
        </Link>
      </div>
    </motion.div>

    <motion.div
      className="service-block"
      whileHover={hoverState}
      style={{
        borderTop: '8px solid #DB324D'
      }}
    >
      <div className="service-block__heading">
        <h2>Balanced</h2>
        <p className="text-muted">
          Perfect for more complicated websites with more content and rich
          interactions.
        </p>
      </div>
      <ul className="service-block__list">
        <li>
          <Checkmark /> Clean Design
        </li>
        <li>
          <Checkmark /> Interactive
        </li>
        <li>
          <Checkmark /> Basic SEO
        </li>
        <li>
          <Checkmark /> 5-10 pages
        </li>
      </ul>
      <div className="service-block__callout">
        <Link href="/contact">
          <a
            className="btn btn-lg btn-tertiary btn-block"
            tabIndex={0}
            role="button"
          >
            Contact for price
          </a>
        </Link>
      </div>
    </motion.div>

    <motion.div
      className="service-block"
      whileHover={hoverState}
      style={{
        borderTop: '8px solid #6C9DD1'
      }}
    >
      <div className="service-block__heading">
        <h2>Advanced</h2>
        <p className="text-muted">
          Perfect for more complicated products, like e-commerce or web apps.
        </p>
      </div>
      <ul className="service-block__list">
        <li>
          <Checkmark /> Fast and Dynamic
        </li>
        <li>
          <Checkmark /> API/Database Integration
        </li>
        <li>
          <Checkmark /> Social Media API
        </li>
        <li>
          <Checkmark /> Unlimited Pages
        </li>
      </ul>
      <div className="service-block__callout">
        <Link href="/contact">
          <a
            className="btn btn-lg btn-tertiary btn-block"
            tabIndex={0}
            role="button"
          >
            Contact for price
          </a>
        </Link>
      </div>
    </motion.div>
  </div>
))

export default ServiceOptions
