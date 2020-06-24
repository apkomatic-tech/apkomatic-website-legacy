import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './Modal.scss'

interface ModalProps {
  showModal: boolean
  onCloseFn?: () => any
  onEnter?: () => any
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
    opacity: 0
  }
}
const modalVariants = {
  visible: {
    y: 100
  },
  hidden: {
    y: '-100vh'
  }
}
export default function Modal(props: ModalProps) {
  useEffect(() => {
    if (props.onEnter && props.showModal) {
      props.onEnter()
    }
  }, [props.showModal])
  return (
    <AnimatePresence exitBeforeEnter>
      {props.showModal && (
        <motion.div
          key="backdrop"
          className="modal-backdrop"
          variants={backdropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
          onClick={() => {
            if (props.onCloseFn) {
              props.onCloseFn()
            }
          }}
        >
          <motion.section
            key="modal"
            className="modal"
            variants={modalVariants}
          >
            {props.children}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
