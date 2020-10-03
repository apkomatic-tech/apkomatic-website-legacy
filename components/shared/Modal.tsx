import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './Modal.scss'
import { node } from 'prop-types'

interface ModalProps {
  show: boolean
  onClose?: () => any
  onOpen?: () => any
  showCloseBtn?: boolean
  closeBtnText?: string
  children: any
}
const backdropVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren'
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
}
const modalVariants = {
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.5,
      stiffness: 180
    }
  },
  hidden: {
    scale: 0
  }
}
export default function Modal({
  onOpen,
  onClose,
  show,
  children,
  showCloseBtn = true,
  closeBtnText = 'Close'
}: ModalProps) {
  useEffect(() => {
    if (onOpen && show) {
      if (typeof onOpen === 'function') {
        onOpen()
      }
    }
  }, [show])
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          key="backdrop"
          className="modal-backdrop"
          variants={backdropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
          onClick={() => {
            if (typeof onClose === 'function') {
              onClose()
            }
          }}
        >
          <motion.section
            key="modal"
            className="modal"
            variants={modalVariants}
          >
            {children}
            {showCloseBtn && (
              <button
                onClick={onClose}
                type="button"
                className="btn btn-primary btn-block"
              >
                {closeBtnText}
              </button>
            )}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
