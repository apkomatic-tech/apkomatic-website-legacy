import React from 'react'
import { motion } from 'framer-motion'

import './Label.scss'

function Label({ className = 'form__label', ...rest }) {
  return (
    <motion.label
      className={className}
      variants={{
        focused: {
          y: 1,
          scale: 0.8
        },
        blurred: {
          y: 16,
          scale: 1
        }
      }}
      {...rest}
    />
  )
}

export default Label
