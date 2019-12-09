import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
const ANIMATION_SPEED = 0.3
const Y_OFFSET = -45

export default () => (
  <>
    <div className="hero mb-0">
      <div className="hero__inner">
        <div className="hero__intro">
          <motion.h1
            className="hero__heading"
            transition={{
              duration: ANIMATION_SPEED
            }}
            initial={{
              opacity: 0.01,
              y: Y_OFFSET
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
          >
            Take your website to next level.
          </motion.h1>
          <motion.p
            className="hero__subheading"
            transition={{
              duration: ANIMATION_SPEED,
              delay: ANIMATION_SPEED
            }}
            initial={{
              opacity: 0.01,
              y: Y_OFFSET
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
          >
            Apkomatic is dedicated to deliver high quality website solutions.
          </motion.p>
          <Link href="/contact">
            <motion.a
              className="hero__cta btn btn-lg btn-secondary"
              transition={{
                duration: ANIMATION_SPEED,
                delay: ANIMATION_SPEED
              }}
              initial={{
                opacity: 0.01,
                y: 45
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
            >
              Let's Start Building
            </motion.a>
          </Link>
        </div>
        <div className="hero__image">
          <img
            src="/static/hero.svg"
            alt=""
            className="img-fluid animated fadeInUp"
            style={{
              animationDuration: "400ms",
              animationDelay: "1000ms"
            }}
          />
        </div>
      </div>
    </div>
  </>
)
