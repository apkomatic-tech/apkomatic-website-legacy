import React, { memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { v4 as uuid4 } from 'uuid'
import { Checkmark } from '..'

import './ServiceOptions.scss'

const hoverState = {
  scale: [0.99, 1.01, 1],
  opacity: 0.9
}

const options = [
  {
    id: 'essential',
    title: 'Essential',
    copy: 'Perfect for clean, light, and interactive websites.',
    features: ['Lightweight and Clean', 'Basic SEO', '1-4 pages', null]
  },
  {
    id: 'balanced',
    title: 'Balanced',
    copy:
      'Perfect for more complicated websites with more content and rich interactions.',
    features: ['Clean Design', 'Interactive', 'Basic SEO', '5-10 pages']
  },
  {
    id: 'advanced',
    title: 'Advanced',
    copy: 'Perfect for more complicated products, like e-commerce or web apps.',
    features: [
      'Fast and Dynamic',
      'API/Database Integration',
      'Social Media API',
      'Unlimited Pages'
    ]
  }
]

const OPTIONS_MIN_DISPLAY = 4

const Option = ({ id, title, copy, features }) => {
  return (
    <motion.article
      className={`service-block service-block--${id}`}
      initial={false}
      whileHover={hoverState}
    >
      <header className="service-block__heading">
        <h2>{title}</h2>
        <p className="text-muted">{copy}</p>
      </header>
      <ul className="service-block__list">
        {features.map((feature: string | null) => {
          if (!feature) {
            return <li key={uuid4()}>&mdash;</li>
          }
          return (
            <li key={uuid4()}>
              <Checkmark /> {feature}
            </li>
          )
        })}
      </ul>
      <div className="service-block__callout">
        <Link href="/contact">
          <a
            className="btn btn-lg btn-primary btn-block"
            tabIndex={0}
            role="button"
          >
            Contact for price
          </a>
        </Link>
      </div>
    </motion.article>
  )
}

const ServiceOptions = memo(() => (
  <section className="services">
    {options.map((option: any) => (
      <Option key={option.id} {...option} />
    ))}

    {/* <motion.div
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
    </motion.div> */}
  </section>
))

export default ServiceOptions
