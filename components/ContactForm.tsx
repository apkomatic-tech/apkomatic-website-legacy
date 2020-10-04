/* eslint-disable no-use-before-define */
import React, { useRef, useState } from 'react'
import ReactGA from 'react-ga'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

import { MESSAGE_THRESHOLD, CONTACT_FORM_NAME } from '../config/global'
import { encode, validateEmail, validateName } from '../utils'
import Modal from './shared/Modal'
import FormLabel from './form/Label'

import './ContactForm.scss'

const requestStates = {
  INITIAL_REQUEST_STATE: {
    processing: false,
    success: false,
    fail: false
  },
  PROCESS_REQUEST_STATE: {
    processing: true,
    success: false,
    fail: false
  },
  SUCCESS_REQUEST_STATE: {
    processing: false,
    success: true,
    fail: false
  },
  FAIL_REQUEST_STATE: {
    processing: false,
    success: false,
    fail: true
  }
}

const errorMsgAnimateProps = {
  initial: { y: 5 },
  animate: { y: 0 },
  transition: { type: 'tween', duration: 0.25 }
}

function useInputTouched(initialValue) {
  const [state, setState] = useState(() => {
    if (typeof initialValue === 'function') {
      return initialValue()
    }

    return initialValue
  })
  function handleFocus(e: any) {
    try {
      setState({ ...state, [e.target.name]: true })
    } catch (ex) {
      console.error(ex)
    }
  }
  function handleBlur(e: any) {
    try {
      setState({
        ...state,
        [e.target.name]: e.target.value.trim() === '' ? false : true
      })
    } catch (ex) {
      console.error(ex)
    }
  }
  function resetTouchedInputs() {
    setState(initialValue)
  }
  return {
    touchedInputs: state,
    handleFocus,
    handleBlur,
    resetTouchedInputs
  }
}

const ContactForm = () => {
  const [requestState, setRequestState] = useState(
    () => requestStates.INITIAL_REQUEST_STATE
  )
  const { register, handleSubmit, errors } = useForm()
  const {
    touchedInputs,
    handleFocus,
    handleBlur,
    resetTouchedInputs
  } = useInputTouched(() => ({
    email: false,
    fullName: false,
    message: false
  }))
  const formNode = useRef(null)

  const [messageCount, setMessageCount] = useState(0)

  const processContactRequest = async (data: {
    email: string
    fullName: string
    message?: string
  }) => {
    try {
      // display processing
      setRequestState(requestStates.PROCESS_REQUEST_STATE)
      // send email request
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode({ 'form-name': CONTACT_FORM_NAME, ...data })
      })
      if (response.ok) {
        setRequestState(requestStates.SUCCESS_REQUEST_STATE)
        formNode.current.reset()
      } else {
        setRequestState(requestStates.FAIL_REQUEST_STATE)
      }
      // track submissions
      ReactGA.event({
        category: 'Contact',
        action: 'Submit-Contact-Form'
      })
    } catch (e) {
      setRequestState(requestStates.FAIL_REQUEST_STATE)
    }
  }

  function resetRequestState() {
    // reset request state to initial
    setRequestState(requestStates.INITIAL_REQUEST_STATE)
  }

  function resetFormState() {
    // reset form state to initial
    if (formNode) {
      formNode.current.reset()
    }
    resetTouchedInputs()
  }

  function CharacterCount({ count, threshold }) {
    const charactersAllowed = threshold - count
    const limitExceeded = charactersAllowed <= 0
    return (
      <div
        className="character-count"
        style={{
          fontSize: '1.2rem',
          color: limitExceeded ? '#b9003e' : 'rgba(0,0,0,.7)',
          fontStyle: 'italic',
          textAlign: 'right'
        }}
      >
        <strong>{charactersAllowed}</strong> of {threshold} characters
      </div>
    )
  }

  return (
    <React.Fragment>
      {/* Display confirmation modal on successul submit */}
      <Modal
        show={requestState.success}
        onOpen={resetFormState}
        onClose={resetRequestState}
        showCloseBtn={true}
        closeBtnText="Dismiss"
      >
        <img src="/static/images/message-sent.svg" alt="message sent" />
        <h2>Message Received!</h2>
        <p>
          Thank you for contacting us, we will review your inquiry and respond
          as soon as possible.
        </p>
      </Modal>
      <div id="contact-form">
        <Modal
          show={requestState.fail}
          onClose={resetRequestState}
          showCloseBtn={true}
          closeBtnText="Dismiss"
        >
          <div className="bg-danger py-3 text-center text-light">
            We were unable to process your request, please try again.
          </div>
        </Modal>
        {requestState.processing && <div>Processing request...</div>}
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
              <FormLabel
                initial={touchedInputs.email ? 'focused' : 'blurred'}
                animate={touchedInputs.email ? 'focused' : 'blurred'}
                htmlFor="email"
              >
                Email Address
              </FormLabel>
              <input
                id="email"
                type="text"
                className={`form__input ${errors.email ? 'error' : ''}`}
                name="email"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={event => {
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Change Email Field',
                    label: event.target.value
                  })
                }}
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
              <FormLabel
                initial={touchedInputs.fullName ? 'focused' : 'blurred'}
                animate={touchedInputs.fullName ? 'focused' : 'blurred'}
                htmlFor="full-name"
              >
                Name
              </FormLabel>
              <input
                id="full-name"
                type="text"
                className={`form__input ${errors.fullName ? 'error' : ''}`}
                name="fullName"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={event => {
                  ReactGA.event({
                    category: 'Contact',
                    action: 'Change Name Field',
                    label: event.target.value
                  })
                }}
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
              <FormLabel
                initial={touchedInputs.message ? 'focused' : 'blurred'}
                animate={touchedInputs.message ? 'focused' : 'blurred'}
                htmlFor="inspirations"
              >
                Message ({MESSAGE_THRESHOLD} characters max)
              </FormLabel>
              <textarea
                className={`form__input ${errors.message ? 'error' : ''}`}
                id="inspirations"
                name="message"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={event => {
                  setMessageCount(event.target.value.length)
                }}
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
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  paddingTop: '.5rem'
                }}
              >
                <CharacterCount
                  count={messageCount}
                  threshold={MESSAGE_THRESHOLD}
                />
              </div>
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
