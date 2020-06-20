/* eslint-disable no-use-before-define */
import React, { useRef, useState } from 'react'
import ReactGA from 'react-ga'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

import { encode, validateEmail, validateName } from '../utils'
import Modal from './shared/Modal'

import './ContactForm.scss'

const CONTACT_FORM_NAME =
  process.env.NODE_ENV === 'production'
    ? 'apkomatic-prod-contact'
    : 'apkomatic-dev-contact'
const MESSAGE_THRESHOLD: number = 400
const INITIAL_REQUEST_STATE = Object.freeze({
  processing: false,
  success: false,
  fail: false
})
const PROCESS_REQUEST_STATE = Object.freeze({
  processing: true,
  success: false,
  fail: false
})
const SUCCESS_REQUEST_STATE = Object.freeze({
  processing: false,
  success: true,
  fail: false
})
const FAIL_REQUEST_STATE = Object.freeze({
  processing: false,
  success: false,
  fail: true
})
const FORM_LABEL_VARIANTS = Object.freeze({
  focused: {
    y: -1
  },
  blurred: {
    y: 16
  }
})
const errorMsgAnimateProps = {
  initial: { y: 5 },
  animate: { y: 0 },
  transition: { type: 'tween', duration: 0.25 }
}

const useInputTouched = () => {
  const [touchedInputs, setTouched] = useState({
    email: false,
    fullName: false,
    message: false
  })
  function handleFocus(e: any) {
    setTouched({ ...touchedInputs, [e.target.name]: true })
  }
  function handleBlur(e: any) {
    setTouched({
      ...touchedInputs,
      [e.target.name]: e.target.value.trim() === '' ? false : true
    })
  }
  return {
    touchedInputs,
    handleFocus,
    handleBlur
  }
}
const ContactForm = () => {
  const [requestState, setRequestState] = useState(INITIAL_REQUEST_STATE)
  const { register, handleSubmit, errors } = useForm()
  const { touchedInputs, handleFocus, handleBlur } = useInputTouched()
  const formNode = useRef(null)

  const processContactRequest = async (data: {
    email: string
    fullName: string
    message?: string
  }) => {
    try {
      setRequestState(PROCESS_REQUEST_STATE)
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode({ 'form-name': CONTACT_FORM_NAME, ...data })
      })
      if (response.ok) {
        setRequestState(SUCCESS_REQUEST_STATE)
        formNode.current.reset()
      } else {
        setRequestState(FAIL_REQUEST_STATE)
      }
      // track submissions
      ReactGA.event({
        category: 'Contact',
        action: 'Submit-Contact-Form'
      })
    } catch (e) {
      setRequestState(FAIL_REQUEST_STATE)
    }
  }

  function resetState() {
    setRequestState(INITIAL_REQUEST_STATE)
    if (formNode) {
      formNode.current.reset()
    }
  }

  return (
    <React.Fragment>
      <Modal showModal={requestState.success} onCloseFn={resetState}>
        <img src="/static/images/message-sent.svg" alt="message sent" />
        <h2>Message Received!</h2>
        <p>
          Thank you for contacting us, we will review your inquiry and respond
          as soon as possible.
        </p>
        <button
          onClick={() => resetState()}
          type="button"
          className="btn btn-primary btn-block"
        >
          Close
        </button>
      </Modal>
      <div id="contact-form">
        {requestState.processing && <div>Processing request...</div>}
        {requestState.fail && (
          <div className="bg-danger py-3 text-center text-light">
            We were unable to process your request, please try again.
          </div>
        )}
        <form
          name={CONTACT_FORM_NAME}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit(processContactRequest)}
          className="contact-form form"
          ref={formNode}
        >
          <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
          <div className="form__section">
            <div className="form__group">
              <motion.label
                variants={FORM_LABEL_VARIANTS}
                initial={touchedInputs.email ? 'focused' : 'blurred'}
                animate={touchedInputs.email ? 'focused' : 'blurred'}
                className="form__label"
                htmlFor="email"
              >
                Email Address
              </motion.label>
              <input
                id="email"
                type="text"
                className={`form__input ${errors.email ? 'error' : ''}`}
                name="email"
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={register({
                  validate: validateEmail
                })}
              />
              {errors.email && (
                <motion.div
                  {...errorMsgAnimateProps}
                  className="form__errormsg"
                >
                  Please enter a valid email
                </motion.div>
              )}
            </div>

            <div className="form__group">
              <motion.label
                variants={FORM_LABEL_VARIANTS}
                initial={touchedInputs.fullName ? 'focused' : 'blurred'}
                animate={touchedInputs.fullName ? 'focused' : 'blurred'}
                className="form__label"
                htmlFor="full-name"
              >
                Name
              </motion.label>
              <input
                id="full-name"
                type="text"
                className={`form__input ${errors.fullName ? 'error' : ''}`}
                name="fullName"
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={register({
                  validate: validateName,
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                })}
              />
              {errors.fullName &&
                (errors.fullName.type === 'minLength' ? (
                  <motion.div
                    {...errorMsgAnimateProps}
                    className="form__errormsg"
                  >
                    {errors.fullName.message}
                  </motion.div>
                ) : (
                  <motion.div
                    {...errorMsgAnimateProps}
                    className="form__errormsg"
                  >
                    Please enter a valid name
                  </motion.div>
                ))}
            </div>
            <div className="form__group mb-3">
              <motion.label
                variants={FORM_LABEL_VARIANTS}
                initial={touchedInputs.message ? 'focused' : 'blurred'}
                animate={touchedInputs.message ? 'focused' : 'blurred'}
                className="form__label"
                htmlFor="inspirations"
              >
                Message ({MESSAGE_THRESHOLD} characters max)
              </motion.label>
              <textarea
                className={`form__input ${errors.message ? 'error' : ''}`}
                id="inspirations"
                name="message"
                onFocus={handleFocus}
                onBlur={handleBlur}
                rows={9}
                ref={register({
                  maxLength: {
                    value: MESSAGE_THRESHOLD,
                    message: `Please enter no more than ${MESSAGE_THRESHOLD} characters.`
                  }
                })}
              />
              {errors.message && (
                <motion.div
                  {...errorMsgAnimateProps}
                  className="form__errormsg"
                >
                  {errors.message.message}
                </motion.div>
              )}
            </div>
          </div>

          <div className="contact-form__submit-btn-wrapper">
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Send
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default ContactForm
