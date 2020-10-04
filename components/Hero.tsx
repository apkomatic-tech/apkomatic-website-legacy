import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const animationProps = {
  initial: { y: -25, opacity: 0 },
  transition: { duration: 0.8 },
  animate: { y: 0, opacity: 1 }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div>
          <motion.h1
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 0.25 }}
            className="hero__heading"
          >
            Let's build you a <span className="keyword">smart</span> and{' '}
            <span className="keyword">beautiful</span> website.
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/contact">
              <a className="hero__cta-btn btn btn-secondary btn-lg">
                Contact Us
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
