/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef, useReducer } from "react"
import ReactGA from "react-ga"
import { encode, validateEmail } from "../utils"
import Toast from "./shared/Toast"
import "./ContactForm.scss"

const CONTACT_FORM_NAME =
  process.env.NODE_ENV === "production"
    ? "apkomatic-prod-contact"
    : "apkomatic-dev-contact"
const notificationDelay = 3500
const VALIDATION_MESSAGES = {
  required: "This field is required",
  email: "Please provide a valid email address",
  deadline: "Please choose deadline"
}

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      }
    case "PROCESSING":
      return {
        ...state,
        processing: true
      }
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        processing: false,
        success: true,
        inputs: {
          fullName: "",
          email: "",
          message: ""
        },
        submitSuccess: true,
        submitFail: false
      }
    case "SUBMIT_FAIL":
      return {
        ...state,
        processing: false,
        submitSuccess: false,
        submitFail: true
      }
    default:
      return state
  }
}

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
        fullName: "",
        email: "",
        message: ""
      }
    }
  )

  const formNode = useRef(null)

  const processContactRequest = async () => {
    try {
      setState({
        processing: true
      })
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({ "form-name": CONTACT_FORM_NAME, ...formState.inputs })
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
        category: "Contact",
        action: "Submit-Contact-Form"
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

  if (formState.submitSuccess) {
    return (
      <div
        className="contact-thank-you animated fadeInUp"
        style={{
          animationDuration: "300ms"
        }}
      >
        <img src="/static/contact-success-image.svg" alt="" />
        <p>
          Thank you for contacting us, we will respond to your request within 1
          business day.
        </p>
      </div>
    )
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
          className="contact-form form mt-3"
          ref={formNode}
        >
          <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
          <div className="form-section">
            <div className="form-group">
              <label
                className={`label label--with-hint ${
                  formState.inputs.email ? "label--shift-top" : ""
                }`}
                htmlFor="email"
              >
                Email address <span className="hint">Required</span>
              </label>
              <input
                id="email"
                type="email"
                className={`form-control form-control-lg`}
                name="email"
                value={formState.inputs.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label
                className={`label label--with-hint ${
                  formState.fullName ? "label--shift-top" : ""
                }`}
                htmlFor="full-name"
              >
                Name <span className="hint">Required</span>
              </label>
              <input
                id="full-name"
                type="text"
                className={`form-control form-control-lg`}
                name="fullName"
                value={formState.inputs.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label
                className={`label label--with-hint ${
                  formState.message ? "label--shift-top" : ""
                }`}
                htmlFor="inspirations"
              >
                Message <span className="hint">Optional</span>
              </label>
              <textarea
                className="form-control"
                id="inspirations"
                name="message"
                value={formState.inputs.message}
                onChange={handleInputChange}
                rows={5}
              />
            </div>
          </div>

          <div className="contact-form__submit-btn-wrapper">
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
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
