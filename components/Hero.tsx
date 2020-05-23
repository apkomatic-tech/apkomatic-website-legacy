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
            We build <span className="keyword">affordable</span>{' '}
            <span className="keyword">fast</span> and{' '}
            <span className="keyword">smart</span> websites.
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/contact">
              <a className="hero__cta-btn btn btn-primary btn-lg">Contact Us</a>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            className="hero__image"
            src="/static/images/home/hero-splash.svg"
            alt="Apkomatic Hero Splash"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
