/* eslint-disable no-use-before-define */
import React, { useRef, useEffect, useReducer } from 'react'
import ReactGA from 'react-ga'
import { encode } from '../utils'
import './ContactForm.scss'
import { motion } from 'framer-motion'

const CONTACT_FORM_NAME =
  process.env.NODE_ENV === 'production'
    ? 'apkomatic-prod-contact'
    : 'apkomatic-dev-contact'

const ContactForm = () => {
  const [formState, setState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState
    }),
    {
      processing: false,
      submitSuccess: false,
      submitFail: false,
      inputs: {
        fullName: '',
        email: '',
        message: ''
      },
      touched: {
        fullName: false,
        email: false,
        message: false
      }
    }
  )
  const formNode = useRef(null)
  const processContactRequest = async () => {
    try {
      setState({
        processing: true
      })
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode({ 'form-name': CONTACT_FORM_NAME, ...formState.inputs })
      })
      if (response.ok) {
        setState({
          submitSuccess: true,
          submitFail: false,
          processing: false
        })
      } else {
        setState({
          submitSuccess: false,
          submitFail: true,
          processing: false
        })
      }
      // track submissions
      ReactGA.event({
        category: 'Contact',
        action: 'Submit-Contact-Form'
      })
    } catch (e) {
      setState({
        submitSuccess: false,
        submitFail: true,
        processing: false
      })
    }
  }

  function handleInputChange(e) {
    setState({
      inputs: {
        ...formState.inputs,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleInputFocus(e) {
    setState({
      touched: {
        ...formState.touched,
        [e.target.name]: true
      }
    })
  }

  function handleInputBlur(e) {
    setState({
      touched: {
        ...formState.touched,
        [e.target.name]: false
      }
    })
  }

  if (formState.submitSuccess) {
    return (
      <div
        className="contact-thank-you"
        style={{
          animationDuration: '300ms'
        }}
      >
        <img src="/static/contact-success-image.svg" alt="" />
        <p>
          Thank you for contacting us, we will review your inquiry and respond
          as soon as possible.
        </p>
      </div>
    )
  }

  const formLabelVariants = {
    focused: {
      y: 2,
      fontSize: '1.3rem'
    },
    blurred: {
      y: 14,
      fontSize: 'inherit'
    }
  }

  return (
    <React.Fragment>
      <div id="contact-form">
        {formState.processing && <div>Processing request...</div>}
        {formState.submitFail && (
          <div className="bg-danger py-3 text-center text-light">
            We were unable to process your request, please try again.
          </div>
        )}
        {formState.submissionMessage && (
          <div>{formState.submissionMessage}</div>
        )}
        <form
          name={CONTACT_FORM_NAME}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={e => {
            e.preventDefault()
            processContactRequest()
          }}
          className="contact-form form"
          ref={formNode}
        >
          <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
          <div className="form__section">
            <div className="form__group">
              <motion.label
                variants={formLabelVariants}
                initial={
                  formState.inputs.email || formState.touched.email
                    ? 'focused'
                    : 'blurred'
                }
                animate={
                  formState.inputs.email || formState.touched.email
                    ? 'focused'
                    : 'blurred'
                }
                className="form__label"
                htmlFor="email"
              >
                Email Address
              </motion.label>
              <input
                id="email"
                type="email"
                className={`form__input`}
                name="email"
                value={formState.inputs.email}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>

            <div className="form__group">
              <motion.label
                variants={formLabelVariants}
                initial={
                  formState.inputs.fullName || formState.touched.fullName
                    ? 'focused'
                    : 'blurred'
                }
                animate={
                  formState.inputs.fullName || formState.touched.fullName
                    ? 'focused'
                    : 'blurred'
                }
                className="form__label"
                htmlFor="full-name"
              >
                Name
              </motion.label>
              <input
                id="full-name"
                type="text"
                className={`form__input`}
                name="fullName"
                value={formState.inputs.fullName}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>
            <div className="form__group mb-3">
              <motion.label
                variants={formLabelVariants}
                initial={
                  formState.inputs.message || formState.touched.message
                    ? 'focused'
                    : 'blurred'
                }
                animate={
                  formState.inputs.message || formState.touched.message
                    ? 'focused'
                    : 'blurred'
                }
                className="form__label"
                htmlFor="inspirations"
              >
                Message
              </motion.label>
              <textarea
                className="form__input"
                id="inspirations"
                name="message"
                value={formState.inputs.message}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                rows={5}
              />
            </div>
          </div>

          <div className="contact-form__submit-btn-wrapper">
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              disabled={formState.processing}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default ContactForm
