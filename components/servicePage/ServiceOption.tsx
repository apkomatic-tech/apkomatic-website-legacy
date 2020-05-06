import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { v4 as uuid4 } from 'uuid'

import Checkmark from './../shared/Checkmark'

const ServiceOption = ({ id, title, copy, features }) => {
  return (
    <motion.article
      className={`service-block service-block--${id}`}
      initial={false}
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

export default ServiceOption
