import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const ANIMATION_SPEED = 0.3
const Y_OFFSET = -45

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__inner">
        <motion.img
          initial={{
            y: -25,
            opacity: 0.25
          }}
          transition={{
            duration: 0.77
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          className="hero__image"
          src="/static/images/home/hero-image.svg"
          alt="Apkomatic Hero"
        />
        <h1 className="hero__heading">Let's Build You a Website.</h1>
        <p className="hero__subheading">
          We are Apkomatic - a company specializing in building high quality web
          solutions.
        </p>
        <div>
          <Link href="/contact">
            <a className="hero__cta-btn btn btn-primary btn-lg">Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
