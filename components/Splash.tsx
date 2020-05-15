import React from 'react'
import { motion } from 'framer-motion'
import './Splash.scss'

type SplashProps = {
  title: string
  text?: string
  splashStyle?: string
}

const Splash = ({
  title,
  text = '',
  splashStyle = 'splash--alt1'
}: SplashProps) => (
  <div className={`splash ${splashStyle}`}>
    <div className="splash__inner">
      <motion.h1
        initial={{
          y: -15,
          skewX: '-16deg'
        }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.25
        }}
        className="splash__title text-center"
      >
        {title}
      </motion.h1>
      {text && (
        <motion.p
          initial={{
            y: 15
          }}
          animate={{
            y: 0
          }}
          transition={{
            duration: 0.25
          }}
          className="lead"
          data-testid="splash-text"
        >
          {text}
        </motion.p>
      )}
    </div>
  </div>
)

export default Splash
