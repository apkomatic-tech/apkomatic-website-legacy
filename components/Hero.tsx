import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const animationProps = {
  initial: { y: -25, opacity: 0.75 },
  transition: { duration: 0.8 },
  animate: { y: 0, opacity: 1 }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div>
          <motion.p {...animationProps} className="hero__subheading">
            Apkomatic
          </motion.p>
          <motion.h1 {...animationProps} className="hero__heading">
            We build <span className="keyword">affordable</span>{' '}
            <span className="keyword">fast</span> and{' '}
            <span className="keyword">smart</span> websites.
          </motion.h1>
          <div>
            <Link href="/contact">
              <a className="hero__cta-btn btn btn-primary btn-lg">Contact Us</a>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="hero__image"
            src="/static/images/home/hero-splash.svg"
            alt="Apkomatic Hero Splash"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
